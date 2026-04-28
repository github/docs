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
| `settings.json` | File | Your personal configuration settings |
| `copilot-instructions.md` | File | Personal custom instructions (applied to all sessions) |
| `instructions/` | Directory | Additional personal `*.instructions.md` files |
| `mcp-config.json` | File | User-level MCP server definitions |
| `lsp-config.json` | File | User-level LSP server definitions |
| `permissions-config.json` | File | Saved tool and directory permissions per project |
| `agents/` | Directory | Personal custom agent definitions |
| `skills/` | Directory | Personal custom skill definitions |
| `hooks/` | Directory | User-level hook scripts |
| `logs/` | Directory | Session log files |
| `session-state/` | Directory | Session history and workspace data |
| `session-store.db` | File | SQLite database for cross-session data |
| `installed-plugins/` | Directory | Installed plugin files |
| `plugin-data/` | Directory | Persistent data for installed plugins |
| `ide/` | Directory | IDE integration state |

> [!NOTE]
> Not all of these items appear immediately. Some are created on demand the first time you use a particular feature—for example, `installed-plugins/` appears only after you install your first plugin.

## User-editable files

The following files are designed to be edited by you directly, or managed through CLI commands.

### `settings.json`

This is the primary configuration file for {% data variables.copilot.copilot_cli_short %}. You can edit it directly in a text editor, or use interactive commands like `/model` and `/theme` to change specific values from within a session. The file supports JSON with comments (JSONC).

> [!NOTE]
> The configuration file was renamed from `config.json` to `settings.json`. Existing settings are automatically migrated from `~/.copilot/config.json` on startup.

For the full list of settings and how they interact with repository-level configuration, see [Configuration file settings](#configuration-file-settings) later in this article.

> [!TIP]
> Run `copilot help config` in your terminal for a quick reference.

### `copilot-instructions.md`

Personal custom instructions that apply to all your sessions, regardless of which project you're working in. This file works the same way as a repository-level `copilot-instructions.md` but applies globally.

For more information, see [AUTOTITLE](/copilot/how-tos/configure-custom-instructions/add-repository-instructions).

### `instructions/`

Store additional personal instruction files here as `*.instructions.md` files. These are loaded alongside `copilot-instructions.md` and apply to all your sessions. You can organize instructions by topic—for example, `~/.copilot/instructions/code-style.instructions.md`.

### `mcp-config.json`

Defines MCP (Model Context Protocol) servers available at the user level. These servers are available in all your sessions, regardless of which project directory you're in. Project-level MCP configurations (in `.mcp.json` or `.github/mcp.json`) take precedence over user-level definitions when server names conflict.

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers).

### `lsp-config.json`

Defines Language Server Protocol (LSP) servers available at the user level. These servers provide language intelligence (diagnostics, completions, etc.) to the agent. Manage this file using the `/lsp` slash command, or edit it directly.

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/set-up-copilot-cli/add-lsp-servers).

### `agents/`

Store personal custom agent definitions here as `.agent.md` files. Agents placed in this directory are available in all your sessions. Project-level agents (in `.github/agents/`) take precedence over personal agents if they share the same name.

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/create-custom-agents-for-cli).

### `skills/`

Store personal custom skill definitions here. Each skill lives in a subdirectory containing a `SKILL.md` file—for example, `~/.copilot/skills/my-skill/SKILL.md`. Personal skills are available in all your sessions. Project-level skills take precedence over personal skills if they share the same name.

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/add-skills).

### `hooks/`

Store user-level hook scripts here. These hooks apply to all your sessions. You can also define hooks inline in your user configuration file (`~/.copilot/settings.json`) using the `hooks` key. Repository-level hooks (in `.github/hooks/`) are loaded alongside user-level hooks.

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

### `plugin-data/`

Contains persistent data for installed plugins, organized by marketplace and plugin name. This data is managed by the plugins themselves and should not be edited manually.

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
| `agents/`, `skills/`, `hooks/` | Not recommended | You will lose your personal customizations. Back up first. |
| `copilot-instructions.md`, `instructions/` | Not recommended | You will lose your personal custom instructions. Back up first. |
| `installed-plugins/` | Not recommended | Use `copilot plugin uninstall` instead, to ensure plugin metadata in `settings.json` stays consistent. |
| `logs/` | Yes | Log files are re-created each session. Deleting them has no functional impact. |
| `lsp-config.json` | Not recommended | You will lose your user-level LSP server definitions. Back up first. |
| `mcp-config.json` | Not recommended | You will lose your user-level MCP server definitions. Back up first. |
| `permissions-config.json` | With caution | Resets all saved permissions. The CLI will prompt you again for tool and directory approvals. |
| `plugin-data/` | Yes | Plugin persistent data is re-created as needed. |
| `session-state/` | With caution | Deleting removes session history. You will no longer be able to resume past sessions. |
| `session-store.db` | With caution | Deleting removes cross-session data. The file is re-created automatically. |
| `settings.json` | With caution | Resets all configuration to defaults. You will need to reconfigure your preferences and re-authenticate. |

