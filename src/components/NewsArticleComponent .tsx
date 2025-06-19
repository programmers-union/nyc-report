import React from 'react';

const NewsArticleComponent = ({ 
  mainArticle = {
    category: "DÉCRYPTAGE",
    title: "Guerre commerciale : « C'est le moment d'assumer le rapport de force avec Washington »",
    interview: {
      label: "INTERVIEW",
      text: "« Trop dépendant des États-Unis, le Canada veut se rapprocher de l'Europe »"
    },
    image: "https://media.lesechos.com/api/v1/images/view/68538b6f43b10f3edb0e05ae/1280x720-webp/0150511217545-web-tete.webp",
    tags: ["Europe"]
  },
  sidebarTitle = "EN CONTINU",
  sidebarItems = [
    {
      time: "10:30",
      category: "DÉCRYPTAGE",
      title: "La Suisse bascule dans les taux zéro",
      isBreaking: true
    },
    {
      time: "10:15",
      title: "L'agglomération mulhousienne remplace la ZFE par une charte « Air et santé »"
    },
    {
      time: "10:15",
      title: "La communauté d'agglomération de Cergy-Pontoise fait sa révolution du tri"
    },
    {
      time: "10:12",
      title: "Île-de-France Mobilités lance une ligne de covoiturage au plateau de Saclay"
    },
    {
      time: "10:08",
      title: "Le département de Saône-et-Loire va équiper tous ses collèges en vidéoprotection"
    }
  ],
  continueButton = "Toute l'actualité en continu"
}) => {

  return (
    <>


      <div className="component-news-container">
        <div className="container-fluid">
          <div className="row section1-width border-bottom">
            {/* Main Article */}
            <div className="col-lg-8 col-md-7 border-end">
              <div className="component-main-article">
                <img 
                  src={mainArticle.image} 
                  alt="Article" 
                  className="component-article-image"
                />
                
                <div className="mt-3">
                  <span className="component-category-badge">
                    {mainArticle.category}
                  </span>
                  
                  <h1 className="component-article-title">
                    {mainArticle.title}
                  </h1>
                  
                  {mainArticle.interview && (
                    <div className="mb-3">
                      <span className="component-interview-badge">
                        {mainArticle.interview.label}
                      </span>
                      <div className="component-interview-text">
                        {mainArticle.interview.text}
                      </div>
                    </div>
                  )}
                  
                  <div className="component-article-tags">
                    <div className="component-user-icon">
                      👤
                    </div>
                    {mainArticle.tags && mainArticle.tags.map((tag, index) => (
                      <a key={index} href="#" className="component-tag">
                        {tag}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="col-lg-4 col-md-5">
              <div className="component-sidebar">
                <h2 className="component-sidebar-title">
                  {sidebarTitle}
                </h2>
                
                {sidebarItems.map((item, index) => (
                  <div key={index} className="component-sidebar-item">
                    <div className="component-sidebar-meta">
                      <span className="component-sidebar-time">
                        {item.time}
                      </span>
                      {item.category && (
                        <span className="component-sidebar-category">
                          {item.category}
                        </span>
                      )}
                      {item.isBreaking && (
                        <span className="component-breaking-icon">⚡</span>
                      )}
                    </div>
                    <div className="component-sidebar-title-text">
                      {item.title}
                    </div>
                  </div>
                ))}
                
                <button className="component-continue-btn">
                  {continueButton}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsArticleComponent;