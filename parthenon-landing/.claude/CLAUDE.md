# Parthenon Landing Page

## Project Context
Premium landing page for Parthenon Athletic Club. Lead generation for presale campaign. Target: serious professionals and families in Utah County, Utah.

## Design System
- Colors: cream (#F5F0E8), charcoal (#1E1E1E), sandstone (#C4A882), walnut (#5C3D2E), gold (#B8975A), marble (#FAF7F2), sage (#6B7F5E)
- Typography: Serif display (Cormorant Garamond) + geometric sans body (Outfit)
- Tone: Restrained luxury. Warm, grounded, confident. Never flashy or generic.
- Animations: Smooth, confident. Staggered reveals. No bounce or playful motion.

## Architecture
- Next.js 14 App Router + TypeScript + Tailwind + Framer Motion
- Lead capture via /api/leads POST endpoint (stores to data/leads.json locally)
- All images in /public/images/
- Components in /components/

## Key Principles
1. Read /mnt/skills/public/frontend-design/SKILL.md before any design work
2. NO generic AI aesthetics (no Inter, no purple gradients, no cookie-cutter layouts)
3. Every section should feel intentionally designed for THIS brand
4. Mobile-first responsive design
5. Performance matters: optimize images, lazy load below-fold content
6. Accessibility: proper heading hierarchy, alt text, focus states, color contrast
7. The brand voice is confident and direct, never salesy or hype-driven

## Content Reference
- Tagline: "Embrace the struggle. Become self-made. Climb together."
- Five Pillars: Calm, Standards, Results, Belonging, Meaningful Progress
- Price: $250/mo all-inclusive
- Cap: 2,500 members
- Launch: September 2026
- Location: Provo/Orem, Utah

## Commands
- `npm run dev` -- start dev server
- `npm run build` -- production build
- `npm run lint` -- lint check