## Configuration file settings

Settings cascade from user to repository to local, with more specific scopes overriding more general ones. Command-line options and environment variables always take the highest precedence.

| Scope | Location | Purpose |
|-------|----------|---------|
| User | `~/.copilot/settings.json` | Global defaults for all repositories. Use the `COPILOT_HOME` environment variable to specify an alternative path. |
| Repository | `.github/copilot/settings.json` | Shared repository configuration (committed to the repository). |
| Local | `.github/copilot/settings.local.json` | Personal overrides (add this to `.gitignore`). |

### User settings (`~/.copilot/settings.json`)

These settings apply across all your sessions and repositories. You can edit this file directly, or use slash commands to update individual values.

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `allowedUrls` | `string[]` | `[]` | URLs or domains allowed without prompting. Supports exact URLs, domain patterns, and wildcard subdomains (for example, `"*.github.com"`). |
| `askUser` | `boolean` | `true` | Allow the agent to ask clarifying questions. Set to `false` for fully autonomous operation. Can also be set with `--no-ask-user`. |
| `autoUpdate` | `boolean` | `true` | Automatically download CLI updates. |
| `autoUpdatesChannel` | `"stable"` \| `"prerelease"` | `"stable"` | Update channel. Set to `"prerelease"` to receive pre-release updates. |
| `banner` | `"always"` \| `"once"` \| `"never"` | `"once"` | Animated banner display frequency. |
| `bashEnv` | `boolean` | `false` | Enable `BASH_ENV` support for bash shells. Can also be set with `--bash-env` or `--no-bash-env`. |
| `beep` | `boolean` | `true` | Play an audible beep when attention is required. |
| `colorMode` | `"default"` \| `"dim"` \| `"high-contrast"` \| `"colorblind"` | `"default"` | Color contrast mode. Managed by the `/theme` slash command. |
| `compactPaste` | `boolean` | `true` | Collapse large pastes (more than 10 lines) into compact tokens. |
| `companyAnnouncements` | `string[]` | `[]` | Custom messages shown randomly on startup. One message is randomly selected each time the CLI starts. Useful for team announcements or reminders. |
| `continueOnAutoMode` | `boolean` | `false` | Automatically switch to auto mode when rate-limited. When `true`, eligible rate limit errors trigger an automatic switch to auto mode and retry. Does not apply to global rate limits or BYOK providers. |
| `copyOnSelect` | `boolean` | `true` (macOS), `false` (other) | Automatically copy mouse-selected text to the system clipboard in alt screen mode. |
| `customAgents.defaultLocalOnly` | `boolean` | `false` | Only use local custom agents (no remote organization or enterprise agents). |
| `deniedUrls` | `string[]` | `[]` | URLs or domains that are always denied. Denial rules take precedence over allow rules. |
| `disableAllHooks` | `boolean` | `false` | Disable all hooks (both repository-level and user-level). |
| `disabledMcpServers` | `string[]` | `[]` | MCP server names to disable. Listed servers are configured but not started. |
| `disabledSkills` | `string[]` | `[]` | Skill names to disable. Listed skills are discovered but not loaded. |
| `effortLevel` | `string` | `"medium"` | Reasoning effort level for extended thinking: `"low"`, `"medium"`, `"high"`, or `"xhigh"`. Higher levels use more compute. |
| `enabledMcpServers` | `string[]` | `[]` | Enable built-in MCP servers that are disabled by default (for example, `"computer-use"`). |
| `enabledPlugins` | `Record<string, boolean>` | `{}` | Declarative plugin auto-install. Keys are plugin specs; values are `true` (enabled) or `false` (disabled). |
| `experimental` | `boolean` | `false` | Enable experimental features. Can also be enabled with the `--experimental` command-line option or the `/experimental` slash command. |
| `extraKnownMarketplaces` | `Record<string, {...}>` | `{}` | Additional plugin marketplaces. Each key is a marketplace name; the value specifies the source (`"directory"`, `"git"`, or `"github"`). |
| `footer` | `object` | — | Controls which items appear in the status line. Sub-keys: `showModelEffort`, `showDirectory`, `showBranch`, `showContextWindow`, `showQuota`, `showAgent` (all `boolean`). Managed by the `/statusline` slash command. |
| `hooks` | `object` | — | Inline user-level hook definitions, keyed by event name. Uses the same schema as `.github/hooks/*.json` files. See [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/use-hooks). |
| `ide.autoConnect` | `boolean` | `true` | Automatically connect to an IDE workspace on startup. When `false`, you can still connect manually using the `/ide` command. |
| `ide.openDiffOnEdit` | `boolean` | `true` | Open file edit diffs in the connected IDE for approval. When `false`, file edit approvals are shown only in the terminal. |
| `includeCoAuthoredBy` | `boolean` | `true` | Add a `Co-authored-by` trailer to git commits made by the agent. |
| `logLevel` | `"none"` \| `"error"` \| `"warning"` \| `"info"` \| `"debug"` \| `"all"` \| `"default"` | `"default"` | Logging verbosity. |
| `mergeStrategy` | `"rebase"` \| `"merge"` | — | Conflict resolution strategy for `/pr fix conflicts`. When set to `"rebase"`, conflicts are resolved by rebasing onto the base branch. When set to `"merge"`, the base branch is merged into the feature branch. If not configured, a picker dialog is shown. |
| `model` | `string` | varies | AI model to use. Set to `"auto"` to let {% data variables.product.prodname_copilot_short %} pick the best available model automatically. Managed by the `/model` slash command. |
| `mouse` | `boolean` | `true` | Enable mouse support in alt screen mode. Can also be set with `--mouse` or `--no-mouse`. |
| `powershellFlags` | `string[]` | `["-NoProfile", "-NoLogo"]` | Flags passed to PowerShell (`pwsh`) on startup. Windows only. |
| `renderMarkdown` | `boolean` | `true` | Render Markdown in terminal output. |
| `respectGitignore` | `boolean` | `true` | Exclude gitignored files from the `@` file mention picker. When `false`, the picker includes files normally excluded by `.gitignore`. |
| `screenReader` | `boolean` | `false` | Enable screen reader optimizations. |
| `skillDirectories` | `string[]` | `[]` | Additional directories to search for custom skill definitions (in addition to `~/.copilot/skills/`). |
| `statusLine` | `object` | — | Custom status line display. `type`: must be `"command"`. `command`: path to an executable script that receives session JSON on stdin and prints status content to stdout. `padding`: optional number of left-padding spaces. |
| `storeTokenPlaintext` | `boolean` | `false` | Store authentication tokens in plain text in the configuration file when no system keychain is available. |
| `stream` | `boolean` | `true` | Enable streaming responses. |
| `streamerMode` | `boolean` | `false` | Hide preview model names and quota details. Useful when demonstrating {% data variables.copilot.copilot_cli_short %} or screen sharing. |
| `theme` | `"auto"` \| `"dark"` \| `"light"` | `"auto"` | Terminal color theme. `"auto"` detects the terminal background and chooses accordingly. |
| `updateTerminalTitle` | `boolean` | `true` | Show the current intent in the terminal tab or window title. |

