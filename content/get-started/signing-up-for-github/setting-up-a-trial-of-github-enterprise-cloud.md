---
title: Setting up a trial of GitHub Enterprise Cloud
intro: 'You can try {% data variables.product.prodname_ghe_cloud %} for free.'
redirect_from:
  - /articles/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Accounts
shortTitle: Enterprise Cloud trial
---

{% data reusables.enterprise.ghec-cta-button %}

## About {% data variables.product.prodname_ghe_cloud %}

{% data reusables.enterprise.about-ghec %} For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud)."

You can set up a trial to evaluate the additional features that come with {% data variables.product.prodname_ghe_cloud %}, such as SAML single sign-on (SSO), internal repositories, audit log streaming, and included {% data variables.product.prodname_actions %} minutes. For a detailed list of the features available with {% data variables.product.prodname_ghe_cloud %}, see our [Pricing](https://github.com/pricing) page.

## About trials of {% data variables.product.prodname_ghe_cloud %}

You can set up a {% data reusables.copilot.trial-period %}-day trial to evaluate {% data variables.product.prodname_ghe_cloud %}. Your trial includes an enterprise account, which allows you to manage multiple organizations. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/get-started/learning-about-github/types-of-github-accounts)."

During the trial, you can add up to three new organizations to your enterprise. There are no limitations on the number of existing organizations you can transfer to your enterprise. For existing organizations, billing is paused during the trial and any coupons are removed. To reapply a coupon, contact {% data variables.contact.contact_enterprise_sales %}. Organizations created during the trial cannot be removed from the enterprise account until after you purchase {% data variables.product.prodname_enterprise %}.

Your trial also includes 50 seats. If you need more seats to evaluate {% data variables.product.prodname_ghe_cloud %}, contact {% data variables.contact.contact_enterprise_sales %}. At the end of the trial, you can choose a different number of seats, up to 1,000.

You do not need to provide a payment method during the trial.

{% data reusables.saml.saml-accounts %}

{% data reusables.enterprise.ghec-trial-azure %}

## Features not included in the trial

The following features are not included in the trial of {% data variables.product.prodname_ghe_cloud %}:

- {% data variables.product.prodname_emus %}: If you're interested in {% data variables.product.prodname_emus %}, please contact [{% data variables.product.prodname_dotcom %}'s Sales team](https://enterprise.github.com/contact).
- {% data variables.product.prodname_github_codespaces %}
- {% data variables.product.prodname_copilot_for_business %}
- {% data variables.product.prodname_sponsors %}
- Paid {% data variables.product.prodname_marketplace %} apps (free apps are supported as part of the trial)
- {% data variables.product.prodname_github_connect %}
- For {% data variables.product.prodname_actions %}, increased minutes, job concurrency, and {% data variables.actions.hosted_runner %}s
- If you set up your own trial, access to {% data variables.product.prodname_ghe_server %} is not included. If you would like to use {% data variables.product.prodname_ghe_server %}, contact {% data variables.contact.contact_enterprise_sales %}.

{% note %}

**Note:** If you invite an existing organization into your trial enterprise, all of these features will be disabled, but will be re-enabled if the organization is removed from the enterprise.

{% endnote %}

## Setting up your trial of {% data variables.product.prodname_ghe_cloud %}

Before you can try {% data variables.product.prodname_ghe_cloud %}, you must be signed into a personal account. If you don't already have a personal account on {% data variables.product.prodname_dotcom_the_website %}, you must create one. For more information, see "[AUTOTITLE](/free-pro-team@latest/get-started/signing-up-for-github/signing-up-for-a-new-github-account)."

{% data reusables.enterprise.create-enterprise-account %}

1. Follow the prompts to configure your trial.

## Exploring {% data variables.product.prodname_ghe_cloud %}

After you set up your trial, you can explore {% data variables.product.prodname_ghe_cloud %} by following the suggested tasks on the "Getting started" tab of your enterprise account.

{% data reusables.docs.you-can-read-docs-for-your-product %}

{% data reusables.enterprise.best-practices %}

During your trial, you can evaluate the extra security features that {% data variables.product.company_short %} offers to customers on {% data variables.product.prodname_enterprise %} by setting up a free trial of {% data variables.product.prodname_GH_advanced_security %}. {% data variables.product.prodname_GH_advanced_security %} is a separate license that gives you access to extra security features in private repositories in your enterprise, such as automatically scanning code for vulnerabilities and detecting leaked secrets. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/billing/managing-billing-for-github-advanced-security/setting-up-a-trial-of-github-advanced-security)."

{% data reusables.products.product-roadmap %}

## Finishing your trial

You can finish your trial at any time by purchasing {% data variables.product.prodname_enterprise %} or canceling the trial. If you don't purchase {% data variables.product.prodname_enterprise %} or cancel your trial by the end of the 30 days, your trial will expire.

Purchasing {% data variables.product.prodname_enterprise %} ends your trial, removing the 50-seat maximum and initiating payment.

If you cancel your trial or your trial expires, any existing organizations that you added to the enterprise account during the trial will be removed and reverted to their previous plans and settings. For more information about the effects of downgrading an organization, see "[AUTOTITLE](/enterprise-cloud@latest/billing/managing-the-plan-for-your-github-account/downgrading-your-accounts-plan#downgrading-your-organizations-plan)."

If you cancel your trial, all enterprise owners and members also lose access to the enterprise account and any organizations that were created during the trial. If your trial expires, everyone retains access to the enterprise account and organizations created during the trial in a downgraded state, giving you a chance to either upgrade to {% data variables.product.prodname_enterprise %} or move your assets elsewhere.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. At the top of the page, click **Buy Enterprise** or **Cancel trial**.
1. Follow the prompts.
