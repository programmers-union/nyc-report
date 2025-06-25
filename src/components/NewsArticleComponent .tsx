'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* ─────────────────────────────────────────────── */
/*  Types                                         */
/* ─────────────────────────────────────────────── */

interface SidebarItem {
  time: string;
  title: string;
  category?: string;
  isBreaking?: boolean;
  slug?: string;           // NEW → lets you link each sidebar article
}

interface NewsArticleProps {
  mainArticle: {
    title: string;
    image: string;
    category?: string;
    description?: string;
    slug: string;          // NEW → required for the main detail link
  };
  sidebarTitle?: string;
  sidebarItems?: SidebarItem[];
  continueButton?: string;
}

/* ─────────────────────────────────────────────── */
/*  Component                                     */
/* ─────────────────────────────────────────────── */

const NewsArticleComponent: React.FC<NewsArticleProps> = ({
  mainArticle,
  sidebarTitle = 'EN CONTINU',
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
  continueButton = "Toute l'actualité en continu",
}) => {
  /* Helper for the main article URL */
  const mainHref = `/${(mainArticle.category ?? '').toLowerCase()}/${mainArticle.slug}`;

  return (
    <div className="component-news-container">
      <div className="container-fluid">
        <div className="row section1-width border-bottom">
          {/* ─── Main Article ─────────────────────────────── */}
          <div className="col-lg-8 col-md-7 border-end">
            <Link href={mainHref} className="text-decoration-none text-reset">
              <div className="component-main-article">
                <img
                  src={mainArticle.image}
                  alt={mainArticle.title}
                  width={1280}
                  height={720}
                  className="component-article-image"
                  
                />

                <div className="mt-3">
                  {mainArticle.category && (
                    <span className="component-category-badge">
                      {mainArticle.category}
                    </span>
                  )}

                  <h1 className="component-article-title">
                    {mainArticle.title}
                  </h1>
                </div>
              </div>
            </Link>
          </div>

          {/* ─── Sidebar ─────────────────────────────────── */}
          <div className="col-lg-4 col-md-5">
            <div className="component-sidebar">
              <h2 className="component-sidebar-title">{sidebarTitle}</h2>

              {sidebarItems.map((item, idx) => {
                const itemHref =
                  item.slug && item.category
                    ? `/${item.category.toLowerCase()}/${item.slug}`
                    : '#'; // fall back to "#" if no slug provided

                return (
                  <Link
                    key={idx}
                    href={itemHref}
                    className="text-reset text-decoration-none"
                  >
                    <div className="component-sidebar-item">
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
                  </Link>
                );
              })}

              <button className="component-continue-btn">
                {continueButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticleComponent;
