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

{% data reusables.enterprise.about-ghec %} For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud)."

You can set up a trial to evaluate the additional features that come with {% data variables.product.prodname_ghe_cloud %}, such as SAML single sign-on (SSO), internal repositories, and audit log streaming. For a list of available features, see our [Pricing](https://github.com/pricing) page.

<a href="https://github.com/account/enterprises/new?ref_cta=GHEC+trial&ref_loc=setting+up+a+trial+of+github+enterprise+cloud&ref_page=docs" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Set up a trial of {% data variables.product.prodname_ghe_cloud %}</span> {% octicon "link-external" height:16 %}</a>

To set up a trial, you must be signed in to a personal account. If you don't have a personal account, see "[AUTOTITLE](/free-pro-team@latest/get-started/start-your-journey/creating-an-account-on-github)."

You do not need to provide a payment method during the trial.

{% data reusables.enterprise.enterprise-types %}

## What is included in the trial?

The trial lasts for **{% data reusables.enterprise.ghec-trial-length %} days** and includes the following features.

* Access to **most** {% data variables.product.prodname_ghe_cloud %} features.{% ifversion metered-ghe-ghas%}
* Access to the **enhanced billing platform**. See "[AUTOTITLE](/billing/using-the-enhanced-billing-platform-for-enterprises/about-the-enhanced-billing-platform-for-enterprises)."{% endif %}
* An **enterprise account**, which allows you to manage multiple organizations. See "[AUTOTITLE](/enterprise-cloud@latest/get-started/learning-about-github/types-of-github-accounts)."
* Up to **50 seats** to grant access to users.
* The option to set up a free trial of **{% data variables.product.prodname_GH_advanced_security %}** to test features such as {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_secret_scanning %}. See "[AUTOTITLE](/enterprise-cloud@latest/billing/managing-billing-for-github-advanced-security/setting-up-a-trial-of-github-advanced-security)."

## Features not included in the trial

* {% data variables.product.prodname_ghe_server %}
* {% data variables.product.prodname_github_codespaces %}
* {% data variables.product.prodname_copilot_for_business %} or {% data variables.product.prodname_copilot_enterprise %}
* {% data variables.product.prodname_sponsors %}
* Paid {% data variables.product.prodname_marketplace %} apps
* {% data variables.product.prodname_github_connect %}
* {% data variables.large_files.product_name_long %}
* For {% data variables.product.prodname_actions %}, increased minutes, job concurrency, and {% data variables.actions.hosted_runners %}

If you invite an existing organization into your trial enterprise, **all of these features will be disabled**. If you remove the organization from the enterprise, the features will be re-enabled.

## During the trial

After you set up your trial, you can explore {% data variables.product.prodname_ghe_cloud %} by following the suggested tasks on the "Getting started" tab of your enterprise account.

You can create up to **three new organizations** in the trial enterprise, or transfer any number of existing organizations.

* You cannot transfer organizations that have free or paid {% data variables.product.prodname_marketplace %} apps. Free apps are supported for new organizations in the trial.
* Billing for transferred organizations is paused during the trial and any coupons are removed. To reapply a coupon, contact {% data variables.contact.contact_support_page %}.
* Organizations created during the trial cannot be removed from the enterprise account until you purchase {% data variables.product.prodname_enterprise %}.

## What happens when the trial ends?

You can end your trial at any time by purchasing {% data variables.product.prodname_enterprise %} or canceling the trial. Otherwise, after {% data reusables.enterprise.ghec-trial-length %} days, your trial will expire.

If you **purchase {% data variables.product.prodname_enterprise %}**:

{% ifversion metered-ghe-ghas%}
* You can use usage-based billing for {% data variables.product.prodname_ghe_cloud %} and {% data variables.product.prodname_GH_advanced_security %}, which means you pay monthly for the number of licenses you use. You will not need to buy a predefined number of licenses in advance. See, "[AUTOTITLE](/billing/using-the-enhanced-billing-platform-for-enterprises/about-usage-based-billing-for-licenses)."

  If you did not set up a free trial and you want to use usage-based billing to pay for {% data variables.product.prodname_GH_advanced_security %} after the {% data variables.product.prodname_ghe_cloud %} trial ends, contact [{% data variables.product.prodname_dotcom %}'s Sales team](https://enterprise.github.com/contact).{% endif %}

* You can generate a {% data variables.product.prodname_ghe_server %} license file for the same quantity of users who are consuming a {% data variables.product.prodname_ghe_cloud %} license.

If you **cancel your trial**:

* Organizations that you transferred into the enterprise are removed and reverted to their previous plans and settings.
* Enterprise owners and members lose access to the enterprise account and any organizations that you created during the trial.

If your **trial expires**:

* Organizations that you transferred into the enterprise are removed and reverted to their previous plans and settings.
* Enterprise owners and members retain access to the enterprise account and organizations created during the trial in a downgraded state, allowing you to either upgrade to {% data variables.product.prodname_enterprise %} or move assets elsewhere.
* You can delete an expired trial to remove people's access to the enterprise and organizations created during the trial.

For more information about the effects of downgrading an organization, see "[AUTOTITLE](/enterprise-cloud@latest/billing/managing-the-plan-for-your-github-account/downgrading-your-accounts-plan#downgrading-your-organizations-plan)."

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
1. Under {% octicon "gear" aria-hidden="true" %} **Settings**, click **Profile**.
1. At the bottom of the page, in the "Danger zone" section, click **Cancel trial** or **Delete trial**.

## Further reading

* "[AUTOTITLE](/admin/overview/best-practices-for-enterprises)"
* [{% data variables.product.prodname_roadmap %}]({% data variables.product.prodname_roadmap_link %})
