---
title: About custom agents
shortTitle: Custom agents
intro: '{% data variables.copilot.custom_agents_caps_short %} enhance {% data variables.copilot.copilot_coding_agent %} with assistance tailored to your needs.'
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
category:
  - Learn about Copilot
---

## About {% data variables.copilot.custom_agents_short %}

{% data variables.copilot.custom_agents_caps_short %} are specialized versions of {% data variables.copilot.copilot_coding_agent %} that you can tailor to your unique workflows, coding conventions, and use cases. They act like tailored teammates that follow your standards, use the right tools, and implement team-specific practices. You define these agents once instead of repeatedly providing the same instructions and context.

You define {% data variables.copilot.custom_agents_short %} using Markdown files called {% data variables.copilot.agent_profiles %}. These files specify prompts, tools, and MCP servers. This allows you to encode your conventions, frameworks, and desired outcomes directly into {% data variables.product.prodname_copilot_short %}.

The {% data variables.copilot.agent_profile %} defines the {% data variables.copilot.copilot_custom_agent_short %}'s behavior. When you assign the agent to a task or issue, it instantiates the {% data variables.copilot.copilot_custom_agent_short %}.

## {% data variables.copilot.agent_profile_caps %} format

{% data variables.copilot.agent_profiles_caps %} are Markdown files with YAML frontmatter. In their simplest form, they include:

* **Name**: A unique identifier for the {% data variables.copilot.copilot_custom_agent_short %}.
* **Description**: Explains the agent's purpose and capabilities.
* **Prompt**: Custom instructions that define the agent's behavior and expertise.
* **Tools** (optional): Specific tools the agent can access. By default, agents can access all available tools, including built-in tools and MCP server tools.

Organization and enterprise-level {% data variables.copilot.agent_profiles %} can also include MCP server configurations using the `mcp-server` property.

### Example {% data variables.copilot.agent_profile %}

This example is a basic {% data variables.copilot.agent_profile %} with name, description, and prompt configured.

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

You can define {% data variables.copilot.agent_profiles %} at different levels:

* **Repository level**: Create `.github/agents/CUSTOM-AGENT-NAME.md` in your repository for project-specific agents.
* **Organization or enterprise level**: Create `/agents/CUSTOM-AGENT-NAME.md` in a `.github-private` repository for broader availability.

For more information, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/prepare-for-custom-agents) and [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/prepare-for-custom-agents).

## Where you can use {% data variables.copilot.custom_agents_short %}

{% data reusables.copilot.custom-agents-ide-preview %}

Once you create {% data variables.copilot.custom_agents_short %}, you can use them wherever {% data variables.copilot.copilot_coding_agent %} is available:

* {% data variables.product.prodname_dotcom_the_website %}: The agents tab and panel, issue assignment, and pull requests
* {% data variables.copilot.copilot_cli %}
* IDEs: {% data variables.product.prodname_vscode %}, JetBrains IDEs, Eclipse, and Xcode

You can use {% data variables.copilot.agent_profiles %} directly in {% data variables.product.prodname_vscode %}, JetBrains IDEs, Eclipse, and Xcode. Some properties may function differently or be ignored between environments. 

For more information on using {% data variables.copilot.custom_agents_short %} in {% data variables.product.prodname_vscode %}, see [{% data variables.copilot.custom_agents_caps_short %} in {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/copilot/customization/custom-agents).

## Next steps

To create your own {% data variables.copilot.custom_agents_short %}, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents).
