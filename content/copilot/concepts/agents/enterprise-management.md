---
title: Agent management for enterprises
shortTitle: Enterprise management
intro: 'Maintain your enterprise''s security and compliance standards and supercharge your developers by managing agents with AI Controls.'
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot
---

## Overview

The AI Controls view provides a centralized platform where you can manage and monitor AI policies and agents across your enterprise. From the "Agents" page, you can:
* Manage the enterprise-level availability of agents like {% data variables.copilot.copilot_coding_agent %}, {% data variables.copilot.copilot_code-review_short %}, and {% data variables.copilot.copilot_custom_agents %}
* Control who can manage your enterprise-level {% data variables.copilot.custom_agents_short %}
* View and filter a list of agent sessions in your enterprise over the last 24 hours
* Find a detailed record of agentic audit log events

## {% data variables.copilot.copilot_custom_agents %}

{% data variables.copilot.copilot_custom_agents %} are specialized versions of {% data variables.copilot.copilot_coding_agent %} that you can configure with tailored prompts, tools, and context, making them excel at specific tasks. {% data variables.copilot.custom_agents_caps_short %} can be defined and managed at the enterprise level for greater control and compliance, or at the organization and repository levels to allow teams the flexibility to build for their specific needs.

You can manage your enterprise-level {% data variables.copilot.custom_agents_short %}:
* From the AI Controls view
* Using the REST API. See [AUTOTITLE](/rest/copilot/copilot-custom-agents).

For more detailed information on {% data variables.copilot.custom_agents_short %}, see [AUTOTITLE](/copilot/concepts/agents/coding-agent/about-custom-agents).

## Agent sessions

An agent session encompasses an entire interaction with {% data variables.copilot.copilot_coding_agent %}, or any individual {% data variables.copilot.copilot_custom_agent_short %}, on a specific task. These tasks include:

* Prompting the agent to create or edit a pull request
* Assigning the agent to an issue

For billing information on agent sessions, see [AUTOTITLE](/billing/concepts/product-billing/github-copilot-premium-requests#usage-by-copilot-coding-agent).

## Next steps

To get started with {% data variables.copilot.custom_agents_short %}, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/prepare-for-custom-agents).

## Further reading

* [AUTOTITLE](/copilot/concepts/agents/about-third-party-agents)
