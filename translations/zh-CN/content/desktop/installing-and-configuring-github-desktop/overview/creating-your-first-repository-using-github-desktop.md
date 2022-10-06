---
title: 使用 GitHub Desktop 创建第一个仓库
shortTitle: Creating your first repository
intro: '您可以使用 {% data variables.product.prodname_desktop %} 来创建和管理 Git 仓库，而不是使用命令行。'
redirect_from:
  - /desktop/getting-started-with-github-desktop/creating-your-first-repository-using-github-desktop
  - /desktop/installing-and-configuring-github-desktop/creating-your-first-repository-using-github-desktop
versions:
  fpt: '*'
ms.openlocfilehash: bdfaa5770faef23d8176b24753e23d6a3d5159a1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145099224'
---
## 简介
{% data variables.product.prodname_desktop %} 可扩展并简化您的 {% data variables.product.prodname_dotcom_the_website %} 工作流程，它使用可视界面，而不是在命令行上使用命令文本。 在本指南结束时，您已经使用 {% data variables.product.prodname_desktop %} 创建仓库，更改仓库，并将更改推送到 {% data variables.product.product_name %}。

安装 {% data variables.product.prodname_desktop %} 并登录 {% data variables.product.prodname_dotcom %} 或 {% data variables.product.prodname_enterprise %} 之后，您可以创建和克隆教程仓库。 本教程将介绍使用 Git 和 {% data variables.product.prodname_dotcom %} 的基础知识，包括文本编辑器、创建分支、进行提交、推送到 {% data variables.product.prodname_dotcom_the_website %}，以及打开拉取请求。 如果您在 {% data variables.product.prodname_desktop %} 上还没有任何仓库，就可以使用本教程。

我们建议完成本教程，但如果您想要通过创建新仓库来探索 {% data variables.product.prodname_desktop %}，本指南将引导您使用 {% data variables.product.prodname_desktop %} 来操作 Git 仓库。

## 第 1 部分：安装 {% data variables.product.prodname_desktop %} 和验证您的帐户
您可以在任何支持的操作系统上安装 {% data variables.product.prodname_desktop %}。 安装应用后，您需要在 {% data variables.product.prodname_dotcom %} 或 {% data variables.product.prodname_enterprise %} 上登录并验证您的帐户，然后才可创建和克隆教程仓库。

