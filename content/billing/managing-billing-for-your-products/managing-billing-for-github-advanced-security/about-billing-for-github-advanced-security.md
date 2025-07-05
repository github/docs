---
title: About billing for {% data variables.product.prodname_GHAS %}
intro: 'Learn about the licensing models for {% data variables.product.prodname_AS %} products and how the use of {% data variables.product.prodname_GHAS_cs_and_sp %} licenses is calculated.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.ghas-billing %}'
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

{% ifversion fpt or ghec %}
{% data variables.product.github %} makes a subset of {% data variables.product.prodname_AS %} features available, free of charge, to all public repositories on {% data variables.product.prodname_dotcom_the_website %}. In addition, you can get insight into your exposure to leaked secrets with a free {% data variables.product.prodname_secret_risk_assessment %}. See [AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/viewing-the-secret-risk-assessment-report-for-your-organization).

You need pay to use {% data variables.product.prodname_AS %} features in private repositories. If you change the visibility of a public repository to private and don't pay for {% data variables.product.prodname_AS %}, {% data variables.product.prodname_AS %} features will be disabled for that repository.

{% endif %}

{% ifversion ghas-products %}

## License types for {% data variables.product.prodname_AS %} products

{% data variables.product.prodname_AS %} consists of two main products:

{% data reusables.advanced-security.ghas-products-bullets+ghas %}

Licensing for {% data variables.product.prodname_AS %} products is flexible, making it easy for you to choose options that fit your business needs. For example, you might start by using {% data variables.product.prodname_GH_secret_protection %} across all repositories, and pilot {% data variables.product.prodname_GH_code_security %} in high-risk repositories. You buy or pay only for the products you need, and expand as you see the benefits to the security of your code.

