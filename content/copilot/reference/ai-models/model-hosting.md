---
title: Hosting of models for GitHub Copilot Chat
shortTitle: Model hosting
allowTitleToDifferFromFilename: true
intro: 'Learn how different AI models are hosted for {% data variables.copilot.copilot_chat_short %}.'
versions:
  feature: copilot
topics:
  - Copilot
category:
  - Learn about Copilot
redirect_from:
  - /copilot/reference/ai-models/how-copilot-serves-ai-models
contentType: reference
---

{% data variables.product.prodname_copilot %} can use a variety of AI models. This article explains how these models are hosted and served.

## OpenAI models

Used for:

* {% data variables.copilot.copilot_gpt_41 %}
* {% data variables.copilot.copilot_gpt_5_codex %} (supported in {% data variables.product.prodname_vscode %} v1.104.1 or higher)
* {% data variables.copilot.copilot_gpt_5_mini %}
* {% data variables.copilot.copilot_gpt_5 %}
* {% data variables.copilot.copilot_gpt_51 %}
* {% data variables.copilot.copilot_gpt_51_codex %}
* {% data variables.copilot.copilot_gpt_51_codex_mini %}
* {% data variables.copilot.copilot_gpt_51_codex_max %}

These models are hosted by OpenAI and {% data variables.product.github %}'s Azure infrastructure.

OpenAI makes the [following data commitment](https://openai.com/enterprise-privacy/): _We [OpenAI] do not train models on customer business data_. Data processing follows OpenAI's enterprise privacy comments.

{% data variables.product.github %} maintains a [zero data retention agreement](https://platform.openai.com/docs/guides/your-data) with OpenAI.

All input requests and output responses processed by {% data variables.product.prodname_copilot %}'s models continue to pass through GitHub Copilot's, content filtering systems. These filters include checks for public code matches (when applied) as well as mechanisms to detect and block harmful or offensive content.

## OpenAI models fine-tuned by Microsoft

Used for:

* {% data variables.copilot.copilot_raptor_mini %}

{% data variables.copilot.copilot_raptor_mini %} is deployed on {% data variables.product.github %} managed Azure OpenAI tenant.

## Anthropic models

Used for:

* {% data variables.copilot.copilot_claude_haiku_45 %}
* {% data variables.copilot.copilot_claude_sonnet_45 %}
* {% data variables.copilot.copilot_claude_opus_41 %}
* {% data variables.copilot.copilot_claude_opus_45 %}
* {% data variables.copilot.copilot_claude_sonnet_40 %}

These models are hosted by Amazon Web Services, Anthropic PBC, and Google Cloud Platform. {% data variables.product.github %} has provider agreements in place to ensure data is not used for training. Additional details for each provider are included below:

* Amazon Bedrock: Amazon makes the [following data commitments](https://docs.aws.amazon.com/bedrock/latest/userguide/data-protection.html): _Amazon Bedrock doesn't store or log your prompts and completions. Amazon Bedrock doesn't use your prompts and completions to train any AWS models and doesn't distribute them to third parties_.
* Anthropic PBC: {% data variables.product.github %} maintains a [zero data retention agreement](https://privacy.anthropic.com/en/articles/8956058-i-have-a-zero-retention-agreement-with-anthropic-what-products-does-it-apply-to) with Anthropic.
* Google Cloud: [Google commits to not training on {% data variables.product.github %} data as part of their service terms](https://cloud.google.com/vertex-ai/generative-ai/docs/data-governance). {% data variables.product.github %} is additionally not subject to prompt logging for abuse monitoring.

To provide better service quality and reduce latency, {% data variables.product.github %} uses [prompt caching](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching). You can read more about prompt caching on [Anthropic PBC](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching), [Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-caching.html), and [Google Cloud](https://cloud.google.com/vertex-ai/generative-ai/docs/partner-models/claude-prompt-caching).

When using {% data variables.copilot.copilot_claude %}, input prompts and output completions continue to run through {% data variables.product.prodname_copilot %}'s content filters for public code matching, when applied, along with those for harmful or offensive content.

## Google models

Used for:

* {% data variables.copilot.copilot_gemini_25_pro %}
* {% data variables.copilot.copilot_gemini_3_pro %}

{% data variables.product.prodname_copilot %} uses {% data variables.copilot.copilot_gemini_3_pro %} and {% data variables.copilot.copilot_gemini_25_pro %} hosted on Google Cloud Platform (GCP). When using {% data variables.copilot.copilot_gemini %} models, prompts and metadata are sent to GCP, which makes the [following data commitment](https://cloud.google.com/vertex-ai/generative-ai/docs/data-governance): _{% data variables.copilot.copilot_gemini %} doesn't use your prompts, or its responses, as data to train its models._

To provide better service quality and reduce latency, {% data variables.product.github %} uses [prompt caching](https://cloud.google.com/vertex-ai/generative-ai/docs/data-governance#customer_data_retention_and_achieving_zero_data_retention).

When using {% data variables.copilot.copilot_gemini %} models, input prompts and output completions continue to run through {% data variables.product.prodname_copilot %}'s content filters for public code matching, when applied, along with those for harmful or offensive content.

## xAI models

{% data reusables.copilot.grok-promo-period %}

These models are hosted on xAI. xAI operates {% data variables.copilot.copilot_grok_code %} in {% data variables.product.prodname_copilot %} under a zero data retention API policy. This means xAI commits that user content (both inputs sent to the model and outputs generated by the model):

Will **not** be:
* Logged for any purpose, including human review
* Saved to disk or retained in any form, including as metadata
* Accessible by xAI personnel
* Used for model training

Will **only**:
* Exist temporarily in RAM for the minimum time required to process and respond to each request
* Be immediately deleted from memory once the response is delivered

When using xAI, input prompts and output completions continue to run through {% data variables.product.prodname_copilot %}'s content filters for public code matching, when applied, along with those for harmful or offensive content.

For more information, see [xAI's enterprise terms of service](https://x.ai/legal/terms-of-service-enterprise) on the xAI website.
