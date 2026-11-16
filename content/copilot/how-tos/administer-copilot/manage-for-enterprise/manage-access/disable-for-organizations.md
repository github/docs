---
title: Disabling Copilot for organizations in your enterprise
shortTitle: Disable for organizations
intro: 'Disable {% data variables.product.prodname_copilot %} for some or all of the organizations in your enterprise.'
permissions: Enterprise owners
product: 'Enterprises with a {% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %} plan'
versions:
  feature: copilot
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

This procedure applies to {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}. When you disable access for organizations, organization owners cannot assign licenses to their members. Enterprise owners can still assign {% data variables.copilot.copilot_business_short %} seats directly to users and teams in the enterprise settings.

For how seat assignment works with {% data variables.product.prodname_copilot_short %} access, see [AUTOTITLE](/copilot/concepts/billing-and-usage/organizations-and-enterprises/seats-and-billing-cycles#seat-assignment).

{% data reusables.enterprise-accounts.copilot-licensing %}
1. Next to "Organization access", choose whether to disable {% data variables.product.prodname_copilot_short %} for all organizations or allow for specific organizations.

   ![Screenshot of the "Organization access" section, with the dropdown menu highlighted.](/assets/images/help/copilot/organization-access-menu.png)

1. If you selected **Allow for specific organizations**:

   1. Click the **Organizations** tab.
   1. Locate the organization for which you want to disable {% data variables.product.prodname_copilot_short %}.
   1. To the right of the organization name, select the **{% data variables.product.prodname_copilot_short %}** dropdown menu.
       * If your enterprise has a {% data variables.copilot.copilot_business_short %} plan, click **Disabled**.
       * If your enterprise has a {% data variables.copilot.copilot_enterprise_short %} plan, click **Remove access**.

Once {% data variables.product.prodname_copilot_short %} is disabled, licenses that are currently granted through the organization will be revoked at the end of the billing period. You will **not** be double-billed if a user also receives a license from your enterprise during this period.

## Further reading

* [AUTOTITLE](/billing/concepts/product-billing/github-copilot-licenses)
* [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies)
