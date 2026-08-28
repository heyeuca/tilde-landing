#!/bin/sh
# `next build` and `next dev` share .next/ and corrupt each other when run
# at the same time (the dev server starts throwing "Cannot find module
# './NNN.js'"). Refuse to build while this project's dev server is running
# instead of corrupting it silently.
if pgrep -f "$(pwd)/node_modules/.bin/next dev" >/dev/null 2>&1; then
  echo "error: 'npm run dev' is running for this project." >&2
  echo "       Stop it first — next build and next dev share .next/." >&2
  exit 1
fi
exec ./node_modules/.bin/next build
