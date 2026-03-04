# Tags / Categories for Docs

**Status:** Not started
**Priority:** 2

## Why

Content is growing in different directions — prompting guides, opinion pieces, technical howtos. Readers and the author need a way to browse by type. Tags also improve SEO and feed usefulness.

## Scope

- Add optional `tags` frontmatter to docs (beyond the existing `doc` collection tag)
- Tag listing page(s) — e.g., `/tags/` index showing all tags, `/tags/prompts/` showing filtered docs
- Update index page to show tags on doc cards
- Update doc layout to display and link tags
- Consider: flat tags vs. a small fixed category set

## Files likely touched

| File | Action |
|------|--------|
| `src/docs/*.md` | Modified (add tags frontmatter) |
| `src/tags.njk` | New (tag index page) |
| `src/tag-page.njk` | New (per-tag listing, uses pagination) |
| `src/_includes/layouts/doc.njk` | Modified (display tags) |
| `src/index.njk` | Modified (show tags on cards) |
| `css/style.css` | Modified (tag chip styling) |
