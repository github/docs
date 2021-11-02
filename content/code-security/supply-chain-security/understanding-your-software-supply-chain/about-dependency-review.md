---
title: About dependency review
intro: 'Dependency review lets you catch vulnerable dependencies before you introduce them to your environment, and provides information on license, dependents, and age of dependencies.'
product: '{% data reusables.gated-features.dependency-review %}'
shortTitle: Dependency review
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: issue-4864
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Dependency review
  - Vulnerabilities
  - Dependencies
  - Pull requests
redirect_from:
  - /code-security/supply-chain-security/about-dependency-review
---

{% data reusables.dependency-review.beta %}

## About dependency review

{% data reusables.dependency-review.feature-overview %}

If a pull request targets your repository's default branch and contains changes to package manifests or lock files, you can display a dependency review to see what has changed. The dependency review includes details of changes to indirect dependencies in lock files, and it tells you if any of the added or updated dependencies contain known vulnerabilities.

{% ifversion fpt or ghec %}
Dependency review is available in:

* All public repositories. 
* Private repositories owned by organizations with an {% data variables.product.prodname_advanced_security %} license that have the dependency graph enabled. For more information, see "[Exploring the dependencies of a repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)."
{% elsif ghes or ghae %}
Dependency review is available when dependency graph is enabled for {% data variables.product.product_location %} and {% data variables.product.prodname_advanced_security %} is enabled for the organization or repository.
{% endif %}

Sometimes you might just want to update the version of one dependency in a manifest and generate a pull request. However, if the updated version of this direct dependency also has updated dependencies, your pull request may have more changes than you expected. The dependency review for each manifest and lock file provides an easy way to see what has changed, and whether any of the new dependency versions contain known vulnerabilities.

By checking the dependency reviews in a pull request, and changing any dependencies that are flagged as vulnerable, you can avoid vulnerabilities being added to your project. For more information about how dependency review works, see "[Reviewing dependency changes in a pull request](/github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request)."

{% data variables.product.prodname_dependabot_alerts %} will find vulnerabilities that are already in your dependencies, but it's much better to avoid introducing potential problems than to fix problems at a later date. For more information about {% data variables.product.prodname_dependabot_alerts %}, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)."

Dependency review supports the same languages and package management ecosystems as the dependency graph. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)."

## Enabling dependency review

The dependency review feature becomes available when you enable the dependency graph. {% ifversion fpt or ghec %}For more information, see "[Enabling the dependency graph](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph)."{% endif %}{% ifversion ghes or ghae %}For more information, see "[Enabling the dependency graph and Dependabot alerts on your enterprise account](/admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-the-dependency-graph-and-dependabot-alerts-on-your-enterprise-account)."{% endif %}
