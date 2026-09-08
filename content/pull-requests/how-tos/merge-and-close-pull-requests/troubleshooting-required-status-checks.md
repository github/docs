---
title: Troubleshooting required status checks
intro: Resolve common errors and unblock merging or pushing to protected branches by troubleshooting required status checks.
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /github/administering-a-repository/troubleshooting-required-status-checks
  - /github/administering-a-repository/defining-the-mergeability-of-pull-requests/troubleshooting-required-status-checks
  - /repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/troubleshooting-required-status-checks
  - /pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/troubleshooting-required-status-checks
shortTitle: Troubleshoot status checks
category:
  - Merge and close pull requests
contentType: how-tos
---
Use these checks when a required status check blocks merging or pushing to a protected branch. See [AUTOTITLE](/pull-requests/reference/status-checks).

* A required status check must have completed successfully in the chosen repository during the past seven days.
* If a check and a commit status have the same name, both must pass when that name is required. See [AUTOTITLE](/rest/checks).
* If branch protection requires your branch to be up-to-date, merge or rebase the base branch into your branch. See [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-status-checks-before-merging) and [AUTOTITLE](/get-started/using-git/about-git-rebase).

If required status checks have not passed, pushing to a protected branch returns an error similar to this.

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Required status check "ci-build" is failing
```

> [!NOTE]
> Pull requests that are up-to-date and pass required status checks can be merged locally and pushed to the protected branch. You can do this without running status checks on the merge commit itself.

## Required check needs to succeed against the latest commit SHA

Check the following if a required check is still blocking a pull request.

* Required checks must pass on the latest commit SHA. Checks from earlier commits don't satisfy the requirement.
* Successful check statuses are `success`, `skipped`, and `neutral`. See [AUTOTITLE](/pull-requests/reference/status-checks).

## Conflicts between head commit and test merge commit

Use the pull request status checks box to identify which commit must pass.

| Status check source | What must pass | What you may see |
| --- | --- | --- |
| Test merge commit has a status | The test merge commit | `Showing checks for the merge commit` |
| Test merge commit has no status | The head commit | Checks for the latest head commit |

See [AUTOTITLE](/rest/pulls/pulls#get-a-pull-request).

## Handling skipped but required checks

| Cause | Result | How to fix or check |
| --- | --- | --- |
| A workflow is skipped by [path filtering](/actions/reference/workflows-and-actions/workflow-syntax#onpushpull_requestpull_request_targetpathspaths-ignore), [branch filtering](/actions/reference/workflows-and-actions/workflow-syntax#onpull_requestpull_request_targetbranchesbranches-ignore), or a [commit message](/actions/how-tos/manage-workflow-runs/skip-workflow-runs) | Associated checks stay in a "Pending" state and block merging | Avoid requiring workflows that can be skipped. |
| A job is skipped by a conditional | The job reports "Success" | See [AUTOTITLE](/actions/how-tos/write-workflows/choose-when-workflows-run/control-jobs-with-conditions). |
| A job depends on a failed job | The dependent job is skipped and may not block merging | Use `always()` with `needs` for required checks that depend on other jobs. See [AUTOTITLE](/actions/how-tos/write-workflows/choose-what-workflows-do/use-jobs#defining-prerequisite-jobs). |

{% data reusables.pull_requests.path-filtering-required-workflows %}

### Example

This workflow requires a successful `build` job, but runs only when a pull request changes files in `scripts`.

```yaml
name: ci
on:
  pull_request:
    paths:
      - 'scripts/**'
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [12.x, 14.x, 16.x]
    steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
      uses: {% data reusables.actions.action-setup-node %}
      with:
        node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
        cache: 'npm'
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
```

A pull request that only changes a file in the repository root will not trigger this workflow. If `build` is required, the pull request is blocked with "Waiting for status to be reported."

### Status checks with {% data variables.product.prodname_actions %} and a Merge queue

If a merge queue requires a {% data variables.product.prodname_actions %} check, trigger the workflow with the `merge_group` event.

> [!NOTE]
> {% data reusables.actions.merge-group-event-with-required-checks %}

Example trigger configuration:

```yaml
on:
  pull_request:
  merge_group:
```

See [AUTOTITLE](/actions/reference/workflows-and-actions/events-that-trigger-workflows#merge_group).

## Required status checks from unexpected sources

A protected branch can also require a status check from a specific {% data variables.product.prodname_github_app %}. If you see a message similar to the following, verify that the check listed in the merge box was set by the expected app.

```text
Required status check "build" was not set by the expected {% data variables.product.prodname_github_app %}.
```
