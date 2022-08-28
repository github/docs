---
title: Codespaces 快速入门
intro: '在 5 分钟或更短的时间内尝试 {% data variables.product.prodname_codespaces %}。'
allowTitleToDifferFromFilename: true
versions:
  free-pro-team: '*'
type: quick_start
topics:
  - Codespaces
redirect_from:
  - /codespaces/codespaces-quickstart
---

{% data reusables.codespaces.release-stage %}

### 简介

在本指南中， 您将从[样本仓库](https://github.com/2percentsilk/haikus-for-codespaces)创建一个代码空间，并探索代码空间中您可以使用的一些基本功能。

以下示例显示如何创建代码空间、连接到转发端口以查看您的运行应用程序，以及如何通过额外的扩展和 dotfile 个性化您的设置。

### 创建代码空间

1. 导航到[样本仓库](https://github.com/2percentsilk/haikus-for-codespaces)的主页。

2. 在仓库名称下，使用 {% octicon "download" aria-label="The download icon" %} **Code（代码）**下拉菜单选择 **Open with Codespaces（使用 Codespaces 打开）**。

  ![使用 Codespaces 打开按钮](/assets/images/help/codespaces/open-with-codespaces-button.png)

3. 要创建代码空间，请单击 {% octicon "plus" aria-label="The plus icon" %} **New codespace（新建代码空间）**。

  ![新建代码空间按钮](/assets/images/help/codespaces/new-codespace-button.png)

### 运行应用程序

在代码空间中打开项目后，您现在可以运行应用程序并在浏览器中启动它。

1. 通过在终端中输入 `npm run dev` 来启动应用程序。 此命令执行 package.json 文件中的 `dev` 脚本，并启动样本仓库中定义的 web 应用程序。

   ![终端中的 npm run dev](/assets/images/help/codespaces/codespaces-npm-run-dev.png)

2. 项目启动时，您应该在右下角看到一个信息框，提示您连接到项目使用的端口。

  ![端口转发信息框](/assets/images/help/codespaces/quickstart-port-toast.png)

3. 单击 **Open in Browser（在浏览器中打开）**，在新选项卡中查看正在运行的应用程序。

### 使用主题扩展进行个性化

在代码空间内，您可以访问 Visual Studio Code Marketplace。 在本示例中，您将安装可更改主题的扩展，但您可以安装对工作流程有用的任何扩展。

1. 在左侧栏中，单击扩展图标。

2.  在搜索栏中，输入 `fairyfloss` 并安装 fairyfloss 扩展。

  ![添加扩展](/assets/images/help/codespaces/add-extension.png)

3. 从列表中选择 `fairyfloss` 主题。

  ![选择 fairyfloss 主题](/assets/images/help/codespaces/fairyfloss.png)

4. 您在当前代码空间中对编辑器设置（如主题和键盘绑定）的更改通过 [Settings Sync（设置同步）](https://code.visualstudio.com/docs/editor/settings-sync)自动同步到其他代码空间。

### 使用 dotfile 个性化

如果您在 GitHub 上的用户帐户拥有名为 dotfiles 的公共仓库，GitHub 会在代码空间创建过程中自动使用此仓库来个性化您的代码空间环境。

此示例引导您为代码空间创建 dotfile 仓库。

1. 导航到样本 [dotfiles 仓库](https://github.com/aw-test-93/dotfiles/)。

2. 将仓库复刻到您的帐户，并确保它是公开的。

   验证在您的帐户下创建的仓库是否名为 dotfiles，例如 `yourname/dotfiles`。 任何其他名称将导致 {% data variables.product.prodname_codespaces %} 忽略个性化仓库。

3. 从[样本应用程序仓库](https://github.com/2percentsilk/haikus-for-codespaces)创建新的代码空间，因为 dotfile 更新仅在创建时应用。 样本 dotfiles 将命令提示符更改为粗体紫色和蓝色文本。

  ![自定义命令提示符](/assets/images/help/codespaces/custom-prompt.png)

### 后续步骤

您已经成功创建、个性化并在代码空间中运行了第一个应用程序，但还有很多需要探索的地方！ 以下是一些帮助您对 {% data variables.product.prodname_codespaces %} 执行后续操作的有用资源：
  - 使用带有特定语言的 {% data variables.product.prodname_codespaces %} 的“[入门指南](/codespaces/getting-started-with-codespaces)”
  - [创建自定义配置](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)以配置项目的 {% data variables.product.prodname_codespaces %}。
