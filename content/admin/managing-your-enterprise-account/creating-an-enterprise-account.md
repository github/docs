---
title: Creating an enterprise account
intro: "Learn the steps and effects of creating an enterprise account."
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - Fundamentals
permissions: Organization owners
product: '{% data variables.product.prodname_ghe_cloud %}'
shortTitle: Create enterprise account
redirect_from:
  - /admin/overview/creating-an-enterprise-account
---

<!-- expires 2024-09-03 -->
{% data reusables.enterprise.single-organizations-enterprise-migration %}
<!-- end expires 2024-09-03 -->

## When should I create an enterprise account?

{% data variables.product.prodname_ghe_cloud %} allows you to create an enterprise account, which enables collaboration between **multiple organizations** and gives administrators a single point of visibility and management. See "[AUTOTITLE](/admin/managing-your-enterprise-account/about-enterprise-accounts)."

In most cases, you can create an enterprise account **yourself**.

* When you start a free trial of {% data variables.product.prodname_ghe_cloud %}, you'll create an enterprise account as part of the process. See "[AUTOTITLE](/admin/overview/setting-up-a-trial-of-github-enterprise-cloud)."
* If you currently use {% data variables.product.prodname_ghe_cloud %} with a single organization, you can upgrade to an enterprise account by following the steps later in this article.

You'll **need help** creating an enterprise account for:

* {% data variables.product.prodname_ghe_server %}
* Invoicing
* Managing {% data variables.product.prodname_copilot_for_business %} licenses without adopting {% data variables.product.prodname_enterprise %}

In these cases, contact {% data variables.contact.contact_enterprise_sales %}.

## What will happen after I upgrade my organization?

* Your existing organization will automatically be owned by the enterprise account. To learn how the organization will change, see "[AUTOTITLE](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#about-addition-of-organizations-to-your-enterprise-account)."
* The organization's billing details will become the billing details for the enterprise.
* All of the organization's owners will become owners of the enterprise.
* All of the organization's billing managers will become billing managers for the enterprise.
* Going forward, {% data variables.product.company_short %} will bill the enterprise account for usage within **all** organizations owned by the enterprise.

## Upgrading an organization to an enterprise account

{% data reusables.organizations.billing-settings %}
1. Click **Upgrade to enterprise account**.
1. Under "Enterprise name", type a name for your enterprise account.
1. Under "Enterprise URL slug", type a slug to be used in the URL for your enterprise.

   For example, if you choose `octo-enterprise`, the URL will be `https://github.com/enterprises/octo-enterprise`.
1. Click **Confirm and upgrade**.
1. Read the warnings, then click **Create enterprise account**.

## Next steps

Follow the "[Get started with your enterprise account](/admin/guides#get-started-with-your-enterprise-account)" learning path.

## Further reading

* "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)"
