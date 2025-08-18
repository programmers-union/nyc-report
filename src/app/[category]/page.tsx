// File: src/app/[category]/page.tsx
// Next.js App Router — fixes canonical link not rendering
// Notes:
// 1) params should NOT be a Promise; use { params: { category: string } }.
// 2) Don't rely on reading JSON to build metadata; set canonical from params directly.
// 3) Keep metadataBase here AND (recommended) also set it once in src/app/layout.tsx.

import NewsBus from "@/components/NewsBus";
import politicsData from "../../../public/data/politics.json";
import businessData from "../../../public/data/business.json";
import technologyData from "../../../public/data/technology.json";
import sportsData from "../../../public/data/sports.json";
import scienceData from "../../../public/data/science.json";
import healthData from "../../../public/data/health.json";
import entertainmentData from "../../../public/data/entertainment.json";
import educationData from "../../../public/data/education.json";
import type { Metadata } from "next";

// ——— Types ———
export type Article = {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  author: string;
  date?: string;
};

interface PageProps {
  params: {
    category: string;
  };
}

// ——— Static params ———
export async function generateStaticParams() {
  return [
    { category: "politics" },
    { category: "business" },
    { category: "technology" },
    { category: "sports" },
    { category: "science" },
    { category: "health" },
    { category: "entertainment" },
    { category: "education" },
  ];
}

// ——— Metadata (canonical) ———
export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const { category } = params;
  const base = "https://www.nycreport.org"; // recommend also set in root layout

  const capitalized = category.charAt(0).toUpperCase() + category.slice(1);

  // SEO-optimized title/description
  const title = `${capitalized} News - Nyc Report: Global ${capitalized} Headlines`;
  const description = `Get the latest ${capitalized} news on Nyc Report – your global source for politics, business, culture & more. Breaking updates, in-depth analysis & exclusive stories.`;

  const ogImage = `${base}/images/nyc-report-logo.webp`;

  return {
    title,
    description,
    // Setting metadataBase here; also set once in src/app/layout.tsx for global consistency
    metadataBase: new URL(base),
    alternates: {
      // Use absolute or "/path"; with metadataBase either works.
      canonical: `${base}/${category}`,
    },
    openGraph: {
      title,
      description,
      url: `${base}/${category}`, // align trailing slash policy consistently
      siteName: "Nyc Report",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${capitalized} news – Nyc Report`,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@nycreport",
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

// ——— Page ———
export default function CategoryPage({ params }: PageProps) {
  const { category } = params;
  console.log("categorySlug:", category);

  let filteredArticles: Article[] = scienceData as unknown as Article[];

  switch (category) {
    case "technology":
      filteredArticles = technologyData as unknown as Article[];
      break;
    case "sports":
      filteredArticles = sportsData as unknown as Article[];
      break;
    case "business":
      filteredArticles = businessData as unknown as Article[];
      break;
    case "health":
      filteredArticles = healthData as unknown as Article[];
      break;
    case "science":
      filteredArticles = scienceData as unknown as Article[];
      break;
    case "politics":
      filteredArticles = politicsData as unknown as Article[];
      break;
    case "entertainment":
      filteredArticles = entertainmentData as unknown as Article[];
      break;
    case "education":
      filteredArticles = educationData as unknown as Article[];
      break;
    default:
      filteredArticles = [];
      break;
  }

  if (!filteredArticles.length) {
    return (
      <div className="p-4">No articles found for category: {category}</div>
    );
  }

  return (
    <div className="container row width-first">
      {filteredArticles.map((article, index) => (
        <div key={article.slug || `${article.category}-${index}`}>
          <NewsBus
            title={article.title}
            shortdescription={article.shortdescription}
            isPremium={true}
            imageUrl={article.image}
            category={article.category}
            tagLink={`/articles/${article.slug}`}
            tagText="Read More"
            slug={article.slug}
            author={article.author}
          />
        </div>
      ))}
    </div>
  );
}

// ——— Optional (recommended) ———
// In src/app/layout.tsx, set a global metadataBase so relative URLs resolve everywhere:
// export const metadata: Metadata = {
//   metadataBase: new URL("https://www.nycreport.org"),
// };
// Remove any legacy head.tsx files inside routes — they override metadata rendering and can hide the canonical tag.