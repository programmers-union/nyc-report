import Image from "next/image";
import styles from "./page.module.css";
import NewsArticleComponent from "@/components/NewsArticleComponent ";
import NewsListComponent from "@/components/NewsList";
import NewsBus from "@/components/NewsBus";

export default function Home() {
  return (
    <div className="container ">
      <NewsArticleComponent />
      <NewsListComponent />
      <NewsBus
        title="La Suisse bascule dans les taux zéro"
        description="La Suisse est le premier pays à ramener ses taux à zéro, alors que les prix ont commencé à baisser et que la monnaie helvète reste très vigoureuse. Le franc fort, qui fut un rempart contre l'inflation, devient un handicap."
        isPremium={true}
        imageUrl="https://media.lesechos.com/api/v1/images/view/6853c9588995646d4a0f9b39/300x300-webp/0150507298891-web-tete.webp"
      />
    </div>
  );
}
