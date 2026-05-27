# Deploy Reject Rejection in 60 seconds

The product is three static files. No build step. No backend. No env vars.

## Option A — Drag and drop (fastest, ~60 seconds)

1. Open https://app.netlify.com/drop
2. Drag the entire `app/` folder onto the page
3. Done. You'll get a public URL like `https://reject-rejection-xyz.netlify.app`
4. (Optional) In the Netlify dashboard → Site settings → Change site name → pick something like `reject-rejection`

Cloudflare Pages alternative: https://pages.cloudflare.com → Direct Upload → same flow.

## Option B — Vercel CLI (best when you want a custom domain later)

```bash
npm i -g vercel
cd app
vercel --prod
```

When prompted: accept defaults, no framework, no build command, output directory = `./`.

Add a custom domain (e.g. `rejectrejection.app`) in the Vercel dashboard → Settings → Domains.

## Option C — GitHub Pages (if you already use GitHub)

1. Create a new repo, push the three files to `main`
2. Repo → Settings → Pages → Source: `Deploy from a branch` → Branch: `main` / `(root)`
3. URL: `https://<your-username>.github.io/<repo-name>/`

## Local sanity check before deploying

Just double-click `index.html`. Should work fully offline. Open DevTools → Network tab → reload → confirm zero requests after the initial 3 files load.

## What to do after it's live

The product spreads through one link. Drop it into communities where rejected candidates already vent:

- Reddit: `r/recruitinghell`, `r/jobs`, `r/cscareerquestions`, `r/Layoffs`
- LinkedIn post (lead with the personal story, link in first comment to dodge LinkedIn's link-throttle)
- Hacker News: Show HN (Tuesday/Wednesday morning US time is best)
- ProductHunt launch (Tuesday is best)
- Xiaohongshu / X (中文求职 + EN indie hacker bubbles)

Suggested LinkedIn opener:

> 我做了个小工具：把模板拒信变成一封有分寸的回信草稿。
> 不会自动发送，只是给你一份「能复制走」的草稿。
> 全部在浏览器里跑，没有登录、没有上传、没有收费。
> 链接在评论。

## What to monitor

- Netlify/Vercel dashboard: page views, top referrers, geo
- Reddit/HN comment sentiment — is it landing as solidarity or as "snarky AI tool"?
- Whether users come back (repeat visits = product-market fit signal)

## When to add AI

Wait until you see 1000+ weekly drafts generated. Then add an optional "✨ Polish with AI" button that uses the user's own API key (BYOK), kept in localStorage. Don't host a key — costs scale linearly and you don't want that bill before you know the product sticks.
