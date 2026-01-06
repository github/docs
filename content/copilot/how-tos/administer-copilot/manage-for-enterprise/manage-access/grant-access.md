---
title: Granting users access to GitHub Copilot in your enterprise
shortTitle: Grant access
intro: 'Enable {% data variables.product.prodname_copilot_short %} for entire organizations or grant access directly to specific users.'
permissions: Enterprise owners
product: '{% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %}'
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
  - /copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/enable-for-organizations
contentType: how-tos
category:
  - Manage Copilot for a team
---

{% data reusables.copilot.enterprise-licensing %}

## Assigning licenses to users or teams

You can assign {% data variables.copilot.copilot_business_short %} licenses directly to users or enterprise teams.

When you assign licenses to an enterprise team, users receive or lose access to {% data variables.product.prodname_copilot_short %} when they are added or removed from the team. If you use {% data variables.product.prodname_emus %}, you can sync the team with an identity provider (IdP) group and manage licensing from your IdP.

### Prerequisites

* Set the **Policies for enterprise-assigned users** policy to define a default setting for these users when other enterprise policies are set to "No policy". See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies#defining-policies-for-your-enterprise).
* If you want to assign licenses to users who are not already in your enterprise, you must first invite the users (personal accounts) or provision them from your identity provider ({% data variables.product.prodname_emus %}). For personal accounts, see [AUTOTITLE](/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/invite-users-directly).
* If you want to assign a license to an enterprise team, you must create the team first. See [AUTOTITLE](/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams).

### Assigning licenses

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.billing.enterprise-billing-menu %}
1. In the left sidebar, click **Licensing**.
1. Next to "Copilot", click **Manage**.

   ![Screenshot of the Licensing page, with the "Manage" button highlighted in orange.](/assets/images/help/copilot/manage-licenses.png)

1. Click the **All members** or **Enterprise Teams** tab.
1. Click **Assign licenses**.
1. Search for users or teams, then click **Add licenses**.
1. Optionally, disable {% data variables.product.prodname_copilot_short %} for organizations to prevent organization owners from assigning licenses. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/disable-for-organizations).

## Enabling {% data variables.product.prodname_copilot_short %} for organizations

If your enterprise has a {% data variables.copilot.copilot_enterprise_short %} plan, you can assign licenses for either {% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %}.
{% data reusables.enterprise-accounts.copilot-licensing %}
1. Next to "Organization access", choose whether to enable {% data variables.product.prodname_copilot_short %} for all organizations or allow for specific organizations.

   ![Screenshot of the the "Organization access" section, with the dropdown menu highlighted.](/assets/images/help/copilot/organization-access-menu.png)

1. If you selected **Allow for specific organizations**:
    1. Click the **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations** tab.
    1. Locate the organization for which you want to enable {% data variables.product.prodname_copilot_short %}.
    1. To the right of the organization name, select the **{% data variables.product.prodname_copilot_short %}** dropdown menu.
       * If your enterprise has a {% data variables.copilot.copilot_business_short %} plan, click **Enabled**.
       * If your enterprise has a {% data variables.copilot.copilot_enterprise_short %} plan, click either **Copilot: Enterprise** or **Copilot: Business** to assign a specific Copilot plan to the organization.

### Next steps

After you've enabled {% data variables.product.prodname_copilot_short %} for an organization in your enterprise, owners of the organization can grant access to some or all members of the organization. See [AUTOTITLE](/copilot/managing-github-copilot-in-your-organization/managing-access-for-copilot-business-in-your-organization).

## Further reading

* [AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)
* [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise)
