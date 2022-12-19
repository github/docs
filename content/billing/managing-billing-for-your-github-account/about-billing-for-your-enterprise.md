---
title: About billing for your enterprise
intro: 'You can view billing information for your enterprise{% ifversion ghec or ghes %} account on {% data variables.product.prodname_dotcom_the_website %}{% endif %}.'
redirect_from:
  - /admin/overview/managing-billing-for-your-enterprise
  - /enterprise/admin/installation/managing-billing-for-github-enterprise
  - /enterprise/admin/overview/managing-billing-for-github-enterprise
  - /admin/overview/managing-billing-for-github-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
shortTitle: Billing for your enterprise
---

## About billing for your enterprise

{% ifversion ghae %}

{% data reusables.github-ae.about-billing %} Once per day, {% data variables.product.prodname_dotcom %} will count the number of users with a license for your enterprise. {% data variables.product.company_short %} bills you for each licensed user regardless of whether the user logged into {% data variables.product.prodname_ghe_managed %} that day.

For commercial regions, the price per user per day is $1.2580645161. For 31-day months, the monthly cost for each user is $39. For months with fewer days, the monthly cost is lower. Each billing month begins at a fixed time on the first day of the calendar month.

If you add a licensed user mid-month, that user will only be included in the count for the days they have a license. When you remove a licensed user, that user will remain in the count until the end of that month. Therefore, if you add a user mid-month and later remove the user in the same month, the user will be included in the count from the day the user was added through the end of the month. There is no additional cost if you re-add a user during the same month the user was removed.

For example, here are the costs for users with licenses on different dates.

User | License dates | Counted days | Cost
---- | ------------ | ------- | -----
@octocat | January 1 - January 31 | 31 | $39
@robocat | February 1 - February 28 | 28 | $35.23
@devtocat  | January 15 - January 31 | 17 | $21.39
@doctocat | January 1 - January 15 | 31 | $39
@prodocat | January 7 - January 15 | 25 | $31.45
@monalisa | January 1 - January 7,<br>January 15 - January 31 | 31 | $39

{% data variables.product.prodname_ghe_managed %} has a 500-user minimum per instance. {% data variables.product.company_short %} bills you for a minimum of 500 users per instance, even if there are fewer than 500 users with a license that day.

You can see your current usage in your [Azure account portal](https://portal.azure.com).

{% elsif ghec or ghes %}

{% ifversion ghec %}

When you use an enterprise account on {% data variables.location.product_location %}, the enterprise account is the central point for all billing within your enterprise, including the organizations that your enterprise owns.

If you use {% data variables.product.product_name %} with an individual organization and do not yet have an enterprise account, you create an enterprise account and add your organization. For more information, see "[Creating an enterprise account](/admin/overview/creating-an-enterprise-account)."

{% data variables.product.company_short %} bills monthly for the total number of licensed seats for your enterprise account, as well as any additional services you use with {% data variables.product.prodname_ghe_cloud %}, such as {% data variables.product.prodname_actions %} minutes. If you use a standalone organization on {% data variables.product.product_name %}, you'll be billed at the organization level for all usage. For more information your bill's license seats, see "[About per-user pricing](/billing/managing-billing-for-your-github-account/about-per-user-pricing)."

{% elsif ghes %}

Each user on {% data variables.location.product_location %} consumes a seat on your license. {% data variables.product.company_short %} bills monthly for the total number of seats consumed on your license.

{% endif %}

{% ifversion ghec %}For {% data variables.product.prodname_ghe_cloud %} customers with an enterprise account, {% data variables.product.company_short %} bills through your enterprise account on {% data variables.product.prodname_dotcom_the_website %}. For invoiced customers, each{% elsif ghes %}For invoiced {% data variables.product.prodname_enterprise %} customers, {% data variables.product.company_short %} bills through an enterprise account on {% data variables.product.prodname_dotcom_the_website %}. Each{% endif %} invoice includes a single bill charge for all of your paid {% data variables.product.prodname_dotcom_the_website %} services and any {% data variables.product.prodname_ghe_server %} instances. For more information about {% ifversion ghes %}licensing, usage, and invoices{% elsif ghec %}usage and invoices{% endif %}, see the following{% ifversion ghes %} in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}.{% endif %}

{%- ifversion ghes %}
- "[About per-user pricing](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/about-per-user-pricing)"
{%- endif %}
- "[Viewing the subscription and usage for your enterprise account]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)"
- "[Managing invoices for your enterprise]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise)"

Administrators for your enterprise account on {% data variables.product.prodname_dotcom_the_website %} can access and manage billing for the enterprise. For more information, see "[Roles in an enterprise]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise){% ifversion ghec %}."{% elsif ghes %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% endif %}

{% ifversion ghec %}
{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} For more information, see "[Connecting an Azure subscription to your enterprise](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)."
{% endif %}

{% ifversion ghes %}
{% data reusables.billing.ghes-with-no-enterprise-account %}
{% endif %}

{% endif %}
## Further reading

- "[About enterprise accounts](/admin/overview/about-enterprise-accounts)"
