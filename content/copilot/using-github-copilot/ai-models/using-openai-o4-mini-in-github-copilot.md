---
title: Using OpenAI o4-mini in Copilot Chat
allowTitleToDifferFromFilename: true
shortTitle: 'Use OpenAI {% data variables.copilot.copilot_o4_mini %}'
intro: 'Learn how to enable OpenAI {% data variables.copilot.copilot_o4_mini %} in {% data variables.product.prodname_copilot_chat %}, for {% ifversion fpt %}yourself or{% endif %} your organization{% ifversion ghec %} or enterprise{% endif %}.'
versions:
  feature: copilot
topics:
  - Copilot
---

## About OpenAI {% data variables.copilot.copilot_o4_mini %} in {% data variables.product.prodname_copilot_chat %}

{% data reusables.copilot.o4-mini-public-preview-note %}

OpenAI has a family of large language models that you can use as an alternative to the default model used by {% data variables.product.prodname_copilot_chat_short %}. {% data variables.copilot.copilot_o4_mini %} is one of those models and excels at coding tasks across the entire software development lifecycle, from initial design to bug fixes, maintenance to optimizations. For information about the capabilities of {% data variables.copilot.copilot_o4_mini %}, see the [OpenAI documentation](https://platform.openai.com/docs/models).

{% data variables.copilot.copilot_o4_mini %} is currently available in:

* {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode %}
* Immersive mode in {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.github %}

{% data variables.copilot.copilot_o4_mini %} is hosted by OpenAI and GitHub's Azure tenant when used in {% data variables.product.prodname_copilot %}. OpenAI makes the [following data commitment](https://openai.com/enterprise-privacy/): _We [OpenAI] do not train our models on your business data by default_. GitHub maintains a [zero data retention agreement](https://platform.openai.com/docs/guides/your-data) with OpenAI.

When using {% data variables.copilot.copilot_o4_mini %}, input prompts and output completions continue to run through {% data variables.product.prodname_copilot %}'s content filters for public code matching, when applied, along with those for harmful, offensive, or off-topic content.

## Configuring access

You must enable access to OpenAI {% data variables.copilot.copilot_o4_mini %} individually before you can use the model.

{% ifversion fpt %}

### Setup for individual use

If you have a {% data variables.product.prodname_copilot_pro_short %} or {% data variables.product.prodname_copilot_pro_plus_short %} subscription, you can enable OpenAI {% data variables.copilot.copilot_o4_mini %} in two ways:

* The first time you choose to use {% data variables.copilot.copilot_o4_mini %} with {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode %}, or in the immersive view of {% data variables.product.prodname_copilot_chat_short %}, you will be prompted to allow access to the model.

  Clicking **Allow** enables you to use {% data variables.copilot.copilot_o4_mini %} and updates the policy in your personal settings on {% data variables.product.github %}.

* You can enable the model directly in your personal settings on the {% data variables.product.github %} website. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-copilot-policies-as-an-individual-subscriber#enabling-or-disabling-alternative-ai-models).

{% endif %}

### Setup for organization {% ifversion ghec %}and enterprise{% endif %} use

As an {% ifversion ghec %}enterprise or{% endif %} organization owner, you can enable or disable {% data variables.copilot.copilot_o4_mini %} for everyone who has been assigned a {% ifversion ghec %}{% data variables.product.prodname_copilot_enterprise_short %} or {% endif %}{% data variables.product.prodname_copilot_business_short %} seat through your {% ifversion ghec %}enterprise or {% endif %}organization. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization){% ifversion ghec %} and [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise){% endif %}.

## Using {% data variables.copilot.copilot_o4_mini %}

For details of how to change the model that {% data variables.product.prodname_copilot_chat_short %} uses, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat).
