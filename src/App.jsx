import React, { useEffect, useRef, useState } from "react";

const ArrowUpRight = ({ className = "" }) => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M4.5 15.5 15 5m0 0H6m9 0v9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRight = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
    <path
      d="M4.5 12h14m-6-6 6 6-6 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const services = [
  "Low impact stormwater design",
  "Floodplain permitting",
  "Park and trail design support",
  "Stormwater conveyance",
  "No-rise analysis",
  "Site utilities and layout",
  "Fish Passage",
  "Hydraulic modeling",
  "Bioengineering & LWD design",
  "Applied geomorphology",
  "Stream restoration",
  "Bridge scour evaluation",
];

const projects = [
  {
    number: "01 / PLACEHOLDER",
    name: "A place for water to return",
    type: "WATERSHED RESTORATION · LOCATION",
    image:
      "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?auto=format&fit=crop&w=1200&q=85",
    alt: "A quiet stream moving through a green landscape",
    className: "project-image--wide",
  },
  {
    number: "02 / PLACEHOLDER",
    name: "Infrastructure, in balance",
    type: "CIVIL ENGINEERING · LOCATION",
    image:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=85",
    alt: "Ocean water and waves in soft evening light",
    className: "project-image--narrow",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerMode, setHeaderMode] = useState("top");
  const heroRef = useRef(null);
  const previousScrollY = useRef(0);

  useEffect(() => {
    const hero = heroRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!hero) return undefined;

    let frame = 0;
    const updateOnScroll = () => {
      frame = 0;
      const scrollY = window.scrollY;
      const scrollDelta = scrollY - previousScrollY.current;

      if (scrollY <= 10) {
        setHeaderMode("top");
      } else if (scrollDelta > 3) {
        setHeaderMode("hidden");
      } else if (scrollDelta < -3) {
        setHeaderMode("visible");
      }

      if (!reducedMotion.matches) {
        const progress = Math.max(
          0,
          Math.min(1, -hero.getBoundingClientRect().top / hero.offsetHeight),
        );
        hero.style.setProperty("--hero-image-shift", `${progress * 42}px`);
        hero.style.setProperty("--hero-image-scale", `${1 + progress * 0.07}`);
        hero.style.setProperty("--hero-copy-opacity", `${1 - progress * 0.7}`);
      } else {
        hero.style.setProperty("--hero-image-shift", "0px");
        hero.style.setProperty("--hero-image-scale", "1");
        hero.style.setProperty("--hero-copy-opacity", "1");
      }
      previousScrollY.current = scrollY;
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateOnScroll);
    };

    updateOnScroll();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    reducedMotion.addEventListener("change", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      reducedMotion.removeEventListener("change", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-header site-header--${headerMode}`}>
        <a className="wordmark" href="#top" aria-label="Zucker Engineering & Design, home">
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
            ZUCKER ENGINEERING & DESIGN
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
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Start a conversation <ArrowUpRight />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-shell" ref={heroRef}>
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> ZUCKER ENGINEERING & DESIGN · PORTLAND, OREGON</p>
            <h1>
              Solutions-based<br />{" "}
              <em>Environmental Design</em><br />{" "}
              and Support Services
            </h1>
            <div className="hero-bottom">
              <p className="hero-intro">
                Zucker Engineering &amp; Design
              </p>
              <a className="text-link" href="#about">
                Get to know us <ArrowRight />
              </a>
            </div>
          </div>
          <div
            className="hero-image image-placeholder"
            role="img"
            aria-label="Placeholder landscape photograph of a mountain lake"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2200&q=90')",
            }}
          >
            <div className="hero-image-note">
              <span>WATER RESOURCES ENGINEERING</span>
              <span>PORTLAND, OREGON</span>
            </div>
            <div className="hero-image-stamp" aria-hidden="true">
              <span>ENVIRONMENTAL DESIGN</span>
              <span>ENGINEERING &amp; SUPPORT</span>
              <span>✳</span>
            </div>
          </div>
          <div className="hero-index" aria-hidden="true">
            <span>01</span>
            <span className="hero-index-line" />
            <span>SCROLL TO EXPLORE</span>
          </div>
        </section>

        <section className="intro section-shell" id="about">
          <div className="section-label">
            <span>01 — WHO WE ARE</span>
            <span>WATER RESOURCES ENGINEERING · PORTLAND, OREGON</span>
          </div>
          <div className="intro-content">
            <p className="intro-heading">
              Zucker Engineering &amp; Design
            </p>
            <div className="intro-aside">
              <p>
                Zucker Engineering &amp; Design (ZED) is a water resources engineering design firm located in Portland,
                Oregon that focuses on public realm project work. ZED brings a multi-disciplinary skillset that
                incorporates traditional engineering and construction expertise with a background in environmental
                science and permitting. By balancing the needs of both the built and natural environments, ZED is
                well-suited to navigate projects that incorporate sensitive resources through the design and
                permitting processes. Above all, ZED is committed to maintaining professional relationships that are
                guided by integrity, supported by sound technical rigor, and grounded by a deep understanding of
                place.
              </p>
            </div>
          </div>
          <div className="values-row">
            <span>ENGINEERING &amp; CONSTRUCTION</span>
            <span>ENVIRONMENTAL SCIENCE &amp; PERMITTING</span>
            <span>GROUNDED IN PLACE</span>
          </div>
        </section>

        <section className="services section-shell" id="services">
          <div className="section-label">
            <span>02 — WHAT WE DO</span>
            <span>ENVIRONMENTAL DESIGN AND SUPPORT SERVICES</span>
          </div>
          <div className="services-heading">
            <h2>Solutions for<br />built and natural <em>places.</em></h2>
            <p>
              Multidisciplinary water resources engineering, environmental
              design, permitting, and project support.
            </p>
          </div>
          <div className="service-list">
            {services.map((service, index) => (
              <a className="service-item" href="#contact" key={service}>
                <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="service-title">{service}</span>
                <span className="service-arrow"><ArrowUpRight /></span>
              </a>
            ))}
          </div>
        </section>

        <section className="work section-shell" id="work">
          <div className="section-label">
            <span>03 — SELECTED WORK</span>
            <span>A FEW THINGS WE’RE PROUD OF.</span>
          </div>
          <div className="work-heading">
            <h2>Places tell<br />their own <em>stories.</em></h2>
            <a className="text-link" href="#contact">
              See all projects <ArrowRight />
            </a>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <a className={`project-card ${project.className}`} href="#contact" key={project.number}>
                <div className="project-image">
                  <img src={project.image} alt={project.alt} loading="lazy" />
                  <span className="project-open"><ArrowUpRight /></span>
                </div>
                <div className="project-meta">
                  <span>{project.number}</span>
                  <span>{project.type}</span>
                </div>
                <h3>{project.name}</h3>
              </a>
            ))}
          </div>
          <p className="photo-note">PROJECT NAMES, DESCRIPTIONS, AND PHOTOGRAPHY ARE PLACEHOLDERS.</p>
        </section>

        <section className="approach">
          <div className="approach-image image-placeholder" role="img" aria-label="Placeholder photograph of a forested mountain landscape">
            <span>PLACEHOLDER PHOTOGRAPH / YOUR TEAM OR A PROJECT SITE</span>
          </div>
          <div className="approach-content">
            <p className="eyebrow">A THOUGHTFUL WAY FORWARD</p>
            <h2>Big-picture thinkers.<br /><em>Good neighbours.</em></h2>
            <p className="approach-copy">
              PLACEHOLDER — Describe how you collaborate, make decisions, and
              keep projects moving. Make this a simple, human explanation of
              what it feels like to work with your team.
            </p>
            <a className="text-link text-link--light" href="#contact">
              How we work <ArrowRight />
            </a>
            <span className="approach-number">04 / OUR APPROACH</span>
          </div>
        </section>

        <section className="contact section-shell" id="contact">
          <div className="section-label">
            <span>05 — GET IN TOUCH</span>
            <span>GOOD THINGS START WITH A CONVERSATION.</span>
          </div>
          <div className="contact-content">
            <h2>Have a place<br />in <em>mind?</em></h2>
            <div className="contact-aside">
              <p>
                PLACEHOLDER — Tell people what to reach out about and who they
                can contact. Add your preferred contact details below.
              </p>
              <a className="contact-email" href="mailto:hello@example.com">
                hello@example.com <ArrowUpRight />
              </a>
              <p className="contact-details">000.000.0000 · YOUR CITY, REGION</p>
            </div>
          </div>
          <div className="contact-bottom">
            <span>ZUCKER ENGINEERING &amp; DESIGN · PORTLAND, OREGON</span>
            <a href="#top">BACK TO TOP ↑</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-wordmark" href="#top">ZUCKER ENGINEERING &amp; DESIGN<span>WATER RESOURCES · PORTLAND, OREGON</span></a>
        <span>© {new Date().getFullYear()} ZUCKER ENGINEERING &amp; DESIGN. ALL RIGHTS RESERVED.</span>
        <a href="mailto:hello@example.com">SAY HELLO <ArrowUpRight /></a>
      </footer>
    </>
  );
}

export default App;
