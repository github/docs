---
title: Disabling Copilot for organizations in your enterprise
shortTitle: Disable for organizations
intro: 'Disable {% data variables.product.prodname_copilot %} for some or all of the organizations in your enterprise.'
permissions: Enterprise admins
product: '{% data variables.product.prodname_copilot_enterprise_short %} or {% data variables.product.prodname_copilot_business_short %}'
versions:
  feature: copilot-enterprise
topics:
  - Copilot
---

{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
1. In the "{% data variables.product.prodname_copilot_short %} is active in your enterprise" section, configure the access for your {% data variables.product.prodname_copilot %} subscription.
    - To disable {% data variables.product.prodname_copilot %} for all organizations in your enterprise, select **Disabled**.
    - To disable {% data variables.product.prodname_copilot %} for specific organizations, select **Allow for specific organizations**.

1. If you selected **Allow for specific organizations**, select the organizations you want to disable {% data variables.product.prodname_copilot %} for. Then, click the **Set organization permissions** dropdown and select **Disable** to deny {% data variables.product.prodname_copilot %} access for the specified organizations.

   ![Screenshot of the {% data variables.product.prodname_copilot %} policy page. The organization permissions dropdown is outlined in dark orange.](/assets/images/help/copilot/set-org-permissions-enterprise.png)

1. Review your selection.
    - If you selected **Disabled**, you will see a warning that disabling {% data variables.product.prodname_copilot %} will revoke access for all organizations and members. To confirm, click **Confirm and save**.
    - If you selected **Allow for specific organizations**, click **Save**.
