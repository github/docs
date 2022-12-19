---
title: '{% data variables.product.prodname_github_codespaces %} 快速入门'
shortTitle: 'Quickstart for {% data variables.product.prodname_codespaces %}'
intro: '在 5 分钟内试用 {% data variables.product.prodname_github_codespaces %}。'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - Codespaces
redirect_from:
  - /codespaces/codespaces-quickstart
ms.openlocfilehash: f35fa87711ff3a7c33ed252d0d1e87865af619bc
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158651'
---
## 简介

在本指南中，你将从模板存储库创建 codespace，并探索 codespace 中可用的一些基本功能。 你将使用 {% data variables.product.prodname_vscode %} 的浏览器版本，该版本最初是 {% data variables.product.prodname_github_codespaces %} 的默认编辑器。 尝试本快速入门后，可以在其他编辑器中使用 {% data variables.product.prodname_codespaces %}，并且可以更改默认编辑器。 本指南末尾提供了相关链接。

在本快速入门中，你将了解如何创建 codespace、连接到转发的端口以查看正在运行的应用程序、将 codespace 发布到一个新的存储库，以及通过扩展实现设置个性化。

有关 {% data variables.product.prodname_github_codespaces %} 如何工作的详细信息，请参阅配套指南“[深入了解 {% data variables.product.prodname_github_codespaces %}](/codespaces/getting-started/deep-dive)”。

## 创建代码空间

1. 导航到 [github/haikus-for-codespaces](https://github.com/github/haikus-for-codespaces) 模板存储库。
{% data reusables.codespaces.open-template-in-codespace-step %}

## 运行应用程序

创建 codespace 后，模板存储库将自动克隆到其中。 现在，您可以运行该应用程序并在浏览器中启动它。

1. 当终端可用时，输入命令 `npm run dev`。 此示例使用 Node.js 项目，此命令运行 `package.json` 文件中标记为“dev”的脚本，该脚本启动示例存储库中定义的 Web 应用程序。
   
   ![终端中的 npm run dev](/assets/images/help/codespaces/codespaces-npm-run-dev.png)

   如果按照其他应用程序类型进行操作，请为该项目输入相应的启动命令。

2. 当应用程序启动时，codespace 会识别运行应用程序的端口，并显示该端口已转发的提示。 

   ![端口转发“toast”通知](/assets/images/help/codespaces/quickstart-port-toast.png)

3. 单击“在浏览器中打开”，在新选项卡中查看正在运行的应用程序。

## 编辑应用程序并查看更改

1. 切换回 codespace，并通过在文件资源管理器中单击 `haikus.json` 文件来打开该文件。

2. 编辑第一个俳句的 `text` 字段，从而使用自己的俳句个性化应用程序。

3. 返回到浏览器中正在运行的应用程序选项卡，然后刷新以查看所做的更改。
   
   {% octicon "light-bulb" aria-label="The lightbulb icon" %} 如果已关闭选项卡，请打开“端口”面板，然后针对运行的端口单击“在浏览器中打开”图标。

   ![端口转发面板](/assets/images/help/codespaces/quickstart-forward-port.png)

## 提交和推送更改

现在，你已经进行了一些更改，可以使用集成终端或源视图将工作发布到新的存储库。

{% data reusables.codespaces.source-control-display-dark %}
1. 若要暂存更改，请单击 `haikus.json` 文件旁边的 +，如果你更改了多个文件并希望全部暂存，请单击“更改”旁边的按钮 。

   ![突出显示的暂存按钮的源代码管理侧栏](/assets/images/help/codespaces/codespaces-commit-stage.png)

2. 若要提交暂存更改，请键入描述所做更改的提交消息，然后单击“提交”。

   ![包含提交消息的源代码管理侧栏](/assets/images/help/codespaces/vscode-commit-button.png)

3. 单击“发布分支”。
   
   ![VS Code 中“发布分支”按钮的屏幕截图](/assets/images/help/codespaces/vscode-publish-branch-button.png)

4. 在“存储库名称”下拉列表中，键入新存储库的名称，然后选择“发布到 {% data variables.product.company_short %} 专用存储库”或“发布到 {% data variables.product.company_short %} 公共存储库”。 
   
   ![VS Code 中“存储库名称”下拉列表的屏幕截图](/assets/images/help/codespaces/choose-new-repository.png)

   新存储库的所有者将是创建 codespace 时所使用的 {% data variables.product.prodname_dotcom %} 帐户。
5. 在编辑器右下角显示的弹出窗口中，单击“在 {% data variables.product.company_short %} 上打开”，查看 {% data variables.product.prodname_dotcom_the_website %} 上的新存储库。 在新存储库中，查看 `haikus.json` 文件，并检查 codespace 中所做的更改是否已成功推送到存储库。
   
   ![VS Code 中“在 GitHub 中打开”弹出窗口的屏幕截图](/assets/images/help/codespaces/open-on-github.png)

## 使用扩展进行个性化设置

使用浏览器或 {% data variables.product.prodname_vscode %} 桌面应用程序连接到 codespace 时，可以直接从编辑器访问 Visual Studio Code 市场。 在本示例中，你将安装可更改主题的 {% data variables.product.prodname_vscode_shortname %} 扩展，但也可以安装对工作流程有用的任何扩展。

1. 在左侧栏中，单击扩展图标。
1. 在搜索栏中，键入 `fairyfloss` 并单击“安装”。

   ![添加扩展](/assets/images/help/codespaces/add-extension.png)

1. 从列表中选择 `fairyfloss` 主题。

   ![选择 fairyfloss 主题](/assets/images/help/codespaces/fairyfloss.png)

如果你在浏览器或 {% data variables.product.prodname_vscode %} 桌面应用程序中使用 codespace，并且已打开[“设置同步”](https://code.visualstudio.com/docs/editor/settings-sync)，则在当前 codespace 中对编辑器设置所做的任何更改（例如更改主题或键盘绑定），将自动同步到已登录到 {% data variables.product.prodname_dotcom %} 帐户的任何 {% data variables.product.prodname_vscode %} 实例以及你创建的任何其他 codespace 中。

## 后续步骤

您已经成功创建、个性化并在代码空间中运行了第一个应用程序，但还有很多需要探索的地方！ 以下是一些有用的资源，可以帮助你对 {% data variables.product.prodname_github_codespaces %} 执行后续步骤。

* “[深入探讨](/codespaces/getting-started/deep-dive)”：本快速入门介绍了 {% data variables.product.prodname_github_codespaces %} 的一些功能。 从技术角度深入探讨这些领域。
* “[将开发容器配置添加到存储库](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)”：这些指南提供有关设置存储库以将 {% data variables.product.prodname_github_codespaces %} 用于特定语言的信息。
* “[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”：该指南提供有关创建用于项目的 {% data variables.product.prodname_codespaces %} 的自定义配置的详细信息。

## 延伸阅读

* “[为组织启用 {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)”
* “[使用 {% data variables.product.prodname_vscode %} 中的 {% data variables.product.prodname_github_codespaces %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)”
* “[在 JetBrains IDE 中使用 {% data variables.product.prodname_github_codespaces %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)”
* “[将 {% data variables.product.prodname_github_codespaces %} 与 {% data variables.product.prodname_cli %} 配合使用](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli)”
* “[为 {% data variables.product.prodname_github_codespaces %} 设置默认编辑器](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)”。
* “[管理组织中的 {% data variables.product.prodname_github_codespaces %} 成本](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)”
