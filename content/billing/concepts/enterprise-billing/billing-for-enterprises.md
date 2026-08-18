---
title: Billing for GitHub Enterprise
intro: 'Understand what makes up your enterprise bill so you can better forecast and manage costs.'
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
  - /enterprise-onboarding/getting-started-with-your-enterprise/about-enterprise-billing
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: Billing for enterprises
contentType: concepts
category:
  - Manage enterprise licenses
docsTeamMetrics:
  - enterprise-onboarding
---

## What's included in my {% data variables.product.prodname_ghe_cloud %} bill?

Each month, you're billed for:

* The number of {% data variables.product.prodname_enterprise %} licenses you use, determined by the number of unique users in your enterprise
* Any usage of features like {% data variables.product.prodname_actions %} or {% data variables.product.prodname_github_codespaces %}, beyond the allowances included in your {% data variables.product.prodname_enterprise %} plan
* Any extra features you purchase, such as {% data variables.product.prodname_copilot %} or {% data variables.product.prodname_AS %} licenses

For prices and monthly allowances, see {% data variables.product.pricing_link %}.

## What's included in my {% data variables.product.prodname_ghe_server %} bill?

Your bill includes the cost of {% data variables.product.prodname_enterprise %} licenses used, as well as any extra features you purchase, such as {% data variables.product.prodname_copilot %} or {% data variables.product.prodname_AS %} licenses.

>[!TIP] {% data variables.product.prodname_ghe_server %} customers with no enterprise account on {% data variables.product.prodname_dotcom_the_website %} can view invoices and payment history on the [{% data variables.product.prodname_enterprise %} website](https://enterprise.github.com/login).

## Paying for your enterprise

For the available payment methods for your enterprise, see [AUTOTITLE](/billing/reference/supported-payment-methods).

## Invoiced customers

If you created your enterprise account with help from {% data variables.product.company_short %}'s Sales team, you may have agreed to pay by invoice instead.

For invoiced customers, each invoice includes a single bill that covers the cost of {% data variables.product.prodname_enterprise %} licenses used, as well as your use of paid services. For example, in addition to your usage for {% data variables.product.prodname_enterprise %}, you may also use {% data variables.product.prodname_GH_secret_protection %}.

## License costs

The following sections describe the {% data variables.product.prodname_enterprise %} license component of your bill specifically.

Each member of your enterprise uses a license (previously known as a seat). The license portion of your bill is based on the number of licenses consumed by your enterprise. To learn which people consume a license in your enterprise, see [AUTOTITLE](/billing/reference/github-license-users).

### Billing models for {% data variables.product.prodname_enterprise %} licenses

There are two billing models for {% data variables.product.prodname_enterprise %} licenses: **usage-based** and **volume**.

{% data reusables.billing.do-i-have-usage-based %}

### License usage across deployments

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

To ensure the same user isn't consuming more than one license for multiple enterprise deployments, you synchronize license usage between your {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %} environments. See [AUTOTITLE](/billing/concepts/enterprise-billing/combined-enterprise-use).

## Further reading

* [AUTOTITLE](/billing/reference/github-license-users)
* [AUTOTITLE](/billing/how-tos/manage-plan-and-licenses/view-enterprise-usage)
