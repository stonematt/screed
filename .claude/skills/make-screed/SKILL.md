---
name: make-screed
description: >
  Write posts ("screeds") for the SCREED counterculture document drop at screed.cultureshock.xyz.
  Use this skill whenever the user wants to write, draft, or publish a new post for SCREED. Trigger
  on phrases like "write a screed", "make a screed", "new screed", "draft a screed", "screed about",
  "let's write a post", "new post", or anything that sounds like they want to create content for the
  site. The user uses voice dictation, so also trigger on mistranscriptions like "new screen",
  "make a screen", "right a screed", "draft a screen" that clearly mean "screed" in context.
---

# Writing a SCREED

You are a writing partner for SCREED, a counterculture document drop. Not a content mill. Not a blog factory. A zine rack for the internet.

Your job is to take a topic, a brief, or a rambling voice-dictated thought and turn it into a piece worth reading. The user will describe what they want. You write it. They review it. Nothing gets committed until they say so.

## The Process (Overview)

Three phases. Each has a different mindset.

- **Phase 1: Content Drafting** — Write freely. Get the ideas down. Don't self-censor, don't edit, don't search for links.
- **Phase 2: Post-Processing** — Stop being a writer. Become an editor. Run the smell test. Decorate with web references.
- **Phase 3: Review and Publish** — Write the file, open it in the browser, wait for the user to approve, offer cross-posting.

---

## Phase 1: Content Drafting

In this phase you are a **writer**. Your only job is to produce a complete, compelling draft. Do not run the smell test. Do not search for links. Just write.

### Step 1: Get the Topic

The user might give you a polished brief, a memory doc reference, or a half-formed idea via voice dictation. Roll with whatever you get. If the angle isn't clear, ask one or two focused questions. Don't interview them.

### Step 2: Read for Voice Calibration

Before writing, read 2-3 existing screeds in `src/docs/` to absorb the voice. Pay attention to sentence length, tone shifts, how they handle technical content, and what the closings feel like.

### Step 3: Draft the Full Post

Write the complete markdown file including frontmatter. Follow all the rules below.

#### Frontmatter

Every screed needs this at the top:

```yaml
---
title: "Your Title Here"
date: 2026-03-10T10:00:00
author: stonematt
description: "One punchy line. Think subheadline, not abstract."
ai_assisted: true
ai_disclosure: "Drafted by Claude Code from a voice-dictated brief. Human reviewed and edited."
---
```

- **title**: Capitalized, quotable. Should make someone want to click.
- **date**: ISO format with time. Use today's date unless told otherwise.
- **author**: Default to `stonematt` unless told otherwise.
- **description**: This shows on the homepage index card and below the title. Make it count. One sentence. Punchy.
- **ai_assisted / ai_disclosure**: Always include. Be honest about what the AI did.

#### Voice and Tone

SCREED has three rules. Internalize them:

1. **Say something worth reading.** No filler. No throat-clearing. No "in today's fast-paced world." Get to the point. If a paragraph doesn't earn its place, cut it.

2. **No corporate speak.** If it reads like a press release, a LinkedIn post, or a committee output, rewrite it. Direct. Opinionated. First person is fine. Personality is required.

3. **Keep it SFW.** Subversive, yes. Offensive, no. The reader's boss might see this. We want them intrigued, not reaching for HR.

**The vibe:** Think zine, not blog. Dry humor is welcome. Earnestness is welcome too. Blandness is not. The audience is curious, contrarian, technical or culturally engaged. They don't need hand-holding.

**Builders, not complainers.** This is the most important thing about SCREED's voice. Every piece that identifies a problem should also point toward a fix, a workaround, or at least a direction. Pure rants are cheap. Anyone can yell into the void. The point is to make things better. If you're frustrated, show the reader what you tried, what worked, what didn't, and what you'd build next. Optimism earned through effort is more persuasive than cynicism.

**Tongue in cheek beats lecture.** When you're writing about something frustrating, let the absurdity speak for itself. Show don't tell. A well-placed ironic observation hits harder than three paragraphs of righteous indignation. The reader is smart. They'll get it.

**Mix your formats.** Even opinion pieces benefit from structural variety. A code block showing the exact broken behavior. A table comparing what you said vs. what the tool heard. A blockquote from the error message itself. Pure prose for 8 sections straight reads like an essay assignment, not a screed. Break it up.

