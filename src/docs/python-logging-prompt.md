---
title: "Python Logging Bootstrap — One-Shot Claude Code Prompt"
date: 2026-03-02T14:00:00
author: stonematt
description: "A one-shot prompt to bootstrap centralized, leveled Python logging in any project via Claude Code."
---

# Python Logging Bootstrap — One-Shot Claude Code Prompt

Good logging saves you hours. This sets up centralized, leveled logging so every module writes to a daily-rotated log file at `logs/<project>_YYMMDD.log` while keeping your terminal clean (console only shows errors). You get full dotted module paths in every line, so when something breaks you can trace it through the pipeline. Override the level at runtime with `LOGLEVEL=DEBUG` — no code changes needed.

<details>
<summary>Example log output</summary>

```
2026-02-28 19:18:18 - WARNING - src.ingest: No transcript available for Let's talk about
 Trump's state of the union: pregame edition...., using RSS description
2026-02-28 19:18:18 - INFO - src.main: Processing episode 1/1: Belle of the Ranch / Let's
 talk about Trump's state of the union: pregame edition....
2026-02-28 19:18:18 - INFO - src.generate: Generating 3 candidates to select top 1 for
 episode: Let's talk about Trump's state of the union: pregame edition....
2026-02-28 19:18:18 - DEBUG - src.generate: === PROMPT SENT TO LLM ===
You are a political voice writer for the goneelsewhere project. You generate
short-form social media posts (tweets) based on current events from independent
media sources.
```

</details>

Two parts below: a **one-time setup prompt** you paste into Claude Code to create the logging infrastructure, then a **one-line CLAUDE.md addition** so it keeps using it.

---

## Part 1: One-Time Setup Prompt

Paste this into a Claude Code conversation to bootstrap logging in your project.
Replace `<project>` with your actual package name (e.g., `myapp`).

> **Prompt to paste:**

```
Set up centralized Python logging for this project. Create the files and
modifications described below.

1. Create `<project>/utils/log_util.py` with two functions:

   - `configure_logging(level, log_file)` — called once at startup to set up
     root logger handlers. Console handler shows ERROR only (keep terminal
     clean). File handler shows the configured level and above with daily
     rotation (filename gets a _YYMMDD suffix). The LOGLEVEL environment
     variable overrides the config-file level at runtime.

   - `app_logger(name)` — returns a named logger (propagate=True,
     level=DEBUG) that inherits root handlers. Every module calls this with
     __name__.

   Log format: "%(asctime)s - %(levelname)s - %(name)s: %(message)s"
   Date format: "%Y-%m-%d %H:%M:%S"
   Use %(name)s (not %(module)s) so the full dotted path shows in logs.

2. In the application entry point, call configure_logging() before any other
   work:
     log_level = os.getenv("LOGLEVEL", "INFO").upper()
     configure_logging(log_level, "logs/<project>.log")

3. Add "logs/" to .gitignore if not already there.

4. In any existing modules that use print() for diagnostic output, replace
   with logger calls at appropriate levels.

Follow these log level conventions:
- DEBUG: internal diagnostics, data flow, cache ops, request/response payloads
- INFO: operational milestones, successful state changes, startup/shutdown
- WARNING: non-critical issues, fallbacks, rate limits, missing optional data
- ERROR: failures that stop an operation, missing critical data

Follow these exception handling patterns:
- logger.error(f"...{e}") + raise — when the caller handles recovery
- logger.warning(f"...") + return None — graceful degradation for optional ops
- logger.exception(f"...") + raise — unexpected errors (auto-includes traceback)
- Never silently swallow exceptions — always log before returning a fallback

When writing tests for error paths, mock the module-level logger and assert
the expected log calls were made:
  @patch("<project>.some_module.logger")
  def test_warns_on_rate_limit(self, mock_logger):
      ...
      mock_logger.warning.assert_called_once()
```

---

## Part 2: CLAUDE.md Snippet (Add Once, Stays Forever)

After the setup prompt runs, add only these lines to your CLAUDE.md. This is
all Claude Code needs to follow the pattern going forward — the implementation
details live in the code, not the prompt.

```markdown
## Logging

All logging via `<project>.utils.log_util.app_logger(__name__)` — never print(). Follow repo conventions for log levels.
```

That's 1 line of context loaded per conversation instead of 200.
