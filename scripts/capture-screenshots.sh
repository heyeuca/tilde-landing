#!/bin/zsh
# Regenerates every public/app-*.png from a local Tilde build.
#
# Usage:
#   TILDE_APP=/path/to/Tilde.app ./scripts/capture-screenshots.sh
#
# Requirements: macOS with Screen Recording + Accessibility permission for the
# invoking terminal (window capture, resizing, and the ⌘⇧R keystroke need them).
# Captures are shadowless 2x window PNGs with transparent rounded corners,
# taken from a focused window with the insertion caret suppressed.
set -e
HERE="$(cd "$(dirname "$0")" && pwd)"
DOCS="$HERE/sample-docs"
OUT="$HERE/../public"
APP="${TILDE_APP:?set TILDE_APP to a built Tilde.app}"
TOOLS="$(mktemp -d)"
WINID="$TOOLS/winid"
swiftc -O -o "$WINID" "$HERE/winid.swift"
# Mouse-warp helper: hover over a title bar puts macOS proxy icons and the
# filename chevron into the shot, so park the pointer in the menu-bar corner.
cat > "$TOOLS/mousewarp.swift" <<'SWIFT'
import CoreGraphics
let bounds = CGDisplayBounds(CGMainDisplayID())
CGWarpMouseCursorPosition(CGPoint(x: bounds.maxX - 2, y: bounds.minY + 2))
SWIFT
MOUSEWARP="$TOOLS/mousewarp"
swiftc -O -o "$MOUSEWARP" "$TOOLS/mousewarp.swift"

# Window size for every shot (pt). 2x capture → 1600x1120 px.
# The markdown note is deliberately taller than the window — it clips.
W=800
H=560

# filename|editKey|readerKey — readerKey captures the SAME document again in
# Reader mode (⌘⇧R), so the Markdown and Reader tabs show one file, two views.
SPECS=(
  "notes.md|md-en|reader-en"
  "메모.md|md-ko|reader-ko"
  "ノート.md|md-ja|reader-ja"
  "笔记.md|md-zh|reader-zh"
  "config.yaml|yaml|"
  "hope.txt|txt-en|"
  "서시.txt|txt-ko|"
  "一握の砂.txt|txt-ja|"
  "饮酒.txt|txt-zh|"
  "cjk.md|cjk|"
)

cleanup() {
  pkill -x Tilde 2>/dev/null || true
  defaults write co.euca.Tilde appearance system
  defaults delete co.euca.Tilde NSTextInsertionPointBlinkPeriodOn 2>/dev/null || true
  defaults delete co.euca.Tilde NSTextInsertionPointBlinkPeriodOff 2>/dev/null || true
  defaults delete co.euca.Tilde AppleShowScrollBars 2>/dev/null || true
}
trap cleanup EXIT

# Suppress the insertion caret so captures never catch a mid-blink cursor:
# visible for 0 ms per blink cycle, hidden for ~28 h.
defaults write co.euca.Tilde NSTextInsertionPointBlinkPeriodOn -int 0
defaults write co.euca.Tilde NSTextInsertionPointBlinkPeriodOff -int 100000000
# Content taller than the window would otherwise show a persistent scrollbar
# (AppleShowScrollBars=Automatic acts like Always when a mouse is attached).
defaults write co.euca.Tilde AppleShowScrollBars -string "WhenScrolling"

for THEME in light dark; do
  pkill -x Tilde 2>/dev/null || true
  sleep 1
  defaults write co.euca.Tilde appearance "$THEME"
  # Open every document up front so all windows exist.
  for spec in "${SPECS[@]}"; do
    FILE="${spec%%|*}"
    open -a "$APP" "$DOCS/$FILE"
    sleep 1
  done
  sleep 2
  # Resize every window to the shot frame: focus each document, then resize
  # the front window (resizing by window name is flaky under State Restoration).
  for spec in "${SPECS[@]}"; do
    FILE="${spec%%|*}"
    open -a "$APP" "$DOCS/$FILE"
    sleep 0.6
    # Reposition before resizing: windows cascade on the main display and get
    # their width clamped at its edge. {-1900, 500} lands on the wide secondary
    # display when one exists; on a single-display Mac macOS clamps the window
    # back onto the main screen, so adjust W/H to fit if sizes come out short.
    osascript -e 'tell application "Tilde" to activate' \
              -e 'delay 0.2' \
              -e 'tell application "System Events" to tell process "Tilde" to set position of front window to {-1900, 500}' \
              -e "tell application \"System Events\" to tell process \"Tilde\" to set size of front window to {$W, $H}" || true
  done
  # Park the pointer away from the windows so no hover chrome is captured,
  # and give proxy icons a moment to fade out.
  "$MOUSEWARP"
  sleep 1.5
  for spec in "${SPECS[@]}"; do
    FILE="${spec%%|*}"
    REST="${spec#*|}"; EDIT_KEY="${REST%%|*}"; READER_KEY="${REST#*|}"
    open -a "$APP" "$DOCS/$FILE"   # focus this document's window
    sleep 0.8
    WID=$("$WINID" "$FILE")
    screencapture -o -x -l "$WID" "$OUT/app-$EDIT_KEY-$THEME.png"
    echo "captured app-$EDIT_KEY-$THEME.png (window $WID)"
    if [[ -n "$READER_KEY" ]]; then
      osascript -e 'tell application "Tilde" to activate' \
                -e 'delay 0.3' \
                -e 'tell application "System Events" to tell process "Tilde" to keystroke "r" using {command down, shift down}'
      sleep 1.2
      screencapture -o -x -l "$WID" "$OUT/app-$READER_KEY-$THEME.png"
      echo "captured app-$READER_KEY-$THEME.png (window $WID)"
    fi
  done
done
