---
title: Setting up a trial of GitHub Enterprise Cloud
intro: 'Learn how to set up a trial of {% data variables.product.prodname_ghe_cloud %}, what is included in the trial, and what happens when the trial ends.'
redirect_from:
  - /articles/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud
  - /get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud
versions:
  ghec: '*'
  ghes: '*'
topics:
  - Accounts
shortTitle: Enterprise Cloud trial
---

{% data reusables.enterprise.about-ghec %} See [AUTOTITLE](/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud).

To set up a trial, you must be signed in to a personal account. If you don't have a personal account, see [AUTOTITLE](/free-pro-team@latest/get-started/start-your-journey/creating-an-account-on-github).

<a href="https://github.com/account/enterprises/new?ref_cta=GHEC+trial&ref_loc=setting+up+a+trial+of+github+enterprise+cloud&ref_page=docs" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Set up a trial of {% data variables.product.prodname_ghe_cloud %}</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

{% data reusables.enterprise.enterprise-types %}

{% data reusables.enterprise.emus-trial-content %}

## What is included in the trial?

The trial lasts for **{% data reusables.enterprise.ghec-trial-length %} days** and includes the following features.

* Access to **most** {% data variables.product.prodname_ghe_cloud %} features.
* {% data variables.copilot.copilot_for_business %} ({% data variables.product.prodname_dotcom_the_website %} trials only)
* {% data variables.product.prodname_GH_cs_and_sp %} ({% data variables.product.prodname_dotcom_the_website %} trials only)
* Access to the **new billing platform**.{% ifversion enhanced-billing-platform %} See [AUTOTITLE](/billing/using-the-new-billing-platform/about-the-new-billing-platform-for-enterprises).{% endif %}
* An **enterprise account**, which allows you to manage multiple organizations. See [AUTOTITLE](/enterprise-cloud@latest/get-started/learning-about-github/types-of-github-accounts).
* Up to **50 licenses** to grant access to users.
* Up to 3,000 minutes of standard {% data variables.product.prodname_dotcom %}-hosted runners.

Your trial **won't** include access to {% data variables.product.prodname_ghe_server %}. To test this, contact {% data variables.contact.contact_enterprise_sales %}.

## Features not included in the trial

* {% data variables.product.prodname_github_codespaces %}
* {% data variables.copilot.copilot_enterprise %}
* {% data variables.product.prodname_sponsors %}
* Paid {% data variables.product.prodname_marketplace %} apps
* {% data variables.product.prodname_github_connect %}
* {% data variables.large_files.product_name_long %}
* For {% data variables.product.prodname_actions %}, increased minutes, job concurrency, and {% data variables.actions.hosted_runners %}

If you invite an existing organization into your trial enterprise, **all of these features will be disabled**. If you remove the organization from the enterprise, the features will be re-enabled.

## Do I need to provide a payment method?

You do not need to provide a payment method to start a trial. If you want to use {% data variables.copilot.copilot_business_short %} during the trial, you need to provide a credit card. You **won't** be charged for using {% data variables.copilot.copilot_business_short %} during the trial.

## During the trial

After you set up your trial, you can explore {% data variables.product.prodname_ghe_cloud %} by following the suggested tasks on the "Getting started" tab of your enterprise account.

You can create up to **three new organizations** in the trial enterprise, or transfer any number of existing organizations.

* You cannot transfer organizations if you selected an {% data variables.enterprise.prodname_emu_enterprise %}.
* You cannot transfer organizations that have free or paid {% data variables.product.prodname_marketplace %} apps. Free apps are supported for new organizations in the trial.
* You cannot transfer organizations that are already owned by another enterprise.
* Billing for transferred organizations is paused during the trial and any coupons are removed. To reapply a coupon, contact {% data variables.contact.contact_support_page %}.
* Organizations created during the trial cannot be removed from the enterprise account until you purchase {% data variables.product.prodname_enterprise %}.

For help setting up the included features, once you've started your trial, see [AUTOTITLE](/enterprise-cloud@latest/get-started/onboarding/getting-started-with-the-github-enterprise-cloud-trial).

## What happens when the trial ends?

You can end your trial at any time by purchasing {% data variables.product.prodname_enterprise %} or canceling the trial. Otherwise, after {% data reusables.enterprise.ghec-trial-length %} days, your trial will expire.

{% data variables.product.prodname_enterprise %} trial accounts are automatically deleted 90 days after the trial period ends if the account has not been converted to a paid account.

If you **purchase {% data variables.product.prodname_enterprise %}**:

* You can use usage-based billing for {% data variables.product.prodname_ghe_cloud %} and {% data variables.product.prodname_GHAS %}{% ifversion ghas-products %} products{% endif %}, which means you pay monthly for the number of licenses you use. You will not need to buy a predefined number of licenses in advance. See [AUTOTITLE](/billing/using-the-new-billing-platform/about-usage-based-billing-for-licenses).

  If you did not set up a free trial and you want to use usage-based billing to pay for {% data variables.product.prodname_GHAS %}{% ifversion ghas-products %} products{% endif %} after the {% data variables.product.prodname_ghe_cloud %} trial ends, contact [{% data variables.product.prodname_dotcom %}'s Sales team](https://enterprise.github.com/contact).

* You can generate a {% data variables.product.prodname_ghe_server %} license file for the same quantity of users who are consuming a {% data variables.product.prodname_ghe_cloud %} license.

If you **cancel your trial**:

* Organizations that you transferred into the enterprise are removed and reverted to their previous plans and settings.
* Enterprise owners and members lose access to the enterprise account and any organizations that you created during the trial.

If your **trial expires**:

* Organizations that you transferred into the enterprise are removed and reverted to their previous plans and settings.
* Enterprise owners and members retain access to the enterprise account and organizations created during the trial in a downgraded state, allowing you to either upgrade to {% data variables.product.prodname_enterprise %} or move assets elsewhere.
* You can delete an expired trial to remove people's access to the enterprise and organizations created during the trial.

For more information about the effects of downgrading an organization, see [AUTOTITLE](/enterprise-cloud@latest/billing/managing-the-plan-for-your-github-account/downgrading-your-accounts-plan#downgrading-your-organizations-plan).

## Ending your trial

You can end a trial by purchasing {% data variables.product.prodname_enterprise %} or by canceling the trial. If a trial has expired, you can delete the trial.

### Purchasing {% data variables.product.prodname_enterprise %}

You can purchase {% data variables.product.prodname_enterprise %} at any time during the trial.

{% data reusables.enterprise-accounts.access-enterprise %}
1. To end the trial period and purchase {% data variables.product.prodname_enterprise %}, click **Activate Enterprise** in the blue banner at the top of the page.

### Canceling or deleting a trial

You can cancel a trial at any time. Once the trial has expired, you can delete the trial.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. Under **{% octicon "gear" aria-hidden="true" aria-label="gear" %} Settings**, click **Profile**.
1. At the bottom of the page, in the "Danger zone" section, click **Cancel trial** or **Delete trial**.

## Further reading

* [AUTOTITLE](/admin/overview/best-practices-for-enterprises)
* [{% data variables.product.prodname_roadmap %}]({% data variables.product.prodname_roadmap_link %})
