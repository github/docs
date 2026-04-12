---
title: GitHub Copilot CLI configuration directory
shortTitle: CLI configuration directory
allowTitleToDifferFromFilename: true
intro: 'Find information about the `~/.copilot` directory, where {% data variables.copilot.copilot_cli_short %} stores configuration, session data, and customizations.'
versions:
  feature: copilot
category:
  - Author and optimize with Copilot # Copilot discovery page
  - Configure Copilot CLI # Copilot CLI bespoke page
contentType: reference
docsTeamMetrics:
  - copilot-cli
---

{% data variables.copilot.copilot_cli_short %} stores its configuration, session history, logs, and customizations in a single directory on your machine. By default, this directory is `~/.copilot` (that is, `$HOME/.copilot`).

This article describes the contents of this directory and how you can use them.

## Directory overview

The `~/.copilot` directory contains the following top-level items.

| Path | Type | Description |
|------|------|-------------|
| `config.json` | File | Your personal configuration settings |
| `mcp-config.json` | File | User-level MCP server definitions |
| `permissions-config.json` | File | Saved tool and directory permissions per project |
| `agents/` | Directory | Personal custom agent definitions |
| `skills/` | Directory | Personal custom skill definitions |
| `hooks/` | Directory | User-level hook scripts |
| `logs/` | Directory | Session log files |
| `session-state/` | Directory | Session history and workspace data |
| `session-store.db` | File | SQLite database for cross-session data |
| `installed-plugins/` | Directory | Installed plugin files |
| `ide/` | Directory | IDE integration state |

> [!NOTE]
> Not all of these items appear immediately. Some are created on demand the first time you use a particular feature—for example, `installed-plugins/` appears only after you install your first plugin.

## User-editable files

The following files are designed to be edited by you directly, or managed through CLI commands.

### `config.json`

This is the primary configuration file for {% data variables.copilot.copilot_cli_short %}. You can edit it directly in a text editor, or use interactive commands like `/model` and `/theme` to change specific values from within a session. The file supports JSON with comments (JSONC).

Common settings include:

| Key | Type | Description |
|-----|------|-------------|
| `model` | string | AI model to use (e.g., `"gpt-5.2"`, `"claude-sonnet-4.6"`) |
| `effortLevel` | string | Reasoning effort level for models that support it |
| `theme` | string | Color theme: `"auto"`, `"dark"`, or `"light"` |
| `mouse` | boolean | Enable mouse support in alt screen mode (default: `true`) |
| `banner` | string | Animated banner frequency: `"always"`, `"once"`, or `"never"` (default: `"once"`) |
| `renderMarkdown` | boolean | Render Markdown in responses (default: `true`) |
| `screenReader` | boolean | Enable screen reader optimizations (default: `false`) |
| `autoUpdate` | boolean | Automatically download CLI updates (default: `true`) |
| `stream` | boolean | Stream responses token by token (default: `true`) |
| `includeCoAuthoredBy` | boolean | Add Co-authored-by to agent-created commits (default: `true`) |
| `respectGitignore` | boolean | Exclude gitignored files from the `@` file picker (default: `true`) |
| `trusted_folders` | string[] | Folders where read/execute permission has been granted |
| `allowed_urls` | string[] | URLs or domains allowed without prompting |
| `denied_urls` | string[] | URLs or domains that are always denied |
| `logLevel` | string | Log verbosity: `"none"`, `"error"`, `"warning"`, `"info"`, `"debug"`, `"all"`, or `"default"` (default: `"default"`) |
| `disableAllHooks` | boolean | Disable all hooks (default: `false`) |
| `hooks` | object | Inline user-level hook definitions |

For a full list of configuration settings, enter `copilot help config` in your terminal.

> [!TIP]
> Some settings can also be set using command-line flags. For example, the `/model` slash command writes your model selection to this file so it persists across sessions.

### `mcp-config.json`

Defines MCP (Model Context Protocol) servers available at the user level. These servers are available in all your sessions, regardless of which project directory you're in. Project-level MCP configurations (in `.mcp.json`, `.github/mcp.json`, or `.vscode/mcp.json`) take precedence over user-level definitions when server names conflict.

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers).

### `agents/`

Store personal custom agent definitions here as `.agent.md` files. Agents placed in this directory are available in all your sessions. Project-level agents (in `.github/agents/`) take precedence over personal agents if they share the same name.

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/create-custom-agents-for-cli).

### `skills/`

