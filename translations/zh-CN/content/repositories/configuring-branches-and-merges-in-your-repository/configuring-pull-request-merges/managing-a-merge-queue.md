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

The merge queue creates temporary branches with a special prefix to validate pull request changes. The changes in the pull request are then grouped with the latest version of the `base_branch` as well as changes ahead of it in the queue. {% data variables.product.product_name %} will merge all these changes into `base_branch` once the checks required by the branch protections of `base_branch` pass.

You may need to update your Continuous Integration (CI) configuration to trigger builds on branch names that begin with the special prefix `gh-readonly-queue/{base_branch}` after the group is created.

For example, with {% data variables.product.prodname_actions %}, a workflow with the following trigger will run each time a pull request that targets the base branch `main` is queued to merge.

```yaml
on:
  push:
    branches:
    - gh-readonly-queue/main/**
```

{% data reusables.pull_requests.merge-queue-merging-method %}

有关合并方法的信息，请参阅“[关于拉取请求合并](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)”。

{% note %}

**注:**

* A merge queue cannot be enabled with branch protection rules that use wildcard characters (`*`) in the branch name pattern.

{% endnote %}

{% data reusables.pull_requests.merge-queue-reject %}

## Managing a merge queue

Repository administrators can require a merge by enabling the branch protection setting "Require merge queue" in the protection rules for the base branch.

有关如何启用合并队列保护设置的信息，请参阅“[管理分支保护规则](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule#creating-a-branch-protection-rule)”。

## 延伸阅读

* "[Merging a pull request with a merge queue](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue)"
* "[关于受保护分支](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)"
