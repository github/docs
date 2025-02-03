---
title: Using Claude 3.5 Sonnet in GitHub Copilot
allowTitleToDifferFromFilename: true
shortTitle: 'Use {% data variables.copilot.copilot_claude_sonnet %}'
intro: 'Learn how to enable {% data variables.copilot.copilot_claude_sonnet %} for {% ifversion fpt %}yourself or{% endif %} your organization{% ifversion ghec %} or enterprise{% endif %}.'
versions:
  feature: copilot
topics:
  - Copilot
---

{% data reusables.copilot.claude-sonnet-preview-note %}

## About {% data variables.copilot.copilot_claude_sonnet %} in {% data variables.product.prodname_copilot %}

{% data variables.copilot.copilot_claude_sonnet %} is a large language model that you can use as an alternative to the default model used by {% data variables.product.prodname_copilot_chat_short %}. {% data variables.copilot.copilot_claude_sonnet %} excels at coding tasks across the entire software development lifecycle, from initial design to bug fixes, maintenance to optimizations. Learn more about the [model's capabilities](https://www.anthropic.com/claude/sonnet) or read the [model card](https://assets.anthropic.com/m/61e7d27f8c8f5919/original/Claude-3-Model-Card.pdf).

{% data variables.copilot.copilot_claude_sonnet %} is currently available in:

* {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode %}
* {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vs %} 17.12 Preview 3 or later
* Immersive mode in {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.github %}

{% data variables.product.prodname_copilot %} uses {% data variables.copilot.copilot_claude_sonnet %} hosted on Amazon Web Services. When using {% data variables.copilot.copilot_claude_sonnet %}, prompts and metadata are sent to Amazon's Bedrock service, which makes the [following data commitments](https://docs.aws.amazon.com/bedrock/latest/userguide/data-protection.html): _Amazon Bedrock doesn't store or log your prompts and completions. Amazon Bedrock doesn't use your prompts and completions to train any AWS models and doesn't distribute them to third parties_.

When using {% data variables.copilot.copilot_claude_sonnet %}, input prompts and output completions continue to run through {% data variables.product.prodname_copilot %}'s content filters for public code matching, when applied, along with those for harmful, offensive, or off-topic content.

## Configuring access

You must enable access to {% data variables.copilot.copilot_claude_sonnet %} before you can use the model.

{% ifversion fpt %}

### Setup for individual use

If you have a {% data variables.product.prodname_copilot_free_short %} or {% data variables.product.prodname_copilot_pro_short %} subscription, you can enable {% data variables.copilot.copilot_claude_sonnet %} in two ways:

* The first time you choose to use {% data variables.copilot.copilot_claude_sonnet %} with {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode %}, or in the immersive view of {% data variables.product.prodname_copilot_chat_short %}, you will be prompted to allow access to the model.

  Clicking **Allow** enables you to use {% data variables.copilot.copilot_claude_sonnet %} and updates the policy in your personal settings on {% data variables.product.github %}.

* You can enable the model directly in your personal settings on the {% data variables.product.github %} website. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-copilot-policies-as-an-individual-subscriber#enabling-or-disabling-claude-35-sonnet).

{% endif %}

### Setup for organization {% ifversion ghec %}and enterprise{% endif %} use

As an {% ifversion ghec %}enterprise or{% endif %} organization owner, you can enable or disable {% data variables.copilot.copilot_claude_sonnet %} for everyone who has been assigned a {% ifversion ghec %}{% data variables.product.prodname_copilot_enterprise_short %} or {% endif %}{% data variables.product.prodname_copilot_business_short %} seat through your {% ifversion ghec %}enterprise or {% endif %}organization. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization){% ifversion ghec %} and [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise){% endif %}.

## Using {% data variables.copilot.copilot_claude_sonnet %}

For details of how to change the model for {% data variables.product.prodname_copilot_chat_short %}, see:

* [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-githubcom#changing-your-ai-model)
* [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide#changing-your-ai-model)

## Leaving feedback

To leave feedback about Claude 3.5 Sonnet in {% data variables.product.prodname_copilot %}, or to ask a question, see the {% data variables.product.prodname_github_community %} discussion [Claude 3.5 Sonnet is now available to all {% data variables.product.prodname_copilot_short %} users in Public Preview](https://github.com/orgs/community/discussions/143337).
