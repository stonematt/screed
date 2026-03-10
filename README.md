# SCREED

**Dispatches from the underground. A counterculture broadsheet.**

[screed.cultureshock.xyz](https://screed.cultureshock.xyz/)

## What Is This Place?

SCREED is a broadsheet for things that don't fit neatly into a tweet, a Slack message, or a corporate memo. Long-form, opinionated, slightly unhinged. A digital zine rack. A samizdat server. A broadsheet nailed to the door of the internet.

The technology is deliberately simple. Static files built with [Eleventy](https://www.11ty.dev/), deployed to [Netlify](https://www.netlify.com/), styled with vanilla CSS. No frameworks were harmed. The content is the point, not the plumbing.

## How It Got Built

A friend had a question about a DNS record I helped him set up in 2001. The answer led to Netlify. I'd never used it. So I opened a terminal, started [Claude Code](https://docs.anthropic.com/en/docs/claude-code), and described what I wanted out loud.

95% of the keystrokes in this project belong to Claude, not to me. I talked. It typed. I reviewed. That's not laziness. It's a different job description.

The full story: [I Built This Site Without Typing](https://screed.cultureshock.xyz/docs/i-built-this-site-without-typing/)

## Running Locally

Requires Node.js 18+.

```bash
npm install
npm start
```

Dev server starts at `http://localhost:8080` with live reload.

`npm run build` outputs the production site to `_site/`.

## Adding a Document

Drop a `.md` file in `src/docs/` with this frontmatter:

```yaml
---
title: "Your Title Here"
date: 2026-03-10
author: "Your Name or Handle"
description: "One punchy line for the index card."
---
```

It picks up the doc layout automatically and shows up on the homepage. No CMS. No approval workflow. No meetings about meetings.

## Stack

- [Eleventy v3](https://www.11ty.dev/) for static site generation
- Nunjucks templates, Markdown content
- Vanilla CSS with custom properties for theming
- Dark mode default, light mode toggle
- Strict CSP security headers via Netlify `_headers`
- RSS feed included

## The Rules

1. **Say something worth reading.** Life is short and screens are bright. Don't waste anyone's photons.
2. **No corporate speak.** If it sounds like it was written by a committee, it doesn't belong here.
3. **Keep it SFW.** Subversive, yes. Offensive, no.

## License

[MIT](LICENSE)
