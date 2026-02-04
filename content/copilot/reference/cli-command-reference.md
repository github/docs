---
title: GitHub Copilot CLI command reference
shortTitle: CLI command reference
intro: 'Find commands and keyboard shortcuts to help you use {% data variables.copilot.copilot_cli_short %} effectively.'
versions:
  feature: copilot
category:
  - Author and optimize with Copilot
topics:
  - Copilot
contentType: reference
---

## Command-line commands

| Command                | Purpose                                            |
|------------------------|----------------------------------------------------|
| `copilot`              | Launch interactive mode.                           |
| `copilot help [topic]` | Display help information. Help topics include: `config`, `commands`, `environment`, `logging`, and `permissions`. |
| `copilot init`         | Initialize {% data variables.product.prodname_copilot_short %} custom instructions for this repository. |
| `copilot update`       | Download and install the latest version.           |
| `copilot version`      | Display version information and check for updates. |
| `copilot plugin`       | Manage plugins and plugin marketplaces.            |

## Global shortcuts in interactive mode

| Shortcut                            | Purpose                               |
|-------------------------------------|---------------------------------------|
| `@ FILENAME`                        | Include file contents in the context. |
| <kbd>Ctrl</kbd>+<kbd>X</kbd> then `/`  | After you have started typing a prompt, this allows you to run a slash command—for example, if you want to change the model without having to retype your prompt. |
| <kbd>Esc</kbd>                      | Cancel the current operation.         |
| `! COMMAND`                         | Execute a command in your local shell, bypassing {% data variables.product.prodname_copilot_short %}. |
| <kbd>Ctrl</kbd>+<kbd>C</kbd>        | Cancel operation / clear input. Press twice to exit. |
| <kbd>Ctrl</kbd>+<kbd>D</kbd>        | Shutdown.                             |
| <kbd>Ctrl</kbd>+<kbd>L</kbd>        | Clear the screen.                     |

## Timeline shortcuts in interactive mode

| Shortcut                            | Purpose                               |
|-------------------------------------|---------------------------------------|
| ctrl+o    | While there is not input, this expands recent items in {% data variables.product.prodname_copilot_short %}'s response timeline to show more details. |
| ctrl+e    | While there is not input, this expands all items in {% data variables.product.prodname_copilot_short %}'s response timeline. |

## Navigation shortcuts in interactive mode

| Shortcut                            | Purpose                                      |
|-------------------------------------|----------------------------------------------|
| <kbd>Ctrl</kbd>+<kbd>A</kbd>        | Move to beginning of the line (when typing). |
| <kbd>Ctrl</kbd>+<kbd>E</kbd>        | Move to end of the line (when typing).       |
| <kbd>Ctrl</kbd>+<kbd>H</kbd>        | Delete the previous character.               |
| <kbd>Ctrl</kbd>+<kbd>W</kbd>        | Delete the previous word.                    |
| <kbd>Ctrl</kbd>+<kbd>U</kbd>        | Delete from cursor to beginning of the line. |
| <kbd>Ctrl</kbd>+<kbd>K</kbd>        | Delete from cursor to end of the line.       |
| <kbd>Meta</kbd>+<kbd>←</kbd>/<kbd>→</kbd> | Move the cursor by a word.             |
| <kbd>↑</kbd>/<kbd>↓</kbd>           | Navigate the command history.                |


## Slash commands in interactive mode

| Command                                             | Purpose |
|-----------------------------------------------------|---------|
| `/add-dir PATH`                                     | Add a directory to the allowed list for file access. |
| `/agent`                                            | Browse and select from available agents (if any). |
| `/allow-all`, `/yolo`                               | Enable all permissions (tools, paths, and URLs). |
| `/clear`, `/new`                                    | Clear the conversation history. |
| `/compact`                                          | Summarize the conversation history to reduce context window usage. |
| `/context`                                          | Show the context window token usage and visualization. |
| `/cwd`, `/cd [PATH]`                                | Change the working directory or display the current directory. |
| `/delegate [PROMPT]`                                | Delegate changes to a remote repository with an AI-generated pull request. |
| `/diff`                                             | Review the changes made in the current directory. |
| `/exit`, `/quit`                                    | Exit the CLI. |
| `/experimental [on\|off]`                           | Toggle or turn on/off experimental features. |
| `/share [file\|gist] [PATH]`                        | Share the session to a Markdown file or GitHub gist. |
| `/feedback`                                         | Provide feedback about the CLI. |
| `/help`                                             | Show the help for interactive commands. |
| `/ide`                                              | Connect to an IDE workspace. |
| `/init`                 | Initialize {% data variables.product.prodname_copilot_short %} custom instructions and agentic features for this repository. |
| `/list-dirs`                                        | Display all of the directories for which file access has been allowed. |
| `/login`                                            | Log in to {% data variables.product.prodname_copilot_short %}. |
| `/logout`                                           | Log out of {% data variables.product.prodname_copilot_short %}. |
| `/lsp [show\|test\|reload\|help] [SERVER-NAME]`     | Manage the language server configuration. |
| `/mcp [show\|add\|edit\|delete\|disable\|enable] [SERVER-NAME]`      | Manage the MCP server configuration. |
| `/model`, `/models [MODEL]`                         | Select the AI model you want to use. |
| `/plan [PROMPT]`                                    | Create an implementation plan before coding. |
| `/plugin [marketplace\|install\|uninstall\|update\|list] [ARGS...]` | Manage plugins and plugin marketplaces. |
| `/rename NAME`                                      | Rename the current session (alias for `/session rename`). |
| `/reset-allowed-tools`                              | Reset the list of allowed tools. |
| `/resume [SESSION-ID]`                              | Switch to a different session (optionally specify a session ID). |
| `/review [PROMPT]`                                  | Run the code review agent to analyze changes. |
| `/session [checkpoints [n]\|files\|plan\|rename NAME]`   | Show session information and a workspace summary. Use the subcommands for details. |
| `/skills [list\|info\|add\|remove\|reload] [ARGS...]`    | Manage skills for enhanced capabilities. |
| `/terminal-setup`      | Configure the terminal for multiline input support (<kbd>Shift</kbd>+<kbd>Enter</kbd> and <kbd>Ctrl</kbd>+<kbd>Enter</kbd>). |
| `/theme [show\|set\|list] [auto\|THEME-ID]`         | View or configure the terminal theme. |
| `/usage`                                            | Display session usage metrics and statistics. |
| `/user [show\|list\|switch]`                        | Manage the current {% data variables.product.github %} user. |