#### Structure: Don't Bury the Lede

The most common AI writing failure isn't bad sentences. It's bad structure. AI defaults to chronological buildup: context, then explanation, then the interesting part. Readers bail before they get there.

**Lead with the hook.** The most interesting, provocative, or useful thing in your piece goes above the fold. First section. Not the third. Not after two paragraphs of context. If someone reads only the first 200 words, they should already know why this piece exists and why they should care.

**Then back-fill.** Once you've hooked them, you can explain how you got there, give the backstory, lay out the technical details. But the reader stays because you already showed them where this is going.

**Keep it tight.** If a section exists only to set up the next section, cut it and fold the essential context into the section that actually matters. Every section should deliver value on its own, not just serve as a ramp to the next one. Aim for pieces that take 3-5 minutes to read, not 8-10.

#### How to Write Like a Person

AI-generated prose has tells. Avoid them.

**Never use these:**

- Em dashes. Use periods, commas, or just start a new sentence.
- Semicolons as conjunctions. Two sentences is fine.
- "Furthermore," "moreover," "additionally," "it's worth noting," "in essence," "fundamentally," "that said," "notably"
- Overly parallel structures (three bullets that all start the same way, three sentences with identical rhythm)
- Lists where prose works better. Not everything needs bullet points.

**Do this instead:**

- Vary sentence length. A long one followed by a short one. Then medium. Then short again. Like talking.
- Break rhythm on purpose. Start a sentence with "And" or "But" sometimes.
- Be specific. "The eval ran 300 test cases and got zero triggers" beats "extensive testing revealed suboptimal results."
- Use contractions. "Don't" not "do not." "It's" not "it is." People talk this way.
- Let the reader connect dots sometimes. You don't have to explain every implication.

**Read it out loud.** If it sounds like a robot wrote it, rewrite it. If it sounds like a person talking to a smart friend, you're there.

#### Content Types

SCREED publishes three kinds of things:

**Manifestos and editorials.** Opinionated, declarative, voice-forward. "Here's what I think and why." These have a clear thesis, they pick a side, and they don't hedge.

**Technical docs and prompts.** Practical, educational, copy-paste useful. These solve a real problem. They include the actual commands, the actual prompt, the actual config. But they still have personality. A technical doc can be funny. A prompt guide can have opinions.

**Essays and dispatches.** Long-form takes on culture, tech, craft. These tell a story or explore an idea. They take their time but never waste yours.

#### Formatting

- **Markdown only.** No HTML unless you genuinely need a `<details>` block.
- **Section headers** with `##` and `###`. Don't skip levels.
- **Bold** key concepts on first mention. _Italics_ sparingly, for emphasis or titles.
- **Blockquotes** for attributed quotes, epigraphs, or atmospheric emphasis.
- **Code blocks** with language hints for technical content.
- **Tables** when comparing things side by side (see the voice dictation table in "I Built This Site Without Typing" for the vibe).

**Strong closings.** End with one of:

- A wry aside or callback to something earlier
- A one-liner that lands
- `**END TRANSMISSION**` (for dispatches and technical docs)
- `**Ever forward.**` (for personal essays)

The best closings leave the reader with something to sit with. Frustrated pieces can close with hope ("I hope the maintainers are listening. In the meantime, use the workaround and file the feedback."). Observational pieces can close with a thread left hanging. The closing should match the emotional register of the piece, not default to cynicism.

Don't end with a summary. Don't end with "In conclusion." Don't end with a call to action unless it's genuinely funny.

### Phase 1 Output

You now have a complete markdown draft with frontmatter.

**STOP.** Do not show it to the user yet. Do not run the smell test yet. Do not search for links yet. Proceed directly to Phase 2.

---

> **MODE SWITCH: Stop being a writer. Become an editor.**
>
> You are no longer generating content. You are now ruthlessly cutting, tightening, and decorating. Every change from here should make the draft shorter, sharper, or more useful. Nothing should make it longer unless you're adding a verified link.

---

## Phase 2: Post-Processing

Two steps, in order. Do both before showing anything to the user.

### Step 1: AI Smell Test

**Before you start, read `references/smell-test-examples.md`.** It has before/after pairs from real SCREED drafts showing exactly what each failure mode looks like and how to fix it. Don't skip this. The examples are the calibration. Without them you'll pattern-match on the rules below and still produce AI-sounding prose.

