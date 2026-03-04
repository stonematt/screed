---
title: "Unfork Your Terminal — A Dotfiles Primer for Mac"
date: 2026-03-03
author: stonematt
description: "Your terminal is showing you bash-3.2$. That's not a prompt, it's a cry for help."
---

## What Are Dotfiles?

Files that start with a dot (`.bashrc`, `.bash_profile`, `.gitconfig`) are hidden configuration files that live in your home directory. They control how your shell looks, what shortcuts you have, and how your tools behave. Maybe you've already got some. Maybe you don't. Either way, the prompt below will get you to a solid baseline without torching what's already there.

## The Mac Bash Confusion

macOS does something annoying: it treats every new Terminal window as a "login shell," which means it reads `.bash_profile` but **ignores** `.bashrc`. Linux does the opposite for interactive shells. This has confused people for decades.

The fix is simple and universal: make `.bash_profile` source `.bashrc`, then put everything in `.bashrc`. One file to rule them all. The prompt below does exactly this.

## What You're Getting

After running the prompt below, your terminal will have:

- **A real prompt** — shows your current directory and git branch (if you're in a repo) instead of the default `bash-3.2$`
- **Color output** — `ls`, `grep`, and friends will use color so you can actually read them
- **Useful aliases** — `ll` for detailed file lists, `gs` for git status, and a few others that save keystrokes
- **Git tab completion** — hit tab to complete branch names, commands, and remotes
- **Nothing broken** — your existing config is read first, preserved, and backed up. Only missing pieces get added

## The Prompt

Paste this into a Claude Code conversation. It will audit your existing shell config, preserve everything that's already working, and fill in what's missing.

```
Set up my bash dotfiles. IMPORTANT: Do not clobber my existing config.
Read first, merge in, preserve what's already there.

PHASE 1 — AUDIT (read-only, no changes yet)

1. Read ~/.bash_profile and ~/.bashrc (if they exist). Summarize what's
   already configured:
   - PATH modifications and tool initializations (pyenv, nvm, conda,
     homebrew, etc.)
   - Custom aliases and functions
   - Environment variables (EDITOR, LANG, etc.)
   - Prompt (PS1) customization
   - Completions being sourced
   - Anything else notable

2. Show me the summary and tell me what you plan to ADD, what you
   plan to KEEP AS-IS, and flag anything that conflicts with the
   setup below. Wait for my approval before making changes.

PHASE 2 — BACK UP AND MODIFY (only after I approve)

3. Back up existing files:
   - If ~/.bash_profile exists, copy to ~/.bash_profile.backup.$(date +%Y%m%d)
   - If ~/.bashrc exists, copy to ~/.bashrc.backup.$(date +%Y%m%d)

4. Ensure ~/.bash_profile sources ~/.bashrc:
   - If it already does, leave it alone
   - If not, ADD the sourcing line. Keep everything else in the file intact.
     [ -f ~/.bashrc ] && source ~/.bashrc

5. In ~/.bashrc, KEEP all existing content and ADD any of the following
   that are missing. Do not duplicate anything already present. If an
   existing setting conflicts (e.g., a different HISTSIZE), keep the
   existing value.

   a) SHELL OPTIONS (add if missing)
      - shopt -s extglob
      - shopt -s cdspell
      - shopt -s checkwinsize

   b) HISTORY (add if missing)
      - HISTSIZE=10000, HISTFILESIZE=20000
      - HISTCONTROL=ignoreboth
      - shopt -s histappend

   c) PROMPT — PS1 (add only if no custom PS1 exists)
      - A parse_git_branch function:
        git branch 2>/dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
      - PS1 showing: \w + git branch in color + $
      - ANSI colors: directory in blue, git branch in yellow
      - If a custom PS1 already exists, leave it alone

   d) ALIASES (add only aliases that don't already exist)
      - ll='ls -lahF'
      - la='ls -A'
      - gs='git status'
      - gst='git status --short'
      - gd='git diff'
      - gl='git log --oneline -20'
      - ..='cd ..'
      - ...='cd ../..'

   e) COLORS (add if missing)
      - export CLICOLOR=1
      - LSCOLORS for macOS
      - grep color via alias (not GREP_OPTIONS, which is deprecated)

   f) BREW SETUP (add if not already initialized)
      - eval "$(/opt/homebrew/bin/brew shellenv)" guarded by
        [ -d /opt/homebrew ] check

   g) COMPLETIONS (add if not already sourced)
      - Source bash-completion from brew if installed

6. Install bash-completion via brew (skip if already installed):
   brew install bash-completion

7. Source the updated config: source ~/.bash_profile

8. Verify: echo $PS1 && type parse_git_branch

Report: what you found in the existing files, what you added,
what you left alone, and the backup file paths.
```

## After You Run It

Close your terminal and open a new window. You should see your working directory and (if you `cd` into a git repo) the branch name in your prompt. If something went sideways, your old files are saved with today's date — just copy them back.

> The terminal is where you live now. Might as well hang some curtains.

---

**END TRANSMISSION**
