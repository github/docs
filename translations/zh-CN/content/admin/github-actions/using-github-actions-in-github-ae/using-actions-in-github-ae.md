---
title: 在 GitHub AE 中使用操作
intro: '{% data variables.product.prodname_ghe_managed %} 包含大部分 {% data variables.product.prodname_dotcom %} 编写的操作。'
versions:
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
redirect_from:
  - /admin/github-actions/using-actions-in-github-ae
shortTitle: Use actions
ms.openlocfilehash: a8439a08f73667b7d048b31e2c9eb3968ba2e957
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145099985'
---
{% data variables.product.prodname_actions %} 工作流可使用操作，它们是一些单独的任务，可以组合这些操作以创建作业并自定义工作流。 您可以创建自己的操作，或者使用和自定义 {% data variables.product.prodname_dotcom %} 社区分享的操作。

## 与 {% data variables.product.prodname_ghe_managed %} 捆绑的官方操作

大多数 {% data variables.product.prodname_dotcom %} 编写的官方操作都会自动与 {% data variables.product.prodname_ghe_managed %} 捆绑，并且会在某个时间点从 {% data variables.product.prodname_marketplace %} 捕获。 当你的 {% data variables.product.prodname_ghe_managed %} 实例更新时，捆绑的官方操作也会更新。

捆绑的官方操作包括 `actions/checkout`、`actions/upload-artifact`、`actions/download-artifact`、`actions/labeler` 和各种 `actions/setup-` 操作等。 要查看包含哪些官方操作，请在您的实例中浏览到以下组织： 
- <code>https://<em>HOSTNAME</em>/actions</code>
- <code>https://<em>HOSTNAME</em>/github</code>

每个操作的文件都保存在 `actions` 和 `github` 组织的存储库中。 每个操作仓库都包含必要的标签、分支和提交 SHA，您的工作流可以使用它们来引用操作。
