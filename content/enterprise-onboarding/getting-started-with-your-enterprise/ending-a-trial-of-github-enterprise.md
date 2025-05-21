---
title: Ending a trial of GitHub Enterprise
intro: 'Learn how to end your trial by purchasing {% data variables.product.prodname_ghe_cloud %} or by canceling your trial.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
shortTitle: Ending an Enterprise trial
---

You can end your trial at any time by purchasing {% data variables.product.prodname_enterprise %} or canceling the trial. Otherwise, after {% data reusables.enterprise.ghec-trial-length %} days, your trial will expire.

{% data variables.product.prodname_enterprise %} trial accounts are automatically deleted 90 days after the trial period ends if the account has not been converted to a paid account.

If you **purchase {% data variables.product.prodname_enterprise %}**, you can use the full {% data variables.product.prodname_ghe_cloud %} feature set and billing capabilities. See [AUTOTITLE](/enterprise-onboarding/getting-started-with-your-enterprise/about-enterprise-billing).

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
1. Under **{% octicon "gear" aria-hidden="true" %} Settings**, click **Profile**.
1. At the bottom of the page, in the "Danger zone" section, click **Cancel trial** or **Delete trial**.

## Next steps

Now that you know how to start and end a trial of {% data variables.product.prodname_ghe_cloud %}, learn about billing. See [AUTOTITLE](/enterprise-onboarding/getting-started-with-your-enterprise/about-enterprise-billing).
