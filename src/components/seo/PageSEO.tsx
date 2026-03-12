import { useEffect } from "react";

const SITE_NAME = "Destinykers Technologies";
const SITE_URL = "https://destinykers.co.ke";
const DEFAULT_IMAGE = `${SITE_URL}/placeholder.svg`;

type StructuredData = Record<string, unknown> | Array<Record<string, unknown>>;

interface PageSEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  robots?: string;
  type?: "website" | "article";
  structuredData?: StructuredData;
}

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

export function PageSEO({
  title,
  description,
  path,
  image,
  keywords,
  robots = "index, follow",
  type = "website",
  structuredData,
}: PageSEOProps) {
  useEffect(() => {
    const runtimeOrigin = window.location.origin.includes("localhost") ? SITE_URL : window.location.origin;
    const canonicalUrl = new URL(path || window.location.pathname, runtimeOrigin).toString();
    const pageTitle = `${title} | ${SITE_NAME}`;
    const pageImage = image || DEFAULT_IMAGE;

    document.title = pageTitle;

    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", robots);
    upsertMeta("name", "author", SITE_NAME);

    if (keywords?.length) {
      upsertMeta("name", "keywords", keywords.join(", "));
    }

    upsertMeta("property", "og:title", pageTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", pageImage);
    upsertMeta("property", "og:site_name", SITE_NAME);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", pageTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", pageImage);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    const existingLd = document.head.querySelector<HTMLScriptElement>("#page-structured-data");
    if (existingLd) {
      existingLd.remove();
    }

    if (structuredData) {
      const script = document.createElement("script");
      script.id = "page-structured-data";
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [title, description, path, image, keywords, robots, type, structuredData]);

  return null;
}
