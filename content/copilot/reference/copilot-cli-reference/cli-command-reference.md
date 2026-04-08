---
title: GitHub Copilot CLI command reference
shortTitle: CLI command reference
intro: 'Find commands and keyboard shortcuts to help you use {% data variables.copilot.copilot_cli_short %} effectively.'
versions:
  feature: copilot
category:
  - Author and optimize with Copilot # Copilot discovery page
  - Build with Copilot CLI # Copilot CLI bespoke landing page
contentType: reference
redirect_from:
  - /copilot/reference/cli-command-reference
---

## Command-line commands

| Command                | Purpose                                            |
|------------------------|----------------------------------------------------|
| `copilot`              | Launch the interactive user interface.              |
| `copilot help [topic]` | Display help information. Help topics include: `config`, `commands`, `environment`, `logging`, `permissions`, and `providers`. |
| `copilot init`         | Initialize {% data variables.product.prodname_copilot_short %} custom instructions for this repository. |
| `copilot update`       | Download and install the latest version.           |
| `copilot version`      | Display version information and check for updates. |
| `copilot login`        | Authenticate with {% data variables.product.prodname_copilot_short %} via the OAuth device flow. Accepts `--host HOST` to specify the {% data variables.product.github %} host URL (default: `https://github.com`). |
| `copilot logout`       | Sign out of {% data variables.product.github %} and remove stored credentials. |
| `copilot plugin`       | Manage plugins and plugin marketplaces.            |

## Global shortcuts in the interactive interface

| Shortcut                            | Purpose                               |
|-------------------------------------|---------------------------------------|
| `@ FILENAME`                        | Include file contents in the context. |
| <kbd>Ctrl</kbd>+<kbd>X</kbd> then `/`  | After you have started typing a prompt, this allows you to run a slash command—for example, if you want to change the model without having to retype your prompt. |
| <kbd>Esc</kbd>                      | Cancel the current operation.         |
| `! COMMAND`                         | Execute a command in your local shell, bypassing {% data variables.product.prodname_copilot_short %}. |
| <kbd>Ctrl</kbd>+<kbd>C</kbd>        | Cancel operation / clear input. Press twice to exit. |
| <kbd>Ctrl</kbd>+<kbd>D</kbd>        | Shutdown.                             |
| <kbd>Ctrl</kbd>+<kbd>L</kbd>        | Clear the screen.                     |
| <kbd>Shift</kbd>+<kbd>Tab</kbd>     | Cycle between standard, plan, and autopilot mode. |

## Timeline shortcuts in the interactive interface

| Shortcut                            | Purpose                               |
|-------------------------------------|---------------------------------------|
| ctrl+o    | While there is nothing in the prompt input, this expands recent items in {% data variables.product.prodname_copilot_short %}'s response timeline to show more details. |
| ctrl+e    | While there is nothing in the prompt input, this expands all items in {% data variables.product.prodname_copilot_short %}'s response timeline. |
| ctrl+t    | Expand/collapse display of reasoning in responses. |

## Navigation shortcuts in the interactive interface

| Shortcut                            | Purpose                                      |
|-------------------------------------|----------------------------------------------|
| <kbd>Ctrl</kbd>+<kbd>A</kbd>        | Move to beginning of the line (when typing). |
| <kbd>Ctrl</kbd>+<kbd>B</kbd>        | Move to the previous character.              |
| <kbd>Ctrl</kbd>+<kbd>E</kbd>        | Move to end of the line (when typing).       |
| <kbd>Ctrl</kbd>+<kbd>F</kbd>        | Move to the next character.                  |
| <kbd>Ctrl</kbd>+<kbd>G</kbd>        | Edit the prompt in an external editor.       |
| <kbd>Ctrl</kbd>+<kbd>H</kbd>        | Delete the previous character.               |
| <kbd>Ctrl</kbd>+<kbd>K</kbd>        | Delete from cursor to end of the line. If the cursor is at the end of the line, delete the line break. |
| <kbd>Ctrl</kbd>+<kbd>U</kbd>        | Delete from cursor to beginning of the line. |
| <kbd>Ctrl</kbd>+<kbd>W</kbd>        | Delete the previous word.                    |
| <kbd>Home</kbd>                     | Move to the start of the current line.       |
| <kbd>End</kbd>                      | Move to the end of the current line.         |
| <kbd>Ctrl</kbd>+<kbd>Home</kbd>     | Move to the start of the text.               |
| <kbd>Ctrl</kbd>+<kbd>End</kbd>      | Move to the end of the text.                 |
| <kbd>Meta</kbd>+<kbd>←</kbd>/<kbd>→</kbd> | Move the cursor by a word.             |
| <kbd>↑</kbd>/<kbd>↓</kbd>           | Navigate the command history.                |


## Slash commands in the interactive interface

