---
title: 深入了解代码空间
intro: '了解 {% data variables.product.prodname_codespaces %} 的工作原理.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - Codespaces
---

{% data variables.product.prodname_codespaces %} 是一个基于云的即时开发环境，它使用容器为您提供用于开发的通用语言、工具和实用程序。 {% data variables.product.prodname_codespaces %} 也是可配置的，允许您为项目创建自定义的开发环境。 通过为项目配置自定义开发环境，可以为项目的所有用户提供可重复的代码空间配置。

## 创建代码空间

有许多入口点可用于创建代码空间。

- 从存储库进行新功能工作。
- 从打开的拉取请求中探索正在进行的工作。
- 从存储库历史记录中的提交到调查特定时间点的漏洞。
- 从 {% data variables.product.prodname_vscode %}。

如果需要测试某些内容，则代码空间可以是短暂的，或者可以返回到同一代码空间来处理长时间运行的功能工作。 更多信息请参阅“[创建代码空间](/codespaces/developing-in-codespaces/creating-a-codespace)”。

在选择创建新代码空间的选项，并选择性地从代码空间的各种配置选项中进行选择后，在代码空间可供您使用之前，某些步骤将在后台进行。

![使用 Codespaces 打开按钮](/assets/images/help/codespaces/new-codespace-button.png)

### 步骤 1：将虚拟机和存储分配给代码空间

