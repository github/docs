---
title: Setting up a trial of GitHub Enterprise Cloud
intro: 'Learn how to set up a trial of {% data variables.product.prodname_ghe_cloud %}, what is included in the trial, and what happens when the trial ends.'
redirect_from:
  - /articles/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud
  - /get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud
  - /enterprise-onboarding/getting-started-with-your-enterprise/setting-up-a-trial-of-github-enterprise
  - /enterprise-onboarding/getting-started-with-your-enterprise/ending-a-trial-of-github-enterprise
versions:
  ghec: '*'
shortTitle: Enterprise Cloud trial
category:
  - Get started with GitHub Enterprise
docsTeamMetrics:
  - enterprise-onboarding
---

After you've decided which type of enterprise is right for you (see [AUTOTITLE](/admin/concepts/enterprise-fundamentals/choose-an-enterprise-type)), you can set up your trial.

If you choose an {% data variables.enterprise.prodname_emu_enterprise %}, you'll also choose whether to create your trial on {% data variables.product.prodname_dotcom_the_website %} or {% data variables.enterprise.data_residency_site %}. Trials on {% data variables.product.prodname_dotcom_the_website %} include {% data variables.product.prodname_GHAS %} features. Trials on {% data variables.enterprise.data_residency_site %} support regional data residency, but some features are not available. See [AUTOTITLE](/enterprise-cloud@latest/admin/data-residency/feature-overview-for-github-enterprise-cloud-with-data-residency#currently-unavailable-features).

<a href="https://github.com/account/enterprises/new?ref_product=ghec&ref_type=trial&ref_style=button&ref_plan=enterprise" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Set up a trial of {% data variables.product.prodname_ghe_cloud %}</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

## Features included in the trial?

The trial lasts for **{% data reusables.enterprise.ghec-trial-length %} days** and includes the following features.

* Access to **most** {% data variables.product.prodname_ghe_cloud %} features.
* An **enterprise account**, which allows you to manage multiple organizations. See [AUTOTITLE](/enterprise-cloud@latest/get-started/learning-about-github/types-of-github-accounts).
* Up to **50 licenses** to grant access to users.
* {% data variables.product.prodname_GH_cs_and_sp %} ({% data variables.product.prodname_dotcom_the_website %} trials only)
* Up to 3,000 minutes of standard {% data variables.product.prodname_dotcom %}-hosted runners.

## Features not included in the trial

* {% data variables.product.prodname_github_codespaces %}
* {% data variables.copilot.copilot_enterprise %}
* {% data variables.copilot.copilot_for_business %}
* {% data variables.product.prodname_sponsors %}
* Paid {% data variables.product.prodname_marketplace %} apps
* {% data variables.product.prodname_github_connect %}
* {% data variables.large_files.product_name_long %}
* For {% data variables.product.prodname_actions %}, increased minutes, job concurrency, and {% data variables.actions.hosted_runners %}
* Access to {% data variables.product.prodname_ghe_server %}. To test this, contact {% data variables.contact.contact_enterprise_sales %}.

If you invite an existing organization into your trial enterprise, **all of these features will be disabled**. If you remove the organization from the enterprise, the features will be re-enabled.

## Do I need to provide a payment method?

You do not need to provide a payment method to start a trial.

## During the trial

After you set up your trial, you can explore {% data variables.product.prodname_ghe_cloud %} by following the suggested tasks on the "Getting started" tab of your enterprise account.

### Organizations in your trial

You can create up to **three new organizations** in the trial enterprise, or transfer any number of existing organizations.

When transferring existing organizations, keep in mind these restrictions:

* You cannot transfer organizations if you selected an {% data variables.enterprise.prodname_emu_enterprise %}.
* You cannot transfer organizations that have free or paid {% data variables.product.prodname_marketplace %} apps. Free apps are supported for new organizations in the trial.
* You cannot transfer organizations that are already owned by another enterprise.
* Billing for transferred organizations is paused during the trial and any coupons are removed. To reapply a coupon, contact {% data variables.contact.contact_support_page %}.
* Organizations created during the trial cannot be removed from the enterprise account until you purchase {% data variables.product.prodname_enterprise %}.

For help setting up the included features, once you've started your trial, see [AUTOTITLE](/enterprise-cloud@latest/get-started/onboarding/getting-started-with-the-github-enterprise-cloud-trial).

## What happens when the trial ends?

You can end your trial at any time by purchasing {% data variables.product.prodname_enterprise %} or canceling the trial. Otherwise, after {% data reusables.enterprise.ghec-trial-length %} days, your trial will expire.

{% data variables.product.prodname_enterprise %} trial accounts are automatically deleted 90 days after the trial period ends if the account has not been converted to a paid account.

### If you cancel your trial

You can cancel your trial anytime in the "Danger zone" section of your enterprise settings.

* Organizations that you transferred into the enterprise are removed and reverted to their previous plans and settings.
* Enterprise owners and members lose access to the enterprise account and any organizations that you created during the trial.

### If your trial expires

* Organizations that you transferred into the enterprise are removed and reverted to their previous plans and settings.
* Enterprise owners and members retain access to the enterprise account and organizations created during the trial in a downgraded state, allowing you to either upgrade to {% data variables.product.prodname_enterprise %} or move assets elsewhere.
* You can delete an expired trial to remove people's access to the enterprise and organizations created during the trial.