| Command                                             | Purpose |
|-----------------------------------------------------|---------|
| `/add-dir PATH`                                     | Add a directory to the allowed list for file access. |
| `/agent`                                            | Browse and select from available agents (if any). |
| `/allow-all`, `/yolo`                               | Enable all permissions (tools, paths, and URLs). |
| `/changelog [SUMMARIZE] [VERSION]`                  | Display the CLI changelog with an optional AI-generated summary. |
| `/clear [PROMPT]`, `/new [PROMPT]`                  | Start a new conversation. |
| `/compact`                                          | Summarize the conversation history to reduce context window usage. |
| `/context`                                          | Show the context window token usage and visualization. |
| `/copy`                                             | Copy the last response to the clipboard. |
| `/cwd`, `/cd [PATH]`                                | Change the working directory or display the current directory. |
| `/delegate [PROMPT]`                                | Delegate changes to a remote repository with an AI-generated pull request. |
| `/diff`                                             | Review the changes made in the current directory. |
| `/exit`, `/quit`                                    | Exit the CLI. |
| `/experimental [on\|off\|show]`                     | Toggle, set, or show experimental features. |
| `/feedback`                                         | Provide feedback about the CLI. |
| `/fleet [PROMPT]`                                   | Enable parallel subagent execution of parts of a task. See [AUTOTITLE](/copilot/concepts/agents/copilot-cli/fleet). |
| `/help`                                             | Show the help for interactive commands. |
| `/ide`                                              | Connect to an IDE workspace. |
| `/init`                 | Initialize {% data variables.product.prodname_copilot_short %} custom instructions and agentic features for this repository. |
| `/instructions`                                     | View and toggle custom instruction files. |
| `/list-dirs`                                        | Display all of the directories for which file access has been allowed. |
| `/login`                                            | Log in to {% data variables.product.prodname_copilot_short %}. |
| `/logout`                                           | Log out of {% data variables.product.prodname_copilot_short %}. |
| `/lsp [show\|test\|reload\|help] [SERVER-NAME]`     | Manage the language server configuration. |
| `/mcp [show\|add\|edit\|delete\|disable\|enable\|auth\|reload] [SERVER-NAME]` | Manage the MCP server configuration. |
| `/model`, `/models [MODEL]`                         | Select the AI model you want to use. |
| `/on-air`, `/streamer-mode`                         | Toggle streamer mode (hides preview model names). |
| `/plan [PROMPT]`                                    | Create an implementation plan before coding. |
| `/plugin [marketplace\|install\|uninstall\|update\|list] [ARGS...]` | Manage plugins and plugin marketplaces. |
| `/pr [view\|create\|fix\|auto]`                     | Operate on pull requests for the current branch. |
| `/rename [NAME]`                                    | Rename the current session (auto-generates a name if omitted; alias for `/session rename`). |
| `/reset-allowed-tools`                              | Reset the list of allowed tools. |
| `/restart`                                          | Restart the CLI, preserving the current session. |
| `/resume [SESSION-ID]`                              | Switch to a different session by choosing from a list (optionally specify a session ID). |
| `/review [PROMPT]`                                  | Run the code review agent to analyze changes. |
| `/session [checkpoints [n]\|files\|plan\|rename NAME]`  | Show session information and a workspace summary. Use the subcommands for details. |
| `/share [file\|gist] [session\|research] [PATH]`    | Share the session to a Markdown file or {% data variables.product.github %} gist. |
| `/skills [list\|info\|add\|remove\|reload] [ARGS...]`   | Manage skills for enhanced capabilities. |
| `/terminal-setup`      | Configure the terminal for multiline input support (<kbd>Shift</kbd>+<kbd>Enter</kbd> and <kbd>Ctrl</kbd>+<kbd>Enter</kbd>). |
| `/theme [show\|set\|list] [auto\|THEME-ID]`         | View or configure the terminal theme. |
| `/usage`                                            | Display session usage metrics and statistics. |
| `/undo`, `/rewind`                                  | Rewind the last turn and revert file changes. |
| `/user [show\|list\|switch]`                        | Manage the current {% data variables.product.github %} user. |

For a complete list of available slash commands enter `/help` in the CLI's interactive interface.

## Command-line options

| Option                             | Purpose                                  |
|------------------------------------|------------------------------------------|
| `--acp`                            | Start the Agent Client Protocol server.  |
| `--add-dir=PATH`                   | Add a directory to the allowed list for file access (can be used multiple times). |
| `--add-github-mcp-tool=TOOL`       | Add a tool to enable for the {% data variables.product.github %} MCP server, instead of the default CLI subset (can be used multiple times). Use `*` for all tools. |
| `--add-github-mcp-toolset=TOOLSET` | Add a toolset to enable for the {% data variables.product.github %} MCP server, instead of the default CLI subset (can be used multiple times). Use `all` for all toolsets. |
| `--additional-mcp-config=JSON`     | Add an MCP server for this session only. The server configuration can be supplied as a JSON string or a file path (prefix with `@`). Augments the configuration from `~/.copilot/mcp-config.json`. Overrides any installed MCP server configuration with the same name. |
| `--agent=AGENT`                    | Specify a {% data variables.copilot.copilot_custom_agent_short %} to use. |
| `--allow-all`                      | Enable all permissions (equivalent to `--allow-all-tools --allow-all-paths --allow-all-urls`). |
| `--allow-all-paths`                | Disable file path verification and allow access to any path. |
| `--allow-all-tools`                | Allow all tools to run automatically without confirmation. Required when using the CLI programmatically (env: `COPILOT_ALLOW_ALL`). |
| `--allow-all-urls`                 | Allow access to all URLs without confirmation. |
| `--allow-tool=TOOL ...`            | Tools the CLI has permission to use. Will not prompt for permission. For multiple tools, use a quoted, comma-separated list. |
| `--allow-url=URL ...`              | Allow access to specific URLs or domains. For multiple URLs, use a quoted, comma-separated list. |
| `--autopilot`                      | Enable autopilot continuation in prompt mode. See [AUTOTITLE](/copilot/concepts/agents/copilot-cli/autopilot). |
| `--available-tools=TOOL ...`       | Only these tools will be available to the model. For multiple tools, use a quoted, comma-separated list. |
| `--banner`                         | Show the startup banner. |
| `--bash-env`                       | Enable `BASH_ENV` support for bash shells. |
| `--config-dir=PATH`         | Set the configuration directory (default: `~/.copilot`). |
| `--continue`                       | Resume the most recent session. |
| `--deny-tool=TOOL ...`             | Tools the CLI does not have permission to use. Will not prompt for permission. For multiple tools, use a quoted, comma-separated list. |
| `--deny-url=URL ...`               | Deny access to specific URLs or domains, takes precedence over `--allow-url`. For multiple URLs, use a quoted, comma-separated list. |
| `--disable-builtin-mcps`           | Disable all built-in MCP servers (currently: `github-mcp-server`). |
| `--disable-mcp-server=SERVER-NAME` | Disable a specific MCP server (can be used multiple times). |
| `--disable-parallel-tools-execution` | Disable parallel execution of tools (LLM can still make parallel tool calls, but they will be executed sequentially). |
| `--disallow-temp-dir`              | Prevent automatic access to the system temporary directory. |
| `--effort=LEVEL`, `--reasoning-effort=LEVEL` | Set the reasoning effort level (`low`, `medium`, `high`). |
| `--enable-all-github-mcp-tools`    | Enable all {% data variables.product.github %} MCP server tools, instead of the default CLI subset. Overrides the `--add-github-mcp-toolset` and `--add-github-mcp-tool` options. |
| `--enable-reasoning-summaries`     | Request reasoning summaries for OpenAI models that support it. |
| `--excluded-tools=TOOL ...`        | These tools will not be available to the model. For multiple tools, use a quoted, comma-separated list. |
| `--experimental`                   | Enable experimental features (use `--no-experimental` to disable). |
| `-h`, `--help`                     | Display help. |
| `-i PROMPT`, `--interactive=PROMPT`  | Start an interactive session and automatically execute this prompt. |
| `--log-dir=DIRECTORY`              | Set the log file directory (default: `~/.copilot/logs/`). |
| `--log-level=LEVEL`                | Set the log level (choices: `none`, `error`, `warning`, `info`, `debug`, `all`, `default`). |
| `--max-autopilot-continues=COUNT`  | Maximum number of continuation messages in autopilot mode (default: unlimited). See [AUTOTITLE](/copilot/concepts/agents/copilot-cli/autopilot). |
| `--model=MODEL`                    | Set the AI model you want to use. |
| `--mouse[=VALUE]`                  | Enable mouse support in alt screen mode. VALUE can be `on` (default) or `off`. When enabled, the CLI captures mouse events in alt screen mode—scroll wheel, clicks, etc. When disabled, the terminal's native mouse behavior is preserved. Once set the setting is persisted by being written to your configuration file.|
| `--no-ask-user`                    | Disable the `ask_user` tool (the agent works autonomously without asking questions). |
| `--no-auto-update`                 | Disable downloading CLI updates automatically. |
| `--no-bash-env`                    | Disable `BASH_ENV` support for bash shells. |
| `--no-color`                       | Disable all color output. |
| `--no-custom-instructions`         | Disable loading of custom instructions from `AGENTS.md` and related files. |
| `--no-experimental`                | Disable experimental features. |
| `--no-mouse`                       | Disable mouse support. |
| `--output-format=FORMAT`           | FORMAT can be `text` (default) or `json` (outputs JSONL: one JSON object per line). |
| `-p PROMPT`, `--prompt=PROMPT`     | Execute a prompt programmatically (exits after completion). |
| `--plain-diff`                     | Disable rich diff rendering (syntax highlighting via the diff tool specified by your git config). |
| `--plugin-dir=DIRECTORY`           | Load a plugin from a local directory (can be used multiple times). |
| `--resume=SESSION-ID`              | Resume a previous interactive session by choosing from a list (optionally specify a session ID). |
| `-s`, `--silent`                   | Output only the agent response (without usage statistics), useful for scripting with `-p`. |
| `--screen-reader`                  | Enable screen reader optimizations. |
| `--secret-env-vars=VAR ...`        | Redact an environment variable from shell and MCP server environments (can be used multiple times). For multiple variables, use a quoted, comma-separated list. The values in the `GITHUB_TOKEN` and `COPILOT_GITHUB_TOKEN` environment variables are redacted from output by default. |
| `--share=PATH`                     | Share a session to a Markdown file after completion of a programmatic session (default path: `./copilot-session-<ID>.md`). |
| `--share-gist`                     | Share a session to a secret {% data variables.product.github %} gist after completion of a programmatic session. |
| `--stream=MODE`                    | Enable or disable streaming mode (mode choices: `on` or `off`). |
| `-v`, `--version`                  | Show version information. |
| `--yolo`                           | Enable all permissions (equivalent to `--allow-all`). |

