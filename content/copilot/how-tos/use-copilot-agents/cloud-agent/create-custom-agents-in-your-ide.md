---
title: Creating custom agents for {% data variables.copilot.copilot_cloud_agent %} in your IDE
shortTitle: Create custom agents in your IDE
intro: You can create specialized agents with tailored expertise for specific development tasks.
product: '{% data reusables.gated-features.copilot-cloud-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
category:
  - Configure Copilot
  - Author and optimize with Copilot
contentType: how-tos
---

{% data variables.copilot.custom_agents_caps_short %} allow you to tailor {% data variables.product.prodname_copilot_short %}'s expertise for specific tasks. For a conceptual overview of {% data variables.copilot.custom_agents_short %}, see [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-custom-agents).

{% data reusables.copilot.custom-agents-ide-preview %}

## Creating a {% data variables.copilot.copilot_custom_agent_short %} profile in {% data variables.product.prodname_vscode %}

1. Open {% data variables.copilot.copilot_chat %} in {% data variables.product.prodname_vscode %}.
1. From the agents dropdown at the bottom of the chat view, click **Configure Custom Agents...**, then click **{% octicon "plus" aria-label="Plus button" %} Create new {% data variables.copilot.copilot_custom_agent_short %}**.
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
   * You can use the **Customize Agent** button within the file editor to open a dialog, where you can select the AI model for the agent to use, select available tools (including built-in and MCP server tools), and configure the `handoffs` property for transitioning between {% data variables.copilot.custom_agents_short %}. Click **Apply** to add selected options to the {% data variables.copilot.agent_profile %}.

To update an {% data variables.copilot.agent_profile %}, from the agents dropdown, click the pencil icon next to the agent you want to modify.

## Configuring an {% data variables.copilot.agent_profile %}

{% data reusables.copilot.custom-agents-configuring-profile %}

## Example {% data variables.copilot.agent_profiles %}

{% data reusables.copilot.custom-agents-example-profiles %}

## Using {% data variables.copilot.custom_agents_short %}

{% data reusables.copilot.custom-agents-using %}

### Using {% data variables.copilot.custom_agents_short %} in your IDE

You can also use your custom {% data variables.copilot.agent_profiles %} directly in supported IDEs, including {% data variables.product.prodname_vscode %}, JetBrains IDEs, Eclipse, and Xcode. You can switch between {% data variables.copilot.custom_agents_short %} using the agent dropdown in the Chat window, allowing you to access specialized configurations for different tasks like planning, code editing, or research.

Note that some properties may function differently, or be ignored, between the {% data variables.product.prodname_dotcom_the_website %} and IDE environments. For more information on supported properties, see [AUTOTITLE](/copilot/reference/custom-agents-configuration#yaml-frontmatter-properties).

For more information on {% data variables.copilot.custom_agents_short %} in {% data variables.product.prodname_vscode_shortname %} specifically, see [{% data variables.copilot.custom_agents_caps_short %} in {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/copilot/customization/custom-agents) in the {% data variables.product.prodname_vscode_shortname %} documentation.

## Next steps

{% data reusables.copilot.custom-agents-next-steps %}
