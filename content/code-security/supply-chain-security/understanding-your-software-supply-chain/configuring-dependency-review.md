---
title: Configuring dependency review
intro: 'You can use dependency review to catch vulnerabilities before they are added to your project.'
shortTitle: Configure dependency review
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: issue-4864
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Dependency review
  - Vulnerabilities
  - Dependencies
  - Pull requests
---

{% data reusables.dependency-review.beta %}

## About dependency review

{% data reusables.dependency-review.feature-overview %}   

For more information, see "[About dependency review](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)" and "[Reviewing dependency changes in a pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)."

## About configuring dependency review

{% ifversion fpt %}
Dependency review is available in all public repositories in all products and cannot be disabled. Dependency review is available in private repositories owned by organizations that use GitHub Enterprise Cloud and have a license for [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security). For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review).

{% elsif ghec %}
Dependency review is included in {% data variables.product.product_name %} for public repositories. To use dependency review in private repositories owned by organizations, you must have a license for [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) and have the dependency graph enabled.

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}

{% elsif ghes or ghae %}
Dependency review is available when dependency graph is enabled for {% data variables.product.product_location %} and {% data variables.product.prodname_advanced_security %} is enabled for the organization or repository. For more information, see "[Enabling {% data variables.product.prodname_GH_advanced_security %} for your enterprise](/admin/code-security/managing-github-advanced-security-for-your-enterprise/enabling-github-advanced-security-for-your-enterprise)."

### Checking if the dependency graph is enabled

{% note %}

**Note:** Your site administrator or organization owner can access the repository settings.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "Code security and analysis", check if the dependency graph is enabled. The control for "{% data variables.product.prodname_GH_advanced_security %}" is disabled if your enterprise has no available licenses for {% data variables.product.prodname_advanced_security %}.{% ifversion ghes > 3.2 %}
  !["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/enterprise/3.3/repository/security-and-analysis-disable-or-enable-ghes.png){% else %}
  !["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/enterprise/3.1/help/repository/security-and-analysis-disable-or-enable-ghes.png){% endif %}
{% endif %}
