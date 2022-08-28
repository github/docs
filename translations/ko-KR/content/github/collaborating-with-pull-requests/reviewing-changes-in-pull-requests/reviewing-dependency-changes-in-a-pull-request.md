---
title: Reviewing dependency changes in a pull request
intro: 'If a pull request contains changes to dependencies, you can view a summary of what has changed and whether there are known vulnerabilities in any of the dependencies.'
versions:
  free-pro-team: '*'
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
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "Sign up for the dependency review beta" and "Reviewing dependency changes in a pull request".-->

{% note %}

**Note:** Dependency review is currently in beta and subject to change.

{% endnote %}

### About dependency review

{% data reusables.dependency-review.feature-overview %}

Dependency review allows you to "shift left". You can use the provided predictive information to catch vulnerable dependencies before they hit production. For more information, see "[About dependency review](/code-security/supply-chain-security/about-dependency-review)."

### Reviewing dependencies in a pull request

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}

1. If the pull request contains many files, use the **File filter** drop-down menu to collapse all files that don't record dependencies. This will make it easier to focus your review on the dependency changes.

   ![The file filter menu](/assets/images/help/pull_requests/file-filter-menu-json.png)

1. On the right of the header for a manifest or lock file, display the dependency review by clicking the **{% octicon "file" aria-label="The rich diff icon" %}** rich diff button.

   ![The rich diff button](/assets/images/help/pull_requests/dependency-review-rich-diff.png)

  {% note %}

   **Note:** The dependency review provides a clearer view of what has changed in large lock files, where the source diff is not rendered by default.

   {% endnote %}

1. Check the dependencies listed in the dependency review.

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
