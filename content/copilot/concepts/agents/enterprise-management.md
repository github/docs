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

Enterprise administrators can use AI Controls to view active and recent agent sessions, track audit log events, and search agentic activity in your enterprise using filters. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/monitor-agentic-activity) and [AUTOTITLE](/copilot/reference/agent-session-filters).

For billing information on agent sessions, see [AUTOTITLE](/billing/concepts/product-billing/github-copilot-premium-requests#usage-by-copilot-cloud-agent).

## Third-party agents

Third-party agents, or partner agents, such as Claude and Codex work alongside {% data variables.copilot.copilot_cloud_agent %} to complete development tasks asynchronously on {% data variables.product.github %}. While they share the same security protections and mitigations as {% data variables.copilot.copilot_cloud_agent %}, their policies are managed separately. Disabling or restricting {% data variables.copilot.copilot_cloud_agent %} does not automatically disable third-party agents, and vice versa. Each agent type must be configured independently.

Enterprise administrators and AI managers can control the availability of third-party agents from the Agents page in the AI Controls view. These policies govern third-party agent usage on {% data variables.product.prodname_dotcom_the_website %}.

For more information about available third-party agents, see [AUTOTITLE](/copilot/concepts/agents/about-third-party-agents).

## Local agents

Agents running in {% data variables.product.prodname_vscode %} are not managed through {% data variables.product.github %} at all. Instead, they are an IDE feature with their own configuration.

For more information, see [Types of agents](https://code.visualstudio.com/docs/copilot/agents/overview#_types-of-agents) and [Enable or disable the use of agents](https://code.visualstudio.com/docs/enterprise/ai-settings#_enable-or-disable-the-use-of-agents) in the {% data variables.product.prodname_vscode %} documentation.

## MCP servers

Model Context Protocol (MCP) servers give agents access to external tools and data sources. Enterprise owners can control how MCP servers are discovered and used across the enterprise through a dedicated set of MCP policies in the AI Controls view.

To help you meet security and compliance requirements, you can choose to:
* Allow or block MCP server usage entirely
* Control which external tools are available to agents using an MCP registry (catalogs of approved MCP servers that your developers can discover and use)

Private MCP registries apply to {% data variables.copilot.copilot_cli_short %} and IDEs, but not to cloud agents that run on {% data variables.product.github %}. For {% data variables.copilot.copilot_cloud_agent %}, MCP servers can be configured at the repository level or in custom agent profiles defined at the enterprise level.

For more information, see [AUTOTITLE](/copilot/concepts/mcp-management).

## Agent mode in the IDE

Enterprise and organization owners can separately control whether their users have access to agent mode in IDE chat, independently from the "Chat in IDE" policy. This gives you finer-grained control over agentic capabilities in your developers' IDEs.

