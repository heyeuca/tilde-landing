// The brand wave: the exact outline of the system-font "~" glyph
// (SF Pro, medium weight) that scripts/gen_icon.swift in the Tilde repo
// renders into the app icon — extracted via CoreText so the mark matches
// the icon on every platform, independent of installed fonts.
export default function TildeMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 495.9 151.2"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M372.9 151.2Q340.5 151.2 308.1 142.7Q275.6 134.2 243.9 123.2Q212.2 112.1 181.2 103.7Q150.3 95.2 119.9 95.2Q80.0 95.2 50.2 108.4Q20.4 121.6 0.0 143.0L0.0 48.8Q20.6 28.8 50.6 14.4Q80.6 0.0 123.1 0.0Q155.8 0.0 188.1 8.5Q220.3 16.9 252.0 28.0Q283.7 39.0 314.9 47.5Q346.1 55.9 376.0 55.9Q416.4 55.9 446.0 42.7Q475.6 29.5 495.9 8.2L495.9 102.3Q475.4 122.3 445.6 136.7Q415.7 151.2 372.9 151.2Z"
      />
    </svg>
  );
}
