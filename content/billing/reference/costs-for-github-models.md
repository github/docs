---
title: Costs and multipliers for using GitHub Models directly
shortTitle: Costs for GitHub Models
intro: Reference information for calculating the cost of using different {% data variables.product.prodname_github_models %} directly (outside {% data variables.product.prodname_copilot %}).
versions:
  feature: github-models
topics:
  - Billing
contentType: reference
redirect_from:
  - /billing/reference/models-multipliers-and-costs
---

## Use of models in {% data variables.product.github %}

The information in this article is for the direct use of {% data variables.product.prodname_github_models %}.

{% data variables.product.github %} supports using models in two additional ways.

* {% data variables.product.prodname_copilot %} uses models to perform its work, see [AUTOTITLE](/copilot/concepts/billing/copilot-requests#model-multipliers)
* If you use models provided by other companies, see [AUTOTITLE](/github-models/github-models-at-scale/using-your-own-api-keys-in-github-models)

## Multipliers and costs for direct use of {% data variables.product.prodname_github_models %}

The table below lists the currently available models. Each model supported by {% data variables.product.prodname_github_models %} has an input and output multiplier that determines the number of token units for each request. For more information on token units, see [AUTOTITLE](/billing/concepts/product-billing/github-models).

| Model name                        | Input multiplier | Cached input multiplier | Output multiplier | Input price (per 1M token units) | Cached input price (per 1M token units) | Output price (per 1M token units) |
| --------------------------------- | ---------------- | ----------------------- | ----------------- |----------------------------------|-----------------------------------------|-----------------------------------|
| OpenAI GPT-4o                     | 0.25             | 0.125                   | 1.0               | $2.50                            | $1.25                                   | $10.00                            |
| OpenAI GPT-4o mini                | 0.015            | 0.0075                  | 0.06              | $0.15                            | $0.08                                   | $0.60                             |
| OpenAI GPT-4.1-mini               | 0.04             | 0.01                    | 0.16              | $0.40                            | $0.10                                   | $1.60                             |
| OpenAI GPT-4.1                    | 0.2              | 0.05                    | 0.8               | $2.00                            | $0.50                                   | $8.00                             |
| Phi-4                             | 0.0125           | N/A                     | 0.05              | $0.13                            | N/A                                     | $0.50                             |
| Phi-4-mini-instruct               | 0.0075           | N/A                     | 0.03              | $0.08                            | N/A                                     | $0.30                             |
| Phi-4-multimodal-instruct         | 0.008            | N/A                     | 0.032             | $0.08                            | N/A                                     | $0.32                             |
| DeepSeek-R1                       | 0.135            | N/A                     | 0.54              | $1.35                            | N/A                                     | $5.40                             |
| DeepSeek-R1-0528                  | 0.135            | N/A                     | 0.54              | $1.35                            | N/A                                     | $5.40                             |
| DeepSeek-V3-0324                  | 0.114            | N/A                     | 0.456             | $1.14                            | N/A                                     | $4.56                             |
| MAI-DS-R1                         | 0.135            | N/A                     | 0.54              | $1.35                            | N/A                                     | $5.40                             |
| Grok 3 Mini                       | 0.025            | N/A                     | 0.127             | $0.25                            | N/A                                     | $1.27                             |
| Grok 3                            | 0.3              | N/A                     | 1.5               | $3.00                            | N/A                                     | $15.00                            |
| Llama 4 Maverick 17B Instruct FP8 | 0.025            | N/A                     | 0.1               | $0.25                            | N/A                                     | $1.00                             |
| Llama-3.3-70B-Instruct            | 0.071            | N/A                     | 0.071             | $0.71                            | N/A                                     | $0.71                             |
