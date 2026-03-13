---
title: Creating custom agents
shortTitle: Create custom agents
intro: 'You can create specialized agents with tailored expertise for specific development tasks.'
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
category:
  - Configure Copilot
  - Author and optimize with Copilot
---

{% data variables.copilot.custom_agents_caps_short %} allow you to create specialized agents with tailored expertise for specific tasks. For a conceptual overview of {% data variables.copilot.custom_agents_short %}, see [AUTOTITLE](/copilot/concepts/agents/coding-agent/about-custom-agents).

{% data reusables.copilot.custom-agents-ide-preview %}

## Creating a {% data variables.copilot.copilot_custom_agent_short %} profile in a repository on {% data variables.product.github %}

1. Navigate to the agents tab at [https://github.com/copilot/agents](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text).

1. Using the dropdown menu in the prompt box, select the repository you want to create the {% data variables.copilot.copilot_custom_agent_short %} profile in.

   > [!NOTE]
   > Organization and enterprise owners can create organization and enterprise-level {% data variables.copilot.custom_agents_short %} in a `.github-private` repository that are available across all repositories within their organization or enterprise. For more information, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/prepare-for-custom-agents) and [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/prepare-for-custom-agents).

1. Optionally, select the branch you want to create the {% data variables.copilot.agent_profile %} in. The default is the main branch.
1. Click {% octicon "copilot" aria-label="Select a custom agent" %}, then click **{% octicon "plus" aria-label="Plus button" %} Create an agent**. This will open a template agent profile called `my-agent.agent.md` in the `.github/agents` directory of your target repository.
1. If you are creating an organization or enterprise-level {% data variables.copilot.copilot_custom_agent_short %}, delete the `.github/` portion of the file path to move your template to the root `agents` directory.
1. Edit the filename (the text before `.agent.md`), selecting a unique, descriptive name that identifies the agent's purpose. Note that the filename may only contain the following characters: `.`, `-`, `_`, `a-z`, `A-Z`, `0-9`. 
1. Configure the {% data variables.copilot.agent_profile %}, including the name, description, tools, and prompts. For more information on what the {% data variables.copilot.agent_profile %} can include, see [Configuring an {% data variables.copilot.agent_profile %}](#configuring-an-agent-profile).
1. Commit the file to the repository and merge it into the default branch. Go back to the agents tab and refresh the page if needed. Your {% data variables.copilot.copilot_custom_agent_short %} will now appear in the dropdown when you click {% octicon "copilot" aria-hidden="true" aria-label="copilot" %} in the prompt box.

## Creating a {% data variables.copilot.copilot_custom_agent_short %} profile in {% data variables.product.prodname_vscode %}

1. Open {% data variables.copilot.copilot_chat %} in {% data variables.product.prodname_vscode %}.
1. From the agents dropdown at the bottom of the chat view, click **Configure Custom Agents...**, then click **{% octicon "plus" aria-label="Plus button" %} Create new custom agent**.
1. Choose the location where the {% data variables.copilot.agent_profile %} should be created:
   * **Workspace**: Create the {% data variables.copilot.copilot_custom_agent_short %} profile in the `.github/agents` folder of your workspace to only use it within that workspace.
   * **User profile**: Create the {% data variables.copilot.copilot_custom_agent_short %} profile in the current user profile folder to use it across all your workspaces.
1. Enter a file name for the {% data variables.copilot.copilot_custom_agent_short %}. This is the default name that appears in the agents dropdown.
1. Configure the {% data variables.copilot.agent_profile %} in the newly created `.agent.md` file, including the description, tools, and prompts. For more information on what the {% data variables.copilot.agent_profile %} can include, see [Configuring an {% data variables.copilot.agent_profile %}](#configuring-an-agent-profile).
   * You can use the **Configure Tools...** button within the editor to open the "Configure Tools" dialog, where you can view and select available tools, including built-in tools and tools from MCP servers. Click **OK** to add selected tools to the {% data variables.copilot.agent_profile %}.
   * To set which AI model the agent uses, add a `model:` property and select your preferred model from the autocomplete dropdown.

To update an {% data variables.copilot.agent_profile %}, select **Configure Custom Agents** from the agents dropdown, and then click on an agent from the list to modify it. For more information on {% data variables.copilot.custom_agents_short %} in {% data variables.product.prodname_vscode_shortname %}, see [{% data variables.copilot.custom_agents_caps_short %} in {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/copilot/customization/custom-agents).

## Creating a {% data variables.copilot.copilot_custom_agent_short %} profile in JetBrains IDEs

1. Open the {% data variables.copilot.copilot_chat %} window in your JetBrains IDE.
1. From the agents dropdown at the bottom of the chat view, click **Configure Agents...**, then in the settings window, under "Chat Agents", click **Workspace**.
1. Enter a file name for the {% data variables.copilot.copilot_custom_agent_short %}. This is the default name that appears in the agents dropdown.
1. Configure the {% data variables.copilot.agent_profile %} in the newly created `.agent.md` file in the `.github/agents` directory, including the description, tools, and prompts. For more information on what the {% data variables.copilot.agent_profile %} can include, see [Configuring an {% data variables.copilot.agent_profile %}](#configuring-an-agent-profile).
   * You can use the **Configure Tools...** button within the editor to open the tools dialog, where you can view and select available tools, including built-in tools and tools from MCP servers. Click **Apply** to add selected tools to the {% data variables.copilot.agent_profile %}.
   * To set which AI model the agent uses, add a `model:` property and select your preferred model from the autocomplete dropdown.

To update an {% data variables.copilot.agent_profile %}, select **Configure Custom Agents** from the agents dropdown, and then click {% octicon "pencil" aria-label="The pencil icon" %} next to the agent you want to modify.

## Creating a {% data variables.copilot.copilot_custom_agent_short %} profile in Eclipse

1. Open the {% data variables.copilot.copilot_chat %} window in Eclipse.
1. From the agents dropdown at the bottom of the chat view, click **Configure Agents...**, then click **Add...**.
1. Enter a file name for the {% data variables.copilot.copilot_custom_agent_short %}. This is the default name that appears in the agents dropdown.
1. Configure the {% data variables.copilot.agent_profile %} in the newly created `.agent.md` file in the `.github/agents` directory, including the description, tools, and prompts. For more information on what the {% data variables.copilot.agent_profile %} can include, see [Configuring an {% data variables.copilot.agent_profile %}](#configuring-an-agent-profile).
   * You can use the **Configure Tools...** button within the editor to open the "Configure Tools" dialog, where you can view and select available tools, including built-in tools and tools from MCP servers. Click **Apply** to add selected tools to the {% data variables.copilot.agent_profile %}.
   * To set which AI model the agent uses, add a `model:` property and select your preferred model from the autocomplete dropdown.

To update an {% data variables.copilot.agent_profile %}, select **Configure Agents...** from the agents dropdown, and then select the agent you want to modify and click **Edit**.

## Creating a {% data variables.copilot.copilot_custom_agent_short %} profile in Xcode

1. Open the {% data variables.copilot.copilot_chat %} window in Xcode.
1. From the agents dropdown at the bottom of the chat view, click **{% octicon "plus" aria-label="Plus button" %} Create an agent**.
1. Enter a file name for the {% data variables.copilot.copilot_custom_agent_short %}. This is the default name that appears in the agents dropdown.
1. Configure the {% data variables.copilot.agent_profile %} in the newly created `.agent.md` file in the `.github/agents` directory, including the description, tools, and prompts. For more information on what the {% data variables.copilot.agent_profile %} can include, see [Configuring an {% data variables.copilot.agent_profile %}](#configuring-an-agent-profile).
   * You can use the **Customize Agent** button within the file editor to open a dialog, where you can select the AI model for the agent to use, select available tools (including built-in and MCP server tools), and configure the `handoffs` property for transitioning between custom agents. Click **Apply** to add selected options to the {% data variables.copilot.agent_profile %}.

To update an {% data variables.copilot.agent_profile %}, from the agents dropdown, click the pencil icon next to the agent you want to modify.

## Configuring an {% data variables.copilot.agent_profile %}

An {% data variables.copilot.agent_profile %} is a Markdown file with YAML frontmatter that specifies the {% data variables.copilot.copilot_custom_agent_short %}'s name, description, available tools, and MCP server configurations (for organization/enterprise level agents). Configuring an {% data variables.copilot.agent_profile %} involves defining the agent's identity, capabilities, tool access, and behavioral instructions.

For detailed configuration information about YAML properties, tools, MCP server setup, tool aliases, and how {% data variables.copilot.custom_agents_short %} are processed, see [AUTOTITLE](/copilot/reference/custom-agents-configuration).

To configure your {% data variables.copilot.agent_profile %}:

1. Optionally, write a `name` for your {% data variables.copilot.copilot_custom_agent_short %}. If unset, the name will default to the filename (without the `.md` or `.agent.md` suffix).
1. Write a brief `description` (required) explaining what your agent does and its specific capabilities or domain expertise.
1. In the `tools` property, define which tools the agent can use. This is a list of tool names or aliases, including tools from MCP servers configured in the repository settings or the {% data variables.copilot.agent_profile %} (for example, `tools: ["read", "edit", "search", "some-mcp-server/tool-1"]`). If you omit this property, the agent will have access to all available tools.
1. If creating an organization or enterprise level agent on {% data variables.product.github %}, you can use the `mcp-servers` property to optionally configure MCP servers that will be available only to this agent to extend its capabilities.
1. If you are creating and using the {% data variables.copilot.agent_profile %} in {% data variables.product.prodname_vscode_shortname %}, JetBrains IDEs, Eclipse, or Xcode, you can also use the `model` property to control which AI model the agent should use.
1. Optionally, set the `target` property to either `vscode` or `github-copilot` if you want to only use the agent in a specific environment. The agent will be available in both environments if you omit the property.
1. Write the agent's prompt. Define the agent's behavior, expertise, and instructions in the Markdown content below the YAML frontmatter. The prompt can be a maximum of 30,000 characters.

## Example {% data variables.copilot.agent_profiles %}

{% data reusables.copilot.custom-agents-example-profiles %}

## Using {% data variables.copilot.custom_agents_short %}

Once you've created a {% data variables.copilot.copilot_custom_agent_short %}, you can use it wherever {% data variables.copilot.copilot_coding_agent %} is available.

* When prompting {% data variables.copilot.copilot_coding_agent %} with a task on {% data variables.product.prodname_dotcom_the_website %}, use the dropdown menu in the agents panel or agents tab to select your {% data variables.copilot.copilot_custom_agent_short %} instead of the default coding agent.
* When assigning {% data variables.copilot.copilot_coding_agent %} to an issue, you can select your {% data variables.copilot.copilot_custom_agent_short %} from the dropdown menu to handle the issue with your specialized configuration.
* When using the {% data variables.copilot.copilot_cli %}, you can choose to use a particular {% data variables.copilot.copilot_custom_agent_short %} by using the `/agent` slash command or referencing the agent in a prompt or via a command-line argument. For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/use-copilot-cli#use-custom-agents).

When {% data variables.product.prodname_copilot_short %} opens pull requests, it will note which {% data variables.copilot.copilot_custom_agent_short %} was used to complete the work in the pull request description.

For more information on using {% data variables.copilot.copilot_coding_agent %}, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/create-a-pr).

### Using {% data variables.copilot.custom_agents_short %} in your IDE

You can also use your custom {% data variables.copilot.agent_profiles %} directly in supported IDEs, including {% data variables.product.prodname_vscode %}, JetBrains IDEs, Eclipse, and Xcode. You can switch between {% data variables.copilot.custom_agents_short %} using the agent dropdown in the Chat window, allowing you to access specialized configurations for different tasks like planning, code editing, or research.

Note that some properties may function differently, or be ignored, between the {% data variables.product.prodname_dotcom_the_website %} and IDE environments. For more information on supported properties, see [AUTOTITLE](/copilot/reference/custom-agents-configuration#yaml-frontmatter-properties).

For more information on {% data variables.copilot.custom_agents_short %} in {% data variables.product.prodname_vscode_shortname %} specifically, see [{% data variables.copilot.custom_agents_caps_short %} in {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/copilot/customization/custom-agents) in the {% data variables.product.prodname_vscode_shortname %} documentation.

## Next steps

* For a hands-on tutorial to create your first {% data variables.copilot.copilot_custom_agent_short %}, see [AUTOTITLE](/copilot/tutorials/customization-library/custom-agents/your-first-custom-agent).
* For detailed configuration information, see [AUTOTITLE](/copilot/reference/custom-agents-configuration).
* For information on using coding agents, including your {% data variables.copilot.custom_agents_short %}, to create pull requests, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/create-a-pr).
