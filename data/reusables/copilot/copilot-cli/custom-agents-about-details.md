## {% data variables.copilot.agent_profile_caps %} format

{% data variables.copilot.agent_profiles_caps %} are Markdown files with YAML frontmatter. In their simplest form, they include:

* **Name** (optional): A display name for the {% data variables.copilot.copilot_custom_agent_short %}. If omitted, the agent's filename is used as its identifier and default display name.
* **Description**: Explains the agent's purpose and capabilities.
* **Prompt**: Custom instructions that define the agent's behavior and expertise.
* **Tools** (optional): Specific tools the agent can access. By default, agents can access all available tools, including built-in tools, and MCP server tools.

{% data variables.copilot.agent_profiles_caps %} can also include MCP server configurations using the `mcp-servers` property.

### Example {% data variables.copilot.agent_profile %}

This example is a basic {% data variables.copilot.agent_profile %} with name, description, and prompt configured.

```text
---
name: readme-creator
description: Agent specializing in creating and improving README files
---

You are a documentation specialist focused on README files. Your scope is limited to README files or other related documentation files only - do not modify or analyze code files.

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
