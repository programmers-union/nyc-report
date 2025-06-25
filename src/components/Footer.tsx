import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className=" footer bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* Brand & Social */}
          <div className="col-lg-3 mb-4">
            <h4 className="mb-3">NYC REPORT</h4>
            <p className="small">Your trusted source for news across business, technology, sports, health, science, and politics.</p>

            {/* Social Icons */}
            <div className="d-flex gap-3 mt-3">
              <a href="/" className="text-light" aria-label="LinkedIn"><i className="bi bi-linkedin fs-5"></i></a>
              <a href="/" className="text-light" aria-label="YouTube"><i className="bi bi-youtube fs-5"></i></a>
              <a href="/" className="text-light" aria-label="Twitter"><i className="bi bi-twitter fs-5"></i></a>
              <a href="/" className="text-light" aria-label="Facebook"><i className="bi bi-facebook fs-5"></i></a>
            </div>
          </div>

          {/* Categories */}
          <div className="col-lg-9">
            <div className="row">
              {/* Business */}
              <div className="col-md-4 mb-3">
                <h5>Business</h5>
                <ul className="list-unstyled small">
                  <li><a href="/" className="text-light text-decoration-none">Market Trends</a></li>
                  <li><a href="/" className="text-light text-decoration-none">Finance</a></li>
                  <li><a href="/" className="text-light text-decoration-none">Startups</a></li>
                </ul>
              </div>

              {/* Technology */}
              <div className="col-md-4 mb-3">
                <h5>Technology</h5>
                <ul className="list-unstyled small">
                  <li><a href="/" className="text-light text-decoration-none">AI & Innovation</a></li>
                  <li><a href="/" className="text-light text-decoration-none">Software & Apps</a></li>
                  <li><a href="/" className="text-light text-decoration-none">Gadgets</a></li>
                </ul>
              </div>

              {/* Sports */}
              <div className="col-md-4 mb-3">
                <h5>Sports</h5>
                <ul className="list-unstyled small">
                  <li><a href="/" className="text-light text-decoration-none">Latest News</a></li>
                  <li><a href="/" className="text-light text-decoration-none">Events</a></li>
                  <li><a href="/" className="text-light text-decoration-none">Scores</a></li>
                </ul>
              </div>

              {/* Health */}
              <div className="col-md-4 mb-3">
                <h5>Health</h5>
                <ul className="list-unstyled small">
                  <li><a href="/" className="text-light text-decoration-none">Wellness</a></li>
                  <li><a href="/" className="text-light text-decoration-none">Nutrition</a></li>
                  <li><a href="/" className="text-light text-decoration-none">Medical News</a></li>
                </ul>
              </div>

              {/* Science */}
              <div className="col-md-4 mb-3">
                <h5>Science</h5>
                <ul className="list-unstyled small">
                  <li><a href="/" className="text-light text-decoration-none">Space</a></li>
                  <li><a href="/" className="text-light text-decoration-none">Discoveries</a></li>
                  <li><a href="/" className="text-light text-decoration-none">Research</a></li>
                </ul>
              </div>

              {/* Politics */}
              <div className="col-md-4 mb-3">
                <h5>Politics</h5>
                <ul className="list-unstyled small">
                  <li><a href="/" className="text-light text-decoration-none">US Politics</a></li>
                  <li><a href="/" className="text-light text-decoration-none">Global Affairs</a></li>
                  <li><a href="/" className="text-light text-decoration-none">Policy</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        <hr className="border-secondary my-4" />

        <div className="text-center small">
          &copy; {new Date().getFullYear()} <strong>NYC REPORT</strong>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