For more information, see [feature summary and pricing information](https://github.com/enterprise/advanced-security#pricing) and [AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security).

{% else %}
You can make extra features available to users with a license for {% data variables.product.prodname_AS %} products. For more information, see [AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security).

{% endif %}

## Billing models for {% data variables.product.prodname_AS %} products

Each active committer to at least one repository with an {% data variables.product.prodname_AS %} product enabled uses one license. A committer is considered active if one of their commits has been pushed to the repository within the last 90 days, regardless of when it was originally authored.

There are two different ways to pay for licenses.

* **Metered billing** {% ifversion ghes %}available from {% data variables.product.prodname_ghe_server %} 3.13 onward with {% data variables.product.prodname_github_connect %}{% endif %}

  * Users can enable {% data variables.product.prodname_GH_cs_or_sp %} independently.
  * Monthly bill for the number of licenses used by active committers.
  * No pre-defined license limit.
  * No overage state, you pay only for what you use.{% ifversion ghec or ghes %}
  > [!NOTE]
  > On {% data variables.product.prodname_ghe_server %}, metered use of {% data variables.product.prodname_AS %} products is billed through the linked enterprise account on {% data variables.product.prodname_ghe_cloud %}.

{% endif %}

* **Volume/subscription billing** available for {% data variables.product.prodname_enterprise %} plans only

  * Purchase a specific number of {% data variables.product.prodname_GHAS_cs_or_sp %} licenses that last for a defined period, typically at least a year.
  * If the usage of {% data variables.product.prodname_AS %} by active committers exceeds the number of licenses purchased, you need to purchase additional licenses to cover this overage usage.

   If you want to purchase volume/subscription-based licenses, contact your account manager in {% data variables.contact.contact_enterprise_sales %} or contact {% data variables.contact.contact_support_page %}.

## Managing committers and costs

{% ifversion fpt %}

With a {% data variables.product.prodname_team %} plan, you manage committers and costs by controlling usage. The options available depend on your billing platform.

{% else %}

The options available for managing committers and costs depend on your billing model and the billing platform you use.

### Metered billing
<!--Metered billing is the only option for GitHub Teams so no heading required -->

{% endif %}

Your use of {% data variables.product.prodname_AS %} is billed per committer and enabled by repository. If you remove a committer from an organization{% ifversion ghec or ghes %} or enterprise{% endif %}, or if you disable all {% data variables.product.prodname_GHAS_cs_or_sp %} features for a repository, the committers will remain billable until the end of the current monthly billing cycle. Prorated billing applies only when a committer starts partway through the month. For examples of how committers are tracked and billed, see [Understanding usage](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security#understanding-usage).

You can control usage and costs with {% ifversion ghec %}cost centers, policies, {% endif %}budgets and alerts. See {% data reusables.advanced-security.control-use-cost-links %}.

{% data reusables.billing.actions-usage-delay %}

{% ifversion ghas-in-license-sync %}
If your enterprise uses {% data variables.product.prodname_AS %} on both {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}, you can ensure users aren't consuming multiple licenses unnecessarily by synchronizing license usage between environments.{% ifversion ghec %} {% data variables.product.prodname_AS %} is included in license sync in {% data variables.product.prodname_ghe_server %} version 3.12 and later.{% endif %} See [AUTOTITLE](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud).
{% endif %}

{% ifversion ghec or ghes %}
<!--Volume/Subscription billing for GHCS and GH SP is not available for GitHub Teams-->
### Volume/subscription billing

{% endif %}

Each license specifies a maximum number of accounts that can use {% data variables.product.prodname_AS %}. Each active committer to at least one repository with the product enabled consumes one license. When you remove a user from your {% data variables.enterprise.enterprise_or_org %} account, the user's license is freed within 24 hours.

If you exceed your license limit, features controlled by {% data variables.product.prodname_AS %} licensing continue to work on all repositories where they are already enabled. However, you will not be able to enable {% data variables.product.prodname_GHAS_cs_or_sp %} on any additional repositories. Any new repositories created in organizations where {% data variables.product.prodname_GHAS_cs_or_sp %} are configured to be enabled automatically will be created with the products disabled.

As soon as you make licenses available, by disabling {% data variables.product.prodname_GHAS_cs_or_sp %} in some repositories, or by increasing your license size, the options for enabling {% data variables.product.prodname_GHAS_cs_and_sp %} will work again as normal. {% ifversion ghes %}All standalone instances of {% data variables.product.prodname_ghe_server %} use volume/subscription licenses. Contact [{% data variables.product.github %}'s Sales team](https://enterprise.github.com/contact) if you want to make changes to your license.{% endif %}

You can enforce policies to allow or disallow the use of {% data variables.product.prodname_AS %} by organizations owned by your enterprise account. See [AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise).

## Active and unique committers

The number of unique, active committers who use {% data variables.product.prodname_GH_cs_or_sp %} controls your license use.

{% ifversion security-configurations %}You can see the active and unique committers to an organization on the Global settings page for {% data variables.product.UI_advanced_security %}. Under "{% data variables.product.prodname_secret_protection %} repositories" and "{% data variables.product.prodname_code_security %} repositories" summary and repository-level details are reported. See [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/configuring-global-security-settings-for-your-organization).{% endif %}

{% ifversion fpt %}
* **Active committers** is the number of committers who contributed to at least one organization-owned repository, and who use a license in your organization. That is, they are also an organization member, an external collaborator, or have a pending invitation to join your organization, and they are not a {% data variables.product.prodname_github_app %} bot.
{% else %}
* **Active committers** is the number of committers who contributed to at least one organization-owned repository{% ifversion secret-scanning-user-owned-repos %} or one user-owned repository{% endif %}, and who use a license in your enterprise. That is, they are also an organization member, an external collaborator, or have a pending invitation to join an organization in your enterprise, and they are not a {% data variables.product.prodname_github_app %} bot.
{% endif %} For information about differences between bot and machine accounts, see [AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/differences-between-github-apps-and-oauth-apps#machine-vs-bot-accounts).
* **Unique committers** is the number of active committers who contributed only to a repository, or to repositories in an organization. This number shows how many licenses you can free up by disabling {% data variables.product.prodname_GH_cs_or_sp %} for that repository or organization.

> [!NOTE] When a repository is migrated to GitHub, GitHub Advanced Security only consumes licenses for commits and pushes made after migration, rather than considering all historic contributions from before the migration.

If there are no unique committers to a repository or organization, all active committers also contribute to other repositories or organizations that use {% data variables.product.prodname_AS %} licenses. Disabling a product for that repository or organization would not free any licenses or lower your usage costs.

## Understanding usage

Users can contribute to multiple repositories or organizations. Usage is measured across the whole {% data variables.enterprise.enterprise_or_org %} to ensure that each member uses one license regardless of how many repositories or organizations the user contributes to.

When you enable or disable {% data variables.product.prodname_GH_cs_or_sp %} for one or more repositories, {% data variables.product.github %} displays an overview of how this will change your usage.

* Metered billing, showing an increase or reduction in the number of active committers using licenses.
* Volume/subscription billing, showing the number of licenses used or freed by unique active committers.

The following example timeline demonstrates how the active committer count for {% data variables.product.prodname_AS %} products could change over time in an enterprise. For each month, you will find events, along with the resulting committer count and the effect on usage-based billing.

> [!NOTE] A user is flagged as active when their commits are pushed to any branch of a repository, even if the commits were authored more than 90 days ago.

| Date | Events during the month | Total committers | Effect on usage-based billing |
| :- | :- | -: | :- |
| <span style="white-space: nowrap;">April 15</span> | A member of your enterprise enables {% data variables.product.prodname_GH_cs_and_sp %} for repository **X**. Repository **X** has 50 committers over the past 90 days. | **50** | Billing begins for 50 committers. |
| <span style="white-space: nowrap;">May 1</span> | Developer **A** switches teams and stops committing to repository **X**. Developer **A**'s contributions continue to count for 90 days. | **50** | No immediate change. Developer **A** continues to be billed until their contributions are inactive for 90 days. |
| <span style="white-space: nowrap;">August 1</span> | Developer **A**'s contributions no longer count towards the licenses required, because 90 days have passed. | 50 - 1 =<br>**49** | Developer **A** is removed from the billing count, reducing the billable committers to 49. |
| <span style="white-space: nowrap;">August 15</span> | A member of your enterprise enables {% data variables.product.prodname_GH_cs_and_sp %} for a second repository, repository **Y**. In the last 90 days, a total of 20 developers contributed to that repository. Of those 20 developers, 10 also recently worked on repo **X** and do not require additional licenses. | 49 + 10 =<br>**59** | Billing increases to 59 committers, accounting for the 10 additional unique contributors. |
| <span style="white-space: nowrap;">August 16</span> | A member of your enterprise disables {% data variables.product.prodname_GH_cs_and_sp %} for repository **X**. Of the 49 developers who were working on repository **X**, 10 still also work on repository **Y**, which has a total of 20 developers contributing in the last 90 days. | 49 - 29 =<br>**20** | Billing for repository **X** continues until the end of the monthly billing cycle, but the overall billing count decreases to 20 committers for the next cycle. |

## Further reading

{% ifversion fpt or ghec %}
* [AUTOTITLE](/billing/managing-your-billing/using-budgets-control-spending)
* [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage)
* [AUTOTITLE](/enterprise-cloud@latest/billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/managing-your-github-advanced-security-licensing)
{% elsif ghes %}
* [AUTOTITLE](/enterprise-cloud@latest/billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage) in the documentation for {% data variables.product.prodname_ghe_cloud %}
* [AUTOTITLE](/enterprise-cloud@latest/billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/managing-your-github-advanced-security-licensing) in the documentation for {% data variables.product.prodname_ghe_cloud %}
* [AUTOTITLE](/enterprise-cloud@latest/billing/managing-your-billing/using-budgets-control-spending) in the documentation for {% data variables.product.prodname_ghe_cloud %}{% endif %}
