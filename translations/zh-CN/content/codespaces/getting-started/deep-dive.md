---
title: '深入了解 {% data variables.product.prodname_github_codespaces %}'
shortTitle: 'Deep dive into {% data variables.product.prodname_codespaces %}'
intro: '了解 {% data variables.product.prodname_github_codespaces %} 的工作原理。'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - Codespaces
ms.openlocfilehash: 01e4f3990cc47f61678811f7c4a77b86626fd8a5
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188262'
---
{% data variables.product.prodname_github_codespaces %} 是一个基于云的即时开发环境，它使用容器为你提供用于开发的通用语言、工具和实用程序。 {% data variables.product.prodname_github_codespaces %} 也是可配置的，通过它可为项目创建自定义的开发环境。 通过为项目配置自定义开发环境，可以为项目的所有用户提供可重复的代码空间配置。

## 创建代码空间

有许多入口点可用于创建代码空间。

- 通过 {% data variables.product.company_short %} 模板或 {% data variables.product.prodname_dotcom_the_website %} 上的任何模板存储库启动新项目
- 使用存储库中的分支进行新功能工作
- 使用打开的拉取请求探索正在进行的工作
- 使用存储库历史记录中的提交项调查特定时间点的 bug。

{% data reusables.codespaces.ways-to-create-a-codespace %}
  
如果需要测试某些内容，则代码空间可以是短暂的，或者可以返回到同一代码空间来处理长时间运行的功能工作。 

有关详细信息，请参阅“[为存储库创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)”、“[通过模板创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)”和“[打开现有 codespace](/codespaces/developing-in-codespaces/opening-an-existing-codespace)”。

{% note %}

注意：可为每个存储库甚至每个分支创建多个 codespace。 但是，可以创建的 codespace 数量和可以同时运行的 codespace 数量受到限制。 如果达到最大 codespace 数并尝试创建另一个 codespace，则会显示一条消息，告知你必须删除现有 codespace，然后才能创建新的 codespace。

{% endnote %}

### codespace 创建过程

创建 codespace 时，各个步骤将在后台执行，然后 codespace 可供你使用。

### 步骤 1：将虚拟机和存储分配给代码空间

