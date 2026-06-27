---
title: Adding LSP servers for {% data variables.copilot.copilot_cli %}
shortTitle: Add LSP servers
intro: 'You can add LSP servers to give {% data variables.copilot.copilot_cli_short %} precise code intelligence, improving its ability to navigate definitions, find references, and rename symbols.'
versions:
  feature: copilot
contentType: how-tos
docsTeamMetrics:
  - copilot-cli
category:
  - Configure Copilot # Copilot discovery page
  - Configure Copilot CLI # Copilot CLI bespoke page
---

## Introduction

This article explains how to add LSP servers for {% data variables.copilot.copilot_cli_short %}. For conceptual information about LSP servers, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/lsp-servers).

Adding an LSP server for {% data variables.copilot.copilot_cli_short %} is a two-step process:

1. Install the LSP server software on your local machine.
1. Configure the server in a configuration file.

These steps are described in detail in this article.

## Installing and configuring an LSP server

You can add an LSP server for a specific language by either:
* Using the `lsp-setup` skill, which automates the process.
* Manually installing the server software and then configuring {% data variables.copilot.copilot_cli_short %} to use the server.

These two approaches are described in the sections below.

## Using the `lsp-setup` skill to add a language server

The `lsp-setup` skill from the "Awesome {% data variables.product.prodname_copilot %}" repository automates the installation and configuration of a selection of popular languages.

1. Go to the "Awesome {% data variables.product.prodname_copilot %}" download site and search for "lsp":

   https://awesome-copilot.github.com/skills/?q=lsp.

1. Download the `lsp-setup` skill.
1. Unzip the downloaded `.zip` file to create a directory called `lsp-setup`.
1. Move the `lsp-setup` directory into either:

   * Your personal skills directory: `~/.copilot/skills/`.
   * A project skills directory: `.github/skills/` in a Git repository.

1. Start {% data variables.copilot.copilot_cli_short %}, or if you are currently in a CLI session enter `/skills reload`.
1. Enter the prompt:

   ```copilot copy
   setup lsp
   ```

