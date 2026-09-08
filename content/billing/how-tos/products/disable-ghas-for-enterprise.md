---
title: Disabling GitHub Advanced Security for your enterprise
intro: Disable {% data variables.product.prodname_GHAS %} and prevent accidental re-enablement across your enterprise.
permissions: Enterprise owners
versions:
  feature: disable-ghas-button
shortTitle: Disable GHAS for enterprise
contentType: how-tos
category:
  - Manage your plan and licenses
---

If you want to immediately disable {% data variables.product.prodname_GHAS %} in all repositories, prevent organizations from re-enabling it and avoid unexpected billing charges, you can use the **Disable {% data variables.product.prodname_AS %}** option available in the enterprise licensing page. This is different from canceling your {% data variables.product.prodname_AS %} subscription:

* **Canceling your subscription** stops future billing but does not disable {% data variables.product.prodname_GHAS %} in repositories or prevent re-enablement.
* **Disabling {% data variables.product.prodname_AS %}** immediately disables {% data variables.product.prodname_GHAS %} in all private and internal repositories and sets a policy to prevent future paid adoption.

## Disabling {% data variables.product.prodname_GHAS %} across your enterprise

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.billing.enterprise-billing-menu %}
{% data reusables.billing.click-licensing %}
1. To the right of "{% data variables.product.prodname_AS %}," click **Manage** and select the **Disable {% data variables.product.prodname_AS %}** option.
1. In the modal dialog that is displayed, click **Disable {% data variables.product.prodname_AS %}** to confirm.

   To re-enable {% data variables.product.prodname_GHAS %}, you'll need to update the policies for this feature in the **Policies** tab of your enterprise.

## What happens to my bill?

Once you have disabled {% data variables.product.prodname_GHAS %}:

* If you use **volume billing**, you agreed to a number of licenses and billing period upfront. You'll continue to pay for the rest of this period.
* If you use **metered billing**, you pay based on usage, and your billing will stop from next month. However, you _will_ continue paying for any licenses you've already consumed this month until the end of the month.

  For example, if you had 10 licenses in use and disabled {% data variables.product.prodname_GHAS %} on the second day of the month, you will still be billed for your 10 licenses for the full month instead of just for the two days.