Store personal custom skill definitions here. Each skill lives in a subdirectory containing a `SKILL.md` file—for example, `~/.copilot/skills/my-skill/SKILL.md`. Personal skills are available in all your sessions. Project-level skills take precedence over personal skills if they share the same name.

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/create-skills).

### `hooks/`

Store user-level hook scripts here. These hooks apply to all your sessions. You can also define hooks inline in `config.json` using the `hooks` key. Repository-level hooks (in `.github/hooks/`) are loaded alongside user-level hooks.

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/use-hooks).

## Automatically managed files

The following items are managed by the CLI. You generally should not edit them manually.

### `permissions-config.json`

Stores your saved tool and directory permission decisions, organized by project location. When you approve a tool or grant access to a directory, the CLI records the decision here so you aren't prompted again in the same project.

> [!NOTE]
> If you want to reset permissions for a project, you can delete the relevant entry from this file. However, editing the file while a session is running may cause unexpected behavior.

### `session-state/`

Contains session history data, organized by session ID in subdirectories. Each session directory stores an event log (`events.jsonl`) and workspace artifacts (plans, checkpoints, tracked files). This data enables session resume (`--resume` or `--continue`).

### `session-store.db`

A SQLite database used by the CLI for cross-session data such as checkpoint indexing and search. This file is automatically managed and should not be edited.

### `logs/`

Contains log files for CLI sessions. Each session creates a log file named `process-{timestamp}-{pid}.log`. These files are useful for debugging issues.

> [!TIP]
> To find the log file for your current session, enter `/session` in an interactive session. The output includes the full path to the log file, along with other session details such as the session ID, duration, and working directory.

### `installed-plugins/`

Contains the files for plugins you have installed. Plugins installed from a marketplace are stored under `installed-plugins/{marketplace-name}/{plugin-name}/`. Directly installed plugins are stored under `installed-plugins/_direct/`. Manage plugins using the `copilot plugin` commands rather than editing this directory directly.

For more information, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-plugin-reference).

### `ide/`

Contains lock files and state for IDE integrations (for example, when {% data variables.copilot.copilot_cli_short %} connects to {% data variables.product.prodname_vscode %}). This directory is automatically managed.

## Changing the location of the configuration directory

You can override the default `~/.copilot` location in two ways:

- **Environment variable**: Set `COPILOT_HOME` to the path of the directory you want to use.

  ```bash copy
  export COPILOT_HOME=/path/to/my/copilot-config
  ```

- **Command-line option**: Use `--config-dir` when launching the CLI.

  ```bash copy
  copilot --config-dir /path/to/my/copilot-config
  ```

The `--config-dir` option takes precedence over `COPILOT_HOME`, which in turn takes precedence over the default `~/.copilot` location.

### Things to be aware of

- `COPILOT_HOME` replaces the entire `~/.copilot` path. The value you set should be the complete path to the directory you want to use for the configuration files and subdirectories.
- Changing the directory means your existing configuration, session history, installed plugins, and saved permissions will not be found in the new location. Copy or move the contents of `~/.copilot` to the new location if you want to preserve them.
- The **cache directory** (used for marketplace caches, auto-update packages, and other ephemeral data) follows platform conventions and is not affected by `COPILOT_HOME`. It is located at:
  - **macOS**: `~/Library/Caches/copilot`
  - **Linux**: `$XDG_CACHE_HOME/copilot` or `~/.cache/copilot`
  - **Windows**: `%LOCALAPPDATA%/copilot`

  To override the cache directory separately, set `COPILOT_CACHE_HOME`.

## What you can safely delete

| Item | Safe to delete? | Effect |
|------|-----------------|--------|
| `logs/` | Yes | Log files are re-created each session. Deleting them has no functional impact. |
| `session-state/` | With caution | Deleting removes session history. You will no longer be able to resume past sessions. |
| `session-store.db` | With caution | Deleting removes cross-session data. The file is re-created automatically. |
| `config.json` | With caution | Resets all configuration to defaults. You will need to reconfigure your preferences. |
| `permissions-config.json` | With caution | Resets all saved permissions. The CLI will prompt you again for tool and directory approvals. |
| `installed-plugins/` | Not recommended | Use `copilot plugin uninstall` instead, to ensure plugin metadata in `config.json` stays consistent. |
| `mcp-config.json` | Not recommended | You will lose your user-level MCP server definitions. Back up first. |
| `agents/`, `skills/`, `hooks/` | Not recommended | You will lose your personal customizations. Back up first. |

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-programmatic-reference)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-plugin-reference)
