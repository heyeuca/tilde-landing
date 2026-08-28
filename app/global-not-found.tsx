import type { Metadata, Viewport } from "next";
import TildeMark from "@/components/TildeMark";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tilde — Page not found",
  robots: { index: false },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <main className="notfound">
          <TildeMark className="notfound-mark" />
          <h1>Page not found.</h1>
          <p lang="ko">페이지를 찾을 수 없습니다.</p>
          <p lang="ja">ページが見つかりません。</p>
          <p lang="zh-Hans">找不到页面。</p>
          <p className="notfound-link">
            <a href="/">Tilde</a>
          </p>
        </main>
      </body>
    </html>
  );
}
