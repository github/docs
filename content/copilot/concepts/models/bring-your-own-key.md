---
title: Bring your own key for GitHub Copilot
shortTitle: Bring your own key
intro: 'Use your existing LLM provider with {% data variables.product.prodname_copilot %} to save costs or consolidate billing.'
versions:
  feature: copilot
contentType: concepts
---

{% data reusables.copilot.byok-two-mechanisms %}

## Local BYOK

Various {% data variables.product.prodname_copilot_short %} clients allow users to configure custom LLM keys locally.

These keys are only handled client-side: they are stored locally and the associated models aren't available to other users. This mechanism removes dependency on {% data variables.product.github %}'s {% data variables.product.prodname_copilot_short %} API, making it suitable for air-gapped environments or users without {% data variables.product.prodname_copilot_short %} subscriptions.

Local BYOK is available in the following clients.

| Client | More information |
| --- | --- |
| {% data variables.product.prodname_vscode_shortname %} | [Add a model from a built in provider](https://code.visualstudio.com/docs/agent-customization/language-models#_add-a-model-from-a-built-in-provider) in the {% data variables.product.prodname_vscode_shortname %} documentation |
| JetBrains | [Bring your own key (BYOK) support for JetBrains IDEs and Xcode](https://github.blog/changelog/2025-09-11-bring-your-own-key-byok-support-for-jetbrains-ides-and-xcode-in-public-preview/#try-it-out) on {% data variables.product.prodname_blog %} |
| Xcode | [Bring your own key (BYOK) support for JetBrains IDEs and Xcode](https://github.blog/changelog/2025-09-11-bring-your-own-key-byok-support-for-jetbrains-ides-and-xcode-in-public-preview/#try-it-out) on {% data variables.product.prodname_blog %} |
| {% data variables.copilot.copilot_cli_short %} | [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/use-byok-models) |
| {% data variables.copilot.github_copilot_app %} | [AUTOTITLE](/copilot/how-tos/github-copilot-app/use-byok-models) |
| {% data variables.copilot.copilot_sdk_short %} | [AUTOTITLE](/copilot/how-tos/copilot-sdk/auth/byok) |

For users on a {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %} plan, the ability to use local BYOK in IDEs can be disabled by an enterprise or organization policy.

## Enterprise BYOK

>[!NOTE]
>{% data reusables.copilot.byok-preview-note %}

Enterprise owners can add keys for custom models in their enterprise settings. They can also allow organization owners to do the same in their organization settings, by enabling the **Enable custom models** policy.

Custom models are available in {% data variables.copilot.copilot_byok_supported_features %}, and apply to users on the enterprise's {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %} plan. Users can select them in the same way they would select a {% data variables.product.github %}-hosted model.

Enterprise BYOK is handled server-side and affects the models served to users by the {% data variables.product.prodname_copilot_short %} API. Users must have a {% data variables.product.prodname_copilot_short %} license and internet access to use the custom models.

For more information, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/enable-custom-models).
