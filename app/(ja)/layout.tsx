import type { Metadata, Viewport } from "next";
import "../globals.css";
import { SITE_URL } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tilde — macOSのための小さくて美しいテキストエディタ",
  description:
    "ファイルを開いて、読んで、必要なら一行直して、閉じる。プロジェクトもプラグインもサイドバーもない超軽量テキストエディタ。無料・オープンソース、macOS 14+。",
  alternates: {
    canonical: "/ja/",
    languages: { "x-default": "/", en: "/", ko: "/ko/", ja: "/ja/", zh: "/zh/" },
  },
  openGraph: {
    title: "Tilde — macOSのための小さくて美しいテキストエディタ",
    description:
      "ファイルを開いて、読んで、必要なら一行直して、閉じる。無料・オープンソースのテキストエディタ。",
    url: "/ja/",
    siteName: "Tilde",
    locale: "ja_JP",
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
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
