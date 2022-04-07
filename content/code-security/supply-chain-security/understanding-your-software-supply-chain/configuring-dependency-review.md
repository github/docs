---
title: Configuring dependency review
intro: 'You can use dependency review to avoid vulnerabilities being added to your project.'
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
redirect_from:
  - /code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review#enabling-dependency-review
---

{% data reusables.dependency-review.beta %}

## About dependency review

{% data reusables.dependency-review.feature-overview %}   

For more information, see "[About dependency review](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)" and "[Reviewing dependency changes in a pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)."

## About configuring dependency review

{% ifversion fpt %}
Dependency review is available in all public repositories in all products and cannot be disabled. Dependency review is available in private repositories owned by organizations that use GitHub Enterprise Cloud and have a license for {% data variables.product.prodname_GH_advanced_security %}. For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review).

{% elsif ghec %}
Dependency review is included in {% data variables.product.product_name %} for public repositories. To use dependency review in private repositories owned by organizations, you must have a license for {% data variables.product.prodname_GH_advanced_security %} and have the dependency graph enabled. For more information, see "[Exploring the dependencies of a repository](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository)." 

Repository administrators can enable or disable the dependency graph for private repositories.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
1. Read the message about granting {% data variables.product.product_name %} read-only access to the repository data to enable the dependency graph, then next to "Dependency Graph", click **Enable**.
   !["Enable" button for the dependency graph](/assets/images/help/repository/dependency-graph-enable-button.png)

You can disable the dependency graph at any time by clicking **Disable** next to "Dependency Graph" on the Security & analysis tab.

{% elsif ghes or ghae %}
Dependency review is available when dependency graph is enabled for {% data variables.product.product_location %} and {% data variables.product.prodname_advanced_security %} is enabled for the organization or repository. For more information, see "[Enabling {% data variables.product.prodname_GH_advanced_security %} for your enterprise](/admin/code-security/managing-github-advanced-security-for-your-enterprise/enabling-github-advanced-security-for-your-enterprise)."
### Enabling the dependency graph for {% data variables.product.product_location %}
{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}{% ifversion ghes %}
1. Under "{% ifversion ghes < 3.2 %}{% data variables.product.prodname_advanced_security %}{% else %}Security{% endif %}," enable the dependency graph.
{% ifversion ghes > 3.1 %}![Checkbox to enable or disable {% data variables.product.prodname_advanced_security %} features](/assets/images/enterprise/3.2/management-console/enable-security-checkboxes.png){% else %}![Checkbox to enable or disable {% data variables.product.prodname_advanced_security %} features](/assets/images/enterprise/management-console/enable-advanced-security-checkboxes.png){% endif %}{% else %}
1. Under "{% data variables.product.prodname_advanced_security %}," click **{% data variables.product.prodname_code_scanning_capc %}**.
![Checkbox to enable or disable {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/management-console/enable-code-scanning-checkbox.png){% endif %}
{% data reusables.enterprise_management_console.save-settings %}

When {% data variables.product.product_name %} has finished restarting, you're ready to set up any additional resources required for newly enabled features.
{% endif %}
