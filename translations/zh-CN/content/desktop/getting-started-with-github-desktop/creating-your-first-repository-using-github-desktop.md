---
title: 使用 GitHub Desktop 创建第一个仓库
intro: '您可以使用 {% data variables.product.prodname_desktop %} 快速处理 Git 仓库，而无需使用命令行。'
versions:
  free-pro-team: '*'
---

### 简介

本指南将引导您使用 {% data variables.product.prodname_desktop %} 操作 Git 仓库。 {% data variables.product.prodname_desktop %} 可扩展并简化您的 {% data variables.product.prodname_dotcom_the_website %} 工作流程，它使用可视界面，而不是在命令行上使用命令文本。 在本指南结束时，您已经使用 {% data variables.product.prodname_desktop %} 创建仓库，更改仓库，并将更改推送到 {% data variables.product.prodname_dotcom_the_website %} 或 {% data variables.product.prodname_ghe_server %}。

下载 {% data variables.product.prodname_desktop %} 并登录 {% data variables.product.prodname_dotcom %} 或 {% data variables.product.prodname_enterprise %} 之后，您可以创建和克隆教程仓库。 本教程将介绍使用 Git 和 {% data variables.product.prodname_dotcom %} 的基础知识，包括安装编辑器、创建分支、进行提交、推送到 {% data variables.product.prodname_dotcom_the_website %}，以及创建拉取请求。 只要您在 {% data variables.product.prodname_desktop %} 上还没有任何仓库，就可以使用本教程。

### 步骤 1. 安装并登录到 {% data variables.product.prodname_desktop %}

1. 从 {% data variables.product.desktop_link %} 下载 {% data variables.product.prodname_desktop %}。 {% data variables.product.prodname_desktop %} 支持 Windows 和 macOS 的最新版本。 有关特定于操作系统的安装说明，请参阅“[安装 {% data variables.product.prodname_desktop %}](/desktop/getting-started-with-github-desktop/installing-github-desktop)”。

2. 启动 {% data variables.product.prodname_desktop %} 并遵循初始欢迎屏幕上的流程登录到 {% data variables.product.product_name %} 帐户。 您将会看到“Configure Git（配置 Git）”步骤，用于设置名称和电子邮件地址。 为确保提交正确归因于您的 {% data variables.product.product_name %} 帐户，请使用与 {% data variables.product.product_name %} 帐户关联的电子邮件地址。 有关提交归属的更多信息，请参阅“[设置提交电子邮件地址](/articles/setting-your-commit-email-address)”。

### 步骤 2. 创建新仓库

您会看到“Let's get started!（开始使用吧！）”视图，从中可以选择创建和克隆教程仓库、克隆现有仓库、新建仓库或添加现有仓库。

#### 创建和克隆教程仓库

1. 单击 **Create a tutorial repository and clone it（创建教程仓库并克隆它）**。 ![“创建和克隆教程仓库”按钮](/assets/images/help/desktop/getting-started-guide/create-and-clone-a-tutorial-repository.png)
2. 按照教程中的提示进行操作。

#### 创建新仓库

1. 单击 **Create a New Repository on your Hard Drive...（在硬盘上创建新仓库...）**。 ![创建新仓库](/assets/images/help/desktop/getting-started-guide/creating-a-repository.png)
2. 要创建新仓库，请填写以下字段： ![创建仓库选项](/assets/images/help/desktop/getting-started-guide/create-a-new-repository-options.png)
   - “Name（名称）”定义仓库在本地以及 {% data variables.product.product_name %} 上的名称。
   - “Description（说明）”是一个可选字段，可用于提供有关仓库目的的更多信息。
   - “Local path（本地路径）”设置仓库在计算机上的位置。 默认情况下，{% data variables.product.prodname_desktop %} 会在 _Documents_ 文件夹内创建 _GitHub_ 文件夹，用于存储仓库，但您也可以选择计算机上的任何位置。 您的新仓库将是所选位置内的文件夹。 例如，如果将仓库命名为 `Tutorial`，则会在为本地路径选择的文件夹内创建一个名为 _Tutorial_ 的文件夹。 下次创建或克隆新仓库时，{% data variables.product.prodname_desktop %} 会记住您选择的位置。
   - **Initialize this repository with a README（使用自述文件初始化此仓库）**创建包含 _README.md_ 文件的初始提交。 自述文件帮助人们了解项目的目的，因此建议选择此选项并加入有用的信息。 当有人访问您在 {% data variables.product.product_name %} 上的仓库时，自述文件是他们了解您的项目时看到的第一项内容。 更多信息请参阅“[关于自述文件](/articles/about-readmes)”。
   - **Git ignore（Git 忽略）**下拉菜单可让您添加自定义文件，以忽略本地仓库中您不想存储在版本控制中的特定文件。 如有您要使用的特定语言或框架，您可以从可用的列表中选择选项。 如果刚刚开始，尽请跳过此选择。 更多信息请参阅“[忽略文件](/articles/ignoring-files)”。
   - **License（许可证）**下拉菜单可让您将开源许可证添加到仓库中的 _LICENSE_ 文件。 您无需担心要立即添加许可证。 有关可用开源许可证以及如何将它们添加到仓库的更多信息，请参阅“[许可仓库](/articles/licensing-a-repository)”。
