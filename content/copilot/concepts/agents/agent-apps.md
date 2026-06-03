---
title: About agent apps
shortTitle: Agent apps
allowTitleToDifferFromFilename: true
intro: '{% data variables.copilot.agent_apps_caps %} let you use partner-built agents directly in your workflows on {% data variables.product.github %}, powered by your {% data variables.product.prodname_copilot_short %} subscription.'
product: '{% data reusables.copilot.plans.permission-paid-plans-no-purchase-link %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button&utm_source=docs-about-agent-apps&utm_medium=docs&utm_campaign=msbuild-2026" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: concepts
---

> [!NOTE] {% data reusables.copilot.agent-apps-preview %}

## Introduction

{% data reusables.copilot.agent-apps-intro %} {% data variables.copilot.agent_apps_caps %} are powered by {% data variables.copilot.copilot_cloud_agent %}. To learn more, see [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-cloud-agent).

For example, an {% data variables.copilot.agent_app %} could analyze your product analytics, scan your application for security vulnerabilities, or add feature flags to a pull request, then connect back to the partner's systems to complete the task.

## Where you can use {% data variables.copilot.agent_apps %}

{% data reusables.copilot.agent-apps-entrypoints %}

You can use these entry points in the same way as you use {% data variables.copilot.copilot_cloud_agent %} and other third-party coding agents. For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/use-agent-apps).

## How {% data variables.copilot.agent_apps %} work

An {% data variables.copilot.agent_app %} is a {% data variables.product.prodname_github_app %} that a partner has configured to act as an agent. Each {% data variables.copilot.agent_app %} can define a custom agent with its own prompt, model, tools, and Model Context Protocol (MCP) servers. To learn more about custom agents and MCP, see [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-custom-agents) and [AUTOTITLE](/copilot/concepts/agents/cloud-agent/mcp-and-cloud-agent).

{% data variables.copilot.agent_apps_caps %} can connect to the partner's own systems through MCP servers. These MCP servers authorize the {% data variables.copilot.agent_app %} using a JWT assertion issued by {% data variables.product.github %}, so the partner can securely identify your account and their {% data variables.copilot.agent_app %} without you managing additional credentials.

The first time you use an {% data variables.copilot.agent_app %}, you are asked to authorize the app through an OAuth flow before the agent runs. This lets the {% data variables.copilot.agent_app %} act on your behalf and access the partner's functionality. For more information about authorizing apps, see [AUTOTITLE](/apps/using-github-apps/authorizing-github-apps).

## Installing and enabling {% data variables.copilot.agent_apps %}

To use an {% data variables.copilot.agent_app %}, the {% data variables.product.prodname_github_app %} must be installed on your account or organization, and agent features must be enabled for the app. If the app is installed in an organization owned by an enterprise, the "{% data variables.copilot.agent_apps_caps %}" {% data variables.product.prodname_copilot_short %} policy must also be enabled in your enterprise {% data variables.product.prodname_copilot_short %} settings.

* When you install an {% data variables.copilot.agent_app %}, {% data variables.product.github %} highlights that the app includes agent features and asks you if you want to enable them. For more information, see [AUTOTITLE](/apps/using-github-apps/about-using-github-apps).
* If the app is installed in an organization owned by an enterprise, an administrator must also enable the "{% data variables.copilot.agent_apps %}" {% data variables.product.prodname_copilot_short %} policy before the agent features become available. For more information, see the "Next steps" section.

## Billing

{% data reusables.copilot.agent-apps-billing %}

## Next steps

* To learn about using an {% data variables.copilot.agent_app %}, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/use-agent-apps).
* To install an {% data variables.copilot.agent_app %} and opt in to its agent features, see [AUTOTITLE](/apps/using-github-apps/about-using-github-apps).
* To enable using {% data variables.copilot.agent_apps %} in an organization owned by an enterprise, an administrator must enable the "{% data variables.copilot.agent_apps %}" policy at the enterprise level before you can use it. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/enable-copilot-cloud-agent#enabling-agent-apps-and-third-party-agents).
