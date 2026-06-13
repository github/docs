# 🌅 Bloom Hour Mirage

> Portfolio & showcase site — Daredream Studios creative work

**Kanban Board:** Add all issues below to the *Bloom Hour Mirage* GitHub Project  
**Columns:** `Backlog` → `In Progress` → `Review` → `Done`  
**Live URL (after Pages enabled):** `https://dylusive.github.io/docs/`

---

## 🌐 Track 4 — Portfolio / Showcase Site

| # | Task | Priority | Status |
|---|------|----------|--------|
| 1 | Design system & CSS variables | 🔴 High | Backlog |
| 2 | Homepage hero section (animated) | 🔴 High | Backlog |
| 3 | Project gallery with filtering | 🔴 High | Backlog |
| 4 | Interactive demo embeds | 🟡 Med | Backlog |
| 5 | About / bio section | 🟡 Med | Backlog |
| 6 | Contact + social links | 🟡 Med | Backlog |
| 7 | Mobile responsiveness | 🔴 High | Backlog |
| 8 | GitHub Pages deployment | 🔴 High | Backlog |
| 9 | SEO + Open Graph meta tags | 🟢 Low | Backlog |
| 10 | Project case studies (written) | 🟢 Low | Backlog |

---

### Task Details

#### #1 — Design System & CSS Variables
Establish a shared design language used by all portfolio pages.

```css
:root {
  /* Bloom Hour Mirage palette */
  --bg:        #07001a;
  --surface:   #0e0028;
  --border:    #2e0858;
  --pink:      #ff71ce;
  --cyan:      #01cdfe;
  --yellow:    #fffb96;
  --purple:    #b967ff;
  --green:     #05ffa1;
  --font-head: 'Orbitron', sans-serif;
  --font-body: 'Space Grotesk', sans-serif;
}
```

Deliverables:
- [ ] CSS custom properties file (`style/tokens.css`)
- [ ] Typography scale (h1–h4, body, caption)
- [ ] Button + card component styles
- [ ] Shared animated grid background (from datamosh editor)
- [ ] Neon glow utility classes

#### #2 — Homepage Hero Section
The first thing visitors see — needs to be visually stunning.

- Full-viewport animated canvas background (generative particles or audio-reactive)
- "DAREDREAM STUDIOS" heading with neon glow text-shadow
- Animated subtitle (typewriter or glitch-text effect)
- CTA buttons: "View Work" + "Open Datamosh Editor"
- Smooth scroll-down arrow

#### #3 — Project Gallery
Filterable grid of all Daredream Studios tools and art.

Projects to include:
- Datamosh Editor v1 (done — link to GitHub Pages)
- Audio Visualizer (coming soon)
- Generative Art (coming soon)
- Color Grading Tool (coming soon)

Features:
- [ ] Filter pills: `All / Video / Audio / Art / Tools`
- [ ] Card hover: project screenshot + quick description
- [ ] Click → project detail page or live demo
- [ ] Card entry animation (staggered fade-in on scroll)

#### #4 — Interactive Demo Embeds
Let visitors play with tools directly on the portfolio.

- Iframe embed of `datamosh-editor.html` (sandboxed)
- Mini audio visualizer embed (mic-only, auto-start)
- Generative art sketch (runs inline, no controls needed)
- Each embed has a "Open Full Tool" link

#### #5 — About / Bio Section
The creator behind Daredream Studios.

- Profile image + name
- Short bio (2–3 paragraphs)
- Skills/stack tags: `Web Audio API`, `Canvas 2D`, `WebGL`, `HTML/CSS/JS`
- Timeline of notable projects
- Vaporwave aesthetic layout (asymmetric, layered panels)

#### #6 — Contact + Social Links
- Email link (`mailto:`)
- GitHub profile link
- Social media (add your handles)
- "Hire Me" or "Collab?" CTA
- Animated hover effects on all links

#### #7 — Mobile Responsiveness
- All layouts work on 375px–1440px screens
- Touch-friendly tap targets (min 44px)
- Canvas tools gracefully degrade or show screenshot on mobile
- Hamburger nav for small screens

#### #8 — GitHub Pages Deployment
Make the portfolio live.

Steps:
1. Merge PR #1 (datamosh editor) into `main`
2. Go to `github.com/Dylusive/docs` → **Settings** → **Pages**
3. Set Source: `Deploy from branch` → `main` → `/` (root)
4. Click Save — site goes live at `https://dylusive.github.io/docs/`
5. Add a custom domain later if desired (Settings → Pages → Custom Domain)

- [ ] Create `index.html` as portfolio homepage
- [ ] Verify all tool links work after Pages deploy
- [ ] Add `404.html` for broken links

#### #9 — SEO + Open Graph Meta Tags
Help the site get discovered and look good when shared.

```html
<meta property="og:title" content="Daredream Studios">
<meta property="og:description" content="Creative tools for video, audio, and generative art">
<meta property="og:image" content="https://dylusive.github.io/docs/preview.jpg">
<meta property="og:url" content="https://dylusive.github.io/docs/">
<meta name="twitter:card" content="summary_large_image">
```

- [ ] OG image (1200×630 screenshot of datamosh editor)
- [ ] sitemap.xml
- [ ] robots.txt

#### #10 — Project Case Studies
Written documentation for each major tool.

Format for each:
- What problem it solves
- How it works (technical)
- Screenshots / screen recordings
- What's next / v2 plans

---

## 🎯 Milestone: MVP Launch

Everything needed for a public launch:

- [x] Datamosh Editor v1 (code done, PR open)
- [ ] Portfolio homepage (`index.html`)
- [ ] GitHub Pages enabled
- [ ] Project gallery (3+ items)
- [ ] Mobile-responsive layout
- [ ] OG meta tags

**Target:** Ship MVP within 2 weeks of completing PR #1 merge.

---

## 📋 Project Setup Checklist

- [ ] Enable Issues in `dylusive/docs` (Settings → Features → Issues ✓)
- [ ] Create labels: `portfolio`, `bloom-hour-mirage`, `design`, `frontend`, `backlog`, `in-progress`
- [ ] Open one GitHub Issue per task above
- [ ] Add all issues to the **Bloom Hour Mirage** GitHub Project
- [ ] Set up columns: `Backlog` / `In Progress` / `Review` / `Done`
- [ ] Merge PR #1 → then enable GitHub Pages → portfolio goes live
