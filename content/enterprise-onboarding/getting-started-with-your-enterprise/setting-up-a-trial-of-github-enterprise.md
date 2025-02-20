---
title: Setting up a trial of GitHub Enterprise
intro: 'Learn what is included in the {% data variables.product.prodname_ghe_cloud %} trial, and how to get started.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
shortTitle: Setting up a trial
---

{% data reusables.enterprise.about-ghec %} See [AUTOTITLE](/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud).

You can set up a trial to evaluate features that require {% data variables.product.prodname_ghe_cloud %}, such as SAML single sign-on (SSO) and {% data variables.product.prodname_GH_advanced_security %}. For a full list of available features, see our [Pricing](https://github.com/pricing) page.

Your trial **won't** include {% data variables.enterprise.data_residency_short %} on {% data variables.enterprise.data_residency_site %} or access to {% data variables.product.prodname_ghe_server %}. To test these features, contact {% data variables.contact.contact_enterprise_sales %}.

To set up a trial, you must be signed in to a personal account. If you don't have a personal account, see [AUTOTITLE](/free-pro-team@latest/get-started/start-your-journey/creating-an-account-on-github).

## What is included in the trial?

The trial lasts for **{% data reusables.enterprise.ghec-trial-length %} days** and includes the following features.

* Access to **most** {% data variables.product.prodname_ghe_cloud %} features.{% ifversion metered-ghe-ghas %}
* {% data variables.product.prodname_copilot_for_business %}
* {% data variables.product.prodname_GH_advanced_security %}
* Access to the **new billing platform**. See [AUTOTITLE](/billing/using-the-new-billing-platform/about-the-new-billing-platform-for-enterprises).{% endif %}
* An **enterprise account**, which allows you to manage multiple organizations. See [AUTOTITLE](/enterprise-cloud@latest/get-started/learning-about-github/types-of-github-accounts).
* Up to **50 licenses** to grant access to users.

## Features not included in the trial

* {% data variables.product.prodname_github_codespaces %}
* {% data variables.product.prodname_copilot_enterprise %}
* {% data variables.product.prodname_sponsors %}
* Paid {% data variables.product.prodname_marketplace %} apps
* {% data variables.product.prodname_github_connect %}
* {% data variables.large_files.product_name_long %}
* For {% data variables.product.prodname_actions %}, increased minutes, job concurrency, and {% data variables.actions.hosted_runners %}

If you invite an existing organization into your trial enterprise, **all of these features will be disabled**. If you remove the organization from the enterprise, the features will be re-enabled.

## Do I need to provide a payment method?

You do not need to provide a payment method to start a trial. If you want to use {% data variables.product.prodname_copilot_business_short %} during the trial, you need to provide a credit card. You **won't** be charged for using {% data variables.product.prodname_copilot_business_short %} during the trial.

## Setting up a trial

Go to the trial page and follow the instructions to sign up for the trial.

<a href="https://github.com//account/enterprises/new?ref_cta=GHEC+trial&ref_loc=Getting+started+with+the+github+enterprise+cloud+trial&ref_page=docs" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Try {% data variables.product.prodname_ghe_cloud %}</span> {% octicon "link-external" height:16 %}</a>

When setting up your trial of GitHub Enterprise Cloud, you'll choose an enterprise type.

* Enterprise with personal accounts
* Enterprise with managed users

To help you decide which choice is best for your enterprise, see [AUTOTITLE](/admin/managing-iam/understanding-iam-for-enterprises/choosing-an-enterprise-type-for-github-enterprise-cloud).

### Setting up {% data variables.product.prodname_ghe_cloud %}

You can find full instructions on setting up {% data variables.product.prodname_ghe_cloud %} in the [AUTOTITLE](/enterprise-cloud@latest/get-started/onboarding/getting-started-with-github-enterprise-cloud) guide.

### Setting up {% data variables.product.prodname_GH_advanced_security %}

You can find information about planning a trial of {% data variables.product.prodname_GH_advanced_security %} and exploring the additional options available with {% data variables.product.prodname_ghe_cloud %} in the [AUTOTITLE](/code-security/trialing-github-advanced-security) articles.

### Setting up {% data variables.product.prodname_copilot_for_business %}

Setting up your {% data variables.product.prodname_copilot_for_business %} trial involves three phases, and each phase must be completed by different people.

* As an **enterprise owner**, you must first configure {% data variables.product.prodname_copilot_for_business %} for your enterprise. This phase involves setting policies for the use of {% data variables.product.prodname_copilot_for_business %} in your enterprise, and deciding which organizations in your enterprise can use {% data variables.product.prodname_copilot_for_business %}. For detailed instructions, see [AUTOTITLE](/enterprise-cloud@latest/copilot/setting-up-github-copilot/setting-up-github-copilot-for-your-enterprise).

* Next, **organization owners** can enable {% data variables.product.prodname_copilot_for_business %} for their organizations. For detailed instructions, see [AUTOTITLE](/enterprise-cloud@latest/copilot/setting-up-github-copilot/setting-up-github-copilot-for-your-organization).

* If your **personal account** has been granted a seat in an organization that has enabled {% data variables.product.prodname_copilot_for_business %}, you can now enable {% data variables.product.prodname_copilot_for_business %} for your personal account. For detailed instructions, see [AUTOTITLE](/enterprise-cloud@latest/copilot/setting-up-github-copilot/setting-up-github-copilot-for-yourself).

## During the trial

After you set up your trial, you can explore {% data variables.product.prodname_ghe_cloud %} by following the suggested tasks on the "Getting started" tab of your enterprise account.

You can create up to **three new organizations** in the trial enterprise, or transfer any number of existing organizations.

* You cannot transfer organizations that have free or paid {% data variables.product.prodname_marketplace %} apps. Free apps are supported for new organizations in the trial.
* Billing for transferred organizations is paused during the trial and any coupons are removed. To reapply a coupon, contact {% data variables.contact.contact_support_page %}.
* Organizations created during the trial cannot be removed from the enterprise account until you purchase {% data variables.product.prodname_enterprise %}.

For help setting up the included features, once you've started your trial, see [AUTOTITLE](/enterprise-cloud@latest/get-started/onboarding/getting-started-with-the-github-enterprise-cloud-trial).

## Next steps

1. To learn more about {% data variables.product.github %}'s enterprise products and options{% ifversion ghec %}, as well as the features available in {% data variables.product.prodname_ghe_cloud %}{% endif %}, see [AUTOTITLE](/admin/overview/about-github-for-enterprises){% ifversion ghec %} and [AUTOTITLE](/enterprise-cloud@latest/admin/overview/feature-overview-for-github-enterprise-cloud){% endif %}.
1. Once you have completed your trial, you can purchase {% data variables.product.prodname_enterprise %} or cancel the trial. See [AUTOTITLE](/enterprise-onboarding/getting-started-with-your-enterprise/ending-a-trial-of-github-enterprise).
