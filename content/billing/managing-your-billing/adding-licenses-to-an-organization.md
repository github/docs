---
title: Adding licenses to an organization
intro: Learn how to add {% ifversion enterprise-licensing-language %}licenses{% else %}licensed seats{% endif %} to your {% ifversion fpt %} personal or organization{% elsif ghec %}enterprise{% endif %} account using the new billing platform.
versions:
  feature: enhanced-billing-platform
redirect_from:
  - /billing/using-the-enhanced-billing-platform-for-enterprises/adding-seats-to-your-enterprise-account
  - /billing/using-the-new-billing-platform/adding-seats-to-your-enterprise-account
  - /billing/using-the-new-billing-platform/adding-seats-to-your-account
  - /billing/using-the-new-billing-platform/adding-licenses-to-your-account
  - /billing/using-the-new-billing-platform/managing-licenses-and-plans-for-your-account
type: overview
topics:
  - Enterprise
  - Team
permissions: '{% data reusables.permissions.enhanced-billing-platform %}'
shortTitle: Manage licenses {% ifversion fpt %}and plans{% endif %}
allowTitleToDifferFromFilename: true
---

{% ifversion ghec %}
>[!IMPORTANT] If you pay by invoice, you need to contact your account manager in {% data variables.contact.contact_enterprise_sales %} to add licenses to your enterprise account.
{% endif %}

With the new billing platform{% ifversion fpt %} with an organization on a {% data variables.product.prodname_team %} plan, or a personal account on a {% data variables.product.prodname_free_user %} or {% data variables.product.prodname_pro %} plan{% endif %}, you can add {% ifversion enterprise-licensing-language %}licenses{% else %}seats{% endif %} to your account{% ifversion fpt %} or update your plan{% endif %} through the "Licensing" page.

{% ifversion fpt %}

## Adding licenses to an organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.billing.org-billing-menu %}
1. Click **Licensing**.
1. In the {% data variables.product.prodname_team %} banner, click **Edit** and select **Add seats** to display the "Billing / Add seats" view.
1. Define the number of new seats you require. The details of the prorated cost for the remainder of the billing cycle and the total for your next bill are updated automatically.
1. When you have defined the number of additional seats to add, click **Add seats**.

You can also use the **Edit** option to remove seats and see which users are using seats in your account.

{% elsif ghec %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.billing.enterprise-billing-menu %}
1. Click **Licensing**.
1. Click {% octicon "kebab-horizontal" aria-label="Licensing dropdown" %} and then click **Manage licenses**.
1. Under "Total licenses", enter a number of licenses.
1. Click **Update licenses**.

{% endif %}
