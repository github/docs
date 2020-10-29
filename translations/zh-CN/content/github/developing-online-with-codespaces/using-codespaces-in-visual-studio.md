---
title: 在 Visual Studio 中使用代码空间
intro: '通过与 {% data variables.product.product_name %} 上的帐户连接，您可以直接在 {% data variables.product.prodname_vs %} 的代码空间中进行开发。'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  free-pro-team: '*'
---

{% note %}

**注：**{% data variables.product.prodname_codespaces %} 目前是有限公测版，可能会有变动。 在公测期间，{% data variables.product.prodname_dotcom %} 不对 {% data variables.product.prodname_codespaces %} 的可用性做任何保证。 [注册有限公测版](https://github.com/features/codespaces/signup-vs)。 有关加入公测的更多信息，请参阅“[关于 {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/about-codespaces#joining-the-beta)”。

{% endnote %}

### 关于 {% data variables.product.prodname_vs %} 中的代码空间

您可以在 {% data variables.product.prodname_vs %} 中创建代码来开发 Windows 环境中的应用程序。 在 {% data variables.product.prodname_vs %} 中使用代码空间时，您可以浏览源代码、构建解决方案以及将更改提交到仓库。

您必须在 {% data variables.product.prodname_vs %} 中创建代码空间才能将其用于应用程序。 在 {% data variables.product.prodname_vs %} 外部创建的代码空间目前无法与 {% data variables.product.prodname_vs %} 结合使用。

### 基本要求

在 {% data variables.product.prodname_vs %} 中配置代码空间之前，您必须下载最新版本的 [{% data variables.product.prodname_vs %} 预览](https://aka.ms/vspreview)。

#### 启用 {% data variables.product.prodname_vs %} 与 {% data variables.product.prodname_github_codespaces %} 之间的连接

{% data variables.product.prodname_github_codespaces %} 与 {% data variables.product.prodname_vs %} 的连接在默认情况下未启用，因此您首先需要启用 Preview Features（预览功能）选项。

1. 在 {% data variables.product.prodname_vs %} 预览中，使用 Tools（工具）下拉菜单，然后单击 **Options（选项）**。
2. 在 **Environment（环境）**下，选择 **Preview Features（预览功能）**，然后选中**连接到 {% data variables.product.prodname_github_codespaces %}** 预览功能。 ![选中“连接到 {% data variables.product.prodname_github_codespaces %} 预览功能”](/assets/images/help/codespaces/connect-to-github-codespaces-preview-feature.png)
3. 您需要重新启动 {% data variables.product.prodname_vs %} 才能使用该功能。

### 在 {% data variables.product.prodname_vs %} 中创建代码空间

1. 启动 {% data variables.product.prodname_vs %} 时，Start （开始）窗口将在“Get started（开始使用）”下显示 **Connect to a codespace（连接到代码空间）**按钮。 ![带有“连接到代码空间”的 Visual Studio 开始窗口](/assets/images/help/codespaces/visual-studio-start-window.png)
2. 单击 **Connect to a codespace（连接到代码空间）**。
3. 单击**登录 {% data variables.product.prodname_dotcom %}** 并按提示操作，或者单击 **Create one!（创建一个！）**以创建新的 {% data variables.product.prodname_dotcom %} 帐户并登录该帐户。 ![Visual Studio 登录到 {% data variables.product.prodname_dotcom %}](/assets/images/help/codespaces/visual-studio-sign-in-to-github.png)
4. 在“Codespace details（代码空间详情）”下，键入您希望 {% data variables.product.prodname_github_codespaces %} 克隆到代码空间的仓库 URL。
5. （可选）使用 Instance type（实例类型）和 Suspend after（完成后挂起）下拉菜单配置更多代码空间详细信息。 ![Visual Studio 代码空间详情](/assets/images/help/codespaces/visual-studio-codespace-details.png)
6. 单击 **Create and Connect（创建并连接）**。 {% data variables.product.prodname_github_codespaces %} 将开始准备代码空间，并在代码空间准备就绪后打开 {% data variables.product.prodname_vs %}。 代码空间名称将出现在菜单的远程指示器中。 ![连接到 eShopOnWeb 仓库代码空间的 Visual Studio](/assets/images/help/codespaces/visual-studio-eshoponweb-codespace.png)

### 在 {% data variables.product.prodname_vs %} 中打开代码空间

1. 使用 File（文件）下拉菜单，然后单击 **Connect to a Codespace（连接到代码空间）**。 ![Visual Studio 文件连接到代码空间菜单项](/assets/images/help/codespaces/visual-studio-file-connect-to-codespace.png)
2. 在 "{% data variables.product.prodname_github_codespaces %}" 下，单击要连接到的代码空间，然后单击 **Connect（连接）**。 ![显示可用代码空间和详细信息的 Visual Studio](/assets/images/help/codespaces/visual-studio-connect-codespace.png)

### 配置 {% data variables.product.prodname_vs %} 的代码空间

通过 {% data variables.product.prodname_vs %} 创建的默认代码空间环境包括流行的框架和工具，例如 .NET Core、Microsoft SQL Server、Python 和 Windows SDK。 使用 {% data variables.product.prodname_vs %} 创建的{% data variables.product.prodname_github_codespaces %} 可通过一组 `devcontainers.json` 属性和 {% data variables.product.prodname_vs %} 随附的新工具 devinit 进行自定义。

#### devinit

[devinit](https://docs.microsoft.com/visualstudio/devinit/getting-started-with-devinit) 命令行工具允许您将额外的框架和工具安装到 Windows 开发代码空间中，以及运行 PowerShell 脚本或修改环境变量。 devinit 支持名为 [devinit.json](https://docs.microsoft.com/visualstudio/devinit/devinit-json) 的配置文件，该文件可添加到您的项目中用于创建自定义和可重复的开发环境。 有关 Windows 代码空间配置和 devinit 的更多信息，请参阅 {% data variables.product.prodname_vs %} 文档中的[自定义代码空间](https://docs.microsoft.com/visualstudio/ide/codespaces/customize-codespaces)。
