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

{% data variables.product.prodname_ghe_cloud %} includes the option to create an enterprise account, which enables collaboration between multiple organizations and gives administrators a single point of visibility and management. 更多信息请参阅“[关于企业帐户](/admin/overview/about-enterprise-accounts)”。

{% data reusables.enterprise.create-an-enterprise-account %} If you pay by invoice, you can create an enterprise account yourself on {% data variables.product.prodname_dotcom %}. If not, you can [contact our sales team](https://github.com/enterprise/contact?ref_page=/pricing&ref_cta=Contact%20Sales&ref_loc=cards) to move to invoicing.

An enterprise account is included in {% data variables.product.prodname_ghe_cloud %}, so creating one will not affect your bill.

When you create an enterprise account, your existing organization will automatically be owned by the enterprise account. All current owners of your organization will become owners of the enterprise account. All current billing managers of the organization will become billing managers of the new enterprise account. The current billing details of the organization, including the organization's billing email address, will become billing details of the new enterprise account.

## Creating an enterprise account on {% data variables.product.prodname_dotcom %}

To create an enterprise account on {% data variables.product.prodname_dotcom %}, your organization must be using {% data variables.product.prodname_ghe_cloud %} and paying by invoice.

{% data reusables.organizations.billing-settings %}
1. Click **Upgrade to enterprise account**.

   ![Screenshot of the "Upgrade to an enterprise account" button](/assets/images/help/business-accounts/upgrade-to-enterprise-account.png)
1. Under "Enterprise name", type a name for your enterprise account.

   ![Screenshot of the "Enterprise name" field](/assets/images/help/business-accounts/enterprise-name-field.png)
1. Under "Enterprise URL slug", type a slug for your enterprise account. This slug will be used in the URL for your enterprise. For example, if you choose `octo-enterprise`, the URL for your enterprise will be `https://github.com/enterprises/octo-enterprise`.

   ![Screenshot of the "Enterprise URL slug" field](/assets/images/help/business-accounts/enterprise-slug-field.png)
1. Click **Confirm and upgrade**.

   ![Screenshot of the "Confirm and upgrade" button](/assets/images/help/business-accounts/confirm-and-upgrade-button.png)
1. Read the warnings, then click **Create enterprise account**.

   ![Screenshot of the "Create enterprise account" button](/assets/images/help/business-accounts/create-enterprise-account-button.png)

## 后续步骤

After your enterprise account is created, we recommend learning more about how enterprise accounts work and configuring settings and policies. For more information, follow the "[Get started with your enterprise account](/admin/guides#get-started-with-your-enterprise-account)" learning path.
