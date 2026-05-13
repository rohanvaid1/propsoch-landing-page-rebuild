# Frontend Engineering Assignment  
## Propsoch Landing Page — Analysis & Rebuild

**Live site analyzed:** https://www.propsoch.com/  
**Tech stack used:** Next.js + TypeScript + Tailwind CSS  
**Assignment timeline:** 2 days

---

## 1. Part 1 — Analysis (Structured)

### 1.1 Lighthouse audit (required 4 scores)

Audit mode used: **mobile**  
Capture date: **2026-05-13**

| Site | Performance | Accessibility | Best Practices | SEO |
| --- | ---: | ---: | ---: | ---: |
| Live site (`https://www.propsoch.com/`) | 63 | 71 | 54 | 100 |
| Rebuild (`http://localhost:3000`) | 100 | 96 | 100 | 100 |

**Screenshot placeholders (add your images in `my-propsoch-rebuild/screenshots/`):**

![Live Lighthouse mobile report](screenshots/01-live-lighthouse-mobile.png)
![Rebuild Lighthouse mobile report](screenshots/02-rebuild-lighthouse-mobile.png)

---

### 1.2 UX/UI issues found (5 required categories)

| Category | Issue observed on live site | Why this hurts UX |
| --- | --- | --- |
| Visual / typography / color | Hero message feels dense and visually competing | Hard to understand the value proposition quickly |
| Spacing & layout | Some sections feel crowded and text heavy | Lower readability and scan speed |
| Mobile responsiveness | Comparison-heavy content is difficult to consume on small screens | Mobile users struggle to compare options |
| Performance | Media-heavy sections can increase first load cost | Slower initial render on weaker networks/devices |
| Accessibility | Structure and contrast cues are not equally strong everywhere | Reduced clarity for keyboard/screen-reader users |

**Issue evidence screenshots (add images):**

![Issue evidence - hero density](screenshots/03-issue-hero-density.png)
![Issue evidence - spacing layout](screenshots/04-issue-spacing-layout.png)
![Issue evidence - mobile comparison](screenshots/05-issue-mobile-responsiveness.png)
![Issue evidence - performance signals](screenshots/06-issue-performance.png)
![Issue evidence - accessibility](screenshots/07-issue-accessibility.png)

---

### 1.3 Proposed fixes (with reason)

| Issue | Fix implemented | Why this fix |
| --- | --- | --- |
| Hero clarity | Redesigned hero with one strong headline, concise subcopy, clear CTAs | Improves first 3-second comprehension |
| Layout density | Consistent spacing scale and cleaner section grouping | Better readability and visual rhythm |
| Mobile comparison readability | Rebuilt comparison section with responsive table and wrapping | Easier decision-making on small screens |
| Image/perf cost | `next/image`, WebP assets, explicit dimensions, responsive sizes, lazy loading | Faster loads and better Core Web Vitals |
| Accessibility support | Semantic headings/sections, table caption, descriptive `alt`, visible focus states | Better keyboard + assistive technology support |

---

## 2. Part 2 — Build

### Implemented sections
1. **Hero section** — fully redesigned.
2. **What makes us different** — rebuilt from original site.
3. **Guided Home Buying** — rebuilt from original site.

### Responsive design
- Mobile-first layout with desktop enhancement.
- Works for narrow and wide viewports.

### Optimized images
- Assets in `public/images/*.webp`.
- Served via Next.js `Image` with proper `sizes`.
- Hero image prioritized; non-critical images lazy loaded.

**Rebuild screenshots (add images):**

![Rebuild hero desktop](screenshots/08-rebuild-hero-desktop.png)
![Rebuild comparison section desktop](screenshots/09-rebuild-comparison-desktop.png)
![Rebuild guided section desktop](screenshots/10-rebuild-guided-desktop.png)
![Rebuild mobile full page](screenshots/11-rebuild-mobile-fullpage.png)

---

## 3. Part 3 — README requirements

### What improved and why
- Major visual hierarchy improvement in hero section.
- Better readability/scannability for comparison and guided sections.
- Strong responsiveness and image optimization for performance.
- Accessibility improvements in semantics and focus behavior.

### Tech decisions
- **Next.js:** routing + image optimization + production build workflow.
- **TypeScript:** safer, maintainable code.
- **Tailwind CSS:** fast, consistent responsive UI implementation.

### Setup
```bash
npm install
npm run dev
```

Production:
```bash
npm run build
npm run start
```

---

## 4. Exactly which screenshots are required (and where to place them)

Put all images in: **`my-propsoch-rebuild/screenshots/`**

| File name to add | What to capture | Used in section |
| --- | --- | --- |
| `01-live-lighthouse-mobile.png` | Lighthouse report (live site mobile) showing all 4 category scores | 1.1 |
| `02-rebuild-lighthouse-mobile.png` | Lighthouse report (rebuilt local/deployed site mobile) showing all 4 scores | 1.1 |
| `03-issue-hero-density.png` | Live site hero area showing visual hierarchy issue | 1.2 |
| `04-issue-spacing-layout.png` | Live site section showing spacing/layout issue | 1.2 |
| `05-issue-mobile-responsiveness.png` | Live site mobile view showing responsiveness issue | 1.2 |
| `06-issue-performance.png` | DevTools/Lighthouse evidence of performance concern | 1.2 |
| `07-issue-accessibility.png` | Contrast/focus/semantics issue evidence from live site | 1.2 |
| `08-rebuild-hero-desktop.png` | Your rebuilt hero section (desktop) | 2 |
| `09-rebuild-comparison-desktop.png` | Rebuilt comparison section (desktop) | 2 |
| `10-rebuild-guided-desktop.png` | Rebuilt guided section (desktop) | 2 |
| `11-rebuild-mobile-fullpage.png` | Full rebuilt page in mobile viewport | 2 |
| `12-before-after-comparison.png` *(optional)* | Side-by-side before/after comparison | Optional |

---

## Submission fields to fill before final submit

- **GitHub repo link:** `<add your public repo URL>`
- **Deployed site URL:** `<add your Vercel/Netlify URL>`

