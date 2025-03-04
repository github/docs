---
title: About billing for GitHub Advanced Security
intro: 'Learn how {% data variables.product.prodname_GH_advanced_security %} costs are calculated and how to get the most from your license.'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /admin/advanced-security/about-licensing-for-github-advanced-security
  - /billing/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security
  - /billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Enterprise
  - Licensing
shortTitle: Advanced Security billing
---

{% ifversion metered-ghe-ghas %}

## Metered billing for {% data variables.product.prodname_GH_advanced_security %}

If you started a trial of {% data variables.product.prodname_GH_advanced_security %} (GHAS) during your {% data variables.product.prodname_ghe_cloud %} trial on or after August 1, 2024, or if your account is onboarded into metered billing outside of the trial, your billing will be usage-based. This means:

* You pay for the number of licenses used each month.
* This applies to both {% data variables.product.prodname_ghe_cloud %} and {% data variables.product.prodname_GH_advanced_security %}.

There are a few key differences between metered and volume billing for {% data variables.product.prodname_GH_advanced_security %}.

* **GHAS Metered billing**

  * Billed per active committer, with no pre-defined license limit.
  * No overage state, pay only for what you use.
  * Server-only users will be added to metered billing. These users are de-duplicated with email matching to avoid double billing.

* **GHAS Volume/Subscription billing**

  * Purchase a defined number of licenses (for example, 100 licenses).
  * If usage exceeds purchased licenses, you will need to purchase additional licenses to cover this overage usage.

For more detailed information about these two types of billing, see [AUTOTITLE](/billing/using-the-new-billing-platform/about-usage-based-billing-for-licenses).

### Managing committers and repositories

