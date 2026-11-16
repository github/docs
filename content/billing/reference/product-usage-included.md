---
title: Product usage included with each plan
shortTitle: Product usage included
intro: Check the size of the allowance for usage-based products included in each GitHub plan.
versions:
  fpt: '*'
  ghec: '*'
contentType: reference
category:
  - Get started with billing
---

The table below shows the usage available in each plan. When you exceed these amounts, you'll be charged for additional usage unless you've set a budget with the setting "Stop usage when budget limit is reached" enabled. For more information, see [AUTOTITLE](/billing/how-tos/set-up-budgets).

<table>
  <tr>
    <th><b>Product</b></th>
    <th><b>Usage type</b></th>
    <th><b>{% data variables.product.prodname_free_user %}</b></th>
    <th><b>{% data variables.product.prodname_pro %}</b></th>
    <th><b>{% data variables.product.prodname_free_team %} for organizations</b></th>
    <th><b>{% data variables.product.prodname_team %}</b></th>
    <th><b>{% data variables.product.prodname_ghe_cloud %}</b></th>
  </tr>
  <tr>
    <th rowspan="2" scope="rowgroup"><b>{% data variables.product.prodname_actions %}</b></th>
    <th><b>Storage</b></th>
    <td>500 MB</td>
    <td>1 GB</td>
    <td>500 MB</td>
    <td>2 GB</td>
    <td>50 GB</td>
  </tr>
  <tr>
    <th><b>Included compute usage (per month)</b></th>
    <td>$12 USD</td>
    <td>$18 USD</td>
    <td>$12 USD</td>
    <td>$18 USD</td>
    <td>$300 USD</td>
  </tr>
   <tr>
    <th rowspan="2" scope="rowgroup"><b>{% data variables.product.prodname_github_codespaces %}</b></th>
    <th><b>Storage (per month)</b></th>
    <td>15 GB</td>
    <td>20 GB</td>
    <td>None</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <th><b>Core hours (per month)</b></th>
    <td>120</td>
    <td>180</td>
    <td>None</td>
    <td>None</td>
    <td>None</td>
  </tr>
  <tr>
    <th rowspan="2" scope="rowgroup"><b>{% data variables.product.prodname_registry %}</b></th>
    <th><b>Storage</b></th>
    <td>500 MB</td>
    <td>2 GB</td>
    <td>500 MB</td>
    <td>2 GB</td>
    <td>50 GB</td>
  </tr>
  <tr>
    <th><b>Data transfer (per month)</b></th>
    <td>1 GB</td>
    <td>10 GB</td>
    <td>1 GB</td>
    <td>10 GB</td>
    <td>100 GB</td>
  </tr>
  <tr>
    <th rowspan="2" scope="rowgroup"><b>{% data variables.large_files.product_name_long %}</b></th>
    <th><b>Storage (per month)</b></th>
    <td>10 GB</td>
    <td>10 GB</td>
    <td>10 GB</td>
    <td>250 GB</td>
    <td>250 GB</td>
  </tr>
  <tr>
    <th><b>Bandwidth (per month)</b></th>
    <td>10 GB</td>
    <td>10 GB</td>
    <td>10 GB</td>
    <td>250 GB</td>
    <td>250 GB</td>
  </tr>
</table>

> [!TIP]
> You can receive email notifications when your included usage reaches 90% and 100% during a billing period. To opt in, see [AUTOTITLE](/billing/how-tos/set-up-budgets#managing-included-usage-alerts).

The included compute usage is expressed as a monetary amount, not a quantity of minutes or other usage units. On all plans, the calculated cost of the following usage can draw from this amount:

* Standard {% data variables.actions.github_hosted_runners %} for private or internal repositories.
* Cloud sandbox compute and memory.

Where {% data variables.actions.hosted_runners %} are available, their cost can also draw from the included compute usage. This applies to billing accounts on {% data variables.product.prodname_team %} and {% data variables.product.prodname_ghe_cloud %}. For more information, see [AUTOTITLE](/billing/concepts/product-billing/github-actions).

For information about included requests for {% data variables.product.prodname_copilot %} plans, see [AUTOTITLE](/copilot/get-started/plans).
