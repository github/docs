---
title: About status checks
intro: Status checks let you know if your commits meet the conditions set for the repository you're contributing to.
redirect_from:
  - /articles/about-statuses/
  - /articles/about-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

Status checks are based on external processes, such as continuous integration builds, which run for each push you make to a repository. You can see the *pending*, *passing*, or *failing* state of status checks next to individual commits in your pull request.

![List of commits and statuses](/assets/images/help/pull_requests/commit-list-statuses.png)

Anyone with write permissions to a repository can set the state for any status check in the repository.

You can see the overall state of the last commit to a branch on your repository's branches page or in your repository's list of pull requests.

{% data reusables.pull_requests.required-checks-must-pass-to-merge %}

### Types of status checks on {% data variables.product.product_name %}

There are two types of status checks on {% data variables.product.product_name %}:

- Checks
- Statuses

_Checks_ are different from _statuses_ in that they provide line annotations, more detailed messaging, and are only available for use with {% data variables.product.prodname_github_app %}s.

Organization owners and users with push access to a repository can create checks and statuses with {% data variables.product.product_name %}'s API. For more information, see "[Checks](/rest/reference/checks)" and "[Statuses](/rest/reference/repos#statuses)."

### Checks

When _checks_ are set up in a repository, pull requests have a **Checks** tab where you can view detailed build output from status checks and rerun failed checks.

![Status checks within a pull request](/assets/images/help/pull_requests/checks.png)

When a specific line in a commit causes a check to fail, you will see details about the failure, warning, or notice next to the relevant code in the **Files** tab of the pull request.

![Details of a status check](/assets/images/help/pull_requests/checks-detailed.png)

You can navigate between the checks summaries for various commits in a pull request, using the commit drop-down menu under the **Conversation** tab.

![Check summaries for different commits in a drop-down menu](/assets/images/help/pull_requests/checks-summary-for-various-commits.png)

#### Skipping and requesting checks for individual commits

When a repository is set to automatically request checks for pushes, you can choose to skip checks for an individual commit you push. When a repository is _not_ set to  automatically request checks for pushes, you can request checks for an individual commit you push. For more information on these settings, see "[Check Suites](/rest/reference/checks#update-repository-preferences-for-check-suites)."

To skip or request checks for your commit, add one of the following trailer lines to the end of your commit message:

- To _skip checks_ for a commit, type your commit message and a short, meaningful description of your changes. After your commit description, before the closing quotation, add two empty lines followed by `skip-checks: true`:
  ```shell
  $ git commit -m "Update README
  >
  >
  skip-checks: true"
  ```
- To _request_ checks for a commit, type your commit message and a short, meaningful description of your changes. After your commit description, before the closing quotation, add two empty lines followed by `request-checks: true`:
  ```shell
  $ git commit -m "Refactor usability tests
  >
  >
  request-checks: true"
  ```
  
