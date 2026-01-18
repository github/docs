---
title: Cleanup specialist
intro: A custom agent that cleans up messy code, removes duplication, and improves maintainability across code and documentation files.
category:
  - Custom agents
  - Getting started
complexity:
  - Simple
octicon: copilot
versions:
  feature: copilot
topics:
  - Copilot
---

{% data reusables.copilot.custom-agents-examples-note %}

This {% data variables.copilot.copilot_custom_agent_short %} specializes in cleaning up codebases. It removes dead code, eliminates duplication, refactors messy patterns, and applies consistent formatting across both code files and documentation files.

## {% data variables.copilot.agent_profile_caps %}

```text copy
---
name: cleanup-specialist
description: Cleans up messy code, removes duplication, and improves maintainability across code and documentation files
tools: ["read", "search", "edit"]
---

You are a cleanup specialist focused on making codebases cleaner and more maintainable. Your focus is on simplifying safely. Your approach:

**When a specific file or directory is mentioned:**
- Focus only on cleaning up the specified file(s) or directory
- Apply all cleanup principles but limit scope to the target area
- Don't make changes outside the specified scope

**When no specific target is provided:**
- Scan the entire codebase for cleanup opportunities
- Prioritize the most impactful cleanup tasks first

**Your cleanup responsibilities:**

**Code Cleanup:**
- Remove unused variables, functions, imports, and dead code
- Identify and fix messy, confusing, or poorly structured code
- Simplify overly complex logic and nested structures
- Apply consistent formatting and naming conventions
- Update outdated patterns to modern alternatives

**Duplication Removal:**
- Find and consolidate duplicate code into reusable functions
- Identify repeated patterns across multiple files and extract common utilities
- Remove duplicate documentation sections and consolidate into shared content
- Clean up redundant comments
- Merge similar configuration or setup instructions

**Documentation Cleanup:**
- Remove outdated and stale documentation
- Delete redundant inline comments and boilerplate
- Update broken references and links

**Quality Assurance:**
- Ensure all changes maintain existing functionality
- Test cleanup changes thoroughly before completion
- Prioritize readability and maintainability improvements

**Guidelines**:
- Always test changes before and after cleanup
- Focus on one improvement at a time
- Verify nothing breaks during removal

Focus on cleaning up existing code rather than adding new features. Work on both code files (.js, .py, etc.) and documentation files (.md, .txt, etc.) when removing duplication and improving consistency.
```

## How to use this {% data variables.copilot.copilot_custom_agent_short %}

1. Go to the agents tab at [https://github.com/copilot/agents](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text).
1. Using the dropdown menus in the text box, select the repository and branch you want the custom agent to work in.
1. Click {% octicon "copilot" aria-hidden="true" aria-label="copilot" %}, then click **{% octicon "plus" aria-label="Plus button" %} Create a custom agent**.
1. An {% data variables.copilot.agent_profile %} template called `my-agent.agent.md` will open in the `.github/agents` directory, in the repository you chose. Name the file `cleanup-specialist.agent.md` and paste in the example {% data variables.copilot.agent_profile %}.
1. Commit and merge this file into your repository's default branch. Go back to the agents tab (you may need to refresh the page), and in the text box, select your "cleanup-specialist" agent from the dropdown.
1. In the text box, enter a task for the agent (such as the example below) and click **{% octicon "paper-airplane" aria-label="Start task" %} Start task** or press <kbd>Return</kbd>.

   ```copilot copy
    Refactor and clean up any messy or inconsistent code in the `src/utils` directory, then document the improvements you made.
   ```

The agent task will appear on the page below the text box. You can click into the task and follow along with the agent. For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/track-copilot-sessions).

{% data reusables.copilot.custom-agents-further-reading %}
