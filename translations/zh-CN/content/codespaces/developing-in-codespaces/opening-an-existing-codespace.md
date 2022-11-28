---
title: 打开现有 codespace
intro: 可以重新打开已关闭或已停止的 codespace 并返回到工作。
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Open an existing codespace
ms.openlocfilehash: e7a35c1a7b3a251094bf69fcd401291b69d03eae
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159003'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

您可以在 {% data variables.product.prodname_dotcom_the_website %}、JetBrains IDE 中、{% data variables.product.prodname_vscode %} 中或使用 {% data variables.product.prodname_cli %} 重新打开任何活动或已停止的代码空间。 无法重新打开已删除的 codespace。 有关详细信息，请参阅“[codespace 生命周期](/codespaces/developing-in-codespaces/the-codespace-lifecycle)”。

可以在“你的 codespace”页 ([github.com/codespaces](https://github.com/codespaces)) 上查看所有 codespace。 在此页中，可以：

- 打开、停止或删除 codespace。
- 了解谁拥有 codespace（并可能为 codespace 付费）：你的个人帐户或你所属的组织。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)”。
- 通过选择 {% data variables.product.company_short %} 模板之一或单击“新建 codespace”来创建新的 codespace。 有关详细信息，请参阅“[从模板创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)”和“[为存储库创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)”。

## 打开现有 codespace

{% webui %}

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. 要在默认编辑器中打开 codespace，请单击 codespace 的名称。 {% data reusables.codespaces.about-changing-default-editor %}有关详细信息，请参阅“[设置 {% data variables.product.prodname_github_codespaces %} 的默认编辑器](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)”。
   
   如需从非默认编辑器中打开 codespace，请执行以下操作：
   
   1. 单击要打开的 codespace 右侧的省略号 (...)。
   1. 单击“在...中打开”。
   1. 单击“在应用程序中打开”。

   ![“在...中打开”对话框的屏幕截图，其中突出显示“在 Visual Studio Code 中打开”](/assets/images/help/codespaces/open-codespace-in-another-editor.png)

   可以在以下项中打开 codespace：
   * 浏览器
   * {% data variables.product.prodname_vscode %}
   * JetBrains 网关
   * JupyterLab

   {% data reusables.codespaces.application-installed-locally %}

   如果选择“JupyterLab”，则必须在 codespace 中安装 JupyterLab 应用程序。 {% data reusables.codespaces.jupyterlab-in-default-image %}

{% endwebui %}

{% vscode %}

{% note %}

注意：{% data reusables.codespaces.using-codespaces-in-vscode %}有关详细信息，请参阅“[在 {% data variables.product.prodname_vscode %} 中使用 {% data variables.product.prodname_github_codespaces %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)”。

{% endnote %}

1. 在 {% data variables.product.prodname_vscode_shortname %} 桌面应用程序中，使用 <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac) 或 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux) 打开命令面板。
1. 键入“Codespaces”并选择以下命令之一。
   - 要在 {% data variables.product.prodname_vscode_shortname %} 的新窗口中打开 codespace，请选择“Codespaces: 在新窗口中打开 Codespace”
   - 要在 Web 编辑器中打开 codespace，请选择“Codespaces: 在浏览器中打开”
1. 单击要打开的 codespace。
   
   ![Visual Studio Code 中 codespace 列表的屏幕截图](/assets/images/help/codespaces/open-codespace-from-vscode.png)

还可通过导航到 {% data variables.product.prodname_vscode_shortname %} 中的“远程资源管理器”视图并右键单击要打开的 codespace 来访问上面列出的命令。

![在“远程资源管理器”中选择的 codespace 的屏幕截图，其中突出显示了“在浏览器中打开”](/assets/images/help/codespaces/open-codespace-remote-explorer.png)

{% data reusables.codespaces.remote-explorer %} {% endvscode %}

{% cli %}

1. 在终端中，输入以下 {% data variables.product.prodname_cli %} 命令之一。
   - 若要在 {% data variables.product.prodname_vscode_shortname %} 中删除 codespace，请输入：

     ```shell{:copy}
     gh codespace code
     ```
     
     {% note %}

     注意：必须在本地计算机上安装 {% data variables.product.prodname_vscode_shortname %}。 有关详细信息，请参阅 {% data variables.product.prodname_vscode_shortname %} 文档中的“[设置 Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview)”。

     {% endnote %}
     
   - 若要在浏览器中打开 codespace，请输入：
  
     ```shell{:copy}
     gh codespace code --web
     ```

   - 要在 JupyterLab 中打开 codespace，请输入：
  
     ```shell{:copy}
     gh codespace code --jupyter
     ```
     
     {% note %}

     注意：{% data reusables.codespaces.jupyterlab-installed-in-codespace %}

     {% endnote %}
     
1. 使用箭头键导航到要打开的 codespace。
1. 若要打开 codespace，请按 Enter<kbd></kbd>。

有关详细信息，请参阅 {% data variables.product.prodname_cli %} 手册中的 [`gh codespace code`](https://cli.github.com/manual/gh_codespace_code)。

{% endcli %}

{% jetbrains %}

{% data reusables.codespaces.opening-codespace-in-jetbrains %}

{% endjetbrains %}
