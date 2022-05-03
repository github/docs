---
title: Reviewing dependency changes in a pull request
intro: 'If a pull request contains changes to dependencies, you can view a summary of what has changed and whether there are known vulnerabilities in any of the dependencies.'
product: '{% data reusables.gated-features.dependency-review %}'
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: issue-4864
  ghec: '*'
type: how_to
topics:
  - Pull requests
  - Dependency review
  - Advanced Security
  - Vulnerabilities
  - Dependencies
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request
shortTitle: Review dependency changes
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Sign up for the dependency review beta" and "Reviewing dependency changes in a pull request".-->

{% data reusables.dependency-review.beta %}

## About dependency review

{% data reusables.dependency-review.feature-overview %}

{% ifversion ghec %}Before you can use dependency review in a private repository, you must enable the dependency graph. For more information, see "[Exploring the dependencies of a repository](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)."{% endif %}

{% ifversion ghes > 3.1 %} Before you can use dependency review, you must enable the dependency graph and connect {% data variables.product.product_location %} to {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[Enabling alerts for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}](/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)."{% endif %}

Dependency review allows you to "shift left". You can use the provided predictive information to catch vulnerable dependencies before they hit production. For more information, see "[About dependency review](/code-security/supply-chain-security/about-dependency-review)."

{% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6396 %}
You can use the Dependency Review GitHub Action to help enforce dependency reviews on pull requests in your repository. For more information, see "[Dependency review enforcement](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review#dependency-review-enforcement)."
{% endif %}

## Reviewing dependencies in a pull request

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}

1. If the pull request contains many files, use the **File filter** drop-down menu to collapse all files that don't record dependencies. This will make it easier to focus your review on the dependency changes.

   ![The file filter menu](/assets/images/help/pull_requests/file-filter-menu-json.png)
   The dependency review provides a clearer view of what has changed in large lock files, where the source diff is not rendered by default.

  {% note %}

   **Note:** Dependency review rich diffs are not available for committed static JavaScript files like `jquery.js`.

   {% endnote %}

1. On the right of the header for a manifest or lock file, display the dependency review by clicking the **{% octicon "file" aria-label="The rich diff icon" %}** rich diff button.

   ![The rich diff button](/assets/images/help/pull_requests/dependency-review-rich-diff.png)

2. Check the dependencies listed in the dependency review.

   ![Vulnerability warnings in a dependency review](/assets/images/help/pull_requests/dependency-review-vulnerability.png)

   Any added or changed dependencies that have vulnerabilities are listed first, ordered by severity and then by dependency name. This means that the highest severity dependencies are always at the top of a dependency review. Other dependencies are listed alphabetically by dependency name.

   The icon beside each dependency indicates whether the dependency has been added (<span style="color:#22863a">{% octicon "diff-added" aria-label="Dependency added icon" %}</span>), updated (<span style="color:#b08800">{% octicon "diff-modified" aria-label="Dependency modified icon" %}</span>), or removed (<span style="color:#cb2431">{% octicon "diff-removed" aria-label="Dependency removed icon" %}</span>) in this pull request.

   Other information includes:

   * The version, or version range, of the new, updated, or deleted dependency.
   * For a specific version of a dependency:
      * The age of that release of the dependency.
      * The number of projects that are dependent on this software. This information is taken from the dependency graph. Checking the number of dependents can help you avoid accidentally adding the wrong dependency.
      * The license used by this dependency, if this information is available. This is useful if you want to avoid code with certain licenses being used in your project.

   Where a dependency has a known vulnerability, the warning message includes:

   * A brief description of the vulnerability.
   * A Common Vulnerabilities and Exposures (CVE) or {% data variables.product.prodname_security_advisories %} (GHSA) identification number. You can click this ID to find out more about the vulnerability.
   * The severity of the vulnerability.
   * The version of the dependency in which the vulnerability was fixed. If you are reviewing a pull request for someone, you might ask the contributor to update the dependency to the patched version, or a later release.

{% data reusables.repositories.return-to-source-diff %}
