import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="container-fluid">
          <div className="row">
            {/* Left Column - Logo and Social/Apps */}
            <div className="col-lg-3 col-md-12">
              <div className="footer__brand-section">
                {/* Logo */}
                <div className="footer__logo">
                  <h2 className="footer__logo-text">NYC REPORT</h2>
                </div>

                {/* Social Links */}
                <div className="footer__social-links d-flex">
                  <a href="#" className="footer__social-link footer__social-link--linkedin">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="footer__social-link footer__social-link--youtube">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <a href="#" className="footer__social-link footer__social-link--twitter">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="#" className="footer__social-link footer__social-link--facebook">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>

                {/* App Store Buttons */}
                <div className="footer__app-buttons">
                  <a href="#" className="footer__app-button">
                    <div className="footer__app-store-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      <div>
                        <div className="footer__app-text-small">Télécharger dans</div>
                        <div className="footer__app-text-large">l'App Store</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="footer__app-button">
                    <div className="footer__google-play-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      <div>
                        <div className="footer__app-text-small">Disponible sur</div>
                        <div className="footer__app-text-large">Google Play</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Columns - Links */}
            <div className="col-lg-9 col-md-12">
              <div className="row">
                {/* Pratique Column */}
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="footer__section">
                    <h3 className="footer__section-title">Pratique</h3>
                    <ul className="footer__link-list">
                      <li className="footer__link-item"><a href="#" className="footer__link">Aide & Contact</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Signaler un contenu illicite</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Abonnement</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Publicité</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Abonnement presse numérique</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Entités du groupe</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Cookies</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Mentions légales</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Conditions générales et particulières</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Politique de confidentialité</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Charte éthique</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Flux RSS</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Archives</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Plan du site</a></li>
                    </ul>
                  </div>
                </div>

                {/* Services Column */}
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="footer__section">
                    <h3 className="footer__section-title">Services</h3>
                    <ul className="footer__link-list">
                      <li className="footer__link-item"><a href="#" className="footer__link">En continu</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Le journal</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Vidéos</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Mes articles</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Mes secteurs</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Newsletters</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Podcasts</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Infographies</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Théma</a></li>
                    </ul>
                  </div>
                </div>

                {/* Le Groupe Column */}
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="footer__section">
                    <h3 className="footer__section-title">Le Groupe</h3>
                    <ul className="footer__link-list">
                      <li className="footer__link-item"><a href="#" className="footer__link">Les Echos</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Investir</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Entrepreneurs</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Les Echos Week-End</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Série Limitée</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Mieux Vivre Votre Argent</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Planète</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Capital Finance</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Radio Classique</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Connaissance des Arts</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Historia</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">ImaginE</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Les Echos évènements</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Annonces Légales</a></li>
                      <li className="footer__link-item"><a href="#" className="footer__link">Marchés Publics</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer__copyright">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <p className="footer__copyright-text text-center">
               <span className="footer__copyright-highlight">NYC REPORT 2025</span>
              </p>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;