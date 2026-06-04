# Mae Asian Cuisine

Single-page website for **Mae Asian Cuisine**, an Asian restaurant with 2 locations in Pereira, Colombia.

## Tech Stack

- **Next.js 14** — App Router
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** — Card components
- **Framer Motion** — Scroll animations, transitions
- **Spline** — Interactive 3D hero element
- **Lucide React** — Icons

## Sections

1. **Navbar** — Fixed, hides on scroll down, hamburger on mobile
2. **Hero** — Full-viewport with Spline 3D scene + Spotlight effect
3. **About** — History, stats with count-up animation
4. **Menu** — Embedded PirPOS menu iframe
5. **Reservations** — Embedded Riservi booking widget
6. **Locations** — 2 location cards with Google Maps embeds
7. **Gallery** — Masonry grid, 6 Unsplash images with hover effects
8. **Footer** — Logo, columns, social icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**

Or via CLI:
```bash
npm i -g vercel
vercel
```

## Design System

| Token | Value |
|-------|-------|
| Background | `#0D0D0D` |
| Accent / Gold | `#C8972B` |
| Text | `#F5F5F0` |
| Cards | `#1A1A1A` |
| Title font | Cormorant Garamond |
| Body font | Inter |
