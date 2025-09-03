---
title: GitHub Models billing
shortTitle: GitHub Models
intro: 'If you want to use {% data variables.product.prodname_github_models %} beyond the free usage included in your account, you can choose to opt in to paid usage.'
versions:
  feature: github-models
topics:
  - Enterprise
  - Billing
redirect_from:
  - /billing/managing-billing-for-your-products/about-billing-for-github-models
contentType: concepts
---

> [!NOTE]
> * {% data variables.product.prodname_github_models %} for organizations and repositories is in {% data variables.release-phases.public_preview %} and subject to change.
> * Billing for {% data variables.product.prodname_github_models %} is separate from billing for {% data variables.product.prodname_copilot %}. For more information about how models in {% data variables.product.prodname_copilot %} are billed, see [AUTOTITLE](/billing/managing-billing-for-your-products/about-billing-for-github-copilot).

## How use of {% data variables.product.prodname_github_models %} is measured

Each {% data variables.product.github %} account receives a certain amount of included **free but rate-limited** usage of {% data variables.product.prodname_github_models %}, see [Rate limits](/github-models/use-github-models/prototyping-with-ai-models#rate-limits).

For usage beyond the free quota, the cost is calculated by multiplying the number of **token units** you use by the unified token unit price.

The number of model requests and tokens you have used is reset after each billing cycle.

### Token units

A token unit is calculated by multiplying the number of input and output tokens by their respective model multipliers. All model usage, regardless of the underlying provider or model, is measured in token units. While some providers display prices per 1,000 or per 1,000,000 tokens, {% data variables.product.prodname_github_models %} standardizes billing to the token unit level. This means you are billed using a single SKU and a unified price per token unit, no matter which supported model you use. See [AUTOTITLE](/billing/reference/models-multipliers-and-costs).

### Example calculation

The following table displays how the total cost is calculated for a request using OpenAI GPT-4o:

| Model         | Input tokens used | Output tokens used | Input multiplier | Output multiplier | Total token units | Price per token unit | Total cost |
|---------------| ----------------- | ------------------ | ---------------- | ----------------- |-------------------|----------------------|------------|
| OpenAI GPT-4o | 1,000,000         | 1,000,000          | 0.25             | 1                 | 1,250,000         | $0.00001             | $12.50     |

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

## Free use of {% data variables.product.prodname_github_models %}

All {% data variables.product.github %} accounts have rate-limited access to {% data variables.product.prodname_github_models %} at no cost. These limits vary by model and are designed to support prototyping and experimentation. Limits also vary according to your {% data variables.product.prodname_copilot %} plan.

Free usage includes:
* Access to all supported models in the catalog
* Rate-limited requests per model
* Usage from the {% data variables.product.prodname_marketplace %} catalog

For full details of rate limits and quotas, see [Rate limits](/github-models/use-github-models/prototyping-with-ai-models#rate-limits).

> [!TIP]
> If you use custom models from third-party providers with your own API keys, there is no impact on your bill in {% data variables.product.github %}. See [AUTOTITLE](/github-models/github-models-at-scale/set-up-custom-model-integration-models-byok).

## Using more than your included quota

If your account does not have a valid payment method on file or paid use is not enabled for your account, usage is blocked once you use up your quota.

### Opting in or out of paid usage

{% data variables.product.prodname_github_models %} billing is disabled by default for enterprises and organizations. An enterprise must enable paid usage before any organization within it can opt in to billing. Once an enterprise or organization has opted in to paid usage, the billing is enabled for all repositories owned by the enterprise or organization, including repositories owned by {% data variables.product.prodname_emus %} (EMUs).

For personal repositories, a user's own settings determine whether paid usage is enabled, unless the user is managed by an enterprise (EMU). In that case, the enterprise's settings apply.

* [AUTOTITLE](/github-models/github-models-at-scale/manage-models-at-scale)
* [AUTOTITLE](/github-models/about-github-models#enabling-github-models)

> [!NOTE]
> If an enterprise has opted in to billing for {% data variables.product.prodname_github_models %}, but an organization within the enterprise has opted out of billing, then paid {% data variables.product.prodname_github_models %} usage is disabled for the organization, including for repositories owned by {% data variables.product.prodname_emus %} and the enterprise.

## Paying for {% data variables.product.prodname_github_models %} use

You pay for additional use of {% data variables.product.prodname_github_models %} with the payment method set up for your {% data variables.product.github %} account. See [AUTOTITLE](/billing/how-tos/set-up-payment/manage-payment-info).

{% data variables.product.prodname_github_models %} pricing is based on the number of token units used, at a fixed price of $0.00001 USD per token unit.

At the end of your billing cycle, {% data variables.product.github %} calculates the cost of token units used, starting from your first request after opting in to paid usage. See [AUTOTITLE](/billing/managing-billing-for-your-products/viewing-your-product-usage).

{% data variables.product.prodname_github_models %} usage can be paid for by one or more of the following methods:

* For enterprises, organizations, or personal accounts directly billed by {% data variables.product.github %}, the billing of {% data variables.product.prodname_github_models %} is based on your metered usage for each billing period, and pricing varies by the number of model requests, tokens, and the model multiplier.
    * For invoiced accounts, contact {% data variables.contact.contact_enterprise_sales %} to discuss billing for {% data variables.product.prodname_github_models %} usage.
* Accounts with an existing Azure subscription can use that subscription to pay for model inference by bringing their own API key for custom models. In this case, billing is based on the model provider’s pricing and is managed through the Azure subscription. See [AUTOTITLE](/github-models/github-models-at-scale/set-up-custom-model-integration-models-byok).

You are considered to be directly billed by {% data variables.product.github %} if you pay for {% data variables.product.github %} using a credit card, PayPal, or by invoice.

## Managing your budget for {% data variables.product.prodname_github_models %}

{% data reusables.github-models.production-rate-limits-note %}

Enterprises and organizations can opt in to paid usage to access expanded model capabilities, including increased request allowances and larger context windows. You can manage their spending by setting a budget.

Enterprises, organizations and personal accounts may have default budgets to limit spending. Check the budgets for your account to ensure they are appropriate for your usage needs.

{% data reusables.billing.migrated-budgets %}

For more information, see [AUTOTITLE](/billing/managing-your-billing/using-budgets-control-spending).

## Further reading

* [AUTOTITLE](/github-models/about-github-models)
* [AUTOTITLE](/github-models/github-models-at-scale/manage-models-at-scale)
