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

## Types of status checks on {% data variables.product.github %}

There are two types of status checks on {% data variables.product.github %}:

* Checks
* Commit statuses

_Checks_ are different from _commit statuses_ in that they provide line annotations, more detailed messaging, and are only available for use with {% data variables.product.prodname_github_apps %}.

> [!NOTE]
> {% data variables.product.prodname_actions %} generates checks, not commit statuses, when workflows are run.

Organization owners and users with push access to a repository can create checks and commit statuses with {% data variables.product.github %}'s API. For more information, see [AUTOTITLE](/rest/checks) and [AUTOTITLE](/rest/commits/statuses).

## Checks

When _checks_ are set up in a repository, pull requests have a **Checks** tab where you can view detailed build output from checks and rerun failed checks.

> [!NOTE]
> The **Checks** tab only gets populated for pull requests if you set up _checks_, not _commit statuses_, for the repository.

When a specific line in a commit causes a check to fail, you will see details about the failure, warning, or notice next to the relevant code in the **Files** tab of the pull request.

You can navigate between the checks summaries for various commits in a pull request, using the commit drop-down menu under the **Checks** tab.

![Screenshot of the "Checks" tab of a pull request. The "Checks" tab and the dropdown menu to select a commit are both outlined in dark orange.](/assets/images/help/pull_requests/checks-summary-for-various-commits.png)

## Skipping and requesting checks for individual commits

When a repository is set to automatically request checks for pushes, you can choose to skip checks for an individual commit you push. When a repository is _not_ set to automatically request checks for pushes, you can request checks for an individual commit you push. For more information on these settings, see [AUTOTITLE](/rest/checks/suites#update-repository-preferences-for-check-suites).

You can also skip workflow runs triggered by the `push` and `pull_request` events by including a command in your commit message. For more information, see [AUTOTITLE](/actions/managing-workflow-runs/skipping-workflow-runs)

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

## Check statuses and conclusions

Checks can have many different statuses. Statuses describe the state of a check from when it is created to when it is completed. Some statuses cannot be set manually and are reserved for {% data variables.product.prodname_actions %}. When a check has a status of `completed`, it has a conclusion. The conclusion describes the result of the check. All possible check statuses and conclusions are listed below.

| Status | Description | {% data variables.product.prodname_actions %} only? |
| --- | --- | --- |
| `completed` | The check run completed and has a conclusion (see below). | No |
| `expected` | The check run is waiting for a status to be reported. | Yes |
| `failure` | The check run failed. | No |
| `in_progress` | The check run is in progress. | No |
| `pending` | The check run is at the front of the queue but the [group-based concurrency](/actions/writing-workflows/choosing-what-your-workflow-does/control-the-concurrency-of-workflows-and-jobs) limit has been reached. | Yes |
| `queued` | The check run has been queued. | No |
| `requested` | The check run has been created but has not been queued. | Yes |
| `startup_failure` | The check suite failed during startup. This status is not applicable to check runs. | Yes |
| `waiting` | The check run is waiting for a [deployment protection rule](/actions/managing-workflow-runs-and-deployments/managing-deployments/managing-environments-for-deployment#deployment-protection-rules) to be satisfied. | Yes |

| Conclusion | Description |
| --- | --- |
| `action_required` | The check run provided required actions upon its completion.  For more information, see [AUTOTITLE](/rest/guides/using-the-rest-api-to-interact-with-checks#check-runs-and-requested-actions). |
| `cancelled` | The check run was cancelled before it completed. |
| `failure` | The check run failed. |
| `neutral` | The check run completed with a neutral result. This is treated as a success for dependent checks in {% data variables.product.prodname_actions %}. |
| `skipped` | The check run was skipped. This is treated as a success for dependent checks in {% data variables.product.prodname_actions %}. |
| `stale` | The check run was marked stale by {% data variables.product.github %} because it took too long. |
| `success` | The check run completed successfully. |
| `timed_out` | The check run timed out. |

## Retention of checks

{% data reusables.pull_requests.retention-checks-data %}
