import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string; // e.g. "/about" or "/products" or "" for homepage
  ogType?: "website" | "article" | "product";
  ogImage?: string;
  schema?: Record<string, any> | Array<Record<string, any>>;
}

const DEFAULT_KEYWORDS = "metal sourcing, wholesale base metals, eco-brass ingots, zinc blocks, refined lead ingots, aluminium extrusion billets, manganese flakes, mica powder, Filizat Metals, Aligarh metal industry, sustainable metallurgy, global metal supply";
const SITE_DOMAIN = "https://filizatmetals.com";

export function SEO({
  title,
  description,
  keywords,
  canonicalPath = "",
  ogType = "website",
  ogImage,
  schema,
}: SEOProps) {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to get or create a head tag
    const getOrCreateMetaTag = (selector: string, attrName: string, attrVal: string): HTMLMetaElement => {
      let element = document.querySelector(selector) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      return element;
    };

    const getOrCreateLinkTag = (rel: string): HTMLLinkElement => {
      let element = document.querySelector(`link[rel='${rel}']`) as HTMLLinkElement;
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      return element;
    };

    // 2. Meta tags
    const descMeta = getOrCreateMetaTag("meta[name='description']", "name", "description");
    descMeta.setAttribute("content", description);

    const keysMeta = getOrCreateMetaTag("meta[name='keywords']", "name", "keywords");
    keysMeta.setAttribute("content", keywords || DEFAULT_KEYWORDS);

    // 3. Canonical link
    const canonicalUrl = `${SITE_DOMAIN}${canonicalPath}`;
    const canonicalLink = getOrCreateLinkTag("canonical");
    canonicalLink.setAttribute("href", canonicalUrl);

    // 4. Open Graph Tags
    const ogTitle = getOrCreateMetaTag("meta[property='og:title']", "property", "og:title");
    ogTitle.setAttribute("content", title);

    const ogDesc = getOrCreateMetaTag("meta[property='og:description']", "property", "og:description");
    ogDesc.setAttribute("content", description);

    const ogTypeMeta = getOrCreateMetaTag("meta[property='og:type']", "property", "og:type");
    ogTypeMeta.setAttribute("content", ogType);

    const ogUrl = getOrCreateMetaTag("meta[property='og:url']", "property", "og:url");
    ogUrl.setAttribute("content", canonicalUrl);

    if (ogImage) {
      const ogImg = getOrCreateMetaTag("meta[property='og:image']", "property", "og:image");
      ogImg.setAttribute("content", ogImage.startsWith("http") ? ogImage : `${SITE_DOMAIN}${ogImage}`);
    }

    // 5. Twitter Card Tags
    const twitterTitle = getOrCreateMetaTag("meta[name='twitter:title']", "name", "twitter:title");
    twitterTitle.setAttribute("content", title);

    const twitterDesc = getOrCreateMetaTag("meta[name='twitter:description']", "name", "twitter:description");
    twitterDesc.setAttribute("content", description);

    if (ogImage) {
      const twitterImg = getOrCreateMetaTag("meta[name='twitter:image']", "name", "twitter:image");
      twitterImg.setAttribute("content", ogImage.startsWith("http") ? ogImage : `${SITE_DOMAIN}${ogImage}`);
    }

    // 6. JSON-LD Dynamic Schema
    let scriptTag = document.getElementById("dynamic-seo-schema") as HTMLScriptElement;
    
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.id = "dynamic-seo-schema";
        scriptTag.type = "application/ld+json";
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    } else {
      if (scriptTag) {
        scriptTag.remove();
      }
    }

    // Cleanup on unmount
    return () => {
      // We don't remove standard meta tags to prevent layout shifting or losing metadata,
      // but we remove the route-specific schema so the next page starts with a clean slate.
      const currentScriptTag = document.getElementById("dynamic-seo-schema");
      if (currentScriptTag) {
        currentScriptTag.remove();
      }
    };
  }, [title, description, keywords, canonicalPath, ogType, ogImage, schema]);

  return null;
}
