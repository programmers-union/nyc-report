import React from 'react';

const NewsListComponent = ({ 
  mainTitle = "Israël-Iran : cette cyberguerre où tous les coups sont permis",
  newsItems = [
    {
      title: "Septième nuit de bombardements, un hôpital israélien touché",
      hasRedDot: true
    },
    {
      title: "Pour les habitants de Téhéran, l'angoisse du lendemain",
      category: "RÉCIT",
      hasRedDot: true
    },
    {
      title: "Iran-Israël : la peur du vide en cas de chute du régime des mollahs",
      hasRedDot: true
    }
  ],
  image = "https://media.lesechos.com/api/v1/images/view/6853e021f534a230ba07edf5/300x300-webp/0150529817155-web-tete.webp",
  tags = ["Afrique & Moyen-Orient"],
  showBookmark = true
}) => {

  return (
    <>


      <div className="newslist-container">
        <div className="row col-lg-8">
          <h1>checking</h1>
          {/* Main content */}
          <div className="col-md-8">
            <a href="#" className="newslist-main-title">
              {mainTitle}
            </a>
            
            {newsItems.map((item, index) => (
              <div key={index} className="newslist-item">
                {item.category && (
                  <span className="newslist-category">
                    {item.category}
                  </span>
                )}
                <a href="#" className="newslist-item-title">
                  {item.hasRedDot && <span className="newslist-red-dot"></span>}
                  {item.title}
                </a>
              </div>
            ))}
          </div>
          
          {/* Image */}
          <div className="col-md-4">
            <img 
              src={image} 
              alt="News" 
              className="newslist-image"
            />
          </div>
        </div>
        
        {/* Footer */}
        <div className="newslist-footer">
          {showBookmark && (
            <div className="newslist-bookmark">
              <span className="newslist-bookmark-icon">📑</span>
            </div>
          )}
          {tags.map((tag, index) => (
            <a key={index} href="#" className="newslist-tag">
              {tag}
            </a>
            
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsListComponent;