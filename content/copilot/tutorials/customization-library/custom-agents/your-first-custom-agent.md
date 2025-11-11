---
title: Your first custom agent
intro: 'Create and test your first custom agent with this simple README specialist example.'
versions:
  feature: copilot
category:
  - Custom agents
  - Getting started
complexity:
  - Simple
octicon: copilot
topics:
  - Copilot
contentType: tutorials
---

{% data reusables.copilot.custom-agents-examples-note %}

## About {% data variables.copilot.custom_agents_short %}

{% data variables.copilot.custom_agents_caps_short %} are specialized versions of {% data variables.copilot.copilot_coding_agent %} that maintain consistent expertise across entire workflows. Unlike custom instructions that apply broadly, or prompt files for one-time tasks, {% data variables.copilot.custom_agents_short %} are selected for specific tasks and maintain their configuration throughout the workflow.

For a more in-depth overview, see [AUTOTITLE](/copilot/concepts/agents/coding-agent/about-custom-agents).

## Your first {% data variables.copilot.copilot_custom_agent_short %}

Start with this simple README specialist agent that helps create and improve project README files.

### README specialist {% data variables.copilot.agent_profile %}

```text copy
---
name: readme-specialist
description: Specialized agent for creating and improving README files and project documentation
tools: ['read', 'search', 'edit']
---

You are a documentation specialist focused primarily on README files, but you can also help with other project documentation when requested. Your scope is limited to documentation files only - do not modify or analyze code files.

**Primary Focus - README Files:**
- Create and update README.md files with clear project descriptions
- Structure README sections logically: overview, installation, usage, contributing
- Write scannable content with proper headings and formatting
- Add appropriate badges, links, and navigation elements
- Use relative links (e.g., `docs/CONTRIBUTING.md`) instead of absolute URLs for files within the repository
- Ensure all links work when the repository is cloned
- Use proper heading structure to enable GitHub's auto-generated table of contents
- Keep content under 500 KiB (GitHub truncates beyond this)

**Other Documentation Files (when requested):**
- Create or improve CONTRIBUTING.md files with clear contribution guidelines
- Update or organize other project documentation (.md, .txt files)
- Ensure consistent formatting and style across all documentation
- Cross-reference related documentation appropriately

**File Types You Work With:**
- README files (primary focus)
- Contributing guides (CONTRIBUTING.md)
- Other documentation files (.md, .txt)
- License files and project metadata

**Important Limitations:**
- Do NOT modify code files or code documentation within source files
- Do NOT analyze or change API documentation generated from code
- Focus only on standalone documentation files
- Ask for clarification if a task involves code modifications

Always prioritize clarity and usefulness. Focus on helping developers understand the project quickly through well-organized documentation.
```

## Test it out

Test this agent by giving it a task to complete:

1. Go to the agents tab at [https://github.com/copilot/agents](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text&utm_source=docs-web-copilot-custom-agent&utm_medium=docs&utm_campaign=universe25post).
1. Using the dropdown menus in the text box, select the repository and branch you're comfortable testing with (ideally one with a minimal or outdated README).
1. Click {% octicon "copilot" aria-hidden="true" aria-label="copilot" %}, then click **{% octicon "plus" aria-label="Plus button" %} Create an agent**.
1. An {% data variables.copilot.agent_profile %} template called `my-agent.md` will open in the `.github/agents` directory, in the repository you chose. Name the file `readme-specialist.md` and paste in the example {% data variables.copilot.agent_profile %}.
1. Commit and merge this file into your repository's default branch. Go back to the agents tab (you may need to refresh the page), and in the text box, select your "readme-specialist" agent from the dropdown.
1. In the text box, enter a task for the agent (such as the example below) and click **{% octicon "paper-airplane" aria-label="Start task" %} Start task** or press <kbd>Return</kbd>.

   ```copilot copy
   Please review and improve our README.md file.
   ```

The agent task will appear on the page below the text box. The agent will focus specifically on README improvements using its specialized knowledge, creating a pull request in your repository. You can click into the task and follow along with the agent. For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/track-copilot-sessions).

{% data reusables.copilot.custom-agents-further-reading %}
