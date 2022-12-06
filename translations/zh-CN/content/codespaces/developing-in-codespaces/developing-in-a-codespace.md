---
title: 在代码空间中开发
intro: '可以使用浏览器、{% data variables.product.prodname_vscode %}、JetBrains IDE 或在命令 shell 中在 codespace 中工作。'
redirect_from:
  - /github/developing-online-with-github-codespaces/developing-in-a-codespace
  - /github/developing-online-with-codespaces/developing-in-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Develop in a codespace
ms.openlocfilehash: e941373ade8c2f8365e7b654733b7ee029a6a7dd
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159067'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## 关于使用 {% data variables.product.prodname_github_codespaces %} 进行开发

可以使用所选工具在 codespace 中开发代码： 

* 命令 shell，通过使用 {% data variables.product.prodname_cli %} 启动的 SSH 连接。
* JetBrains IDE 之一，通过 JetBrains 网关。
* {% data variables.product.prodname_vscode %} 桌面应用程序。
* {% data variables.product.prodname_vscode %} 的基于浏览器的版本。

{% webui %}

使用本文中的选项卡，可以在每种工作方式的信息之间切换。 你当前位于 {% data variables.product.prodname_vscode %} 的 Web 浏览器版本的选项卡上。

## 在浏览器的 codespace 中工作

在浏览器中使用 {% data variables.product.prodname_codespaces %} 可提供功能齐全的开发体验。 可以编辑代码、调试、使用 Git 命令以及运行应用程序。

![浏览器中 codespace 的带有批注的屏幕截图](/assets/images/help/codespaces/codespace-overview-annotated.png)

{% data reusables.codespaces.vscode-interface-annotation %} {% data reusables.codespaces.use-chrome %} 有关详细信息，请参阅“[对 {% data variables.product.prodname_github_codespaces %} 客户端进行故障排除](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients)”。
{% data reusables.codespaces.developing-in-vscode %} {% data reusables.codespaces.navigating-to-a-codespace %}

{% endwebui %}

{% vscode %}

使用本文中的选项卡，可以在每种工作方式的信息之间切换。 你当前位于 {% data variables.product.prodname_vscode %} 的选项卡上。

## 在 {% data variables.product.prodname_vscode_shortname %} 的 codespace 中工作

{% data variables.product.prodname_github_codespaces %} 为你提供完整的 {% data variables.product.prodname_vscode %} 开发体验。 {% data reusables.codespaces.use-visual-studio-features %}

![VS Code 中 codespace 的带批注的屏幕截图](/assets/images/help/codespaces/codespace-annotated-vscode.png)

{% data reusables.codespaces.vscode-interface-annotation %}