For a complete list of available slash commands enter `/help` in interactive mode.

## Command-line options

| Option                             | Purpose                                  |
|------------------------------------|------------------------------------------|
| `--acp`                            | Start the Agent Client Protocol server.  |
| `--add-dir PATH`            | Add a directory to the allowed list for file access (can be used multiple times). |
| `--add-github-mcp-tool TOOL`       | Add a tool to enable for the {% data variables.product.github %} MCP server, instead of the default CLI subset (can be used multiple times). Use `*` for all tools. |
| `--add-github-mcp-toolset TOOLSET` | Add a toolset to enable for the {% data variables.product.github %} MCP server, instead of the default CLI subset (can be used multiple times). Use `all` for all toolsets. |
| `--additional-mcp-config JSON`     | Additional MCP servers configuration as a JSON string or a file path (prefix with `@`) (can be used multiple times). Augments the configuration from `~/.copilot/mcp-config.json` for this session. |
| `--agent AGENT`                    | Specify a custom agent to use. |
| `--allow-all`                      | Enable all permissions (equivalent to `--allow-all-tools --allow-all-paths --allow-all-urls`). |
| `--allow-all-paths`                | Disable file path verification and allow access to any path. |
| `--allow-all-tools`                | Allow all tools to run automatically without confirmation. Required for non-interactive mode (env: `COPILOT_ALLOW_ALL`). |
| `--allow-all-urls`                 | Allow access to all URLs without confirmation. |
| `--allow-tool [TOOLS...]`          | Tools the CLI has permission to use. Will not prompt for permission. |
| `--allow-url [URLS...]`            | Allow access to specific URLs or domains. |
| `--available-tools [TOOLS...]`     | Only these tools will be available to the model. |
| `--banner`                         | Show the startup banner. |
| `--config-dir PATH`         | Set the configuration directory (default: `~/.copilot`). |
| `--continue`                       | Resume the most recent session. |
| `--deny-tool [TOOLS...]`           | Tools the CLI does not have permission to use. Will not prompt for permission. |
| `--deny-url [URLS...]`             | Deny access to specific URLs or domains, takes precedence over `--allow-url`. |
| `--disable-builtin-mcps`           | Disable all built-in MCP servers (currently: `github-mcp-server`). |
| `--disable-mcp-server SERVER-NAME` | Disable a specific MCP server (can be used multiple times). |
| `--disable-parallel-tools-execution` | Disable parallel execution of tools (LLM can still make parallel tool calls, but they will be executed sequentially). |
| `--disallow-temp-dir`              | Prevent automatic access to the system temporary directory. |
| `--enable-all-github-mcp-tools`    | Enable all {% data variables.product.github %} MCP server tools, instead of the default CLI subset. Overrides the `--add-github-mcp-toolset` and `--add-github-mcp-tool` options. |
| `--excluded-tools [TOOLS...]`      | These tools will not be available to the model. |
| `--experimental`                   | Enable experimental features (use `--no-experimental` to disable). |
| `-h`, `--help`                     | Display help. |
| `-i PROMPT`, `--interactive PROMPT`  | Start interactive mode and automatically execute this prompt. |
| `--log-dir DIRECTORY`              | Set the log file directory (default: `~/.copilot/logs/`). |
| `--log-level LEVEL`                | Set the log level (choices: `none`, `error`, `warning`, `info`, `debug`, `all`, `default`). |
| `--model MODEL`                    | Set the AI model you want to use. |
| `--no-ask-user`                    | Disable the `ask_user` tool (the agent works autonomously without asking questions). |
| `--no-auto-update`                 | Disable downloading CLI updates automatically. |
| `--no-color`                       | Disable all color output. |
| `--no-custom-instructions`         | Disable loading of custom instructions from `AGENTS.md` and related files. |
| `-p PROMPT`, `--prompt PROMPT`     | Execute a prompt in non-interactive mode (exits after completion). |
| `--plain-diff`                     | Disable rich diff rendering (syntax highlighting via the diff tool specified by your git config). |
| `--resume [SESSION-ID]`            | Resume from a previous session (optionally specify a session ID). |
| `-s`, `--silent`                   | Output only the agent response (without usage statistics), useful for scripting with `-p`. |
| `--screen-reader`                  | Enable screen reader optimizations. |
| `--share [PATH]`                   | Share a session to a Markdown file after completion in non-interactive mode (default path: `./copilot-session-<ID>.md`). |
| `--share-gist`                     | Share a session to a secret {% data variables.product.github %} gist after completion in non-interactive mode. |
| `--stream MODE`                    | Enable or disable streaming mode (mode choices: `on` or `off`). |
| `-v`, `--version`                  | Show version information. |
| `--yolo`                           | Enable all permissions (equivalent to `--allow-all-tools --allow-all-paths --allow-all-urls`). |

For a complete list of commands and options, run `copilot help`.
