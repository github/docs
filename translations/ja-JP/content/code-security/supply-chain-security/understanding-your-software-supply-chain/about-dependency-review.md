---
title: About dependency review
intro: 'Dependency review lets you catch insecure dependencies before you introduce them to your environment, and provides information on license, dependents, and age of dependencies.'
product: '{% data reusables.gated-features.dependency-review %}'
shortTitle: Dependency review
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: '*'
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

Sometimes you might just want to update the version of one dependency in a manifest and generate a pull request. However, if the updated version of this direct dependency also has updated dependencies, your pull request may have more changes than you expected. The dependency review for each manifest and lock file provides an easy way to see what has changed, and whether any of the new dependency versions contain known vulnerabilities.

By checking the dependency reviews in a pull request, and changing any dependencies that are flagged as vulnerable, you can avoid vulnerabilities being added to your project. For more information about how dependency review works, see "[Reviewing dependency changes in a pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)."

For more information about configuring dependency review, see "[Configuring dependency review](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review)."

{% data variables.product.prodname_dependabot_alerts %} will find vulnerabilities that are already in your dependencies, but it's much better to avoid introducing potential problems than to fix problems at a later date. For more information about {% data variables.product.prodname_dependabot_alerts %}, see "[About {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)."

Dependency review supports the same languages and package management ecosystems as the dependency graph. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)."

For more information on supply chain features available on {% data variables.product.product_name %}, see "[About supply chain security](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)."

{% ifversion ghec or ghes %}
## Enabling dependency review

The dependency review feature becomes available when you enable the dependency graph. For more information, see "{% ifversion ghec %}[Enabling the dependency graph](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph){% elsif ghes %}[Enabling the dependency graph for your enterprise](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise){% endif %}."
{% endif %}

{% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6396 %}
## Dependency review enforcement

{% data reusables.dependency-review.dependency-review-action-beta-note %}

The action is available for all {% ifversion fpt or ghec %}public repositories, as well as private {% endif %}repositories that have {% data variables.product.prodname_GH_advanced_security %} enabled.

You can use the {% data variables.product.prodname_dependency_review_action %} in your repository to enforce dependency reviews on your pull requests. The action scans for vulnerable versions of dependencies introduced by package version changes in pull requests, and warns you about the associated security vulnerabilities. This gives you better visibility of what's changing in a pull request, and helps prevent vulnerabilities being added to your repository. For more information, see [`dependency-review-action`](https://github.com/actions/dependency-review-action).

![Dependency review action example](/assets/images/help/graphs/dependency-review-action.png)

By default, the {% data variables.product.prodname_dependency_review_action %} check will fail if it discovers any vulnerable packages. A failed check blocks a pull request from being merged when the repository owner requires the dependency review check to pass. For more information, see "[About protected branches](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging)."

The action uses the Dependency Review REST API to get the diff of dependency changes between the base commit and head commit. You can use the Dependency Review API to get the diff of dependency changes, including vulnerability data, between any two commits on a repository. For more information, see "[Dependency review](/rest/reference/dependency-graph#dependency-review)."

{% ifversion dependency-review-action-configuration %}
You can configure the {% data variables.product.prodname_dependency_review_action %} to better suit your needs. For example, you can specify the severity level that will make the action fail, or set an allow or deny list for licenses to scan. For more information, see "[Configuring dependency review](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review#configuring-the-dependency-review-github-action)." 
{% endif %}

{% endif %}

