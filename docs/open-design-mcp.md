# Open Design MCP wiring

This project can talk to a local [Open Design](https://open-design.ai/) daemon over MCP, so Claude Code (run from this `main/` worktree) can create and manage Open Design *live artifacts* and call its connectors while working on the site.

The wiring lives in `.mcp.json` at the worktree root. **That file is gitignored** because it contains machine-specific absolute paths (the Node binary and the Open Design checkout). This doc is the portable recipe for recreating it on any machine.

## Prerequisites

1. **Open Design checkout + deps.** Clone it somewhere you keep tools and install under Node 24 (Open Design pins `node ~24`; newer Node fails the `better-sqlite3` native build):

   ```bash
   git clone https://github.com/nexu-io/open-design.git ~/src/tools/open-design
   cd ~/src/tools/open-design
   fnm install 24 && fnm use 24          # or nvm; Open Design wants Node ~24
   corepack pnpm install
   corepack pnpm --filter @open-design/daemon rebuild better-sqlite3 --pending
   ```

2. **A running daemon, on a stable port.** The dev runner picks random ports unless you pin the daemon. Pin it to `7456` (what the MCP config below expects) and use a shared data dir:

   ```bash
   cd ~/src/tools/open-design
   export OD_DATA_DIR=~/.open-design
   pnpm tools-dev run web --daemon-port 7456
   # health check:
   curl -s http://127.0.0.1:7456/api/health | jq   # -> { "ok": true, "version": "0.8.0" }
   ```

   The daemon must be running for any MCP tool call to succeed. If Claude Code was started before the daemon, restart Claude Code so it reconnects.

## Recreate `.mcp.json`

Resolve the two machine-specific paths, then write the file:

```bash
# absolute Node 24 binary (version-stable; survives shell restarts)
fnm use 24 >/dev/null
NODE="$(readlink -f "$(which node)")"

# Open Design daemon CLI
OD_CLI=~/src/tools/open-design/apps/daemon/dist/cli.js

cat > .mcp.json <<JSON
{
  "mcpServers": {
    "open-design": {
      "command": "$NODE",
      "args": ["$OD_CLI", "mcp", "live-artifacts"],
      "env": {
        "OD_DAEMON_URL": "http://127.0.0.1:7456",
        "OD_DATA_DIR": "$HOME/.open-design"
      }
    }
  }
}
JSON
```

> The `od` CLI is invoked directly via `node` because the packaged `od` binary collides with the BSD `/usr/bin/od` (octal-dump) on macOS. Don't put Open Design's `od` on your PATH.

## Verify

From the `main/` worktree, with the daemon running:

```bash
# stdio handshake — should print serverInfo then a tools list
printf '%s\n' \
  '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}' \
  '{"jsonrpc":"2.0","method":"notifications/initialized"}' \
  '{"jsonrpc":"2.0","id":2,"method":"tools/list"}' \
  | node ~/src/tools/open-design/apps/daemon/dist/cli.js mcp live-artifacts
```

Inside Claude Code, the server appears as `open-design` and exposes:

- `live_artifacts_create` / `live_artifacts_list` / `live_artifacts_update` / `live_artifacts_refresh`
- `connectors_list` / `connectors_execute`

## Notes

- Tools route through the local daemon — no Open Design cloud, BYOK for any model generation.
- To keep the daemon alive beyond an interactive shell, run it in its own terminal/tmux pane, or wrap it in a launchd/pm2 service.
