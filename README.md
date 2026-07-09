# Allister Willems — Combined Portfolio

One site merging the strategy portfolio (case studies, positioning, career arc)
with the visual portfolio (14 projects of video, animation, and instructional
graphics). Fresh hybrid design: warm cream + deep green with an editorial
serif (Fraunces) and Inter.

## Structure

- `index.html` — hero, What I Do, 5 featured case studies, Visual Work teaser,
  Interactive Sample, About + Selected Signals, Career Arc, Contact
- `case-studies/` — 5 case study pages, each with a "Related Visual Work" section
- `work/index.html` — full 14-project gallery
- `work/*.html` — project pages, each linking back to its related case study
- `example/sample.html` — the interactive "Making AI Understandable" sample
  (self-contained, included locally)

## Deploying to GitHub Pages

1. Copy everything in this folder into the root of your
   `allister-willems-portfolio` repo (replaces `index.html`,
   `case-studies/`, and `example/`; adds `work/`, `css/`, `js/`, `assets/`).
2. Run `bash download-images.sh` once from the repo root. It downloads all
   116 gallery images into `assets/` so they're served from your own repo.
   (Until then, images auto-fall back to the Adobe Portfolio CDN.)
3. Commit and push.

## Notes

- Videos embed the original Adobe Creative Cloud and YouTube players; if you
  ever close the Adobe account, re-host those and update the iframe URLs.
- Old case-study URLs are preserved (`case-studies/<same-slugs>.html`), so
  existing links keep working.
- Contact is email + LinkedIn (no form backend needed on GitHub Pages).
