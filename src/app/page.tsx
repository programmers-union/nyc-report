import Image from "next/image";
import styles from "./page.module.css";
import NewsArticleComponent from "@/components/NewsArticleComponent ";
import NewsListComponent from "@/components/NewsList";
import NewsBus from "@/components/NewsBus";
import OpinionsLesPlusLues from "@/components/OpinionsLesPlusLues ";

export default function Home() {
  return (
    <div className="container ">
      <NewsArticleComponent />

      <div className="row width-first">
        <div className="col-lg-8">
             <NewsBus
        title="Drones, avions militaires, commandes d'Airbus : le bilan très kaki du Salon du Bourget 2025"
        description="La Suisse est le premier pays à ramener ses taux à zéro, alors que les prix ont commencé à baisser et que la monnaie helvète reste très vigoureuse. Le franc fort, qui fut un rempart contre l'inflation, devient un handicap."
        isPremium={true}
        imageUrl="https://media.lesechos.com/api/v1/images/view/6853c9588995646d4a0f9b39/300x300-webp/0150507298891-web-tete.webp"
      />
      <NewsBus
        title="La Suisse bascule dans les taux zéro"
        description="La 55 e édition du Paris Air Show a fait la part belle aux commandes de drones, aux avions militaires d'Embraer et de Saab mais aussi aux appareils civils d'Airbus. Moins rempli que l'an passé, son carnet de commandes se distingue en l'absence de Boeing."
        isPremium={true}
        imageUrl="https://media.lesechos.com/api/v1/images/view/68557cc2c57cdc96c10cf236/300x300-webp/0150563398367-web-tete.webp"
      />
            <NewsBus
        title="La Suisse bascule dans les taux zéro"
        description="La 55 e édition du Paris Air Show a fait la part belle aux commandes de drones, aux avions militaires d'Embraer et de Saab mais aussi aux appareils civils d'Airbus. Moins rempli que l'an passé, son carnet de commandes se distingue en l'absence de Boeing."
        isPremium={true}
        imageUrl="https://media.lesechos.com/api/v1/images/view/68557cc2c57cdc96c10cf236/300x300-webp/0150563398367-web-tete.webp"
      />
        </div>
        <div className="col-lg-4">
          <OpinionsLesPlusLues/>
        </div>
      </div>
     
    </div>
  );
}
