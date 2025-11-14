---
title: About custom agents
shortTitle: Custom agents
intro: '{% data variables.copilot.custom_agents_caps_short %} enhance {% data variables.copilot.copilot_coding_agent %} with specialized assistance tailored to your needs.'
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button&utm_source=docs-signup-custom-agents&utm_medium=docs&utm_campaign=universe25post" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
---

## About {% data variables.copilot.custom_agents_short %}

{% data variables.copilot.custom_agents_caps_short %} are specialized versions of {% data variables.copilot.copilot_coding_agent %} that you can tailor to your unique workflows, coding conventions, and use cases. Instead of repeatedly providing the same instructions and context, {% data variables.copilot.custom_agents_short %} allow you to define specialized agents that act like tailored teammates—following standards, using the right tools, and implementing team-specific practices.

{% data variables.copilot.custom_agents_caps_short %} are defined using Markdown files, called {% data variables.copilot.agent_profiles %}, that specify prompts, tools, and MCP servers. This allows individuals and teams to encode their conventions, frameworks, and desired outcomes directly into {% data variables.product.prodname_copilot_short %}. The {% data variables.copilot.agent_profile %} serves as the artifact that defines the custom agent's behavior, and assigning the agent to a task or issue instantiates the {% data variables.copilot.copilot_custom_agent_short %}.

## {% data variables.copilot.agent_profile_caps %} format

{% data variables.copilot.agent_profiles_caps %} are Markdown files with YAML frontmatter. In their simplest form, they include:

* **Name**: A unique identifier for the {% data variables.copilot.copilot_custom_agent_short %}
* **Description**: Explains the agent's purpose and capabilities
* **Prompt**: Custom instructions that define the agent's behavior and expertise
* **Tools**: Specific tools the agent can access. This is optional, and the default is access to all available tools, including built-in tools and MCP server tools.

Organization and enterprise-level {% data variables.copilot.agent_profiles %} can also include MCP server configurations within the {% data variables.copilot.agent_profile %}, using the `mcp-server` property.

### Example {% data variables.copilot.agent_profile %}

This is a basic {% data variables.copilot.agent_profile %} with name, description, and prompt configured.

```text
---
name: readme-creator
description: Agent specializing in creating and improving README files
---

You are a documentation specialist focused on README files. Your scope is limited to README  files or other related documentation files only - do not modify or analyze code files.

Focus on the following instructions:
- Create and update README.md files with clear project descriptions
- Structure README sections logically: overview, installation, usage, contributing
- Write scannable content with proper headings and formatting
- Add appropriate badges, links, and navigation elements
- Use relative links (e.g., `docs/CONTRIBUTING.md`) instead of absolute URLs for files within the repository
- Make links descriptive and add alt text to images
```

## Where you can configure {% data variables.copilot.custom_agents_short %}

You can define {% data variables.copilot.agent_profiles %} at the repository level (`.github/agents/CUSTOM-AGENT-NAME.md` in your repository) for project-specific agents, or at the organization or enterprise level (`/agents/CUSTOM-AGENT-NAME.md` in a `.github-private` repository) for broader availability. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/prepare-for-custom-agents) and [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/prepare-for-custom-agents).

## Where you can use {% data variables.copilot.custom_agents_short %}

Once created, your {% data variables.copilot.custom_agents_short %} are available wherever you can use {% data variables.copilot.copilot_coding_agent %}, including {% data variables.product.prodname_dotcom_the_website %} (the agents tab and panel, issue assignment, pull requests), the {% data variables.copilot.copilot_cli %}, and {% data variables.product.prodname_vscode %} (as chat modes). Each interaction maintains consistency based on the agent's defined profile, ensuring targeted support tailored to your specific needs.

{% data variables.copilot.agent_profiles_caps %} can be used directly in {% data variables.product.prodname_vscode %} as chat modes, though some properties may differ between the two environments. For more information on chat modes, see [Use chat modes in {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/copilot/customization/custom-chat-modes?utm_source=docs-vscode-custom-agents&utm_medium=docs&utm_campaign=universe25post).

## Next steps

To start creating your own {% data variables.copilot.custom_agents_short %}, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents).
