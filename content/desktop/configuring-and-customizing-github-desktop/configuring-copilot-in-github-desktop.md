---
title: Configuring Copilot in GitHub Desktop
intro: 'Choose which AI model {% data variables.copilot.copilot_desktop_short %} uses for each feature, or connect your own LLM provider.'
versions:
  feature: copilot
shortTitle: Configure Copilot
category:
  - Configure and customize GitHub Desktop
---

You can choose which model {% data variables.product.prodname_copilot_short %} uses for each {% data variables.product.prodname_desktop %} feature, such as commit message generation and conflict resolution.

You can also configure {% data variables.copilot.copilot_desktop_short %} to use your own LLM provider (BYOK) instead of {% data variables.product.github %}-hosted models. This lets you connect to OpenAI-compatible endpoints, Azure OpenAI, or Anthropic, including locally running models such as Ollama.

## Prerequisites

* You must be signed in to a {% data variables.product.github %} account with access to {% data variables.copilot.copilot_desktop_short %}.
* If your access is managed by an organization or enterprise, {% data variables.copilot.copilot_desktop_short %} must be enabled for your account.
* You have an API key or bearer token from a supported LLM provider, or you have a local model running, such as Ollama.
* You have the base URL and at least one model identifier for the provider you want to use.

> [!NOTE]
> Custom LLM providers in {% data variables.product.prodname_desktop %} require access to {% data variables.copilot.copilot_desktop_short %}. To use your own LLM models with {% data variables.copilot.copilot_cli_short %}, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/use-byok-models).

## Supported provider types

{% data variables.product.prodname_desktop %} supports three custom provider types:

| Provider type | Compatible services |
| --- | --- |
| **OpenAI / OpenAI-compatible** | OpenAI, Ollama, vLLM, Foundry Local, and any other endpoint that is compatible with the selected API format. |
| **Azure** | Azure OpenAI Service. |
| **Anthropic** | Anthropic Claude models. |

## Configuring your provider

You configure your model provider by adding a custom provider in {% data variables.product.prodname_desktop %} settings.

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}

1. In the left sidebar, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}**.

{% data reusables.desktop.configure-llm-provider %}

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}

1. In the left sidebar, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}**.

{% data reusables.desktop.configure-llm-provider %}

{% endwindows %}

## Adding models to your provider

Add the models you want to use from your provider. Each model you add appears in the model picker alongside {% data variables.product.github %}-hosted models.

1. In the **Add Custom Provider** or **Edit Custom Provider** dialog, under **Models**, click **Add Model**.
1. Under **Display Name**, type the friendly name shown in the {% data variables.product.prodname_copilot_short %} model picker.
1. Under **Model Identifier**, type the exact model name your provider expects.
1. Under **Reasoning Effort**, select the reasoning level for the model.

   For non-reasoning models, or to let the provider choose, leave **Default (provider's choice)** selected.
1. Click **Add**.

## Reviewing provider responsibilities

When you use your own LLM provider, {% data variables.product.prodname_desktop %} sends prompts and repository context to that provider instead of {% data variables.product.github %}. Check your provider's data handling and retention policies before adding credentials.

Always review generated commit messages and conflict-resolution suggestions before committing. For more information, see [AUTOTITLE](/copilot/responsible-use).

## Further reading

* [AUTOTITLE](/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop)
* [AUTOTITLE](/copilot/reference/ai-models/supported-models)
* [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/use-byok-models)
