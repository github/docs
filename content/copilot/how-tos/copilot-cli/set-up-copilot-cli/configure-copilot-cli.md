---
title: Configure GitHub Copilot CLI
shortTitle: Configure Copilot CLI
intro: Configure trusted directories, tool access, and path and URL permissions for {% data variables.copilot.copilot_cli_short %}
versions:
  feature: copilot
topics:
  - Copilot
  - CLI
contentType: how-tos
category:
  - Configure Copilot # Copilot discovery page
  - Configure Copilot CLI # Copilot CLI bespoke page
---

## Introduction

{% data variables.copilot.copilot_cli_short %} has several configuration options that control what it can access and do on your behalf.

This article shows you how to set trusted directories, configure access for tools, and grant permissions to file paths and URLs.

### Prerequisites

* Install the {% data variables.copilot.copilot_cli_short %}. See [AUTOTITLE](/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli).

## Setting trusted directories

Trusted directories control where {% data variables.copilot.copilot_cli_short %} can read, modify, and execute files. Trusting a directory has security implications, see [Security considerations](/copilot/concepts/agents/about-copilot-cli#trusted-directories).

### Choosing to trust a directory

When you start a {% data variables.copilot.copilot_cli %} session, you'll be asked to confirm that you trust the files in, and below, the directory from which you launched the CLI.

You can choose to trust the current directory for:

* The currently running session only
* This and future sessions

If you choose to trust the directory for future sessions, the trusted directory prompt will not be displayed again. You should only choose this second option if you are sure that this location will always be a safe place for {% data variables.product.prodname_copilot_short %} to operate.

### Editing trusted directories

You can edit the list of permanently trusted directories.

1. Open the CLI’s `config.json` file. By default, it’s stored in a `.copilot` folder under your home directory:
   * **macOS/Linux**: `~/.copilot/config.json`
   * **Windows**: `$HOME\.copilot\config.json`

  You can change the config location by setting the `XDG_CONFIG_HOME` environment variable (primarily on macOS/Linux).
1. Edit the contents of the `trusted_folders` array.

## Setting allowed tools

You can control which tools {% data variables.copilot.copilot_cli_short %} can use, either by responding to approval prompts when {% data variables.product.prodname_copilot_short %} attempts to use a tool, or by specifying permissions via command-line flags.

Be aware that allowing tool access has security implications, see [Security considerations](/copilot/concepts/agents/about-copilot-cli#allowed-tools).

In this section, you can learn how to:

* [Allow a tool for the first time](#allowing-a-tool-for-the-first-time)
* [Allow tools to be used without manual approval](#allowing-tools-to-be-used-without-manual-approval)
* [Specify which tool you want to allow or deny](#specifying-which-tool-you-want-to-allow-or-deny)
* [Allow some tools while denying others](#allowing-some-tools-while-denying-others)
* [Limit available tools](#limiting-available-tools)

### Allowing a tool for the first time

The first time that {% data variables.product.prodname_copilot_short %} needs to use a tool that may require approval—for example, {% data reusables.cli.tools-needing-approval %}—it will ask you whether you want to allow it to run. Whether you’re prompted can depend on the tool and how it’s being used (such as the arguments provided or whether the tool has been previously approved).

1. Prompt {% data variables.product.prodname_copilot_short %} to perform a task that requires a tool. For example:

   ```shell
   copilot -p "Create a new file called README.md with a project description"
   ```

1. Choose from one of the three options:

   * `1. Yes`

      Choose this option to allow {% data variables.product.prodname_copilot_short %} to run this particular command, this time only. The next time it needs to use this tool, it will ask you again.

   * `2. Yes, and approve TOOL for the rest of the running session`

      Choose this option to allow {% data variables.product.prodname_copilot_short %} to use this tool for the duration of the currently running session. It will ask for your approval again in new sessions, or if you resume the current session in the future. If you choose this option, you are allowing {% data variables.product.prodname_copilot_short %} to use this tool in any way it thinks is appropriate.

      For example, if {% data variables.product.prodname_copilot_short %} asks you to allow it to run the command `rm ./this-file.txt`, and you choose option 2, then {% data variables.product.prodname_copilot_short %} can run any `rm` command (for example, `rm -rf ./*`) during the current run of this session, without asking for your approval.

   * `3. No, and tell Copilot what to do differently (Esc)`

      Choose this option to cancel the proposed command and instruct {% data variables.product.prodname_copilot_short %} to try a different approach.

### Allowing tools to be used without manual approval

You can use command-line flags to designate tools that {% data variables.product.prodname_copilot_short %} can use without asking for your approval.

#### Allowing all tools

Use the `--allow-all-tools` to allow {% data variables.product.prodname_copilot_short %} to use any tool without asking for your approval.

* For example:

  ```shell
  copilot -p "Revert the last commit" --allow-all-tools
  ```

#### Denying a tool

Use `--deny-tool` to prevent {% data variables.product.prodname_copilot_short %} from using a specific tool.

* For example:

  ```shell
  copilot --deny-tool 'shell(git push)'
  ```

This option takes precedence over the `--allow-all-tools` and `--allow-tool` options.

#### Allowing a tool

Use `--allow-tool` to allow {% data variables.product.prodname_copilot_short %} to use a specific tool without asking for your approval.

* For example:

  ```shell
  copilot --allow-tool 'shell'
  ```

### Specifying which tool you want to allow or deny

To use the `--deny-tool` and `--allow-tool` options, you must specify what type of tool you want to allow or deny:

* [Shell commands](#allowing-or-denying-shell-commands)
* ['Write' tools](#allowing-or-denying-write-tools)
* [MCP server tools](#allowing-or-denying-mcp-server-tools)

#### Allowing or denying shell commands

Use `shell(COMMAND)` to allow or deny a specific shell command.

* For example, to prevent {% data variables.product.prodname_copilot_short %} from using any `rm` command, use:

  ```shell
  copilot --deny-tool 'shell(rm)'
  ```

For `git` and `gh` commands, specify a particular first-level subcommand to allow or deny.

* For example, to prevent {% data variables.product.prodname_copilot_short %} from using `git push`, use:

  ```shell
  copilot --deny-tool 'shell(git push)'
  ```

The tool specification is optional. For example, `copilot --allow-tool 'shell'` allows {% data variables.product.prodname_copilot_short %} to use any shell command without individual approval.

#### Allowing or denying `'write'` tools

Use `'write'` to allow or deny tools—other than shell commands—permission to modify files.

* For example, to allow {% data variables.product.prodname_copilot_short %} to edit files without your individual approval, use:

  ```shell
  copilot --allow-tool 'write'
  ```

#### Allowing or denying MCP server tools

Use `'MCP_SERVER_NAME'` to allow or deny a specific tool from the specified MCP server.

* For example, to prevent {% data variables.product.prodname_copilot_short %} from using the tool called `tool_name` from the MCP server called `My-MCP-Server`, use:

  ```shell
  copilot --deny-tool 'My-MCP-Server(tool_name)'
  ```

`MCP_SERVER_NAME` is the name of an MCP server that you have configured.

Tools from the server are specified in parentheses, using the tool name that is registered with the MCP server.

Using the server name without specifying a tool allows or denies all tools from that server.

You can find an MCP server's name by entering `/mcp` in the interactive mode of {% data variables.copilot.copilot_cli_short %} and selecting the server from the list that's displayed.

### Allowing some tools while denying others

To determine exactly which tools {% data variables.product.prodname_copilot_short %} can use without asking for your approval, you can use a combination of approval options. For example:

* To prevent {% data variables.product.prodname_copilot_short %} from using the `rm` and `git push` commands, but automatically allow all other tools, use:

  ```shell
  copilot --allow-all-tools --deny-tool 'shell(rm)' --deny-tool 'shell(git push)'
  ```

* To prevent {% data variables.product.prodname_copilot_short %} from using the tool `tool_name` from the MCP server named `My-MCP-Server`, but allow all other tools from that server to be used without individual approval, use:

  ```shell
  copilot --allow-tool 'My-MCP-Server' --deny-tool 'My-MCP-Server(tool_name)'
  ```

### Limiting available tools

To restrict {% data variables.product.prodname_copilot_short %} to a specific set of tools, use `--available-tools`.

Tools not included in this list will not be available to {% data variables.product.prodname_copilot_short %}.

## Setting path permissions

Path permissions control which directories and files {% data variables.product.prodname_copilot_short %} can access.

By default, {% data variables.copilot.copilot_cli_short %} can access the current working directory, its subdirectories, and the system temp directory.

Path permissions apply to shell commands, file operations (create, edit, view), and search tools (such as `grep` and glob patterns). For shell commands, paths are heuristically extracted by tokenizing command text and identifying tokens that look like paths.

> [!WARNING]
> Path detection for shell commands has limitations:
>
> * Paths embedded in complex shell constructs may not be detected.
> * Only a specific set of environment variables are expanded (`HOME`, `TMPDIR`, `PWD`, and similar). Custom variables like `$MY_PROJECT_DIR` are not expanded and may not be validated correctly.
> * Symlinks are resolved for existing files, but not for files being created.

### Allowing access to all paths

To disable path verification and allow access to any path, use the `--allow-all-paths` flag when starting {% data variables.copilot.copilot_cli_short %}.

### Disallowing access to the temp directory

To disallow access to the temp directory, use `--disallow-temp-dir`.

## Setting URL permissions

URL permissions control which external URLs {% data variables.product.prodname_copilot_short %} can access. By default, all URLs require approval before access is granted.

URL permissions apply to the `web_fetch` tool and a curated list of shell commands that access the network (such as `curl`, `wget`, and `fetch`). For shell commands, URLs are extracted using regex patterns.

> [!WARNING]
> URL detection for shell commands has limitations:
>
> * URLs in file contents, config files, or environment variables read by commands are not detected.
> * Obfuscated URLs (such as split strings or escape sequences) may not be detected.
> * HTTP and HTTPS are treated as different protocols and require separate approval.

URL permissions can be persisted for the session or permanently.

### Disabling URL verification

To disable URL verification, use the `--allow-all-urls` flag.

### Pre-approving specific domains

To pre-approve specific domains, use `--allow-url <domain>`.

* For example, `--allow-url github.com`.

### Denying specific domains

To deny specific domains, use `--deny-url <domain>`.

* For example, `--deny-url github.com`.

## Allowing all tools, paths, and URLs

To allow all tools, paths and URLs, use `--allow-all`, or its alias, `--yolo`.

This flag combines:
* `--allow-all-tools` (skip tool approval).
* `--allow-all-paths` (disable path verification).
* `--allow-all-urls` (disables URL verification).

> [!TIP] During an interactive session, you can also enable all permissions with the `/allow-all` or `/yolo` slash commands.

## Next steps

* [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot)
