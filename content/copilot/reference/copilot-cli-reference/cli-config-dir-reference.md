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
| `agents/` | Directory | Personal custom agent definitions |
| `config.json` | File | Automatically managed application state (authentication, installed plugins, and other internal data) |
| `copilot-instructions.md` | File | Personal custom instructions (applied to all sessions) |
| `extensions/` | Directory | Personal extensions loaded by the CLI |
| `hooks/` | Directory | User-level hook scripts |
| `ide/` | Directory | IDE integration state |
| `installed-plugins/` | Directory | Installed plugin files |
| `instructions/` | Directory | Additional personal `*.instructions.md` files |
| `logs/` | Directory | Session log files |
| `lsp-config.json` | File | User-level LSP server definitions |
| `mcp-config.json` | File | User-level MCP server definitions |
| `mcp-oauth-config/` | Directory | MCP OAuth token and registration fallback storage |
| `mcp-secrets/` | Directory | Local fallback storage and index for MCP secret placeholders |
| `permissions-config.json` | File | Saved tool and directory permissions per project |
| `plugin-data/` | Directory | Persistent data for installed plugins |
| `session-state/` | Directory | Session history and workspace data |
| `command-history-state/` | Directory | Command history data |
| `session-store.db` | File | SQLite database for cross-session data |
| `settings.json` | File | Your personal configuration settings |
| `skills/` | Directory | Personal custom skill definitions |

> [!NOTE]
> Not all of these items appear immediately. Some are created on demand the first time you use a particular feature—for example, `installed-plugins/` appears only after you install your first plugin.

## User-editable files

The following files are designed to be edited by you directly, or managed through CLI commands.

### `settings.json`

This is the primary configuration file for {% data variables.copilot.copilot_cli_short %}. Within a session, you can use the interactive `/settings` command to change specific values, or run `/settings KEY VALUE` to set a single value, or edit the file directly in a text editor. The file supports JSON with comments (JSONC).

> [!NOTE]
> User-editable settings were originally stored in `config.json`. They have been moved to `settings.json`. Any user settings present in `config.json` on startup are automatically migrated to `settings.json`.

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

### `extensions/`

Store user-level extension files here. Extensions in this directory are available across sessions.

You can create files in this directory manually, or scaffold an extension and then edit the generated file.

## Automatically managed files

The following items are managed by the CLI. You generally should not edit them manually.

### `config.json`

Stores internal application state that is managed automatically by the CLI, including authentication data, installed plugin metadata, and other runtime information. You should not normally need to edit this file.

> [!NOTE]
> Earlier versions of {% data variables.copilot.copilot_cli_short %} stored both user settings and application state in `config.json`. User-editable settings are now located in `settings.json`. Any user settings in `config.json` at startup are automatically migrated to `settings.json`. Application state fields—such as `loggedInUsers`, `installedPlugins`, `firstLaunchAt`, and `staff`—remain in `config.json` and are not migrated.

### `permissions-config.json`

Stores your saved tool and directory permission decisions, organized by project location. When you approve a tool or grant access to a directory, the CLI records the decision here so you aren't prompted again in the same project.

> [!NOTE]
> If you want to reset permissions for a project, you can delete the relevant entry from this file. However, editing the file while a session is running may cause unexpected behavior.

### `session-state/`

Contains session history data, organized by session ID in subdirectories. Each session directory stores an event log (`events.jsonl`) and workspace artifacts (plans, checkpoints, tracked files). This data enables session resume (`--resume` or `--continue`).

Deleting files from this directory only removes local copies. If you have synced sessions to your {% data variables.product.github %} account, the synced data is stored separately and is not affected by local file deletion. You can delete or hide synced sessions from {% data variables.product.prodname_dotcom_the_website %}. For more information, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/chronicle#managing-your-session-data).

### `command-history-state/`

Contains command history data used for reverse search (<kbd>Ctrl</kbd>+<kbd>R</kbd>) and history navigation in the interactive interface. This directory is managed automatically and should not be edited.

### `session-store.db`

A SQLite database used by the CLI for cross-session data such as checkpoint indexing and search. This file is automatically managed and should not be edited.

If you delete this file, you can rebuild it using the `/chronicle reindex` command. Reindexing also syncs your session data to your account.

### `logs/`

Contains log files for CLI sessions. Each session creates a log file named `process-{timestamp}-{pid}.log`. These files are useful for debugging issues.

The CLI may also create extension-specific logs under `logs/extensions/`.

This is separate from `~/.copilot/extensions/`, which stores user-authored extension code.

> [!TIP]
> To find the log file for your current session, enter `/session` in an interactive session. The output includes the full path to the log file, along with other session details such as the session ID, duration, and working directory.

