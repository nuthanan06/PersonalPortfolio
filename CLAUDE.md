# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Build CSS (one-time):**
```
npx tailwindcss -i ./src/input.css -o ./output.css
```

**Watch CSS (during development):**
```
npx tailwindcss -i ./src/input.css -o ./output.css --watch
```

**Serve locally:** Open `index.html` directly in a browser or use any static file server (e.g., `npx serve .`).

## Architecture

This is a single-page static portfolio website with no build step beyond Tailwind CSS compilation.

**Core files:**
- `index.html` — the entire page structure (navbar, hero name animation, about me, experience timeline, projects container)
- `app.js` — all JavaScript: GSAP intro animation, project data, project rendering/filtering, scroll-triggered animations
- `src/input.css` — Tailwind source with custom component/utility classes
- `output.css` — compiled Tailwind output; this is what `index.html` links to (not `src/input.css`)
- `tailwind.config.js` — Tailwind config with custom colors, fonts, and breakpoints

**Key patterns:**

- **Projects section** is rendered entirely via JS. `app.js` contains a `projects` object (the data), a `renderProjects(year, category)` function that builds HTML strings and injects them into `#projects` div, and `window.filterProjects` exposed globally for inline `onclick` handlers in the generated HTML.
- To add a new project, add an entry to the `projects` object in `app.js`. Featured/top projects are controlled by the `topProjectKeys` array — projects listed there get large feature cards; all others get smaller grid cards.
- **GSAP animations** are used for the hero name letter-by-letter intro sequence and scroll-triggered reveals. ScrollTrigger is loaded via CDN.
- **External libraries** are loaded via CDN in `index.html`: GSAP 3.7.1, ScrollTrigger, tsParticles (slim), Lenis (smooth scroll), Anime.js.

**Custom Tailwind setup:**
- Breakpoints: `mini` (0–690px), `sm` (690–859px), `md` (860px+), `lg` (1400px+), `xl` (1700px+)
- Custom colors: `primary-purple` (#A29CDF), `black` (#05040B)
- Custom font: `font-santoshi` maps to `Satoshi-Variable` (self-hosted in `fonts/`)

**Deployment:** Hosted via GitHub Pages (CNAME file present).
