# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SCREED is a static site at screed.cultureshock.xyz — a counterculture document drop built with Eleventy (11ty) v3 and deployed to Netlify. Vanilla CSS, vanilla JS, Nunjucks templates, Markdown content.

## Commands

- `npm start` — Dev server with live reload
- `npm run build` — Production build (outputs to `_site/`)
- No test suite configured

## Architecture

**Source directory is `src/`** (configured in `.eleventy.js`). Output goes to `_site/`.

**Layout chain:** `base.njk` → `doc.njk`. Base provides the HTML shell (header, theme toggle, footer, Open Graph meta). Doc extends base and adds article chrome (title, date, author, description, back link).

**Content as collections:** Markdown files in `src/docs/` are auto-tagged as the `doc` collection via `src/docs/docs.json` (sets layout and tags). The homepage (`src/index.njk`) iterates `collections.doc` in reverse chronological order.

**To add a new document:** Create a `.md` file in `src/docs/` with frontmatter (`title`, `date`, `author`, `description`). It automatically picks up the doc layout and appears on the index.

**Passthrough copies:** `css/`, `js/`, and `_headers` are copied as-is to the build output (note: these live at project root, not inside `src/`).

**Custom Nunjucks filters** (defined in `.eleventy.js`):
- `dateToISO` — date → "YYYY-MM-DD"
- `dateToReadable` — date → "March 2, 2026"
- `dateToYear` — returns current year

## Styling

Custom CSS in `css/style.css` with CSS custom properties for theming. Dark mode is default; light mode via toggle. Theme preference persisted in localStorage (`screed-theme`). Typography uses Special Elite (Google Fonts) for display, Georgia for body, system monospace for headings/code.

## Security Headers

`_headers` file configures Netlify security headers including a strict CSP. When adding external resources, the CSP in `_headers` must be updated.
