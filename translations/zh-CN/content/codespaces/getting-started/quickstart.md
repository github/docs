---
title: '{% data variables.product.prodname_github_codespaces %} 快速入门'
shortTitle: '{% data variables.product.prodname_codespaces %} 快速入门'
intro: '在 5 分钟内尝试 {% data variables.product.prodname_github_codespaces %}。'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - Codespaces
redirect_from:
  - /codespaces/codespaces-quickstart
---

## 简介

In this guide, you'll create a codespace from a template repository and explore some of the essential features available to you within the codespace.

From this quickstart, you'll learn how to create a codespace, connect to a forwarded port to view your running application, use version control in a codespace, and personalize your setup with extensions.

有关 {% data variables.product.prodname_github_codespaces %} 如何工作的更多信息，请参阅配套指南“[深入了解 {% data variables.product.prodname_github_codespaces %}](/codespaces/getting-started/deep-dive)”。

## 创建代码空间

1. 导航到 [template repository（模板存储库）](https://github.com/github/haikus-for-codespaces) 并选择 **Use this template（使用此模板）**。

1. Choose an owner for the new repository, enter a repository name, select your preferred privacy setting, and click **Create repository from template**.

1. 导航到新创建的存储库的主页。 在存储库名称下，使用 **{% octicon "code" aria-label="The code icon" %} 代码**下拉菜单，然后在**Codespaces（代码空间）**选项卡中，单击 **Create codespace on main（在主分支上创建代码空间）**。

  ![新建代码空间按钮](/assets/images/help/codespaces/new-codespace-button.png)

## 运行应用程序

创建代码空间后，您的存储库将自动克隆到其中。 现在，您可以运行该应用程序并在浏览器中启动它。

1. When the terminal becomes available, enter the command `npm run dev`. This example uses a Node.js project, and this command runs the script labeled "dev" in the _package.json_ file, which starts up the web application defined in the sample repository.

   ![终端中的 npm run dev](/assets/images/help/codespaces/codespaces-npm-run-dev.png)

   如果按照其他应用程序类型进行操作，请为该项目输入相应的启动命令。

1. 当应用程序启动时，代码空间会识别运行应用程序的端口，并显示提示，让您知道它已被转发。

  ![端口转发信息框](/assets/images/help/codespaces/quickstart-port-toast.png)

1. 单击 **Open in Browser（在浏览器中打开）**，在新选项卡中查看正在运行的应用程序。

## 编辑应用程序并查看更改

1. Switch back to your codespace and open the _haikus.json_ file by double-clicking it in the Explorer.

1. 编辑第一个俳句的`文本`字段，以使用您自己的俳句个性化应用程序。

1. 返回到浏览器中正在运行的应用程序选项卡，然后刷新以查看所做的更改。

  {% octicon "light-bulb" aria-label="The lightbulb icon" %}  如果已关闭选项卡，请打开“Ports（端口）”面板，然后对运行的端口单击 **Open in browser（在浏览器中打开）**图标。

  ![端口转发面板](/assets/images/help/codespaces/quickstart-forward-port.png)

## 提交和推送更改

现在，您已经进行了一些更改，可以使用集成终端或源视图提交更改并将其推送回远程数据库。

{% data reusables.codespaces.source-control-display-dark %}
1. 要暂存更改，请单击已更改文件旁边的  **+**；如果您更改了多个文件并且要全部暂存，请单击 **Changes（更改）**旁边的该按钮。

   ![高亮显示暂存按钮的源控制侧边栏](/assets/images/help/codespaces/codespaces-commit-stage.png)

1. 输入提交消息，描述您所做的更改。

   ![带有提交消息的源控制侧栏](/assets/images/help/codespaces/codespaces-commit-commit-message.png)

1. 要提交暂存的更改，请单击源控制侧栏顶部的复选标记。

   ![单击复选标记图标](/assets/images/help/codespaces/codespaces-commit-checkmark-icon.png)

   您可以推送所做的更改。 这将应用这些更改到远程仓库上的上游分支。 如果您尚未准备好创建拉取请求，或者希望在 {% data variables.product.prodname_dotcom %} 上创建拉取请求，则可能需要这样做。
1. 在侧边栏的顶部，单击省略号 (**...**)。

   ![查看和更多操作的省略号按钮](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)

1. 在下拉菜单中，单击 **Push（推送）**。
1. Go back to your new repository on {% data variables.product.prodname_dotcom %} and view the _haikus.json_ file. Check that the change you made in your codespace has been successfully pushed to the repository.

## 使用扩展进行个性化设置

在代码空间中，您可以访问 {% data variables.product.prodname_vscode_marketplace %}。 在本示例中，您将安装可更改主题的扩展，但您可以安装对工作流程有用的任何扩展。

{% note %}

**Note**: If you have [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync) turned on, any changes you make to your editor setup in the current codespace, such as changing your theme or keyboard bindings, are automatically synced to any other codespaces you open and any instances of {% data variables.product.prodname_vscode %} that are signed into your {% data variables.product.prodname_dotcom %} account.

{% endnote %}

1. 在左侧栏中，单击扩展图标。

1. 在搜索栏中，输入 `fairyfloss` 并安装 fairyfloss 扩展。

   ![添加扩展](/assets/images/help/codespaces/add-extension.png)

1. Click **Install in Codespaces**.
1. 从列表中选择 `fairyfloss` 主题。

   ![选择 fairyfloss 主题](/assets/images/help/codespaces/fairyfloss.png)

## 后续步骤

您已经成功创建、个性化并在代码空间中运行了第一个应用程序，但还有很多需要探索的地方！ 以下是一些帮助您对 {% data variables.product.prodname_codespaces %} 执行后续操作的有用资源：
  - [深入探讨](/codespaces/getting-started/deep-dive)：本快速入门介绍了 {% data variables.product.prodname_codespaces %} 的一些功能。 从技术角度深入探讨这些领域。
  - [设置 {% data variables.product.prodname_codespaces %}](/codespaces/getting-started-with-codespaces) 的项目：这些指南提供了有关设置项目使用特定语言的 {% data variables.product.prodname_codespaces %} 的信息。
  - [为项目配置 {% data variables.product.prodname_codespaces %} ](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)：本指南提供有关为项目 {% data variables.product.prodname_codespaces %} 创建自定义配置的详细信息。

## 延伸阅读

- [为组织启用 {% data variables.product.prodname_codespaces %}](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization)
- [管理组织中的 {% data variables.product.prodname_codespaces %} 帐单](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization)
