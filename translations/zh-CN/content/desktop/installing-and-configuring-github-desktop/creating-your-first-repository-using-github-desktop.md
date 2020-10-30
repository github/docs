---
title: 使用 GitHub Desktop 创建第一个仓库
shortTitle: 创建第一个仓库
intro: '您可以使用 {% data variables.product.prodname_desktop %} 来创建和管理 Git 仓库，而不是使用命令行。'
redirect_from:
  - /desktop/getting-started-with-github-desktop/creating-your-first-repository-using-github-desktop
versions:
  free-pro-team: '*'
---

### 简介
{% data variables.product.prodname_desktop %} 可扩展并简化您的 {% data variables.product.prodname_dotcom_the_website %} 工作流程，它使用可视界面，而不是在命令行上使用命令文本。 在本指南结束时，您已经使用 {% data variables.product.prodname_desktop %} 创建仓库，更改仓库，并将更改推送到 {% data variables.product.product_name %}。

安装 {% data variables.product.prodname_desktop %} 并登录 {% data variables.product.prodname_dotcom %} 或 {% data variables.product.prodname_enterprise %} 之后，您可以创建和克隆教程仓库。 本教程将介绍使用 Git 和 {% data variables.product.prodname_dotcom %} 的基础知识，包括文本编辑器、创建分支、进行提交、推送到 {% data variables.product.prodname_dotcom_the_website %}，以及打开拉取请求。 如果您在 {% data variables.product.prodname_desktop %} 上还没有任何仓库，就可以使用本教程。

我们建议完成本教程，但如果您想要通过创建新仓库来探索 {% data variables.product.prodname_desktop %}，本指南将引导您使用 {% data variables.product.prodname_desktop %} 来操作 Git 仓库。

### 第 1 部分：安装 {% data variables.product.prodname_desktop %} 和验证您的帐户
您可以在任何支持的操作系统上安装 {% data variables.product.prodname_desktop %}。 安装应用后，您需要在 {% data variables.product.prodname_dotcom %} 或 {% data variables.product.prodname_enterprise %} 上登录并验证您的帐户，然后才可创建和克隆教程仓库。

