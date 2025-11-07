---
title: Upgrading GitHub Copilot for your enterprise
shortTitle: Upgrade plan
intro: 'Change your organizations'' plans from {% data variables.copilot.copilot_business_short %} to {% data variables.copilot.copilot_enterprise_short %}.'
permissions: Enterprise owners
product: 'Enterprises with a {% data variables.copilot.copilot_business_short %} plan'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/managing-copilot/managing-copilot-for-your-enterprise/upgrading-copilot-for-your-enterprise
  - /copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-the-copilot-subscription-for-your-enterprise/upgrading-copilot-for-your-enterprise
  - /copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-the-copilot-plan-for-your-enterprise/upgrading-copilot-for-your-enterprise
  - /copilot/how-tos/administer/enterprises/managing-the-copilot-plan-for-your-enterprise/upgrading-copilot-for-your-enterprise
  - /copilot/how-tos/administer/enterprises/managing-the-copilot-plan-for-your-enterprise/upgrade-plan
  - /copilot/how-tos/administer/enterprises/manage-plan/upgrade-plan
  - /copilot/how-tos/administer/manage-for-enterprise/manage-plan/upgrade-plan
contentType: how-tos
category: 
  - Manage Copilot for a team
---

>[!NOTE]
> You must already have a paid {% data variables.copilot.copilot_business_short %} plan to upgrade to {% data variables.copilot.copilot_enterprise_short %}. Trial plans are not eligible for upgrade.

{% data reusables.enterprise-accounts.copilot-licensing %}
1. Click the **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations** tab.
1. Locate the organization for which you want to upgrade {% data variables.product.prodname_copilot_short %}.
1. To the right of the organization name, select the **{% data variables.product.prodname_copilot_short %}** dropdown menu, and click **{% data variables.copilot.copilot_enterprise_short %}**.

## Next steps

After upgrading to {% data variables.copilot.copilot_enterprise_short %}, you can assign {% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %} to individual organizations in the enterprise. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-access-to-copilot-in-your-enterprise/enabling-copilot-for-organizations-in-your-enterprise).

## Troubleshooting plan migrations

When transitioning between different {% data variables.product.prodname_copilot_short %} plans, you may encounter situations that require support.

### Trial expiration notices

If you see a trial expiration notice but have an active paid subscription, this is a display issue and does not affect your access. If this persists, contact {% data variables.contact.contact_support_page %}.

### Migrations requiring support assistance

Some migrations cannot be completed through self-service options.

* **Changing between {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}**: If you need to migrate between these plans within your enterprise and the option isn't available in your "Billing & Licensing" settings, contact {% data variables.contact.contact_support_page %} or your account manager for assistance.
* **Non-enterprise to enterprise environment migrations**: When moving from standalone {% data variables.product.prodname_copilot_short %} plans to a {% data variables.product.prodname_enterprise %} environment, contact {% data variables.contact.contact_support_page %} or your account manager for assistance to avoid service interruption.

## Further reading

* [AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)
