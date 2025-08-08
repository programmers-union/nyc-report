import React from 'react';

const TeamPage: React.FC = () => {
  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-10 col-xl-8">
          <div className="text-center mb-4">
            <h1 className="display-4 fw-bold text-dark mb-3">Meet Our Core Team</h1>
            <p className="lead text-muted mb-4">
              News isn't made by algorithms or faceless committees. It's made by people.
            </p>
          </div>
          <div className="bg-light p-4 rounded-3 border-start border-danger border-4">
            <p className="mb-3">
              We are the core team behind <strong>NYCREPORT</strong>. We founded this site because we believe in a different kind of journalism—one that's accountable, independent, and fiercely committed to the truth. With us, there are no layers between the writers and the readers. The bylines below represent the heart, soul, and standards of this publication.
            </p>
            <p className="mb-0 fw-medium">
              When you read an article on NYCREPORT, you know exactly who is responsible for the work.
            </p>
          </div>
        </div>
      </div>

      {/* The Founding Team Section */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-10">
          <h2 className="h3 fw-bold fst-italic mb-4 pb-2 border-bottom border-black">The Founding Team</h2>
          
          {/* Team Members Grid */}
          <div className="row g-4">
            
            {/* Patricia B. Ensor */}
            <div className="col-lg-6 col-xl-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <h3 className="h5 fw-bold text-dark mb-1">Patricia B. Ensor</h3>
                    <p className="text-danger fw-medium mb-0">Founder & Editor-in-Chief</p>
                  </div>
                  <p className="text-muted mb-3 small lh-sm">
                    Patricia believes the name on a publication should be a promise. As our editor, she's also our conscience—the one who asks the tough questions before a story ever goes live. She started this place to do journalism the right way, and she's the one who keeps us honest.
                  </p>
                  <a href="#" className="btn btn-outline-danger btn-sm ">Read Patricia's Articles</a>
                </div>
              </div>
            </div>

            {/* Melvin S. McManus */}
            <div className="col-lg-6 col-xl-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <h3 className="h5 fw-bold text-dark mb-1">Melvin S. McManus</h3>
                    <p className="text-danger fw-medium mb-0">Lead Political & Financial Reporter</p>
                  </div>
                  <p className="text-muted mb-3 small lh-sm">
                    Melvin reads the fine print so you don't have to. He operates on a healthy skepticism of official statements and a firm belief that the real story is usually hidden in the budget. He connects the dots between Washington, Wall Street, and the real world.
                  </p>
                  <a href="#" className="btn btn-outline-danger btn-sm">Read Melvin's Articles</a>
                </div>
              </div>
            </div>

            {/* Karen J. Dolce */}
            <div className="col-lg-6 col-xl-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <h3 className="h5 fw-bold text-dark mb-1">Karen J. Dolce</h3>
                    <p className="text-danger fw-medium mb-0">Culture & Society Correspondent</p>
                  </div>
                  <p className="text-muted mb-3 small lh-sm">
                    While others cover institutions, Karen covers the individuals living in their shadow. She's the one on the ground, finding the single voice that makes a complex issue feel real and human. She believes you can't understand the world without understanding the people in it.
                  </p>
                  <a href="#" className="btn btn-outline-danger btn-sm">Read Karen's Articles</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Staff Section */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-10">
          <div className="bg-secondary text-white p-4 rounded-3">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h3 className="h4 fw-bold mb-2 ">NYCREPORT Staff</h3>
                <p className="fw-medium mb-2">Collective Reporting</p>
                <p className="mb-0 opacity-75">
                  When you see this byline, it means we all jumped in. It's a team effort for breaking news or essential updates where the story is bigger than any single one of us. It represents the collective work of our newsroom, speaking with a unified voice.
                </p>
              </div>
              <div className="col-md-4 text-md-end mt-3 mt-md-0">
                <a href="#" className="btn btn-danger">See all Staff Articles</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Your Voice Section */}
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-8">
          <div className="text-center bg-light p-5 rounded-3">
            <h3 className="h4 fw-bold text-dark mb-3">Add Your Voice</h3>
            <p className="text-muted mb-4">
              We believe great ideas can come from anywhere. While our core team leads the editorial direction, we are always open to pitches from freelance journalists and writers who share our mission.
            </p>
            <p className="mb-4">
              If you have a story that needs to be told, contact us at{' '}
              <a href="mailto:editor@nycreport.org" className="text-decoration-none fw-bold">
                editor@nycreport.org
              </a>
            </p>
            <a href="mailto:editor@nycreport.org" className="btn btn-danger px-4">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;