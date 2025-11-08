---
title: Billing reports reference
shortTitle: Billing reports
intro: 'Billing reports show detailed {% data variables.product.github %} usage, premium request usage, and billing information for your account.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Billing
  - Enterprise
  - Team
permissions: '{% data reusables.permissions.enhanced-billing-enterprise %}'
redirect_from:
  - /billing/managing-your-billing/about-usage-reports
  - /billing/reference/usage-reports
contentType: reference
---

Usage reports show detailed information about your account’s {% data variables.product.github %} usage, including how much of each SKU was used and the resulting billable amount.

To generate a usage report, see [AUTOTITLE](/billing/how-tos/products/view-productlicense-use#downloading-usage-reports).

## Report types

The following report types are available.

* Metered usage page:
   * **Summarized usage report**: A summary of usage for all paid products for a maximum period of one year.
   * **Detailed usage report**: A detailed usage report for all paid products for a maximum period of 31 days.
* Premium request analytics page:
   * **Premium requests usage report**: A detailed per-user breakdown of premium requests consumed for a maximum period of 31 days.
   * **Legacy premium request usage report**: A detailed, user-based report of premium request usage for the last 45 days.

### Summarized usage report

This report sums the `quantity`, `gross_amount`, `discount_amount`, and `net_amount` fields based on the combination of the following values: `date`, `sku`, `repository`, `cost_center_name`. If the usage report is for an enterprise with organizations, the amounts will be summarized by the organization value as well.

### Detailed usage report

The detailed usage report includes the same fields as the summarized report and adds `username` and `workflow_path`.

This report sums the `quantity`, `gross_amount`, `discount_amount`, and `net_amount` fields based on the combination of the following values:  `date`, `sku`, `organization`, `repository`, `cost_center_name`, `username`, `workflow_path`.

{% data reusables.billing.usage-reports-api-limitation %}

### Premium requests usage report

This report includes additional detail about premium request usage. The report sums the `quantity`, `gross_amount`, `discount_amount`, and `net_amount` fields based on the combination of the following values: `date`, `model`, `username`.

This report contains usage beginning October 01, 2025 00:00 UTC.

### Legacy premium request usage report

This report includes each recorded use of a premium request and includes the following fields: `Timestamp`,`User`,`Model`,`Requests Used`,`Exceeds Monthly Quota`, and `Total Monthly Quota`. The time period of the report is the most recent 45 days.

This report will be closing down on December 1, 2025, at which point all premium request usage activity will be available via the Premium requests usage report.

## Usage report fields

The usage reports contain the following fields.

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
| `net_amount`             | The billable amount of usage after applying the `discount_amount`. This is the amount that your account will be billed. `gross_amount - discount_amount = net_amount` |
| `username`               | The user associated with the usage, if applicable. <br><br> Not included in the `Summarized usage report`. |
| `organization`           | The organization associated with the usage, if applicable. |
| `repository`             | The repository associated with the usage, if applicable. |
| `workflow_path`          | The path of the {% data variables.product.prodname_actions %} workflow that generated the usage, if applicable. <br><br>Only available in the `Detailed usage report` |
| `cost_center_name`       | The cost center associated with the usage, if applicable. |
| `model`                  | The model used. This might be an LLM like `claude-sonnet-4`, or a product-specific model like `Code Review model`. <br><br>Only available in the `Premium request usage report` |
| `exceeds_quota`          | Indicates whether the premium request exceeds the user's monthly quota:<br>- `FALSE`: The request is covered by the monthly quota included in the user's plan.<br>- `TRUE`: The request exceeds the monthly quota and will be billed <br><br>Only available in the `Premium request usage report` |
| `total_monthly_quota`    | The number of requests included in the user's current plan. {% ifversion fpt or ghec %}See [AUTOTITLE](/copilot/concepts/billing/individual-plans) and [AUTOTITLE](/copilot/concepts/billing/organizations-and-enterprises).{% endif %} <br><br>Only available in the `Premium request usage report` |

## Receiving the report

Usage reports are sent via email to the default email address associated with your {% data variables.product.github %} account. You can only request one usage report per account at a time.

## Metered usage report fields that have closed down

{% data variables.product.github %} aims to minimize changes to the usage report structure, however at times the report structure or fields may change.

The following fields have been removed from the usage reports.

| Field   | Replacement         |
|--------------------|---------------------|
| `usage_at`         | Refer to `date` instead. |
| `workflow_name`    | Refer to `workflow_path` instead. |
