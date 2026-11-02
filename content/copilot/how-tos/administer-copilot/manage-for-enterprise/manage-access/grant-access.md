---
title: Giving users GitHub Copilot in your enterprise
shortTitle: Grant access
intro: 'Enable {% data variables.product.prodname_copilot_short %} for entire organizations or grant access directly to specific users.'
permissions: Enterprise owners
product: '{% data reusables.copilot.enterprise-billing-availability %}'
versions:
  feature: copilot
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

## Prerequisites

Confirm which {% data variables.product.prodname_copilot_short %} plan or billing model your enterprise uses. For a comparison of the enterprise options, see [AUTOTITLE](/copilot/get-started/plans#organization-and-enterprise-plans).

Before assigning seats, configure policies, budgets, and network requirements. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/set-up-copilot/enable-copilot/set-up-for-enterprise).

## Options for assigning {% data variables.product.prodname_copilot %}

Users must receive an assigned {% data variables.product.prodname_copilot_short %} seat, regardless of billing model.

The available assignment methods depend on your enterprise's plan or billing model.

## Assigning seats directly

With {% data variables.product.prodname_copilot_short %} access or {% data variables.copilot.copilot_business_short %}, enterprise owners can assign seats directly to individual members or enterprise teams. With {% data variables.product.prodname_copilot_short %} access, you can also assign seats to all members of an organization. For guidance on organizing members before assignment, see [AUTOTITLE](/enterprise-cloud@latest/admin/concepts/enterprise-best-practices/organize-work).

When you assign seats to an enterprise team, each member receives a seat. Users receive or lose access when they are added or removed from the team. If you use {% data variables.product.prodname_emus %}, you can sync the team with an identity provider (IdP) group and manage licensing from your IdP.

### Prerequisites

* Set **Policies for enterprise-assigned users** to define whether policies set to "Let organizations decide" default to enabled or disabled for directly assigned users. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies#defining-policies-for-your-enterprise).
* If you want to assign seats to users who are not already in your enterprise, first invite the users (personal accounts) or provision them from your IdP ({% data variables.product.prodname_emus %}). For personal accounts, see [AUTOTITLE](/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/add-users).
* If you want to assign seats to an enterprise team, create the team first. See [AUTOTITLE](/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams).

### Assigning seats

With {% data variables.product.prodname_copilot_short %} access, members without a {% data variables.product.prodname_ghe_cloud %} license receive {% data variables.copilot.copilot_standalone_short %} at {% data variables.copilot.copilot_standalone_price_per_month %} per month. Review the access charges before confirming an assignment.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.billing.enterprise-billing-menu %}
1. In the left sidebar, click **Licensing**.
1. Open seat management for your billing model:

   * With {% data variables.product.prodname_copilot_short %} access, click **Manage** in the "{% data variables.product.prodname_copilot_short %} access" section.
   * With {% data variables.copilot.copilot_business_short %}, click **Manage** next to "Copilot".

1. Start an assignment:

   * With {% data variables.product.prodname_copilot_short %} access, on the **All members** tab, click **Assign access**.
   * With {% data variables.copilot.copilot_business_short %}, click the **All members** or **Enterprise Teams** tab, then click **Assign licenses**.

1. Select the recipients and confirm the assignment:

   * With {% data variables.product.prodname_copilot_short %} access, search for and select the members, then click **Review access**. Review the selected members, any {% data variables.copilot.copilot_standalone_short %} charges, and the total monthly access cost. Usage is metered and billed separately. To confirm, click **Assign access**.
   * With {% data variables.copilot.copilot_business_short %}, search for users or teams, then click **Add licenses**.

With {% data variables.copilot.copilot_business_short %}, you can also prevent organization owners from assigning licenses by disabling access for organizations. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/disable-for-organizations).

## Enabling {% data variables.product.prodname_copilot_short %} for organizations

With {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %}, enterprise owners can enable access for organizations so organization owners can assign seats to their members.

If your enterprise has a {% data variables.copilot.copilot_enterprise_short %} plan, you can assign licenses for either {% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %}.
{% data reusables.enterprise-accounts.copilot-licensing %}
1. Next to "Organization access", choose whether to enable {% data variables.product.prodname_copilot_short %} for all organizations or allow for specific organizations.

   ![Screenshot of the "Organization access" section, with the dropdown menu highlighted.](/assets/images/help/copilot/organization-access-menu.png)

1. If you selected **Allow for specific organizations**:
    1. Click the **{% octicon "organization" aria-hidden="true" aria-label="organization" %} Organizations** tab.
    1. Locate the organization for which you want to enable {% data variables.product.prodname_copilot_short %}.
    1. To the right of the organization name, select the **{% data variables.product.prodname_copilot_short %}** dropdown menu.
       * If your enterprise has a {% data variables.copilot.copilot_business_short %} plan, click **Enabled**.
       * If your enterprise has a {% data variables.copilot.copilot_enterprise_short %} plan, click either **Copilot: Enterprise** or **Copilot: Business** to assign a specific Copilot plan to the organization.

After you've enabled {% data variables.product.prodname_copilot_short %} for an organization in your enterprise, owners of the organization can grant access to some or all members of the organization. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/manage-access/grant-access).

## Removing member seats

With {% data variables.product.prodname_copilot_short %} access, the member-level **Remove access** action removes a member's seat, including assignments inherited from default, enterprise team, or organization settings. You do not need to remove the member from those teams or organizations. The member can still use {% data variables.product.prodname_copilot_short %} until the end of the billing cycle.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.billing.enterprise-billing-menu %}
1. In the left sidebar, click **Licensing**.
1. In the "{% data variables.product.prodname_copilot_short %} access" section, click **Manage**.
1. On the **All members** tab, find the member whose seat you want to remove.
1. For that member, use **Remove access**.

For billing and access effects, see [AUTOTITLE](/copilot/reference/copilot-billing/license-changes#copilot-access).

## Next steps

After assigning access, ask developers to sign in with the account that has their enterprise-provided license. See [AUTOTITLE](/copilot/get-started/quickstart-for-using-github-copilot-in-your-ide).
