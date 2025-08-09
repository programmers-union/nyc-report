"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LesEchosHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

const stockData = [
  { name: "CAC 40", value: "7,656.12", change: "-0.36%", changeType: "negative" },
  { name: "Dow Jones", value: "42,171.68", change: "-0.10%", changeType: "negative" },
  { name: "Nasdaq Composite", value: "19,546.27", change: "+0.13%", changeType: "positive" },
  { name: "Nikkei 225", value: "38,885.15", change: "+0.90%", changeType: "positive" },
  { name: "Brent Crude Oil", value: "76.48", change: "+0.53%", changeType: "positive" },
];


  const navItems = [
    { label: "Business", slug: "business" },
    { label: "Technology", slug: "technology" },
    { label: "Sports", slug: "sports" },
    { label: "Health", slug: "health" },
    { label: "Science", slug: "science" },
    { label: "Politics", slug: "politics" },
    {label:"Entertainment",slug:"entertainment"},
    {label:"Education",slug:"education"}
  ];

  return (
    <>
      <header className="section-header border-bottom">
        {/* Stock Ticker */}
        <div className="section-stock-ticker">
          <div className="container-fluid">
            <div className="d-flex">
              {stockData.map((stock, index) => (
                <div key={index} className="section-stock-item d-flex align-items-center">
                  <span className="me-2">{stock.name}</span>
                  <span className="me-1">{stock.value}</span>
                  <span className={`section-stock-${stock.changeType}`}>{stock.change}</span>
                </div>
              ))}
              <div className="ms-auto">
                <a href="#"title="voir" className="text-decoration-none text-muted" style={{ fontSize: "12px" }}>
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
                <button className="section-hamburger me-3" title="Toggle Menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  ☰
                </button>
                <div className="position-relative">
                  <input type="text" className="section-search-box" placeholder="Search" />
                  <span className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted">🔍</span>
                </div>
              </div>

              {/* Center - Logo */}
              <div className="col-md-4 text-center">
                <a href="/" className="section-logo" title="section-logo">NYC REPORT</a>
                <h1 className="text-center text-muted fw-light fst-italic fs-6 border-bottom mt-3 mb-4">
  NYC Report – Independent, In-Depth Journalism
</h1>
              </div>

              {/* Right side - Subscribe */}
              <div className="col-md-2 d-flex align-items-center justify-content-end">
                <button className="section-btn-subscribe">Subscribe</button>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="section-mobile-layout d-md-none">
              <div className="section-mobile-left">
                <button className="section-btn-subscribe">Subscribe</button>
              </div>
              <div className="section-mobile-center">
                <a href="/" className="section-logo" title="section-logo">NYC REPORT</a>
              </div>
              <div className="section-mobile-right">
                <button className="section-icon-btn" title="search">🔍</button>
                {/* <button className="section-hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button> */}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="section-nav-desktop d-none d-md-block">
          <div className="container-fluid">
            <div className="d-flex align-items-center py-2 navItems">
              {navItems.map((item) => {
                const href = `/${item.slug}`;
                const isActive = pathname === href;
                return (
                  <Link
                    key={item.slug}
                    href={href}
                    className={`section-nav-item ${isActive ? "active" : ""}`}
                    title={item.label}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Navigation - Mobile Scroll */}
        <nav className="section-mobile-nav-scroll d-md-none">
          <div className="container-fluid">
            <div className="d-flex">
              {navItems.map((item) => {
                const href = `/${item.slug}`;

                const isActive = pathname === href;
                return (
                  <Link
                    key={item.slug}
                    href={href}
                    className={`section-nav-item ${isActive ? "active" : ""}`}
                    title={item.label}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Panel */}
        <nav className={`section-nav-mobile ${isMenuOpen ? "show" : ""}`}>
          <div className="container-fluid">
            {navItems.map((item) => {
              const href = `/category/${item.slug}`;
              const isActive = pathname === href;
              return (
                <Link
                  key={item.slug}
                  href={href}
                  className={`section-nav-item ${isActive ? "active" : ""}`}
                  title={item.label}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </header>
    </>
  );
};

export default LesEchosHeader;
