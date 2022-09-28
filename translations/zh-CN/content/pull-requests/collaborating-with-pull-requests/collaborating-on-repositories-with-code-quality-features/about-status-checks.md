---
title: 关于状态检查
intro: 状态检查用于获知您的提交是否符合为您参与的仓库设置的条件。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks
  - /articles/about-statuses
  - /articles/about-status-checks
  - /github/collaborating-with-issues-and-pull-requests/about-status-checks
  - /github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 759889bd4f014e4bc2afff5f182a0b7258c8bb07
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065864'
---
状态检查基于针对您每次向仓库的推送而运行的外部流程，例如持续集成构建。 可以在拉取请求中的各个提交旁边看到状态检查的“待处理”、“通过”或“失败”状态  。

![提交和状态列表](/assets/images/help/pull_requests/commit-list-statuses.png)

对仓库具有写入权限的任何人都可为仓库中的任何状态检查设置状态。

在仓库的分支页面或仓库的拉取请求列表中，可以查看仓库上次提交的整体状态。

{% data reusables.pull_requests.required-checks-must-pass-to-merge %}

## {% data variables.product.product_name %} 上的状态检查类型

{% data variables.product.product_name %} 上的状态检查有两种类型：

- 检查
- 状态

“检查”与“状态”的不同之处在于它们提供行注释、更详细的消息，并且仅适用于 {% data variables.product.prodname_github_apps %} 。

组织所有者和能够推送到仓库的用户可使用 {% data variables.product.product_name %} 的 API 创建检查和状态。 有关详细信息，请参阅“[检查](/rest/reference/checks)”和“[状态](/rest/reference/commits#commit-statuses)”。

## 检查

在存储库中设置“检查”时，拉取请求会有一个“检查”选项卡，可以在其中查看状态检查的详细构建输出并重新运行失败的检查。

![拉取请求中的状态检查](/assets/images/help/pull_requests/checks.png)

{% note %}

**注意：** 仅当你为存储库设置了“检查”（而不是“状态”）时，才会为拉取请求填充“检查”选项卡 。

{% endnote %}

当提交中的特定行造成检查失败时，你会在拉取请求的“文件”选项卡中相关代码旁边看到有关失败、警告或通知的详细信息。

![状态检查详细信息](/assets/images/help/pull_requests/checks-detailed.png)

可以使用“对话”选项卡下的提交下拉菜单，浏览拉取请求中不同提交的检查摘要。

![下拉菜单中不同提交的检查摘要](/assets/images/help/pull_requests/checks-summary-for-various-commits.png)

### 跳过和申请个别提交的检查

当仓库设置为自动申请检查推送时，您可以选择跳过所推送的个别提交的检查。 当存储库未设置为自动申请检查推送时，你可以请求检查你推送的个别提交。 有关这些设置的详细信息，请参阅“[检查套件](/rest/reference/checks#update-repository-preferences-for-check-suites)”。

要跳过或申请检查提交，请在提交消息末添加以下尾行之一：

- 若要跳过检查进行提交，请输入提交消息以及简短、有意义的更改说明。 提交说明后，在右引号之前，添加两个空行，后接 `skip-checks: true`：
  ```shell
  $ git commit -m "Update README
  >
  >
  skip-checks: true"
  ```
- 若要请求检查进行提交，请输入提交消息以及简短、有意义的更改说明。 提交说明后，在右引号之前，添加两个空行，后接 `request-checks: true`：
  ```shell
  $ git commit -m "Refactor usability tests
  >
  >
  request-checks: true"
  ```

{% ifversion fpt or ghec %}
### 状态检查的保留期

{% data reusables.pull_requests.retention-checks-data %} {% endif %}
