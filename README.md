# tilde-landing

Landing page for [Tilde](https://github.com/heyeuca/Tilde) — a tiny, beautiful text editor for macOS.

Built with Next.js (App Router, static export). No webfonts, no client-side data fetching, no analytics — the page follows the product's own philosophy: quiet, typographic, monochrome, light/dark via `prefers-color-scheme`.

## Routes

| Route | Language |
| --- | --- |
| `/` | English |
| `/ko/` | Korean |
| `/ja/` | Japanese |
| `/zh/` | Chinese (Simplified) |

Copy for all languages lives in [lib/content.ts](lib/content.ts).

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs a fully static site to `out/` (`output: "export"`), deployable to any static host.

`next build` and `next dev` share `.next/` and corrupt each other when run at
the same time, so the build script refuses to run while this project's dev
server is up — stop `npm run dev` first. (If the dev server ever starts
throwing `Cannot find module './NNN.js'`, delete `.next/` and restart it.)

## Product screenshots

The window shots in `public/app-*.png` are real captures of a local Tilde
build: 14 variations (Markdown + Reader of the same note in EN/KO/JA/ZH,
`config.yaml` highlighting, a public-domain poem as plain text in EN/KO/JA/ZH,
and a trilingual CJK note) × light/dark, shown in the tabbed showcase
([components/ShowcaseTabs.tsx](components/ShowcaseTabs.tsx)).

To regenerate after the app's UI changes:

```bash
TILDE_APP=/path/to/Tilde.app ./scripts/capture-screenshots.sh
```

The script opens the documents in [scripts/sample-docs](scripts/sample-docs),
switches the in-app appearance per theme, toggles Reader with ⌘⇧R where needed,
and captures each window shadowless at 2x (transparent rounded corners
preserved). It needs Screen Recording and Accessibility permission.

## Before deploying

- Replace the `SITE_URL` placeholder in [lib/content.ts](lib/content.ts) with the production domain.
- After Tilde's first GitHub release, consider pointing `DOWNLOAD_URL` at `releases/latest`.
