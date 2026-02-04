---
title: About agent management
shortTitle: Agent management
intro: 'Use one centralized control page to jump between {% data variables.copilot.copilot_coding_agent %} sessions, check progress, and stay in control without losing your place.'
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/concepts/agents/coding-agent/managing-agents
contentType: concepts
category:
  - Learn about Copilot
  - Author and optimize with Copilot
---

## About agents

AI agents are autonomous systems that can evaluate their environment, make decisions, and take actions to complete tasks. Agents can break down complex tasks into steps, use various tools and resources, plan their approach, and adapt based on human feedback until they accomplish their assigned objective.

{% data variables.copilot.copilot_coding_agent %} brings automation and assistance to every stage of the software development process on {% data variables.product.github %}. You can run multiple sessions of {% data variables.copilot.copilot_coding_agent %} concurrently, allowing you to efficiently delegate work items. 

Utilizing {% data variables.copilot.custom_agents_short %} you can build out a team of task-specific agents with customized system prompts to handle simpler tasks like writing tests and refactoring, giving you bandwidth to prioritize problem-solving and collaboration. See [AUTOTITLE](/copilot/concepts/agents/coding-agent/about-custom-agents). 

Model choice allows you to choose from a selection of AI models to use with your agents, each with its own particular strengths. See [AUTOTITLE](/copilot/reference/ai-models/supported-models).

To learn more about {% data variables.copilot.copilot_coding_agent %}, see [AUTOTITLE](/copilot/concepts/agents/coding-agent/about-coding-agent).

## Managing agents

{% data reusables.copilot.coding-agent.agent-management-intro %}

From the Agents tab, you can:

* **Kick off new agent tasks**: Select an AI model of your choice, and optionally choose from {% data variables.copilot.custom_agents_short %} best suited for the task. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/create-a-pr).
* **Monitor live session logs**: Once {% data variables.product.prodname_copilot_short %} starts working, you can click any agent session to open the session log and follow its progress and thought process in real time.
* **Track active sessions**: You can view all active agent sessions that have been started in the repository.
* **Steer agents mid-session**: If you realize you didn't scope a request correctly, or want {% data variables.product.prodname_copilot_short %} to use a specific tool or service, you can step in and provide **steering input** without stopping the run. Steering uses **one premium request** per message. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/track-copilot-sessions#steering-a-copilot-session-from-the-agents-tab).
* **Open a session in {% data variables.product.prodname_vscode_shortname %} or {% data variables.copilot.copilot_cli %}**: When you want to start working on changes to an agent session in your local development environment, click **{% octicon "vscode" aria-label="VS Code" %} Open in {% data variables.product.prodname_vscode_shortname %}** or **{% octicon "agent" aria-label="Agent" %} Continue in {% data variables.copilot.copilot_cli %}** to bring the session to your local machine.
    {% data reusables.copilot.coding-agent.use-latest-vscode %}
* **Review and merge agent code**: Once {% data variables.product.prodname_copilot_short %} completes a session, you can jump to the pull request to review the changes, request further improvements, or approve and merge. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/review-copilot-prs).

## Next steps

To start managing agents, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/manage-agents).