1. Follow the on-screen instructions to select the language for the server you want to set up, then complete the additional steps.
1. When the process is complete, enter `/lsp reload` to load the new LSP server.
1. Check that the server has been added and is working correctly. See [Confirming that an LSP server is available](#confirming-that-an-lsp-server-is-available) later in this article.

## Manually installing and configuring an LSP server

Installing an LSP server for a specific language typically involves installing a package via a package manager such as `npm`, `gem`, or `pip`.

To manually install an LSP server, refer to the documentation for the specific language server you want to install. Listed below are some example commands for installing popular LSP servers.

> [!NOTE]
> Useful resources for finding LSP servers for different languages include:
> * [Implementations](https://microsoft.github.io/language-server-protocol/implementors/servers/) on Microsoft's Language Server Protocol website.
> * [Language Server Protocol](https://wiki.archlinux.org/title/Language_Server_Protocol) on the Arch Linux website.

> [!CAUTION]
> Only install LSP servers from sources you trust.

### Example installation command: TypeScript and JavaScript

If you have Node.js installed, you can install the `typescript-language-server` LSP server with the following command:

```bash copy
npm install -g typescript typescript-language-server
```

The `typescript-language-server` LSP server supports both TypeScript and JavaScript.

### Example installation command: Ruby

If you have gem installed, you can install the `ruby-lsp` LSP server with the following command:

```bash copy
gem install ruby-lsp
```

Alternatively, you can install the `solargraph` LSP server for Ruby with:

```bash copy
gem install solargraph
```

### Example installation command: Python

If you have Node.js installed, you can install the `pyright` LSP server with the following command:

```bash copy
npm install -g pyright
```

Alternatively, if you have pip installed, you can install the `python-lsp-server` LSP server with:

```bash copy
pip install python-lsp-server
```

## Configuring the language server

1. To configure the LSP server, add a server definition to either of the two configuration files:

   * **User configuration**: `~/.copilot/lsp-config.json` applies to all your projects.
   * **Project configuration**: `.github/lsp.json`, in your repository, applies to everyone working on that project.

   Both files use the same JSON syntax:

   ```json
   {
     "lspServers": {
       "SERVER-NAME": {
         "command": "COMMAND",
         "args": ["ARG1", "ARG2"],
         "fileExtensions": {
           ".EXT": "LANGUAGE-ID"
         }
       },
       "ANOTHER-SERVER": {
         ...
       }
     }
   }
   ```

   Some examples of server definitions for specific LSP servers are provided later in this article.

1. After installing and configuring the server, confirm that {% data variables.copilot.copilot_cli_short %} can use it. See [Confirming that an LSP server is available](#confirming-that-an-lsp-server-is-available) below.

### Configuration fields

Each server definition in the configuration file must have a unique name and contain only alphanumeric characters, underscores, and hyphens.

Within each server definition, the following fields are available/required:

<table>
  <colgroup>
    <col width="25%">
    <col width="10%">
    <col>
  </colgroup>
  <thead>
    <tr>
      <th nowrap>Field</th>
      <th nowrap>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td nowrap><code>command</code></td>
      <td nowrap>Yes</td>
      <td>The command used to start the LSP server.</td>
    </tr>
    <tr>
      <td nowrap><code>args</code></td>
      <td nowrap>No</td>
      <td>Arguments to pass to the command.</td>
    </tr>
    <tr>
      <td nowrap><code>fileExtensions</code></td>
      <td nowrap>Yes</td>
      <td>A JSON map of file extensions and their corresponding language ID (for example, <code>{ ".rs": "rust" }</code>).</td>
    </tr>
    <tr>
      <td nowrap><code>env</code></td>
      <td nowrap>No</td>
      <td>Environment variables to set when starting the server. Supports <code>${VAR}</code> and <code>${VAR:-default}</code> expansion syntax.</td>
    </tr>
    <tr>
      <td nowrap><code>rootUri</code></td>
      <td nowrap>No</td>
      <td>The root directory for the LSP server, relative to the Git root. Defaults to <code>"."</code>. Useful for monorepos. If your project lives in a subdirectory of the Git repository rather than the repository root, set <code>rootUri</code> to that subdirectory path.</td>
    </tr>
    <tr>
      <td nowrap><code>initializationOptions</code></td>
      <td nowrap>No</td>
      <td>Custom options sent to the server during startup.</td>
    </tr>
    <tr>
      <td nowrap><code>requestTimeoutMs</code></td>
      <td nowrap>No</td>
      <td>The timeout for server requests in milliseconds (default: 90 seconds).</td>
    </tr>
  </tbody>
</table>

### Example server definition: `typescript-language-server` LSP server

```json copy
{
  "lspServers": {
    "typescript": {
      "command": "typescript-language-server",
      "args": ["--stdio"],
      "fileExtensions": {
        ".ts": "typescript",
        ".tsx": "typescriptreact",
        ".js": "javascript",
        ".jsx": "javascriptreact",
        ".mjs": "javascript",
        ".cjs": "javascript",
        ".mts": "typescript",
        ".cts": "typescript"
      }
    }
  }
}
```

### Example server definition: `ruby-lsp` LSP server

```json copy
{
  "lspServers": {
    "ruby": {
      "command": "ruby-lsp",
      "args": [],
      "fileExtensions": {
        ".rb": "ruby",
        ".rbw": "ruby",
        ".rake": "ruby",
        ".gemspec": "ruby"
      }
    }
  }
}
```

### Example server definition: `pyright` LSP server for Python

```json copy
{
  "lspServers": {
    "python": {
      "command": "pyright-langserver",
      "args": ["--stdio"],
      "fileExtensions": {
        ".py": "python",
        ".pyw": "python",
        ".pyi": "python"
      }
    }
  }
}
```

## Managing language servers with the `/lsp` command

You can list and manage your LSP servers in an interactive CLI session using the `/lsp` slash command:

| Slash command             | Description |
|---------------------------|-------------|
| `/lsp` or `/lsp show`     | Show the status of all configured LSP servers. |
| `/lsp test SERVER-NAME`   | Test whether a server starts correctly. |
| `/lsp reload`             | Reload LSP configurations from disk. |
| `/lsp help`               | Show `/lsp` command information. |

### Listing available LSP servers

1. In {% data variables.copilot.copilot_cli_short %}, confirm that the LSP server you chose is available by using the `/lsp` slash command. You will see output such as:

   ```text
   ● LSP Server Status:

     User-configured servers:
       • ruby: ruby-lsp (.rb, .rbw, .rake, .gemspec)
       • omnisharp: omnisharp (.cs)

     User config: /Users/username/.copilot/lsp-config.json
   ```

### Confirming that an LSP server is available

1. After adding and configuring an LSP server, start (or restart) {% data variables.copilot.copilot_cli_short %}.
1. Use the slash command: `/lsp test SERVER-NAME` to check that the LSP server is working correctly.

   {% data variables.copilot.copilot_cli_short %} attempts to start a temporary, standalone instance of the server and reports whether it was successful or if there were any errors. It then kills the temporary server process.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/use-copilot-cli)
