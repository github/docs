---
title: About status checks
intro: Status checks let you know if your commits meet the conditions set for the repository you're contributing to.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks
  - /articles/about-statuses
  - /articles/about-status-checks
  - /github/collaborating-with-issues-and-pull-requests/about-status-checks
  - /github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
---
Status checks are based on external processes, such as continuous integration builds, which run for each push you make to a repository. You can see the _pending_, _passing_, or _failing_ state of status checks next to individual commits in your pull request.

![Screenshot of a list of commits and statuses.](/assets/images/help/pull_requests/commit-list-statuses.png)

Anyone with write permissions to a repository can set the state for any status check in the repository.

You can see the overall state of the last commit to a branch on your repository's branches page or in your repository's list of pull requests.

{% data reusables.pull_requests.required-checks-must-pass-to-merge %}

{% data reusables.actions.workflows.skipped-job-status-checks-passing %}

## Types of status checks on {% data variables.product.product_name %}

There are two types of status checks on {% data variables.product.product_name %}:

* Checks
* Commit statuses

_Checks_ are different from _commit statuses_ in that they provide line annotations, more detailed messaging, and are only available for use with {% data variables.product.prodname_github_apps %}.

{% note %}

**Note:** {% data variables.product.prodname_actions %} generates checks, not commit statuses, when workflows are run.

{% endnote %}

Organization owners and users with push access to a repository can create checks and commit statuses with {% data variables.product.product_name %}'s API. For more information, see "[AUTOTITLE](/rest/checks)" and "[AUTOTITLE](/rest/commits/statuses)."

## Checks

When _checks_ are set up in a repository, pull requests have a **Checks** tab where you can view detailed build output from checks and rerun failed checks.

{% note %}

**Note:** The **Checks** tab only gets populated for pull requests if you set up _checks_, not _commit statuses_, for the repository.

{% endnote %}

When a specific line in a commit causes a check to fail, you will see details about the failure, warning, or notice next to the relevant code in the **Files** tab of the pull request.

You can navigate between the checks summaries for various commits in a pull request, using the commit drop-down menu under the **Checks** tab.

![Screenshot of the "Checks" tab of a pull request. The "Checks" tab and the dropdown menu to select a commit are both outlined in dark orange.](/assets/images/help/pull_requests/checks-summary-for-various-commits.png)

### Skipping and requesting checks for individual commits

When a repository is set to automatically request checks for pushes, you can choose to skip checks for an individual commit you push. When a repository is _not_ set to  automatically request checks for pushes, you can request checks for an individual commit you push. For more information on these settings, see "[AUTOTITLE](/rest/checks/suites#update-repository-preferences-for-check-suites)."

You can also skip workflow runs triggered by the `push` and `pull_request` events by including a command in your commit message. For more information, see "[AUTOTITLE](/actions/managing-workflow-runs/skipping-workflow-runs)"

Alternatively, to skip or request _all_ checks for your commit, add one of the following trailer lines to the end of your commit message:

* To _skip checks_ for a commit, type your commit message and a short, meaningful description of your changes. After your commit description, before the closing quotation, add two empty lines followed by `skip-checks: true`:

  ```shell
  $ git commit -m "Update README
  >
  >
  skip-checks: true"
  ```

* To _request_ checks for a commit, type your commit message and a short, meaningful description of your changes. After your commit description, before the closing quotation, add two empty lines followed by `request-checks: true`:

  ```shell
  $ git commit -m "Refactor usability tests
  >
  >
  request-checks: true"
  ```

{% data reusables.commits.about-commit-cleanup %}

### Retention of checks

{% data reusables.pull_requests.retention-checks-data %}
