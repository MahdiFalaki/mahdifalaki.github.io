# Mahdi Falaki Personal Website

This repository contains a plain static one-page personal website for Mahdi Falaki, intended for GitHub Pages deployment at `https://mahdifalaki.github.io/`.

The site is intentionally simple: `index.html`, `styles.css`, and optional files in `assets/`. There is no Python app, build step, framework, package manager, or server-side code.

## Edit the Website

- Update page content in `index.html`.
- Update visual styling in `styles.css`.
- Keep links relative so the site works from the repository root on GitHub Pages.
- Avoid adding generated build folders or framework dependencies.

## Personal Links and Assets

- Resume PDF: place it at `assets/Mahdi_Falaki_Resume.pdf`, then replace the disabled "Resume coming soon" item in `index.html` with a link to that file.
- AWS badge: place it at `assets/aws-ai-practitioner-badge.png`, then replace the text credential card markup with the image markup noted in the HTML TODO comment.
- Google Scholar: add the URL in the hero link area once available.
- Publication links: IEEE Xplore and code/model repository links are included. Add a project page link in the publication card when available.

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
- Add resume PDF at `assets/Mahdi_Falaki_Resume.pdf`.
- Add AWS badge image at `assets/aws-ai-practitioner-badge.png`.
- Add ICASSP 2026 project page link when a public URL is available.
