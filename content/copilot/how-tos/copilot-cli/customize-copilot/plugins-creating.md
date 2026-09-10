---
title: Creating a plugin for {% data variables.copilot.copilot_cli %}
shortTitle: 'Plugins: Create a plugin'
allowTitleToDifferFromFilename: true
intro: 'Create a plugin to share customizations in an easy-to-install package.'
versions:
  feature: copilot
category:
  - Configure Copilot # Copilot discovery page
  - Author and optimize with Copilot # Copilot discovery page
  - Configure Copilot CLI # Copilot CLI bespoke page
contentType: how-tos
docsTeamMetrics:
  - copilot-cli
---

## Introduction

Plugins are packages that extend the functionality of {% data variables.copilot.copilot_cli_short %}. See [AUTOTITLE](/copilot/concepts/agents/about-plugins).

{% data reusables.copilot.copilot-cli.cli-help-note %}

## Plugin structure

A plugin consists of a directory with a specific structure and a `plugin.json` manifest file. Agent Plugins 1.0 requires the manifest at the plugin root. Legacy plugins support additional manifest locations. A plugin can also contain any combination of agents, skills, hooks, and MCP server configurations.

{% data variables.copilot.copilot_cli_short %} supports two plugin formats:

* Agent Plugins 1.0, a portable format for skills and MCP servers. Declaring the canonical `$schema` in `plugin.json` opts the plugin into this format.
* The legacy {% data variables.product.prodname_copilot_short %} format, which supports {% data variables.product.prodname_copilot_short %}-specific components and configurable component paths. A manifest without the Agent Plugins `$schema` continues to use this format.

Both formats are supported. Choose Agent Plugins 1.0 when you want to make skills and MCP servers portable across compatible clients. Choose the legacy format when you need custom component paths or are maintaining an existing {% data variables.product.prodname_copilot_short %}-specific plugin. In Agent Plugins 1.0, skills and MCP servers are portable, and {% data variables.product.prodname_copilot_short %}-specific components such as agents, commands, rules, hooks, and LSP servers come from the `com.github.copilot` directory in the plugin.

## Creating a plugin

1. Create a directory for your plugin.
1. Choose a plugin format, then add a `plugin.json` manifest file to the root of the directory.

   To create an Agent Plugins 1.0 plugin, include the canonical `$schema`:

   **Example Agent Plugins 1.0 `plugin.json` file**

   {% data reusables.copilot.copilot-cli.cli-example-plugin-file %}

   The schema allows only `$schema`, `name`, `version`, `description`, `author`, `homepage`, `repository`, `license`, `keywords`, and `extensions` as top-level fields. Unknown top-level fields are reported and ignored. The `extensions` field is a map of client-specific data keyed by reverse-domain namespace.

   To create a legacy plugin, omit the Agent Plugins `$schema`. You can use component path fields in the manifest:

   **Example legacy `plugin.json` file**

   ```json copy
   {
     "name": "my-dev-tools",
     "description": "React development utilities",
     "agents": "agents/",
     "skills": ["skills/", "extra-skills/"],
     "hooks": "hooks.json",
     "mcpServers": ".mcp.json"
   }
   ```

   For details of the full set of fields you can include in this file, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-plugin-reference#pluginjson).

1. Add components to your plugin.

   In an Agent Plugins 1.0 plugin, skills must be immediate subdirectories of `skills/`, and each skill must contain a `SKILL.md` file. MCP configuration must be in `mcp.json` at the plugin root. You cannot override these locations in `plugin.json`. {% data variables.product.prodname_copilot_short %}-specific components go in the `com.github.copilot` directory, such as `com.github.copilot/agents/` for custom agents and `com.github.copilot/hooks/hooks.json` for hooks.

   In a legacy plugin, use the default component locations or the component paths configured in `plugin.json`.

   For example:

   1. Add an agent by creating a `NAME.agent.md` file in an `agents` subdirectory. In an Agent Plugins 1.0 plugin, create the file in `com.github.copilot/agents/`. In a legacy plugin, create it in `agents/`.

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

   1. For an Agent Plugins 1.0 plugin, add MCP servers in a root `mcp.json` file. The MCP configuration uses its own Agent Plugins schema:

      ```json copy
      {
       "$schema": "https://agent-plugins.org/schemas/1.0.0/mcp.schema.json",
       "mcpServers": {
         "deployment-api": {
           "type": "streamable-http",
           "url": "https://deploy.example.com/mcp"
         },
         "local-validator": {
           "type": "stdio",
           "command": "node",
           "args": ["${PLUGIN_ROOT}/server/index.js"],
           "cwd": "${PLUGIN_ROOT}",
           "env": {
             "DATA_DIR": "${PLUGIN_DATA}/validator"
           }
         }
       }
      }
      ```

      The `streamable-http` transport name is accepted for Streamable HTTP servers. For `stdio` servers, {% data variables.copilot.copilot_cli_short %} provides `PLUGIN_ROOT` and `PLUGIN_DATA` environment variables and expands `${PLUGIN_ROOT}` and `${PLUGIN_DATA}` in `args`, `env` values, and `cwd`.

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

* [Agent Plugins author documentation](https://agent-plugins.org/plugin-authors)
* [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-plugin-reference)
