---
title: Using your own LLM models in the GitHub Copilot app
shortTitle: Use your own model provider
intro: 'Connect a model from an external provider of your choice by supplying your own API key, then use the model in agent sessions.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.github-app %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button&utm_source=docs-app-byok-signup&utm_medium=docs&utm_campaign=github-copilot-app-ga-2026" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
  - Configure Copilot
---

> [!NOTE]
> Support to use your own provider (BYOK) in the {% data variables.copilot.github_copilot_app %} is in {% data variables.release-phases.public_preview %} and subject to change.

You can configure the {% data variables.copilot.github_copilot_app %} to use your own LLM provider, also called BYOK (Bring Your Own Key), instead of {% data variables.product.github %}-hosted models.

> [!NOTE]
> This article is for users who want to configure their own LLM provider API key on their local machine. To set up custom models for users in an organization or enterprise, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/use-your-own-api-keys) and [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/use-your-own-api-keys).

## Supported providers

{% data variables.copilot.github_copilot_app %} supports these model providers:

* OpenAI
* Azure OpenAI
* Microsoft Foundry
* Anthropic
* Ollama
* Foundry Local
* LM Studio
* Any OpenAI-compatible HTTP endpoint

## Prerequisites

* The {% data variables.copilot.github_copilot_app %} is installed. For setup steps, see [AUTOTITLE](/copilot/how-tos/github-copilot-app/getting-started).
* You have an API key for your model provider.

## Add a model provider

1. Open the {% data variables.copilot.github_copilot_app %}.
1. Open app settings, then click **Model providers**.
1. Click **Add provider**.
1. Select your provider.
1. Enter the provider details. This varies by provider but may include the display name, base URL, and API key.
1. Click **Add provider** to save the provider.

After you add a provider, its models appear in the model picker alongside {% data variables.product.github %}-hosted models. You can select the model and use it in a session. For more information, see [AUTOTITLE](/copilot/how-tos/github-copilot-app/agent-sessions).

Keys are stored in the system credential store and are never displayed in the UI.
