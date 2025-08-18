---
title: Usage reports reference
shortTitle: Usage reports
intro: 'Usage reports show detailed {% data variables.product.github %} usage and billing information for your account.'
allowTitleToDifferFromFilename: true
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
contentType: reference
---

The usage report shows detailed information about your account’s {% data variables.product.github %} usage, including how much of each SKU was used and the resulting billable amount.

To generate a usage report, see {% ifversion fpt or ghec %}[AUTOTITLE](/billing/managing-your-billing/gathering-insights-on-your-spending){% elsif ghes %}[AUTOTITLE](/enterprise-cloud@latest/billing/managing-your-billing/gathering-insights-on-your-spending) in the {% data variables.product.prodname_ghe_cloud %} documentation{% endif %}.

## Usage report types

There are two different types of report.

* Summarized reports can be requested for a maximum time frame of one year.
* Detailed reports can be requested for a maximum time frame of 31 days.

### Summarized report

The summarized usage report sums the `quantity`, `gross_amount`, `discount_amount`, and `net_amount` fields based on the combination of the following values: `date`, `sku`, `repository`, `cost_center_name`. If the usage report is for an enterprise with organizations, the amounts will be summarized by the organization value as well.

### Detailed report

The detailed usage report includes the same fields as the summarized report and adds `username` and `workflow_path`.

The detailed usage report sums the `quantity`, `gross_amount`, `discount_amount`, and `net_amount` fields based on the combination of the following values:  `date`, `sku`, `organization`, `repository`, `cost_center_name`, `username`, `workflow_path`.

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
| `username`               | The user associated with the usage, if applicable. Only available in the detailed report. |
| `organization`           | The organization associated with the usage, if applicable. |
| `repository`             | The repository associated with the usage, if applicable. |
| `workflow_path`          | The path of the {% data variables.product.prodname_actions %} workflow that generated the usage, if applicable. Only available in the detailed report. |
| `cost_center_name`       | The cost center associated with the usage, if applicable. |

### Report fields closing down

{% data variables.product.github %} aims to minimize changes to the usage report structure, however at times the report structure or fields may change.

| Closing down   | Replacement         |
|--------------------|---------------------|
| `usage_at`         | Refer to `date` instead. |
| `workflow_name`    | Refer to `workflow_path` instead. |

## Receiving the report

Usage reports are sent via email to the default email address associated with your {% data variables.product.github %} account.
