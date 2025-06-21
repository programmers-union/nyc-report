'use client';
import React from 'react';
import Image from 'next/image';

interface NewsBus {
  category?: string;
  title: string;
  isPremium?: boolean;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  tagText?: string;
  tagLink?: string;
}

const NewsBus: React.FC<NewsBus> = ({
  category = 'DÉCRYPTAGE',
  title,
  isPremium = false,
  description,
  imageUrl,
  imageAlt = 'Article Image',
  tagText = 'Marchés financiers',
  tagLink = '#',

  
}) => {
  return (
    <div className=" SwissZeroRateArticle py-4 ">
      <div className=" row align-items-start">
        <div className="col-md-9">
          <p className="SwissZeroRateArticle-category text-danger fw-bold small mb-1">
            {category}
          </p>
          <h3 className="SwissZeroRateArticle-title fw-bold d-flex align-items-center flex-wrap gap-2">
            {title}

          </h3>
          <p className="SwissZeroRateArticle-description text-muted mt-2">{description}</p>
          <a
            href={tagLink}
            className="SwissZeroRateArticle-tag btn btn-light border rounded-pill px-3 py-1 mt-3"
          >
            {tagText}
          </a>
        </div>
        <div className="col-md-3 mt-3 mt-md-0">
          <div className="ratio ratio-1x1">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="SwissZeroRateArticle-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBus;
