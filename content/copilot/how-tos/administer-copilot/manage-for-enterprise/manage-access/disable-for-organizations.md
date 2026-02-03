---
title: Disabling Copilot for organizations in your enterprise
shortTitle: Disable for organizations
intro: 'Disable {% data variables.product.prodname_copilot %} for some or all of the organizations in your enterprise.'
permissions: Enterprise owners
product: 'Enterprises with a {% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %} plan'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/managing-copilot/managing-copilot-for-your-enterprise/disabling-copilot-for-organizations-in-your-enterprise
  - /copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-access-to-copilot-in-your-enterprise/disabling-copilot-for-organizations-in-your-enterprise
  - /copilot/how-tos/administer/enterprises/managing-access-to-copilot-in-your-enterprise/disabling-copilot-for-organizations-in-your-enterprise
  - /copilot/how-tos/administer/enterprises/managing-access-to-copilot-in-your-enterprise/disable-for-organizations
  - /copilot/how-tos/administer/enterprises/manage-access/disable-for-organizations
  - /copilot/how-tos/administer/manage-for-enterprise/manage-access/disable-for-organizations
contentType: how-tos
category:
  - Manage Copilot for a team
---

When you disable {% data variables.product.prodname_copilot %} for organizations, organization owners cannot assign {% data variables.product.prodname_copilot %} licenses to members of their organization. Enterprise owners will still be able to assign {% data variables.copilot.copilot_business_short %} licenses to users and teams in the enterprise settings.

{% data reusables.enterprise-accounts.copilot-licensing %}
1. Next to "Organization access", choose whether to disable {% data variables.product.prodname_copilot_short %} for all organizations or allow for specific organizations.

   ![Screenshot of the the "Organization access" section, with the dropdown menu highlighted.](/assets/images/help/copilot/organization-access-menu.png)

1. If you selected **Allow for specific organizations**:

   1. Click the **Organizations** tab.
   1. Locate the organization for which you want to disable {% data variables.product.prodname_copilot_short %}.
   1. To the right of the organization name, select the **{% data variables.product.prodname_copilot_short %}** dropdown menu.
       * If your enterprise has a {% data variables.copilot.copilot_business_short %} plan, click **Disabled**.
       * If your enterprise has a {% data variables.copilot.copilot_enterprise_short %} plan, click **Remove access**.

Once {% data variables.product.prodname_copilot_short %} is disabled, licenses that are currently granted through the organization will be revoked at the end of the billing period. You will **not** be double-billed if a user also receives a license from your enterprise during this period.

## Further reading

* [AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)
* [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise)
