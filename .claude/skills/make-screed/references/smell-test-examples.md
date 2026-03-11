# AI Smell Test: Before and After

These are real examples from SCREED drafts. The "before" version is what the AI produced on first pass. The "after" is what survived the smell test. Study the difference. When you draft, aim for the "after" on the first try.

## 1. Uniform Section Shapes

**BEFORE (bad):** Every section is header + 2-3 paragraphs of equal length.

```markdown
## The Problem

Claude Code uses command substitution for commits. This triggers a
security prompt every time. You can't suppress it or allowlist around it.

The default behavior is baked into the system prompt. Every user who
commits regularly hits this friction. For a tool that promises to remove
friction, that's a lot of friction.

## The Fix

Claude Code has skills. You write a markdown file with instructions and
drop it in a directory. Claude matches the description against your
request and invokes the skill.

My skill uses a different git command. No command substitution, no
security prompt. It reads the commit message from stdin via heredoc.
Clean and silent.

## The Result

When Claude uses the skill, commits happen without interruption. No
popups, no extra clicks. Just the commit as you'd expect it to work.

The problem is Claude doesn't always use it. The system prompt competes
with the skill for the same intent.
```

Three sections. Each one is a header and two paragraphs. Same height, same rhythm, same shape. A robot wrote this and you can tell from the silhouette alone before reading a word.

**AFTER (good):**

```markdown
## The System Is Protecting You From Itself

Every time Claude Code commits code, it runs this:

    git commit -m "$(cat <<'EOF'
    Your commit message here.
    EOF
    )"

That $() triggers a security prompt. Every commit. Every time. Can't
suppress it. Can't allowlist around it.

The warning exists for a good reason. Arbitrary command substitution in
a shell is dangerous. But this isn't arbitrary. This is Claude Code's
own built-in commit command triggering Claude Code's own security layer.
The leopard is eating its own face.

## So I Fixed It

Claude Code has skills. Markdown file with instructions, a description,
drop it in .claude/skills/. My skill uses git commit -F - instead. No
$(), runs silent.

When Claude uses it, commits just happen. The thing you'd expect
"commit this" to do.

## Half the Time

Claude doesn't always use it.
```

First section is long (code block + 3 paragraphs). Second is short (2 paragraphs). Third opens with one blunt sentence. The shapes are different. That's what real writing looks like from a distance.

---

## 2. Editorial Board Voice vs. Personal Voice

**BEFORE (bad):**

```markdown
That's backwards. If a user builds infrastructure to fix a broken
default, the platform should defer to the user's fix, not compete with
it. The user did the work. They tested it. They know their own workflow.
Overriding them with a worse default is not a safety feature. It's a
product bug.
```

This reads like a position paper. "The user" in third person. Prescriptive language ("the platform should"). Making a general argument instead of telling a specific story. An editorial board wrote this.

**AFTER (good):**

```markdown
I built infrastructure to fix a broken default. Tested it. Filed
feedback with Anthropic. The fix works. The platform just doesn't
reliably use it.
```

First person. Specific. Short. Says the same thing but sounds like a person who actually did the work, not someone writing about a hypothetical user.

---

## 3. Bold-Numbered Listicle

**BEFORE (bad):**

```markdown
Three things, in order of impact:

**1. Fix the default.** Use git commit -F - with a heredoc instead of
$() wrapping. This eliminates the security prompt entirely.

**2. Let user skills override built-in behavior.** If a user has a skill
that matches an intent, the skill should win. The user made a deliberate
choice. Honor it.

**3. Make the eval harness match the runtime.** If claude -p doesn't load
skills the way interactive mode does, the optimization loop is testing a
fantasy.
```

Bold numbers. Each item has a title and a two-sentence explanation. This is a Medium listicle. It's the AI's favorite structure for "here are my suggestions."

**AFTER (good):**

```markdown
Fix the default command. git commit -F - with a heredoc. No $(), no
security prompt, no problem. This isn't clever engineering. It's just a
better command that doesn't trigger your own warning system.

Give user skills priority over built-in behavior for the same intent. If
someone wrote a skill, they did it on purpose. Don't compete with them.

And make claude -p load skills the way interactive mode does. If the
eval harness can't reproduce the runtime, the optimization loop is
testing a fantasy. That's not a test. That's a hallucination with a
progress bar.
```

Same three points. No bold headers, no numbers, no uniform structure. First point gets three sentences. Second gets two. Third gets three plus a punchline. Reads like someone talking through what they'd fix.

---

## 4. Bumper Sticker Lines

**BEFORE (bad):**

```markdown
I'm not mad. I'm building. That's what SCREED is about.
```

Sounds great on a t-shirt. Says nothing specific. Could be about anything. This is the AI trying to sound profound. Cut it.

**AFTER (good):**

Just don't include a line like this. If you're tempted to write a quotable one-liner that summarizes the emotional state of the piece, the piece should be doing that work through its content, not through a slogan.

---

## 5. Resolution Addiction

**BEFORE (bad):**

```markdown
## What This Actually Means

This isn't really about commits. It's about who owns the behavior of an
AI tool.

Claude Code lets you customize it. Skills, CLAUDE.md files, settings,
allow lists. The promise is: configure the tool to work the way you work.
But when your customization conflicts with a built-in default, the
default wins most of the time. Your configuration is a suggestion. The
system prompt is law.

That's backwards. If a user builds infrastructure to fix a broken
default, the platform should defer to the user's fix, not compete with
it. The user did the work. They tested it. They know their own workflow.
Overriding them with a worse default is not a safety feature. It's a
product bug.

And there's a specific irony here. The $() security prompt exists to
protect you from arbitrary command substitution. Good. But the built-in
commit behavior is the thing triggering it. Claude Code is warning you
about Claude Code. The system is protecting you from itself.
```

Four paragraphs, each making a point, each resolving neatly. Introduction, argument, counter-argument, ironic observation. It's a five-paragraph essay with one paragraph missing. Every idea wraps up before the next one starts.

**AFTER (good):**

```markdown
## Who Owns the Behavior?

Claude Code sells customization. Skills, CLAUDE.md, settings, allow
lists. Configure it to work the way you work. But when your config
conflicts with a built-in default, the default wins. Your configuration
is a suggestion. The system prompt is law.

I built infrastructure to fix a broken default. Tested it. Filed
feedback with Anthropic. The fix works. The platform just doesn't
reliably use it.
```

Two paragraphs. The first one sets up the tension and doesn't resolve it. The second one sits in the frustration without explaining it away. The irony observation ("the system is protecting you from itself") moved to the opening section where it belongs, because that's the hook, not the analysis.

---

## 6. The Silhouette Test

Scroll through your draft without reading it. Just look at the shapes.

Bad silhouette:
```
## Header
¶¶¶¶¶¶¶¶¶¶
¶¶¶¶¶¶¶¶¶¶

## Header
¶¶¶¶¶¶¶¶¶¶
¶¶¶¶¶¶¶¶¶¶

## Header
¶¶¶¶¶¶¶¶¶¶
¶¶¶¶¶¶¶¶¶¶
```

Good silhouette:
```
## Header
¶¶¶¶¶¶¶¶¶¶
    [code block]
¶¶¶¶¶¶¶¶¶¶
¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶

## Header
¶¶¶¶¶¶¶¶¶¶
¶¶¶¶

## Header
¶¶¶¶¶¶¶¶¶¶¶¶¶¶
¶¶¶¶¶¶¶¶¶¶
| table |
¶¶

## Header
¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
```

If the silhouette looks like a grid, you have a problem. Real writing is ragged.
