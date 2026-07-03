---
title: About {% data variables.product.prodname_copilot %} plugins
shortTitle: Plugins
allowTitleToDifferFromFilename: true
intro: 'Plugins are installable packages that extend {% data variables.product.prodname_copilot_short %} with reusable agents, skills, hooks, and integrations.'
product: '{% data reusables.gated-features.copilot-cli %}<br><br>{% data reusables.gated-features.copilot-cloud-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot # Copilot discovery page
  - Learn about Copilot CLI # Copilot CLI bespoke page
docsTeamMetrics:
  - copilot-cli
redirect_from:
  - /copilot/concepts/agents/copilot-cli/about-cli-plugins
---

Plugins provide a way to distribute custom {% data variables.product.prodname_copilot_short %} functionality. You can use a plugin to add a preconfigured set of capabilities to {% data variables.product.prodname_copilot_short %}, including {% data variables.copilot.copilot_cli_short %} and {% data variables.copilot.copilot_cloud_agent %}.

## What is a plugin?

* A distributable package that extends {% data variables.product.prodname_copilot_short %}'s functionality.
* A bundle of components in a single installable unit.

## What plugins contain

A plugin can contain some or all of the following components:

* **Custom agents** — Specialized AI assistants (`*.agent.md` files in `agents/`)
* **Skills** — Discrete callable capabilities (skills subdirectories in `skills/`, containing a `SKILL.md` file)
* **Hooks** — Event handlers that intercept agent behavior (a `hooks.json` file in the plugin root, or in `hooks/`)
* **MCP server configurations** — Model Context Protocol integrations (a `.mcp.json` file in the plugin root, or an `mcp.json` file in `.github/`)
* **LSP server configurations** — Language Server Protocol integrations (an `lsp.json` file in the plugin root, or in `.github/`)

## How plugins are structured

A plugin is a directory with a specific structure. At minimum, it contains a `plugin.json` manifest file at the root of the directory. The manifest gives the plugin a name and points to the components the plugin provides. Alongside the manifest, the directory can contain any combination of agents, skills, hooks, MCP server configurations, and LSP server configurations.

A typical plugin directory looks like this:

```text
my-plugin/
├── plugin.json           # Required manifest
├── agents/               # Custom agents (optional)
│   └── helper.agent.md
├── skills/               # Skills (optional)
│   └── deploy/
│       └── SKILL.md
├── hooks.json            # Hook configuration (optional)
├── .mcp.json             # MCP server config (optional)
└── lsp.json              # LSP server config (optional)
```

For the full set of fields you can include in the manifest, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-plugin-reference). For step-by-step guidance on authoring a plugin, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/plugins-creating).

## Why use plugins?

Plugins provide the following benefits:

* Reusability across projects
* Team standardization of {% data variables.product.prodname_copilot_short %} configuration
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

How you install a plugin depends on which client you're using:

* In {% data variables.copilot.copilot_cli_short %}, you can install plugins imperatively using the `copilot plugin install` command or the `/plugin install` slash command, or declaratively by adding the plugin to the `enabledPlugins` field of either a user-level `~/.copilot/settings.json` file or a repository-level `.github/copilot/settings.json` file. See [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing).
* In {% data variables.copilot.copilot_cloud_agent %}, you install plugins declaratively by adding them to the `enabledPlugins` field of the repository's `.github/copilot/settings.json` file. To install plugins from a marketplace that isn't registered by default, you can also add the marketplace to the `extraKnownMarketplaces` field in the same file.

Enterprise administrators can define plugin standards that apply to users on the enterprise's {% data variables.product.prodname_copilot_short %} plan, including specifying additional marketplaces and plugins that are automatically installed. See [AUTOTITLE](/copilot/concepts/agents/about-enterprise-plugin-standards).

## How plugin marketplaces work

A plugin marketplace is a registry of plugins that you can browse and install from. A marketplace can be hosted in a repository on {% data variables.product.prodname_dotcom_the_website %}, in any other online Git hosting service, or on your local or shared file system.

A marketplace is defined by a `marketplace.json` file, which provides metadata about the marketplace and lists the plugins it makes available. Each entry in the marketplace's `plugins` array describes a plugin—including its name, description, version, and the path to the plugin's directory.

Because plugins in a marketplace are versioned, marketplaces make it easy to discover, install, and update plugins, and to share them across a team. For step-by-step guidance on creating a marketplace, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/plugins-marketplace).

## Plugins compared with manual configuration

Any functionality that you could add with a plugin, you could also add by configuring {% data variables.product.prodname_copilot_short %} manually—for example, by adding custom agent profiles or MCP servers. However, plugins provide several advantages over manual configuration:

| Feature    | Manual configuration in a repository | Plugin |
|------------|-----------------------------|-----------------|
| Scope      | Single repository           | Any project |
| Sharing    | Manual copy/paste           | Install command or `enabledPlugins` entry |
| Versioning | Git history                 | Marketplace versions |
| Discovery  | Searching repositories      | Marketplace browsing |

## Further reading

* [AUTOTITLE](/copilot/concepts/agents/about-agent-skills)
* [AUTOTITLE](/copilot/concepts/agents/hooks)
* [AUTOTITLE](/copilot/concepts/agents/copilot-cli/about-custom-agents)
