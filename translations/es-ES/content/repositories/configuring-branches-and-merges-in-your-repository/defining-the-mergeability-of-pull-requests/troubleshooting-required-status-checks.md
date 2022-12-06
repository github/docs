---
title: Troubleshooting required status checks
intro: You can check for common errors and resolve issues with required status checks.
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/troubleshooting-required-status-checks
  - /github/administering-a-repository/defining-the-mergeability-of-pull-requests/troubleshooting-required-status-checks
shortTitle: Required status checks
---
If you have a check and a status with the same name, and you select that name as a required status check, both the check and the status are required. For more information, see "[Checks](/rest/reference/checks)."

After you enable required status checks, your branch may need to be up-to-date with the base branch before merging. This ensures that your branch has been tested with the latest code from the base branch. If your branch is out of date, you'll need to merge the base branch into your branch. For more information, see "[About protected branches](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)."

{% note %}

**Note:** You can also bring your branch up to date with the base branch using Git rebase. For more information, see "[About Git rebase](/github/getting-started-with-github/about-git-rebase)."

{% endnote %}

You won't be able to push local changes to a protected branch until all required status checks pass. Instead, you'll receive an error message similar to the following.

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Required status check "ci-build" is failing
```
{% note %}

**Note:** Pull requests that are up-to-date and pass required status checks can be merged locally and pushed to the protected branch. This can be done without status checks running on the merge commit itself.

{% endnote %}

## Conflicts between head commit and test merge commit

Sometimes, the results of the status checks for the test merge commit and head commit will conflict. If the test merge commit has a status, the test merge commit must pass. Otherwise, the status of the head commit must pass before you can merge the branch. For more information about test merge commits, see "[Pulls](/rest/reference/pulls#get-a-pull-request)."

![Branch with conflicting merge commits](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)

## Handling skipped but required checks

{% note %}

**Note:** If a workflow is skipped due to [path filtering](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), [branch filtering](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) or a [commit message](/actions/managing-workflow-runs/skipping-workflow-runs), then checks associated with that workflow will remain in a "Pending" state. A pull request that requires those checks to be successful will be blocked from merging.

If a job in a workflow is skipped due to a conditional, it will report its status as "Success". For more information see [Skipping workflow runs](/actions/managing-workflow-runs/skipping-workflow-runs) and [Using conditions to control job execution](/actions/using-jobs/using-conditions-to-control-job-execution).

{% endnote %}

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

Due to [path filtering](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), a pull request that only changes a file in the root of the repository will not trigger this workflow and is blocked from merging. You would see the following status on the pull request:

![Required check skipped but shown as pending](/assets/images/help/repository/PR-required-check-skipped.png)

You can fix this by creating a generic workflow, with the same name, that will return true in any case similar to the workflow below :

```yaml
name: ci
on:
  pull_request:
    paths-ignore:
      - 'scripts/**'
      - 'middleware/**'
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - run: 'echo "No build required"'
```
Now the checks will always pass whenever someone sends a pull request that doesn't change the files listed under `paths` in the first workflow.

![Check skipped but passes due to generic workflow](/assets/images/help/repository/PR-required-check-passed-using-generic.png)

{% note %}

**Notes:**
* Make sure that the `name` key and required job name in both the workflow files are the same. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions)".
* The example above uses {% data variables.product.prodname_actions %} but this workaround is also applicable to other CI/CD providers that integrate with {% data variables.product.company_short %}.

{% endnote %}

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## Required status checks from unexpected sources

It's also possible for a protected branch to require a status check from a specific {% data variables.product.prodname_github_app %}. If you see a message similar to the following, then you should verify that the check listed in the merge box was set by the expected app.

```
Required status check "build" was not set by the expected {% data variables.product.prodname_github_app %}.
```
{% endif %}
