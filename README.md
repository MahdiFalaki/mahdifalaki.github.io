# Mahdi Falaki Personal Website

This repository contains a plain static one-page personal website for Mahdi Falaki, intended for GitHub Pages deployment at `https://mahdifalaki.github.io/`.

The site is intentionally simple: `index.html`, `styles.css`, a small `script.js` for copying the email address, and optional files in `assets/`. There is no Python app, build step, framework, package manager, or server-side code.

## Edit the Website

- Update page content in `index.html`.
- Update visual styling in `styles.css`.
- Keep links relative so the site works from the repository root on GitHub Pages.
- Avoid adding generated build folders or framework dependencies.

## Personal Links and Assets

- Resume PDF: stored at `assets/Resume_Mahdi_Web.pdf` and linked from the hero section.
- AWS badge: stored at `assets/aws-ai-practitioner-badge.png` and linked to the Credly public badge page.
- Google Scholar: add the URL in the hero link area once available.
- Publication links: IEEE Xplore and code/model repository links are included. Add a project page link in the publication card when available.
- Project links: verified GitHub repository links are included on selected project cards.

## Push to GitHub

```bash
git add .
git commit -m "Create static personal website"
git branch -M main
git remote add origin https://github.com/MahdiFalaki/mahdifalaki.github.io.git
git push -u origin main
```

If the remote already exists, skip the `git remote add origin ...` command or update it with:

```bash
git remote set-url origin https://github.com/MahdiFalaki/mahdifalaki.github.io.git
```

## Enable GitHub Pages

In the GitHub repository:

1. Open `Settings`.
2. Open `Pages`.
3. Set source to `Deploy from a branch`.
4. Select branch `main`.
5. Select folder `/root`.
6. Save.

The site should become available at `https://mahdifalaki.github.io/` after GitHub Pages finishes deploying.

## Remaining TODOs

- Add Google Scholar URL.
- Add ICASSP 2026 project page link when a public URL is available.
