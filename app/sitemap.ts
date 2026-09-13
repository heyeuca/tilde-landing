import type { MetadataRoute } from "next";
import { LANG_HOME, SITE_URL, type Lang } from "@/lib/content";

export const dynamic = "force-static";

const langs = Object.keys(LANG_HOME) as Lang[];
const languages = Object.fromEntries(
  langs.map((l) => [l, `${SITE_URL}${LANG_HOME[l]}`]),
);

export default function sitemap(): MetadataRoute.Sitemap {
  return langs.map((l) => ({
    url: `${SITE_URL}${LANG_HOME[l]}`,
    changeFrequency: "monthly",
    priority: l === "en" ? 1 : 0.8,
    alternates: { languages: { ...languages, "x-default": `${SITE_URL}/` } },
  }));
}
