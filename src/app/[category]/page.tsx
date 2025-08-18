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
import { promises as fs } from "fs";
import path from "path";

type Article = {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  author:string;
  date?:string;
};

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

// Generate static parameters for all categories
export async function generateStaticParams() {
  return [
    { category: "politics" },
    { category: "business" },
    { category: "technology" },
    { category: "sports" },
    { category: "science" },
    { category: "health" },
    {category:"entertainment"},
    {category:"education"},
    
  ];
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const category = (await params).category;
  const dataPath = path.join(process.cwd(), "src", "data", `${category}.json`);

  let raw: string;
  try {
    raw = await fs.readFile(dataPath, "utf8");
  } catch {
    return {
      title: "The NYC Report - Latest News & Analysis on New York City",
      description: "Your daily source for in-depth news, reports, and analysis covering politics, business, and culture in New York City and beyond. Stay informed with The NYC Report.",
      metadataBase: new URL("https://www.nycreport.org/"),
      robots: { index: true, follow: true },
    };
  }

  let articles: Article[];
  try {
    articles = JSON.parse(raw) as Article[];
  } catch {
    articles = [];
  }

  // sort by date descending and pick the latest article
  // const sorted = articles.slice().sort((a, b) => {
  //   return new Date(b.date).getTime() - new Date(a.date).getTime();
  // });
  // const latest = sorted[0];

  const ogImage =
    "https://www.nycreport.org/images/nyc-report-logo.webp";

  const capitalized = category.charAt(0).toUpperCase() + category.slice(1);

  // SEO-optimized title (55–60 chars)
  const title = `${capitalized} News - Nyc Report: Global ${capitalized} Headlines`;
  // SEO-optimized description (~140–150 chars)
  const description = `Get the latest ${capitalized} news on Nyc Report – your global source for politics, business, culture & more. Breaking updates, in-depth analysis & exclusive stories.`;

  return {
    title,
    description,
    metadataBase: new URL("https://www.nycreport.org"),
    alternates: {
      canonical: `https://www.nycreport.org/${category}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.nycreport.org/${category}`,
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

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  console.log("categorySlug:", category);

  let filteredArticles: Article[] = scienceData;

  switch (category) {
    case "technology":
      filteredArticles = technologyData;
      break;
    case "sports":
      filteredArticles = sportsData;
      break;
    case "business":
      filteredArticles = businessData;
      break;
    case "health":
      filteredArticles = healthData;
      break;
    case "science":
      filteredArticles = scienceData;
      break;
    case "politics":
      filteredArticles = politicsData;
      break;
    case "entertainment":
      filteredArticles=entertainmentData;
      break;
    case "education":
      filteredArticles=educationData;

    default:
      break;
  }

  if (!filteredArticles.length) {
    return (
      <div className="p-4">No articles found for category: {category}</div>
    );
  }

  return (
    <div className="container  row width-first">
      
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
