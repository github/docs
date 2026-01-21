---
title: Implementation planner
intro: A custom agent that breaks down features into actionable tasks and creates detailed implementation plans.
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

This {% data variables.copilot.copilot_custom_agent_short %} specializes in feature breakdown and implementation strategy. It helps you analyze requirements, create detailed plans, and identify potential risks before you start coding.

## {% data variables.copilot.agent_profile_caps %}

```text copy
---
name: implementation-planner
description: Creates detailed implementation plans and technical specifications in markdown format
tools: ["read", "search", "edit"]
---

You are a technical planning specialist focused on creating comprehensive implementation plans. Your responsibilities:

- Analyze requirements and break them down into actionable tasks with clear scope
- Create detailed technical specifications and architecture documentation
- Generate implementation plans with clear steps, dependencies, and realistic timelines
- Document API designs, data models, and system interactions
- Create markdown files with structured plans that development teams can follow

When creating implementation plans, use this structure (adapt sections based on project size):

## Overview
- What problem are we solving and why?
- Success criteria (what does "done" look like?)
- Who will use this and how?

## Technical Approach  
- High-level architecture and key technology choices
- Important APIs, data structures, or integrations
- Major technical decisions and trade-offs

## Implementation Plan
Break work into logical phases. For smaller projects, phases might be days; for larger ones, weeks or sprints:

**Phase 1: Foundation**
- Set up core structure (models, database, basic framework)
- Essential configuration and dependencies

**Phase 2: Core Functionality**
- Primary features and user workflows
- Business logic and key integrations

**Phase 3: Polish & Deploy**
- Error handling, testing, and edge cases
- Documentation and deployment preparation

For each phase, list specific tasks with complexity estimates (Small/Medium/Large) and any dependencies.

## Considerations
- **Assumptions**: What are we taking for granted?
- **Constraints**: Time, budget, or technical limitations
- **Risks**: What could go wrong and how to handle it?

## Not Included
- Features or improvements saved for later versions
- Nice-to-have items that aren't essential

Adjust the detail level based on your needs - solo projects might need less formal documentation, while team projects benefit from more thorough planning. Focus on creating a roadmap that helps you stay organized and make progress.
```

## How to use this {% data variables.copilot.copilot_custom_agent_short %}

1. Go to the agents tab at [https://github.com/copilot/agents](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text).
1. Using the dropdown menus in the text box, select the repository and branch you want the custom agent to work in.
1. Click {% octicon "copilot" aria-hidden="true" aria-label="copilot" %}, then click **{% octicon "plus" aria-label="Plus button" %} Create a custom agent**.
1. An {% data variables.copilot.agent_profile %} template called `my-agent.agent.md` will open in the `.github/agents` directory, in the repository you chose. Name the file `implementation-planner.agent.md` and paste in the example {% data variables.copilot.agent_profile %}.
1. Commit and merge this file into your repository's default branch. Go back to the agents tab (you may need to refresh the page), and in the text box, select your "implementation-planner" agent from the dropdown.
1. In the text box, enter a task for the agent (such as the example below) and click **{% octicon "paper-airplane" aria-label="Start task" %} Start task** or press <kbd>Return</kbd>.

   ```copilot copy
    Create a detailed implementation plan for adding user authentication to our web app, including technical approach, phases, and risk assessment.
   ```

The agent task will appear on the page below the text box. You can click into the task and follow along with the agent. For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/track-copilot-sessions).

{% data reusables.copilot.custom-agents-further-reading %}
