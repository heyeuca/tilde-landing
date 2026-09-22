import TrackedLink from "@/components/TrackedLink";
import { APP_STORE_URL, DOWNLOAD_URL, type Content } from "@/lib/content";

/**
 * Primary download CTA(s). While the app is still in App Review
 * (APP_STORE_URL empty) the DMG is the only button; once the URL is set the
 * App Store becomes the primary action and the DMG drops to the secondary
 * outline button. Plain text buttons on purpose: Apple's badge artwork can't
 * be restyled, and the Apple logo can't be used outside the badge.
 */
export default function DownloadActions({
  hero,
  location,
  primaryOnly = false,
}: {
  hero: Content["hero"];
  /** Reported with click events so hero and outro CTAs can be told apart. */
  location: "hero" | "outro";
  /** Render just the leading CTA (used in the outro). */
  primaryOnly?: boolean;
}) {
  if (!APP_STORE_URL) {
    return (
      <TrackedLink
        event="click_dmg"
        location={location}
        className="button button-primary"
        href={DOWNLOAD_URL}
      >
        {hero.download}
      </TrackedLink>
    );
  }

  return (
    <>
      <TrackedLink
        event="click_app_store"
        location={location}
        className="button button-primary"
        href={APP_STORE_URL}
      >
        {hero.appStore}
      </TrackedLink>
      {!primaryOnly && (
        <TrackedLink
          event="click_dmg"
          location={location}
          className="button button-secondary"
          href={DOWNLOAD_URL}
        >
          {hero.download}
        </TrackedLink>
      )}
    </>
  );
}
