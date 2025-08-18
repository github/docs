---
title: '{% data variables.product.prodname_GHAS %} license billing'
intro: 'Learn how usage of {% data variables.product.prodname_AS %} features is measured and how to pay for additional licenses.'
product: '{% data reusables.gated-features.ghas-billing %}'
redirect_from:
# Article on migrating to two separate SKUs
  - /billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/migrating-from-ghas-to-cs-and-sp
  - /billing/how-tos/products/migrate-from-ghas
# This article
  - /admin/advanced-security/about-licensing-for-github-advanced-security
  - /billing/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security
  - /billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security
  - /billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Advanced Security
  - Billing
  - Enterprise
  - Licensing
shortTitle: GitHub Advanced Security
contentType: concepts
---

## Licenses for {% data variables.product.prodname_GHAS %}

{% ifversion ghas-products %}

The {% data variables.product.prodname_AS %} product has two license SKUs (stock keeping units):

{% data reusables.advanced-security.ghas-products-bullets+ghas %}

{% else %}
You can make extra features available to users by buying a license for {% data variables.product.prodname_AS %} products.
{% endif %}

For more information, see [feature summary and pricing information](https://github.com/enterprise/advanced-security#pricing) and [AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security).

## How usage of {% data variables.product.prodname_GHAS %} licenses is measured

A subset of {% data variables.product.prodname_AS %} features are available to **all public repositories** on {% data variables.product.prodname_dotcom_the_website %} **free of charge**. If you change the visibility of a public repository to private and don't pay for {% data variables.product.prodname_AS %}, {% data variables.product.prodname_AS %} features will be disabled for that repository.

Use of {% data variables.product.prodname_AS %} features in **all other repositories requires a license**. Your license usage is calculated based on the number of **unique, active committers** to repositories with {% data variables.product.prodname_GH_cs_or_sp %} features enabled. {% data variables.product.prodname_github_app %} bots are ignored. For information about differences between bot and machine accounts, see [AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/differences-between-github-apps-and-oauth-apps#machine-vs-bot-accounts).

### Active and unique committers

Each **active committer** to at least one repository with an {% data variables.product.prodname_AS %} feature enabled uses **one license**. A committer is considered active if one of their commits has been pushed to the repository within the last 90 days, regardless of when it was originally authored.

* **Active committers** are committers who contributed to at least one repository  and have a {% data variables.product.prodname_team %} or {% data variables.product.prodname_enterprise %} license with your organization or enterprise. That is, they are also a member, an enterprise-managed user, an external collaborator, or have a pending invitation to join your organization or enterprise.
* **Unique committers** is the number of active committers who contributed only to one repository, or only to repositories in one organization. You can free up this number of licenses by disabling {% data variables.product.prodname_GH_cs_or_sp %} for that repository or organization.

> [!NOTE] When a repository is migrated to GitHub, GitHub Advanced Security only consumes licenses for commits and pushes made after migration, rather than considering all historic contributions from before the migration.

{% ifversion security-configurations %}You can see the active and unique committers to an organization on the Global settings page for {% data variables.product.UI_advanced_security %}. Under "{% data variables.product.prodname_secret_protection %} repositories" and "{% data variables.product.prodname_code_security %} repositories", summaries and repository-level details are reported. See [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/configuring-global-security-settings-for-your-organization).{% endif %}

## Free use of {% data variables.product.prodname_GHAS %} features

{% data variables.product.github %} makes some {% data variables.product.prodname_AS %} features available free of charge on {% data variables.product.prodname_dotcom_the_website %}.

* **All public repositories** have access to code scanning, secret scanning, and dependency review.
* **Secret risk assessment** is available for organizations on {% data variables.product.prodname_dotcom_the_website %}. See {% ifversion fpt or ghec %}[AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/viewing-the-secret-risk-assessment-report-for-your-organization){% elsif ghes %}[AUTOTITLE](/enterprise-cloud@latest/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/viewing-the-secret-risk-assessment-report-for-your-organization) in the {% data variables.product.prodname_ghe_cloud %} documentation{% endif %}.

For full details of available features, see [AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security).

You need to **pay** to use {% data variables.product.prodname_AS %} features in **private repositories** on {% data variables.product.prodname_dotcom_the_website %}, and in all repositories hosted by {% data variables.enterprise.data_residency_site %} and {% data variables.product.prodname_ghe_server %}.

## Using more than your planned licenses

Your account may have a limit on the number of licenses you can use. For example, volume billing specifies a set number of licenses.

If your number of unique, active committers exceeds your license limit, features controlled by {% data variables.product.prodname_AS %} licensing continue to work on all repositories where they are already enabled.

However, you will not be able to enable {% data variables.product.prodname_GHAS_cs_or_sp %} on any additional repositories. Any new repositories created in organizations where {% data variables.product.prodname_GHAS_cs_or_sp %} are configured to be enabled automatically will be created with the products disabled.

## Paying for {% data variables.product.prodname_GHAS %} licenses

You pay for additional licenses using the payment method set up for your {% data variables.product.github %} account.{% ifversion fpt or ghec %} See [AUTOTITLE](/billing/how-tos/set-up-payment/manage-payment-info).{% endif %}

There are two different ways to pay for licenses.

* **Metered billing** available for {% data variables.product.prodname_ghe_cloud %} and from {% data variables.product.prodname_ghe_server %} 3.13 onward with {% data variables.product.prodname_github_connect %}

  * Users can enable {% data variables.product.prodname_GH_cs_or_sp %} independently.
  * Monthly bill for the number of licenses used by active committers.
  * No pre-defined license limit.
  * No overage state, you pay only for what you use.
  > [!NOTE]
  > On {% data variables.product.prodname_ghe_server %}, metered use of {% data variables.product.prodname_AS %} products is billed through the linked enterprise account on {% data variables.product.prodname_ghe_cloud %}.

* **Volume/subscription billing** available for {% data variables.product.prodname_enterprise %} plans only

  * Purchase a specific number of {% data variables.product.prodname_GHAS_cs_or_sp %} licenses that last for a defined period, typically at least a year, see {% ifversion fpt or ghec %}[AUTOTITLE](/billing/how-tos/products/add-advanced-security){% elsif ghes %}[AUTOTITLE](/enterprise-cloud@latest/billing/how-tos/products/add-advanced-security) in the {% data variables.product.prodname_ghe_cloud %} documentation{% endif %}.
  * If the usage of {% data variables.product.prodname_AS %} by active committers exceeds the number of licenses purchased, you need to purchase additional licenses to cover this overage usage.

<!-- expires 2025-08-31 -->
<!--This versioning is not needed once the related EDI PR for this article is merged (#57129).-->
{% ifversion fpt or ghec %}To view your current license usage, see [AUTOTITLE](/billing/managing-billing-for-your-products/viewing-your-product-usage).{% endif %}
<!-- end expires 2025-08-31 -->

### Understanding usage

Users can contribute to multiple repositories or organizations. Usage is measured across the whole organization or enterprise to ensure that each member uses one license regardless of how many repositories or organizations the user contributes to.

When you enable or disable {% data variables.product.prodname_GH_cs_or_sp %} for one or more repositories, {% data variables.product.github %} displays an overview of how this will change your usage.

* Metered billing, showing an increase or reduction in the number of active committers using licenses.
* Volume/subscription billing, showing the number of licenses used or freed by unique active committers.

### Example showing how the active committer count changes over time

The following example timeline demonstrates how the unique, active committer count for {% data variables.product.prodname_AS %} licenses could change over time in an organization or enterprise. For each month, you will find events, along with the resulting committer count and the effect on usage-based billing.

| Date | Events during the month | Unique, active committers | Effect on usage-based billing |
| :- | :- | -: | :- |
| <span style="white-space: nowrap;">April 15</span> | A member of your enterprise enables {% data variables.product.prodname_GH_cs_and_sp %} for repository **X**. Repository **X** has 50 committers over the past 90 days. | **50** | Billing begins for 50 committers. |
| <span style="white-space: nowrap;">May 1</span> | Developer **A** switches teams and stops committing to repository **X**. Developer **A**'s contributions continue to count for 90 days. | **50** | No immediate change. Developer **A** continues to be billed until their contributions are inactive for 90 days. |
| <span style="white-space: nowrap;">August 1</span> | Developer **A**'s contributions no longer count towards the licenses required, because 90 days have passed. | 50 - 1 =<br>**49** | Developer **A** is removed from the billing count, reducing the billable committers to 49. |
| <span style="white-space: nowrap;">August 15</span> | A member of your enterprise enables {% data variables.product.prodname_GH_cs_and_sp %} for a second repository, repository **Y**. In the last 90 days, a total of 20 developers contributed to that repository. Of those 20 developers, 10 also recently worked on repo **X** and do not require additional licenses. | 49 + 10 =<br>**59** | Billing increases to 59 committers, accounting for the 10 additional unique contributors. |
| <span style="white-space: nowrap;">August 16</span> | A member of your enterprise disables {% data variables.product.prodname_GH_cs_and_sp %} for repository **X**. Of the 49 developers who were working on repository **X**, 10 still also work on repository **Y**, which has a total of 20 developers contributing in the last 90 days. | 49 - 29 =<br>**20** | Billing for repository **X** continues until the end of the monthly billing cycle, but the overall billing count decreases to 20 committers for the next cycle. |

## Managing your budget for {% data variables.product.prodname_AS %}

The options available for managing committers and costs depend on your billing model.

### Metered billing

You can control usage and costs with budgets and alerts. If you use {% data variables.product.prodname_ghe_cloud %}, then you can also use cost centers and policies to control costs.
See {% data reusables.advanced-security.control-use-cost-links %}.

{% data reusables.billing.actions-usage-delay %}

If your enterprise uses {% data variables.product.prodname_AS %} on both {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}, you can ensure users don't consume multiple licenses unnecessarily by synchronizing license usage between environments. See [AUTOTITLE](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud).

### Volume/subscription billing

Each license specifies a maximum number of accounts that can use {% data variables.product.prodname_AS %}. Each active committer to at least one repository with the product enabled consumes one license. When you remove a user from your {% data variables.enterprise.enterprise_or_org %} account, the user's license is freed within 24 hours.

As soon as you make licenses available, by disabling {% data variables.product.prodname_GHAS_cs_or_sp %} in some repositories, or by increasing your license size, the options for enabling {% data variables.product.prodname_GHAS_cs_and_sp %} will work again as normal.

You can enforce policies to allow or disallow the use of {% data variables.product.prodname_AS %} by organizations owned by your enterprise account. See [AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise).

> [!TIP]
> All standalone instances of {% data variables.product.prodname_ghe_server %} use volume/subscription licenses. Contact [{% data variables.product.github %}'s Sales team](https://enterprise.github.com/contact) if you want to make changes to your license.

## Further reading

{%- ifversion fpt or ghec or ghes > 3.15 %}
* [AUTOTITLE](/code-security/trialing-github-advanced-security/planning-a-trial-of-ghas){% endif %}
{%- ifversion fpt or ghec or ghes > 3.14 %}
* [AUTOTITLE](/code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/about-enabling-security-features-at-scale){% endif %}
{%- ifversion fpt or ghec or ghes > 3.15 %}
* [AUTOTITLE](/admin/managing-code-security/securing-your-enterprise/about-security-configurations){% else %}
* [AUTOTITLE](/admin/managing-code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise){% endif %}
* [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise)