### Repository settings (`.github/copilot/settings.json`)

Repository settings apply to everyone who works in the repository. They are committed to the repository and shared with collaborators.

Only the keys listed in the following table are supported at the repository level. Any other keys—including keys that are valid in the user configuration file—are silently ignored.

| Key | Type | Merge behavior | Description |
|-----|------|---------------|-------------|
| `companyAnnouncements` | `string[]` | Replaced—repository takes precedence | Messages shown randomly on startup. |
| `disableAllHooks` | `boolean` | Repository takes precedence | Disable all hooks. |
| `enabledPlugins` | `Record<string, boolean>` | Merged—repository overrides user for same key | Declarative plugin auto-install. |
| `extraKnownMarketplaces` | `Record<string, {...}>` | Merged—repository overrides user for same key | Plugin marketplaces available in this repository. |
| `hooks` | `object` | Concatenated—repository hooks run after user hooks | Hook definitions scoped to this repository. See [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/use-hooks). |
| `mergeStrategy` | `"rebase"` \| `"merge"` | Repository takes precedence | Conflict resolution strategy for `/pr fix conflicts`. |

### Local settings (`.github/copilot/settings.local.json`)

Create `.github/copilot/settings.local.json` in the repository for personal overrides that should not be committed. Add this file to `.gitignore`.

The local configuration file uses the same schema as the repository configuration file (`.github/copilot/settings.json`) and takes precedence over it.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-programmatic-reference)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-plugin-reference)