创建 codespace 时，将创建存储库的[浅克隆](https://github.blog/2020-12-21-get-up-to-speed-with-partial-clone-and-shallow-clone/)，如果是通过模板创建 codespace，则将创建模板存储库的浅克隆。 存储库将克隆到你的专用 Linux 虚拟机。 拥有专用虚拟机可确保您拥有该计算机中可供使用的整个计算资源集。 如有必要，这还允许您对容器具有完全根访问权限。

### 步骤 2：创建容器

{% data variables.product.prodname_github_codespaces %} 使用容器作为开发环境。 此容器是根据你可以在 `devcontainer.json` 文件以及 Dockerfile（可选）中定义的配置创建的。 如果通过 {% data variables.product.company_short %} 的空白模板或不包含 `devcontainer.json` 文件的存储库创建 codespace，{% data variables.product.prodname_github_codespaces %} 将使用具有多种语言和运行时的默认映像。 有关详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”。 若要详细了解默认映像包含的内容，请参阅 [`microsoft/vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/main/containers/codespaces-linux) 存储库。

{% note %}

注意：如果要在 codespace 中使用 Git 挂钩，并将 [git 模板目录](https://git-scm.com/docs/git-init#_template_directory)中的任何内容应用于 codespace，则必须在创建容器后在步骤 4 中设置挂钩。

由于存储库在创建容器之前已克隆到主机 VM 上，因此 [git 模板目录](https://git-scm.com/docs/git-init#_template_directory)中的任何内容都不会应用于 codespace，除非你在步骤 4 中使用 `postCreateCommand` 在 `devcontainer.json` 配置文件中设置挂钩。 有关详细信息，请参阅“[步骤 4：创建后设置](#step-4-post-creation-setup)”。

{% endnote %}

### 步骤 3：连接到代码空间

创建容器并运行任何其他初始化后，您将连接到代码空间。 可以使用以下方法建立连接：

* Web 浏览器
* [Visual Studio Code](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)
* [JetBrains IDE](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)
* [{% data variables.product.prodname_cli %}](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli)

### 步骤 4：创建后设置

连接到 codespace 后，你的自动设置可能会根据你在 `devcontainer.json` 文件中指定的配置继续构建。 你可能会看到 `postCreateCommand` 和 `postAttachCommand` 运行。

如果要在 codespace 中使用 Git 挂钩，请使用 [`devcontainer.json` 生命周期脚本](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts)设置挂钩，例如 `postCreateCommand`。 有关详细信息，请参阅 {% data variables.product.prodname_vscode_shortname %} 文档中的 [`devcontainer.json` 参考](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties)。

如果你有一个用于 {% data variables.product.prodname_github_codespaces %} 的公共 dotfile 存储库，则可以启用它以用于新的 codespace。 启用后，您的 dotfile 将被克隆到容器中，并且将调用安装脚本。 有关详细信息，请参阅“[为帐户设置个性化的 {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#dotfiles)”。 

最后，如果通过存储库创建了 codespace，则会使用完整克隆复制存储库的整个历史记录。 如果通过模板创建了 codespace，则不会保留模板存储库的完整历史记录；除非改为使用空白模板，否则将从模板存储库内容的初始提交开始。

在创建后设置期间，您仍然可以使用集成终端并对文件进行编辑，但要注意避免工作与正在运行的命令之间存在任何争用条件。
## {% data variables.product.prodname_codespaces %} 生命周期

### 在代码空间中保存文件

根据所用的编辑器以常规方式保存对文件的更改。

如果要处理 {% data variables.product.prodname_vscode %} 中的 codespace，则可以启用[自动保存](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save)以确保始终保存所做更改。 

### 关闭或停止代码空间

使用 codespace 时，它将保持运行，但在处于非活动状态一段时间后会超时。 编辑器和终端输出中的文件更改将计为活动，因此，如果终端输出继续，codespace 将不会超时。 默认非活动超时期限为 30 分钟。 可以为创建的 codespace 定义个人超时设置，但这可能会被组织超时策略覆盖。 有关详细信息，请参阅“[为 codespace 设置超时期限](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-codespaces)”。 

如果 codespace 超时，它将停止运行，但可通过以下方式重启：浏览器选项卡（如果在浏览器中使用 codespace）、{% data variables.product.prodname_vscode_shortname %}、[https://github.com/codespaces](https://github.com/codespaces) 中的 codespace 列表。

可通过以下方式停止 codespace

* 浏览器：在 [https://github.com/codespaces](https://github.com/codespaces) 的 codespace 列表中，单击要停止的 codespace 右侧的省略号 (…)，然后单击“停止 codespace” 。
* {% data variables.product.prodname_vscode_shortname %}：打开 [the {% data variables.product.prodname_vscode_command_palette %}](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces#suspending-or-stopping-a-codespace) - 例如，按 <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Enter</kbd> (Windows/Linux) 或 <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac)，键入 `Codespaces: stop`，然后按 <kbd>Enter</kbd>。
* JetBrains 客户端：单击 {% data variables.product.prodname_github_codespaces %} 工具窗口顶部的停止按钮。 有关详细信息，请参阅“[停止和启动 codespace](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace)”的“JetBrains IDE”选项卡。
* 终端窗口：使用 {% data variables.product.prodname_cli %} 命令 `gh codespace stop`。 有关详细信息，请参阅“[将 {% data variables.product.prodname_github_codespaces %} 与 {% data variables.product.prodname_cli %} 配合使用](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli#gh-commands-for-github-codespaces)。

如果在未运行停止命令的情况下退出 codespace（例如，关闭浏览器选项卡），或者让 codespace 在没有交互的情况下运行，则代码空间及其正在运行的进程将在非活动超时期限内继续运行。 

关闭或停止代码空间时，将保留所有未提交的更改，直到您再次连接到代码空间。

## 运行应用程序

通过端口转发，您可以访问在代码空间内运行的 TCP 端口。 例如，如果要在代码空间内的端口 4000 上运行 Web 应用程序，则可以自动转发该端口，以使该应用程序可从浏览器访问。

端口转发确定可从远程计算机访问哪些端口。 即使不转发端口，在代码空间本身内运行的其他进程仍然可以访问该端口。

![显示端口转发在代码空间中的工作方式的图示](/assets/images/help/codespaces/port-forwarding.png)

当在 {% data variables.product.prodname_github_codespaces %} 内运行的应用程序将端口输出到控制台时，{% data variables.product.prodname_github_codespaces %} 会检测 localhost URL 模式并自动转发该端口。 可以单击终端中的 URL，或单击 {% data variables.product.prodname_vscode_shortname %} 右下角弹出的“toast”通知消息中的链接在浏览器中打开端口。 默认情况下，{% data variables.product.prodname_github_codespaces %} 使用 HTTP 转发端口。 有关端口转发的详细信息，请参阅“[在 codespace 中转发端口](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)”。

虽然端口可以自动转发，但它们不能被互联网公开访问。 默认情况下，所有端口都是私有的，但您可以手动使端口可供您的组织或公共使用，然后通过 URL 共享访问权限。 有关详细信息，请参阅“[共享端口](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#sharing-a-port)”。

首次登录代码空间时运行应用程序可以实现快速的内部开发循环。 编辑时，您的更改会自动保存，并可在转发的端口上使用。 要查看更改，请返回浏览器中正在运行的应用程序选项卡并刷新它。

## 提交和推送更改

默认情况下，Git 安装在 codespace 中，因此你可以依赖现有的 Git 工作流。 你可以通过终端或者使用 {% data variables.product.prodname_vscode_shortname %} 或 JetBrains 的源代码管理功能在 codespace 中使用 Git。

如果使用的是现有存储库，则可使用项目中的任何分支、提交或拉取请求创建 codespace，也可以从活动 codespace 中切换到新的或现有的分支。 由于 {% data variables.product.prodname_github_codespaces %} 设计为临时的，因此你可以将其用作隔离环境来试验、检查团队成员的拉取请求或修复合并冲突。

如果使用的是通过模板创建的 codespace，则默认情况下将安装 Git，但需要将 codespace 发布到远程存储库，以保留工作并与其他人共享。 如果通过 {% data variables.product.company_short %} 的空白模板开始，则首先需要将工作区初始化为 Git 存储库（例如输入 `git init`），才能在 codespace 中开始使用源代码管理功能。

有关详细信息，请参阅[在 codespace 中使用源代码管理](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace)。

{% note %}

注意：来自 codespace 的提交将属性化为在 https://github.com/settings/profile 配置的名称和公共电子邮件。 范围限定为存储库的令牌（作为 `GITHUB_TOKEN` 包含在环境中），你的 GitHub 凭据将用于身份验证。

{% endnote %}

## 使用扩展或插件个性化 codespace

可以在 codespace 中添加插件和扩展，分别对在 JetBrains 和 {% data variables.product.prodname_vscode_shortname %} 中的体验进行个性化设置。

### {% data variables.product.prodname_vscode_shortname %} 扩展

如果在 {% data variables.product.prodname_vscode_shortname %} 桌面应用程序或 Web 客户端中使用 codespace，则可使用 {% data variables.product.prodname_vscode_marketplace %} 添加所需的任何扩展。 若要了解扩展如何在 {% data variables.product.prodname_github_codespaces %} 中运行，请参阅 {% data variables.product.prodname_vscode_shortname %} 文档中的[支持远程开发和 {% data variables.product.prodname_github_codespaces %}](https://code.visualstudio.com/api/advanced-topics/remote-extensions)。 

如果你已使用 {% data variables.product.prodname_vscode_shortname %}，则可以使用[设置同步](https://code.visualstudio.com/docs/editor/settings-sync)在本地实例和你创建的任何 codespace 之间自动同步扩展、设置、主题和键盘快捷方式。

### JetBrains 插件

如果在 JetBrains IDE 中使用 codespace，则可使用 JetBrains Marketplace 添加插件。

1. 单击 JetBrains 客户端，然后单击“首选项” 。
1. 在“首选项”对话框中，单击“主机插件”可在远程运行的完整 JetBrains IDE 中安装插件，或单击“插件”可在本地客户端上安装插件，例如更改用户界面主题 。 
1. 单击“市场”选项卡。

   ![“主机插件”的“市场”选项卡的屏幕截图](/assets/images/help/codespaces/jetbrains-preferences-plugins.png)

1. 单击所需插件旁边的“安装”。

## 延伸阅读

- [为组织启用 {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)
- [管理组织中的 {% data variables.product.prodname_github_codespaces %} 成本](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)
- [将开发容器配置添加到存储库](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)
- [codespace 生命周期](/codespaces/getting-started/the-codespace-lifecycle)
