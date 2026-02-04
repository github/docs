---
title: About Copilot integrations
shortTitle: About Copilot integrations
intro: 'Integrate Copilot with other tools and platforms to streamline your workflow.'
versions:
  feature: copilot
topics:
  - Copilot  
product: '{% data reusables.gated-features.copilot-integrations %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
contentType: concepts
category:
  - Learn about Copilot
  - Integrate Copilot with your tools
---

## Overview

{% data variables.copilot.copilot_coding_agent %} can be integrated with various tools and platforms to enhance its functionality and streamline your development workflow. With integrations, you can trigger {% data variables.copilot.copilot_coding_agent %} from within your existing tools, providing the coding agent with the context it needs to assist you effectively.

For more information about {% data variables.copilot.copilot_coding_agent %}, see [AUTOTITLE](/copilot/concepts/agents/coding-agent/about-coding-agent).

## Supported integrations

Currently, {% data variables.copilot.copilot_coding_agent %} supports integrations with the following tools:

* **Microsoft Teams**: [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/integrate-coding-agent-with-teams) - Learn how to set up the Microsoft Teams integration to trigger {% data variables.copilot.copilot_coding_agent %} directly from your Teams channels.
* **Slack**: [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/integrate-coding-agent-with-slack) - Learn how to set up the Slack integration to trigger {% data variables.copilot.copilot_coding_agent %} directly from your Slack workspace.
* **Linear**: [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/integrate-coding-agent-with-linear) - Learn how to set up the Linear integration to trigger {% data variables.copilot.copilot_coding_agent %} directly from your Linear issues.
* **Azure Boards**: (currently in {% data variables.release-phases.private_preview %}).

## Benefits of integrations

Integrating {% data variables.copilot.copilot_coding_agent %} with your existing tools offers several benefits:

* **Seamless workflow**: Trigger {% data variables.copilot.copilot_coding_agent %} directly from the tools you already use, reducing context switching and improving productivity.
* **Context-aware assistance**: Provide {% data variables.copilot.copilot_coding_agent %} with the necessary context from your tools, enabling it to generate more relevant and accurate code suggestions.
* **Collaboration**: Facilitate collaboration among team members by allowing them to trigger {% data variables.copilot.copilot_coding_agent %} from shared platforms, ensuring everyone benefits from the agent's capabilities.

## Data usage

When you trigger {% data variables.copilot.copilot_coding_agent %} through an integration, the agent will capture the entire thread or issue to understand the context in order to assist you effectively. This context is stored in the pull request created by the agent.
