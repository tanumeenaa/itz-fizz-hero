# ITZ FIZZ Hero

A scroll-driven hero section built with Next.js, Tailwind CSS and GSAP. A staggered intro plays on load, then the section pins while a car drives across the screen, tied directly to scroll progress.

**Live demo:** https://tanumeenaa.github.io/itz-fizz-hero/

**Repository:** https://github.com/tanumeenaa/itz-fizz-hero

## Features

- Letter-spaced headline with a staggered fade-and-rise intro
- Four impact stats that animate in one by one
- Scroll-scrubbed timeline: the car moves, scales and spins its wheels as you scroll
- Headline spacing and stats react to scroll progress
- Smooth interpolation through ScrollTrigger scrub, not time-based autoplay
- Transform and opacity animations for performance
- Responsive down to 360px wide
- Static export, deployable to GitHub Pages

## Tech Stack

- Next.js (App Router) and React
- Tailwind CSS
- GSAP with ScrollTrigger
- GitHub Actions for deployment

## Project Structure

```
app/
  layout.js        Root layout and metadata
  page.js          Hero followed by a next-section block
  globals.css      Tailwind import and base styles
components/
  Hero.jsx         Hero markup, car SVG, load and scroll timelines
public/
  .nojekyll        Required for GitHub Pages
.github/workflows/
  deploy.yml       Build and deploy workflow
next.config.mjs    Static export and base path
```

## How the Animation Works

1. **Load timeline:** letters rise and fade in with a stagger, then the stats follow one by one, then the car fades in.
2. **Scroll timeline:** ScrollTrigger pins the hero for 2200px of scroll with `scrub: 1.2`. The car travels from left to right, scales up, and the wheels rotate. The headline letter-spacing widens and fades while the stats drift up.
3. **Cleanup:** all animations run inside a `gsap.context` and are reverted on unmount.

## Getting Started

Requires Node.js 20 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

The static site is generated in the `out` directory.

## Deploy to GitHub Pages

1. Create a GitHub repository named `itz-fizz-hero`.
2. Push this project to the `main` branch.
3. Open Settings → Pages and set Source to **GitHub Actions**.
4. The workflow builds the site and deploys the `out` directory on every push to `main`.

The site is served at `https://tanumeenaa.github.io/itz-fizz-hero/`. The base path in `next.config.mjs` must match the repository name, so update `basePath` there if you rename the repo.
