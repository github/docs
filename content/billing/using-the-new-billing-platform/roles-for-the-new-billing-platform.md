---
title: Roles for the new billing platform
intro: 'Learn about the different roles that can use the enhanced billing platform.'
versions:
  feature: enhanced-billing-platform
redirect_from:
  - /billing/using-the-enhanced-billing-platform-for-enterprises/roles-for-the-enhanced-billing-platform
type: reference
topics:
  - Enterprise
  - Team
product: '{% data reusables.billing.enhanced-billing-platform-product %}'
---

The following roles have access to the new billing platform: {% ifversion ghec %}enterprise owners, {% endif %}billing managers, and organization owners. {% ifversion fpt %}See "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."{% elsif ghec %}See "[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/roles-in-an-enterprise)."{% endif %}

{% ifversion ghec %}

## Enterprise owners and enterprise billing managers

You can:

* View all metered usage for your account and set budgets for your {% data variables.enterprise.enterprise_and_org %}.
* See enterprise usage, including costs for organizations and repositories.
* Download CSV usage reports for products your enterprise is using.
* Set budgets for your {% data variables.enterprise.enterprise_and_org %}.
* Create cost centers for all organizations within your enterprise.

{% endif %}

## Organization owners

You have full administrative access to your organization. You can:

* View metered usage and budgets for your organization and its repositories.
* Set budgets for the organization and its repositories.
* Download CSV usage reports.{% ifversion ghec %}
* Create cost centers by grouping repositories you manage.
* View promotions and discounts.
* View spending for pre-purchased user licenses for {% data variables.product.prodname_enterprise %} or {% data variables.product.prodname_GH_advanced_security %} based on your usage.
{% endif %}

{% ifversion fpt %}

## Organization billing managers

You can:

* View all metered usage for your organization its repositories.
* View organization-level budgets.
* Download CSV usage reports.

{% endif %}
