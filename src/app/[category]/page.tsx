import NewsBus from "@/components/NewsBus";
import politicsData from "../../../public/data/politics.json";
import businessData from "../../../public/data/business.json";
import technologyData from "../../../public/data/technology.json";
import sportsData from "../../../public/data/sports.json";
import scienceData from "../../../public/data/science.json";
import healthData from "../../../public/data/health.json";

type Article = {
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
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
  ];
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
      {/* <h2 className="mb-4 text-capitalize">{category} News</h2> */}
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
          />
        </div>
      ))}
    </div>
  );
}
