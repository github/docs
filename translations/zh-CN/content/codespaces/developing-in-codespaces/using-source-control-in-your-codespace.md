---
title: 在代码空间中使用源控制
intro: 在对代码空间中的文件进行更改后，您可以快速提交更改并将更新推送到远程仓库。
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Source control
ms.openlocfilehash: 513bf0729e1f04bf93f45999b2fa9e45231add5c
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159460'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## 关于 {% data variables.product.prodname_github_codespaces %} 中的源代码管理

您可以直接在代码空间内执行所需的所有 Git 操作。 例如，可以从远程存储库获取更改、切换分支、创建新分支、提交和推送更改以及创建拉取请求。 您可以使用代码空间内的集成终端输入 Git 命令，也可以单击图标和菜单选项以完成所有最常见的 Git 任务。 本指南解释如何使用图形用户界面来控制源代码。

{% vscode %}

有关 {% data variables.product.prodname_vscode %} 中的 Git 支持的详细信息，请参阅 {% data variables.product.prodname_vscode %} 文档中的“[在 VS Code 中使用版本控制](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support)”。

{% endvscode %}

{% webui %}

{% data variables.product.prodname_vscode %} Web 客户端中的源代码管理使用与 {% data variables.product.prodname_vscode %} 桌面应用程序相同的工作流。 有关详细信息，请参阅 {% data variables.product.prodname_vscode %} 文档中的“[在 VS Code 中使用版本控制](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support)”。

{% endwebui %}

使用 {% data variables.product.prodname_github_codespaces %} 更新文件的典型工作流程将是：

* 从 {% data variables.product.prodname_dotcom %} 上仓库的默认分支，创建代码空间。 请参阅“[为存储库创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)”。
* 在代码空间中，创建一个新的分支来操作。
* 进行更改并保存。
* 提交更改。
* 提出拉取请求。

{% webui %}

{% data reusables.codespaces.source-control %} 

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.source-control %} 

{% endvscode %}

{% jetbrains %}

## 创建或切换分支

1. 单击状态栏右侧的分支名称。

   ![状态栏中的分支名称的屏幕截图](/assets/images/help/codespaces/jetbrains-branch-button.png)

1. 在弹出菜单中，执行以下操作之一：
   * 要基于当前分支创建新分支，请单击当前分支的名称，然后选择“新建分支”。 

     ![“新建分支”选项的屏幕截图](/assets/images/help/codespaces/jetbrains-new-branch-option.png)

     输入新建分支的名称并单击“创建”。

     ![“创建分支”对话框的屏幕截图](/assets/images/help/codespaces/jetbrains-create-branch-dialog.png)

   * 要签出现有分支，请开始键入要签出的分支的名称。单击列表中的分支，然后单击“签出”。

     ![签出页面的屏幕截图](/assets/images/help/codespaces/jetbrains-checkout-submenu.png)

     {% tip %}

     提示：如果有人最近在远程存储库上更改了文件，则在你切换到的分支中，只有将更改拉取到 codespace 中之后，你才能看到这些更改。 

     {% endtip %}


## 提交更改 

1. 在导航栏的右侧，单击复选标记。

   ![“提交”复选标记的屏幕截图](/assets/images/help/codespaces/jetbrains-commit-button.png)

1. 在“提交更改”对话框中，输入提交消息。
1. 单击“提交”。

   此外，也可以单击“提交”旁边的向下箭头，然后单击“提交并推送” 。

   ![“提交并推送”按钮的屏幕截图](/assets/images/help/codespaces/jetbrains-commit-and-push.png)

## 从远程仓库拉取更改

可以从远程存储库的同一分支中拉取更改，并将这些更改应用到你在 codespace 中处理的存储库副本。

1. 在导航栏的右侧，单击向下箭头。

   ![更新项目向下箭头按钮的屏幕截图](/assets/images/help/codespaces/jetbrains-update-project-button.png)

1. 在“更新项目”对话框中，选择是要合并还是变基传入的更改。

   ![“更新项目”对话框的屏幕截图](/assets/images/help/codespaces/jetbrains-update-options.png)

1. 单击 **“确定”** 。

## 将更改推送到远程仓库

可以推送保存并提交的更改。 这将应用这些更改到远程仓库上的上游分支。 如果您尚未准备好创建拉取请求，或者希望在 {% data variables.product.prodname_dotcom %} 上创建拉取请求，则可能需要这样做。

1. 在导航栏的右侧，单击向上箭头。

   ![“推送提交”向上箭头的屏幕截图](/assets/images/help/codespaces/jetbrains-push-button.png)

1. 在“推送提交”对话框中，单击“推送”。

{% endjetbrains %}
