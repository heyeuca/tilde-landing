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
    languages: { en: "/", ko: "/ko/", ja: "/ja/", zh: "/zh/" },
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
