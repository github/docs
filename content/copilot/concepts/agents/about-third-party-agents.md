---
title: About third-party agents
shortTitle: Third-party agents
intro: 'You can incorporate coding agents into your development workflows on {% data variables.product.github %}.'
product: '{% data reusables.gated-features.third-party-agents %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_plan=pro-plus&ref_type=engagement&ref_style=button&utm_source=docs-web-copilot-3p-agents&utm_medium=docs&utm_campaign=agent-3p-platform-feb-2026" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
contentType: concepts
---

> [!NOTE] Third-party coding agents are currently in {% data variables.release-phases.public_preview %}.

## Introduction

You can use third-party coding agents alongside {% data variables.copilot.copilot_coding_agent %} to work asynchronously on your development tasks. You can assign an existing issue or give a prompt to an agent, which will work on the required changes and create a pull request. When the agent finishes, it will request a review from you, and you can leave pull request comments to ask the agent to iterate.

Coding agents are subject to the same security protections, mitigations, and limitations as {% data variables.copilot.copilot_coding_agent %}. To learn more about how you can use coding agents, see [AUTOTITLE](/copilot/concepts/agents/coding-agent/about-coding-agent).

### Where you can use coding agents

You can kick off tasks with coding agents in the following locations:

* **The Agents tab**: Select an agent under the prompt box in the [Agents tab](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text&utm_source=docs-3p-agents-tab-cta&utm_medium=docs&utm_campaign=agent-3p-platform-feb-2026), then kick off a new task and watch the agent get to work on a pull request.
* **Issues**: Assign the agent to an existing issue in a repository.
* **Pull requests**: Mention `@AGENT_NAME` in a comment on an existing pull request to ask it to make changes.
* On [**{% data variables.product.prodname_mobile %}**](/copilot/how-tos/chat-with-copilot/chat-in-mobile): From the **Home** view, click {% octicon "plus" aria-hidden="true" aria-label="plus" %} to start a new agent session.
* In [**{% data variables.product.prodname_vscode %}**](https://code.visualstudio.com/docs/copilot/agents/overview#_create-an-agent-session): Start a new session in the chat view, or delegate an existing session to a different agent.

### Making coding agents available

> [!NOTE]
> * {% data reusables.gated-features.third-party-agents %}

Before you can assign tasks to coding agents, they must be enabled. If you are a {% data variables.copilot.copilot_pro_plus %} subscriber, see [AUTOTITLE](/copilot/how-tos/manage-your-account/manage-policies#enabling-or-disabling-third-party-agents-in-your-repositories).

For {% data variables.copilot.copilot_for_business %} and {% data variables.copilot.copilot_enterprise %} subscribers, the ability to use {% data variables.copilot.copilot_coding_agent %} is controlled by policy settings defined at the organization level. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies).

If the organization is owned by an enterprise, enablement may be controlled at the enterprise level. See [AUTOTITLE](/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies).

## Supported coding agents

The following third-party agents are supported on {% data variables.product.github %}:

* [{% data variables.product.prodname_anthropic_claude %}](/copilot/concepts/agents/anthropic-claude)
* [{% data variables.product.prodname_openai_codex %}](/copilot/concepts/agents/openai-codex)

## Usage costs

Coding agents consume **{% data variables.product.prodname_actions %} minutes** and **{% data variables.product.prodname_copilot %} premium requests**. Each agent **session** consumes one premium request.

Within your monthly usage allowance for {% data variables.product.prodname_actions %} and premium requests, you can ask agents to work on coding tasks without incurring any additional costs.

For more information, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-copilot/about-billing-for-github-copilot).

## Next steps

* To start managing agents, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/manage-agents).
* To learn how AI models are hosted and served, see [AUTOTITLE](/copilot/reference/ai-models/model-hosting).