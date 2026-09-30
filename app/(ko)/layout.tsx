import type { Metadata, Viewport } from "next";
import "../globals.css";
import Analytics from "@/components/Analytics";
import { SITE_URL } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tilde — 작고 아름다운 macOS 텍스트 에디터",
  description:
    "파일을 열어 읽고, 필요하면 한 줄 고친 뒤 닫아요. 프로젝트도 플러그인도 사이드바도 없는 초경량 텍스트 에디터. 무료 오픈소스, macOS 14+.",
  alternates: {
    canonical: "/ko/",
    languages: { "x-default": "/", en: "/", ko: "/ko/", ja: "/ja/", zh: "/zh/" },
  },
  openGraph: {
    title: "Tilde — 작고 아름다운 macOS 텍스트 에디터",
    description:
      "파일을 열어 읽고, 필요하면 한 줄 고친 뒤 닫아요. 무료 오픈소스 텍스트 에디터.",
    url: "/ko/",
    siteName: "Tilde",
    locale: "ko_KR",
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
    <html lang="ko">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
