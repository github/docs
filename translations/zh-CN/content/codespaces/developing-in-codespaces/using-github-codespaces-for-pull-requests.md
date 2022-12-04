---
title: 将 GitHub Codespaces 用于拉取请求
shortTitle: Pull requests
intro: '你可以在 Web 浏览器中或 {% data variables.product.prodname_vscode %} 中使用 {% data variables.product.prodname_github_codespaces %} 来创建拉取请求、审阅拉取请求和处理审阅注释。'
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
ms.openlocfilehash: 6932f8eb9095987bfe808080983970c8807b6d93
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159462'
---
## 关于 {% data variables.product.prodname_github_codespaces %} 中的拉取请求

{% data variables.product.prodname_github_codespaces %} 为你提供了处理拉取请求可能需要的许多功能：

- [创建拉取请求](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#raising-a-pull-request) - 使用终端和 Git 命令或源代码管理视图，可以像在 {% data variables.product.prodname_dotcom_the_website %} 上一样创建拉取请求。 如果存储库使用拉取请求模板，则可以在源代码管理视图中使用它。
- [打开拉取请求](#opening-a-pull-request-in-codespaces) - 可以在代码空间中打开现有拉取请求，前提是你对要合并的分支具有代码空间访问权限。
- [审查拉取请求](#reviewing-a-pull-request-in-codespaces) - 在代码空间中打开拉取请求后，可以使用“GitHub 拉取请求”视图添加审查评论和批准拉取请求。 还可以使用 {% data variables.product.prodname_github_codespaces %} 来[查看审阅注释](#view-comments-from-a-review-in-codespaces)。

## 在 {% data variables.product.prodname_codespaces %} 中打开拉取请求

{% data reusables.repositories.sidebar-pr %}

1. 在拉取请求列表中，单击要在 {% data variables.product.prodname_codespaces %} 中打开的拉取请求。
1. 在屏幕右侧，单击“{% octicon "code" aria-label="The code icon" %} 代码”。 
1. 在 {% data variables.product.prodname_codespaces %} 选项卡中，单击加号 ({% octicon "plus" aria-label="The plus icon" %})

   ![用于在代码空间中打开 PR 的选项](/assets/images/help/codespaces/open-with-codespaces-pr.png)

   为拉取请求分支创建 codespace，并在 {% data variables.product.prodname_github_codespaces %} 的默认编辑器中打开。

## 在 {% data variables.product.prodname_codespaces %} 中审阅拉取请求

1. 将默认编辑器设置为 {% data variables.product.prodname_vscode %} 或 {% data variables.product.prodname_vscode %} for Web，在 codespace 中打开拉取请求，如上面的“[打开拉取请求](/codespaces/developing-in-codespaces/using-codespaces-for-pull-requests#opening-a-pull-request-in-codespaces)”中所述。
2. 在活动栏中，单击“GitHub 拉取请求”视图。 仅当在代码空间中打开拉取请求时，才会显示此视图。
  ![用于在代码空间中打开 PR 的选项](/assets/images/help/codespaces/github-pr-view.png)
3. 若要查看特定文件，请单击边栏中的“打开文件”图标。
  ![用于在代码空间中打开 PR 的选项](/assets/images/help/codespaces/changes-in-files.png)
4. 若要添审阅注释，请单击行号旁边的 + 图标。 键入审阅注释，然后单击“开始审阅”。
  ![用于在代码空间中打开 PR 的选项](/assets/images/help/codespaces/start-review.png)
5. 添加完审阅注释后，可以从边栏中选择提交评论、批准更改或请求更改。
  ![用于在代码空间中打开 PR 的选项](/assets/images/help/codespaces/submit-review.png)

有关查看拉取请求的详细信息，请参阅“[查看拉取请求中的建议更改](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)”。

## 查看 {% data variables.product.prodname_codespaces %} 中审阅的评论

收到有关拉取请求的反馈后，可以在 Web 浏览器的 [codespace](#opening-a-pull-request-in-codespaces) 或 {% data variables.product.prodname_vscode_shortname %} 中打开它，以查看[审阅注释](#reviewing-a-pull-request-in-codespaces)。 从那里，您可以回复评论、添加回复或关闭评论。 

  ![用于在代码空间中打开 PR 的选项](/assets/images/help/codespaces/incorporating-codespaces.png)



