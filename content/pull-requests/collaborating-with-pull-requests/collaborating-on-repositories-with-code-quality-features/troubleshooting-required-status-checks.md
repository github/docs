---
title: Troubleshooting required status checks
intro: You can check for common errors and resolve issues with required status checks.
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/troubleshooting-required-status-checks
  - /github/administering-a-repository/defining-the-mergeability-of-pull-requests/troubleshooting-required-status-checks
  - /repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/troubleshooting-required-status-checks
shortTitle: Required status checks
---
If you have a check and a status with the same name, and you select that name as a required status check, both the check and the status are required. For more information, see "[AUTOTITLE](/rest/checks)."

{% note %}

**Note:** To be required, status checks must have completed successfully within the chosen repository during the past seven days.

{% endnote %}

After you enable required status checks, your branch may need to be up-to-date with the base branch before merging. This ensures that your branch has been tested with the latest code from the base branch. If your branch is out of date, you'll need to merge the base branch into your branch. For more information, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-status-checks-before-merging)."

{% note %}

**Note:** You can also bring your branch up to date with the base branch using Git rebase. For more information, see "[AUTOTITLE](/get-started/using-git/about-git-rebase)."

{% endnote %}

You won't be able to push local changes to a protected branch until all required status checks pass. Instead, you'll receive an error message similar to the following.

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Required status check "ci-build" is failing
```

{% note %}

**Note:** Pull requests that are up-to-date and pass required status checks can be merged locally and pushed to the protected branch. This can be done without status checks running on the merge commit itself.

{% endnote %}

## Required check needs to succeed against the latest commit SHA

In order for a pull request to be merged, all required checks must pass against the latest commit SHA. This ensures that the most recent changes are validated and meet the required standards before merging. Checks that were triggered using a previous commit SHA will not be used as part of required checks.

## Conflicts between head commit and test merge commit

Sometimes, the results of the status checks for the test merge commit and head commit will conflict. If the test merge commit has a status, the test merge commit must pass. Otherwise, the status of the head commit must pass before you can merge the branch.

If there is a conflict between the test merge commit and head commit, the checks for the test merge commit are shown in the pull request status checks box. This is indicated in the pull request status box by a line starting with `Showing checks for the merge commit`. For more information about test merge commits, see "[AUTOTITLE](/rest/pulls/pulls#get-a-pull-request)."

## Handling skipped but required checks

{% warning %}

**Warning:** If a workflow is skipped due to [path filtering](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), [branch filtering](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) or a [commit message](/actions/managing-workflow-runs/skipping-workflow-runs), then checks associated with that workflow will remain in a "Pending" state. A pull request that requires those checks to be successful will be blocked from merging.

{% data reusables.pull_requests.path-filtering-required-workflows %}

If, however, a job within a workflow is skipped due to a conditional, it will report its status as "Success". For more information, see "[AUTOTITLE](/actions/using-jobs/using-conditions-to-control-job-execution)."

{% endwarning %}

### Example

The following example shows a workflow that requires a "Successful" completion status for the `build` job, but the workflow will be skipped if the pull request does not change any files in the `scripts` directory.

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

Due to [path filtering](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), a pull request that only changes a file in the root of the repository will not trigger this workflow and is blocked from merging. On the pull request, you would see "Waiting for status to be reported."

{% data reusables.pull_requests.path-filtering-required-workflows %}

{% ifversion merge-queue %}

### Status checks with {% data variables.product.prodname_actions %} and a Merge queue

You **must** use the `merge_group` event to trigger your {% data variables.product.prodname_actions %}  workflow when a pull request is added to a merge queue.

{% note %}

**Note:** {% data reusables.actions.merge-group-event-with-required-checks %}

{% endnote %}

A workflow that reports a check which is required by the target branch's protections would look like this:

```yaml
on:
  pull_request:
  merge_group:
```

For more information on the `merge_group` event, see "[AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows#merge_group)."

{% endif %}

## Required status checks from unexpected sources

It's also possible for a protected branch to require a status check from a specific {% data variables.product.prodname_github_app %}. If you see a message similar to the following, then you should verify that the check listed in the merge box was set by the expected app.

```text
Required status check "build" was not set by the expected {% data variables.product.prodname_github_app %}.
```
