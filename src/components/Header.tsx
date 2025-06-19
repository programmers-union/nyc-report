'use client'

import React, { useState } from 'react';

const LesEchosHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stockData = [
    { name: 'Cac 40', value: '7656,12', change: '-0.36%', changeType: 'negative' },
    { name: 'Dow Jones', value: '42171,68', change: '-0.10%', changeType: 'negative' },
    { name: 'Nasdaq composite', value: '19546,27', change: '+0.13%', changeType: 'positive' },
    { name: 'Nikkei 225', value: '38885,15', change: '+0.90%', changeType: 'positive' },
    { name: 'Pétrole Brent', value: '76,48', change: '+0.53%', changeType: 'positive' }
  ];

  const navItems = [
    'À la une',
    'Idées',
    'Économie',
    'Politique',
    'Entreprises',
    'Finance - Marchés',
    'Bourse',
    'Monde',
    'Tech-Médias',
    'Start-up',
    'Régions',
    'Patrimoine',
    'Travailler mieux',
    'Le Mag W-E'
  ];

  return (
    <>

      
      <header className="section-header  border-bottom">
        {/* Stock Ticker */}
        <div className="section-stock-ticker">
          <div className="container-fluid">
            <div className="d-flex">
              {stockData.map((stock, index) => (
                <div key={index} className="section-stock-item d-flex align-items-center">
                  <span className="me-2">{stock.name}</span>
                  <span className="me-1">{stock.value}</span>
                  <span className={`section-stock-${stock.changeType}`}>
                    {stock.change}
                  </span>
                </div>
              ))}
              <div className="ms-auto">
                <a href="#" className="text-decoration-none text-muted" style={{fontSize: '12px'}}>
                  Voir la bourse sur Investir →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="section-main-header">
          <div className="container-fluid">
            {/* Desktop Layout */}
            <div className="row align-items-center d-none d-md-flex">
              {/* Left side - Menu and Search */}
              <div className="col-md-4 d-flex align-items-center">
                <button 
                  className="section-hamburger me-3"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  ☰
                </button>
                <div className="position-relative">
                  <input 
                    type="text" 
                    className="section-search-box" 
                    placeholder="Recherche"
                  />
                  <span className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted">
                    🔍
                  </span>
                </div>
              </div>

              {/* Center - Logo */}
              <div className="col-md-4 text-center">
                <a href="#" className="section-logo">
                  LesEchos
                </a>
              </div>

              {/* Right side - Icons and Buttons */}
              <div className="col-md-2 d-flex align-items-center justify-content-end">
                <div className="">
                    <button className="section-icon-btn">📊</button>
                <span className="text-muted " style={{fontSize: '11px'}}>continu</span>
                </div>

                <div className="">
                        <button className="section-icon-btn">📰</button>
                          <span className="text-muted me-2" style={{fontSize: '11px'}}>journal</span>
                </div>
                
               <div className="">
                 <button className="section-icon-btn">▶️</button>
                <span className="text-muted me-2" style={{fontSize: '11px'}}>Vidéos</span>
               </div>

               <div className="">
                    <button className="section-icon-btn">📄</button>
                <span className="text-muted " style={{fontSize: '11px'}}>articles</span>
               </div>
                
                
              </div>

              <div className="col-md-2 d-flex align-items-center justify-content-end">
                
                {/* <button className="section-icon-btn">⋯</button> */}
                <button className="section-btn-connect">Se connecter</button>
                <button className="section-btn-subscribe">S'abonner</button>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="section-mobile-layout d-md-none">
              {/* Left side - Subscribe button */}
              <div className="section-mobile-left">
                <button className="section-btn-subscribe">S'abonner</button>
              </div>

              {/* Center - Logo */}
              <div className="section-mobile-center">
                <a href="#" className="section-logo">
                  LesEchos
                </a>
              </div>

              {/* Right side - Search and Menu */}
              <div className="section-mobile-right">
                <button className="section-icon-btn">🔍</button>
                <button 
                  className="section-hamburger"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  ☰
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="section-nav-desktop d-none d-md-block">
          <div className="container-fluid">
            <div className="d-flex align-items-center py-2 navItems">
              {navItems.map((item, index) => (
                <a 
                  key={index}
                  href="#" 
                  className={`section-nav-item ${index === 0 ? 'active' : ''}`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile Scrollable Navigation */}
        <nav className="section-mobile-nav-scroll d-md-none">
          <div className="container-fluid">
            <div className="d-flex">
              {navItems.map((item, index) => (
                <a 
                  key={index}
                  href="#" 
                  className={`section-mobile-nav-item ${index === 0 ? 'active' : ''}`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav className={`section-nav-mobile ${isMenuOpen ? 'show' : ''}`}>
          <div className="container-fluid">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href="#" 
                className={`section-nav-item d-block py-2 ${index === 0 ? 'active' : ''}`}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};

export default LesEchosHeader;