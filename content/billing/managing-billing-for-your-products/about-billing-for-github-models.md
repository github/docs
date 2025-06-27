---
title: About billing for GitHub Models
shortTitle: GitHub Models
intro: If you want to use {% data variables.product.prodname_github_models %} beyond the free usage included in your account, you can choose to opt in to paid usage.
versions:
  feature: github-models
topics:
  - Enterprise
  - Billing
allowTitleToDifferFromFilename: true
---

> [!NOTE]
> * {% data variables.product.prodname_github_models %} for organizations and repositories is in {% data variables.release-phases.public_preview %} and subject to change.
> * Billing for {% data variables.product.prodname_github_models %} is separate from billing for {% data variables.product.prodname_copilot %}. For more information about how models in {% data variables.product.prodname_copilot %} are billed, see [AUTOTITLE](/billing/managing-billing-for-your-products/about-billing-for-github-copilot).

## About {% data variables.product.prodname_github_models %} billing on {% data variables.product.github %}

Billing for {% data variables.product.prodname_github_models %} is designed to be flexible and to allow you to use your preferred model providers, while also providing the ability to control your spending. Model usage is powered by the Azure OpenAI Service and billed through {% data variables.product.github %} using the same global pay-as-you-go pricing as [Azure OpenAI Service](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/openai-service/).

Alternatively, you can bring your own API keys (BYOK) from different providers, such as OpenAI or Azure AI, see [AUTOTITLE](/github-models/github-models-at-scale/set-up-custom-model-integration-models-byok). Model inference runs directly through your provider, and usage is billed and tracked through your provider account. For example, Azure API key usage is billed and tracked through your Azure Subscription ID.

