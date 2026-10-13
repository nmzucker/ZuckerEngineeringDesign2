import React, { useState } from "react";

function SiteHeader({ headerMode = "visible", aboutPage = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const basePath = import.meta.env.BASE_URL;
  const sectionLink = (section) => `${aboutPage ? basePath : ""}#${section}`;

  return (
    <header
      className={`site-header site-header--${headerMode}${aboutPage ? " site-header--about" : ""}`}
    >
      <a className="wordmark" href={basePath} aria-label="Zucker Engineering & Design, home">
        <span className="wordmark-mark" aria-hidden="true">
          <svg viewBox="0 0 36 36" fill="none">
            <path
              d="M5 25.5 17.8 5l13.1 20.5H5Z"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <path d="M11 25.5 18 14l7.4 11.5" stroke="currentColor" strokeWidth="1.4" />
            <path d="M5 30h26" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </span>
        <span className="wordmark-name">
          ZUCKER ENGINEERING &amp; DESIGN
          <span>WATER RESOURCES · PORTLAND, OREGON</span>
        </span>
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
        <a href={sectionLink("work")} onClick={() => setMenuOpen(false)}>Projects</a>
        <a className="nav-contact" href={sectionLink("contact")} onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </nav>
    </header>
  );
}

export default SiteHeader;
