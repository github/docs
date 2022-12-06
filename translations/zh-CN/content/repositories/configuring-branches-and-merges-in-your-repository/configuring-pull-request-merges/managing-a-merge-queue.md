---
title: 管理合并队列
intro: 可以通过在存储库中为拉取请求启用合并队列来加快开发速度。
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
ms.openlocfilehash: 2cdbbdc72dde5c9970d49f7060e5cb583b6dd1dd
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147496485'
---
{% data reusables.pull_requests.merge-queue-beta %}

## 关于合并队列

{% data reusables.pull_requests.merge-queue-overview %}

合并队列创建具有特殊前缀的临时分支来验证拉取请求更改。 然后，使用最新版本的 `base_branch` 将拉取请求中的更改分组到 `merge_group`，与队列中位于其之前的更改一样。 一旦 `base_branch` 的分支保护所需的检查通过，{% data variables.product.product_name %} 会将所有这些更改合并到 `base_branch` 中。


有关合并方法的信息，请参阅“[关于拉取请求合并](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)”。

{% note %}

**注意：**

* 在分支名称模式中使用通配符 (`*`) 的分支保护规则无法启用合并队列。

{% endnote %}

{% data reusables.pull_requests.merge-queue-reject %}

### 通过 {% data variables.product.prodname_actions %} 触发合并组检查

将拉取请求添加到合并队列时，可以使用 `merge_group` 事件触发 {% data variables.product.prodname_actions %} 工作流。 请注意，这是与 `pull_request` 和 `push` 事件不同的事件。

报告目标分支保护所需的检查的工作流如下所示：

```yaml
on:
  pull_request:
  merge_group:
```

有关详细信息，请参阅“[触发工作流的事件](/actions/using-workflows/events-that-trigger-workflows#merge-group)”

### 通过其他 CI 提供程序触发合并组检查

使用其他 CI 提供程序时，可能需要更新 CI 配置，以在创建以特殊前缀 `gh-readonly-queue/{base_branch}` 开头的分支时运行。

## 管理合并队列

存储库管理员可以通过在基本分支的保护规则中启用分支保护设置“需要合并队列”来要求合并。

有关如何启用合并队列保护设置的信息，请参阅“[管理分支保护规则](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule#creating-a-branch-protection-rule)”。

## 延伸阅读

* [将拉取请求与合并队列合并](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue)
* [关于受保护分支](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)
