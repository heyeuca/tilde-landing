import type { Metadata, Viewport } from "next";
import "../globals.css";
import { SITE_URL } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tilde — macOS를 위한 작고 아름다운 텍스트 에디터",
  description:
    "파일을 열고, 읽고, 필요하면 한 줄 고치고, 닫는다. 프로젝트도 플러그인도 사이드바도 없는 초경량 텍스트 에디터. 무료 오픈소스, macOS 14+.",
  alternates: {
    canonical: "/ko/",
    languages: { en: "/", ko: "/ko/", ja: "/ja/", zh: "/zh/" },
  },
  openGraph: {
    title: "Tilde — macOS를 위한 작고 아름다운 텍스트 에디터",
    description:
      "파일을 열고, 읽고, 필요하면 한 줄 고치고, 닫는다. 무료 오픈소스 텍스트 에디터.",
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
      <body>{children}</body>
    </html>
  );
}
