import { GoogleAnalytics } from "@next/third-parties/google";
import { GA_ID } from "@/lib/analytics";

/** Renders the GA4 loader only when NEXT_PUBLIC_GA_ID is set at build time. */
export default function Analytics() {
  if (!GA_ID) return null;
  return <GoogleAnalytics gaId={GA_ID} />;
}
