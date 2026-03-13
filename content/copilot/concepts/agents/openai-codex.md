---
title: OpenAI Codex
shortTitle: OpenAI Codex
allowTitleToDifferFromFilename: true
intro: 'Use the {% data variables.product.prodname_openai_codex %} coding agent and Visual Studio Code extension powered by {% data variables.product.prodname_copilot_short %}.'
product: '{% data reusables.gated-features.openai-codex %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_plan=pro-plus&ref_type=purchase&ref_style=button&utm_source=docs-web-3p-agents-codex&utm_medium=docs&utm_campaign=agent-3p-platform-feb-2026" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
contentType: concepts
category:
  - Learn about Copilot
---

> [!NOTE] {% data variables.product.prodname_openai_codex %} integration is currently in {% data variables.release-phases.public_preview %}.

## Introduction

The {% data variables.product.prodname_openai_codex %} coding agent and the {% data variables.product.prodname_vscode_shortname %} {% data variables.product.prodname_openai_codex %} integration use the Codex SDK and can be powered by your existing {% data variables.product.prodname_copilot_short %} subscription. For more information about how {% data variables.product.prodname_openai_codex %} works, see the [{% data variables.product.prodname_openai_codex %} documentation](https://developers.openai.com/codex).

## {% data variables.product.prodname_openai_codex %} coding agent

Before you can assign tasks to {% data variables.product.prodname_openai_codex %} coding agent, it must be enabled. See [AUTOTITLE](/copilot/how-tos/manage-your-account/manage-policies#enabling-or-disabling-third-party-agents-in-your-repositories). 

To learn more about using third-party agents on {% data variables.product.github %}, see [AUTOTITLE](/free-pro-team@latest/copilot/concepts/agents/about-third-party-agents).

## {% data variables.product.prodname_vscode_shortname %} extension

 Use "Sign in with {% data variables.product.prodname_copilot_short %}" when launching the extension. {% data variables.product.prodname_copilot_short %} users can see this integration in the [Agent Sessions view](https://code.visualstudio.com/docs/copilot/chat/chat-sessions#_agent-sessions-view) in {% data variables.product.prodname_vscode_shortname %} Insiders along with progress on their running tasks. All usage is subject to {% data variables.product.github %} rate limits and billing. See [AUTOTITLE](/copilot/concepts/billing/copilot-requests#premium-features).

### Model availability

A subset of available models may only be available in the {% data variables.product.prodname_openai_codex %} extension. Model availability and visibility is not governed by {% data variables.product.prodname_copilot_short %} model configuration policies.
