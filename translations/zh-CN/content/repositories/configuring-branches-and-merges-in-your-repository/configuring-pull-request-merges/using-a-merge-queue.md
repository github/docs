---
title: Using a merge queue
intro: You can increase development velocity by enabling merge queues for pull requests in your repository.
versions:
  fpt: '*'
  ghec: '*'
permissions: People with admin permissions can configure merge queues for pull requests targeting selected branches of a repository.
topics:
  - Repositories
  - Pull requests
shortTitle: Use merge queue
---

{% data reusables.pull_requests.merge-queue-beta %}

## About pull request merge queue

{% data reusables.pull_requests.merge-queue-overview %}

The merge queue creates temporary preparatory branches to validate pull requests against the latest version of the base branch. To ensure that {% data variables.product.prodname_dotcom %} validates these preparatory branches, you may need to update your CI configuration to trigger builds on branch names starting with `gh-readonly-queue/{base_branch}`.

For example, with {% data variables.product.prodname_actions %}, adding the following trigger to a workflow will cause the workflow to run when any push is made to a merge queue preparatory branch that targets `main`.

```
on:
  push:
    branches:
    - main
    - gh-readonly-queue/main/**
```

{% data reusables.pull_requests.merge-queue-merging-method %}

For information about merge methods, see "[About pull request merges](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)." For information about the "Require linear history" branch protection setting, see "[About protected branches](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-linear-history)."

{% note %}

**Note:** During the beta, there are some limitations when using the merge queue:

* The merge queue cannot be enabled on branch protection rules using wildcards (`*`) in the name.
* There is no support for squash merge commits. (Only merge commits and "rebase and merge" commits are supported.)

{% endnote %}

{% data reusables.pull_requests.merge-queue-reject %}
## Managing pull request merge queue

Repository administrators can configure merge queues for pull requests targeting selected branches of a repository. The requirement to use a merge queue is a branch protection setting called "Require merge queue" that can be enabled in branch protection rules.

For information about how to enable the merge queue protection setting, see "[Managing a branch protection rule](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule#creating-a-branch-protection-rule)."

## 延伸阅读

- "[Adding a pull request to the merge queue](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue)"
- "[关于受保护分支](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)"
