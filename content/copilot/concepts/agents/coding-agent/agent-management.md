---
title: About agent management
shortTitle: Agent management
intro: 'Use one centralized control page to jump between {% data variables.copilot.copilot_coding_agent %} sessions, check progress, and stay in control without losing your place.'
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button&utm_source=docs-signup-agent-management&utm_medium=docs&utm_campaign=universe25post" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/concepts/agents/coding-agent/managing-agents
contentType: concepts
---

## About agents

AI agents are autonomous systems that can evaluate their environment, make decisions, and take actions to complete tasks. Agents can break down complex tasks into steps, use various tools and resources, plan their approach, and adapt based on human feedback until they accomplish their assigned objective.

{% data variables.copilot.copilot_coding_agent %} brings automation and assistance to every stage of the software development process on {% data variables.product.github %}. You can run multiple sessions of {% data variables.copilot.copilot_coding_agent %} concurrently, allowing you to efficiently delegate work items. Utilizing {% data variables.copilot.custom_agents_short %} you can build out a team of task-specific agents with customized system prompts to handle simpler tasks like writing tests and refactoring, giving you bandwidth to prioritize problem-solving and collaboration. See [AUTOTITLE](/copilot/concepts/agents/coding-agent/about-custom-agents).

To learn more about {% data variables.copilot.copilot_coding_agent %}, see [AUTOTITLE](/copilot/concepts/agents/coding-agent/about-coding-agent).

## Managing agents

{% data reusables.copilot.coding-agent.agent-management-intro %}

From the Agents tab, you can:

* **Kick off new agent tasks**: Select any repository you have write access to, and optionally choose from {% data variables.copilot.custom_agents_short %} best suited for the task. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/create-a-pr).
* **Review the live session log, diff, and overview of changes**: Once {% data variables.product.prodname_copilot_short %} starts working, you can open the agent session to monitor agent activity.
* **Steer agents mid-session**: If you realize you didn't scope a request correctly, or want {% data variables.product.prodname_copilot_short %} to use a specific tool or service, you can step in and provide **steering input** without stopping the run. Steering uses **one premium request** per message. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/track-copilot-sessions#steering-a-copilot-session-from-the-agents-tab).
* **Open a session in {% data variables.product.prodname_vscode_shortname %}**: When you want to start working on changes to an agent session in your local development environment, click the "Open in {% data variables.product.prodname_vscode_shortname %} Insiders" button to open the session in {% data variables.product.prodname_vscode_shortname %}.
    {% data reusables.copilot.coding-agent.use-latest-vscode %}
* **Review and merge agent code**: Once {% data variables.product.prodname_copilot_short %} completes a session, you can read a summary of the changes it made and scan the diff of the pull request to see if you want to request further improvements. If the changes look ready for a final review, you can jump right into the pull request from the agent session view to approve and merge. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/review-copilot-prs).

## Next steps

To start managing agents, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/manage-agents).
