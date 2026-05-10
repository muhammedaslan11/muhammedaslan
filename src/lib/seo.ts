import type { Metadata } from "next";

const BASE_URL = "https://muhammedaslan.dev";
const DEFAULT_OG_IMAGE = "/medias/muhammed-ali-aslan.png";

interface PageSEOProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  ogImage = DEFAULT_OG_IMAGE,
  keywords = [],
  noIndex = false,
}: PageSEOProps): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    title,
    description,
    keywords: [
      "Muhammed Ali Aslan",
      "Frontend Developer",
      "React",
      "Next.js",
      ...keywords,
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammed Ali Aslan",
    url: BASE_URL,
    image: `${BASE_URL}${DEFAULT_OG_IMAGE}`,
    jobTitle: "Frontend Developer",
    email: "muhammedaslanwork@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Istanbul",
      addressCountry: "TR",
    },
    sameAs: [
      "https://www.linkedin.com/in/muhammedaaslan/",
      "https://github.com/muhammedaslan11",
      "https://www.instagram.com/muhammedaali/",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Web Development",
    ],
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateArticleSchema({
  title,
  description,
  publishedAt,
  updatedAt,
  slug,
}: {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${BASE_URL}/blog/${slug}`,
    datePublished: publishedAt,
    dateModified: updatedAt ?? publishedAt,
    author: {
      "@type": "Person",
      name: "Muhammed Ali Aslan",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Muhammed Ali Aslan",
      url: BASE_URL,
    },
    image: `${BASE_URL}${DEFAULT_OG_IMAGE}`,
  };
}
