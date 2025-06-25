import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewsSection = ({ 
  sectionTitle = "IDÉES",
  mainArticle = {
    image: "/api/placeholder/400/300",
    imageAlt: "News image",
    category: "CHRONIQUE",
    title: "Israël-Iran : le retour de l'Amérique, pour le meilleur ou pour le pire ?",
    
  },
  
}) => {
  return (
    <div className="news-section">
      <div className="news-section__container">
        {/* Section Header */}
        <div className="news-section__header">
          <h2 className="news-section__title">{sectionTitle}</h2>
          <div className="news-section__divider"></div>
        </div>

        {/* Main Article with Image */}
        <div className="news-section__main-article">
          <div className="news-section__image-wrapper">
            <img 
              src={mainArticle.image} 
              alt={mainArticle.imageAlt}
              className="news-section__image"
            />
          </div>
          
          <div className="news-section__main-content">
            <span className="news-section__category news-section__category--main">
              {mainArticle.category}
            </span>
            <h3 className="news-section__main-title">
              {mainArticle.title} 
            </h3>
          </div>
        </div>

        {/* Article List */}
        {/* <div className="news-section__article-list">
          {articles.map((article, index) => (
            <div key={index} className="news-section__article-item">
              <span className="news-section__category">
                {article.category}
              </span>
              <h4 className="news-section__article-title">
                {article.title} <span className="news-section__emoji">{article.emoji}</span>
              </h4>
            </div>
          ))}
        </div> */}
      </div>
      
    </div>
  );
};

export default NewsSection;