---
title: Managing a merge queue
intro: You can increase development velocity with a merge queue for pull requests in your repository.
versions:
  fpt: '*'
  ghec: '*'
permissions: People with admin permissions can manage merge queues for pull requests targeting selected branches of a repository.
topics:
  - Repositories
  - Pull requests
shortTitle: Managing merge queue
redirect_from:
  - /repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/using-a-merge-queue
---

{% data reusables.pull_requests.merge-queue-beta %}

## About merge queues

{% data reusables.pull_requests.merge-queue-overview %}

The merge queue creates temporary branches with a special prefix to validate pull request changes. The changes in the pull request are then grouped into a `merge_group` with the latest version of the `base_branch` as well as changes ahead of it in the queue. {% data variables.product.product_name %} will merge all these changes into `base_branch` once the checks required by the branch protections of `base_branch` pass.


For information about merge methods, see "[About pull request merges](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)."

{% note %}

**注釈:**

* A merge queue cannot be enabled with branch protection rules that use wildcard characters (`*`) in the branch name pattern.

{% endnote %}

{% data reusables.pull_requests.merge-queue-reject %}

### Triggering merge group checks with {% data variables.product.prodname_actions %}

You can use the `merge_group` event to trigger your {% data variables.product.prodname_actions %} workflow when a pull request is added to a merge queue. Note that this is a different event from the `pull_request` and `push` events.

A workflow that reports a check which is required by the target branch's protections would look like this:

```yaml
on:
  pull_request:
  merge_group:
```

For more information see "[Events that trigger workflows](/actions/using-workflows/events-that-trigger-workflows#merge-group)"

### Triggering merge group checks with other CI providers

With other CI providers, you may need to update your CI configuration to run when a branch that begins with the special prefix `gh-readonly-queue/{base_branch}` is created.

## Managing a merge queue

Repository administrators can require a merge by enabling the branch protection setting "Require merge queue" in the protection rules for the base branch.

For information about how to enable the merge queue protection setting, see "[Managing a branch protection rule](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule#creating-a-branch-protection-rule)."

## 参考リンク

* "[Merging a pull request with a merge queue](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue)"
* [保護されたブランチについて](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)
