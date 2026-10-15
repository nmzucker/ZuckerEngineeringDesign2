import React, { useState } from "react";
import companyLogo from "../Images/Zucker_logo_color.png";

function SiteHeader({ headerMode = "visible", aboutPage = false, projectsPage = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const basePath = import.meta.env.BASE_URL;
  const secondaryPage = aboutPage || projectsPage;
  const sectionLink = (section) => `${secondaryPage ? basePath : ""}#${section}`;

  return (
    <header
      className={`site-header site-header--${headerMode}${secondaryPage ? " site-header--secondary" : ""}`}
    >
      <a className="wordmark" href={basePath} aria-label="Zucker Engineering & Design, home">
        <img className="wordmark-logo" src={companyLogo} alt="Zucker Engineering & Design" />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
      </button>

      <nav
        className={`navigation${menuOpen ? " navigation--open" : ""}`}
        id="primary-navigation"
        aria-label="Main navigation"
      >
        <a href={`${basePath}about.html`} aria-current={aboutPage ? "page" : undefined} onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a href={sectionLink("services")} onClick={() => setMenuOpen(false)}>Services</a>
        <a href={`${basePath}projects.html`} aria-current={projectsPage ? "page" : undefined} onClick={() => setMenuOpen(false)}>
          Projects
        </a>
        <a className="nav-contact" href={sectionLink("contact")} onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </nav>
    </header>
  );
}

export default SiteHeader;
