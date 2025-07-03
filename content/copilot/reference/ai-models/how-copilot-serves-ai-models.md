---
title: How Copilot serves AI models
intro: 'Learn how {% data variables.copilot.copilot_chat_short %} serves different AI models.'
versions:
  feature: copilot
topics:
  - Copilot
---

{% data variables.product.prodname_copilot %} can use a variety of AI models. This article explains how {% data variables.product.prodname_copilot_short %} serves these models.

## OpenAI models

Used for:

* {% data variables.copilot.copilot_o3 %}
* {% data variables.copilot.copilot_o4_mini %}

These models are hosted by OpenAI and {% data variables.product.github %}'s Azure tenant when used in {% data variables.product.prodname_copilot %}. OpenAI makes the [following data commitment](https://openai.com/enterprise-privacy/): _We [OpenAI] do not train our models on your business data by default_. {% data variables.product.github %} maintains a [zero data retention agreement](https://platform.openai.com/docs/guides/your-data) with OpenAI.

When using OpenAI's models, input requests and output responses continue to run through {% data variables.product.prodname_copilot %}'s content filters for public code matching, when applied, along with those for harmful or offensive content.

## Anthropic models

Used for:

* {% data variables.copilot.copilot_claude_opus %}
* {% data variables.copilot.copilot_claude_sonnet_35 %}
* {% data variables.copilot.copilot_claude_sonnet_37 %}
* {% data variables.copilot.copilot_claude_sonnet_37 %} Thinking
* {% data variables.copilot.copilot_claude_sonnet_40 %}

{% data variables.copilot.copilot_claude_opus %} and {% data variables.copilot.copilot_claude_sonnet_40 %} are hosted by Anthropic PBC and Google Cloud Platform. {% data variables.copilot.copilot_claude_sonnet_37 %} is hosted by Amazon Web Services, Anthropic PBC, and Google Cloud Platform. {% data variables.copilot.copilot_claude_sonnet_35 %} is hosted exclusively by Amazon Web Services. {% data variables.product.github %} has provider agreements in place to ensure data is not used for training. Additional details for each provider are included below:

* Amazon Bedrock: Amazon makes the [following data commitments](https://docs.aws.amazon.com/bedrock/latest/userguide/data-protection.html): _Amazon Bedrock doesn't store or log your prompts and completions. Amazon Bedrock doesn't use your prompts and completions to train any AWS models and doesn't distribute them to third parties_.
* Anthropic PBC: {% data variables.product.github %} maintains a [zero data retention agreement](https://privacy.anthropic.com/en/articles/8956058-i-have-a-zero-retention-agreement-with-anthropic-what-products-does-it-apply-to) with Anthropic.
* Google Cloud: [Google commits to not training on {% data variables.product.github %} data as part of their service terms](https://cloud.google.com/vertex-ai/generative-ai/docs/data-governance). {% data variables.product.github %} is additionally not subject to prompt logging for abuse monitoring.

To provide better service quality and reduce latency, {% data variables.product.github %} uses [prompt caching](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching). You can read more about prompt caching on [Anthropic PBC](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching), [Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-caching.html), and [Google Cloud](https://cloud.google.com/vertex-ai/generative-ai/docs/partner-models/claude-prompt-caching).

When using {% data variables.copilot.copilot_claude %}, input prompts and output completions continue to run through {% data variables.product.prodname_copilot %}'s content filters for public code matching, when applied, along with those for harmful or offensive content.

## Google models

Used for:

* {% data variables.copilot.copilot_gemini_25_pro %}
* {% data variables.copilot.copilot_gemini_flash %}

{% data variables.product.prodname_copilot %} uses {% data variables.copilot.copilot_gemini_flash %} and {% data variables.copilot.copilot_gemini_25_pro %} hosted on Google Cloud Platform (GCP). When using {% data variables.copilot.copilot_gemini %} models, prompts and metadata are sent to GCP, which makes the [following data commitment](https://cloud.google.com/vertex-ai/generative-ai/docs/data-governance): _{% data variables.copilot.copilot_gemini %} doesn't use your prompts, or its responses, as data to train its models._

When using {% data variables.copilot.copilot_gemini %} models, input prompts and output completions continue to run through {% data variables.product.prodname_copilot %}'s content filters for public code matching, when applied, along with those for harmful or offensive content.
