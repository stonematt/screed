---
title: "I Fixed the Commit. It Didn't Care."
date: 2026-03-10T10:00:00
author: stonematt
description: "I built a skill to fix Claude Code's broken commit flow. Then I used an AI tool to improve it. The hand-written version was better."
ai_assisted: true
ai_disclosure: "Drafted by Claude Code from a voice-dictated brief and session notes. Human reviewed and edited."
---

## The Tax on Every Commit

Committing code. The most routine operation in software development. You review the diff, you say "ship it," and it ships.

Unless you're using [Claude Code](https://code.claude.com/docs/en/overview). Then you get this:

> Command contains $() command substitution. Do you want to proceed?

The built-in commit command wraps the message in `$()`:

```bash
git commit -m "$(cat <<'EOF'
Your commit message here.
EOF
)"
```

That substitution triggers a security warning. Every commit. The warning exists for a good reason. Arbitrary command substitution in a shell is dangerous. But this isn't arbitrary. This is Claude Code's own built-in commit command triggering Claude Code's own security layer. The leopard is eating its own face.

Sometimes it slips through. Sometimes it doesn't. You can add patterns to the allow list and they'll work for other commands, but this one is inconsistent. You never know if the next commit will just happen or stop to ask.

## So I Built a Fix

Claude Code has [skills](https://code.claude.com/docs/en/skills). Markdown file with instructions, a trigger description, drop it in `.claude/skills/`. My skill tells Claude to use a different command:

```bash
git commit -F - <<'EOF'
Your commit message here.
EOF
```

No `$()`. Heredoc pipes into `git commit -F -`. Already in my allow list. Runs silent. When Claude uses the skill, commits just happen. The thing you'd expect "commit this" to do.

It worked great for about a week.

## Then I Tried to Improve It

The skill fired maybe half the time. Voice dictation was the problem. I don't type "please create a git commit." I say "looks good, ship that" or "yeah commit and push" or just "do it." Every phrasing is a coin flip against Claude's built-in commit behavior.

So I used the skill-creator tool. It has an eval loop. You feed it test prompts, it runs them through `claude -p`, measures how often the skill fires, and iterates on the description to improve triggering. Best practices, optimization, the works.

Five iterations. Five descriptions, each more aggressive than the last. The final one literally included "MANDATORY skill for creating git commits. Always invoke this skill. Never commit without it."

300 runs. Zero triggers.

| Environment | Result |
|---|---|
| `claude -p` eval harness, 300 runs | 0 triggers |
| Interactive, casual voice | maybe 50/50 |
| Interactive, `/commit` explicit | almost always |
| Built-in commit behavior | every time, permission prompt most of the time |

I asked Claude why. In classic fashion, it offered an explanation it couldn't verify: `claude -p` must load skills differently than interactive mode. Maybe that's true. Nobody could confirm it. The eval harness can't reproduce the runtime, which means every optimization it suggests is fiction. That's not a test. That's a hallucination with a progress bar.

## The Hand-Written Version Was Fine

Here's the thing that bugs me. The skill-builder probably did improve the trigger description. It picked up more of the phrases I actually use, especially the voice-dictated ones. But the original skill I wrote by hand, the one I sat down and thought about for twenty minutes, performed about the same in real interactive sessions.

I spent a few hours with the optimization tool trying to squeeze out improvements that I could have gotten by just adding a few more trigger phrases to my markdown file. The tool can't test what it's trying to improve. It optimized for an environment that doesn't match the one I actually use.

## Two Teams, One Product

I asked Claude to explain why this happens. According to Claude, the permission prompt is a guardrail built by one team to protect users from malicious command substitution. The skill system is a customization layer built by another team to let users teach Claude new behaviors. And the system prompt with its built-in commit instructions was written by a third.

Team A's guardrail fires on Team B's default commit command. Team B's skill system can't reliably override Team A's guardrail because Team C's system prompt competes with user skills for the same intent. Three good ideas that nobody wired together.

Of course, this explanation came from the same AI that told me `claude -p` loads skills differently than interactive mode. So maybe there aren't three teams. Maybe it's two. Maybe it's one person who wrote all of it on a Tuesday. I have no way to know. Claude explains its own architecture the way it explains everything else: confidently, plausibly, and without receipts.

## What Should Just Work

Fix the default commit command. `git commit -F -` with a heredoc. No `$()`, no security prompt. This isn't creative engineering. It's three lines of code that don't trigger your own warning system.

Give user skills priority over built-in behavior when they match the same intent. If someone wrote a skill, they did it on purpose. Don't race them.

And make the eval harness match the runtime. If `claude -p` can't trigger skills that work in interactive mode, the entire skill testing story is broken. I don't know what's different. Neither does Claude. But someone at Anthropic does.

## For Now

My workaround is typing `/commit` to force the skill. It works. Not what I wanted to build, but it's what I've got.

I assume Anthropic will fix the default commit command eventually. A day, a week, a month. And then I'll have to figure out when to turn off my workaround and go back to defaults. I'm not even sure how I'll know it's fixed. There's no changelog entry for "we stopped our own tool from warning you about itself." I'll keep my ears to the ground.

In the meantime, if you want the fix: it's a markdown file with a `git commit -F -` heredoc. Drop it in `.claude/skills/` and type `/commit`. The other half of the problem, getting Claude to use it without the slash command, is above my pay grade.

**Ever forward.**