### `installed-plugins/`

Contains the files for plugins you have installed. Plugins installed from a marketplace are stored under `installed-plugins/{marketplace-name}/{plugin-name}/`. Directly installed plugins are stored under `installed-plugins/_direct/`. Manage plugins using the `copilot plugin` commands rather than editing this directory directly.

For more information, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-plugin-reference).

### `plugin-data/`

Contains persistent data for installed plugins, organized by marketplace and plugin name. This data is managed by the plugins themselves and should not be edited manually.

### `ide/`

Contains lock files and state for IDE integrations (for example, when {% data variables.copilot.copilot_cli_short %} connects to {% data variables.product.prodname_vscode %}). This directory is automatically managed.

### `mcp-oauth-config/`

Contains MCP OAuth token, registration, and PKCE fallback files when keychain-backed storage is unavailable. This directory is automatically managed.

### `mcp-secrets/`

Contains fallback file storage and an index for MCP secret placeholders when keychain-backed storage is unavailable. This directory is automatically managed.

## Changing the location of the configuration directory

To override the default `~/.copilot` location, set the `COPILOT_HOME` environment variable to the path of the directory you want to use.

  ```bash copy
  export COPILOT_HOME=/path/to/my/copilot-config
  ```

### Things to be aware of

* `COPILOT_HOME` replaces the entire `~/.copilot` path. The value you set should be the complete path to the directory you want to use for the configuration files and subdirectories.
* Changing the directory means your existing configuration, session history, installed plugins, and saved permissions will not be found in the new location. Copy or move the contents of `~/.copilot` to the new location if you want to preserve them.
* The **cache directory** (used for marketplace caches, auto-update packages, and other ephemeral data) follows platform conventions and is not affected by `COPILOT_HOME`. It is located at:
  * **macOS**: `~/Library/Caches/copilot`
  * **Linux**: `$XDG_CACHE_HOME/copilot` or `~/.cache/copilot`
  * **Windows**: `%LOCALAPPDATA%/copilot`

  To override the cache directory separately, set `COPILOT_CACHE_HOME`.

## What you can safely delete

| Item | Safe to delete? | Effect |
|------|-----------------|--------|
| `agents/`, `skills/`, `hooks/` | Not recommended | You will lose your personal customizations. Back up first. |
| `config.json` | With caution | Resets application state including authentication. You will need to re-authenticate and the CLI will re-detect internal state on next launch. |
| `copilot-instructions.md`, `instructions/` | Not recommended | You will lose your personal custom instructions. Back up first. |
| `extensions/` | Not recommended | You will lose your personal extensions. Back up first. |
| `installed-plugins/` | Not recommended | Use `copilot plugin uninstall` instead, to ensure plugin metadata in `config.json` remains accurate. |
| `logs/` | Yes | Log files are re-created each session. Deleting them has no functional impact. |
| `lsp-config.json` | Not recommended | You will lose your user-level LSP server definitions. Back up first. |
| `mcp-config.json` | Not recommended | You will lose your user-level MCP server definitions. Back up first. |
| `mcp-oauth-config/` | With caution | Clears local MCP OAuth fallback state. You may need to re-authenticate MCP servers. |
| `mcp-secrets/` | With caution | Clears local MCP secret fallback state and mappings. Secret-backed MCP servers may need reconfiguration. |
| `permissions-config.json` | With caution | Resets all saved permissions. The CLI will prompt you again for tool and directory approvals. |
| `plugin-data/` | Yes | Plugin persistent data is re-created as needed. |
| `session-state/` | With caution | Deleting removes session history. You will no longer be able to resume past sessions. |
| `command-history-state/` | With caution | Deleting removes command history. You will no longer be able to search previous commands with <kbd>Ctrl</kbd>+<kbd>R</kbd>. |
| `session-store.db` | With caution | Deleting removes cross-session data. The file is re-created automatically. |
| `settings.json` | With caution | Resets all user preferences to defaults. You will need to reconfigure your settings. |

## Configuration file settings

Settings cascade from user to repository to local, with more specific scopes overriding more general ones. Command-line options and environment variables always take the highest precedence.

| Scope | Location | Purpose |
|-------|----------|---------|
| User | `~/.copilot/settings.json` | Global defaults for all repositories. Use the `COPILOT_HOME` environment variable to specify an alternative path. |
| Repository | `.github/copilot/settings.json` | Shared repository configuration (committed to the repository). |
| Local | `.github/copilot/settings.local.json` | Personal overrides (add this to `.gitignore`). |