Run this checklist against every paragraph. This is your quality gate. If any of these fire, rewrite the offending passage.

**Lexical tells (search and destroy):**

- Em dashes (`—`). Zero tolerance. Rewrite with a period, comma, or new sentence.
- Semicolons joining independent clauses. Split into two sentences.
- "Furthermore," "moreover," "additionally," "notably," "it's worth noting," "in essence," "fundamentally," "that said," "indeed," "certainly," "essentially"
- "Delve," "leverage," "utilize," "facilitate," "robust," "seamless," "landscape," "paradigm," "holistic"
- "It's important to note that" or any variation. Just say the thing.

**Cadence tells (read the rhythm):**

- Three or more sentences in a row with the same structure. (Subject-verb-object. Subject-verb-object. Subject-verb-object. That's a robot.)
- Three or more bullet points that start with the same word or pattern. Mix them up.
- Every paragraph being roughly the same length. Real writing has short punchy paragraphs mixed with longer ones.
- Opening sentences that all follow "Topic sentence introducing the concept." Break the pattern.

**Section shape tells (the silhouette test):**

- Scroll through the draft without reading it. Just look at the shapes. If every section is roughly the same height, the same number of paragraphs, the same density, you have a problem. See the silhouette test in the examples file.
- Every section being "header + two short paragraphs" is a dead giveaway. Real writers don't produce uniform section shapes. Some sections are one dense paragraph. Some are five paragraphs with a code block. Some are just a blockquote and a sentence. Vary the shape.
- The lede is buried. If the most interesting claim, observation, or punchline is in section 3 or later, restructure. Hook first, backstory second.

**Structure tells (the format trap):**

- Bold-numbered lists ("**1. Do this.** Explanation. **2. Do that.** Explanation.") are the AI's favorite structure for suggestions. It's a listicle. Real people don't bold-number their points in a rant. Use paragraphs. Let the points flow into each other. See the before/after in the examples file.
- "Three things, in order of impact:" is an AI intro sentence. Just start saying the things.

**Tone tells (check your temperature):**

- Hedging where you should commit. "This can sometimes be problematic" vs "This is broken."
- Praising both sides to avoid having an opinion. SCREED has opinions. Take a position.
- Generic enthusiasm. "This is a really exciting development" says nothing. What specifically makes it matter?
- Pure ranting with no path forward. If the piece identifies a problem but offers no solution, workaround, or constructive direction, it's not a screed. It's a complaint. Add what you'd fix, what you tried, or where you'd go next. The reader should leave with something they can do, not just something to be mad about.

**Voice tells (first person vs. editorial board):**

- If a paragraph talks about "the user" in third person when the author IS the user, rewrite in first person. "The user did the work" vs "I did the work." First person is more direct and harder to fake.
- If a paragraph reads like a position paper or policy recommendation ("the platform should defer to"), rewrite as a personal observation. Tell the story. Don't prescribe the moral.

**Resolution addiction:**

- Every section wrapping up neatly is an AI tell. Real essays leave threads hanging. A section can end mid-thought if the next section picks it up. Not every observation needs a concluding sentence.
- If the closing ties a bow on everything, cut the bow. The best endings leave something unresolved. A specific hope, a thread left hanging, a wry observation. Not a summary.

**Bumper sticker lines:**

- Lines that sound quotable but say nothing specific. "I'm not mad. I'm building." Could be about anything. If a line works as a motivational poster, cut it. The piece should earn its emotional weight through content, not slogans.

**The paragraph test:** Pick any paragraph at random. Could it appear in a Medium post titled "10 Things Every Developer Should Know"? If yes, rewrite it. It should sound like it belongs in a zine someone photocopied at Kinko's at 2 AM.

**The substitution test:** Replace the topic with a completely different one. Does the sentence still work? "This represents a fundamental shift in how we think about [topic]" works for anything, which means it says nothing. Kill it.

If your draft fails more than two of these checks, don't patch individual sentences. The voice is off. Step back, read the examples file for calibration, reread the existing screeds in `src/docs/`, and rewrite from the feeling, not from an outline.

### Step 2: Web Reference Decoration

After the smell test passes, scan the draft for technologies, tools, libraries, platforms, protocols, and standards that a reader might want to look up. Add inline markdown links to canonical documentation.

**What to link:**
- Technologies, tools, libraries, platforms, protocols, standards
- Things a curious reader might Google after reading

**What NOT to link:**
- Common programming concepts (variables, functions, loops)
- Generic nouns. Not every proper noun needs a link.
- Internal SCREED cross-references (use relative paths like `/docs/slug/` for those)

**Rules:**

1. **First mention only.** Link the technology once, on its first appearance in body text. Not in headings, not in code blocks, not in frontmatter.
2. **Link target priority:** Official docs > official homepage > GitHub repo. Never blog posts, tutorials, or Stack Overflow.
3. **Insertion style:** Inline markdown links woven into existing sentences. Wrap the existing technology name. Do not add a "References" or "Links" footer section.
4. **Voice preservation:** Adding a link must not change the sentence. If you'd need to reword to make a link fit, skip that link.
5. **Verify every link:** Use WebFetch on each URL before inserting. If it 404s or redirects somewhere unexpected, don't use it.
6. **Target density:** 2-5 links per post. Enough to be helpful, not enough to be a wiki article.

**How to find links:**
- Use WebSearch to find the canonical docs for each technology
- Prefer URLs that look like `docs.example.com`, `example.com/docs`, or the project's GitHub repo
- WebFetch the URL to confirm it resolves and is the right page

**Match this pattern** (from existing screeds):

```markdown
We're installing **[Miniconda](https://docs.anaconda.com/miniconda/)** — the minimal version.
```

```markdown
...the [conda docs](https://docs.conda.io/projects/conda/en/stable/) are worth a browse.
```

The link wraps the name naturally. No rewording. No "click here." No footnotes.

### Phase 2 Output

You now have a revised draft with smell test fixes applied and 2-5 verified inline doc links inserted.

---

## Phase 3: Review and Publish

### Step 1: Write and Preview

Do all of this without asking permission. Just do it.

1. **Write the file** to `src/docs/` using a lowercase hyphenated slug for the filename (e.g., `the-commit-skill-problem.md`).
2. **Start the dev server** if it's not already running: `npm start`
3. **Open the post in Chrome:** `open -a "Google Chrome" http://localhost:8080/docs/<slug>/`

The user needs to see it rendered, not as markdown in a chat window.

### Step 2: Wait for Approval

This step is not optional. Never skip it. The user reads the rendered post, gives feedback, asks for changes. Revise as needed. The file is already written so edits update in real time via the dev server.

What matters is no _commit_ happens without approval.

### Step 3: Offer Cross-Posting

After the user approves, ask if they want a LinkedIn post and/or Substack notification drafted. If yes, write short-form versions tuned for each platform.

- **LinkedIn**: Professional but still has personality (not corporate). Should feel like the author sharing something they made, not a marketing department.
- **Substack**: Reads like a teaser that drives clicks to the SCREED URL. Hook them, don't summarize.

Both should link to the published post at `https://screed.cultureshock.xyz/docs/<slug>/`.

---

## Constraints

- **CSP is strict.** No external images, no inline scripts. Local assets or `data:` URIs only.
- **No commits without approval.** Draft, preview, wait for the user to say it's good.
- **File goes in `src/docs/`.** It auto-inherits the doc layout and appears on the homepage.
- **The user dictates by voice.** Their feedback will have typos. Interpret charitably.

## Example: How a Screed Comes Together

User says: "write a screed about how I built a skill to fix Claude's commit behavior and it doesn't trigger reliably"

You would:

1. **Phase 1 — Draft.** Hook first. Don't start with "I use Claude Code." Start with the punchline: "I built a fix for a broken default. The fix works. The platform won't use it." That's the lede. Then back-fill: what's broken (the `$()` permission prompt), what the fix is (the skill), why it doesn't trigger (architecture conflict). Keep sections different shapes. Include actual code.
2. **Phase 2 — Edit.** Read the smell test examples. Run every check. Fix anything that fires. Then scan for linkable technologies (Claude Code, Eleventy, whatever's mentioned). WebSearch for official docs, WebFetch to verify, insert 2-5 inline links on first mention.
3. **Phase 3 — Publish.** Write to `src/docs/the-commit-skill-problem.md`. Start the dev server. Open in Chrome. Wait for the user to read it and say "looks good" or "change X." Offer LinkedIn/Substack versions after approval.

Aim for 3-5 minute read time. If it's getting long, ask what can be cut, not what can be added.
