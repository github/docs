---
title: Using Gemini in Copilot Chat
allowTitleToDifferFromFilename: true
shortTitle: 'Use {% data variables.copilot.copilot_gemini %}'
intro: 'Learn how to enable {% data variables.copilot.copilot_gemini %} in {% data variables.product.prodname_copilot_chat %}, for {% ifversion fpt %}yourself or{% endif %} your organization{% ifversion ghec %} or enterprise{% endif %}.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/using-github-copilot/ai-models/using-gemini-flash-in-github-copilot
---

## About {% data variables.copilot.copilot_gemini %} in {% data variables.product.prodname_copilot %}

{% data variables.copilot.copilot_gemini %} models are large language models (LLMs) that you can use as an alternative to the default model used by {% data variables.product.prodname_copilot_chat_short %}. {% data variables.copilot.copilot_gemini %} models are responsive LLMs that can empower you to build apps faster and more easily, so you can focus on great experiences for your users. {% data reusables.copilot.gemini-model-info %}

{% data variables.copilot.copilot_gemini %} is currently available in:

* {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode %}
* Immersive mode in {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.github %}

{% data variables.product.prodname_copilot %} uses {% data variables.copilot.copilot_gemini_flash %} and {% data variables.copilot.copilot_gemini_25_pro %} hosted on Google Cloud Platform (GCP). When using {% data variables.copilot.copilot_gemini %} models, prompts and metadata are sent to GCP, which makes the [following data commitment](https://cloud.google.com/gemini/docs/discover/data-governance): _{% data variables.copilot.copilot_gemini %} doesn't use your prompts, or its responses, as data to train its models._

When using {% data variables.copilot.copilot_gemini %} models, input prompts and output completions continue to run through {% data variables.product.prodname_copilot %}'s content filters for public code matching, when applied, along with those for harmful, offensive, or off-topic content.

## Configuring access

You must enable access to {% data variables.copilot.copilot_gemini_flash %} and {% data variables.copilot.copilot_gemini_25_pro %} before you can use the model.

{% ifversion fpt %}

### Setup for individual use

> [!NOTE] {% data variables.copilot.copilot_gemini_25_pro %} is not currently available for {% data variables.product.prodname_copilot_free_short %}.

If you have a {% data variables.product.prodname_copilot_free_short %}, {% data variables.product.prodname_copilot_pro_short %}, or {% data variables.product.prodname_copilot_pro_plus_short %} subscription, you can enable {% data variables.copilot.copilot_gemini %} in two ways:

* The first time you choose to use {% data variables.copilot.copilot_gemini %} models with {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode %}, or in the immersive view of {% data variables.product.prodname_copilot_chat_short %}, you will be prompted to allow access to the model.

  Clicking **Allow** enables you to use {% data variables.copilot.copilot_gemini %} and updates the policy in your personal settings on {% data variables.product.github %}.

* You can enable the model directly in your personal settings on the {% data variables.product.github %} website. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-copilot-policies-as-an-individual-subscriber#enabling-or-disabling-alternative-ai-models).

{% endif %}

### Setup for organization {% ifversion ghec %}and enterprise{% endif %} use

As an {% ifversion ghec %}enterprise or{% endif %} organization owner, you can enable or disable both {% data variables.copilot.copilot_gemini_flash %} and {% data variables.copilot.copilot_gemini_25_pro %} for everyone who has been assigned a {% ifversion ghec %}{% data variables.product.prodname_copilot_enterprise_short %} or {% endif %}{% data variables.product.prodname_copilot_business_short %} seat through your {% ifversion ghec %}enterprise or {% endif %}organization. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization){% ifversion ghec %} and [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise#copilot-access-to-alternative-ai-models){% endif %}.

## Using {% data variables.copilot.copilot_gemini %}

For details of how to change the model that {% data variables.product.prodname_copilot_chat_short %} uses, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat).
