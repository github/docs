---
title: GitHub Copilot billing through Azure
shortTitle: Azure billing
intro: 'Learn how metered billing for {% data variables.product.prodname_copilot %} works when you are connected to an Azure subscription, including billing cycles, invoicing, and usage tracking.'
versions:
  feature: copilot
category:
  - Learn about Copilot
allowTitleToDifferFromFilename: true
contentType: reference
---

You can connect an Azure subscription to your organization or enterprise account and pay for {% data variables.product.prodname_copilot_short %} through Azure.

{% data variables.product.prodname_copilot_short %} billing follows the same rules as other {% data variables.product.github %} products billed through Azure, including billing periods, invoicing, and usage reporting. For details, see [AUTOTITLE](/billing/reference/azure-billing).

## {% data variables.product.prodname_copilot_short %}-specific usage

* {% data variables.product.prodname_copilot_short %} license usage is measured as the **number of active seats**.
* If your enterprise exceeds its included pool of {% data variables.product.prodname_ai_credits_short %}, the cost of any additional usage is included.
* Usage data is sent daily to Azure.
* Charges for the calendar month appear on your Azure invoice at the start of the next month.

To connect your Azure subscription, see [AUTOTITLE](/billing/how-tos/set-up-payment/connect-azure-sub).

## Troubleshooting Copilot activation

If your enterprise is connected to an Azure subscription, but the **Enable** button is disabled or you see "GitHub Copilot is currently unavailable for accounts billed through Azure," self-service activation may be unavailable for your enterprise. This warning does not always mean that Azure billing is unsupported for {% data variables.product.prodname_copilot_short %}.

Do not disconnect Azure or move to direct {% data variables.product.github %} billing based on this warning alone. Contact {% data variables.contact.contact_support_page %} so they can review your account and help with activation while you keep Azure billing.
