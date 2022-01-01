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

{% ifversion fpt or ghae or ghes or ghec %}

## Conflicts between head commit and test merge commit 

Sometimes, the results of the status checks for the test merge commit and head commit will conflict. If the test merge commit has a status, the test merge commit must pass. Otherwise, the status of the head commit must pass before you can merge the branch. For more information about test merge commits, see "[Pulls](/rest/reference/pulls#get-a-pull-request)."

![Branch with conflicting merge commits](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)
{% endif %}

## Handling skipped but required checks

Sometimes a required status check is skipped on pull requests due to path filtering. For example, a Node.JS test will be skipped on a pull request that just fixes a typo in your README file and makes no changes to the JavaScript and TypeScript files in the `scripts` directory.

If this check is required and it gets skipped, then the check's status is shown as pending, because it's required. In this situation you won't be able to merge the pull request.

### Example

In this example you have a workflow that's required to pass. 

```yaml
name: ci
on:
  pull_request:
    paths:
      - 'scripts/**'
      - 'middleware/**'
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [12.x, 14.x, 16.x]
    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v2
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
```

If someone submits a pull request that changes a markdown file in the root of the repository, then the workflow above won't run at all because of the path filtering. As a result you won't be able to merge the pull request. You would see the following status on the pull request:

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
      - run: 'echo "No build required" '
```
Now the checks will always pass whenever someone sends a pull request that doesn't change the files listed under `paths` in the first workflow.

![Check skipped but passes due to generic workflow](/assets/images/help/repository/PR-required-check-passed-using-generic.png)

{% note %}

**Notes:** 
* Make sure that the `name` key and required job name in both the workflow files are the same. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions)".
* The example above uses {% data variables.product.prodname_actions %} but this workaround is also applicable to other CI/CD providers that integrate with {% data variables.product.company_short %}.

{% endnote %}

It's also possible for a protected branch to require a status check from a specific {% data variables.product.prodname_github_app %}. If you see a message similar to the following, then you should verify that the check listed in the merge box was set by the expected app.

```
Required status check "build" was not set by the expected {% data variables.product.prodname_github_app %}.
```
