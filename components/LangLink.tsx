"use client";

import type { Lang } from "@/lib/content";

// A language link that remembers the visitor's manual choice, so the
// automatic language redirect on "/" (see app/(en)/layout.tsx) never bounces
// them away from a language they picked on purpose.
export default function LangLink({
  href,
  hreflang,
  className,
  children,
}: {
  href: string;
  hreflang: Lang;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      hrefLang={hreflang}
      lang={hreflang}
      rel="alternate"
      className={className}
      onClick={() => {
        try {
          localStorage.setItem("tilde-lang", hreflang);
        } catch {
          // private mode / storage disabled — the link still navigates
        }
      }}
    >
      {children}
    </a>
  );
}