有关安装和进行身份验证的详细信息，请参阅“[设置 {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/setting-up-github-desktop)”。

## 第 2 部分：创建新仓库
如果没有与 {% data variables.product.prodname_desktop %} 关联的任何数据存储库，你会看到“让我们开始吧！” 视图，从中可以选择创建和克隆教程存储库、从 Internet 克隆现有存储库、新建存储库或从硬盘驱动器添加现有存储库。
  ![“让我们开始吧！” 屏幕](/assets/images/help/desktop/lets-get-started.png)

### 创建和克隆教程仓库
我们建议您创建并克隆教程仓库作为第一个项目以练习使用 {% data variables.product.prodname_desktop %}。

1. 单击“创建教程存储库并克隆”。
  ![“创建教程存储库并克隆”按钮](/assets/images/help/desktop/getting-started-guide/create-and-clone-a-tutorial-repository.png)
2. 按照教程中的提示安装文本编辑器、创建分支、 编辑文件、进行提交、发布到 {% data variables.product.prodname_dotcom %} 以及打开拉取请求。

### 创建新仓库
如果你不想创建并克隆教程仓库，可以创建一个新的仓库。

1. 单击“在硬盘驱动器上创建新存储库...”。![创建新存储库](/assets/images/help/desktop/getting-started-guide/creating-a-repository.png)
2. 填写字段并选择您的首选项。
  ![创建存储库选项](/assets/images/help/desktop/getting-started-guide/create-a-new-repository-options.png)
   - “Name（名称）”定义仓库在本地以及 {% data variables.product.product_name %} 上的名称。
   - “Description（说明）”是一个可选字段，可用于提供有关仓库目的的更多信息。
   - “Local path（本地路径）”设置仓库在计算机上的位置。 默认情况下，{% data variables.product.prodname_desktop %} 在 Documents 文件夹内创建 GitHub 文件夹，用于存储存储库，但也可以选择计算机上的任何位置。  您的新仓库将是所选位置内的文件夹。 例如，如果将存储库命名为 `Tutorial`，则会在为本地路径选择的文件夹内创建一个名为 Tutorial 的文件夹。 下次创建或克隆新仓库时，{% data variables.product.prodname_desktop %} 会记住您选择的位置。
   - “使用 README 初始化此存储库”创建包含 README.md 文件的初始提交。 自述文件帮助人们了解项目的目的，因此建议选择此选项并加入有用的信息。 当有人访问您在 {% data variables.product.product_name %} 上的仓库时，自述文件是他们了解您的项目时看到的第一项内容。 有关详细信息，请参阅“[关于 README](/articles/about-readmes)”。
   - “Git 忽略”下拉菜单可让你添加自定义文件，以忽略本地存储库中你不想存储在版本控制中的特定文件。 如有您要使用的特定语言或框架，您可以从可用的列表中选择选项。 如果刚刚开始，尽请跳过此选择。 有关详细信息，请参阅“[忽略文件](/github/getting-started-with-github/ignoring-files)”。
   - “许可证”下拉菜单可让你将开源许可证添加到存储库中的 LICENSE 文件。 您无需担心要立即添加许可证。 有关可用开源许可证以及如何将它们添加到存储库的详细信息，请参阅“[许可存储库](/articles/licensing-a-repository)”。
3. 单击“创建存储库”。

## 第 3 部分：探索 {% data variables.product.prodname_desktop %}
在屏幕顶部的文件菜单中，您可以访问在 {% data variables.product.prodname_desktop %} 中可以执行的设置和操作。 大多数操作也有快捷键来帮助您提高工作效率。 有关键盘快捷方式的完整列表，请参阅“[键盘快捷方式](/desktop/getting-started-with-github-desktop/keyboard-shortcuts)”。

### {% data variables.product.prodname_desktop %} 菜单栏
在 {% data variables.product.prodname_desktop %} 应用程序的顶部，您将看到一个显示仓库当前状态的栏。
  - “当前存储库”显示你处理的存储库的名称。 可以单击“当前存储库”切换到 {% data variables.product.prodname_desktop %} 中的不同存储库。
  - “当前分支”显示你处理的分支的名称。 可以单击“当前分支”来查看存储库中的所有分支、切换到不同的分支或者创建新分支。 在存储库中创建拉取请求后，也可单击“当前分支”查看它们。
  - “发布存储库”会出现，因为你尚未将存储库发布到 {% data variables.product.product_name %}，下一个步骤才发布。 工具栏的这部分将根据您当前分支和仓库的状态而改变。 不同的上下文相关操作将可以使用，允许您在本地仓库与远程仓库之间交换数据。

  ![探索 GitHub Desktop](/assets/images/help/desktop/getting-started-guide/explore-github-desktop.png)

### 更改历史记录
在左侧栏中，你将找到“更改”和“历史记录”视图。
  ![“更改”和“历史记录”选项卡](/assets/images/help/desktop/changes-and-history.png)

  - “更改”视图显示你对当前分支中的文件已经做出但尚未提交到本地存储库的更改。 在底部有“摘要”和“说明”文本框，以及“提交到分支”按钮。 这是提交新更改的位置。 “提交到分支”按钮是动态的，将显示你提交更改到哪个分支。
  ![提交区域](/assets/images/help/desktop/getting-started-guide/commit-area.png)

  - “历史记录”视图显示存储库当前分支上以前的提交。 您应会看到在创建仓库时 {% data variables.product.prodname_desktop %} 所创建的“初始提交”。 在提交的右侧，根据你在创建存储库时选择的选项，可能会看到 .gitattributes、.gitignore、LICENSE 或 README 文件。 您可以单击每个文件以查看该文件的差异，也就是提交中对该文件的更改。 差异只显示文件已更改的部分，而不显示文件的全部内容。
  ![“历史记录”视图](/assets/images/help/desktop/getting-started-guide/history-view.png)

## 第 4 部分：将仓库推送到 {% data variables.product.product_name %}
创建新仓库时，它仅存在于您的计算机上，您是唯一可以访问该仓库的人。 您可以将仓库发布到 {% data variables.product.product_name %} 以在多台计算机上保持同步，并允许其他人访问它。 要发布仓库，请将本地更改推送到 {% data variables.product.product_name %}。

1. 单击菜单栏中的“发布存储库”。
    ![发布仓库](/assets/images/help/desktop/getting-started-guide/publish-repository.png)
    - {% data variables.product.prodname_desktop %} 自动使用创建仓库时输入的信息填充“Name（名称）”和“Description（说明）”字段。
    - “保持此代码为私有”可让你控制谁可以查看你的项目。 如果您不选中此选项，{% data variables.product.product_name %} 上的其他用户将能够查看您的代码。 如果选中此选项，您的代码将不会公开。
    - “组织”下拉菜单（如果有）可让你将存储库发布到 {% data variables.product.product_name %} 上你所属的特定组织。

    ![发布仓库步骤](/assets/images/help/desktop/getting-started-guide/publish-repository-steps.png)
  2. 单击“发布存储库”按钮。
  3. 您可以从 {% data variables.product.prodname_desktop %} 访问 {% data variables.product.prodname_dotcom_the_website %} 上的仓库。 在文件菜单中，单击“存储库”，然后单击“在 GitHub 上查看”。 这会直接在默认浏览器中打开仓库。

## 第 5 部分：进行更改、提交更改和推送更改
现在，您已经创建并发布仓库，已经准备好对项目进行更改，并开始创建第一个对仓库的提交。

1. 若要从 {% data variables.product.prodname_desktop %} 中启动外部编辑器，请单击“存储库”，然后单击“在编辑器中打开”  。 有关详细信息，请参阅“[配置默认编辑器](/desktop/getting-started-with-github-desktop/configuring-a-default-editor)”。
  ![在编辑器中打开](/assets/images/help/desktop/getting-started-guide/open-in-editor.png)

2. 对以前创建的 README.md 文件做一些更改。 您可以添加描述项目的信息，比如它做什么，以及为什么有用。 当您对更改满意时，请将它们保存在文本编辑器中。
3. 在 {% data variables.product.prodname_desktop %} 中，导航到“更改”视图。 在文件列表中，你应该会看到 README.md。 README.md 文件左侧的勾选标记表示你对文件的更改将成为提交的一部分。 以后您可能会更改多个文件，但只想提交对其中部分文件所做的更改。 如果单击文件旁边的复选标记，则该文件不会包含在提交中。
  ![查看更改](/assets/images/help/desktop/getting-started-guide/viewing-changes.png)

4. 在“更改”列表底部，输入提交消息。 在头像右侧，键入提交的简短描述。 由于我们在更改 README.md 文件，因此“添加关于项目目的的信息”将是比较好的提交摘要。 在摘要下方，您会看到“Description（说明）”文本字段，在其中可以键入较长的提交更改描述，这有助于回顾项目的历史记录和了解更改的原因。 由于你是对 README.md 文件做基本的更新，因此可跳过描述。
  ![提交消息](/assets/images/help/desktop/getting-started-guide/commit-message.png)
5. 单击“提交到分支名称”。 提交按钮显示当前分支，因此您可以确保提交到所需的分支。
  ![提交到分支](/assets/images/help/desktop/getting-started-guide/click-commit-to-master.png)
6. 若要将更改推送到 {% data variables.product.product_name %} 上的远程存储库，请单击“推送源”。
  ![推送源](/assets/images/help/desktop/getting-started-guide/push-to-origin.png)
  - “推送源”按钮就是你单击以发布存储库到 {% data variables.product.product_name %} 的按钮。 此按钮根据 Git 工作流程中的上下文而变。 现在改为 `Push origin` 了，其旁边的 `1` 表示有一个提交尚未推送到 {% data variables.product.product_name %}。
  - “Push origin”中的“origin”表示我们将更改推送到名为 `origin` 的远程库，在本例中是 {% data variables.product.prodname_dotcom_the_website %} 上的项目存储库。 在推送任何新提交到 {% data variables.product.product_name %} 之前，您的计算机上的项目仓库与 {% data variables.product.prodname_dotcom_the_website %} 上的项目仓库之间存在差异。 这可让您在本地工作，并且仅在准备好后才将更改推送到 {% data variables.product.prodname_dotcom_the_website %}。
7. 在“更改”视图右侧的窗口中，你会看到接下来可以执行的操作提示。 若要在浏览器中打开 {% data variables.product.product_name %} 上的存储库，请单击“在 {% data variables.product.product_name %} 上查看”。
  ![可用操作](/assets/images/help/desktop/available-actions.png)
8. 在浏览器中，单击“2 个提交”。 您会看到 {% data variables.product.product_name %} 上此仓库中的提交列表。 第一个提交应是您刚才在 {% data variables.product.prodname_desktop %} 中的提交。
  ![单击两个提交](/assets/images/help/desktop/getting-started-guide/click-two-commits.png)

## 结束语
您现已创建一个仓库，并且已将仓库发布到 {% data variables.product.product_name %}，进行了提交，并且已将更改推送到 {% data variables.product.product_name %}。 在参与创建或协作的其他项目时，可以遵循这个相同的工作流程。

## 延伸阅读
- “[开始使用 Git](/github/getting-started-with-github/getting-started-with-git)”
- “[了解 {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/learning-about-github)”
- “[{% data variables.product.prodname_dotcom %} 入门](/github/getting-started-with-github)”
