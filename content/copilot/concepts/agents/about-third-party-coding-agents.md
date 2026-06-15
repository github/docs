---
title: About third-party coding agents
allowTitleToDifferFromFilename: true
shortTitle: Third-party coding agents
intro: 'You can use third-party coding agents alongside {% data variables.copilot.copilot_cloud_agent %} to work asynchronously on your development tasks on {% data variables.product.github %}.'
product: '{% data reusables.copilot.plans.permission-paid-plans-no-purchase-link %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: concepts
redirect_from:
  - /copilot/concepts/agents/about-third-party-agents
---

> [!NOTE] Third-party coding agents are currently in {% data variables.release-phases.public_preview %}.

## Introduction

You can use third-party coding agents alongside {% data variables.copilot.copilot_cloud_agent %} to work asynchronously on your development tasks. You can assign an existing issue or give a prompt to an agent, which will work on the required changes and create a pull request. When the agent finishes, it will request a review from you, and you can leave pull request comments to ask the agent to iterate.

Coding agents are subject to the same security protections, mitigations, and limitations as {% data variables.copilot.copilot_cloud_agent %}. To learn more about how you can use coding agents, see [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-cloud-agent).

### Where you can use coding agents

You can kick off tasks with coding agents in the following locations:

* **The Agents tab**: Select an agent under the prompt box in the [Agents tab](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text&utm_source=docs-3p-agents-tab-cta&utm_medium=docs&utm_campaign=agent-3p-platform-feb-2026), then kick off a new task and watch the agent get to work on a pull request.
* **Issues**: Assign the agent to an existing issue in a repository.
* **Pull requests**: Mention `@AGENT_NAME` in a comment on an existing pull request to ask it to make changes.
* On [**{% data variables.product.prodname_mobile %}**](/copilot/how-tos/chat-with-copilot/chat-in-mobile): From the **Home** view, click {% octicon "plus" aria-hidden="true" aria-label="plus" %} to start a new agent session.
* In [**{% data variables.product.prodname_vscode %}**](https://code.visualstudio.com/docs/copilot/agents/overview#_create-an-agent-session): Start a new session in the chat view, or delegate an existing session to a different agent.

### Making coding agents available

Before you can assign tasks to coding agents on {% data variables.product.github %}, they must be enabled in your account policies.

* For **{% data variables.copilot.copilot_pro %}, {% data variables.copilot.copilot_pro_plus %}, and {% data variables.copilot.copilot_max %} subscribers**, see [AUTOTITLE](/copilot/how-tos/manage-your-account/manage-policies#enabling-or-disabling-third-party-agents-in-your-repositories).
* For **{% data variables.copilot.copilot_for_business %} and {% data variables.copilot.copilot_enterprise %} subscribers**, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies) or [AUTOTITLE](/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies).

These policies do not apply to **local** agents in {% data variables.product.prodname_vscode %}. To configure agent settings in {% data variables.product.prodname_vscode %}, see [Types of agents](https://code.visualstudio.com/docs/copilot/agents/overview#_types-of-agents) in the {% data variables.product.prodname_vscode %} documentation. To adjust enterprise agent settings in {% data variables.product.prodname_vscode %}, see [Enable or disable the use of agents](https://code.visualstudio.com/docs/enterprise/ai-settings#_enable-or-disable-the-use-of-agents) in the {% data variables.product.prodname_vscode %} documentation.

## Supported coding agents

The following third-party agents are supported on {% data variables.product.github %}:

* [{% data variables.product.prodname_anthropic_claude %}](/copilot/concepts/agents/anthropic-claude)
* [{% data variables.product.prodname_openai_codex %}](/copilot/concepts/agents/openai-codex)

## AI models for third-party agents

When starting a task with a third-party agent, you can select the AI model used by the agent. You may find that different models perform better, or provide more useful responses, depending on the type of task. For help deciding which model to use, see [AUTOTITLE](/copilot/reference/ai-models/model-comparison).

You can also select **Auto**, which allows {% data variables.copilot.copilot_auto_model_selection %} to choose the best available model on your behalf. See [AUTOTITLE](/copilot/concepts/auto-model-selection).

The following models are available for each agent:

### {% data variables.product.prodname_openai_codex %}

* Auto
{% data reusables.copilot.openai-codex-agent-models %}

### {% data variables.product.prodname_anthropic_claude %}

* Auto
{% data reusables.copilot.anthropic-claude-agent-models %}

## Security validation

When a third-party coding agent creates or modifies code, {% data variables.product.github %} automatically scans the generated code for security issues and attempts to resolve them before the pull request is finalized. This reduces the likelihood of the agent introducing problems such as hardcoded secrets, insecure dependencies, and other vulnerabilities.

The following tools and processes scan for security issues:

* **{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}** identifies code security issues.
* **{% data variables.product.prodname_secret_scanning_caps %}** detects sensitive information such as API keys, tokens, and other secrets.
* Newly introduced dependencies are checked against the **{% data variables.product.prodname_advisory_database %}** for malware advisories and CVSS-rated High or Critical vulnerabilities.

Security validation does not require a {% data variables.product.prodname_GHAS %} license.

## Usage costs

Coding agents consume **{% data variables.product.prodname_actions %} minutes** and **{% data variables.product.prodname_ai_credits_short %}**. Each agent session consumes {% data variables.product.prodname_ai_credits_short %} based on the model used and the number of tokens processed.

Within your included {% data variables.product.prodname_actions %} minutes and {% data variables.product.prodname_ai_credits_short %}, you can use agents without incurring additional costs. See [AUTOTITLE](/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises).

## Partner agents

When enabling partner agents in your user or organization {% data variables.copilot.copilot_cloud_agent %} settings, a {% data variables.product.prodname_github_app %} will be installed for the corresponding agent.

* **Allow Claude coding agent** will install `anthropic code agent`
* **Allow Codex coding agent** will install `openai code agent`

Actions taken by these {% data variables.product.prodname_github_apps %} will be visible in your audit log, but the {% data variables.product.prodname_github_apps %} themselves will not be visible in your account's list of {% data variables.product.prodname_github_app %} installations.

## Next steps

* To start managing agents, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/manage-agents).
* To learn how AI models are hosted and served, see [AUTOTITLE](/copilot/reference/ai-models/model-hosting).
