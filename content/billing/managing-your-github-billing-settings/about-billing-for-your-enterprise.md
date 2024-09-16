---
title: About billing for your enterprise
intro: 'You can view billing information for your enterprise{% ifversion ghec or ghes %} account on {% data variables.product.prodname_dotcom_the_website %}{% endif %}.'
redirect_from:
  - /admin/overview/managing-billing-for-your-enterprise
  - /enterprise/admin/installation/managing-billing-for-github-enterprise
  - /enterprise/admin/overview/managing-billing-for-github-enterprise
  - /admin/overview/managing-billing-for-github-enterprise
  - /billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Enterprise
shortTitle: Billing for your enterprise
---

## About billing for your enterprise

{% ifversion ghec or ghes %}

{% ifversion ghec %}

When you use an enterprise account on {% data variables.product.prodname_dotcom %}, the enterprise account is the central point for all billing within your enterprise, including the organizations that your enterprise owns.

If you use {% data variables.product.product_name %} with an individual organization and do not yet have an enterprise account, you create an enterprise account and add your organization. For more information, see "[AUTOTITLE](/admin/managing-your-enterprise-account/creating-an-enterprise-account)."

{% data reusables.billing.usage-based-billing %}

{% elsif ghes %}

Each user on {% data variables.location.product_location %} consumes a seat on your license. {% data variables.product.company_short %} bills monthly for the total number of seats consumed on your license.

{% endif %}

{% ifversion ghec %}For {% data variables.product.prodname_ghe_cloud %} customers with an enterprise account, {% data variables.product.company_short %} bills through your enterprise account on {% data variables.product.prodname_dotcom_the_website %}. For invoiced customers, each{% elsif ghes %}For invoiced {% data variables.product.prodname_enterprise %} customers, {% data variables.product.company_short %} bills through an enterprise account on {% data variables.product.prodname_dotcom_the_website %}. Each{% endif %} invoice includes a single bill charge for all of your paid {% data variables.product.prodname_dotcom_the_website %} services and any {% data variables.product.prodname_ghe_server %} instances. For more information about {% ifversion ghes %}licensing, usage, and invoices{% elsif ghec %}usage and invoices{% endif %}, see the following{% ifversion ghes %} in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}.{% endif %}

{%- ifversion ghes %}
* "[AUTOTITLE](/enterprise-cloud@latest/billing/managing-the-plan-for-your-github-account/about-per-user-pricing)"
{%- endif %}
* "[Viewing the subscription and usage for your enterprise account]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/billing/managing-the-plan-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)"
* "[Managing invoices for your enterprise]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/billing/managing-the-plan-for-your-github-account/managing-invoices-for-your-enterprise)"

Administrators for your enterprise account on {% data variables.product.prodname_dotcom_the_website %} can access and manage billing for the enterprise. For more information, see "[Roles in an enterprise]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise){% ifversion ghec %}."{% elsif ghes %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% endif %}

{% ifversion ghec %}
{% data reusables.enterprise-accounts.billing-azure-subscription-enterprise-only %} For more information, see "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/connecting-an-azure-subscription)."
{% endif %}

{% ifversion ghes %}
{% data reusables.billing.ghes-with-no-enterprise-account %}
{% endif %}

{% endif %}

## Further reading

* "[AUTOTITLE](/admin/overview/about-enterprise-accounts)"
