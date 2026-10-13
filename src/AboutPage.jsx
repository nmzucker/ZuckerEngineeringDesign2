import React from "react";
import SiteHeader from "./SiteHeader.jsx";
import adamHeadShot from "../Images/AdamHeadShot.jpg";
import aboutBanner from "../Images/GreasyCreekCulvert.JPG";

function AboutPage() {
  const basePath = import.meta.env.BASE_URL;

  return (
    <>
      <SiteHeader aboutPage />
      <main className="about-page">
        <section
          className="about-banner"
          style={{ backgroundImage: `url("${aboutBanner}")` }}
          aria-labelledby="about-title"
        >
          <div className="about-banner-shade" />
          <div className="about-banner-content">
            <p className="eyebrow"><span className="eyebrow-dot" /> ZUCKER ENGINEERING &amp; DESIGN</p>
            <h1 id="about-title">About</h1>
          </div>
        </section>

        <section className="engineer-profile section-shell" id="about-profile">
          <div className="section-label">
            <span>ABOUT ZED</span>
            <span>PORTLAND, OREGON</span>
          </div>
          <div className="profile-grid">
            <div className="profile-portrait">
              <img src={adamHeadShot} alt="Adam Zucker, Principal Engineer" />
              <span>ADAM ZUCKER · PRINCIPAL ENGINEER</span>
            </div>

            <div className="profile-content">
              <p className="eyebrow">MEET THE PRINCIPAL ENGINEER</p>
              <h2>Adam Zucker, PE, CWRE</h2>
              <p className="profile-role">Principal Engineer</p>

              <div className="profile-biography">
                <p>
                  Adam has been providing professional engineering and consulting
                  services throughout the Pacific Northwest for over 25 years. He
                  combines a background in natural resources and applied
                  geomorphology with traditional civil engineering to provide
                  thoughtful design-based solutions, particularly in and around
                  sensitive riverine environments.
                </p>
                <p>
                  Adam specializes in navigating floodplain regulations,
                  developing low-impact stormwater approaches, and supporting the
                  design for public spaces. He is also a certified water rights
                  examiner in the State of Oregon. In recent years, Adam has been
                  enjoying the opportunity to provide more support to local
                  community efforts and other non-profit organizations.
                </p>
                <p>
                  While not at work, Adam enjoys traveling and playing games with
                  his family, foraging the forest for mushrooms, and exploring
                  the waterways on his stand-up paddle board.
                </p>
              </div>

              <div className="profile-credentials">
                <div>
                  <h3>Education</h3>
                  <p>
                    B.S. Environmental Engineering and Agriculture &amp; Life
                    Sciences
                    <br />
                    Cornell University
                  </p>
                </div>
                <div>
                  <h3>Licenses</h3>
                  <ul>
                    <li>Professional Engineer (OR #58509, WA #43561)</li>
                    <li>Certified Water Rights Examiner (OR #58509)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-wordmark" href={basePath}>
          ZUCKER ENGINEERING &amp; DESIGN
          <span>WATER RESOURCES · PORTLAND, OREGON</span>
        </a>
        <span>© {new Date().getFullYear()} ZUCKER ENGINEERING &amp; DESIGN. ALL RIGHTS RESERVED.</span>
        <a href={`${basePath}#contact`}>CONTACT</a>
      </footer>
    </>
  );
}

export default AboutPage;