For a complete list of commands and options, run `copilot help`.

## Tool availability values

The `--available-tools` and `--excluded-tools` options support the following values for specifying tools:

### Shell tools

| Tool name | Description |
|---|---|
| `bash` / `powershell` | Execute commands |
| `read_bash` / `read_powershell` | Read output from a shell session |
| `write_bash` / `write_powershell` | Send input to a shell session |
| `stop_bash` / `stop_powershell` | Terminate a shell session |
| `list_bash` / `list_powershell` | List active shell sessions |

### File operation tools

| Tool name | Description |
|---|---|
| `view` | Read files or directories |
| `create` | Create new files |
| `edit` | Edit files via string replacement |
| `apply_patch` | Apply patches (used by some models instead of `edit`/`create`) |

### Agent and task delegation tools

| Tool name | Description |
|---|---|
| `task` | Run sub-agents |
| `read_agent` | Check background agent status |
| `list_agents` | List available agents |

### Other tools

| Tool name | Description |
|---|---|
| `grep` (or `rg`) | Search for text in files |
| `glob` | Find files matching patterns |
| `web_fetch` | Fetch and parse web content |
| `skill` | Invoke custom skills |
| `ask_user` | Ask the user a question |
| `report_intent` | Report what the agent plans to do |
| `show_file` | Display a file prominently |
| `fetch_copilot_cli_documentation` | Look up CLI documentation |
| `update_todo` | Update task checklist |
| `store_memory` | Persist facts across sessions |
| `task_complete` | Signal task is done (autopilot only) |
| `exit_plan_mode` | Exit plan mode |
| `sql` | Query session data (experimental) |
| `lsp` | Language server refactoring (experimental) |

## Tool permission patterns

The `--allow-tool` and `--deny-tool` options accept permission patterns in the format `Kind(argument)`. The argument is optional—omitting it matches all tools of that kind.

| Kind | Description | Example patterns |
|------|-------------|-----------------|
| `shell` | Shell command execution | `shell(git push)`, `shell(git:*)`, `shell` |
| `write` | File creation or modification | `write`, `write(src/*.ts)` |
| `read` | File or directory reads | `read`, `read(.env)` |
| SERVER-NAME | MCP server tool invocation | `MyMCP(create_issue)`, `MyMCP` |
| `url` | URL access via web-fetch or shell | `url(github.com)`, `url(https://*.api.com)` |
| `memory` | Storing facts to agent memory | `memory` |

For `shell` rules, the `:*` suffix matches the command stem followed by a space, preventing partial matches. For example, `shell(git:*)` matches `git push` and `git pull` but does not match `gitea`.

Deny rules always take precedence over allow rules, even when `--allow-all` is set.

```shell
# Allow all git commands except git push
copilot --allow-tool='shell(git:*)' --deny-tool='shell(git push)'

# Allow a specific MCP server tool
copilot --allow-tool='MyMCP(create_issue)'

# Allow all tools from a server
copilot --allow-tool='MyMCP'
```

## Environment variables

