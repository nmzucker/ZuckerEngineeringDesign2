import React from "react";
import SiteHeader from "./SiteHeader.jsx";
import projectsBanner from "../Images/SAndyStormwter.jpg";
import companyLogo from "../Images/Zucker_logo_color.png";

function ProjectsPage() {
  const basePath = import.meta.env.BASE_URL;

  return (
    <>
      <SiteHeader projectsPage />
      <main className="projects-page">
        <section className="projects-banner" aria-labelledby="projects-title">
          <img
            className="projects-banner-image"
            src={projectsBanner}
            alt="Stormwater landscape in Sandy, Oregon"
          />
          <div className="projects-banner-shade" />
          <div className="projects-banner-content">
            <p className="eyebrow"><span className="eyebrow-dot" /> ZUCKER ENGINEERING &amp; DESIGN</p>
            <h1 id="projects-title">Projects</h1>
          </div>
        </section>

        <section className="projects-content section-shell" aria-label="Selected project work">
          <div className="section-label">
            <span>SELECTED WORK</span>
            <span>PORTLAND, OREGON</span>
          </div>
          <div className="projects-intro">
            <p>
              A selection of water resources and public realm projects supported
              by Zucker Engineering &amp; Design.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-logo" href={basePath} aria-label="Zucker Engineering & Design, home">
          <img src={companyLogo} alt="Zucker Engineering & Design" />
        </a>
        <span>© {new Date().getFullYear()} ZUCKER ENGINEERING &amp; DESIGN. ALL RIGHTS RESERVED.</span>
        <a href={`${basePath}#contact`}>CONTACT</a>
      </footer>
    </>
  );
}

export default ProjectsPage;
