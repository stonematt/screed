---
title: "Don't Pip Into the Void — Python Environments for AI-Assisted Dev"
date: 2026-03-03
author: stonematt
description: "Your AI agent is installing Python packages. Do you know where they're going? Neither does it."
---

## The Problem

You're on a Mac. You're building something with Python. Your AI coding assistant — Claude, Copilot, whatever — is helpfully running `pip install` for you. But where are those packages going?

If you haven't set up an environment, they're going into your system Python. That's Apple's Python. It ships with macOS, it's probably Python 3.9, and it's used by system tools you don't want to break. Every `pip install` into that global space is a roll of the dice.

You need two things: a **modern Python** you control, and **isolated environments** so each project has its own packages. That's what conda does.

## Why Conda (Not Just venv)

Python has a built-in tool called `venv`. It works. But conda does more:

- **Installs Python itself** — you pick the version per project (3.11, 3.12, whatever you need)
- **Manages non-Python dependencies** — some packages need C libraries that pip can't handle
- **One tool for everything** — no juggling `pyenv` + `venv` + `pip` as separate concerns

We're installing **[Miniconda](https://docs.anaconda.com/miniconda/)** — the minimal version. No bloat, no GUI, just the package manager. If you want the full picture of what conda can do, the [conda docs](https://docs.conda.io/projects/conda/en/stable/) are worth a browse.

## Prerequisites

If you haven't set up your bash dotfiles yet, do that first — see [Unfork Your Terminal](/docs/unfork-your-terminal/). The conda installer modifies your `.bashrc`, and you want that file to exist and be structured before conda writes to it.

## The Prompt

Paste this into a Claude Code conversation. It installs Miniconda and wires it into your shell.

```
Set up Miniconda for Python environment management. IMPORTANT: Check
what's already installed before making changes.

PHASE 1 — AUDIT (read-only)

1. Check if conda is already installed:
   - Run: which conda && conda --version
   - Check if a conda init block already exists in ~/.bashrc
   - If conda is already installed and initialized, skip to step 5
     and just verify the configuration

2. Check if pyenv, asdf, or another Python version manager is installed.
   If so, tell me what you found and ask how I want them to coexist
   with conda before proceeding.

PHASE 2 — INSTALL (only if conda is not already present)

3. Install Miniconda via Homebrew:
   brew install --cask miniconda

4. Initialize conda for bash:
   /opt/homebrew/Caskroom/miniconda/base/bin/conda init bash

   This will add a conda initialization block to ~/.bashrc. That's expected.

PHASE 3 — CONFIGURE

5. Configure conda to NOT auto-activate the base environment
   (skip if already set):
   conda config --set auto_activate_base false

   This keeps your prompt clean — you activate environments explicitly
   when you need them.

6. Source the updated bashrc:
   source ~/.bashrc

7. Verify the installation:
   conda --version
   which python3 (should still be system Python since base is not active)

8. Show me how to create a project environment by running:
   conda create -n demo python=3.12 -y
   conda activate demo
   which python3 (should now point to the conda env)
   conda deactivate

9. Remove the demo environment:
   conda env remove -n demo

Report: what was already installed, what you changed, what version
of conda is active, and confirm auto_activate_base is false.
```

## Teaching Your AI Assistant

Here's the important part. Your AI agent doesn't know about your conda setup unless you tell it. Create a `CLAUDE.md` file in the root of your project with this section:

```markdown
## Python Environment

This project uses conda for environment management. The environment
name matches the project directory name.

Before running any `pip install` or Python package installation:
1. Check if a conda environment exists for this project: `conda env list`
2. If not, create one: `conda create -n <project-name> python=3.12 -y`
3. Activate it: `conda activate <project-name>`
4. Then install packages with pip inside the active environment

Never install Python packages into the base environment or system Python.
```

Put that in your project, and Claude will create and use a conda environment instead of spraying packages into the void.

## The Daily Workflow

Once this is set up, your routine looks like:

```bash
cd my-project          # go to your project
conda activate my-project  # activate its environment
# ... work, let Claude install packages, everything stays contained ...
conda deactivate       # when you're done
```

If you ever want to see what's installed in an environment:

```bash
conda activate my-project
pip list               # shows packages in this env only
```

If you want to blow away an environment and start fresh:

```bash
conda env remove -n my-project
```

Nothing outside that environment is affected. That's the whole point.

> You wouldn't let a stranger rearrange your kitchen. Don't let an AI agent rearrange your system Python.

---

**END TRANSMISSION**
