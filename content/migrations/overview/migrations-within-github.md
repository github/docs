---
title: About migrations between GitHub products
shortTitle: Migrations within GitHub
intro: 'Why should I move between {% data variables.product.github %} platforms, and what do I need to consider?'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
category:
  - Plan your migration
---

## When would I migrate between platforms?

You can use {% data variables.product.github %}'s migration tools to move **between** {% data variables.product.github %} platforms. For example:

* If you want to adopt {% data variables.enterprise.data_residency %}, you can migrate your enterprise to {% data variables.enterprise.data_residency_site %}.
* To use certain features on {% data variables.product.prodname_dotcom_the_website %}, such as {% data variables.product.prodname_emus %} or new billing models, you can migrate between enterprises on {% data variables.product.prodname_dotcom_the_website %}.
* To benefit from the simplified administration and new features of {% data variables.product.prodname_ghe_cloud %}, you can migrate from {% data variables.product.prodname_ghe_server %}.

## Considerations for migrations to {% data variables.product.prodname_ghe_cloud %}

* If you **already use {% data variables.product.prodname_ghe_cloud %}**: A {% data variables.product.prodname_enterprise %} plan entitles you to **only one** deployment of {% data variables.product.prodname_ghe_cloud %}.

  For example, if you already use {% data variables.product.prodname_dotcom_the_website %}, and you also want to migrate from {% data variables.product.prodname_ghe_server %} to {% data variables.enterprise.data_residency_site %}, your usage for both won't be covered under a single plan.
* If you're **migrating to {% data variables.product.prodname_emus %}**: You will need to integrate with an identity provider to manage user accounts. Check the level of support for your identity provider before you start. See [AUTOTITLE](/enterprise-cloud@latest/admin/managing-iam/understanding-iam-for-enterprises/about-enterprise-managed-users#identity-management-systems).
* If you're **migrating from {% data variables.product.prodname_ghe_server %}**: Be aware that {% data variables.product.company_short %} applies rate limits to certain actions, which are disabled by default on {% data variables.product.prodname_ghe_server %}. See [AUTOTITLE](/enterprise-cloud@latest/rest/using-the-rest-api/rate-limits-for-the-rest-api).
* If you're **migrating to {% data variables.enterprise.data_residency %}**: Be aware that certain features are unavailable, and some features require different or additional configuration. See [AUTOTITLE](/enterprise-cloud@latest/admin/data-residency/feature-overview-for-github-enterprise-cloud-with-data-residency).

## Available tools

For an overview of available tooling for your migration path, see [AUTOTITLE](/migrations/overview/migration-paths-to-github).
