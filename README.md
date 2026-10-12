# Engineering studio website

A responsive, static React website for Zucker Engineering & Design, built with Vite. It features a full-bleed hero image with a subtle scroll-responsive parallax effect. The company profile and service list are provided; project details, photography, and contact details remain placeholders.

## Getting started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Adding your content

- Update project names, descriptions, contact details, and other remaining placeholder copy in `src/App.jsx`.
- Update Adam's profile in `src/AboutPage.jsx`. The About page is available at `/about.html`.
- Replace the sample image URLs in `src/App.jsx` with your own image paths or URLs. Add local images to `public/images/` and reference them as `/images/your-image.jpg`.
- The About page portrait and banner use `Images/AdamHeadShot.jpg` and `Images/GreasyCreekCulvert.JPG`.
- Adjust colors, typography, and layout in `src/style.css`.

The site is a static frontend and does not require a backend or external component library.
