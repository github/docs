---
title: Billing for cloud and local sandboxes for {% data variables.product.prodname_copilot %}
shortTitle: Cloud and local sandboxes
intro: 'Learn how usage of {% data variables.product.prodname_copilot_short %} cloud and local sandboxes is measured and billed.'
versions:
  fpt: '*'
  ghec: '*'
contentType: concepts
category:
  - Understand product costs
---

## How sandbox usage is measured

Billing applies to cloud sandboxing only. Local sandboxing is included in the standard {% data variables.product.prodname_copilot %} seat at no additional cost.

A cloud sandbox session incurs charges across three meters:

* **Compute**: the time a cloud sandbox session is running.
* **Memory**: the memory allocated to a cloud sandbox session while it is running.
* **Storage**: snapshot storage for stopped sessions.

Usage is measured from the moment a session starts until it is stopped or deleted. Memory is measured based on the memory allocated to the session, not the memory actively in use.

### Compute

The compute meter tracks the time a cloud sandbox is running. Compute is not metered while a sandbox is stopped.

### Memory

The memory meter tracks the memory allocated to a cloud sandbox while it is running. Memory is not metered while a sandbox is stopped.

### Storage

The storage meter tracks snapshot storage for stopped sessions. When you stop a cloud sandbox, {% data variables.product.github %} retains a snapshot of the sandbox's state so you can resume it later. Snapshot storage is metered from the time the sandbox is stopped until the sandbox is deleted.

For more information about cloud and local sandboxes, see [AUTOTITLE](/copilot/concepts/security-governance-and-network-settings/about-cloud-sandboxes) and [AUTOTITLE](/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes).

## Free and billed use

{% data reusables.billing.compute-allowance-model %}

For example, suppose a cloud sandbox runs for 600 seconds with 4 GiB of memory. At the published rates below:

* The compute cost is 600 compute seconds × $0.000024 USD, or $0.0144 USD.
* The memory cost is 2,400 GiB-seconds (4 GiB × 600 seconds) × $0.000003 USD, or $0.0072 USD.
* A total of $0.0216 USD is deducted from the account's included compute usage.

This example shows how usage measured in seconds and GiB-seconds draws from the same monetary value as runner usage measured in minutes. For the amount included with each plan, see [AUTOTITLE](/billing/reference/product-usage-included).

## Paying for use

You pay for cloud sandboxes using the payment method set up for your {% data variables.product.github %} account. See [AUTOTITLE](/billing/how-tos/set-up-payment/manage-payment-info).

### Pricing

| Meter | Description | Unit | Price (USD) |
| --- | --- | --- |------------|
| Compute | Time that a cloud sandbox session is running. | Compute second | $0.000024 |
| Memory | Memory allocated to a cloud sandbox session while it is running. | GiB second | $0.000003 |
| Storage | Snapshot storage for stopped sessions. | GiB month | $0.005  |

## How costs are assigned to a billable account

Cloud sandbox usage is billed to the account that owns the sandbox:

* **Sessions that work in repositories**: A session can work across multiple repositories, as long as they all have the same owner. That owner is billed, whether it's your personal account or an organization.
* **Sessions that don't work in a repository**: The account you choose as the owner is billed. You can choose your personal account or an organization you belong to. If you don't choose an owner, your personal account is billed.

For example, if you start a session with `copilot --cloud` when you aren't in a Git repository, {% data variables.copilot.copilot_cli_short %} prompts you to select an owner. Your personal account is listed first, ahead of any organizations you belong to. All usage for that session is billed to the account you select.

## Managing your budget for cloud sandboxes

{% data reusables.billing.default-over-quota-behavior %}

You can set budgets and alerts to monitor and control your cloud sandbox spending. For more information, see [AUTOTITLE](/billing/concepts/budgets-and-alerts) and [AUTOTITLE](/billing/how-tos/set-up-budgets).

When you create a budget for cloud sandboxes, you can choose between two budget types:

* **Product-level budget**: caps spending across all cloud sandbox usage, regardless of SKU.
* **SKU-level budget**: caps spending for a specific cloud sandbox SKU (for example, "Sandboxes for {% data variables.product.prodname_copilot %}: Linux"). For a full list of cloud sandbox SKUs, see [AUTOTITLE](/billing/reference/product-and-sku-names).

If you enable **Stop usage when budget limit is reached**, additional cloud sandbox usage is blocked once the budget reaches 100%, and a banner notifies users in the affected scope.

> [!NOTE]
> Cloud sandboxes for {% data variables.product.prodname_copilot %} are not part of the "Bundled AI credits" budget type. Bundled AI credits budgets apply only to SKUs that consume AI credits (such as {% data variables.product.prodname_copilot %} AI credits, cloud agent AI credits, and {% data variables.product.prodname_spark %} AI credits). To control cloud sandbox spending, use a product-level or SKU-level budget.

## Viewing your cloud sandbox usage

To view your cloud sandbox usage, billable amounts, and remaining included compute usage, see [AUTOTITLE](/billing/how-tos/products/estimate-spending) and [AUTOTITLE](/billing/tutorials/gather-insights).

## Further reading

* [AUTOTITLE](/copilot/concepts/security-governance-and-network-settings/about-cloud-sandboxes)
* [AUTOTITLE](/copilot/concepts/about-cloud-and-local-sandboxes)
* [AUTOTITLE](/copilot/concepts/agents/copilot-cli/about-copilot-cli)
* [AUTOTITLE](/billing/get-started/how-billing-works)
