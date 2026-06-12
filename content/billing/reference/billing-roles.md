---
title: Roles for the billing platform
shortTitle: Billing roles
intro: Learn about the different roles that can view and manage billing settings.
versions:
  feature: enhanced-billing-platform
redirect_from:
  - /billing/using-the-enhanced-billing-platform-for-enterprises/roles-for-the-enhanced-billing-platform
  - /billing/using-the-new-billing-platform/roles-for-the-new-billing-platform
  - /billing/managing-your-billing/roles-for-the-new-billing-platform
contentType: reference
category:
  - Get started with billing
---

The following roles have access to the billing platform:

* **Enterprise owners and enterprise billing managers**: Can manage billing for an enterprise account.
* **Organization owners and organization billing managers**: Can manage billing for an organization on {% data variables.product.prodname_free_team %} or {% data variables.product.prodname_team %}.

  > [!NOTE]
  > If your organization is owned by an enterprise account, you cannot add billing managers at the organization level. Billing for enterprise-owned organizations is managed at the enterprise level.

* **Personal accounts (non-managed)**: Can access the billing platform for their personal usage.

To add a billing manager, see:

* [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization#inviting-a-billing-manager)
* [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)

## Organization owners

You have full administrative access to your organization. You can:

* View metered usage and budgets for your organization and its repositories.
* Set budgets for the organization and its repositories.
* Download CSV usage reports.
* View promotions and discounts.
* View spending for pre-purchased user licenses for {% data variables.product.prodname_AS %} based on your usage.

## Organization billing managers

You can:

{% data reusables.billing.org-billing-manager-permissions %}

## Enterprise owners and enterprise billing managers

You can:

* View all metered usage for your account and set budgets for your {% data variables.enterprise.enterprise_and_org %}.
* See enterprise usage, including costs for organizations and repositories.
* Download CSV usage reports for products your enterprise is using.
* Set budgets for your enterprise.
* Create cost centers for all organizations within your enterprise.
* View and manage user licenses.
* Manage other billing settings, such as payment methods and billing contacts.

## Further reading

* [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)
* [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/roles-in-an-enterprise)
