---
title: Billing through Azure subscriptions
shortTitle: Azure billing
intro: 'Learn how billing works when you connect your {% data variables.product.github %} account to an Azure subscription.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Billing
  - Enterprise
allowTitleToDifferFromFilename: true
contentType: reference
---

You can connect an Azure subscription to your {% data variables.product.github %} account. When you do, charges for {% data variables.product.github %} products (such as {% data variables.product.prodname_copilot_short %}, {% data variables.product.prodname_actions %}, or {% data variables.product.prodname_codespaces %}) are billed through Azure instead of directly through {% data variables.product.github %}.

Connecting an Azure subscription allows you to consolidate invoices and manage {% data variables.product.github %} spending within your organization’s existing Azure billing processes.

For details on how to connect, see [AUTOTITLE](/billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription).

## Billing cycles and invoicing

* Azure billing periods run on a **calendar month**: from the first day to the last day of each month.
* Usage data from {% data variables.product.github %} is transmitted to Azure **daily**.
* Your charges for the month appear on your **Azure invoice at the start of the next month**.

If you enable Azure subscription billing in the middle of a {% data variables.product.github %} billing cycle:

* Usage before the switch is charged by {% data variables.product.github %} on your next {% data variables.product.github %} bill.
* Usage after the switch is charged by Azure, beginning from the date metered billing is enabled.

## Usage tracking

* Usage is measured daily and sent to Azure.
* The usage metric depends on the product:

  * **Copilot:** Number of active seats.
  * **Actions:** Minutes used.
  * **Codespaces:** Compute hours used.

## Payment methods

When you pay through Azure, your organization’s standard Azure payment methods apply. You will not be billed separately by {% data variables.product.github %} for the connected products.
