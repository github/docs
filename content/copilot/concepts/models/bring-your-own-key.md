---
title: Bring your own key for GitHub Copilot
shortTitle: Bring your own key
intro: 'Use your existing LLM provider with {% data variables.product.prodname_copilot %} to save costs or consolidate billing.'
versions:
  feature: copilot
contentType: concepts
---

{% data reusables.copilot.byok-two-mechanisms %}

> [!NOTE]
> Alternatively, Windows users can add the {% data variables.copilot.mai_code_1_1_flash %} model to their local machine, directly from {% data variables.copilot.copilot_cli_short %}, the {% data variables.copilot.github_copilot_app_short %} or {% data variables.product.prodname_vscode %}, provided their computer meets the required system resources. {% data reusables.copilot.model-download-from-app %}

## BYOK configured by users

Supported {% data variables.product.prodname_copilot_short %} clients let you configure your own connection to a model provider. The client uses the credentials you supply to send model requests directly to that provider, rather than through {% data variables.product.github %}'s {% data variables.product.prodname_copilot_short %} API. You supply the provider credentials through the client rather than configuring them in {% data variables.product.github %}'s enterprise or organization settings. When you configure a model in this way it becomes available to you, but not to other {% data variables.product.prodname_copilot_short %} users.

You can use BYOK to add locally hosted or cloud-hosted models. Custom models you configure in this way are added alongside the {% data variables.product.github %}-provided models available to you. Adding custom models does not remove other models.

BYOK allows you to use models without a {% data variables.product.prodname_copilot_short %} subscription. However, a cloud-hosted service still requires internet access. To use a model in an air-gapped environment, the model endpoint must be reachable from the client within that environment.

You can configure your own model provider in the following clients.

| Client | More information |
| --- | --- |
| {% data variables.product.prodname_vscode_shortname %} | [Add a model from a built in provider](https://code.visualstudio.com/docs/agent-customization/language-models#_add-a-model-from-a-built-in-provider) in the {% data variables.product.prodname_vscode_shortname %} documentation |
| JetBrains | [Bring your own key (BYOK) support for JetBrains IDEs and Xcode](https://github.blog/changelog/2025-09-11-bring-your-own-key-byok-support-for-jetbrains-ides-and-xcode-in-public-preview/?utm_source=byok-docs-byok-public-preview-changelog&utm_medium=docs&utm_campaign=universe-2026#try-it-out) on {% data variables.product.prodname_blog %} |
| Xcode | [Bring your own key (BYOK) support for JetBrains IDEs and Xcode](https://github.blog/changelog/2025-09-11-bring-your-own-key-byok-support-for-jetbrains-ides-and-xcode-in-public-preview/#try-it-out) on {% data variables.product.prodname_blog %} |
| {% data variables.copilot.copilot_cli_short %} | [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/add-llm-models) |
| {% data variables.copilot.github_copilot_app %} | [AUTOTITLE](/copilot/how-tos/github-copilot-app/add-llm-models) |
| {% data variables.copilot.copilot_sdk_short %} | [AUTOTITLE](/copilot/how-tos/copilot-sdk/auth/byok) |

For users on a {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %} plan, the ability to configure your own model provider in IDEs can be disabled by an enterprise or organization policy.

## BYOK configured by an enterprise or organization

>[!NOTE]
>{% data reusables.copilot.byok-preview-note %}

Enterprise owners can configure custom models for users in their enterprise by adding provider keys in their enterprise settings. They can also allow organization owners to configure custom models in their organization settings by enabling the **Enable custom models** policy.

Custom models are available in {% data variables.copilot.copilot_byok_supported_features %}, and apply to users on the enterprise's {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %} plan. Users can select them in the same way they would select a {% data variables.product.github %}-hosted model.

Users access these models through {% data variables.product.github %}'s {% data variables.product.prodname_copilot_short %} API without configuring the provider's credentials themselves. Users must have a {% data variables.product.prodname_copilot_short %} license and internet access to use the custom models.

For more information, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/enable-custom-models).