{% data variables.product.prodname_GH_advanced_security %} is billed per committer and enabled by repository. If you remove a committer from an organization or enterprise, or if you disable {% data variables.product.prodname_GH_advanced_security %} on a repository, the committers will remain billable until the end of the current monthly billing cycle. Prorated billing applies only when a committer starts partway through the month. For examples of how committers are tracked and billed, see [Understanding usage](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security#understanding-usage).

If you have further questions about using {% data variables.product.prodname_GH_advanced_security %}, you can contact your account manager in {% data variables.contact.contact_enterprise_sales %}.

{% data reusables.billing.actions-usage-delay %}

{% endif %}

## About licenses for {% data variables.product.prodname_GH_advanced_security %}

{% ifversion billing-auth-and-capture %}

{% data reusables.billing.authorization-charge %}

{% endif %}

{% ifversion fpt %}

{% data reusables.advanced-security.ghas-license-info-for-fpt %}

> [!NOTE]
> If you change the visibility of a public repository to private then {% data variables.product.prodname_GH_advanced_security %} will be disabled for that repository.

For pricing details for {% data variables.product.prodname_GH_advanced_security %}, see our [pricing information](https://github.com/enterprise/advanced-security#pricing).

{% data reusables.advanced-security.ghas-products-tip %}

{% elsif ghec %}

If you want to use {% data variables.product.prodname_GH_advanced_security %} features on any repository apart from a public repository on {% data variables.product.prodname_dotcom_the_website %}, you will need a {% data variables.product.prodname_GH_advanced_security %} license. For more information about {% data variables.product.prodname_GH_advanced_security %}, see [AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security).

{% data reusables.advanced-security.ghas-products-tip %}

{% ifversion security-configurations %}
{% data reusables.security-configurations.managing-GHAS-licenses %}

{% endif %}

{% data reusables.advanced-security.ghas-trial-availability %} See [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/setting-up-a-trial-of-github-advanced-security).

{% data reusables.advanced-security.ghas-trial-invoiced %}

For other billing-related questions, contact {% data variables.contact.github_support %}.

{% elsif ghes %}

You can make extra features for code security available to users by buying and uploading a license for {% data variables.product.prodname_GH_advanced_security %}. For more information about {% data variables.product.prodname_GH_advanced_security %}, see [AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security).

{% data reusables.advanced-security.ghas-products-tip %}

{% ifversion security-configurations %}
{% data reusables.security-configurations.managing-GHAS-licenses %}

{% endif %}

{% endif %}

{% ifversion ghes or ghec %}

## License size

{% ifversion metered-ghe-ghas %}

> [!IMPORTANT] If you have access to usage-based billing for {% data variables.product.prodname_GH_advanced_security %}, you will pay for the licenses you use each month and will not have a license limit. See [AUTOTITLE](/billing/using-the-enhanced-billing-platform-for-enterprises/about-usage-based-billing-for-licenses).

{% endif %}

Each license for {% data variables.product.prodname_GH_advanced_security %} specifies a maximum number of accounts that can use these features. Each active committer to at least one repository with the feature enabled uses one license. A committer is considered active if one of their commits has been pushed to the repository within the last 90 days, regardless of when it was originally authored.

When you remove a user from your enterprise account, the user's license is freed within 24 hours.

{% ifversion ghes %}
You can determine how many licenses you'll need for {% data variables.product.prodname_GH_advanced_security %} by generating a count of your instance's active committers in the site admin dashboard. See [AUTOTITLE](/admin/configuration/configuring-your-enterprise/site-admin-dashboard#advanced-security-committers).
{% endif %}

If you are over your license limit, {% data variables.product.prodname_GH_advanced_security %} continues to work on all repositories where it is already enabled. However, in organizations where {% data variables.product.prodname_GH_advanced_security %} is enabled for new repositories, repositories will be created with the feature deactivated. In addition, the option to enable {% data variables.product.prodname_GH_advanced_security %} for existing repositories will not be available.

As soon as you free up some licenses, by deactivating {% data variables.product.prodname_GH_advanced_security %} for some repositories or by increasing your license size, the options for activating {% data variables.product.prodname_GH_advanced_security %} will work again as normal.

You can enforce policies to allow or disallow the use of {% data variables.product.prodname_advanced_security %} by organizations owned by your enterprise account. See [AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise).

For more information on viewing license usage, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage).

## Active committers and unique committers

We record and display two numbers of active committers for {% data variables.product.prodname_GH_advanced_security %} on {% data variables.location.product_location %}:

* **Active committers** is the number of committers who contributed to at least one {% ifversion fpt or ghec %}private {% endif %}organization-owned repository{% ifversion secret-scanning-user-owned-repos %} or one user-owned repository{% ifversion ghec %} when using {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_emus %}{% endif %}{% endif %}, and who use a license in your enterprise. That is, they are also an organization member, an external collaborator, or have a pending invitation to join an organization in your enterprise, and they are not a {% data variables.product.prodname_github_app %} bot. For information about differences between bot and machine accounts, see [AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/differences-between-github-apps-and-oauth-apps#machine-vs-bot-accounts).
* **Unique to this repository/organization** is the number of active committers who contributed only to this repository, or to repositories in this organization. This number shows how many licenses you can free up by deactivating {% data variables.product.prodname_GH_advanced_security %} for that repository or organization.

If there are no unique active committers, all active committers also contribute to other repositories or organizations that use {% data variables.product.prodname_GH_advanced_security %}. Deactivating the feature for that repository or organization would not free any licenses for {% data variables.product.prodname_GH_advanced_security %}.

> [!NOTE] Users can contribute to multiple repositories or organizations. Usage is measured across the whole enterprise account to ensure that each member uses one license regardless of how many repositories or organizations the user contributes to.

When you activate or deactivate {% data variables.product.prodname_advanced_security %} for repositories, {% data variables.product.prodname_dotcom %} displays an overview of changes to the use of your license. If you deactivate access to {% data variables.product.prodname_GH_advanced_security %}, any licenses used by unique active committers are freed up.

{% ifversion ghec %}
For more information on managing the number of committers, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/managing-your-github-advanced-security-licensing).
{% endif %}

## Understanding usage

{% ifversion metered-ghe-ghas %}

The following example timeline demonstrates how active committer count for {% data variables.product.prodname_GH_advanced_security %} could change over time in an enterprise. For each month, you will find events, along with the resulting committer count and the effect on usage-based billing.

| Date | Events during the month | Total committers | Effect on usage-based billing |
| :- | :- | -: | :- |
| <span style="white-space: nowrap;">April 15</span> | A member of your enterprise enables {% data variables.product.prodname_GH_advanced_security %} for repository **X**. Repository **X** has 50 committers over the past 90 days. | **50** | Billing begins for 50 committers. |
| <span style="white-space: nowrap;">May 1</span> | Developer **A** leaves the team working on repository **X**. Developer **A**'s contributions continue to count for 90 days. | **50** | No immediate change. Developer **A** continues to be billed until their contributions are inactive for 90 days. |
| <span style="white-space: nowrap;">August 1</span> | Developer **A**'s contributions no longer count towards the licenses required, because 90 days have passed. | 50 - 1 =<br>**49** | Developer **A** is removed from the billing count, reducing the billable committers to 49. |
| <span style="white-space: nowrap;">August 15</span> | A member of your enterprise enables {% data variables.product.prodname_GH_advanced_security %} for a second repository, repository **Y**. In the last 90 days, a total of 20 developers contributed to that repository. Of those 20 developers, 10 also recently worked on repo **X** and do not require additional licenses. | 49 + 10 =<br>**59** | Billing increases to 59 committers, accounting for the 10 additional unique contributors. |
| <span style="white-space: nowrap;">August 16</span> | A member of your enterprise disables {% data variables.product.prodname_GH_advanced_security %} for repository **X**. Of the 49 developers who were working on repository **X**, 10 still also work on repository **Y**, which has a total of 20 developers contributing in the last 90 days. | 49 - 29 =<br>**20** | Billing for repository **X** continues until the end of the monthly billing cycle, but the overall billing count decreases to 20 committers for the next cycle. |

{% else %}

The following example timeline demonstrates how active committer count for {% data variables.product.prodname_GH_advanced_security %} could change over time in an enterprise. For each month, you will find events, along with the resulting committer count.

| Date | Events during the month | Total committers |
| :- | :- | -: |
| <span style="white-space: nowrap;">April 15</span> | A member of your enterprise enables {% data variables.product.prodname_GH_advanced_security %} for repository **X**. Repository **X** has 50 committers over the past 90 days. | **50** |
| <span style="white-space: nowrap;">May 1</span> | Developer **A** leaves the team working on repository **X**. Developer **A**'s contributions continue to count for 90 days. | **50** | **50** |
| <span style="white-space: nowrap;">August 1</span> | Developer **A**'s contributions no longer count towards the licenses required, because 90 days have passed. | 50 - 1 =<br>**49** |
| <span style="white-space: nowrap;">August 15</span> | A member of your enterprise enables {% data variables.product.prodname_GH_advanced_security %} for a second repository, repository **Y**. In the last 90 days, a total of 20 developers contributed to that repository. Of those 20 developers, 10 also recently worked on repo **X** and do not require additional licenses. | 49 + 10 =<br>**59** |
| <span style="white-space: nowrap;">August 16</span> | A member of your enterprise disables {% data variables.product.prodname_GH_advanced_security %} for repository **X**. Of the 49 developers who were working on repository **X**, 10 still also work on repository **Y**, which has a total of 20 developers contributing in the last 90 days. | 49 - 29 =<br>**20** |

{% endif %}

> [!NOTE] A user will be flagged as active when their commits are pushed to any branch of a repository, even if the commits were authored more than 90 days ago.

## Getting the most out of {% data variables.product.prodname_GH_advanced_security %}

When you decide which repositories and organizations to prioritize for {% data variables.product.prodname_GH_advanced_security %}, you should review them and identify:

* Codebases that are the most critical to your company's success. These are the projects for which the introduction of vulnerable code, hard-coded secrets, or insecure dependencies would have the greatest impact on your company.
* Codebases with the highest commit frequency. These are the most actively developed projects, consequently there is a higher risk that security problems could be introduced.

When you have enabled {% data variables.product.prodname_GH_advanced_security %} for these organizations or repositories, assess which other codebases you could add without incurring billing for unique active committers. Finally, review the remaining important and busy codebases. If you want to increase the number of licensed active committers, contact {% data variables.contact.contact_enterprise_sales %}.

{% ifversion ghas-in-license-sync %}
If your enterprise uses {% data variables.product.prodname_GH_advanced_security %} on both {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}, you can ensure users aren't consuming multiple licenses unnecessarily by synchronizing license usage between environments.{% ifversion ghec %} {% data variables.product.prodname_GH_advanced_security %} is included in license sync in {% data variables.product.prodname_ghe_server %} version 3.12 and later.{% endif %} See [AUTOTITLE](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud).
{% endif %}

{% endif %}