| Variable | Description |
|----------|-------------|
| `COPILOT_MODEL` | Set the AI model. |
| `COPILOT_ALLOW_ALL` | Set to `true` to allow all permissions automatically (equivalent to `--allow-all`). |
| `COPILOT_AUTO_UPDATE` | Set to `false` to disable automatic updates. |
| `COPILOT_CUSTOM_INSTRUCTIONS_DIRS` | Comma-separated list of additional directories for custom instructions. |
| `COPILOT_SKILLS_DIRS` | Comma-separated list of additional directories for skills. |
| `COPILOT_EDITOR` | Editor command for interactive editing (checked after `$VISUAL` and `$EDITOR`). Defaults to `vi` if none are set. |
| `COPILOT_GITHUB_TOKEN` | Authentication token. Takes precedence over `GH_TOKEN` and `GITHUB_TOKEN`. |
| `COPILOT_HOME` | Override the configuration and state directory. Default: `$HOME/.copilot`. |
| `COPILOT_CACHE_HOME` | Override the cache directory (used for marketplace caches, auto-update packages, and other ephemeral data). See [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-config-dir-reference#changing-the-location-of-the-configuration-directory) for platform defaults. |
| `GH_TOKEN` | Authentication token. Takes precedence over `GITHUB_TOKEN`. |
| `GITHUB_TOKEN` | Authentication token. |
| `USE_BUILTIN_RIPGREP` | Set to `false` to use the system ripgrep instead of the bundled version. |
| `PLAIN_DIFF` | Set to `true` to disable rich diff rendering. |
| `COLORFGBG` | Fallback for dark/light terminal background detection. |
| `COPILOT_CLI_ENABLED_FEATURE_FLAGS` | Comma-separated list of feature flags to enable (for example, `"SOME_FEATURE,SOME_OTHER_FEATURE"`). |

## Configuration file settings

Settings cascade from user to repository to local, with more specific scopes overriding more general ones. Command-line flags and environment variables always take the highest precedence.

| Scope | Location | Purpose |
|-------|----------|---------|
| User | `~/.copilot/config.json` | Global defaults for all repositories. Use the `COPILOT_HOME` environment variable to specify an alternative path. |
| Repository | `.github/copilot/settings.json` | Shared repository configuration (committed to the repository). |
| Local | `.github/copilot/settings.local.json` | Personal overrides (add this to `.gitignore`). |

### User settings (`~/.copilot/config.json`)

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `allowed_urls` | `string[]` | `[]` | URLs or domains allowed without prompting. |
| `autoUpdate` | `boolean` | `true` | Automatically download CLI updates. |
| `banner` | `"always"` \| `"once"` \| `"never"` | `"once"` | Animated banner display frequency. |
| `bashEnv` | `boolean` | `false` | Enable `BASH_ENV` support for bash shells. |
| `beep` | `boolean` | `true` | Play an audible beep when attention is required. |
| `compactPaste` | `boolean` | `true` | Collapse large pastes into compact tokens. |
| `custom_agents.default_local_only` | `boolean` | `false` | Only use local custom agents. |
| `denied_urls` | `string[]` | `[]` | URLs or domains blocked (takes precedence over `allowed_urls`). |
| `experimental` | `boolean` | `false` | Enable experimental features. |
| `includeCoAuthoredBy` | `boolean` | `true` | Add a `Co-authored-by` trailer to git commits made by the agent. |
| `companyAnnouncements` | `string[]` | `[]` | Custom messages shown randomly on startup. |
| `logLevel` | `"none"` \| `"error"` \| `"warning"` \| `"info"` \| `"debug"` \| `"all"` \| `"default"` | `"default"` | Logging verbosity. |
| `model` | `string` | varies | AI model to use (see the `/model` command). |
| `powershellFlags` | `string[]` | `["-NoProfile", "-NoLogo"]` | Flags passed to PowerShell (`pwsh`) on startup. Windows only. |
| `effortLevel` | `string` | `"medium"` | Reasoning effort level for extended thinking (e.g., `"low"`, `"medium"`, `"high"`, `"xhigh"`). Higher levels use more compute. |
| `renderMarkdown` | `boolean` | `true` | Render Markdown in terminal output. |
| `screenReader` | `boolean` | `false` | Enable screen reader optimizations. |
| `stream` | `boolean` | `true` | Enable streaming responses. |
| `storeTokenPlaintext` | `boolean` | `false` | Store authentication tokens in plain text in the configuration file when no system keychain is available. |
| `streamerMode` | `boolean` | `false` | Hide preview model names and quota details (useful when demonstrating {% data variables.copilot.copilot_cli_short %}). |
| `theme` | `"auto"` \| `"dark"` \| `"light"` | `"auto"` | Terminal color theme. |
| `trusted_folders` | `string[]` | `[]` | Folders with pre-granted file access. |
| `mouse` | `boolean` | `true` | Enable mouse support in alt screen mode. |
| `respectGitignore` | `boolean` | `true` | Exclude gitignored files from the `@` file picker. |
| `disableAllHooks` | `boolean` | `false` | Disable all hooks. |
| `hooks` | `object` | — | Inline user-level hook definitions. |
| `updateTerminalTitle` | `boolean` | `true` | Show the current intent in the terminal title. |

### Repository settings (`.github/copilot/settings.json`)

Repository settings apply to everyone who works in the repository. Only a subset of settings is supported at the repository level. Unsupported keys are ignored.

| Key | Type | Merge behavior | Description |
|-----|------|---------------|-------------|
| `companyAnnouncements` | `string[]` | Replaced—repository takes precedence | Messages shown randomly on startup. |
| `enabledPlugins` | `Record<string, boolean>` | Merged—repository overrides user for same key | Declarative plugin auto-install. |
| `extraKnownMarketplaces` | `Record<string, {...}>` | Merged—repository overrides user for same key | Plugin marketplaces available in this repository. |

### Local settings (`.github/copilot/settings.local.json`)

Create `.github/copilot/settings.local.json` in the repository, for personal overrides that should not be committed. Add this file to `.gitignore`.

The local configuration file uses the same schema as the repository configuration file (`.github/copilot/settings.json`) and takes precedence over it.

## Hooks reference

Hooks are external commands that execute at specific lifecycle points during a session, enabling custom automation, security controls, and integrations. Hook configuration files are loaded automatically from `.github/hooks/*.json` in your repository.

### Hook configuration format

Hook configuration files use JSON format with version `1`.

#### Command hooks

Command hooks run shell scripts and are supported on all hook types.

```json
{
  "version": 1,
  "hooks": {
    "preToolUse": [
      {
        "type": "command",
        "bash": "your-bash-command",
        "powershell": "your-powershell-command",
        "cwd": "optional/working/directory",
        "env": { "VAR": "value" },
        "timeoutSec": 30
      }
    ]
  }
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | `"command"` | Yes | Must be `"command"`. |
| `bash` | string | One of `bash`/`powershell` | Shell command for Unix. |
| `powershell` | string | One of `bash`/`powershell` | Shell command for Windows. |
| `cwd` | string | No | Working directory for the command (relative to repository root or absolute). |
| `env` | object | No | Environment variables to set (supports variable expansion). |
| `timeoutSec` | number | No | Timeout in seconds. Default: `30`. |

#### Prompt hooks

Prompt hooks auto-submit text as if the user typed it. They are only supported on `sessionStart` and run before any initial prompt passed via `--prompt`. The text can be a natural language prompt or a slash command.

```json
{
  "version": 1,
  "hooks": {
    "sessionStart": [
      {
        "type": "prompt",
        "prompt": "Your prompt text or /slash-command"
      }
    ]
  }
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | `"prompt"` | Yes | Must be `"prompt"`. |
| `prompt` | string | Yes | Text to submit—can be a natural language message or a slash command. |

### Hook events

| Event | Fires when | Output processed |
|-------|-----------|-----------------|
| `sessionStart` | A new or resumed session begins. | No |
| `sessionEnd` | The session terminates. | No |
| `userPromptSubmitted` | The user submits a prompt. | No |
| `preToolUse` | Before each tool executes. | Yes — can allow, deny, or modify. |
| `postToolUse` | After each tool completes successfully. | Yes — can replace the successful result (SDK programmatic hooks only). |
| `postToolUseFailure` | After a tool completes with a failure. | Yes — can provide recovery guidance via `additionalContext` (exit code `2` for command hooks). |
| `agentStop` | The main agent finishes a turn. | Yes — can block and force continuation. |
| `subagentStop` | A subagent completes. | Yes — can block and force continuation. |
| `subagentStart` | A subagent is spawned (before it runs). Returns `additionalContext` prepended to the subagent's prompt. Supports `matcher` to filter by agent name. | No — cannot block creation. |
| `preCompact` | Context compaction is about to begin (manual or automatic). Supports `matcher` to filter by trigger (`"manual"` or `"auto"`). | No — notification only. |
| `permissionRequest` | Before showing a permission dialog to the user, after rule-based checks find no matching allow or deny rule. Supports `matcher` regex on `toolName`. | Yes — can allow or deny programmatically. |
| `errorOccurred` | An error occurs during execution. | No |
| `notification` | Fires asynchronously when the CLI emits a system notification (shell completion, agent completion or idle, permission prompts, elicitation dialogs). Fire-and-forget: never blocks the session. Supports `matcher` regex on `notification_type`. | Optional — can inject `additionalContext` into the session. |

### `preToolUse` decision control

The `preToolUse` hook can control tool execution by writing a JSON object to stdout.

| Field | Values | Description |
|-------|--------|-------------|
| `permissionDecision` | `"allow"`, `"deny"`, `"ask"` | Whether the tool executes. Empty output uses default behavior. |
| `permissionDecisionReason` | string | Reason shown to the agent. Required when decision is `"deny"`. |
| `modifiedArgs` | object | Substitute tool arguments to use instead of the originals. |

### `agentStop` / `subagentStop` decision control

| Field | Values | Description |
|-------|--------|-------------|
| `decision` | `"block"`, `"allow"` | `"block"` forces another agent turn using `reason` as the prompt. |
| `reason` | string | Prompt for the next turn when `decision` is `"block"`. |

### `permissionRequest` decision control

The `permissionRequest` hook fires when a tool-level permission dialog is about to be shown. It fires after rule-based permission checks find no matching allow or deny rule. Use it to approve or deny tool calls programmatically—especially useful in pipe mode (`-p`) and CI environments where no interactive prompt is available.

**Matcher:** Optional regex tested against `toolName`. When set, the hook fires only for matching tool names.

Output JSON to stdout to control the permission decision:

| Field | Values | Description |
|-------|--------|-------------|
| `behavior` | `"allow"`, `"deny"` | Whether to approve or deny the tool call. |
| `message` | string | Reason fed back to the LLM when denying. |
| `interrupt` | boolean | When `true` combined with `"deny"`, stops the agent entirely. |

Return empty output or `{}` to fall through to the default behavior (show the user dialog, or deny in pipe mode). Exit code `2` is treated as a deny; if the hook also outputs JSON on stdout, those fields are merged with the deny decision.

### `notification` hook

The `notification` hook fires asynchronously when the CLI emits a system notification. These hooks are fire-and-forget: they never block the session, and any errors are logged and skipped.

**Input:**

```typescript
{
    sessionId: string;
    timestamp: number;
    cwd: string;
    hook_event_name: "Notification";
    message: string;           // Human-readable notification text
    title?: string;            // Short title (e.g., "Permission needed", "Shell completed")
    notification_type: string; // One of the types listed below
}
```

**Notification types:**

| Type | When it fires |
|------|---------------|
| `shell_completed` | A background (async) shell command finishes |
| `shell_detached_completed` | A detached shell session completes |
| `agent_completed` | A background sub-agent finishes (completed or failed) |
| `agent_idle` | A background agent finishes a turn and enters idle state (waiting for `write_agent`) |
| `permission_prompt` | The agent requests permission to execute a tool |
| `elicitation_dialog` | The agent requests additional information from the user |

**Output:**

```typescript
{
    additionalContext?: string; // Injected into the session as a user message
}
```

If `additionalContext` is returned, the text is injected into the session as a prepended user message. This can trigger further agent processing if the session is idle. Return `{}` or empty output to take no action.

**Matcher:** Optional regex on `notification_type`. The pattern is anchored as `^(?:pattern)$`. Omit `matcher` to receive all notification types.

### Tool names for hook matching

| Tool name | Description |
|-----------|-------------|
| `bash` | Execute shell commands (Unix). |
| `powershell` | Execute shell commands (Windows). |
| `view` | Read file contents. |
| `edit` | Modify file contents. |
| `create` | Create new files. |
| `glob` | Find files by pattern. |
| `grep` | Search file contents. |
| `web_fetch` | Fetch web pages. |
| `task` | Run subagent tasks. |

If multiple hooks of the same type are configured, they execute in order. For `preToolUse`, if any hook returns `"deny"`, the tool is blocked. For `postToolUseFailure` command hooks, exiting with code `2` causes stderr to be returned as recovery guidance for the assistant. Hook failures (non-zero exit codes or timeouts) are logged and skipped—they never block agent execution.

## MCP server configuration

MCP servers provide additional tools to the CLI agent. Configure persistent servers in `~/.copilot/mcp-config.json`. Use `--additional-mcp-config` to add servers for a single session.

### Transport types

| Type | Description | Required fields |
|------|-------------|----------------|
| `local` / `stdio` | Local process communicating via stdin/stdout. | `command`, `args` |
| `http` | Remote server using streamable HTTP transport. | `url` |
| `sse` | Remote server using Server-Sent Events transport. | `url` |

### Local server configuration fields

| Field | Required | Description |
|-------|----------|-------------|
| `command` | Yes | Command to start the server. |
| `args` | Yes | Command arguments (array). |
| `tools` | Yes | Tools to enable: `["*"]` for all, or a list of specific tool names. |
| `env` | No | Environment variables. Supports `$VAR`, `${VAR}`, and `${VAR:-default}` expansion. |
| `cwd` | No | Working directory for the server. |
| `timeout` | No | Tool call timeout in milliseconds. |
| `type` | No | `"local"` or `"stdio"`. Default: `"local"`. |

### Remote server configuration fields

| Field | Required | Description |
|-------|----------|-------------|
| `type` | Yes | `"http"` or `"sse"`. |
| `url` | Yes | Server URL. |
| `tools` | Yes | Tools to enable. |
| `headers` | No | HTTP headers. Supports variable expansion. |
| `oauthClientId` | No | Static OAuth client ID (skips dynamic registration). |
| `oauthPublicClient` | No | Whether the OAuth client is public. Default: `true`. |
| `oidc` | No | Enable OIDC token injection. When `true`, injects a `GITHUB_COPILOT_OIDC_MCP_TOKEN` environment variable (local servers) or a `Bearer` `Authorization` header (remote servers). |
| `timeout` | No | Tool call timeout in milliseconds. |

### OAuth re-authentication

Remote MCP servers that use OAuth may show a `needs-auth` status when a token expires or when a different account is required. Use `/mcp auth <server-name>` to trigger a fresh OAuth flow. This opens a browser authentication prompt, allowing you to sign in or switch accounts. After completing the flow, the server reconnects automatically.

### Filter mapping

Control how MCP tool output is processed using the `filterMapping` field in a server's configuration.

| Mode | Description |
|------|-------------|
| `none` | No filtering. |
| `markdown` | Format output as Markdown. |
| `hidden_characters` | Remove hidden or control characters. Default. |

### Built-in MCP servers

The CLI includes built-in MCP servers that are available without additional setup.

| Server | Description |
|--------|-------------|
| `github-mcp-server` | {% data variables.product.github %} API integration: issues, pull requests, commits, code search, and {% data variables.product.prodname_actions %}. |
| `playwright` | Browser automation: navigate, click, type, screenshot, and form handling. |
| `fetch` | HTTP requests via the `fetch` tool. |
| `time` | Time utilities: `get_current_time` and `convert_time`. |

Use `--disable-builtin-mcps` to disable all built-in servers, or `--disable-mcp-server SERVER-NAME` to disable a specific one.

### MCP server trust levels

MCP servers are loaded from multiple sources, each with a different trust level.

| Source | Trust level | Review required |
|--------|-------------|----------------|
| Built-in | High | No |
| Repository (`.github/mcp.json`) | Medium | Recommended |
| Workspace (`.mcp.json`, `.vscode/mcp.json`) | Medium | Recommended |
| Dev Container (`.devcontainer/devcontainer.json`) | Medium | Recommended |
| User config (`~/.copilot/mcp-config.json`) | User-defined | User responsibility |
| Remote servers | Low | Always |

All MCP tool invocations require explicit permission. This applies even to read-only operations on external services.

## Skills reference

Skills are Markdown files that extend what the CLI can do. Each skill lives in its own directory containing a `SKILL.md` file. When invoked (via `/SKILL-NAME` or automatically by the agent), the skill's content is injected into the conversation.

### Skill frontmatter fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Unique identifier for the skill. Letters, numbers, and hyphens only. Max 64 characters. |
| `description` | string | Yes | What the skill does and when to use it. Max 1024 characters. |
| `allowed-tools` | string or string[] | No | Comma-separated list or YAML array of tools that are automatically allowed when the skill is active. Use `"*"` for all tools. |
| `user-invocable` | boolean | No | Whether users can invoke the skill with `/SKILL-NAME`. Default: `true`. |
| `disable-model-invocation` | boolean | No | Prevent the agent from automatically invoking this skill. Default: `false`. |

### Skill locations

Skills are loaded from these locations in priority order (first found wins for duplicate names).

| Location | Scope | Description |
|----------|-------|-------------|
| `.github/skills/` | Project | Project-specific skills. |
| `.agents/skills/` | Project | Alternative project location. |
| `.claude/skills/` | Project | Claude-compatible location. |
| Parent `.github/skills/` | Inherited | Monorepo parent directory support. |
| `~/.copilot/skills/` | Personal | Personal skills for all projects. |
| `~/.agents/skills/` | Personal | Agent skills shared across all projects. |
| `~/.claude/skills/` | Personal | Claude-compatible personal location. |
| Plugin directories | Plugin | Skills from installed plugins. |
| `COPILOT_SKILLS_DIRS` | Custom | Additional directories (comma-separated). |
| (bundled with CLI) | Built-in | Skills shipped with the CLI. Lowest priority—overridable by any other source. |

### Commands (alternative skill format)

Commands are an alternative to skills stored as individual `.md` files in `.claude/commands/`. The command name is derived from the filename. Command files use a simplified format (no `name` field required) and support `description`, `allowed-tools`, and `disable-model-invocation`. Commands have lower priority than skills with the same name.

## Custom agents reference

Custom agents are specialized AI agents defined in Markdown files. The filename (minus extension) becomes the agent ID. Use `.agent.md` or `.md` as the file extension.

### Built-in agents

| Agent | Default model | Description |
|-------|--------------|-------------|
| `code-review` | claude-sonnet-4.5 | High signal-to-noise code review. Analyzes diffs for bugs, security issues, and logic errors. |
| `critic` | complementary model | Adversarial feedback on proposals, designs, and implementations. Identifies weak points and suggests improvements. Experimental—requires `--experimental`. |
| `explore` | claude-haiku-4.5 | Fast codebase exploration. Searches files, reads code, and answers questions. Returns focused answers under 300 words. Safe to run in parallel. |
| `general-purpose` | claude-sonnet-4.5 | Full-capability agent for complex multi-step tasks. Runs in a separate context window. |
| `research` | claude-sonnet-4.6 | Deep research agent. Generates a report based on information in your codebase, in relevant repositories, and on the web. |
| `task` | claude-haiku-4.5 | Command execution (tests, builds, lints). Returns brief summary on success, full output on failure. |

### Custom agent frontmatter fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | Yes | Description shown in the agent list and `task` tool. |
| `infer` | boolean | No | Allow auto-delegation by the main agent. Default: `true`. |
| `mcp-servers` | object | No | MCP servers to connect. Uses the same schema as `~/.copilot/mcp-config.json`. |
| `model` | string | No | AI model for this agent. When unset, inherits the outer agent's model. |
| `name` | string | No | Display name. Defaults to the filename. |
| `tools` | string[] | No | Tools available to the agent. Default: `["*"]` (all tools). |

### Custom agent locations

| Scope | Location |
|-------|----------|
| Project | `.github/agents/` or `.claude/agents/` |
| User | `~/.copilot/agents/` or `~/.claude/agents/` |
| Plugin | `<plugin>/agents/` |

Project-level agents take precedence over user-level agents. Plugin agents have the lowest priority.

## Permission approval responses

When the CLI prompts for permission to execute an operation, you can respond with the following keys.

| Key | Effect |
|-----|--------|
| `y` | Allow this specific request once. |
| `n` | Deny this specific request once. |
| `!` | Allow all similar requests for the rest of the session. |
| `#` | Deny all similar requests for the rest of the session. |
| `?` | Show detailed information about the request. |

Session approvals reset when you run `/clear` or start a new session.

## OpenTelemetry monitoring

{% data variables.copilot.copilot_cli_short %} can export traces and metrics via [OpenTelemetry](https://opentelemetry.io/) (OTel), giving you visibility into agent interactions, LLM calls, tool executions, and token usage. All signal names and attributes follow the [OTel GenAI Semantic Conventions](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/gen-ai/).

OTel is off by default with zero overhead. It activates when any of the following conditions are met:

* `COPILOT_OTEL_ENABLED=true`
* `OTEL_EXPORTER_OTLP_ENDPOINT` is set
* `COPILOT_OTEL_FILE_EXPORTER_PATH` is set

### OTel environment variables

| Variable | Default | Description |
|----------|---------|-------------|
| `COPILOT_OTEL_ENABLED` | `false` | Explicitly enable OTel. Not required if `OTEL_EXPORTER_OTLP_ENDPOINT` is set. |
| `OTEL_EXPORTER_OTLP_ENDPOINT` | — | OTLP endpoint URL. Setting this automatically enables OTel. |
| `COPILOT_OTEL_EXPORTER_TYPE` | `otlp-http` | Exporter type: `otlp-http` or `file`. Auto-selects `file` when `COPILOT_OTEL_FILE_EXPORTER_PATH` is set. |
| `OTEL_SERVICE_NAME` | `github-copilot` | Service name in resource attributes. |
| `OTEL_RESOURCE_ATTRIBUTES` | — | Extra resource attributes as comma-separated `key=value` pairs. Use percent-encoding for special characters. |
| `OTEL_INSTRUMENTATION_GENAI_CAPTURE_MESSAGE_CONTENT` | `false` | Capture full prompt and response content. See [Content capture](#content-capture). |
| `OTEL_LOG_LEVEL` | — | OTel diagnostic log level: `NONE`, `ERROR`, `WARN`, `INFO`, `DEBUG`, `VERBOSE`, `ALL`. |
| `COPILOT_OTEL_FILE_EXPORTER_PATH` | — | Write all signals to this file as JSON-lines. Setting this automatically enables OTel. |
| `COPILOT_OTEL_SOURCE_NAME` | `github.copilot` | Instrumentation scope name for tracer and meter. |
| `OTEL_EXPORTER_OTLP_HEADERS` | — | Auth headers for the OTLP exporter (for example, `Authorization=Bearer token`). |

### Traces

The runtime emits a hierarchical span tree for each agent interaction. Each tree contains an `invoke_agent` root span, with `chat` and `execute_tool` child spans.

#### `invoke_agent` span attributes

Wraps the entire agent invocation: all LLM calls and tool executions for one user message.

* **Top-level sessions** use span kind `CLIENT` (remote service invocation) with `server.address` and `server.port`.
* **Subagent invocations** (for example, explore, task) use span kind `INTERNAL` (in-process) without server attributes.

| Attribute | Description | Span kind |
|-----------|-------------|-----------|
| `gen_ai.operation.name` | `invoke_agent` | Both |
| `gen_ai.provider.name` | Provider (for example, `github`, `anthropic`) | Both |
| `gen_ai.agent.id` | Session identifier | Both |
| `gen_ai.agent.name` | Agent name (when available) | Both |
| `gen_ai.agent.description` | Agent description (when available) | Both |
| `gen_ai.agent.version` | Runtime version | Both |
| `gen_ai.conversation.id` | Session identifier | Both |
| `gen_ai.request.model` | Requested model | Both |
| `gen_ai.response.finish_reasons` | `["stop"]` or `["error"]` | Both |
| `gen_ai.usage.input_tokens` | Total input tokens (all turns) | Both |
| `gen_ai.usage.output_tokens` | Total output tokens (all turns) | Both |
| `gen_ai.usage.cache_read.input_tokens` | Cached input tokens read | Both |
| `gen_ai.usage.cache_creation.input_tokens` | Cached input tokens created | Both |
| `github.copilot.turn_count` | Number of LLM round-trips | Both |
| `github.copilot.cost` | Monetary cost | Both |
| `github.copilot.aiu` | AI units consumed | Both |
| `server.address` | Server hostname | `CLIENT` only |
| `server.port` | Server port | `CLIENT` only |
| `error.type` | Error class name (on error) | Both |
| `gen_ai.input.messages` | Full input messages as JSON (content capture only) | Both |
| `gen_ai.output.messages` | Full output messages as JSON (content capture only) | Both |
| `gen_ai.system_instructions` | System prompt content as JSON (content capture only) | Both |
| `gen_ai.tool.definitions` | Tool schemas as JSON (content capture only) | Both |

#### `chat` span attributes

One span per LLM request. Span kind: `CLIENT`.

| Attribute | Description |
|-----------|-------------|
| `gen_ai.operation.name` | `chat` |
| `gen_ai.provider.name` | Provider name |
| `gen_ai.request.model` | Requested model |
| `gen_ai.conversation.id` | Session identifier |
| `gen_ai.response.id` | Response ID |
| `gen_ai.response.model` | Resolved model |
| `gen_ai.response.finish_reasons` | Stop reasons |
| `gen_ai.usage.input_tokens` | Input tokens this turn |
| `gen_ai.usage.output_tokens` | Output tokens this turn |
| `gen_ai.usage.cache_read.input_tokens` | Cached tokens read |
| `gen_ai.usage.cache_creation.input_tokens` | Cached tokens created |
| `github.copilot.cost` | Turn cost |
| `github.copilot.aiu` | AI units consumed this turn |
| `github.copilot.server_duration` | Server-side duration |
| `github.copilot.initiator` | Request initiator |
| `github.copilot.turn_id` | Turn identifier |
| `github.copilot.interaction_id` | Interaction identifier |
| `github.copilot.time_to_first_chunk` | Time to first streaming chunk, in seconds (streaming only) |
| `server.address` | Server hostname |
| `server.port` | Server port |
| `error.type` | Error class name (on error) |
| `gen_ai.input.messages` | Full prompt messages as JSON (content capture only) |
| `gen_ai.output.messages` | Full response messages as JSON (content capture only) |
| `gen_ai.system_instructions` | System prompt content as JSON (content capture only) |

#### `execute_tool` span attributes

One span per tool call. Span kind: `INTERNAL`.

| Attribute | Description |
|-----------|-------------|
| `gen_ai.operation.name` | `execute_tool` |
| `gen_ai.provider.name` | Provider name (when available) |
| `gen_ai.tool.name` | Tool name (for example, `readFile`) |
| `gen_ai.tool.type` | `function` |
| `gen_ai.tool.call.id` | Tool call identifier |
| `gen_ai.tool.description` | Tool description |
| `error.type` | Error class name (on error) |
| `gen_ai.tool.call.arguments` | Tool input arguments as JSON (content capture only) |
| `gen_ai.tool.call.result` | Tool output as JSON (content capture only) |

### Metrics

#### GenAI convention metrics

| Metric | Type | Unit | Description |
|--------|------|------|-------------|
| `gen_ai.client.operation.duration` | Histogram | s | LLM API call and agent invocation duration |
| `gen_ai.client.token.usage` | Histogram | tokens | Token counts by type (`input`/`output`) |
| `gen_ai.client.operation.time_to_first_chunk` | Histogram | s | Time to receive first streaming chunk |
| `gen_ai.client.operation.time_per_output_chunk` | Histogram | s | Inter-chunk latency after first chunk |

#### Vendor-specific metrics

| Metric | Type | Unit | Description |
|--------|------|------|-------------|
| `github.copilot.tool.call.count` | Counter | calls | Tool invocations by `gen_ai.tool.name` and `success` |
| `github.copilot.tool.call.duration` | Histogram | s | Tool execution latency by `gen_ai.tool.name` |
| `github.copilot.agent.turn.count` | Histogram | turns | LLM round-trips per agent invocation |

### Span events

Lifecycle events recorded on the active `chat` or `invoke_agent` span.

| Event | Description | Key attributes |
|-------|-------------|----------------|
| `github.copilot.hook.start` | A hook began executing | `github.copilot.hook.type`, `github.copilot.hook.invocation_id` |
| `github.copilot.hook.end` | A hook completed successfully | `github.copilot.hook.type`, `github.copilot.hook.invocation_id` |
| `github.copilot.hook.error` | A hook failed | `github.copilot.hook.type`, `github.copilot.hook.invocation_id`, `github.copilot.hook.error_message` |
| `github.copilot.session.truncation` | Conversation history was truncated | `github.copilot.token_limit`, `github.copilot.pre_tokens`, `github.copilot.post_tokens`, `github.copilot.pre_messages`, `github.copilot.post_messages`, `github.copilot.tokens_removed`, `github.copilot.messages_removed`, `github.copilot.performed_by` |
| `github.copilot.session.compaction_start` | History compaction began | None |
| `github.copilot.session.compaction_complete` | History compaction completed | `github.copilot.success`, `github.copilot.pre_tokens`, `github.copilot.post_tokens`, `github.copilot.tokens_removed`, `github.copilot.messages_removed`, `github.copilot.message` (content capture only) |
| `github.copilot.skill.invoked` | A skill was invoked | `github.copilot.skill.name`, `github.copilot.skill.path`, `github.copilot.skill.plugin_name`, `github.copilot.skill.plugin_version` |
| `github.copilot.session.shutdown` | Session is shutting down | `github.copilot.shutdown_type`, `github.copilot.total_premium_requests`, `github.copilot.lines_added`, `github.copilot.lines_removed`, `github.copilot.files_modified_count` |
| `github.copilot.session.abort` | User cancelled the current operation | `github.copilot.abort_reason` |
| `exception` | Session error | `github.copilot.error_type`, `github.copilot.error_status_code`, `github.copilot.error_provider_call_id` |

### Resource attributes

All signals carry these resource attributes.

| Attribute | Value |
|-----------|-------|
| `service.name` | `github-copilot` (configurable via `OTEL_SERVICE_NAME`) |
| `service.version` | Runtime version |

### Content capture

By default, no prompt content, responses, or tool arguments are captured—only metadata like model names, token counts, and durations. To capture full content, set `OTEL_INSTRUMENTATION_GENAI_CAPTURE_MESSAGE_CONTENT=true`.

> [!WARNING]
> Content capture may include sensitive information such as code, file contents, and user prompts. Only enable this in trusted environments.

When content capture is enabled, the following attributes are populated.

| Attribute | Content |
|-----------|---------|
| `gen_ai.input.messages` | Full prompt messages (JSON) |
| `gen_ai.output.messages` | Full response messages (JSON) |
| `gen_ai.system_instructions` | System prompt content (JSON) |
| `gen_ai.tool.definitions` | Tool schemas (JSON) |
| `gen_ai.tool.call.arguments` | Tool input arguments |
| `gen_ai.tool.call.result` | Tool output |

## Feature flag reference

Feature flags enable functionality that is not yet generally available. Enable flags via the `COPILOT_CLI_ENABLED_FEATURE_FLAGS` environment variable (comma-separated list) or by using the `/experimental` slash command.

| Flag | Tier | Description |
|------|------|-------------|
| `CRITIC_AGENT` | experimental | Critic subagent for adversarial feedback on code and designs (Claude and GPT models) |
| `BACKGROUND_SESSIONS` | experimental | Multiple concurrent sessions with background management |
| `MULTI_TURN_AGENTS` | experimental | Multi-turn subagent message passing via `write_agent` |
| `EXTENSIONS` | experimental | Programmatic extensions with custom tools and hooks |
| `QUEUED_COMMANDS` | staff-or-experimental | Queue commands with <kbd>Ctrl</kbd>+<kbd>Enter</kbd> while the agent runs |
| `PERSISTED_PERMISSIONS` | staff-or-experimental | Persist tool permissions across sessions per location |
| `SESSION_STORE` | staff-or-experimental | SQLite-based session store for cross-session history |
| `COMPUTER_USE` | staff | Built-in computer use MCP server (screen capture and mouse/keyboard control) |
| `copilot-feature-agentic-memory` | on | Persistent memory tools across sessions |
| `COPILOT_SWE_AGENT_BACKGROUND_AGENTS` | on | Background agent task execution |

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-plugin-reference)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-programmatic-reference)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-config-dir-reference)
