---
title: Enabling Copilot for organizations in your enterprise
shortTitle: Enable for organizations
intro: 'Enable {% data variables.product.prodname_copilot %} for some or all of the organizations in your enterprise.'
permissions: Enterprise owners
product: 'Enterprises with a {% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %} plan'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/managing-copilot/managing-copilot-for-your-enterprise/enabling-copilot-for-organizations-in-your-enterprise
  - /copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-access-to-copilot-in-your-enterprise/enabling-copilot-for-organizations-in-your-enterprise
  - /copilot/how-tos/administer/enterprises/managing-access-to-copilot-in-your-enterprise/enabling-copilot-for-organizations-in-your-enterprise
  - /copilot/how-tos/administer/enterprises/managing-access-to-copilot-in-your-enterprise/enable-for-organizations
  - /copilot/how-tos/administer/enterprises/manage-access/enable-for-organizations
  - /copilot/how-tos/administer/manage-for-enterprise/manage-access/enable-for-organizations
contentType: how-tos
---

Owners of enterprises that have a {% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %} plan can enable {% data variables.product.prodname_copilot %} for all, none, or some organizations within the enterprise.

For enterprises with a {% data variables.copilot.copilot_enterprise_short %} plan, enterprise owners can choose to assign either {% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %} to individual organizations in the enterprise.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
1. In the "{% data variables.product.prodname_copilot_short %} is active in your enterprise" section, configure the access for your {% data variables.product.prodname_copilot %} plan.
    * To enable {% data variables.product.prodname_copilot %} for all organizations in your enterprise, both current and future, select **Allow for all organizations**.
    * To enable {% data variables.product.prodname_copilot %} for specific organizations, select **Allow for specific organizations**.

1. If you selected **Allow for specific organizations**:
    1. Under "Access management", locate the organization for which you want to enable {% data variables.product.prodname_copilot_short %}.
    1. To the right of the organization name, select the **Copilot** dropdown menu.
       * If your enterprise has a {% data variables.copilot.copilot_business_short %} plan, click **Enabled**.
       * If your enterprise has a {% data variables.copilot.copilot_enterprise_short %} plan, click either **Copilot: Enterprise** or **Copilot: Business** to assign a specific Copilot plan to the organization.

## Next steps

After you've enabled {% data variables.product.prodname_copilot_short %} for an organization in your enterprise, owners of the organization can grant access to some or all members of the organization. See [AUTOTITLE](/copilot/managing-github-copilot-in-your-organization/managing-access-for-copilot-business-in-your-organization).

## Further reading

* [AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)
* [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise)
