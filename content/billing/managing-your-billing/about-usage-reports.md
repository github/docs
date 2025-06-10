---
title: About usage reports
intro: 'Learn how to request and understand a report that shows detailed {% data variables.product.github %} usage and billing information for your account.'
versions:
  feature: enhanced-billing-platform
type: how_to
topics:
  - Enterprise
  - Team
permissions: '{% data reusables.permissions.enhanced-billing-platform %}'
product: '{% data reusables.billing.enhanced-billing-platform-product %}'
---

The usage report shows detailed information about your account’s {% data variables.product.github %} usage, including how much of each SKU was used and the resulting billable amount.

To generate a usage report, see [AUTOTITLE](/billing/managing-your-billing/gathering-insights-on-your-spending).

## Usage report fields

The usage report contains the following fields.

| Field                     | Description |
|---------------------------|-------------|
| `date`                   | The day that the usage occurred. All usage is logged in UTC. |
| `product`                | The {% data variables.product.github %} product that was used. |
| `sku`                    | The specific {% data variables.product.github %} product SKU that was used. |
| `quantity`               | The amount of the SKU that was used. |
| `unit_type`              | The unit of measurement for the product SKU. |
| `applied_cost_per_quantity` | The unit cost of the product SKU. |
| `gross_amount`           | The amount of the product SKU that was used. |
| `discount_amount`        | The amount of usage that was discounted. Usage that is discounted as part of your account’s included usage is reflected in this field. Also includes discounts for {% data variables.product.prodname_actions %} usage for standard {% data variables.product.github %}-hosted runners in public repositories and for self-hosted runners. |
| `net_amount`             | The billable amount of usage after applying the `discount_amount`. This is the amount that your account will be billed. `gross_amount - discount_amount = net_amount`. |
| `username`               | The user associated with the usage, if applicable. |
| `organization`           | The organization associated with the usage, if applicable. |
| `repository`             | The repository associated with the usage, if applicable. |
| `workflow_path`          | The path of the {% data variables.product.prodname_actions %} workflow that generated the usage, if applicable. |
| `cost_center_name`       | The cost center associated with the usage, if applicable. |

### Deprecated report fields

{% data variables.product.github %} aims to minimize changes to the usage report structure, however at times the report structure or fields may change.

| Deprecated field   | Replacement         |
|--------------------|---------------------|
| `usage_at`         | Refer to `date` instead. |
| `workflow_name`    | Refer to `workflow_path` instead. |

## How usage is summarized

To reduce the size of the report, similar usage entries are grouped and totaled. The report summarizes the `quantity`, `gross_amount`, `discount_amount`, and `net_amount` fields based on the combination of the following values: `date`, `sku`, `username`, `workflow_path`, `repository`, `cost_center_name`.

## Receiving the report

Usage reports are sent via email to the default email address associated with your {% data variables.product.github %} account.
