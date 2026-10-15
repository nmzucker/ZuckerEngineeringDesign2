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

## Publishing on GitHub Pages

The `Deploy static content to Pages` GitHub Actions workflow builds the Vite app
and publishes the generated `dist/` folder. In the repository's GitHub Pages
settings, choose **GitHub Actions** as the build and deployment source. Push
changes to `main` to publish updates; the workflow will deploy each successful
build automatically.

## Adding your content

- Update project names, descriptions, contact details, and other remaining placeholder copy in `src/App.jsx`.
- Update Adam's profile in `src/AboutPage.jsx`. The About page is available at `/about.html`.
- Replace the sample image URLs in `src/App.jsx` with your own image paths or URLs. Add local images to `public/images/` and reference them as `/images/your-image.jpg`.
- The About page portrait and banner use `Images/AdamHeadShot.jpg` and `Images/GreasyCreekCulvert.JPG`.
- The site header uses `Images/Zucker_logo_color.png`, converted from the supplied TIFF for browser support.
- Adjust colors, typography, and layout in `src/style.css`.

The site is a static frontend and does not require a backend or external component library.
