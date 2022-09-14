---
title: 将 GitHub Codespaces 用于拉取请求
shortTitle: Pull requests
intro: '你可以在开发工作流中使用 {% data variables.product.prodname_github_codespaces %} 来创建拉取请求、审阅拉取请求和处理审阅注释。'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
redirect_from:
  - /codespaces/developing-in-codespaces/using-codespaces-for-pull-requests
ms.openlocfilehash: d4ac4d4b8003600c95293f3939f547cd73639884
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/12/2022
ms.locfileid: '147111414'
---
## 关于 {% data variables.product.prodname_github_codespaces %} 中的拉取请求

{% data variables.product.prodname_github_codespaces %} 为你提供了处理拉取请求可能需要的许多功能：

- [创建拉取请求](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#raising-a-pull-request) - 使用终端和 Git 命令或源代码管理视图，可以像在 {% data variables.product.prodname_dotcom_the_website %} 上一样创建拉取请求。 如果存储库使用拉取请求模板，则可以在源代码管理视图中使用它。
- [打开拉取请求](#opening-a-pull-request-in-codespaces) - 可以在代码空间中打开现有拉取请求，前提是你对要合并的分支具有代码空间访问权限。
- [审查拉取请求](#reviewing-a-pull-request-in-codespaces) - 在代码空间中打开拉取请求后，可以使用“GitHub 拉取请求”视图添加审查评论和批准拉取请求。 还可以使用 {% data variables.product.prodname_codespaces %} 来[查看审查评论](#view-comments-from-a-review-in-codespaces)。

## 在 {% data variables.product.prodname_codespaces %} 中打开拉取请求

{% data reusables.repositories.sidebar-pr %}

2. 在拉取请求列表中，单击要在 {% data variables.product.prodname_codespaces %} 中打开的拉取请求。
3. 在屏幕右侧，单击“{% octicon "code" aria-label="The code icon" %} 代码”。 
4. 在 {% data variables.product.prodname_codespaces %} 选项卡中，单击“在分支上创建 codespace”。
  ![用于在代码空间中打开 PR 的选项](/assets/images/help/codespaces/open-with-codespaces-pr.png)

## 在 {% data variables.product.prodname_codespaces %} 中审阅拉取请求

{% data reusables.codespaces.review-pr %}

有关查看拉取请求的详细信息，请参阅“[查看拉取请求中的建议更改](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)”。

## 查看 {% data variables.product.prodname_codespaces %} 中审阅的评论

收到有关拉取请求的反馈后，可以[在代码空间中打开它](#opening-a-pull-request-in-codespaces)以查看[审查评论](#reviewing-a-pull-request-in-codespaces)。 从那里，您可以回复评论、添加回复或关闭评论。 

  ![用于在代码空间中打开 PR 的选项](/assets/images/help/codespaces/incorporating-codespaces.png)
