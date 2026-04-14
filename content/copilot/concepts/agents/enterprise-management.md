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
* Manage the enterprise-level availability of agents like {% data variables.copilot.copilot_cloud_agent %}, {% data variables.copilot.copilot_code-review_short %}, and {% data variables.copilot.copilot_custom_agents %}
* Control who can manage your enterprise-level {% data variables.copilot.custom_agents_short %}
* View and filter a list of agent sessions in your enterprise over the last 24 hours
* Find a detailed record of agentic audit log events

## {% data variables.copilot.copilot_cloud_agent %}

{% data reusables.organizations.copilot-policy-ent-overrides-org %}

Enterprise owners and AI managers can control how {% data variables.copilot.copilot_cloud_agent %} is adopted across the enterprise by choosing one of four policy states. This allows you to pilot adoption progressively and manage risk.

If you choose the **Enabled for selected organizations** policy, you can select organizations individually or based on organization custom properties. This lets you define dynamic groups of organizations that align with your existing organizational structure—for example, by region, compliance tier, or department. You can manage this policy setting using the REST API endpoints or directly in the AI Controls page.  See [REST API endpoints for Copilot coding agent management](/rest/copilot/copilot-coding-agent-management#copilot-coding-agent-policy-states). Please note that using custom properties to enable CCA is evaluated once at the time of configuration. Organizations will not be automatically enabled or disabled for CCA if the custom property is added, removed, or modified later. 

## {% data variables.copilot.copilot_custom_agents %}

{% data variables.copilot.copilot_custom_agents %} are specialized versions of {% data variables.copilot.copilot_cloud_agent %} that you can configure with tailored prompts, tools, and context, making them excel at specific tasks. {% data variables.copilot.custom_agents_caps_short %} can be defined and managed at the enterprise level for greater control and compliance, or at the organization and repository levels to allow teams the flexibility to build for their specific needs. 

You can manage your enterprise-level {% data variables.copilot.custom_agents_short %}:
* From the AI Controls view
* Using the REST API. See [AUTOTITLE](/rest/copilot/copilot-custom-agents).

For more detailed information on {% data variables.copilot.custom_agents_short %}, see [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-custom-agents).

## Agent sessions

An agent session encompasses an entire interaction with {% data variables.copilot.copilot_cloud_agent %}, or any individual {% data variables.copilot.copilot_custom_agent_short %}, on a specific task. These tasks include:

* Prompting the agent to create or edit a pull request
* Assigning the agent to an issue

For billing information on agent sessions, see [AUTOTITLE](/billing/concepts/product-billing/github-copilot-premium-requests#usage-by-copilot-cloud-agent).

## Agent mode in the IDE

Enterprise and organization owners can separately control whether their users have access to agent mode in IDE chat, independently from the "Chat in IDE" policy. This gives you finer-grained control over agentic capabilities in your developers' IDEs.

To manage this policy, enable or disable **Copilot Agent Mode in IDE chat** in your AI Controls settings. For more information, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies).

## Next steps

To get started with {% data variables.copilot.custom_agents_short %}, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/prepare-for-custom-agents).

## Further reading

* [AUTOTITLE](/copilot/concepts/agents/about-third-party-agents)
