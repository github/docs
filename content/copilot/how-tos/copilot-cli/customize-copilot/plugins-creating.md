---
title: Creating a plugin for {% data variables.copilot.copilot_cli %}
shortTitle: 'Plugins: Create a plugin'
allowTitleToDifferFromFilename: true
intro: 'Create a plugin to share customizations in an easy-to-install package.'
versions:
  feature: copilot
topics:
  - Copilot
category:
  - Configure Copilot
  - Author and optimize with Copilot
contentType: how-tos
---

## Introduction

Plugins are packages that extend the functionality of {% data variables.copilot.copilot_cli_short %}. See [AUTOTITLE](/copilot/concepts/agents/copilot-cli/about-cli-plugins).

{% data reusables.copilot.cli-help-note %}

## Plugin structure

A plugin consists of a directory with a specific structure. At minimum, it must contain a `plugin.json` manifest file at the root of the directory. It can also contain any combination of agents, skills, hooks, and MCP server configurations.

### Example plugin structure

```text
my-plugin/
├── plugin.json           # Required manifest
├── agents/               # Custom agents (optional)
│   └── helper.agent.md
├── skills/               # Skills (optional)
│   └── deploy/
│       └── SKILL.md
├── hooks.json            # Hook configuration (optional)
└── .mcp.json             # MCP server config (optional)
```

## Creating a plugin

1. Create a directory for your plugin.
1. Add a `plugin.json` manifest file to the root of the directory.

   **Example `plugin.json` file**

   {% data reusables.copilot.cli-example-plugin-file %}

   For details of the full set of fields you can include in this file, see [AUTOTITLE](/copilot/reference/cli-plugin-reference#pluginjson).

1. Add some components to your plugin by creating the appropriate files and directories for agents, skills, hooks, and MCP server configurations.

   For example:

   1. Add an agent by creating a `NAME.agent.md` file in an `agents` subdirectory.

      ```markdown copy
      ---
      name: my-agent
      description: Helps with specific tasks
      tools: ["bash", "edit", "view"]
      ---

      You are a specialized assistant that...
      ```

   1. Add a skill by creating a `skills/NAME` subdirectory of your plugin directory, where `NAME` is the name of your skill. Then, within this subdirectory, create a `SKILL.md` file that defines the skill.

      For example, to create a "deploy" skill, create `skills/deploy/SKILL.md`:

      ```markdown copy
      ---
      name: deploy
      description: Deploy the current project to...
      ---

      Instructions for the skill...
      ```

1. Install your plugin locally, so that you can test it as you develop it.

   For example, where `./my-plugin` is the path to your plugin directory, enter:

   ```shell copy
   copilot plugin install ./my-plugin
   ```

1. Verify that the plugin loaded successfully by viewing your list of installed plugins:

   ```shell copy
   copilot plugin list
   ```

   Or you can start a new interactive session and enter:

   ```copilot copy
   /plugin list
   ```

1. Verify that the agents, skills, hooks, and MCP server configurations you defined are loaded correctly.

   For example, in an interactive session, to check that custom agents defined in the plugin were loaded, enter:

   ```copilot copy
   /agent
   ```

   To check that skills defined in the plugin were loaded, enter:

   ```copilot copy
   /skills list
   ```

1. Use the functionality provided by your plugin's components to verify that each component works as expected.
1. Iterate on your plugin development, as required.

   > [!IMPORTANT]
   > When you install a plugin its components are cached and the CLI reads from the cache for subsequent sessions. To pick up changes made to a local plugin install it again:
   >
   > ```shell copy
   > copilot plugin install ./my-plugin
   > ```

1. After you have finished testing, you can uninstall the local version of your plugin by entering:

   ```shell copy
   copilot plugin uninstall NAME
   ```

   > [!NOTE]
   > To uninstall a plugin, use the name of the plugin as specified in the `name` field of the plugin's `plugin.json` manifest file, not the path to the plugin's directory.

## Distributing your plugin

To distribute your plugin, you can add it to a marketplace. See [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/plugins-marketplace).

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing)
* [AUTOTITLE](/copilot/reference/cli-plugin-reference)
