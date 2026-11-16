---
title: Plugin and marketplace reference
shortTitle: Plugins and marketplaces
intro: Find shared plugin and marketplace terms, file formats, and links to surface-specific documentation.
versions:
  feature: copilot
contentType: reference
category:
  - Author and optimize with Copilot
---

Plugins package customizations for compatible {% data variables.product.prodname_copilot_short %} surfaces. Plugin formats, components, and supported locations vary by surface. Use the documentation for the surface where you plan to install the plugin.

## Plugin manifests

A plugin is described by a `plugin.json` manifest. Agent Plugins defines a portable plugin format for compatible surfaces. The manifest is at the plugin directory's root and declares the Agent Plugins schema. For Agent Plugins 1.0, use `https://agent-plugins.org/schemas/1.0.0/plugin.schema.json`. {% data variables.copilot.copilot_cli_short %} also recognizes the 1.1.0 schema.

The shared Agent Plugins format defines standard locations for some components. Support for those components can differ by surface:

| Component | Agent Plugins location | Notes |
| --- | --- | --- |
| Skills | `skills/NAME/SKILL.md` | Compatible surfaces can discover skills at this location. |
| MCP servers | `mcp.json` at the plugin root | Compatible surfaces can discover MCP server configuration at this location. |
| Surface-specific components | A namespaced directory such as `com.github.copilot/` | Availability and supported components depend on the surface. |

An Agent Plugins 1.0 directory can use this structure:

```text
my-plugin/
├── plugin.json
├── skills/
│   └── deploy/
│       └── SKILL.md
├── mcp.json
└── com.github.copilot/
    ├── agents/
    │   └── helper.agent.md
    ├── commands/
    ├── rules/
    ├── hooks/
    │   └── hooks.json
    └── lsp.json
```

The `plugin.json` manifest declares the Agent Plugins schema. The `skills/` and root `mcp.json` locations are defined by Agent Plugins. The `com.github.copilot/` directory contains Copilot-specific components, not portable Agent Plugins components. Which components a surface loads from this directory depends on that surface. For the {% data variables.copilot.copilot_cli_short %}, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-plugin-reference#components).

{% data variables.copilot.copilot_cli_short %} also supports a legacy {% data variables.product.prodname_copilot_short %} plugin format. It uses different component discovery behavior and configurable component paths. For manifest fields, validation, file locations, and CLI-specific behavior, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-plugin-reference).

{% data variables.product.prodname_vscode %} documents its plugin authoring format and supported behavior in the [Agent Plugins authoring reference](https://code.visualstudio.com/docs/agents/reference/agent-plugin-reference). Do not assume that a component or manifest behavior supported on one surface is supported on another.

## Marketplace catalog

A `marketplace.json` catalog provides metadata about a marketplace and lists plugins in its top-level `plugins` array. Each plugin entry can include its name, description, version, and source. The source identifies where the plugin files are located. For {% data variables.copilot.copilot_cli_short %}, `marketplace.json` is the only required marketplace component. Other surfaces can have additional requirements.

The marketplace name comes from its `name` field, not from the repository name. A plugin identifier combines the plugin name with the marketplace name:

```text
PLUGIN-NAME@MARKETPLACE-NAME
```

Keep marketplace and plugin names stable when settings refer to them. Changing a marketplace name changes the plugin identifiers used by those settings.

Catalog fields and supported file locations can vary by surface. For the {% data variables.copilot.copilot_cli_short %}'s full marketplace catalog fields and locations, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-plugin-reference#marketplacejson). For steps to publish a catalog in a {% data variables.product.github %} repository, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/create-and-share-plugin-marketplaces).

## Use plugins

Adding a marketplace makes its plugins available to browse. Installing a plugin adds it to a surface. Enabling a plugin makes its components available in sessions on that surface. For surface-specific instructions, see:

* [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/customize-copilot/extend-copilot-with-tools-and-context/using-plugins)
* [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing)
* [AUTOTITLE](/copilot/how-tos/github-copilot-app/customize-github-copilot-app)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/configuring-agent-settings)