The CLI also reads `.claude/settings.json` and `.claude/settings.local.json` for the shared cross-tool subset of repository settings (such as `companyAnnouncements`, `disableAllHooks`, `enabledPlugins`, `extraKnownMarketplaces`, and `hooks`).

### User settings (`~/.copilot/settings.json`)

These settings apply across all your sessions and repositories. You can use the `/settings` slash command to run an interactive dialog, or use specific slash commands to update individual values, or edit this file directly.

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `allowedUrls` | `string[]` | `[]` | URLs or domains allowed without prompting. Supports exact URLs, domain patterns, and wildcard subdomains (for example, `"*.github.com"`). |
| `askUser` | `boolean` | `true` | Allow the agent to ask clarifying questions. Set to `false` for fully autonomous operation. Can also be set with `--no-ask-user`. |
| `autoUpdate` | `boolean` | `true` | Automatically download CLI updates. |
| `autoUpdatesChannel` | `"stable"` \| `"prerelease"` | `"stable"` | Update channel. Set to `"prerelease"` to receive pre-release updates. |
| `banner` | `"always"` \| `"once"` \| `"never"` | `"once"` | Animated banner display frequency. |
| `bashEnv` | `boolean` | `false` | Enable `BASH_ENV` support for bash shells. Can also be set with `--bash-env` or `--no-bash-env`. |
| `beep` | `boolean` | `true` | Play an audible beep when attention is required. |
| `beepOnSchedule` | `boolean` | `true` | Play an audible beep when a scheduled `/every` or `/after` run finishes. |
| `builtInAgents.rubberDuck` | `boolean` | `true` | Enable the rubber-duck subagent that provides adversarial feedback on agent plans. |
| `builtInAgents.rubberDuckAutoInvoke` | `boolean` | `false` | Include proactive prompting for automatic rubber-duck invocation. Set to `true` to opt into additional rubber-duck nudges during agent turns. |
| `colorMode` | `"default"` \| `"github"` \| `"dim"` \| `"high-contrast"` \| `"colorblind"` | `"default"` | Color contrast mode. Managed by the `/settings` and `/theme` slash commands. |
| `compactPaste` | `boolean` | `true` | Collapse large pastes (more than 10 lines) into compact tokens. |
| `companyAnnouncements` | `string[]` | `[]` | Custom messages shown randomly on startup. One message is randomly selected each time the CLI starts. Useful for team announcements or reminders. |
| `continueOnAutoMode` | `boolean` | `false` | Automatically switch to auto mode when rate-limited. When `true`, eligible rate limit errors trigger an automatic switch to auto mode and retry. Does not apply to global rate limits or BYOK providers. |
| `copyOnSelect` | `boolean` | `true` (macOS), `false` (other) | Automatically copy mouse-selected text to the system clipboard. |
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
| `footer` | `object` | — | Controls which items appear in the status line. Sub-keys include `showModelEffort`, `showDirectory`, `showBranch`, `showContextWindow`, `showQuota`, `showAgent`, `showAiUsed`, `showCodeChanges`, `showUsername`, `showSandbox`, `showYolo`, and `showCustom` (all `boolean`). Managed by the `/statusline` slash command. |
| `hooks` | `object` | — | Inline user-level hook definitions, keyed by event name. Uses the same schema as `.github/hooks/*.json` files. See [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/use-hooks). |
| `ide.autoConnect` | `boolean` | `true` | Automatically connect to an IDE workspace on startup. When `false`, you can still connect manually using the `/ide` command. |
| `ide.openDiffOnEdit` | `boolean` | `true` | Open file edit diffs in the connected IDE for approval. When `false`, file edit approvals are shown only in the terminal. |
| `includeCoAuthoredBy` | `boolean` | `true` | Add a `Co-authored-by` trailer to git commits made by the agent. |
| `keepAlive` | `"on"` \| `"off"` \| `"busy"` | `"off"` | Keep-alive mode applied at CLI startup. `"on"` always prevents the system from sleeping, `"busy"` prevents sleeping only while the agent is running, and `"off"` disables keep-alive. Also configurable with the `/keep-alive` slash command. |
| `logLevel` | `"none"` \| `"error"` \| `"warning"` \| `"info"` \| `"debug"` \| `"all"` \| `"default"` | `"default"` | Logging verbosity. |
| `mergeStrategy` | `"rebase"` \| `"merge"` | — | Conflict resolution strategy for `/pr fix conflicts`. When set to `"rebase"`, conflicts are resolved by rebasing onto the base branch. When set to `"merge"`, the base branch is merged into the feature branch. If not configured, a picker dialog is shown. |
| `model` | `string` | varies | AI model to use. Set to `"auto"` to let {% data variables.product.prodname_copilot_short %} pick the best available model automatically. Managed by the `/model` slash command. |
| `mouse` | `boolean` | `true` | Enable mouse support. Can also be set with `--mouse` or `--no-mouse`. |
| `permissions.disableBypassPermissionsMode` | `string` | — | When set to `"disable"`, all allow-all flags (`--allow-all-tools`, `--allow-all-paths`, `--allow-all-urls`, `--allow-all`, `--yolo`) are suppressed at startup and cannot be used to grant elevated permissions. |
| `powershellFlags` | `string[]` | `["-NoProfile", "-NoLogo"]` | Flags passed to PowerShell on startup. On Windows, the CLI prefers PowerShell 7+ (`pwsh`) and falls back to Windows PowerShell (`powershell.exe`) when `pwsh` is unavailable. Windows only. |
| `remote` | `"on"` \| `"off"` | `"on"` | Controls session syncing and remote access. Set to `"off"` to keep session data local only and disable remote control. Can also be set with `--remote` or `--no-remote`. |
| `renderMarkdown` | `boolean` | `true` | Render Markdown in terminal output. |
| `remoteExport` | `boolean` | `true` | Export sessions remotely when session sync is available. Set to `false` to opt out of remote export by default. The `remoteSessions` setting when set to `true`, or the `--remote` flag, still enables export and steering regardless of this setting. |
| `respectGitignore` | `boolean` | `true` | Exclude gitignored files from the `@` file mention picker. When `false`, the picker includes files normally excluded by `.gitignore`. |
| `screenReader` | `boolean` | `false` | Enable screen reader optimizations. |
| `showTipsOnStartup` | `boolean` | `true` | Show a random command tip when the CLI starts. |
| `skillDirectories` | `string[]` | `[]` | Additional directories to search for custom skill definitions (in addition to `~/.copilot/skills/`). |
| `statusLine` | `object` | — | Custom status line display. `type`: must be `"command"`. `command`: path to an executable script that receives session JSON on stdin and prints status content to stdout. `padding`: optional number of left-padding spaces. |
| `storeTokenPlaintext` | `boolean` | `false` | Allow authentication tokens to be stored in plain text in `config.json` when no system keychain is available. |
| `stream` | `boolean` | `true` | Enable streaming responses. |
| `streamerMode` | `boolean` | `false` | Hide preview model names and quota details. Useful when demonstrating {% data variables.copilot.copilot_cli_short %} or screen sharing. |
| `subagents.agents` | `object` | `{}` | Per-agent model configuration, keyed by agent name. Each value is an object with optional `model` (string), `effortLevel` (string), and `contextTier` (`"default"`, `"long_context"`, or `"inherit"`) fields. Set any field to `"inherit"` to use the parent session's value at dispatch time. Use the `/subagents` slash command to configure these settings interactively. |
| `subagents.disabledSubagents` | `string[]` | `[]` | Agent names to prevent from being dispatched. The `explore`, `task`, and `rubber-duck` agents cannot be disabled. |
| `tabs.enabled` | `boolean` | `true` | Show the home tab bar. Set to `false` to hide it entirely. |
| `tabs.hide` | `string[]` | `[]` | Tab identifiers to hide. Accepted values: `"copilot"`, `"agents"`, `"issues"`, `"pull-requests"`, `"gists"` (matched case-insensitively). |
| `tabs.sort` | `string[]` | `[]` | Order in which tabs are displayed. Tabs not listed keep their default relative order after the listed ones. Unknown identifiers are ignored. |
| `terminalProgress` | `boolean` | `true` | Emit OSC 9;4 terminal progress indicators while the agent is working. Supported terminals include Windows Terminal, iTerm2, Ghostty, and ConEmu. |
| `theme` | `"auto"` \| `"dark"` \| `"light"` | `"auto"` | Terminal color theme. `"auto"` detects the terminal background and chooses accordingly. |
| `updateTerminalTitle` | `boolean` | `true` | Show the current intent in the terminal tab or window title. |

### Repository settings (`.github/copilot/settings.json`)

Repository settings apply to everyone who works in the repository. They are committed to the repository and shared with collaborators.

> [!NOTE]
> The plugin-related keys in the repository configuration file (`enabledPlugins` and `extraKnownMarketplaces`) are also read by {% data variables.copilot.copilot_cloud_agent %}, not only {% data variables.copilot.copilot_cli_short %}. This lets you enable the same plugins for both clients from a single file. For more information about plugins, see [AUTOTITLE](/copilot/concepts/agents/about-plugins).

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
* [AUTOTITLE](/copilot/reference/hooks-reference)
