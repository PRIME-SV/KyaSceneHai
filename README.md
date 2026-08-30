# Marathi Katta

Mood-based music player: pick a vibe, get a wallpaper, theme, and YouTube playlist.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- YouTube IFrame Player API
- Mood config in `data/moods.ts`

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects to your last mood (or Chai).

## Customize

1. Edit playlist IDs and SEO copy in [`data/moods.ts`](data/moods.ts)
2. Replace wallpapers in `public/wallpapers/` (keep the same filenames, or update paths in the config)
3. Rename the site in [`data/site.ts`](data/site.ts)
4. Set `NEXT_PUBLIC_SITE_URL` for sitemap / OG URLs in production

### SEO routes

- `/` — Marathi gane (default)
- `/ganapati` — Ganapati gane
- `/premache-gane` — Premache gane / love songs
- `/sitemap.xml` and `/robots.txt` are generated automatically

## Deploy

Deploy to Vercel. Point your custom domain in the Vercel dashboard.
