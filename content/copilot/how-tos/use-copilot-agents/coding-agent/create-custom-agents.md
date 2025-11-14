---
title: Creating custom agents
shortTitle: Create custom agents
intro: 'You can create specialized agents with tailored expertise for specific development tasks.'
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button&utm_source=docs-signup-custom-agents&utm_medium=docs&utm_campaign=universe25post" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
---

> [!NOTE]
> For a conceptual overview of {% data variables.copilot.custom_agents_short %}, see [AUTOTITLE](/copilot/concepts/agents/coding-agent/about-custom-agents).

## Creating a {% data variables.copilot.copilot_custom_agent_short %} profile for a repository

1. Navigate to the agents tab at [https://github.com/copilot/agents](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text&utm_source=docs-signup-custom-agents&utm_medium=docs&utm_campaign=universe25post).

1. Using the dropdown menu in the prompt box, select the repository you want to create the {% data variables.copilot.copilot_custom_agent_short %} profile in.

   > [!NOTE]
   > Organization and enterprise owners can create organization and enterprise-level {% data variables.copilot.custom_agents_short %} in a `.github-private` repository that are available across all repositories within their organization or enterprise. For more information, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/prepare-for-custom-agents) and [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/prepare-for-custom-agents).

1. Optionally, select the branch you want to create the {% data variables.copilot.agent_profile %} in. The default is the main branch.
1. Click {% octicon "copilot" aria-label="Select a custom agent" %}, then click **{% octicon "plus" aria-label="Plus button" %} Create an agent**. This will open a template agent profile called `my-agent.md` in the `.github/agents` directory of your target repository.
1. If you are creating an organization or enterprise-level custom agent, delete the `.github/` portion of the file path to move your template to the root `agents` directory.
1. Edit the filename and configure the {% data variables.copilot.agent_profile %}, including the name, description, tools, and prompts. For more information on what the {% data variables.copilot.agent_profile %} can include, see the section below.
1. Commit the file to the repository and merge it into the default branch. Go back to the agents tab and refresh the page if needed. Your custom agent will now appear in the dropdown when you click {% octicon "copilot" aria-hidden="true" aria-label="copilot" %} in the prompt box.

## Configuring an {% data variables.copilot.agent_profile %}

An {% data variables.copilot.agent_profile %} is a Markdown file with YAML frontmatter that specifies the {% data variables.copilot.copilot_custom_agent_short %}'s name, description, available tools, and MCP server configurations (for organization/enterprise level agents). Configuring an {% data variables.copilot.agent_profile %} involves defining the agent's identity, capabilities, tool access, and behavioral instructions.

For detailed configuration information about YAML properties, tools, MCP server setup, tool aliases, and how {% data variables.copilot.custom_agents_short %} are processed, see [AUTOTITLE](/copilot/reference/custom-agents-configuration).

To configure your {% data variables.copilot.agent_profile %}:

1. Choose a `name` for your {% data variables.copilot.copilot_custom_agent_short %}. Select a unique, descriptive name that identifies the agent's purpose.
1. Write a brief `description` explaining what your agent does and its specific capabilities or domain expertise.
1. In the `tools` property, define which tools the agent can use. This is a list of tool names or aliases, including tools from MCP servers configured in the repository settings or the {% data variables.copilot.agent_profile %} (for example, `tools: ["read", "edit", "search", "some-mcp-server/tool-1"]`). If you omit this property, the agent will have access to all available tools.
1. If creating an organization or enterprise level agent, you can use the `mcp-servers` property to optionally configure MCP servers that will be available only to this agent to extend its capabilities.
1. Write the agent's prompt. Define the agent's behavior, expertise, and instructions in the Markdown content below the YAML frontmatter.

## Example {% data variables.copilot.agent_profiles %}

{% data reusables.copilot.custom-agents-example-profiles %}

## Using {% data variables.copilot.custom_agents_short %}

Once you've created a {% data variables.copilot.copilot_custom_agent_short %}, you can use it wherever {% data variables.copilot.copilot_coding_agent %} is available.

* When prompting {% data variables.copilot.copilot_coding_agent %} with a task on {% data variables.product.prodname_dotcom_the_website %}, use the dropdown menu in the agents panel or agents tab to select your {% data variables.copilot.copilot_custom_agent_short %} instead of the default coding agent.
* When assigning {% data variables.copilot.copilot_coding_agent %} to an issue, you can select your {% data variables.copilot.copilot_custom_agent_short %} from the dropdown menu to handle the issue with your specialized configuration.
* When using the {% data variables.copilot.copilot_cli %}, you can choose to use a particular custom agent by using the `/agent` slash command or referencing the agent in a prompt or via a command-line argument. For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/use-copilot-cli#use-custom-agents).

When {% data variables.product.prodname_copilot_short %} opens pull requests, it will note which {% data variables.copilot.copilot_custom_agent_short %} was used to complete the work in the pull request description.

For more information on using {% data variables.copilot.copilot_coding_agent %}, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/create-a-pr).

### Using {% data variables.copilot.custom_agents_short %} as {% data variables.product.prodname_vscode_shortname %} chat modes

You can also use your custom {% data variables.copilot.agent_profiles %} directly in {% data variables.product.prodname_vscode %} as chat modes. In {% data variables.product.prodname_vscode_shortname %}, you switch between chat modes using the mode dropdown in the Chat view, allowing you to access specialized configurations for different tasks like planning, code editing, or research. For more information, see [Use chat modes in {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/copilot/customization/custom-chat-modes&utm_source=docs-vscode-custom-agents&utm_medium=docs&utm_campaign=universe25post).

Note that some properties may function differently between the {% data variables.product.prodname_dotcom_the_website %} and {% data variables.product.prodname_vscode_shortname %} environments. For more information, see [AUTOTITLE](/copilot/reference/custom-agents-configuration).

## Next steps

* For a hands-on tutorial to create your first {% data variables.copilot.copilot_custom_agent_short %}, see [AUTOTITLE](/copilot/tutorials/customization-library/custom-agents/your-first-custom-agent).
* For detailed configuration information, see [AUTOTITLE](/copilot/reference/custom-agents-configuration).
* For information on using coding agents, including your {% data variables.copilot.custom_agents_short %}, to create pull requests, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/create-a-pr).
