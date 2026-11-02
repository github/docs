---
title: Adding LLM models to the GitHub Copilot app
shortTitle: Add LLM models
intro: 'Connect a model from an external provider of your choice, hosted locally or in the cloud.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.github-app %}<br>{% data reusables.copilot.github-app-download-button %}'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
  - Configure Copilot
redirect_from:
  - /copilot/how-tos/github-copilot-app/use-byok-models
---

> [!NOTE]
> Support to use your own model provider in the {% data variables.copilot.github_copilot_app %} is in {% data variables.release-phases.public_preview %} and subject to change.

You can configure the {% data variables.copilot.github_copilot_app %} to include models from an LLM provider of your choice—using Bring Your Own Key (BYOK)—in addition to the {% data variables.product.github %}-provided models. You can set up your model provider when you first open the app or later in app settings.

Windows users with an NVIDIA GPU and sufficient memory can install the {% data variables.copilot.mai_code_1_1_flash %} and {% data variables.copilot.flint_nvfp4_gguf %} models locally on their device, directly from within the {% data variables.copilot.github_copilot_app %}.

You must sign in with a {% data variables.product.github %} account to use the app, but you do not need a {% data variables.product.prodname_copilot_short %} plan if you use your own model provider. If you do have a {% data variables.product.prodname_copilot_short %} plan, you can use models from your own model provider and {% data variables.product.github %}-provided models in the same app.

> [!NOTE]
> {% data reusables.copilot.setup-custom-models %}

## Adding models using BYOK

You can use the BYOK method to add models to the {% data variables.copilot.github_copilot_app %}.

### Supported providers

The {% data variables.copilot.github_copilot_app %} supports these BYOK model providers:

* OpenAI
* Azure OpenAI
* Microsoft Foundry
* Anthropic
* Ollama
* Foundry Local
* LM Studio
* Any OpenAI-compatible HTTP endpoint

### Prerequisite

You must have an API key to add a model provider that requires authentication.

### Set up a model provider

If you are setting up the app for the first time and do not have a {% data variables.product.prodname_copilot_short %} plan, you can choose to set up your own model provider during onboarding.

To add or update a model provider later:

1. Click <span style="vertical-align: 2px">{% octicon "gear" aria-label="Settings" %}</span> to open the Settings dialog.
1. In the sidebar, click **Model providers**.
1. Click **Add provider**.
1. Select your provider.
1. Enter the provider details. This varies by provider but may include the display name, base URL, and API key.
1. Click **Add provider** to save the provider.

After you add a provider, its models appear in the model picker alongside {% data variables.product.github %}-hosted models. You can select the model and use it in a session. For more information, see [AUTOTITLE](/copilot/how-tos/github-copilot-app/agent-sessions).

Provider credentials are stored in the system credential store and are never displayed in the UI.

## Installing a local model from the model picker

> [!NOTE]
> {% data reusables.public-preview.public-preview %} You can disable this feature by going to the "Experimental" section of the app settings and, under "Agents", turning off the **Windows ML local models** option.
>
> To enable {% data variables.copilot.copilot_fusion_short %} to use local models, you must turn on the **Local model auto routing** option in the "Experimental" section of the app settings.

If you are using Windows and your computer meets the following prerequisites, you can download and install the following models locally on your device from within the app's settings:

* {% data variables.copilot.mai_code_1_1_flash %}
* {% data variables.copilot.flint_nvfp4_gguf %}

{% data reusables.copilot.local-model-prereqs %}

### Benefits of using {% data variables.copilot.mai_code_1_1_flash %} locally

{% data reusables.copilot.mai-local-benefits %}

### Installing llama.cpp for Windows

{% data reusables.copilot.llama-cpp-windows-install %}

### Installing a local model from within the {% data variables.copilot.github_copilot_app_short %}

1. Click <span style="vertical-align: 2px">{% octicon "gear" aria-label="Settings" %}</span> to open the Settings dialog.
1. In the sidebar, click **Model providers**.
1. Click **Add provider**.
1. Select **Windows ML**.

   If your local machine meets the prerequisites, the supported local models will be listed under "Available models."

1. Click **Download** for the model you want to install.
1. Use the **Maximum % system memory to use** slider to cap the amount of system memory that can be used by Windows ML models.
1. Turn on **Restart models on app restart** to automatically restart downloaded Windows ML models when you restart the {% data variables.copilot.github_copilot_app_short %}.
1. Alter the model-specific settings as required.

### Using a downloaded local model

After the download is complete, the local model will be available for use in your sessions.

You can either:

* Select it from the model picker, the same as any other available model. See [AUTOTITLE](/copilot/how-tos/github-copilot-app/choose-a-model).
* **{% data variables.copilot.mai_code_1_1_flash %} only:** Choose **{% data variables.copilot.copilot_fusion_short %}, then {% data variables.copilot.copilot_fusion_standard %}** effort level in the model picker, and {% data variables.product.prodname_copilot_short %} will automatically use this model when appropriate.
* Assign it to a {% data variables.copilot.copilot_custom_agent_short %} for focused tasks. You can then prompt {% data variables.product.prodname_copilot_short %} to use that custom agent for part of a task, while keeping your main session on a different model in the cloud. See [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/create-custom-agents-for-cli#delegating-focused-tasks-to-a-specific-model).

> [!IMPORTANT]
> {% data reusables.copilot.local-model-important %}
