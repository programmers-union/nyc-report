import NewsArticleComponent from "@/components/NewsArticleComponent ";
import NewsBus from "@/components/NewsBus";
import OpinionsLesPlusLues from "@/components/OpinionsLesPlusLues ";
import NewsCard from "@/components/NewsCard ";
import NewsSection from "@/components/NewsSection";
import politicsData from '../../public/data/politics.json';
import businessData from '../../public/data/business.json';
import technologyData from '../../public/data/technology.json';
import sportsData from '../../public/data/sports.json';
import scienceData from '../../public/data/science.json'
import healthData from '../../public/data/health.json';
import Script from "next/script";
import { title } from "process";
import CategoryPage from "./[category]/page";

const data1 = [
  {
    id: '01',
    category: 'Opinion',
    title: "Core Scientific Stock Jumps 33% Amid Buyout Talks With CoreWeave"
  },
  {
    id: '02',
    category: 'Opinion',
    title: "Climate inaction or the tragedy of an obsolete mental model"
  },
  {
    id: '03',
    category: 'Opinion',
    title: "Republican Senators Unveil Framework for U.S. Crypto Regulation"
  }
];

const data2=[
  {
    id:'01',
    category:"Opinion",
    title:"A Political Shock in New York, and Democrats Demand Details on Iran Strike"
  },
  {
    id:'02',
    category:"Opinion",
    title:"Suspect Mounted Deadly Firefighter Ambush From a Tree, Sheriff Says"
  },
  {
    id:'03',
    category:"Opinion",
    title:"Victim of Boulder Firebombing Attack Dies of Wounds"
  }
]

export default function Home() {
  return (
    <main>
    <Script
    id="structured-data-webpage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Business,Politics, Technology,Health,Science,Sports",
              description:
                "Stay updated with breaking news, global business insights, and financial strategies. Explore business investments, market trends, and analysis.",
              url: "https://www.nycreport.org/",
              speakable: {
                "@type": "SpeakableSpecification",
                cssSelector: ["h1"],
              },
            },
            null,
            2
          ),
        }}
      />
    
     <Script
        id="structured-data-itemlist"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              url: "https://www.nycreport.org/",
              numberOfItems: 5,
              itemListOrder: "http://schema.org/ItemListOrderAscending",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.nycreport.org/",
              },

           
            },
            null,
            2
          ),
        }}
      />
  
  


    <div className="container py-5">
      <NewsArticleComponent mainArticle={politicsData[0]} />


      <div className="row width-first">
        <div className="col-lg-8">
          <NewsBus
            title={politicsData[1].title}
             shortdescription={politicsData[1].shortdescription ?? ''}
            isPremium={true}
            imageUrl={politicsData[1].image}
            category={politicsData[1].category}
            slug={politicsData[1].slug}
          />
          <NewsBus
            title={businessData[0].title}
            shortdescription={businessData[0].shortdescription ??''}
            isPremium={true}
            imageUrl={businessData[0].image}
            category={businessData[0].category}
            slug={businessData[0].slug}
          />
          <NewsBus
            title={politicsData[2].title}
            shortdescription={politicsData[2].shortdescription ?? ''}
            isPremium={true}
            imageUrl={politicsData[2].image}
            category={politicsData[2].category}
            slug={politicsData[2].slug}
          />
        </div>
        <div className="col-lg-4">
          <OpinionsLesPlusLues opinions={data1} />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 border-end">
          <NewsCard
            image={healthData[0].image}
            imageAlt={healthData[0].slug}
            number="01"
            category={healthData[0].category}
            title={healthData[0].title}
            slug={healthData[0].slug}
          />
        </div>

        <div className="col-lg-3 border-end">
          <NewsCard
            image={healthData[1].image}
            imageAlt={healthData[1].slug}
            number="02"
            category={healthData[1].category}
            title={healthData[1].title  }
            slug={healthData[1].slug}

          />
        </div>
        <div className="col-lg-3 border-end">
          <NewsCard
            image={healthData[2].image}
            imageAlt={healthData[2].slug}
            number="03"
            category={healthData[2].category}
            title={healthData[2].title}
            slug={healthData[2].slug}
          />
        </div>
        {/* <div className="col-lg-3">
                    <NewsCard
            image="https://media.lesechos.com/api/v1/images/view/684c3a32f88ccf399b024be6/300x300-webp/0150343641194-web-tete.webp"
            imageAlt="President Trump"
            number="03"
            source="ZOOM"
            title="Nucléaire : l'Europe face à un défi industriel et financier colossal "
          />
        </div> */}
      </div>
      <div className="row width-first">
        <div className="col-lg-8">
          <NewsBus
            title={politicsData[6].title}
            shortdescription={politicsData[6].shortdescription ?? ''}
            isPremium={true}
            imageUrl={politicsData[6].image}
            category={politicsData[6].category}
            slug={politicsData[6].slug}
          />
          <NewsBus
            title={businessData[1].title}
            shortdescription={businessData[1].shortdescription ?? ''}
            isPremium={true}
            imageUrl={businessData[1].image}
            category={businessData[1].category}
            slug={businessData[1].slug}
          />
          <NewsBus
            title={politicsData[4].title}
            shortdescription={politicsData[4].shortdescription ?? ''}
            isPremium={true}
            imageUrl={politicsData[4].image}
            category={politicsData[4].category}
            slug={politicsData[4].slug}
          />
        </div>
        <div className="col-lg-4">
          <OpinionsLesPlusLues opinions={data2} />
          
        </div>
      </div>

