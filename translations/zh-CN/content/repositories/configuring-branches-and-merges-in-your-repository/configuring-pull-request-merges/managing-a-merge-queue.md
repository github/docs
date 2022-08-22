---
title: 管理合并队列
intro: 您可以通过存储库中拉取请求的合并队列来加快开发速度。
versions:
  fpt: '*'
  ghec: '*'
permissions: People with admin permissions can manage merge queues for pull requests targeting selected branches of a repository.
topics:
  - Repositories
  - Pull requests
shortTitle: 管理合并队列
redirect_from:
  - /repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/using-a-merge-queue
---

{% data reusables.pull_requests.merge-queue-beta %}

## 关于合并队列

{% data reusables.pull_requests.merge-queue-overview %}

合并队列创建具有特殊前缀的临时分支，以验证拉取请求更改。 The changes in the pull request are then grouped into a `merge_group` with the latest version of the `base_branch` as well as changes ahead of it in the queue. {% data variables.product.product_name %} 将在 `base_branch` 的分支保护所需的检查通过后，将所有这些更改合并到 `base_branch` 中。


有关合并方法的信息，请参阅“[关于拉取请求合并](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)”。

{% note %}

**注:**

* 不可对在分支名称模式中使用通配符 (`*`) 的分支保护规则启用合并队列。

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

## 管理合并队列

存储库管理员可以通过在基本分支的保护规则中启用分支保护设置“需要合并队列”来要求合并。

有关如何启用合并队列保护设置的信息，请参阅“[管理分支保护规则](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule#creating-a-branch-protection-rule)”。

## 延伸阅读

* “[将拉取请求与合并队列合并](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue)”
* "[关于受保护分支](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)"
