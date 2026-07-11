---
title: Billing for GitHub Enterprise
intro: 'Learn how your bill is calculated based on how many {% data variables.product.prodname_enterprise %} licenses you use.'
redirect_from:
  - /admin/overview/managing-billing-for-your-enterprise
  - /enterprise/admin/installation/managing-billing-for-github-enterprise
  - /enterprise/admin/overview/managing-billing-for-github-enterprise
  - /admin/overview/managing-billing-for-github-enterprise
  - /billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise
  - /billing/managing-your-github-billing-settings/about-billing-for-your-enterprise
  - /early-access/github/automatically-renew-the-billing-plan-for-your-enterprise
  - /billing/using-the-billing-platform/about-billing-for-your-enterprise
  - /billing/using-the-new-billing-platform/about-billing-for-your-enterprise
  - /billing/managing-your-billing/about-billing-for-your-enterprise
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: Billing for enterprises
contentType: concepts
category:
  - Manage enterprise licenses
---

## {% data variables.product.prodname_enterprise %} plan costs

Each member of your enterprise uses a license (previously known as a seat). The bill for your {% data variables.product.prodname_enterprise %} plan is based on the number of licenses consumed by your enterprise.

If you have an enterprise account on {% data variables.product.prodname_ghe_cloud %}, the enterprise account is the central point for all billing within your enterprise, including the organizations that your enterprise owns. Enterprise owners and billing managers can access and manage billing for the enterprise. For more information, see [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/abilities-of-roles).

> [!TIP]
> {% ifversion fpt or ghec %}
> If you use {% data variables.product.prodname_ghe_cloud %} with an individual organization and do not yet have an enterprise account, you can create an enterprise account and add your organization. For more information, see [AUTOTITLE](/enterprise-cloud@latest/admin/managing-your-enterprise-account/creating-an-enterprise-account).
> {% elsif ghes %}
> {% data reusables.billing.ghes-with-no-enterprise-account %}
> {% endif %}

To learn which people consume a license in your enterprise, see [AUTOTITLE](/billing/reference/github-license-users).

## Invoiced customers

For invoiced customers, each invoice includes a single bill that covers the cost of {% data variables.product.prodname_enterprise %} licenses used, as well as your use of paid services. For example, in addition to your usage for {% data variables.product.prodname_enterprise %}, you may also use {% data variables.product.prodname_GH_secret_protection %}.

## Billing models for {% data variables.product.prodname_enterprise %} licenses

There are two billing models for {% data variables.product.prodname_enterprise %} licenses: **usage-based** and **volume**.

{% data reusables.billing.do-i-have-usage-based %}

## License usage across deployments

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

To ensure the same user isn't consuming more than one license for multiple enterprise deployments, you synchronize license usage between your {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %} environments. See [AUTOTITLE](/billing/concepts/enterprise-billing/combined-enterprise-use).

## Further reading

* [AUTOTITLE](/admin/concepts/enterprise-fundamentals/enterprise-accounts)
* [AUTOTITLE](/billing/reference/github-license-users)
* [AUTOTITLE](/billing/how-tos/manage-plan-and-licenses/view-enterprise-usage)
* [AUTOTITLE](/enterprise-cloud@latest/billing/how-tos/set-up-payment/manage-enterprise-invoice){% ifversion ghes %} in the {% data variables.product.prodname_ghe_cloud %} documentation{% endif %}
