import {
  APP_STORE_URL,
  content,
  DOWNLOAD_URL,
  GITHUB_URL,
  LANG_HOME,
  LICENSE_URL,
  SITE_URL,
  type Lang,
} from "@/lib/content";

const IN_LANGUAGE: Record<Lang, string> = {
  en: "en",
  ko: "ko",
  ja: "ja",
  zh: "zh-Hans",
};

// schema.org SoftwareApplication for rich results. Rendered per locale so
// name/description match the page; the download and repo URLs are shared.
export default function JsonLd({ lang }: { lang: Lang }) {
  const t = content[lang];
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Tilde",
    headline: t.hero.title,
    description: t.hero.subtitle,
    url: `${SITE_URL}${LANG_HOME[lang]}`,
    inLanguage: IN_LANGUAGE[lang],
    applicationCategory: "DeveloperApplication",
    operatingSystem: "macOS 14+",
    downloadUrl: DOWNLOAD_URL,
    installUrl: APP_STORE_URL || undefined,
    license: LICENSE_URL,
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    screenshot: t.showcase.items.map((it) => `${SITE_URL}/app-${it.id}-light.png`),
    image: `${SITE_URL}/opengraph-image.png`,
    sameAs: [GITHUB_URL, APP_STORE_URL].filter(Boolean),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
