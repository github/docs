---
title: About plugins for {% data variables.copilot.copilot_cli %}
shortTitle: About CLI plugins
allowTitleToDifferFromFilename: true
intro: 'Plugins are installable packages that extend {% data variables.copilot.copilot_cli %} with reusable agents, skills, hooks, and integrations.'
product: '{% data reusables.gated-features.copilot-cli %}'
versions:
  feature: copilot
topics:
  - Copilot
contentType: concepts
category:
  - Learn about Copilot
---

Plugins provide a way to distribute custom CLI functionality. You can use a plugin to add a preconfigured set of capabilities to {% data variables.copilot.copilot_cli_short %}.

## What is a plugin?

* A distributable package that extends {% data variables.copilot.copilot_cli_short %}'s functionality.
* A bundle of components in a single installable unit.

## What plugins contain

A plugin can contain some or all of the following components:

* **Custom agents** — Specialized AI assistants (`*.agent.md` files in `agents/`)
* **Skills** — Discrete callable capabilities (skills subdirectories in `skills/`, containing a `SKILL.md` file)
* **Hooks** — Event handlers that intercept agent behavior (a `hooks.json` file in the plugin root, or in `hooks/`)
* **MCP server configurations** — Model Context Protocol integrations (a `.mcp.json` file in the plugin root, or an `mcp.json` file in `.github/`)
* **LSP server configurations** — Language Server Protocol integrations (an `lsp.json` file in the plugin root, or in `.github/`)

## Why use plugins?

Plugins provide the following benefits:

* Reusability across projects
* Team standardization of CLI configuration
* Share domain expertise (for example, by providing the skills of a Rails expert, or a Kubernetes expert)
* Encapsulate complex MCP server setups

## Where can I get plugins?

You can install plugins from:

* A marketplace
* A repository
* A local path

A marketplace is a location where developers can publish, discover, install, and manage plugins. It's a bit like an app store—but for plugins.

Examples of marketplaces include:

* [copilot-plugins](https://github.com/github/copilot-plugins) (added by default)
* [awesome-copilot](https://github.com/github/awesome-copilot) (added by default)
* [claude-code-plugins](https://github.com/anthropics/claude-code)
* [claudeforge-marketplace](https://github.com/claudeforge/marketplace)

For more about adding marketplaces and installing plugins from them, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing).

## Plugins compared with manual configuration

Any functionality that you could add with a plugin, you could also add by configuring {% data variables.copilot.copilot_cli_short %} manually—for example, by adding custom agent profiles or MCP servers. However, plugins provide several advantages over manual configuration:

| Feature    | Manual configuration in a repository | Plugin |
|------------|-----------------------------|-----------------|
| Scope      | Single repository           | Any project |
| Sharing    | Manual copy/paste           | `/plugin install` command |
| Versioning | Git history                 | Marketplace versions |
| Discovery  | Searching repositories      | Marketplace browsing |

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/plugins-creating)
* [AUTOTITLE](/copilot/reference/cli-plugin-reference)