3. 单击 **Create repository（创建仓库）**。

### 步骤 3. 探索 {% data variables.product.prodname_desktop %}

现在您已选择仓库，将会在屏幕顶部看到文件菜单。 在这里可以访问设置以及能在 {% data variables.product.prodname_desktop %} 中执行的操作。 大多数操作也有快捷键来帮助您提高工作效率。 有关键盘快捷键的完整列表，请参阅“[键盘快捷键](/desktop/getting-started-with-github-desktop/keyboard-shortcuts)”。

1. 菜单下方的栏显示 {% data variables.product.prodname_desktop %} 中仓库的当前状态：
    - **Current repository（当前仓库）**显示您处理的仓库的名称。 您可以单击 **Current repository（当前仓库）**切换到 {% data variables.product.prodname_desktop %} 中的不同仓库。
    - **Current branch（当前分支）**显示您处理的分支的名称。 您可以单击 **Current branch（当前分支）**来查看仓库中的所有分支、切换到不同的分支或者创建新分支。 在仓库中创建拉取请求后，也可单击 **Current branch（当前分支）**查看它们。
    - **Publish repository（发布仓库）**会出现，因为您尚未将仓库发布到 {% data variables.product.product_name %}，下一个步骤才发布。

  ![探索 GitHub Desktop](/assets/images/help/desktop/getting-started-guide/explore-github-desktop.png)

2. 在左侧边栏中，您会看到 **Changes（更改）**和 **History（历史记录）**视图。

    - **Changes（更改）**视图显示您对当前分支中的文件已经做出但尚未提交到本地仓库的更改。 在底部，您还会看到“Summary（摘要）”框和“Description（说明）”文本框，以及 **Commit to master（提交到 master）**按钮。 这是提交新更改的位置。 **Commit（提交）**按钮指示您要将更改提交到哪个分支。 ![提交区域](/assets/images/help/desktop/getting-started-guide/commit-area.png)

    - **History（历史记录）**视图显示仓库当前分支上以前的提交。 您应会看到在创建仓库时 {% data variables.product.prodname_desktop %} 所创建的“初始提交”。 在提交的右侧，根据您在创建仓库时选择的选项，可能会看到 _.gitattributes_、_.gitignore_、_LICENSE_ 或 _README_ 文件。 您可以单击每个文件以查看该文件的差异，也就是提交中对该文件的更改。 差异只显示文件已更改的部分，而不显示文件的全部内容。 ![历史记录视图](/assets/images/help/desktop/getting-started-guide/history-view.png)

### 步骤 4. 将仓库推送到 {% data variables.product.product_name %}

目前，您的仓库只存在于您的计算机中，您是唯一能访问该仓库的人。 将仓库发布到 {% data variables.product.product_name %} 可使其在多个处理同一项目的计算机和团队成员之间保持同步。 要发布仓库，需先将其推送到 {% data variables.product.product_name %}，这样它也会出现在 {% data variables.product.prodname_dotcom_the_website %} 上。

1. 单击 **Publish repository（发布仓库）**。 ![发布仓库](/assets/images/help/desktop/getting-started-guide/publish-repository.png)
   - 您会看到几个熟悉的字段。 “Name（名称）”和“Description（说明）”与您创建仓库时完成的字段匹配。
   - 您会看到选项 **Keep this code private（保留此代码为私有）**。 如果不想与 {% data variables.product.product_name %} 的其他用户公开分享您的代码，请选择此选项。
   - **Organization（组织）**下拉菜单，如果有，可让您将仓库发布到 {% data variables.product.product_name %} 上您所属的特定组织。 如果您还不是组织的成员，没关系！ ![发布仓库步骤](/assets/images/help/desktop/getting-started-guide/publish-repository-steps.png)
2. 单击 **Publish repository（发布仓库）**。
3. 您可以从 {% data variables.product.prodname_desktop %} 访问 {% data variables.product.prodname_dotcom_the_website %} 上的仓库。 在文件菜单中，单击 **Repository（仓库）**，然后单击 **View on GitHub（在 GitHub 上查看）**。 这会直接在默认浏览器中打开仓库。

现在您的仓库已发布，我们回到 {% data variables.product.prodname_desktop %} 对本地仓库做其他更改。 首先，我们要设置默认文本编辑器。

### 步骤 5. 设置文本编辑器

为减少设置开发环境的时间，您可以直接从 {% data variables.product.prodname_desktop %} 启动多个文本编辑器和集成的开发环境 (IDE)。 从 {% data variables.product.prodname_desktop %} 中的仓库可以在常用文本编辑器中无缝打开项目文件夹。

