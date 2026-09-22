import type { Metadata, Viewport } from "next";
import "../globals.css";
import Analytics from "@/components/Analytics";
import { SITE_URL } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tilde — 一款小而美的 macOS 文本编辑器",
  description:
    "打开文件，读一读，需要的话改一行，然后关掉。没有项目、没有插件、没有边栏的超轻量文本编辑器。免费开源，macOS 14+。",
  alternates: {
    canonical: "/zh/",
    languages: { "x-default": "/", en: "/", ko: "/ko/", ja: "/ja/", zh: "/zh/" },
  },
  openGraph: {
    title: "Tilde — 一款小而美的 macOS 文本编辑器",
    description:
      "打开文件，读一读，需要的话改一行，然后关掉。免费开源的文本编辑器。",
    url: "/zh/",
    siteName: "Tilde",
    locale: "zh_CN",
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
    <html lang="zh-Hans">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
