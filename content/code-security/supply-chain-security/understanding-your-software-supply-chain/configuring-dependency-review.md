---
title: Configuring dependency review
intro: You can use dependency review to catch vulnerabilities before they are added to your project.
shortTitle: Configure dependency review
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: '*'
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
1. If "{% data variables.product.prodname_GH_advanced_security %}" is not enabled, click **Enable** next to the feature.
   ![Screenshot of GitHub Advanced Security feature with "Enable" button emphasized](/assets/images/help/security/enable-ghas-private-repo.png)

{% elsif ghes %}
Dependency review is available when dependency graph is enabled for {% data variables.product.product_location %} and {% data variables.product.prodname_advanced_security %} is enabled for the organization or repository. For more information, see "[Enabling {% data variables.product.prodname_GH_advanced_security %} for your enterprise](/admin/code-security/managing-github-advanced-security-for-your-enterprise/enabling-github-advanced-security-for-your-enterprise)."

### Checking if the dependency graph is enabled


{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "Configure security and analysis features", check if the dependency graph is enabled. 
1. If dependency graph is enabled, click **Enable** next to "{% data variables.product.prodname_GH_advanced_security %}" to enable {% data variables.product.prodname_advanced_security %}, including dependency review. The enable button is disabled if your enterprise has no available licenses for {% data variables.product.prodname_advanced_security %}.{% ifversion ghes < 3.3 %}
  ![Screenshot of "Code security and analysis" features"](/assets/images/enterprise/3.2/repository/code-security-and-analysis-enable-ghas-3.2.png){% endif %}{% ifversion ghes > 3.2 %}
    ![Screenshot of "Code security and analysis" features"](/assets/images/enterprise/3.4/repository/code-security-and-analysis-enable-ghas-3.4.png){% endif %}
{% endif %}

{% ifversion dependency-review-action-configuration %}
## Configuring the {% data variables.product.prodname_dependency_review_action %}

{% data reusables.dependency-review.dependency-review-action-beta-note %}

The {% data variables.product.prodname_dependency_review_action %} scans your pull requests for dependency changes and raises an error if any new dependencies have existing vulnerabilities. The action is supported by an API endpoint that diffs the dependencies between any two revisions.

For more information about the action and the API endpoint, see "[About dependency review](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review#dependency-review-reinforcement)" and [Dependency review](/rest/dependency-graph/dependency-review) in the API documentation, respectively.

The available configuration options are described below.

| Property | Required / optional | Description |
|------------------|-------------------------------|--------|
| `fail_on_severity` | Optional | Specifies the level of severity (`low`, `moderate`, `high`, `critical`) that causes the action to fail. |
| `allow_licenses` | Optional | .|
| `deny_licenses` | Optional | .|

The {% data variables.product.prodname_dependency_review_action %} file below shows an example of use of these properties.

```yaml{:copy}
name: 'Dependency Review'
on: [pull_request]

permissions:
  contents: read

jobs:
  dependency-review:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout Repository'
        uses: {% data reusables.actions.action-checkout %}
      - name: Dependency Review
        uses: actions/dependency-review-action@main
        with:
          # Possible values: "critical", "high", "moderate", "low" 
          fail_on_severity: critical

          # ([String]). Only allow these licenses (optional)
          # Possible values: Any value(s) from https://docs.github.com/en/rest/licenses 
          allow_licenses:
            - "GPL 3.0"
            - "BSD 3 Clause"
            - "MIT"

          # ([String]). Block the pull request on these licenses (optional)
          # Possible values: Any value(s) from https://docs.github.com/en/rest/licenses 
          deny_licenses:
            - "LGPL 2.0"
            - "BSD 2 Clause"
```

For further details about the configuration options, see [`dependency-review-action`](https://github.com/actions/dependency-review-action#readme).
{% endif %}