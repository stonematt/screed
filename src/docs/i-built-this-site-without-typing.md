---
title: "I Built This Site Without Typing"
date: 2026-03-03T20:00:00
description: "A friend asked about a 25-year-old DNS record. The answer led to Netlify. So I talked a computer into building me a website."
author: stonematt
ai_assisted: true
ai_disclosure: "This entire post, the site it lives on, and the infrastructure under it were built by voice dictation with Claude Code. The human talked. The AI typed. Both reviewed."
---

## The Prompt That Started This

Here's exactly what I said to start this article. Raw voice dictation, unedited:

> Let's make a new branch to tell a little bit of a backstory of the generation of the site. Maybe a little bit about me. I like the RSS feed, but I want to kind of lean into the idea that I built the site without typing anything I can't exactly say I didn't type anything but almost all of it's been voice driven. What an amazing accessibility success story. I think this might also be a post that's worthy of Cross posting into sub stack and medium and I don't know maybe some other destinations LinkedIn for sure You're gonna be my partner in this I wonder if we should introduce something like tags for articles some of these are prompting guidance some or just opinion pieces I gotta think about how I want to organize the content a little bit

That's it. No punctuation. Half the sentences bleed into the next one. And it produced the article you're reading now. That's also how the entire site began. A messy, spoken thought into a terminal window.

## Who I Am

"Why are you asking?" It's my favorite question. Anytime this particular friend comes to me, there's almost always an interesting reason behind it.

He had a typical in-the-weeds question about how to set up a DNS record and where his domain was hosted. He came to me because I helped him set it up in 2001. Twenty-five years ago. Frankly, except for email, neither of us thinks about this domain anymore. But now he wanted to spin up a website.

The answer led to Netlify. I'd never used it. Maybe I could've read the docs, but it's more fun to go do. So I decided to build something.

I'm stonematt. Not a developer. Product guy, operations background. I've worked with creative founders, aggressive project managers, innovative architects, insidious QA teams, and salt-of-the-earth operations crews. I know what an amazing software development lifecycle actually looks like. I can read code. I understand architecture. I just don't usually write it.

Here's where it gets weird: I didn't want to *work* on it. I was in the middle of something else. I wanted to talk about it. Describe what I wanted, think out loud, let someone else do the typing.

That someone else was Claude Code.

## The Star Trek Thing

Every generation of nerds has the same fantasy: talk to the computer and have it just *do the thing*. Picard said "Tea. Earl Grey. Hot." and a cup appeared. Three words, no menus, no config files. (In one episode the computer gave him a potted plant instead. Voice interfaces have always had bugs.)

We're not quite there yet. But we're closer than most people realize.

I opened a terminal, started Claude Code, and said out loud, via voice dictation, "I want to build a website and deploy it to Netlify. What are my options?" Then I described how I wanted the site to work, the voice and tone of the content, the kinds of things we'd publish. Claude asked clarifying questions. I answered them. It started building.

The CSS. The layouts. The content security headers. The dark mode toggle. The RSS feed. This post. I'm dictating it right now.

## What "Without Typing" Actually Means

I typed *some* things. Git commands here and there. A URL I needed to paste. The occasional correction when voice dictation mangled something past the point of no return.

But the code? The templates? The config files? The content? All voice. I'd estimate 95% of the keystrokes in this project belong to Claude, not to me. I described what I wanted, made decisions, said "yes, do that" or "no, try something else."

That's not laziness. It's a different job description.

## The Voice Dictation Tax

Voice dictation doesn't produce clean text. It produces *interpretive jazz*. Here are real examples from the session that built this site:

| What I said (via dictation) | What I meant |
|---|---|
| "start the deaf server" | start the dev server |
| "the Nett Lofi platform" | the Netlify platform |
| "good ibuprofen" | GitHub |
| "we might be factor" | we might refactor |
| "separate repost" | separate repos |
| "red map Epix" | roadmap epics |
| "healthy incapable" | healthy and capable |
| "all my facilities" | all my faculties |

All of those went into Claude Code exactly as transcribed. All were interpreted correctly. I never had to stop and retype a correction. Claude just figured out what I meant and kept going.

**The AI doesn't need clean input to do good work.** It needs intent. Voice dictation delivers intent with noise. Claude filters the noise.

## How It Actually Works

1. **I talk.** Voice dictation converts speech to text. Badly, sometimes. You learn to roll with it.
2. **Claude interprets.** It figures out what I meant, not what I said. "Make a new branch for the RSS feed" doesn't need perfect diction.
3. **Claude writes code.** Real code. Files, configs, templates. It reads what's already there, understands the patterns, and extends them.
4. **I review.** I read the diffs. I ask for changes. I say "that's wrong" or "explain why you did it that way." The voice is the interface, but the judgment is mine.

Pair programming where one person talks and the other types. Except the one typing never gets tired, never argues about tabs versus spaces, and can hold the entire codebase in its head.

I'm the product owner who happens to be the only one in the room. I make architectural decisions based on experience, not expertise. Claude fills the expertise gap. I fill the "what are we building and why" gap.

## The Accessibility Angle

I'm healthy. I have all my faculties (not my "facilities," as dictation helpfully transcribed). I can type just fine. I chose this workflow because I was curious, not because I needed it.

But think about what this means for people who *do* need it.

Someone with RSI, limited mobility, or any condition that makes a keyboard painful or impossible can build a production website by talking. Not a toy. Not a demo. A real site with a build pipeline, security headers, SEO, an RSS feed, and a deployment workflow.

Not just developers, either. A product manager, a designer, a writer. Anyone who understands what they want built can describe it out loud and get working code back. The keyboard is no longer the bottleneck. Knowing what to ask for is.

## What Surprised Me

The dictation errors turned out to be useful. If Claude can figure out that "good ibuprofen" means "GitHub," it can handle anything your users throw at it. Every mangled transcription is an accidental robustness test.

Talking changes how you think. Typing makes you precise from the start. Speaking makes you explore. I'd ramble through an idea and Claude would pull out the actionable parts. Some of my best decisions on this project came from thinking out loud, not from planning ahead.

The review step matters more than I expected. Talking to a computer that writes code sounds like a recipe for disaster. It's not, *if* you actually read what it writes. Voice doesn't remove the need for judgment. It removes the typing.

And the big one: product people can ship. I've spent my career writing specs for other people to build. This time I built it myself, out loud, to a terminal window. The distance between "person with a vision" and "person who ships" just shrank.

## The Site

You're looking at it. [SCREED](/). A counterculture document drop built on Eleventy, deployed to Netlify, styled with vanilla CSS. No frameworks. No build tools beyond 11ty itself. Just words and opinions, served fast.

The whole thing exists because a friend had a Netlify question and I decided to answer it in the most extra way possible.

I regret nothing.

## Credit Where It's Due

This site was built with Claude Code. I talked, it typed. It asked good questions, caught bugs, and never once asked me to repeat myself. If you're building with AI and not giving it credit, you're kidding yourself. This is a collaboration.

---

**Ever forward.**