<div className="row border-bottom">
  <div className="col-lg-3 border-end">
 <NewsSection 
  sectionTitle="Technology"
  mainArticle={{
    image: technologyData[0].image,
    imageAlt: technologyData[0].slug,
    category: technologyData[0].category,
    title: technologyData[0].title,
    slug:technologyData[0].slug
    
  }}
  
/>
  </div>
    <div className="col-lg-3 border-end">
 <NewsSection 
  sectionTitle="Technology"
  mainArticle={{
    image: technologyData[1].image,
    imageAlt:technologyData[1].slug,
    category:technologyData[1].category,
    title: technologyData[1].title,
    slug:technologyData[1].slug
    
  }}
 
/>
  </div>
    <div className="col-lg-3 border-end">
 <NewsSection 
  sectionTitle="Technology"
  mainArticle={{
    image: technologyData[2].image,
    imageAlt:technologyData[2].slug,
    category: technologyData[2].category,
    title: technologyData[2].title,
    slug:technologyData[2].slug
    
  }}
 
/>
  </div>
</div>

      <div className="row width-first py-5">
        <div className="col-lg-8">
          <NewsBus
            title={businessData[2].title}
           shortdescription={businessData[2].shortdescription ?? ''}
            isPremium={true}
            imageUrl={businessData[2].image}
            category={businessData[2].category}
            slug={businessData[2].slug}
          />
          <NewsBus
            title={businessData[3].title}
           shortdescription={businessData[3].shortdescription ?? ''}
            isPremium={true}
            imageUrl={businessData[3].image}
            category={businessData[3].category}
            slug={businessData[3].slug}

          />
          <NewsBus
            title={technologyData[0].title}
            shortdescription={technologyData[0].shortdescription ?? ''}
            isPremium={true}
            imageUrl={technologyData[0].image}
            category={technologyData[0].category}
            slug={technologyData[0].slug}

          />
        </div>
        {/* <div className="col-lg-4">
          <OpinionsLesPlusLues />
        </div> */}
      </div>
    <div className="row width-first">
        <div className="col-lg-8">
          <NewsBus
            title={technologyData[1].title}
            shortdescription={technologyData[1].shortdescription ?? ''}
            isPremium={true}
          imageUrl={technologyData[1].image}
          category={technologyData[1].category}
          slug={technologyData[1].slug}
          />
          <NewsBus
            title={technologyData[2].title}
            shortdescription={technologyData[2].shortdescription ?? ''}
            isPremium={true}
            imageUrl={technologyData[2].image}
            category={technologyData[2].category}
            slug={technologyData[2].slug}
          />
          <NewsBus
            title={sportsData[0].title}
            shortdescription={sportsData[0].shortdescription ?? ''}
            isPremium={true}
            imageUrl={sportsData[0].image}
            category={sportsData[0].category}
            slug={sportsData[0].slug}
          />
        </div>

      </div>
            <div className="row">
        <div className="col-lg-3 border-end">
          <NewsCard
            image={politicsData[0].image}
            imageAlt={politicsData[0].slug}
            number="01"
            category={politicsData[0].category}
            title={politicsData[0].title}
            slug={politicsData[0].slug}
          />
        </div>

        <div className="col-lg-3 border-end">
          <NewsCard
            image={politicsData[5].image}
            imageAlt={politicsData[5].slug}
            number="02"
            category={politicsData[5].category}
            title={politicsData[5].title}
            slug={politicsData[5].slug}
          />
        </div>
        <div className="col-lg-3 border-end">
          <NewsCard
            image={politicsData[2].image}
            imageAlt={politicsData[2].slug}
            number="03"
           category={politicsData[2].category}
            title={politicsData[2].title}
            slug={politicsData[2].slug}
          />
        </div>

      </div>
          <div className="row width-first">
        <div className="col-lg-8">
          <NewsBus
            title={sportsData[1].title}
           shortdescription={sportsData[1].shortdescription ?? ''}
            isPremium={true}
            imageUrl={sportsData[1].image}
            category={sportsData[1].category}
            slug={sportsData[1].slug}
          />
          <NewsBus
            title={sportsData[2].title}
            shortdescription={sportsData[2].shortdescription ?? ''}
            isPremium={true}
            imageUrl={sportsData[2].image}
            category={sportsData[2].category}
            slug={sportsData[2].slug}
          />
          <NewsBus
            title={scienceData[0].title}
            shortdescription={scienceData[0].shortdescription ?? ''}
            isPremium={true}
            imageUrl={scienceData[0].image}
            category={scienceData[0].category}
            slug={scienceData[0].slug}
          />
        </div>

      </div>
          <div className="row width-first">
        <div className="col-lg-8">
          <NewsBus
            title={scienceData[4].title}
            shortdescription={scienceData[4].shortdescription ?? ''}
            isPremium={true}
            imageUrl={scienceData[4].image}
            category={scienceData[1].category}
            slug={scienceData[1].slug}
          />
          {/* <NewsBus
            title="La Suisse bascule dans les taux zéro"
            description="La 55 e édition du Paris Air Show a fait la part belle aux commandes de drones, aux avions militaires d'Embraer et de Saab mais aussi aux appareils civils d'Airbus. Moins rempli que l'an passé, son carnet de commandes se distingue en l'absence de Boeing."
            isPremium={true}
            imageUrl="https://media.lesechos.com/api/v1/images/view/68557cc2c57cdc96c10cf236/300x300-webp/0150563398367-web-tete.webp"
          />
          <NewsBus
            title="Pourquoi le bruit de la censure revient aux oreilles de Bayrou"
            description="Socialistes et RN ont de bonnes raisons de voter la censure du gouvernement Bayrou, les premiers sur les retraites, le second sur la programmation énergétique. La tension est remontée subitement cette semaine."
            isPremium={true}
            imageUrl="https://media.lesechos.com/api/v1/images/view/68557e04d651bc86e50f277d/300x300-webp/0150566675881-web-tete.webp"
          /> */}
        </div>

      </div>
      <div className="row border-bottom">
  <div className="col-lg-3 border-end">
 <NewsSection 
  sectionTitle="Science"
  mainArticle={{
    image: scienceData[0].image,
    imageAlt: scienceData[0].slug,
    category: scienceData[0].category,
    title: scienceData[0].title,
    slug:scienceData[0].slug
  
  }}
  
