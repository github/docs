---
title: Creating an enterprise account
intro: 'If you''re currently using {% data variables.product.prodname_ghe_cloud %} with a single organization, you can create an enterprise account to centrally manage multiple organizations.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - Fundamentals
permissions: Organization owners can create an enterprise account.
shortTitle: Create enterprise account
---

## About enterprise account creation

{% data variables.product.prodname_ghe_cloud %} allows you to create an enterprise account, which enables collaboration between multiple organizations and gives administrators a single point of visibility and management. When you purchase {% data variables.product.prodname_ghe_cloud %}, you can create an enterprise account. Creation of an enterprise account does not result in additional charges on your bill. For more information, see "[AUTOTITLE](/admin/overview/about-enterprise-accounts)."

If you currently use {% data variables.product.prodname_ghe_cloud %} with a single organization and by invoice, you can create an enterprise account through your billing page. If you need Enterprise Managed Users, {% data variables.product.prodname_ghe_server %}, or invoicing support, please contact {% data variables.contact.contact_enterprise_sales %}.

You can also create an enterprise account by setting up a free trial of {% data variables.product.prodname_ghe_cloud %}. Trials are limited to 50 seats. If you have an existing organization with more than 50 seats that you want to invite into the trial, please contact {% data variables.contact.contact_enterprise_sales %}. For more information, see "[AUTOTITLE](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud)".

When you create an enterprise account that owns your existing organization on {% data variables.product.product_name %}, the organization's resources remain accessible to members at the same URLs. After you add your organization to the enterprise account, the following changes will apply to the organization.

- Your existing organization will automatically be owned by the enterprise account.
- {% data variables.product.company_short %} bills the enterprise account for usage within all organizations owned by the enterprise. The current billing details for the organization, including the organization's billing email address, will become billing details for the new enterprise account. For more information, see "[AUTOTITLE](/billing/managing-your-github-billing-settings/about-billing-for-your-enterprise)."
- All current owners of your organization will become owners of the enterprise account, and all current billing managers of the organization will become billing managers of the new enterprise account. For more information, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)."

For more information about the changes that apply to an organization after you add the organization to an enterprise, see "[AUTOTITLE](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#about-addition-of-organizations-to-your-enterprise-account)."

## Creating an enterprise account on {% data variables.product.prodname_dotcom %}

To create an enterprise account, your organization must be using {% data variables.product.prodname_ghe_cloud %}.

{% data reusables.organizations.billing-settings %}
1. Click **Upgrade to enterprise account**.
1. Under "Enterprise name", type a name for your enterprise account.
1. Under "Enterprise URL slug", type a slug for your enterprise account. This slug will be used in the URL for your enterprise. For example, if you choose `octo-enterprise`, the URL for your enterprise will be `https://github.com/enterprises/octo-enterprise`.
1. Click **Confirm and upgrade**.
1. Read the warnings, then click **Create enterprise account**.

## Next steps

After your enterprise account is created, we recommend learning more about how enterprise accounts work and configuring settings and policies. For more information, follow the "[AUTOTITLE](/admin/guides#get-started-with-your-enterprise-account)" learning path.
