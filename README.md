# Silver Pulse — pixel-perfect UI

Static onboarding flow for **Silver Pulse**: splash, sign-in (mock), onboarding screens, mood grid with branches, and a short finish screen. Built with **Vite**, **React**, and **TypeScript**.

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173/pixelperfect/` — the dev server respects `base` from `vite.config.ts`).

## Production build

```bash
npm run build
```

Output is in `dist/`. The build copies `index.html` to `404.html` so **GitHub Pages** can serve the SPA when users open deep links (e.g. `/pixelperfect/screen/3`).

Preview locally:

```bash
npm run preview
```

## GitHub Pages

1. Push this repo to [github.com/pm-in-code/pixelperfect](https://github.com/pm-in-code/pixelperfect).
2. In the repository **Settings → Pages**: set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and deploys `dist/`.

The site will be available at:

`https://pm-in-code.github.io/pixelperfect/`

### If you see “404 There isn’t a GitHub Pages site here”

1. **Pages source:** **Settings → Pages → Build and deployment** — set **Source** to **GitHub Actions** (not “Deploy from a branch”). Until a successful Actions deploy runs, the site URL shows that generic 404.
2. **Workflow:** Open the **Actions** tab and confirm the latest **Deploy to GitHub Pages** run is **green**. A failed build means nothing is published.
3. **First deploy:** If GitHub asks to approve the **`github-pages` environment**, open the run and approve it so deployment can finish.
4. **Push this repo:** The workflow only runs on pushes to `main`. After pulling these workflow fixes, run `git push origin main`. You can also trigger **Actions → Deploy to GitHub Pages → Run workflow** manually (`workflow_dispatch`).

### Important

- `vite.config.ts` sets `base: '/pixelperfect/'` so asset URLs match the project Pages URL.
- SF Pro is **not** bundled as a webfont (Apple license). The stack uses system UI fonts so **SF Pro appears on Apple devices** and sensible fallbacks elsewhere.

## Flow

| Route | Screen |
|-------|--------|
| `/screen/1` | Splash |
| `/screen/2` | Sign in (Apple / Google → next) |
| `/screen/3` … `/screen/6` | Full-bleed screens + **Next** |
| `/screen/7` | Mood grid + checkbox (tap a card to branch) |
| `/screen/7/mood/1` … `4` | Mood detail (Tired / Okay / Lonely / Worried) |
| `/done` | Finish + **Start over** |

## Assets

Screen PNGs live under `public/assets/screens/` (`screen-1.png` … `screen-7.png`, `screen-7-1.png` … `screen-7-4.png`).