有关安装和身份验证的更多信息，请参阅“[设置 {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/setting-up-github-desktop)”。

### 第 2 部分：创建新仓库
如果没有与 {% data variables.product.prodname_desktop %} 关联的任何仓库，则会看到“让我们开始吧！”视图，您可以在其中选择创建和克隆教程仓库、从 Internet 克隆现有仓库、创建新仓库或从硬盘添加现有仓库。 ![让我们开始吧 ！ screen](/assets/images/help/desktop/lets-get-started.png)

#### 创建和克隆教程仓库
我们建议您创建并克隆教程仓库作为第一个项目以练习使用 {% data variables.product.prodname_desktop %}。

1. 单击 **Create a tutorial repository and clone it（创建教程仓库并克隆它）**。 ![“创建和克隆教程仓库”按钮](/assets/images/help/desktop/getting-started-guide/create-and-clone-a-tutorial-repository.png)
2. 按照教程中的提示安装文本编辑器、创建分支、 编辑文件、进行提交、发布到 {% data variables.product.prodname_dotcom %} 以及打开拉取请求。

#### 创建新仓库
如果你不想创建并克隆教程仓库，可以创建一个新的仓库。

1. 单击 **Create a New Repository on your Hard Drive...（在硬盘上创建新仓库...）**。 ![创建新仓库](/assets/images/help/desktop/getting-started-guide/creating-a-repository.png)
2. 填写字段并选择您的首选项。 ![创建仓库选项](/assets/images/help/desktop/getting-started-guide/create-a-new-repository-options.png)
   - “Name（名称）”定义仓库在本地以及 {% data variables.product.product_name %} 上的名称。
   - “Description（说明）”是一个可选字段，可用于提供有关仓库目的的更多信息。
   - “Local path（本地路径）”设置仓库在计算机上的位置。 默认情况下，{% data variables.product.prodname_desktop %} 会在 _Documents_ 文件夹内创建 _GitHub_ 文件夹，用于存储仓库，但您也可以选择计算机上的任何位置。 您的新仓库将是所选位置内的文件夹。 例如，如果将仓库命名为 `Tutorial`，则会在为本地路径选择的文件夹内创建一个名为 _Tutorial_ 的文件夹。 下次创建或克隆新仓库时，{% data variables.product.prodname_desktop %} 会记住您选择的位置。
   - **Initialize this repository with a README（使用自述文件初始化此仓库）**创建包含 _README.md_ 文件的初始提交。 自述文件帮助人们了解项目的目的，因此建议选择此选项并加入有用的信息。 当有人访问您在 {% data variables.product.product_name %} 上的仓库时，自述文件是他们了解您的项目时看到的第一项内容。 更多信息请参阅“[关于自述文件](/articles/about-readmes)”。
   - **Git ignore（Git 忽略）**下拉菜单可让您添加自定义文件，以忽略本地仓库中您不想存储在版本控制中的特定文件。 如有您要使用的特定语言或框架，您可以从可用的列表中选择选项。 如果刚刚开始，尽请跳过此选择。 更多信息请参阅“[忽略文件](/articles/ignoring-files)”。
   - **License（许可证）**下拉菜单可让您将开源许可证添加到仓库中的 _LICENSE_ 文件。 您无需担心要立即添加许可证。 有关可用开源许可证以及如何将它们添加到仓库的更多信息，请参阅“[许可仓库](/articles/licensing-a-repository)”。
3. 单击 **Create repository（创建仓库）**。

### 第 3 部分：探索 {% data variables.product.prodname_desktop %}
在屏幕顶部的文件菜单中，您可以访问在 {% data variables.product.prodname_desktop %} 中可以执行的设置和操作。 大多数操作也有快捷键来帮助您提高工作效率。 有关键盘快捷键的完整列表，请参阅“[键盘快捷键](/desktop/getting-started-with-github-desktop/keyboard-shortcuts)”。

#### {% data variables.product.prodname_desktop %} 菜单栏
在 {% data variables.product.prodname_desktop %} 应用程序的顶部，您将看到一个显示仓库当前状态的栏。
  - **Current repository（当前仓库）**显示您处理的仓库的名称。 您可以单击 **Current repository（当前仓库）**切换到 {% data variables.product.prodname_desktop %} 中的不同仓库。
  - **Current branch（当前分支）**显示您处理的分支的名称。 您可以单击 **Current branch（当前分支）**来查看仓库中的所有分支、切换到不同的分支或者创建新分支。 在仓库中创建拉取请求后，也可单击 **Current branch（当前分支）**查看它们。
  - **Publish repository（发布仓库）**会出现，因为您尚未将仓库发布到 {% data variables.product.product_name %}，下一个步骤才发布。 This section of the bar will change based on the status of your current branch and repository. Different context dependent actions will be available that let you exchange data between your local and remote repositories.

  ![探索 GitHub Desktop](/assets/images/help/desktop/getting-started-guide/explore-github-desktop.png)

#### Changes and History
在左侧边栏中，您会看到 **Changes（更改）**和 **History（历史记录）**视图。 ![The Changes and History tabs](/assets/images/help/desktop/changes-and-history.png)

  - **Changes（更改）**视图显示您对当前分支中的文件已经做出但尚未提交到本地仓库的更改。 At the bottom, there is a box with "Summary" and "Description" text boxes and a **Commit to BRANCH** button. 这是提交新更改的位置。 The **Commit to BRANCH** button is dynamic and will display which branch you're committing your changes to. ![提交区域](/assets/images/help/desktop/getting-started-guide/commit-area.png)

  - **History（历史记录）**视图显示仓库当前分支上以前的提交。 您应会看到在创建仓库时 {% data variables.product.prodname_desktop %} 所创建的“初始提交”。 在提交的右侧，根据您在创建仓库时选择的选项，可能会看到 _.gitattributes_、_.gitignore_、_LICENSE_ 或 _README_ 文件。 您可以单击每个文件以查看该文件的差异，也就是提交中对该文件的更改。 差异只显示文件已更改的部分，而不显示文件的全部内容。 ![历史记录视图](/assets/images/help/desktop/getting-started-guide/history-view.png)

### Part 4: Publishing your repository to {% data variables.product.product_name %}
When you create a new repository, it only exists on your computer and you are the only one who can access the repository. You can publish your repository to {% data variables.product.product_name %} to keep it synchronized across multiple computers and allow other people to access it. To publish your repository, push your local changes to {% data variables.product.product_name %}.

1. Click **Publish repository** in the menu bar. ![发布仓库](/assets/images/help/desktop/getting-started-guide/publish-repository.png)
    - {% data variables.product.prodname_desktop %} automatically fills the "Name" and "Description" fields with the information you entered when you created the repository.
    - **Keep this code private** lets you control who can view your project. If you leave this option unselected, other users on {% data variables.product.product_name %} will be able to view your code. If you select this option, your code will not be publicly available.
    - The **Organization** drop-down menu, if present, lets you publish your repository to a specific organization that you belong to on {% data variables.product.product_name %}.

    ![发布仓库步骤](/assets/images/help/desktop/getting-started-guide/publish-repository-steps.png)
  2. 单击 **Publish Repository（发布仓库）**按钮。
  3. 您可以从 {% data variables.product.prodname_desktop %} 访问 {% data variables.product.prodname_dotcom_the_website %} 上的仓库。 在文件菜单中，单击 **Repository（仓库）**，然后单击 **View on GitHub（在 GitHub 上查看）**。 这会直接在默认浏览器中打开仓库。

### Part 5: Making, committing, and pushing changes
Now that you've created and published your repository, you're ready to make changes to your project and start crafting your first commit to your repository.

1. To launch your external editor from within {% data variables.product.prodname_desktop %}, click **Repository**, then click **Open in <em>EDITOR</em>**. For more information, see "[Configuring a default editor](/desktop/getting-started-with-github-desktop/configuring-a-default-editor)." ![在编辑器中打开](/assets/images/help/desktop/getting-started-guide/open-in-editor.png)

2. Make some changes to the _README.md_ file that you previously created. You can add information that describes your project, like what it does and why it is useful. When you are satisfied with your changes, save them in your text editor.
3. In {% data variables.product.prodname_desktop %}, navigate to the **Changes** view. 在文件列表中，您应该会看到 _README.md_。 The checkmark to the left of the _README.md_ file indicates that the changes you've made to the file will be part of the commit you make. 以后您可能会更改多个文件，但只想提交对其中部分文件所做的更改。 If you click the checkmark next to a file, that file will not be included in the commit. ![查看更改](/assets/images/help/desktop/getting-started-guide/viewing-changes.png)

4. 在 **Changes（更改）**列表底部，输入提交消息。 在头像右侧，键入提交的简短描述。 由于我们在更改 _README.md_ 文件，因此“添加关于项目目的的信息”将是比较好的提交摘要。 Below the summary, you'll see a "Description" text field where you can type a longer description of the changes in the commit, which is helpful when looking back at the history of a project and understanding why changes were made. 由于您是对 _README.md_ 文件做基本的更新，因此可跳过描述。 ![Commit message](/assets/images/help/desktop/getting-started-guide/commit-message.png) <<<<<<< HEAD
5. Click **Commit to BRANCH NAME**. The commit button shows your current branch so you can be sure to commit to the branch you want.
![Commit to branch](/assets/images/help/desktop/getting-started-guide/click-commit-to-master.png)
=======
5. 单击 **Commit to master（提交至 master）**。 The commit button shows your current branch, which in this case is `master`, so that you know which branch you are making a commit to. ![提交到 master](/assets/images/help/desktop/getting-started-guide/click-commit-to-master.png)
> > > > > > > master
6. 要将更改推送到 {% data variables.product.product_name %} 上的远程仓库，请单击 **Push origin（推送源）**。 ![推送源](/assets/images/help/desktop/getting-started-guide/push-to-origin.png)
  - The **Push origin** button is the same one that you clicked to publish your repository to {% data variables.product.product_name %}. This button changes contextually based on where you are at in the Git workflow. It should now say `Push origin` with a `1` next to it, indicating that there is one commit that has not been pushed up to {% data variables.product.product_name %}.
  - The "origin" in **Push origin** means that you are pushing changes to the remote called `origin`, which in this case is your project's repository on {% data variables.product.prodname_dotcom_the_website %}. 在推送任何新提交到 {% data variables.product.product_name %} 之前，您的计算机上的项目仓库与 {% data variables.product.prodname_dotcom_the_website %} 上的项目仓库之间存在差异。 This allows you to work locally and only push your changes to {% data variables.product.prodname_dotcom_the_website %} when you're ready.
7. In the window to the right of the **Changes** view, you'll see suggestions for actions you can do next. To open the repository on {% data variables.product.product_name %} in your browser, click **View on {% data variables.product.product_name %}**. ![Available actions](/assets/images/help/desktop/available-actions.png)
8. 在浏览器中，单击 **2 commits（2 次提交）**。 您会看到 {% data variables.product.product_name %} 上此仓库中的提交列表。 The first commit should be the commit you just made in {% data variables.product.prodname_desktop %}. ![单击两个提交](/assets/images/help/desktop/getting-started-guide/click-two-commits.png)

### 结论
You've now created a repository, published the repository to {% data variables.product.product_name %}, made a commit, and pushed your changes to {% data variables.product.product_name %}. You can follow this same workflow when contributing to other projects that you create or collaborate on.

### 延伸阅读
- "[Learning about Git](/github/using-git/learning-about-git)"
- "[Learning about {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/learning-about-github)"
- "[Getting started with {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github)"