1. 依次单击 **File（文件）**、**Options（选项）**和 **Advanced（高级）**。
2. 使用 **External editor（外部编辑器）**下拉菜单并从列表中选择编辑器。 您应该会在列表中看到所有已安装的编辑器。 如果没有看到任何编辑器，请安装支持的编辑器，如 [Atom](https://atom.io)。 有关支持的编辑器列表，请参阅 {% data variables.product.prodname_desktop %} 仓库中的[“打开外部编辑器”集成](https://github.com/desktop/desktop/blob/development/docs/technical/editor-integration.md#windows)。 ![外部编辑器](/assets/images/help/desktop/mac-editor-menu.png)
3. 如果安装了新编辑器，请重新启动 {% data variables.product.prodname_desktop %} 以使该编辑器在 **External editor（外部编辑器）**下拉菜单中可用。

### 步骤 6. 进行、提交和推送更改

现在您已配置默认编辑器，可以更改项目并开始构建您自己对仓库的第一个提交。

1. 要从 {% data variables.product.prodname_desktop %} 启动外部编辑器，请单击 **Repository（仓库）**，然后单击 **Open in <em>EDITOR</em>（在 [编辑器] 中打开）**。 ![在编辑器中打开](/assets/images/help/desktop/getting-started-guide/open-in-editor.png)

2. 首先对以前创建的 _README.md_ 文件做一些更改。 添加描述项目的信息，比如它做什么，以及为什么有用。 请记住，这是人们与您的项目的第一次互动。 现在您可以进行第一次提交！
3. 从文本编辑器切换回 {% data variables.product.prodname_desktop %}，并找到 **Changes（更改）**选项卡。 在文件列表中，您应该会看到 _README.md_。 _README.md_ 文件旁边的勾选标记表示您对文件的更改将成为提交的一部分。 以后您可能会更改多个文件，但只想提交对其中部分文件所做的更改。 {% data variables.product.prodname_desktop %} 可让您选择要提交的特定更改。 ![查看更改](/assets/images/help/desktop/getting-started-guide/viewing-changes.png)

4. 在 **Changes（更改）**列表底部，输入提交消息。 在头像右侧，键入提交的简短描述。 由于我们在更改 _README.md_ 文件，因此“添加关于项目目的的信息”将是比较好的提交摘要。 在摘要下方，您会看到“Description（说明）”文本字段，在其中可以键入较长的提交更改描述，这有助于回顾项目的历史记录和了解更改的原因。 由于您是对 _README.md_ 文件做基本的更新，因此可跳过描述。 ![提交消息](/assets/images/help/desktop/getting-started-guide/commit-message.png)
5. 单击 **Commit to master（提交至 master）**。 提交按钮显示当前分支，本例中是 `master`，因此您可以确保提交到所需的分支。 ![提交到 master](/assets/images/help/desktop/getting-started-guide/click-commit-to-master.png)
6. 要将更改推送到 {% data variables.product.product_name %} 上的远程仓库，请单击 **Push origin（推送源）**。 ![推送源](/assets/images/help/desktop/getting-started-guide/push-to-origin.png)
   - 还记得用于将仓库发布到 {% data variables.product.product_name %} 的 **Publish（发布）**按钮吗？ 现在改为 `Push origin（推送源）`了，其旁边的 `1` 表示有一个提交尚未推送到 {% data variables.product.product_name %}。
   - **Push origin（推送源）**中的“源”表示我们将更改推送到名为 `origin` 的远程，在本例中是 {% data variables.product.prodname_dotcom_the_website %} 上的项目仓库。 在推送任何新提交到 {% data variables.product.product_name %} 之前，您的计算机上的项目仓库与 {% data variables.product.prodname_dotcom_the_website %} 上的项目仓库之间存在差异。 这可让您在本地工作，并且仅在准备好后才将工作推送到 {% data variables.product.prodname_dotcom_the_website %}。
7. 在 **Changes（更改）**选项卡旁边打开的区域中，您会看到接下来可以执行的操作提示。 要在浏览器中打开 {% data variables.product.product_name %} 上的仓库，请单击 **View on GitHub（在 GitHub 中查看）**。 ![在 GitHub 上查看](/assets/images/help/desktop/getting-started-guide/view-on-github.png)
8. 在浏览器中，单击 **2 commits（2 次提交）**。 您会看到 {% data variables.product.product_name %} 上此仓库中的提交列表。 第一个提交应是您刚才在 {% data variables.product.prodname_desktop %} 中的提交！ ![单击两个提交](/assets/images/help/desktop/getting-started-guide/click-two-commits.png)

### 结论

恭喜！ 您现已创建一个仓库，并且已将仓库发布到 {% data variables.product.product_name %}，进行了提交，并且发布了更改。 我们只粗略介绍您通过 {% data variables.product.product_name %} 和 {% data variables.product.prodname_desktop %} 可以执行的操作。 希望此练习能激发您进一步探索的兴趣！
