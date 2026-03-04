# Cross-Posting Workflow

**Status:** Not started
**Priority:** 3

## Why

Some SCREED posts should reach audiences on Substack, Medium, and LinkedIn. Need a repeatable workflow — could be manual editorial guidance, a build-time export, or a script.

## Considerations

- Substack and Medium accept Markdown import (with caveats on formatting)
- LinkedIn posts have character limits; may need a summary + link format
- Canonical URL should always point back to screed.cultureshock.xyz for SEO
- Images: SCREED currently has none (CSP is strict), which simplifies cross-posting
- Tone may need minor adaptation per platform

## Options

1. **Editorial checklist** — manual copy-paste with platform-specific adjustments
2. **Export script** — `npm run export` generates platform-ready versions
3. **Build step** — 11ty generates alternate formats alongside HTML

Start with option 1 (cheapest), upgrade if volume justifies it.
