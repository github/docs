---
title: Using Claude in Copilot Chat
allowTitleToDifferFromFilename: true
shortTitle: 'Use {% data variables.copilot.copilot_claude %}'
intro: 'Learn how to enable {% data variables.copilot.copilot_claude %} in {% data variables.product.prodname_copilot_chat %} for {% ifversion fpt %}yourself or{% endif %} your organization{% ifversion ghec %} or enterprise{% endif %}.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/using-github-copilot/using-claude-sonnet-in-github-copilot
  - /copilot/using-github-copilot/ai-models/using-claude-sonnet-in-github-copilot
---

## About {% data variables.copilot.copilot_claude %} in {% data variables.product.prodname_copilot_chat %}

{% data reusables.copilot.claude-public-preview-note %}

{% data variables.copilot.copilot_claude %} is a family of large language models that you can use as an alternative to the default model used by {% data variables.product.prodname_copilot_chat_short %}. {% data variables.copilot.copilot_claude %} excels at coding tasks across the entire software development lifecycle, from initial design to bug fixes, maintenance to optimizations. Learn more about [Claude's capabilities](https://www.anthropic.com/claude).

* {% data variables.copilot.copilot_claude_opus %} is available in:

  * {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode %}
  * Immersive mode in {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.github %}

* {% data variables.copilot.copilot_claude_sonnet_40 %} is available in:

  * {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode %}
  * Immersive mode in {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.github %}

* {% data variables.copilot.copilot_claude_sonnet_35 %} and {% data variables.copilot.copilot_claude_sonnet_37 %} are available in:

  * {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode %}
  * {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vs %} 2022
    * **3.5**: Version 17.12 or later
    * **3.7**: Version 17.13 or later
  * {% data variables.product.prodname_copilot_chat_short %} in Xcode
  * {% data variables.product.prodname_copilot_chat_short %} in Eclipse
  * {% data variables.product.prodname_copilot_chat_short %} in JetBrains
  * Immersive mode in {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.github %}

{% data variables.copilot.copilot_claude_opus %} is hosted by Anthropic PBC. {% data variables.copilot.copilot_claude_sonnet_40 %} is hosted by Anthropic 1P. {% data variables.copilot.copilot_claude_sonnet_37 %} is hosted by Amazon Web Services, Anthropic PBC, and Google Cloud Platform when used in {% data variables.product.prodname_copilot %}. {% data variables.copilot.copilot_claude_sonnet_35 %} is hosted exclusively by Amazon Web Services. {% data variables.product.github %} has provider agreements in place to ensure data is not used for training. Additional details for each provider are included below:

* Amazon Bedrock: Amazon makes the [following data commitments](https://docs.aws.amazon.com/bedrock/latest/userguide/data-protection.html): _Amazon Bedrock doesn't store or log your prompts and completions. Amazon Bedrock doesn't use your prompts and completions to train any AWS models and doesn't distribute them to third parties_.
* Anthropic PBC: {% data variables.product.github %} maintains a [zero data retention agreement](https://privacy.anthropic.com/en/articles/8956058-i-have-a-zero-retention-agreement-with-anthropic-what-products-does-it-apply-to) with Anthropic.
* Google Cloud: [Google commits to not training on {% data variables.product.github %} data as part of their service terms](https://cloud.google.com/vertex-ai/generative-ai/docs/data-governance). {% data variables.product.github %} is additionally not subject to prompt logging for abuse monitoring.

In order to provide better service quality and reduce latency, {% data variables.product.github %} uses [prompt caching](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching). You can read more about prompt caching on [Anthropic PBC](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching), [Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-caching.html), and [Google Cloud](https://cloud.google.com/vertex-ai/generative-ai/docs/partner-models/claude-prompt-caching).

When using {% data variables.copilot.copilot_claude %}, input prompts and output completions continue to run through {% data variables.product.prodname_copilot %}'s content filters for public code matching, when applied, along with those for harmful, offensive, or off-topic content.

## Configuring access

You must enable access to each {% data variables.copilot.copilot_claude %} individually before you can use the model.

{% ifversion fpt %}

### Setup for individual use

> [!NOTE]
> * {% data variables.copilot.copilot_claude_opus %} is not currently available for {% data variables.product.prodname_copilot_free_short %} and {% data variables.product.prodname_copilot_pro_short %}.
> * {% data variables.copilot.copilot_claude_sonnet_40 %} and {% data variables.copilot.copilot_claude_sonnet_37 %} are not currently available for {% data variables.product.prodname_copilot_free_short %}.
> * {% data variables.copilot.copilot_claude_sonnet_37 %} is not currently available for {% data variables.product.prodname_copilot_free_short %}.

If you have a {% data variables.product.prodname_copilot_free_short %} or {% data variables.product.prodname_copilot_pro_short %} subscription, you can enable {% data variables.copilot.copilot_claude %} in two ways:

* The first time you choose to use {% data variables.copilot.copilot_claude %} models with {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode %}, or in the immersive view of {% data variables.product.prodname_copilot_chat_short %}, you will be prompted to allow access to the model.

  Clicking **Allow** enables you to use {% data variables.copilot.copilot_claude %} and updates the policy in your personal settings on {% data variables.product.github %}.

* You can enable the model directly in your personal settings on the {% data variables.product.github %} website. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-copilot-policies-as-an-individual-subscriber#enabling-or-disabling-alternative-ai-models).

{% endif %}

### Setup for organization {% ifversion ghec %}and enterprise{% endif %} use

> [!NOTE]
> {% data variables.copilot.copilot_claude_opus %} is not currently available for {% data variables.product.prodname_copilot_business_short %}.

As an {% ifversion ghec %}enterprise or{% endif %} organization owner, you can enable or disable {% data variables.copilot.copilot_claude %} models for everyone who has been assigned a {% ifversion ghec %}{% data variables.product.prodname_copilot_enterprise_short %} or {% endif %}{% data variables.product.prodname_copilot_business_short %} seat through your {% ifversion ghec %}enterprise or {% endif %}organization. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization){% ifversion ghec %} and [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise){% endif %}.

## Using {% data variables.copilot.copilot_claude %}

For details on how to change the model that {% data variables.product.prodname_copilot_chat_short %} uses, see [AUTOTITLE](/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat).

## Leaving feedback

To leave feedback about {% data variables.copilot.copilot_claude %} in {% data variables.product.prodname_copilot_short %}, or to ask a question, see the {% data variables.product.prodname_github_community %} discussion [{% data variables.copilot.copilot_claude_sonnet_35 %} is now available to all {% data variables.product.prodname_copilot_short %} users in Public Preview](https://github.com/orgs/community/discussions/143337).
