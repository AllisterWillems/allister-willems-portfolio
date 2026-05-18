# Allister Willems Portfolio

Static portfolio site for Allister Willems, focused on AI enablement, learning systems architecture, and organizational capability work.

The site is intentionally simple: static HTML, CSS, and minimal vanilla JavaScript. It is designed to deploy cleanly on GitHub Pages from the repository root.

## Project Files

- `index.html` - homepage and primary portfolio content
- `styles.css` - responsive styling
- `script.js` - mobile navigation and footer year
- `case-studies/` - public case study pages
- `.nojekyll` - prevents GitHub Pages from applying Jekyll processing

Local source notes and draft markdown files are intentionally excluded from the public deployment commit.

## Preview Locally

Open `index.html` directly in a browser. No build system is required.

If you prefer a local server, run this from the project folder:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deploy To GitHub Pages

1. Push this folder as the root of a GitHub repository.
2. In GitHub, go to `Settings` -> `Pages`.
3. Set `Source` to `Deploy from a branch`.
4. Choose the `main` branch.
5. Choose `/root`.
6. Save.

Suggested first commit from this folder:

```bash
git init -b main
git add .
git commit -m "Prepare portfolio for GitHub Pages"
```

The GitHub Pages URL will use this format:

```text
https://<github-username>.github.io/<repository-name>/
```

If the repository is named `<github-username>.github.io`, the URL will be:

```text
https://<github-username>.github.io/
```

## Deployment Checks

- `index.html` is at the deployable repository root.
- CSS and JavaScript use relative paths.
- Case study pages use relative links back to the homepage.
- No `file:///Users/...` links are used.
- No resume PDF is currently referenced.
- No screenshots, internal artifacts, or source markdown files are required for the public site.

## Editing Notes

Key editable areas in `index.html`:

- Hero headline and subheadline
- Buttons and contact links
- What I Do cards
- Case study summaries
- Public-safe conceptual diagrams on individual case study pages
- About section
- Career timeline
- Contact section

## Content Guidance

Keep the site focused on:

- AI enablement
- learning systems architecture
- organizational capability
- behavior change
- human-centered adoption
- technical complexity made usable

Avoid adding:

- raw course screenshots without context
- confidential company material
- LMS/tool-heavy descriptions
- robot or generic AI visuals
- unsupported metrics

The case study diagrams are intentionally abstract HTML/CSS visuals. Keep them conceptual unless specific artifacts have been cleared for public use.

## Publishing

This V1 can be deployed as a static site through GitHub Pages, Netlify, or any basic static hosting service.

## Launch Checklist

- Click all case study links from the homepage.
- Click the email link.
- Click the LinkedIn link.
- Test mobile layout.
- Review case study content for confidentiality.
- Confirm no placeholder text remains.
