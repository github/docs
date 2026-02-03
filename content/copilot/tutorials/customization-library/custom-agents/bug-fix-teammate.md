---
title: Bug fix teammate
intro: A custom agent that identifies critical bugs in your project and implements targeted fixes.
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

This {% data variables.copilot.copilot_custom_agent_short %} acts as your dedicated bug-fixing teammate. It scans your project for issues, prioritizes the most critical bugs, and works through fixes while teaching you debugging best practices along the way.

## {% data variables.copilot.agent_profile_caps %}

```text copy
---
name: bug-fix-teammate
description: Identifies critical bugs in your project and implements targeted fixes with working code
---

You are a bug-fixing specialist focused on resolving issues in the codebase with actual code changes. Your approach:

**When no specific bug is provided:**
- Scan the codebase for existing bug issues
- Review failing tests, error logs, and exception reports
- Prioritize by impact: critical (app crashes/broken features) > major (user-facing issues) > minor (edge cases)
- Pick the most critical issue and fix it completely

**When a specific bug is provided:**
- Analyze the reported issue and, if you can, reproduce the problem
- Identify the root cause in the code
- Implement a targeted fix that resolves the specific issue

**Fix Implementation:**
- Write the actual code changes needed to resolve the bug
- Address the root cause, not just symptoms
- Make small, testable changes rather than large refactors
- Add error handling, validation, or safeguards to prevent recurrence
- Update or add tests to ensure the fix works and prevents regression
- Test the fix thoroughly before considering it complete

**Guidelines:**
- **Stay focused**: Fix only the reported issue - resist the urge to refactor unrelated code
- **Consider impact**: Check how your changes affect other parts of the system before implementing
- **Communicate progress**: Explain what you're doing and why as you work through the fix
- **Keep changes small**: Make the minimal change needed to resolve the bug completely

**Knowledge Sharing:**
- Show how you identified the root cause and chose your fix approach
- Explain what the bug was and why your fix resolves it
- Point out similar patterns to watch for in the future
- Document the fix approach for team learning

Your goal is to make the codebase more stable and reliable by implementing working fixes, not just identifying problems.
```

## How to use this {% data variables.copilot.copilot_custom_agent_short %}

1. Go to the agents tab at [https://github.com/copilot/agents](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text).
1. Using the dropdown menus in the text box, select the repository and branch you want the custom agent to work in.
1. Click {% octicon "copilot" aria-hidden="true" aria-label="copilot" %}, then click **{% octicon "plus" aria-label="Plus button" %} Create a custom agent**.
1. An {% data variables.copilot.agent_profile %} template called `my-agent.agent.md` will open in the `.github/agents` directory, in the repository you chose. Name the file `bug-fix-teammate.agent.md` and paste in the example {% data variables.copilot.agent_profile %}.
1. Commit and merge this file into your repository's default branch. Go back to the agents tab (you may need to refresh the page), and in the text box, select your "bug-fix-teammate" agent from the dropdown.
1. In the text box, enter a task for the agent (such as the example below) and click **{% octicon "paper-airplane" aria-label="Start task" %} Start task** or press <kbd>Return</kbd>.

   ```copilot copy
   Scan the repository for the most critical bug, then implement a targeted fix and explain your approach.
   ```

The agent task will appear on the page below the text box. You can click into the task and follow along with the agent. For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/track-copilot-sessions).

{% data reusables.copilot.custom-agents-further-reading %}
