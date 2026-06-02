---
title: Billing for {% data variables.copilot.sandbox %}
shortTitle: Cloud and local sandboxes
intro: 'Learn how usage of {% data variables.copilot.sandbox %} is measured and billed.'
versions:
  fpt: '*'
  ghec: '*'
contentType: concepts
category:
  - Understand product costs
---

{% data reusables.cli.public-preview-sandbox %}

## How {% data variables.copilot.sandbox %} usage is measured

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

The storage meter tracks snapshot storage for stopped sessions. When you stop {% data variables.copilot.sandbox_short %}, {% data variables.product.github %} retains a snapshot of the sandbox's state so you can resume it later. Snapshot storage is metered from the time the sandbox is stopped until the sandbox is deleted.

For more information about {% data variables.copilot.sandbox %}, see [AUTOTITLE](/copilot/concepts/about-cloud-and-local-sandboxes).

## Free and billed use

During public preview, eligible {% data variables.product.github %} accounts receive a **$10 monthly entitlement** to try cloud sandboxes. This entitlement is available for June 2026. Any usage beyond the monthly entitlement is billed to your account.

After the preview period ends, the entitlement no longer applies and all usage is billed.

## Paying for use

You pay for cloud sandboxes using the payment method set up for your {% data variables.product.github %} account. See [AUTOTITLE](/billing/how-tos/set-up-payment/manage-payment-info).

### Pricing

| Meter | Description | Unit | Price (USD) |
| --- | --- | --- |------------|
| Compute | Time that a cloud sandbox session is running. | Compute second | $0.000024 |
| Memory | Memory allocated to a cloud sandbox session while it is running. | GiB second | $0.000003 |
| Storage | Snapshot storage for stopped sessions. | GiB month | $0.005  |

## How costs are assigned to a billable account

Cloud sandbox usage is billed to the organization that owns the sandbox. When you create a cloud sandbox session with `copilot --cloud`, you are prompted to select the owning organization. All usage for that session is billed to the selected organization.

## Managing your budget for cloud sandboxes

{% data reusables.billing.default-over-quota-behavior %}

You can set budgets and alerts to monitor and control your cloud sandbox spending. For more information, see [AUTOTITLE](/billing/concepts/budgets-and-alerts) and [AUTOTITLE](/billing/how-tos/set-up-budgets).

When you create a budget for cloud sandboxes, you can choose between two budget types:

* **Product-level budget**: caps spending across all cloud sandbox usage, regardless of SKU.
* **SKU-level budget**: caps spending for a specific cloud sandbox SKU (for example, "Sandbox Linux"). For a full list of cloud sandbox SKUs, see [AUTOTITLE](/billing/reference/product-and-sku-names).

If you enable **Stop usage when budget limit is reached**, additional cloud sandbox usage is blocked once the budget reaches 100%, and a banner notifies users in the affected scope.

> [!NOTE]
> {% data variables.copilot.sandbox_caps %} is not part of the "Bundled AI credits" budget type. Bundled AI credits budgets apply only to SKUs that consume AI credits (such as {% data variables.product.prodname_copilot %} AI credits, cloud agent AI credits, and {% data variables.product.prodname_spark %} AI credits). To control cloud sandbox spending, use a product-level or SKU-level budget.

## Viewing your {% data variables.copilot.sandbox %} usage

To view your cloud sandbox usage, billable amounts, and the monthly preview entitlement, see [AUTOTITLE](/billing/how-tos/products/estimate-spending) and [AUTOTITLE](/billing/tutorials/gather-insights).

## Further reading

* [AUTOTITLE](/copilot/concepts/about-cloud-and-local-sandboxes)
* [AUTOTITLE](/copilot/concepts/agents/copilot-cli/about-copilot-cli)
* [AUTOTITLE](/billing/get-started/how-billing-works)