创建代码空间时，将在专用且私有的 Linux 虚拟机上创建存储库的[影子克隆](https://github.blog/2020-12-21-get-up-to-speed-with-partial-clone-and-shallow-clone/) 。 拥有专用虚拟机可确保您拥有该计算机中可供使用的整个计算资源集。 如有必要，这还允许您对容器具有完全根访问权限。

### 步骤 2：创建容器

{% data variables.product.prodname_codespaces %} 使用容器作为开发环境。 此容器是根据您可以在 `devcontainer.json` 文件和/或存储库中的 Dockerfile 中定义的配置创建的。 如果不[配置容器](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project)，{% data variables.product.prodname_codespaces %} 使用[默认映像](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project#using-the-default-configuration)，该映像有许多语言和运行时可用。 有关默认映像包含的内容的信息，请参阅存储库 [`vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/main/containers/codespaces-linux)。

{% note %}

**注意：**如果要在代码空间中使用 Git 挂钩，并将 [git 模板目录](https://git-scm.com/docs/git-init#_template_directory)中的任何内容应用于代码空间，则必须在创建容器后的步骤 4 中设置挂钩。

由于存储库在创建容器之前已克隆到主机虚拟机上，因此 [git 模板目录](https://git-scm.com/docs/git-init#_template_directory)中的任何内容都不适用于代码空间，除非您在步骤 4 中使用 `postCreateCommand` 在 `devcontainer.json` 配置文件中设置挂钩。 更多信息请参阅“[步骤 4：创建后设置](#step-4-post-creation-setup)”。

{% endnote %}

### 步骤 3：连接到代码空间

创建容器并运行任何其他初始化后，您将连接到代码空间。 如果需要，您可以通过 Web 和/或 [{% data variables.product.prodname_vscode_shortname %}](/codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code) 连接。

### 步骤 4：创建后设置

连接到代码空间后，您的自动设置可能会根据您在 `devcontainer.json` 文件中指定的配置继续构建。 您可能会看到 `postCreateCommand` 和 `postAttachCommand` 运行。

如果要在代码空间中使用 Git 挂钩，请使用 [`devcontainer.json` 生命周期脚本](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts)设置挂钩，例如 `postCreateCommand`。 更多信息请参阅 {% data variables.product.prodname_vscode_shortname %} 文档中的 [`devcontainer.json` 参考](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties)。

如果您有一个用于 {% data variables.product.prodname_codespaces %} 的公共 dotfile 存储库，则可以启用它以用于新的代码空间。 启用后，您的 dotfile 将被克隆到容器中，并且将调用安装脚本。 更多信息请参阅“[为帐户个性化 {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account#dotfiles)”。

最后，使用完整克隆复制存储库的整个历史记录。

在创建后设置期间，您仍然可以使用集成终端并对文件进行编辑，但要注意避免工作与正在运行的命令之间存在任何争用条件。
## {% data variables.product.prodname_codespaces %} 生命周期

### 在代码空间中保存文件

当您在代码空间中开发时，它将每隔几秒钟保存对文件所做的任何更改。 您的代码空间将在上次活动后继续运行 30 分钟。 在此之后，它将停止运行，但您可以从现有浏览器选项卡或现有代码空间列表中重新启动它。 来自编辑器和终端输出的文件更改将计为活动，因此，如果终端输出继续，您的代码空间将不会停止。

{% note %}

**注意：**除非已启用 [Auto Save（自动保存）](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save)，否则不会自动保存 {% data variables.product.prodname_vscode_shortname %} 代码空间中的更改。
{% endnote %}

### 关闭或停止代码空间

要停止代码空间，您可以 [使用 {% data variables.product.prodname_vscode_command_palette %}](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces#suspending-or-stopping-a-codespace) (`Shift + Command + P` (Mac) / `Ctrl + Shift + P` (Windows))。 如果在未运行停止命令的情况下退出代码空间（例如，关闭浏览器选项卡），或者让代码空间在没有交互的情况下运行，则代码空间及其正在运行的进程将继续运行，直到出现不活动窗口，之后代码空间将停止。  默认情况下，不活动窗口为 30 分钟。

关闭或停止代码空间时，将保留所有未提交的更改，直到您再次连接到代码空间。


## 运行应用程序

通过端口转发，您可以访问在代码空间内运行的 TCP 端口。 例如，如果要在代码空间内的端口 4000 上运行 Web 应用程序，则可以自动转发该端口，以使该应用程序可从浏览器访问。

端口转发确定可从远程计算机访问哪些端口。 即使不转发端口，在代码空间本身内运行的其他进程仍然可以访问该端口。

![显示端口转发在代码空间中的工作方式的图示](/assets/images/help/codespaces/port-forwarding.png)

当在 {% data variables.product.prodname_codespaces %} 内运行的应用程序将端口输出到控制台时，{% data variables.product.prodname_codespaces %} 会检测本地主机 URL 模式并自动转发该端口。 可以单击终端或 Toast 消息中的 URL，以在浏览器中打开端口。 默认情况下， {% data variables.product.prodname_codespaces %} 使用 HTTP 转发端口。 有关端口转发的详细信息，请参阅“[代码空间中的转发端口](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)”。

虽然端口可以自动转发，但它们不能被互联网公开访问。 默认情况下，所有端口都是私有的，但您可以手动使端口可供您的组织或公共使用，然后通过 URL 共享访问权限。 更多信息请参阅“[共享端口](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#sharing-a-port)”。

首次登录代码空间时运行应用程序可以实现快速的内部开发循环。 编辑时，您的更改会自动保存，并可在转发的端口上使用。 要查看更改，请返回浏览器中正在运行的应用程序选项卡并刷新它。

## 提交和推送更改

默认情况下，Git 在代码空间中可用，因此您可以依赖现有的 Git 工作流程。 您可以通过终端或使用 [{% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/editor/versioncontrol) 的源代码管理 UI 在代码空间中使用 Git。 更多信息请参阅“[在代码空间中使用源控制](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace)”。

![在代码空间终端中运行 git 状态](/assets/images/help/codespaces/git-status.png)

您可以从项目中的任何分支、提交或拉取请求创建代码空间，也可以从活动代码空间中切换到新的或现有的分支。 由于 {% data variables.product.prodname_codespaces %} 设计为临时的，因此您可以将其用作隔离环境来试验、检查团队成员的拉取请求或修复合并冲突。 每个仓库甚至每个分支可创建多个代码空间。 但是，每个个人帐户都有 10 个代码空间的限制。 如果您已达到上限，想要创建一个新的代码空间，必须先删除一个旧代码空间。

{% note %}

**注意：**来自代码空间的提交将归因于在 https://github.com/settings/profile 配置的名称和公共电子邮件。 范围限定为存储库的令牌（作为 `GITHUB_TOKEN` 包含在环境中），您的 GitHub 凭据将用于进行身份验证。

{% endnote %}

## 使用扩展个性化您的代码空间

在代码空间中使用 {% data variables.product.prodname_vscode_shortname %} 可以访问 {% data variables.product.prodname_vscode_marketplace %}，以便您可以添加所需的任何扩展。 有关扩展如何在 {% data variables.product.prodname_codespaces %} 中运行的信息，请参阅 {% data variables.product.prodname_vscode_shortname %} 文档中的[支持远程开发和 GitHub 代码空间](https://code.visualstudio.com/api/advanced-topics/remote-extensions) 。

如果您已使用 {% data variables.product.prodname_vscode_shortname %}，则可以使用[设置同步](https://code.visualstudio.com/docs/editor/settings-sync)在本地实例和您创建的任何 {% data variables.product.prodname_codespaces %} 之间自动同步扩展程序、设置、主题和键盘快捷键。

## 延伸阅读

- [为组织启用 {% data variables.product.prodname_codespaces %}](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization)
- [管理组织中的 {% data variables.product.prodname_codespaces %} 帐单](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization)
- [为代码空间设置项目](/codespaces/setting-up-your-project-for-codespaces)
- [代码空间生命周期](/codespaces/developing-in-codespaces/codespaces-lifecycle)
