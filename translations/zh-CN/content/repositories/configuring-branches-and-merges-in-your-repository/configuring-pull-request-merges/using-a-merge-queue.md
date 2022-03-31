---
title: 使用合并队列
intro: You can increase development velocity by enabling merge queues for pull requests in your repository.
versions:
  fpt: '*'
  ghec: '*'
permissions: People with admin permissions can configure merge queues for pull requests targeting selected branches of a repository.
topics:
  - Repositories
  - Pull requests
shortTitle: 使用合并队列
---

{% data reusables.pull_requests.merge-queue-beta %}

## 关于拉取请求合并队列

{% data reusables.pull_requests.merge-queue-overview %}

合并队列创建临时准备分支，以根据最新版本的基本分支验证拉取请求。 要确保 {% data variables.product.prodname_dotcom %} 验证这些预备分支，您可能需要更新 CI 配置，以触发以 `gh-readonly-queue/{base_branch}` 开头的分支名称的构建。

例如，使用 {% data variables.product.prodname_actions %}，将以下触发器添加到工作流程将导致在面向 `main` 的合并队列准备分支进行任何推送时运行工作流程。

```
on:
  push:
    branches:
    - main
    - gh-readonly-queue/main/**
```

{% data reusables.pull_requests.merge-queue-merging-method %}

有关合并方法的信息，请参阅“[关于拉取请求合并](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)”。 有关“需要线性历史记录”分支保护设置的信息，请参阅“[关于受保护分支](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-linear-history)”。

{% note %}

**注意：** 在测试期间，使用合并队列时存在一些限制：

* 无法在名称中使用通配符 (`*`) 的分支保护规则上启用合并队列。
* 不支持压缩合并提交。 （仅支持合并提交和“变基并合并”提交。）

{% endnote %}

{% data reusables.pull_requests.merge-queue-reject %}
## 管理拉取请求合并队列

存储库管理员可以为面向存储库的选定分支的拉取请求配置合并队列。 使用合并队列的要求是名为“需要合并队列”的分支保护设置，可以在分支保护规则中启用该设置。

有关如何启用合并队列保护设置的信息，请参阅“[管理分支保护规则](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule#creating-a-branch-protection-rule)”。

## 延伸阅读

- "[将拉取请求添加到合并队列](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue)"
- "[关于受保护分支](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)"
