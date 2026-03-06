---
title: Invoking custom agents 
shortTitle: Invoke custom agents
intro: Use custom agents, skills, and MCP servers in {% data variables.copilot.copilot_cli_short %} to extend its capabilities.
product: '{% data reusables.gated-features.copilot-cli %}'
versions:
  feature: copilot
contentType: how-tos
category:
  - Build with Copilot CLI
---

## Use {% data variables.copilot.custom_agents_short %}

A {% data variables.copilot.copilot_custom_agent_short %} is a specialized version of {% data variables.product.prodname_copilot_short %}. {% data variables.copilot.custom_agents_caps_short %} help {% data variables.product.prodname_copilot_short %} handle unique workflows, particular coding conventions, and specialist use cases.

{% data variables.copilot.copilot_cli_short %} includes a default group of {% data variables.copilot.custom_agents_short %} for common tasks:

<table>
  <thead>
    <tr>
      <th style="width:20%">Agent</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Explore</td>
      <td>Performs quick codebase analysis, allowing you to ask questions about your code without adding to your main context.</td>
    </tr>
    <tr>
      <td>Task</td>
      <td>Executes commands such as tests and builds, providing brief summaries on success and full output on failure.</td>
    </tr>
    <tr>
      <td>General-purpose</td>
      <td>Handles complex, multi-step tasks that require the full toolset and high-quality reasoning, running in a separate context to keep your main conversation clearly focused.</td>
    </tr>
    <tr>
      <td>Code-review</td>
      <td>Reviews changes with a focus on surfacing only genuine issues, minimizing noise.</td>
    </tr>
  </tbody>
</table>

The AI model being used by the CLI can choose to delegate a task to a subsidiary subagent process, that operates using a {% data variables.copilot.copilot_custom_agent_short %} with specific expertise, if it judges that this would result in the work being completed more effectively. The model may equally choose to handle the work directly in the main agent.

You can define your own {% data variables.copilot.custom_agents_short %} using Markdown files, called {% data variables.copilot.agent_profiles %}, that specify what expertise the agent should have, what tools it can use, and any specific instructions for how it should respond.

You can define {% data variables.copilot.custom_agents_short %} at the user, repository, or organization/enterprise level:

| Type | Location | Scope |
| --- | --- | --- |
| User-level {% data variables.copilot.copilot_custom_agent_short %} | local `~/.copilot/agents` directory | All projects |
| Repository-level {% data variables.copilot.copilot_custom_agent_short %} | `.github/agents` directory in your local and remote repositories | Current project |
| Organization and Enterprise-level {% data variables.copilot.copilot_custom_agent_short %} | `/agents` directory in the `.github-private` repository in an organization or enterprise | All projects under your organization and enterprise account |

In the case of naming conflicts, a system-level agent overrides a repository-level agent, and the repository-level agent would override an organization-level agent.

{% data variables.copilot.custom_agents_caps_short %} can be used in three ways:

* Using the slash command in the CLI's interactive interface to select from the list of available {% data variables.copilot.custom_agents_short %}:

  ```shell
  /agent
  ```

* Calling out to the {% data variables.copilot.copilot_custom_agent_short %} directly in a prompt:

  ```shell
  Use the refactoring agent to refactor this code block
  ```

  {% data variables.product.prodname_copilot_short %} will automatically infer the agent you want to use.

* Specifying the {% data variables.copilot.copilot_custom_agent_short %} you want to use with the command-line option. For example:

  ```shell
  copilot --agent=refactor-agent --prompt "Refactor this code block"
  ```

For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents).

## Use skills

You can create skills to enhance the ability of {% data variables.product.prodname_copilot_short %} to perform specialized tasks with instructions, scripts, and resources.

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/create-skills).

## Add an MCP server

{% data variables.copilot.copilot_cli_short %} comes with the {% data variables.product.github %} MCP server already configured. This MCP server allows you to interact with resources on {% data variables.product.prodname_dotcom_the_website %}—for example, allowing you to merge pull requests from the CLI.

To extend the functionality available to you in {% data variables.copilot.copilot_cli_short %}, you can add more MCP servers:

1. Use the following slash command:

   ```shell
   /mcp add
   ```

1. Fill in the details for the MCP server you want to add, using the <kbd>Tab</kbd> key to move between fields.
1. Press <kbd>Ctrl</kbd>+<kbd>S</kbd> to save the details.

Details of your configured MCP servers are stored in the `mcp-config.json` file, which is located, by default, in the `~/.copilot` directory. This location can be changed by setting the `XDG_CONFIG_HOME` environment variable. For information about the JSON structure of a server definition, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/extend-coding-agent-with-mcp#writing-a-json-configuration-for-mcp-servers).

For more detailed information on adding and managing MCP servers in {% data variables.copilot.copilot_cli_short %}, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers).

## Next steps

To learn how to guide and refine agent behavior during task execution to keep work on track, see [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli-agents/steer-agents).
