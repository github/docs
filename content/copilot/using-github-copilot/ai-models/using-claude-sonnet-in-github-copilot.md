---
title: Using Claude Sonnet in Copilot Chat
allowTitleToDifferFromFilename: true
shortTitle: 'Use {% data variables.copilot.copilot_claude_sonnet %}'
intro: 'Learn how to enable {% data variables.copilot.copilot_claude_sonnet %} in {% data variables.product.prodname_copilot_chat %}, for {% ifversion fpt %}yourself or{% endif %} your organization{% ifversion ghec %} or enterprise{% endif %}.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/using-github-copilot/using-claude-sonnet-in-github-copilot
---

## About {% data variables.copilot.copilot_claude_sonnet %} in {% data variables.product.prodname_copilot_chat %}

{% data variables.copilot.copilot_claude_sonnet %} is a family of large language models that you can use as an alternative to the default model used by {% data variables.product.prodname_copilot_chat_short %}. {% data variables.copilot.copilot_claude_sonnet %} excels at coding tasks across the entire software development lifecycle, from initial design to bug fixes, maintenance to optimizations. Learn more about the [Sonnet's capabilities](https://www.anthropic.com/claude/sonnet).

{% data variables.copilot.copilot_claude_sonnet_37 %} is currently available in:

* {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode %}
* {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vs %} 2022 version 17.13 or later
* Immersive mode in {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.github %}

{% data variables.copilot.copilot_claude_sonnet_35 %} is currently available in:

* {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode %}
* {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vs %} 2022 version 17.12 or later
* Immersive mode in {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.github %}

{% data variables.copilot.copilot_claude_sonnet %} is hosted by Amazon Web Services, Anthropic PBC, and Google Cloud Platform when used in {% data variables.product.prodname_copilot %}. GitHub has provider agreements in place to ensure data is not used for training. Additional details for each provider are included below:

* Amazon Bedrock: Amazon makes the [following data commitments](https://docs.aws.amazon.com/bedrock/latest/userguide/data-protection.html): _Amazon Bedrock doesn't store or log your prompts and completions. Amazon Bedrock doesn't use your prompts and completions to train any AWS models and doesn't distribute them to third parties_.
* Anthropic PBC: GitHub maintains a [zero data retention agreement](https://privacy.anthropic.com/en/articles/8956058-i-have-a-zero-retention-agreement-with-anthropic-what-products-does-it-apply-to) with Anthropic.
* Google Cloud: [Google commits to not training on GitHub data as part of their service terms](https://cloud.google.com/vertex-ai/generative-ai/docs/data-governance). GitHub is additionally not subject to prompt logging for abuse monitoring.

In order to provide better service quality and reduce latency, GitHub uses [prompt caching](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching). You can read more about prompt caching on [Anthropic PBC](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching), [Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-caching.html), and [Google Cloud](https://cloud.google.com/vertex-ai/generative-ai/docs/partner-models/claude-prompt-caching).

When using {% data variables.copilot.copilot_claude_sonnet %}, input prompts and output completions continue to run through {% data variables.product.prodname_copilot %}'s content filters for public code matching, when applied, along with those for harmful, offensive, or off-topic content.

## Configuring access

You must enable access to each {% data variables.copilot.copilot_claude_sonnet %} individually before you can use the model.

{% ifversion fpt %}

### Setup for individual use

> [!NOTE] {% data variables.copilot.copilot_claude_sonnet_37 %} is not currently available for {% data variables.product.prodname_copilot_free_short %}

If you have a {% data variables.product.prodname_copilot_free_short %} or {% data variables.product.prodname_copilot_pro_short %} subscription, you can enable {% data variables.copilot.copilot_claude_sonnet %} in two ways:

* The first time you choose to use {% data variables.copilot.copilot_claude_sonnet %} models with {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode %}, or in the immersive view of {% data variables.product.prodname_copilot_chat_short %}, you will be prompted to allow access to the model.

  Clicking **Allow** enables you to use {% data variables.copilot.copilot_claude_sonnet %} and updates the policy in your personal settings on {% data variables.product.github %}.

* You can enable the model directly in your personal settings on the {% data variables.product.github %} website. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-copilot-policies-as-an-individual-subscriber#enabling-or-disabling-alternative-ai-models).

{% endif %}

### Setup for organization {% ifversion ghec %}and enterprise{% endif %} use

As an {% ifversion ghec %}enterprise or{% endif %} organization owner, you can enable or disable {% data variables.copilot.copilot_claude_sonnet %} models for everyone who has been assigned a {% ifversion ghec %}{% data variables.product.prodname_copilot_enterprise_short %} or {% endif %}{% data variables.product.prodname_copilot_business_short %} seat through your {% ifversion ghec %}enterprise or {% endif %}organization. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization){% ifversion ghec %} and [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise){% endif %}.

## Using {% data variables.copilot.copilot_claude_sonnet %}

For details of how to change the model that {% data variables.product.prodname_copilot_chat_short %} uses, see: [AUTOTITLE](/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat).

## Leaving feedback

To leave feedback about {% data variables.copilot.copilot_claude_sonnet %} in {% data variables.product.prodname_copilot %}, or to ask a question, see the {% data variables.product.prodname_github_community %} discussion [Claude 3.5 Sonnet is now available to all {% data variables.product.prodname_copilot_short %} users in Public Preview](https://github.com/orgs/community/discussions/143337).
