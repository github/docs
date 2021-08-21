---
title: Troubleshooting required status checks
intro: You can check for common errors and resolve issues with required status checks.
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/troubleshooting-required-status-checks
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

{% ifversion fpt or ghae or ghes %}

## Conflicts between head commit and test merge commit 

Sometimes, the results of the status checks for the test merge commit and head commit will conflict. If the test merge commit has a status, the test merge commit must pass. Otherwise, the status of the head commit must pass before you can merge the branch. For more information about test merge commits, see "[Pulls](/rest/reference/pulls#get-a-pull-request)."

![Branch with conflicting merge commits](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)
{% endif %}

## Handling skipped but required checks

It may happen that the status check is skipped on some Pull Requests due to path filtering but it is required. For example you may skip a Node.JS test on a Pull Request which fixes a typo in your README File (and doesn't touch the JS & TS Files in the `scripts` folder at all !).

Now if that check is required and it gets skipped probably because it's not needed, then the check's status would be shown as pending (because it's required) and you won't be able to merge the Pull Request.

Suppose you have a workflow which is required to pass as given below : 

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

Now if suppose someone sends in a Pull Request which changes a markdown file in the root of the repository, then the above workflow won't run at all. This will create a problem as you won't be able to merge the Pull Request. You would see the following status :

![Required Check Skipped but shown as pending](/assets/images/help/repository/PR-required-check-skipped.jpeg)

You can fix this by creating a generic workflow which will return true in any case similar to the workflow below :

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
Now the checks will always pass whenever someone sends a pull request which doesn't change the files listed under the `paths` key of the actual workflow.

![Check skipped but passes due to Generic workflow](/assets/images/help/repository/PR-required-check-passed-using-generic.jpeg)

{% note %}

**Note**: Make sure that the `name` key and required job name in both the workflow files are the same. For more information, see "[Workflow Syntax for GitHub Actions](/actions/reference/workflow-syntax-for-github-actions)".

{% endnote %}


{% note %}

**Note**: The example above uses {% data product.prodname_actions %} but this workaround is also applicable to other CI/CD providers that integrate with {% data product.company_short %}.

{% endnote %}
