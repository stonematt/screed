# Split Site from Content

**Status:** Not started
**Priority:** 4

## Why

The 11ty scaffold (templates, CSS, JS, config) and the actual SCREED articles live in one repo. Splitting them would let stonematt:
- Publish the site template as a reusable starter without personal content
- Keep content in a private repo if desired
- Manage content and infrastructure on independent release cycles

## Approach ideas

- **Git submodule** — content repo as a submodule in `src/docs/`
- **Separate repos, build-time fetch** — Netlify build pulls content from a second repo
- **Monorepo with deploy filtering** — same repo, Netlify ignores `src/docs/` in the template version

## Considerations

- Netlify build needs access to both repos
- Local dev (`npm start`) should still work seamlessly
- `docs/` (roadmap, internal docs) vs `src/docs/` (published content) — already a natural split point
