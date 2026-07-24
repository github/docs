---
title: Hosting of models for GitHub Copilot
shortTitle: Model hosting
allowTitleToDifferFromFilename: true
intro: 'Learn how different AI models are hosted for {% data variables.product.prodname_copilot %}.'
versions:
  feature: copilot
category:
  - Learn about Copilot
redirect_from:
  - /copilot/reference/ai-models/how-copilot-serves-ai-models
contentType: reference
---

{% data variables.product.prodname_copilot %} can use a variety of AI models. This article explains how these models are hosted and served.

## OpenAI models

Used for:

* {% data variables.copilot.copilot_gpt_5_mini %}
* {% data variables.copilot.copilot_gpt_53_codex %}
* {% data variables.copilot.copilot_gpt_54 %}
* {% data variables.copilot.copilot_gpt_54_mini %}
* {% data variables.copilot.copilot_gpt_54_nano %}
* {% data variables.copilot.copilot_gpt_55 %}
* {% data variables.copilot.copilot_gpt_56_luna %}
* {% data variables.copilot.copilot_gpt_56_sol %}
* {% data variables.copilot.copilot_gpt_56_terra %}

These models are hosted by OpenAI and {% data variables.product.github %}'s Azure infrastructure.

OpenAI makes the [following data commitment](https://openai.com/enterprise-privacy/): _We [OpenAI] do not train models on customer business data_. Data processing follows OpenAI's enterprise privacy comments.

{% data variables.product.github %} maintains a [zero data retention agreement](https://platform.openai.com/docs/guides/your-data) with OpenAI.

All input requests and output responses processed by {% data variables.product.prodname_copilot %}'s models continue to pass through GitHub Copilot's, content filtering systems. These filters include checks for public code matches (when applied) as well as mechanisms to detect and block harmful or offensive content.

## Anthropic models

Used for:

* {% data variables.copilot.copilot_claude_haiku_45 %}
* {% data variables.copilot.copilot_claude_sonnet_45 %}
* {% data variables.copilot.copilot_claude_sonnet_46 %}
* {% data variables.copilot.copilot_claude_sonnet_5 %}
* {% data variables.copilot.copilot_claude_opus_45 %}
* {% data variables.copilot.copilot_claude_opus_46 %}
* {% data variables.copilot.copilot_claude_opus_47 %}
* {% data variables.copilot.copilot_claude_opus_48 %}
* {% data variables.copilot.copilot_claude_opus_48_fast %}
* {% data variables.copilot.copilot_claude_fable_5 %}

> [!WARNING] 
> When {% data variables.copilot.copilot_claude_fable_5 %} is used, Anthropic retains data, including prompts and outputs, to operate safety classifiers that detect harmful use. Other Claude models in {% data variables.product.prodname_copilot %} remain covered by {% data variables.product.github %}'s existing data retention agreements, as documented below. Enterprise and business users need to enable the {% data variables.copilot.copilot_claude_fable_5 %} model to make it available for your organization. You can read more about Anthropic's data handling practices for this model under section F of their [Service Specific Terms](https://www.anthropic.com/legal/service-specific-terms).

These models are hosted by Amazon Web Services, Anthropic PBC, and Google Cloud Platform. {% data variables.product.github %} has provider agreements in place to ensure data is not used for training. Additional details for each provider are included below:

* Amazon Bedrock: Amazon makes the [following data commitments](https://docs.aws.amazon.com/bedrock/latest/userguide/data-protection.html): _Amazon Bedrock doesn't store or log your prompts and completions. Amazon Bedrock doesn't use your prompts and completions to train any AWS models and doesn't distribute them to third parties_.
<!-- markdownlint-disable GHD046 -->
* Anthropic PBC: {% data variables.product.github %} maintains a [zero data retention agreement](https://privacy.anthropic.com/en/articles/8956058-i-have-a-zero-retention-agreement-with-anthropic-what-products-does-it-apply-to) with Anthropic for generally available Anthropic features in {% data variables.product.prodname_copilot %}. Some Anthropic features in beta or {% data variables.release-phases.public_preview %}—including tool search via the Messages API—are not covered by this agreement. For these features, data may be retained by Anthropic in accordance with [Anthropic's ZDR documentation](https://platform.claude.com/docs/en/build-with-claude/zero-data-retention). {% data variables.product.github %} will update this page as ZDR coverage changes.
<!-- markdownlint-enable GHD046 -->
* Google Cloud: [Google commits to not training on {% data variables.product.github %} data as part of their service terms](https://cloud.google.com/vertex-ai/generative-ai/docs/data-governance). {% data variables.product.github %} is additionally not subject to prompt logging for abuse monitoring.

To provide better service quality and reduce latency, {% data variables.product.github %} uses [prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching). You can read more about prompt caching on [Anthropic PBC](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching), [Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-caching.html), and [Google Cloud](https://cloud.google.com/vertex-ai/generative-ai/docs/partner-models/claude-prompt-caching).

When using {% data variables.copilot.copilot_claude %}, input prompts and output completions continue to run through {% data variables.product.prodname_copilot %}'s content filters for public code matching, when applied, along with those for harmful or offensive content.

## Google models

Used for:

* {% data variables.copilot.copilot_gemini_25_pro %}
* {% data variables.copilot.copilot_gemini_3_flash %}
* {% data variables.copilot.copilot_gemini_31_pro %}
* {% data variables.copilot.copilot_gemini_35_flash %}
* {% data variables.copilot.copilot_gemini_36_flash %}

{% data variables.product.prodname_copilot %} uses {% data variables.copilot.copilot_gemini_31_pro %}, {% data variables.copilot.copilot_gemini_3_flash %}, and {% data variables.copilot.copilot_gemini_25_pro %} hosted on Google Cloud Platform (GCP). When using {% data variables.copilot.copilot_gemini %} models, prompts and metadata are sent to GCP, which makes the [following data commitment](https://cloud.google.com/vertex-ai/generative-ai/docs/data-governance): _{% data variables.copilot.copilot_gemini %} doesn't use your prompts, or its responses, as data to train its models._

To provide better service quality and reduce latency, {% data variables.product.github %} uses [prompt caching](https://cloud.google.com/vertex-ai/generative-ai/docs/data-governance#customer_data_retention_and_achieving_zero_data_retention).

When using {% data variables.copilot.copilot_gemini %} models, input prompts and output completions continue to run through {% data variables.product.prodname_copilot %}'s content filters for public code matching, when applied, along with those for harmful or offensive content.

## Microsoft models

Used for:

* {% data variables.copilot.copilot_mai_code_1_flash %}
* {% data variables.copilot.copilot_raptor_mini %}

{% data variables.copilot.copilot_mai_code_1_flash %} is a first-party Microsoft model hosted on Azure in {% data variables.product.github %}'s tenant. 

{% data variables.product.github %} does not use {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %} customer data to train AI models. For individual subscribers—{% data variables.copilot.copilot_free_short %}, {% data variables.copilot.copilot_pro_short %}, {% data variables.copilot.copilot_pro_plus_short %}, and {% data variables.copilot.copilot_max_short %} users—{% data variables.product.github %} may use {% data variables.product.prodname_copilot_short %} interaction data, including prompts (inputs), suggestions (outputs), and code snippets generated during {% data variables.product.prodname_copilot_short %} sessions to train and improve AI models, in accordance with our [AUTOTITLE](/free-pro-team@latest/site-policy/privacy-policies/github-general-privacy-statement) and applicable user settings. Individual subscribers can opt out of having their data used for AI model training. To manage this setting, see [AUTOTITLE](/copilot/how-tos/manage-your-account/manage-policies#model-training-and-improvements).

{% data variables.copilot.copilot_mai_code_1_flash %} is served on Microsoft Azure AI Foundry within {% data variables.product.github %}'s tenant and is subject to {% data variables.product.github %}'s data handling configuration for that deployment. For details about how data is processed, retained, and secured for models served on Azure AI Foundry, see [Data, privacy, and security for Foundry Models sold by Azure](https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/openai/data-privacy?tabs=azure-portal) in the Microsoft documentation.

When using {% data variables.copilot.copilot_mai_code_1_flash %}, input prompts and output completions continue to run through {% data variables.product.prodname_copilot %}'s content filters for public code matching, when applied, along with those for harmful or offensive content.

## Open-weight models

Open-weight models have publicly available weights. {% data reusables.copilot.open-weight-model-hosting %}

### Moonshot AI models

Used for:

* {% data variables.copilot.copilot_kimi_k27_code %}

{% data variables.copilot.copilot_kimi_k27_code %} was developed by Moonshot AI. It is an open-weight model. {% data variables.product.github %}'s content filtering applies, but you should review the [{% data variables.copilot.copilot_kimi_k27_code %} model card](https://huggingface.co/moonshotai/Kimi-K2.7-Code) and conduct your own evaluations before enabling it.

When using {% data variables.copilot.copilot_kimi_k27_code %}, input prompts and output completions continue to run through {% data variables.product.prodname_copilot %}'s content filters for public code matching, when applied, along with those for harmful or offensive content.

## Inline suggestions

Inline suggestions, including ghost text and next edit suggestions, are powered by models hosted on Azure for {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} plans. {% data variables.copilot.copilot_free_short %} and {% data variables.copilot.copilot_student_short %} user models are hosted on Fireworks AI.
