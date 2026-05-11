# Propsoch Landing Page — Analysis & Rebuild

Assignment implementation using **Next.js + TypeScript + Tailwind CSS**.

## Live Site Analyzed

- URL: https://www.propsoch.com/
- Audit method: Lighthouse CLI (mobile emulation)
- Capture time (UTC): `2026-05-11T12:00:22`

### 1) Lighthouse Scores (Current Site)

| Category | Score |
| --- | ---: |
| Performance | 80 |
| Accessibility | 96 |
| Best Practices | 100 |
| SEO | 100 |

## 2) UX / UI Issues Found + Proposed Fixes

| Area | Issue observed | Why it hurts UX | Proposed fix |
| --- | --- | --- | --- |
| Visual hierarchy / typography | Hero messaging is dense with several competing lines and weak visual grouping. | Important value proposition is harder to scan quickly. | Redesign hero with clear headline, concise supporting copy, strong CTAs, and clearer information blocks. |
| Spacing & layout | Several sections feel crowded on smaller widths and long content blocks reduce readability. | Users must work harder to parse content and compare options. | Introduce consistent spacing scale, max-width constraints, grouped cards, and improved line lengths. |
| Mobile responsiveness | Comparison-heavy content is difficult to scan on narrow screens. | Horizontal density makes decision info hard to consume on mobile. | Rebuild the comparison section with responsive table styling, better wrapping, and stronger row contrast. |
| Performance | Large imagery and rich visual sections can increase load cost. | Slower first render, especially on mobile networks. | Use `next/image`, local optimized WebP assets, explicit dimensions, responsive `sizes`, and lazy loading for non-critical images. |
| Accessibility | Some content patterns on the original experience can under-communicate structure for assistive tech. | Reduced clarity for keyboard and screen-reader users. | Improve semantic structure (headings, table caption), meaningful alt text, focus-visible states, and color contrast. |

## 3) What I Rebuilt (Part 2)

### Rebuilt sections

1. **Hero section (redesigned)**  
   New visual direction with clearer value proposition, stronger CTAs, trust stats, and improved contrast.
2. **What makes us different (from original site)**  
   Rebuilt as a responsive comparison table for better readability across screen sizes.
3. **Guided Home Buying (from original site)**  
   Reworked into structured benefits + outcome-oriented messaging.

### Responsive design

- Mobile-first layout with breakpoint-based grids (`md:`).
- Improved spacing, readable line lengths, and touch-friendly CTA buttons.

### Image optimization

- Local optimized WebP assets in `public/images`.
- All images rendered via `next/image`.
- Explicit `width`/`height` + `sizes` hints.
- Non-hero images load lazily by default.

## Tech Decisions

- **Next.js App Router** for straightforward page composition.
- **TypeScript** for maintainable, safer structure.
- **Tailwind CSS** for fast, consistent styling with responsive utilities.
- Semantic HTML (sections, headings, table caption) to improve accessibility.

## Project Structure

```text
my-propsoch-rebuild/
├── README.md
├── public/
│   └── images/
├── src/
│   └── app/
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
└── tailwind/postcss config files
```

## Setup & Run

```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

Production commands:

```bash
npm run build
npm run start
```

## Submission Fields

- GitHub Repository link: _add after pushing_
- Deployed URL (Vercel/Netlify): _add after deployment_
