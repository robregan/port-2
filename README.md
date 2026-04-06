# Rob Regan — Portfolio

A personal portfolio website showcasing my projects, skills, and experience as a developer. Built with React and deployed on Netlify with continuous deployment via GitHub.

**Live site:** [robregan.dev](https://robregan.dev)

---

## Tech Stack

- **React 17** — component-based UI
- **React Router** — client-side routing
- **EmailJS** — contact form email delivery, no backend required
- **SCSS** — modular styling with variables and mixins
- **AOS** — scroll-driven animations
- **Netlify** — hosting and continuous deployment

---

## Features

- Responsive design across all screen sizes
- Animated scroll reveals throughout
- Masonry portfolio grid with project links
- Functional contact form with inline success message
- Google Maps embed for location context
- Lighthouse scores: Performance 72 · Accessibility 97 · SEO 100

---

## Project Structure

```
src/
├── assets/          # SCSS styles and fonts
├── components/      # Reusable UI components
│   ├── about/
│   ├── contact/
│   ├── header/
│   ├── portfolio/
│   ├── slider/
│   └── footer/
├── views/           # Page-level components
└── App.js
```

---

## Local Development

**Prerequisites:** Node 16, npm

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start dev server
npm run start

# Production build
npm run build
```

> This project requires Node 16 due to legacy dependencies. Use [nvm-windows](https://github.com/coreybutler/nvm-windows) to manage Node versions.

---

## Deployment

Connected to GitHub via Netlify. Every push to `main` triggers an automatic deploy.

Build settings are defined in `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "build"

[build.environment]
  NODE_VERSION = "16"
```

---

## Performance Optimizations

- All images converted to **WebP** format
- Google Fonts consolidated into a single **non-blocking** request
- Duplicate and unused font imports removed from SCSS
- Unused JavaScript imports cleaned up

---

## Author

**Rob Regan**
[robregan.dev](https://robregan.dev) · [GitHub](https://github.com/robregan) · [LinkedIn](https://www.linkedin.com/in/robert-regan-dev/)
