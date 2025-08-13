---
title: Configuring access to AI models in GitHub Copilot
shortTitle: Configure access to AI models
intro: 'Learn how to configure access to AI models in {% data variables.product.prodname_copilot_short %}.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/using-github-copilot/ai-models/configuring-access-to-ai-models-in-copilot
  - /copilot/how-tos/ai-models/configuring-access-to-ai-models-in-copilot
  - /copilot/how-tos/ai-models/configure-access-to-ai-models
contentType: how-tos
---

Your access to {% data variables.product.prodname_copilot %} models depends on:

* Your {% data variables.product.prodname_copilot_short %} plan.
* The client you're using (for example, {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_vscode %}, or JetBrains IDEs).
* Whether your organization or enterprise restricts access to specific models.

For information about the AI models available in {% data variables.product.prodname_copilot_short %}, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/supported-ai-models-in-copilot).

To learn how {% data variables.copilot.copilot_chat_short %} serves different AI models, see [AUTOTITLE](/copilot/reference/ai-models/model-hosting).

## Setup for individual use

If you have a {% data variables.copilot.copilot_free_short %}, {% data variables.copilot.copilot_pro_short %}, or {% data variables.copilot.copilot_pro_plus_short %} plan, you may need to enable access to certain models before using them.

You can enable access in two ways:

* The first time you use a model with {% data variables.copilot.copilot_chat_short %} in your editor or in the immersive view of {% data variables.copilot.copilot_chat_short %}, you will be prompted to allow access to the model.

  Click **Allow** to enable the AI model and update the policy in your personal settings on {% data variables.product.github %}.

* You can enable the model directly in your personal settings on the {% data variables.product.github %} website. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-copilot-policies-as-an-individual-subscriber#enabling-or-disabling-alternative-ai-models).

>[!NOTE]
> Some models may not be available depending on your plan. See [AUTOTITLE](/copilot/about-github-copilot/plans-for-github-copilot#models).

## Setup for organization and enterprise use

As an enterprise or organization owner, you can enable or disable access to AI models for everyone who has been assigned a {% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %} seat through your enterprise or organization. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization) and [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise).
