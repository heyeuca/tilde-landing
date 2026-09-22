// GA4 measurement ID, inlined at build time. Leave unset (the default) to
// build without any analytics script at all.
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export type TrackEvent =
  | "click_app_store"
  | "click_dmg"
  | "copy_brew"
  | "click_github";

/** Fire a GA4 event. No-op when GA isn't loaded (no ID, blocked, SSR). */
export function track(name: TrackEvent, params: Record<string, string> = {}) {
  if (!GA_ID || typeof window === "undefined") return;
  const w = window as Window & { gtag?: (...args: unknown[]) => void };
  w.gtag?.("event", name, params);
}
