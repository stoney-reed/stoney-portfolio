# stoneyreed.com

Personal portfolio for Stoney Reed, full-stack software engineer.

**Live:** https://stoneyreed.com

## Stack

- React 19 + TypeScript, bundled with Vite
- Tailwind CSS
- Self-hosted Inter and JetBrains Mono (via Fontsource), no third-party requests at runtime

## Development

```bash
npm install
npm run dev      # local dev server
npm run lint     # ESLint (typescript-eslint + react-hooks)
npm run build    # type-check, then production build to dist/
npm run preview  # serve the production build locally
```

## Editing content

All copy (projects, experience, skills, links) lives in `src/data.ts`. Layout lives in `src/App.tsx` and `src/components/`.

The resume served at `/Stoney-Reed-Resume.pdf` is `public/Stoney-Reed-Resume.pdf`. Replace that file to update it; keep the filename so existing links keep working.

Social preview image, favicons, `robots.txt`, and `sitemap.xml` are in `public/`.
