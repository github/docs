---
title: GitHub Copilot billing through Azure
shortTitle: Azure billing
intro: 'Learn how metered billing for {% data variables.product.prodname_copilot %} works when you are connected to an Azure subscription, including billing cycles, invoicing, and usage tracking.'
versions:
  feature: copilot
topics:
  - Copilot
allowTitleToDifferFromFilename: true
contentType: reference
---

This article provides information about how {% data variables.product.prodname_copilot_short %} metered billing works when you connect an Azure subscription to your organization or enterprise account.

## Metered billing activation

* When you connect your Azure subscription and enable metered billing, usage data begins flowing from {% data variables.product.github %} to Azure.
* Any {% data variables.product.prodname_copilot_short %} usage from the start of your current {% data variables.product.github %} billing cycle up to the point when you enable metered billing via Azure will be billed through {% data variables.product.prodname_dotcom %} on your next billing date.
* Usage from the date Azure metered billing is enabled through to the end of that calendar month will be charged via Azure, and appears on your Azure invoice at the start of the next month.

For more information, see [AUTOTITLE](/billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription).

## Usage tracking and invoicing

* Usage data is transmitted from {% data variables.product.github %} to Azure **daily**.
* You can **track daily usage (number of seats) in Azure**.
* Actual billing and payments are processed **monthly**, based on the number of seats used during that calendar month.
