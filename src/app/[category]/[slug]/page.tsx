import politicsData from '../../../../public/data/politics.json';
import businessData from '../../../../public/data/business.json';
import technologyData from '../../../../public/data/technology.json';
import sportsData from '../../../../public/data/sports.json';
import scienceData from '../../../../public/data/science.json';
import healthData from '../../../../public/data/health.json';
import ArticleHero from '@/components/ArticleHero';
import WandaVazquezArticle from '@/components/WandaVazquezArticle';
import { Metadata } from 'next';
import DonaldTrumpArticle from '@/components/DonaldTrump';

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
    slug: string;
  }>;
}

// Generate static parameters for all articles across all categories
export async function generateStaticParams() {
  const allData = [
    { category: 'politics', articles: politicsData },
    { category: 'business', articles: businessData },
    { category: 'technology', articles: technologyData },
    { category: 'sports', articles: sportsData },
    { category: 'science', articles: scienceData },
    { category: 'health', articles: healthData },
  ];

  const params: { category: string; slug: string }[] = [];

  allData.forEach(({ category, articles }) => {
    articles.forEach((article: Article) => {
      params.push({
        category: category,
        slug: article.slug,
      });
    });
  });

  return params;
}

// Generate metadata for each page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;

  let filteredArticles: Article[] = [];

  switch (category) {
    case 'technology':
      filteredArticles = technologyData;
      break;
    case 'sports':
      filteredArticles = sportsData;
      break;
    case 'business':
      filteredArticles = businessData;
      break;
    case 'health':
      filteredArticles = healthData;
      break;
    case 'science':
      filteredArticles = scienceData;
      break;
    case 'politics':
      filteredArticles = politicsData;
      break;
    default:
      break;
  }

  const article = filteredArticles.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }

  const isWandaArticle = slug === 'wanda-vazquez-bribery-case-collapses';
  const siteUrl = 'https://www.nycreport.org'; // Replace with your actual domain
  const currentUrl = `${siteUrl}/${category}/${slug}`;
  const imageUrl = article.image.startsWith('http') ? article.image : `${siteUrl}${article.image}`;

  if (isWandaArticle) {
    return {
      title: 'Wanda Vázquez Bribery Case Collapses – Only Minor Violation Remains',
      description: 'All bribery charges dropped against former PR Gov. Wanda Vázquez; case ends with only a technical campaign finance violation, no corruption proven.',
      keywords: 'Wanda Vázquez, campaign finance violation, charges dropped, Puerto Rico, DOJ, bribery case',
      authors: [{ name: 'Staff Reporter' }],
      openGraph: {
        title: 'Wanda Vázquez Bribery Case Collapses – Only Minor Violation Remains',
        description: 'All bribery charges dropped against former PR Gov. Wanda Vázquez; case ends with only a technical campaign finance violation, no corruption proven.',
        url: currentUrl,
        siteName: 'NYC Report',
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: article.title,
          },
        ],
        locale: 'en_US',
        type: 'article',
        publishedTime: '2025-06-18T00:00:00.000Z',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Wanda Vázquez Bribery Case Collapses – Only Minor Violation Remains',
        description: 'All bribery charges dropped against former PR Gov. Wanda Vázquez; case ends with only a technical campaign finance violation, no corruption proven.',
        images: [imageUrl],
        site: '@nycreport', // Replace with your Twitter handle
        creator: '@nycreport', // Replace with your Twitter handle
      },
      other: {
        // JSON-LD structured data
        'script:ld+json': JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'NewsArticle',
          headline: 'Bribery Case Collapses into Minor Campaign Finance Violation',
          datePublished: '2025-06-18',
          author: {
            '@type': 'Person',
            name: 'Staff Reporter',
          },
          publisher: {
            '@type': 'Organization',
            name: 'NYC Report',
            logo: {
              '@type': 'ImageObject',
              url: `${siteUrl}/logo.png`,
            },
          },
          image: imageUrl,
          alternatives:{
            canonical:
            "https://www.nycreport.org/politics/wanda-vazquez-bribery-case-collapses/"
          },
          articleBody: article.description.substring(0, 160),
          keywords: 'Wanda Vázquez, campaign finance law, DOJ, Puerto Rico, bribery, corruption',
          url: currentUrl,
        }),
      },
    };
  }


  const isTrumpArticle = slug === 'why-mr-donald-trump-is-the-best-president-the-united-states-has-ever-had';
  const siteUrlTrump = 'https://www.nycreport.org'; // Replace with your actual domain
  const currentUrlTrump = `${siteUrl}/${category}/${slug}`;
  const imageUrlTrump = article.image.startsWith('http') ? article.image : `${siteUrl}${article.image}`;

  if (isTrumpArticle) {
    console.log("trumpppppppp")
    return {
      title: 'Donald Trump’s Lasting Impact: 100 Days of American Renewal',
      description: 'Discover how Donald J. Trump’s leadership in his first 100 daysbrought sweeping changes across energy, economy, and global diplomacy.',
      keywords: 'Wanda Vázquez, campaign finance violation, charges dropped, Puerto Rico, DOJ, bribery case',
      authors: [{ name: 'Staff Reporter' }],
      openGraph: {
        title: 'Donald Trump’s Lasting Impact: 100 Days of American Renewal',
        description: 'Discover how Donald J. Trump’s leadership in his first 100 daysbrought sweeping changes across energy, economy, and global diplomacy',
        url: currentUrlTrump,
        siteName: 'NYC Report',
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: article.title,
          },
        ],
        locale: 'en_US',
        type: 'article',
        publishedTime: '2025-06-18T00:00:00.000Z',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Donald Trump’s Lasting Impact: 100 Days of American Renewal',
        description: 'Discover how Donald J. Trump’s leadership in his first 100 daysbrought sweeping changes across energy, economy, and global diplomacy',
        images: [imageUrlTrump],
        site: '@nycreport', // Replace with your Twitter handle
        creator: '@nycreport', // Replace with your Twitter handle
      },
      other: {
        // JSON-LD structured data
        'script:ld+json': JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'NewsArticle',
          headline: 'Donald Trump’s Lasting Impact: 100 Days of American Renewal',
          datePublished: '2025-06-18',
          author: {
            '@type': 'Person',
            name: 'Staff Reporter',
          },
          publisher: {
            '@type': 'Organization',
            name: 'NYC Report',
            logo: {
              '@type': 'ImageObject',
              url: `${siteUrlTrump}/logo.png`,
            },
          },
          image: imageUrl,
          alternatives:{
            canonical:
            "https://www.nycreport.org/politics/why-mr-donald-trump-is-the-best-president-the-united-states-has-ever-had/"
          },
          articleBody: article.description.substring(0, 160),
          keywords: 'Donald Trump best president,Donald Trump achievements, Trump legacy 2024, Trump vs Biden economy, Trump accomplishments list,Trump presidency analysis,rump economic success',
          url: currentUrlTrump,
        }),
      },
    };
  }
  return {
    title: article.title,
    description: article.shortdescription,
    keywords: `${article.category}, news, ${article.title}`,
    authors: [{ name: 'Staff Reporter' }],
    openGraph: {
      title: article.title,
      description: article.shortdescription,
      url: currentUrl,
      siteName: 'NYC Report',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.shortdescription,
      images: [imageUrl],
      site: '@nycreport', // Replace with your Twitter handle
      creator: '@nycreport', // Replace with your Twitter handle
    },
    other: {
      // JSON-LD structured data
      'script:ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: article.title,
        datePublished: new Date().toISOString(),
        author: {
          '@type': 'Person',
          name: 'Staff Reporter',
        },
        publisher: {
          '@type': 'Organization',
          name: 'NYC Report',
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/logo.png`,
          },
        },
        image: imageUrl,
        articleBody: article.shortdescription,
        keywords: `${article.category}, news`,
        url: currentUrl,
      }),
    },
  };
}

export default async function DetailPage({ params }: PageProps) {
  const { category, slug } = await params;

  let filteredArticles: Article[] = [];

  switch (category) {
    case 'technology':
      filteredArticles = technologyData;
      break;
    case 'sports':
      filteredArticles = sportsData;
      break;
    case 'business':
      filteredArticles = businessData;
      break;
    case 'health':
      filteredArticles = healthData;
      break;
    case 'science':
      filteredArticles = scienceData;
      break;
    case 'politics':
      filteredArticles = politicsData;
      break;
    default:
      break;
  }

  const article = filteredArticles.find((item) => item.slug === slug);

  if (!article) {
    return <div className="p-4">No article found for slug: {slug}</div>;
  }

  // Check if this is the Wanda Vázquez article
  if (slug === 'wanda-vazquez-bribery-case-collapses') {
    return <WandaVazquezArticle article={article} />;
  }
  if (slug === 'why-mr-donald-trump-is-the-best-president-the-united-states-has-ever-had'){
    const wandaArticle=politicsData[5]
    return <DonaldTrumpArticle article={article} wandaArticle={wandaArticle}/>
  }

  // Default rendering for other articles
  return (
    <ArticleHero
      title={article.title}
      description={article.description}
      category={article.category}
      image={article.image}
    />
  );
}