有关使用 {% data variables.product.prodname_vscode_shortname %} 的详细信息，请参阅 {% data variables.product.prodname_vscode_shortname %} 文档中的[用户界面指南](https://code.visualstudio.com/docs/getstarted/userinterface)。

{% data reusables.codespaces.connect-to-codespace-from-vscode %} 

有关故障排除信息，请参阅“[对 Codespaces 客户端进行故障排除](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients)”。
{% data reusables.codespaces.developing-in-vscode %} {% data reusables.codespaces.navigating-to-a-codespace %}

{% endvscode %}

{% jetbrains %}

使用本文中的选项卡，可以在每种工作方式的信息之间切换。 你当前位于 JetBrains IDE 的选项卡上。

## 在 JetBrains IDE 中的 codespace 中工作

要将 {% data variables.product.prodname_github_codespaces %} 与 JetBrains IDE 一起使用，必须已安装 JetBrains 网关。 有关安装 JetBrains 网关的信息，请参阅 [JetBrains 网站](https://www.jetbrains.com/remote-development/gateway/)。

可以使用所选的 JetBrains IDE 在 codespace 中工作。 创建 codespace 后，可以使用 JetBrains 网关应用程序在首选 IDE 中打开 codespace。

使用 JetBrains IDE 在 codespace 中进行开发时，可以编辑代码、调试和使用 Git 命令。 有关各种 JetBrains IDE 的详细信息，请参阅 [JetBrains 文档](https://www.jetbrains.com/help/)。

### IntelliJ IDEA 用户界面

在 {% data variables.product.prodname_github_codespaces %} 文档中，我们使用 IntelliJ IDEA 作为具有代表性的 JetBrains IDE。 不同的 JetBrains IDE 可能具有不同的布局。

![JetBrains IntelliJ IDEA 中 codespace 的带批注的屏幕截图](/assets/images/help/codespaces/jetbrains-gui-with-callouts.png)

1. **导航栏** - 显示当前所选文件或目录的路径。 使用导航栏右侧的按钮执行各种操作，包括生成、运行或调试项目，或者运行 Git 命令以提交和推送更改。
2. **项目工具窗口** - 显示项目的结构，并允许在编辑器中打开文件。
3. **{% data variables.product.prodname_github_codespaces %} 工具窗口** - 单击工具窗口左侧栏中的 {% data variables.product.prodname_github_codespaces %} 插件即可显示。 它显示有关 codespace 的信息，包括其显示名称和计算机类型。 此工具窗口顶部的按钮可用于：
   * 停止 codespace 并断开连接
   * 显示“你的 codespace”网页
   * 查看 codespace 创建日志
   * 重新生成开发容器
4. **编辑器** - 这是编辑文件的地方。 可以右键单击文件的选项卡以访问选项，例如将选项卡移动到新窗口。
5. **终端** - 单击主窗口底部的工具窗口栏中的“终端”（状态栏正上方），即可显示。 通过集成终端，无需切换到专用终端应用程序即可执行命令行任务。
6. **状态栏** - 将鼠标悬停在状态栏左侧的图标上可查看工具列表。 单击图标可隐藏或显示工具窗口栏。 状态栏的右侧显示有关项目的信息，包括当前 Git 分支。

有关 IntelliJ IDEA 用户界面的详细信息，请参阅 [IntelliJ IDEA 的 JetBrains 文档](https://www.jetbrains.com/help/idea/guided-tour-around-the-user-interface.html)。

### 自定义存储库的 codespace

可以通过创建或更新存储库的开发容器配置来自定义为存储库创建的 codespace。 可以从 codespace 中执行此操作。 更改开发容器配置后，可以通过为 codespace 重新生成 Docker 容器来将更改应用于当前 codespace。 有关详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”。

### 个性化代码空间

可以使用 [dotfiles](https://dotfiles.github.io/tutorials/) 存储库为创建的任何 codespace 个性化 codespace 环境的各个方面。 有关详细信息，请参阅“[为帐户设置个性化的 {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#dotfiles)”。

### 提交更改

在对 codespace 进行更改（无论是添加新代码还是更改配置）之后，需要提交和推送更改。 将更改推送到存储库可确保从此存储库创建 codespace 的其他任何人都具有相同的配置。 这也意味着，为修改为存储库创建的 codespace 的配置所做的任何自定义都将可供使用该存储库的所有人使用。

有关详细信息，请参阅[在 codespace 中使用源代码管理](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#committing-your-changes)。

## 延伸阅读

* “[在 JetBrains IDE 中使用 {% data variables.product.prodname_github_codespaces %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)”。
* “[将 {% data variables.product.prodname_github_codespaces %} 插件用于 JetBrains](/codespaces/codespaces-reference/using-the-github-codespaces-plugin-for-jetbrains)”
* “[对 {% data variables.product.prodname_github_codespaces %} 客户端进行故障排除](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients)”

{% endjetbrains %}

{% cli %}

使用本文中的选项卡，可以在每种工作方式的信息之间切换。 当前位于 {% data variables.product.prodname_cli %} 的选项卡上。

## 在命令 shell 中的 codespace 中工作

{% data reusables.cli.cli-learn-more %}

可以使用 {% data variables.product.prodname_cli %} 创建新的 codespace，或启动现有 codespace，然后通过 SSH 连接到它。 连接后，可以使用你喜欢的命令行工具在命令行上工作。

安装 {% data variables.product.prodname_cli %} 并对 {% data variables.product.prodname_dotcom %} 帐户进行身份验证后，可以使用命令 `gh codespace [<SUBCOMMAND>...] --help` 浏览帮助信息。 或者，可以通过 [https://cli.github.com/manual/gh_codespace](https://cli.github.com/manual/gh_codespace) 查看相同的参考信息。

有关详细信息，请参阅“[将 {% data variables.product.prodname_github_codespaces %} 与 GitHub CLI 结合使用](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli)”。

{% endcli %}
