---
title: Roles for the new billing platform
intro: 'Learn about the different roles that can use the new billing platform.'
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

In an {% data variables.enterprise.enterprise_and_org %}, the following roles have access to the new billing platform: {% ifversion ghec %}enterprise owners, {% endif %}billing managers, and organization owners. {% ifversion fpt %}See [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization).{% elsif ghec %}See [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/roles-in-an-enterprise).{% endif %}

{% ifversion fpt %}Personal accounts also have access to the new billing platform for their personal usage.{% endif %}

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

## Inviting a billing manager

The invited person will receive an invitation email asking them to become a billing manager for your {% ifversion ghec %}enterprise{% endif %}{% ifversion fpt %} organization{% endif %}. Once the invited person clicks the accept link in their invitation email, they will automatically be added to the {% ifversion ghec %}enterprise{% endif %}{% ifversion fpt %} organization{% endif %} as a billing manager. If they don't already have a {% data variables.product.prodname_dotcom %} account, they will be directed to sign up for one, and they will be automatically added to the {% ifversion ghec %}enterprise{% endif %}{% ifversion fpt %} organization{% endif %} as a billing manager after they create an account.

{% data reusables.user-settings.access_settings %}
1. In the "Access" section of the sidebar, click **{% octicon "organization" aria-hidden="true" %} Organizations**.
{% data reusables.profile.org_settings %}
1. If you are an organization owner, in the "Access" section of the sidebar, click **{% octicon "credit-card" aria-hidden="true" %} Billing and plans**.
1. Click the link in the text box, **Enterprise account billing settings**, which will direct you to your organizations billing settings page.
1. On the left side of the page, in the enterprise account sidebar, click **{% octicon "person" aria-hidden="true" %} People**.
1. Under "People", click **Administrators**.
1. Above the list of administrators, click **Invite admin**.
1. Type the username, full name, or email address of the person you want to invite, then select the appropriate person from the results.
1. Select **Billing Manager**.
1. Click **Send Invitation**.