/>
  </div>
    <div className="col-lg-3 border-end">
 <NewsSection 
  sectionTitle="Science"
  mainArticle={{
    image: scienceData[1].image,
    imageAlt:scienceData[1].slug,
    category:scienceData[1].category,
    title:scienceData[1].title,
    slug:scienceData[1].slug
   
  }}
  
/>
  </div>
    <div className="col-lg-3 border-end">
 <NewsSection 
  sectionTitle="Science"
  mainArticle={{
    image: scienceData[3].image,
    imageAlt: scienceData[3].slug,
    category: scienceData[3].category,
    title: scienceData[3].title,
    slug:scienceData[3].slug
    
  }}
 
/>
  </div>
</div>
<div className="row border-bottom py-5">
  <div className="col-lg-3 border-end">
 <NewsSection 
  sectionTitle="Business"
  mainArticle={{
    image: businessData[3].image,
    imageAlt: businessData[3].slug,
    category: businessData[3].category,
    title: businessData[3].title,
    slug:businessData[3].slug
    
  }}

/>
  </div>
    <div className="col-lg-3 border-end">
 <NewsSection 
  sectionTitle="Business"
  mainArticle={{
    image: businessData[2].image,
    imageAlt:businessData[2].slug,
    category:businessData[2].category,
    title: businessData[2].title,
    slug:businessData[2].slug

  }}
  
/>
  </div>
    <div className="col-lg-3 border-end">
 <NewsSection 
  sectionTitle="Business"
  mainArticle={{
     image: businessData[1].image,
    imageAlt:businessData[1].slug,
    category:businessData[1].category,
    title: businessData[1].title,
    slug:businessData[1].slug
   
  }}

/>
  </div>
</div>
    </div>
    
      </main>
        
  );
}

 