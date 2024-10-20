---
title: Disabling Copilot for organizations in your enterprise
shortTitle: Disable for organizations
intro: 'Disable {% data variables.product.prodname_copilot %} for some or all of the organizations in your enterprise.'
permissions: Enterprise owners
product: 'Enterprises with a subscription to {% data variables.product.prodname_copilot_enterprise_short %} or {% data variables.product.prodname_copilot_business_short %}'
versions:
  feature: copilot-enterprise
topics:
  - Copilot
redirect_from:
  - /copilot/managing-copilot/managing-copilot-for-your-enterprise/disabling-copilot-for-organizations-in-your-enterprise
---

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
1. In the "{% data variables.product.prodname_copilot_short %} is active in your enterprise" section, configure the access for your {% data variables.product.prodname_copilot %} subscription.
    * To disable {% data variables.product.prodname_copilot %} for all organizations in your enterprise, select **Disabled**.
    * To disable {% data variables.product.prodname_copilot %} for specific organizations, select **Allow for specific organizations**.

1. If you selected **Allow for specific organizations**:

   1. Under "Access management", locate the organization for which you want to disable {% data variables.product.prodname_copilot_short %}.
   1. To the right of the organization name, select the **Copilot** dropdown menu.
       * If your enterprise has a {% data variables.product.prodname_copilot_business_short %} subscription, click **Disabled**.
       * If your enterprise has a {% data variables.product.prodname_copilot_enterprise_short %} subscription, click **Remove access**.

## Further reading

* "[AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)"
* "[AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise)"
