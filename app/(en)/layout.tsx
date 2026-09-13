import type { Metadata, Viewport } from "next";
import "../globals.css";
import { SITE_URL } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tilde — A tiny, beautiful text editor for macOS",
  description:
    "Open the file. Read it. Maybe change a line. Close it. No projects, no plugins, no sidebars. Free and open source, for macOS 14+.",
  alternates: {
    canonical: "/",
    languages: { "x-default": "/", en: "/", ko: "/ko/", ja: "/ja/", zh: "/zh/" },
  },
  openGraph: {
    title: "Tilde — A tiny, beautiful text editor for macOS",
    description:
      "Open the file. Read it. Maybe change a line. Close it. Free and open source.",
    url: "/",
    siteName: "Tilde",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
};

// Runs before paint on "/" only (the default entry point). Sends visitors to
// the localized page that matches their browser/OS language, honoring a
// remembered manual choice (set by LangLink). Never runs on /ko/, /ja/, /zh/,
// so those stay predictable and shareable, and there is no redirect loop.
const LANG_REDIRECT = `(function(){try{if(location.pathname!=="/")return;var m={ko:"/ko/",ja:"/ja/",zh:"/zh/"},t=null,s;try{s=localStorage.getItem("tilde-lang")}catch(e){}if(s){if(s==="en")return;t=m[s]||null}else{var l=navigator.languages||[navigator.language||"en"];for(var i=0;i<l.length;i++){var b=String(l[i]||"").toLowerCase().split("-")[0];if(b==="en")return;if(m[b]){t=m[b];break}}}if(t)location.replace(t)}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script dangerouslySetInnerHTML={{ __html: LANG_REDIRECT }} />
        {children}
      </body>
    </html>
  );
}
