---
title: Adding seats to your account
intro: Learn how to add seats to your {% ifversion fpt %}organization{% elsif ghec %}enterprise{% endif %} account using the enhanced billing platform.
versions:
  feature: enhanced-billing-platform
redirect_from:
  - /billing/using-the-enhanced-billing-platform-for-enterprises/adding-seats-to-your-enterprise-account
  - /billing/using-the-new-billing-platform/adding-seats-to-your-enterprise-account
type: overview
topics:
  - Enterprise
  - Team
permissions: '{% data reusables.permissions.enhanced-billing-platform %}'
shortTitle: Add seats to your account
---

{% ifversion ghec %}
>[!IMPORTANT] If you pay by invoice, you need to contact your account manager in {% data variables.contact.contact_enterprise_sales %} to add seats to your enterprise account.
{% endif %}

If you have access to the new billing platform, you can add seats to your account through the "Licensing" page. To check if you have access, see [AUTOTITLE](/billing/using-the-new-billing-platform/about-the-new-billing-platform-for-enterprises#how-do-i-know-if-i-can-access-the-new-billing-platform).

{% ifversion fpt %}
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
1. Click {% octicon "kebab-horizontal" aria-label="Licensing dropdown" %} and then click **Manage seats**.
1. Under "Total Seats", enter a number of seats.
1. Click **Update seats**.

{% endif %}