Each {% data variables.product.github %} account receives a certain amount of included free but rate-limited usage of {% data variables.product.prodname_github_models %}, see [Rate limits](/github-models/use-github-models/prototyping-with-ai-models#rate-limits).

The use of {% data variables.product.prodname_github_models %} from the {% data variables.product.prodname_marketplace %} catalog is subject to the free rate limits, and is not billed.

## Available models

The table below lists the currently available models. Each model supported by {% data variables.product.prodname_github_models %} has an input and output multiplier that determines the number of token units for each request. For more information on token units, see [Pricing for paid usage](#pricing-for-paid-usage).

| Model name                        | Input multiplier | Cached input multiplier | Output multiplier | Input price (per 1M token units) | Cached input price (per 1M token units) | Output price (per 1M token units) |
| --------------------------------- | ---------------- | ----------------------- | ----------------- |----------------------------------|-----------------------------------------|-----------------------------------|
| OpenAI GPT-4o                     | 0.25             | 0.125                   | 1.0               | $2.50                            | $1.25                                   | $10.00                            |
| OpenAI GPT-4o mini                | 0.015            | 0.0075                  | 0.06              | $0.15                            | $0.08                                   | $0.60                             |
| OpenAI GPT-4.1-mini               | 0.04             | 0.01                    | 0.16              | $0.40                            | $0.10                                   | $1.60                             |
| OpenAI GPT-4.1                    | 0.2              | 0.05                    | 0.8               | $2.00                            | $0.50                                   | $8.00                             |
| Phi-3.5-MoE instruct (128k)       | 0.016            | N/A                     | 0.064             | $0.16                            | N/A                                     | $0.64                             |
| Phi-3.5-mini instruct (128k)      | 0.013            | N/A                     | 0.052             | $0.13                            | N/A                                     | $0.52                             |
| Phi-3.5-vision instruct (128k)    | 0.013            | N/A                     | 0.052             | $0.13                            | N/A                                     | $0.52                             |
| Phi-3-medium instruct (4k)        | 0.017            | N/A                     | 0.068             | $0.17                            | N/A                                     | $0.68                             |
| Phi-3-medium instruct (128k)      | 0.017            | N/A                     | 0.068             | $0.17                            | N/A                                     | $0.68                             |
| Phi-3-mini instruct (4k)          | 0.013            | N/A                     | 0.052             | $0.13                            | N/A                                     | $0.52                             |
| Phi-3-mini instruct (128k)        | 0.013            | N/A                     | 0.052             | $0.13                            | N/A                                     | $0.52                             |
| Phi-3-small instruct (8k)         | 0.015            | N/A                     | 0.06              | $0.15                            | N/A                                     | $0.60                             |
| Phi-3-small instruct (128k)       | 0.015            | N/A                     | 0.06              | $0.15                            | N/A                                     | $0.60                             |
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

For accounts that use a custom model with a third-party model provider, billing is managed through the provider and is subject to the provider’s own pricing. For more information, see the official pricing documentation for your chosen provider.

## Opting in to paid usage

{% data reusables.github-models.production-rate-limits-note %}

Enterprises and organizations can opt in to paid usage to access expanded model capabilities, including increased request allowances and larger context windows. You can manage their spending by setting a budget.

By default, organizations and personal accounts that opt in to paid usage have a spending limit of $0 US dollars (USD) until the budget is increased.

For more information, see [AUTOTITLE](/billing/managing-your-billing/using-budgets-control-spending).

### How do I pay for {% data variables.product.prodname_github_models %}?

{% data variables.product.prodname_github_models %} usage can be paid for by one or more of the following methods:

* For enterprises, organizations, or personal accounts directly billed by {% data variables.product.github %}, the billing of {% data variables.product.prodname_github_models %} is based on your metered usage for each billing period, and pricing varies by the number of model requests, tokens, and the model multiplier.
    * For invoiced accounts, contact {% data variables.contact.contact_enterprise_sales %} to discuss billing for {% data variables.product.prodname_github_models %} usage.
* When using custom models with your own API keys, the billing of {% data variables.product.prodname_github_models %} is based on the model provider's pricing, and not {% data variables.product.github %}.
* Accounts with an existing Azure subscription can use that subscription to pay for model inference by bringing their own API key for custom models. In this case, billing is based on the model provider’s pricing and is managed through the Azure subscription. See [AUTOTITLE](/github-models/github-models-at-scale/set-up-custom-model-integration-models-byok).

> [!TIP]
> You are considered to be directly billed by {% data variables.product.github %} if you pay for {% data variables.product.github %} using a credit card, PayPal, or by invoice.

## Pricing for paid usage

{% data variables.product.prodname_github_models %} pricing is based on the number of token units used, at a fixed price of $0.00001 USD per token unit.

A token unit is calculated by multiplying the number of input and output tokens by their respective model multipliers. All model usage, regardless of the underlying provider or model, is measured in token units. While some providers display prices per 1,000 or per 1,000,000 tokens, {% data variables.product.prodname_github_models %} standardizes billing to the token unit level. This means you are billed using a single SKU and a unified price per token unit, no matter which supported model you use.

Your cost is calculated by multiplying the number of token units you use by the unified token unit price.

At the end of your billing cycle, {% data variables.product.github %} calculates the cost of token units used, starting from your first request after opting in to paid usage.

The number of model requests and tokens you have used are reset every billing cycle.

### Sample models cost calculation

The following table displays how the total cost is calculated for a request using OpenAI GPT-4o:

| Model         | Input tokens used | Output tokens used | Input multiplier | Output multiplier | Total token units | Price per token unit | Total cost |
|---------------| ----------------- | ------------------ | ---------------- | ----------------- |-------------------|----------------------|------------|
| OpenAI GPT-4o | 1,000,000         | 1,000,000          | 0.25             | 1                 | 1,250,000         | $0.00001             | $12.50     |

### Calculating model costs

The following steps demonstrate how the total cost is calculated:

1. **Calculate input tokens:**  
    Multiply the number of input tokens by the input multiplier.  
    `1,000,000 tokens × 0.25 = 250,000 input token units`

1. **Calculate billable output tokens:**  
    Multiply the number of output tokens by the output multiplier.  
    `1,000,000 tokens × 1 = 1,000,000 output token units`

1. **Add billable tokens:**  
    Add the billable input and output tokens.  
    `250,000 (input) + 1,000,000 (output) = 1,250,000 total token units`

1. **Charges by type:**  
   * **Input charge:** `250,000 × $0.00001 = $2.50`  
   * **Output charge:** `1,000,000 × $0.00001 = $10.00`

1. **Calculate the total cost:**  
    Multiply the total token units by the token unit price.  
    `1,250,000 × $0.00001 = $12.50 for this request`

## Opting out of paid usage

{% data variables.product.prodname_github_models %} billing is disabled by default for enterprises and organizations. An enterprise must enable paid usage before any organization within it can opt in to billing. Once an enterprise or organization has opted in to paid usage, the billing is enabled for all repositories owned by the enterprise or organization, including repositories owned by {% data variables.product.prodname_emus %} (EMUs).

Enterprises control whether paid usage for {% data variables.product.prodname_github_models %} is available to organizations they own. An enterprise must opt in to paid usage before any organization within it can opt in and be billed. If the enterprise disables billing, no organizations in the enterprise can enable or use paid features.

Organizations can opt out of paid usage by setting a budget, or instead choose to disable {% data variables.product.prodname_github_models %} entirely by disabling the product in the organization's settings, see [Controlling model usage in your organization](/github-models/github-models-at-scale/manage-models-at-scale#controlling-model-usage-in-your-organization).

If an enterprise has opted in to billing for {% data variables.product.prodname_github_models %}, but an organization within the enterprise has opted out of billing, then paid {% data variables.product.prodname_github_models %} usage is disabled for the organization, including for repositories owned by {% data variables.product.prodname_emus %} and the enterprise.

For personal repositories, a user's own settings determine whether paid usage is enabled, unless the user is managed by an enterprise (EMU). In that case, the enterprise’s settings apply.

For more information about the billing hierarchy between enterprises and organizations, see [AUTOTITLE](/billing/managing-the-plan-for-your-github-account/about-billing-for-plans).

## Further reading

* [AUTOTITLE](/billing/managing-billing-for-your-products/viewing-your-product-usage)
