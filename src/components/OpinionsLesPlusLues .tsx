import React from 'react';

const OpinionsLesPlusLues = () => {
  const opinions = [
    {
      id: '01',
      category: 'CHRONIQUE',
      title: "En France, la politique est en train de couler l'économie 😔"
    },
    {
      id: '02',
      category: 'CHRONIQUE',
      title: "L'inaction climatique ou la tragédie d'un modèle mental obsolète"
    },
    {
      id: '03',
      category: 'CHRONIQUE',
      title: "Stratégie énergétique de la France : pour en finir avec le complexe du bon élève"
    }
  ];

  return (
    <>
      <section className="opinions-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="opinions-title">Opinions Les Plus Lues</h2>
              
              <img 
                src="https://media.lesechos.com/api/v1/images/view/6854f2a11c9e0ae9b202b660/300x200-webp/0150537597024-web-tete.webp"
                alt="French National Assembly building"
                className="opinions-hero-image"
              />
              
              <ul className="opinions-list">
                {opinions.map((opinion) => (
                  <li key={opinion.id} className="opinions-item">
                    <div className="row align-items-start">
                      <div className="col-2 col-md-1 px-2">
                        <div className="opinions-number">{opinion.id}</div>
                      </div>
                      <div className="col-10 col-md-11 px-4">
                        <div className="opinions-category">{opinion.category}</div>
                        <h3 className="opinions-article-title">{opinion.title}</h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OpinionsLesPlusLues;