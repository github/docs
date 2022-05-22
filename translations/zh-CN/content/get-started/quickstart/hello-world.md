---
title: Hello World
intro: '按照此 Hello World 练习开始使用 {% data variables.product.product_name %}。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Pull requests
  - Fundamentals
miniTocMaxHeadingLevel: 3
---

## 简介

{% data variables.product.product_name %} 是一个用于版本控制和协作的代码托管平台。 它允许您和其他人随时随地协同处理项目。

本教程培训 {% data variables.product.product_name %} 的基本知识，如存储库、分支、提交和拉取请求等。 您将创建自己的 Hello World 存储库，并了解 {% data variables.product.product_name %} 的拉取请求工作流，这是创建和查看代码的常用方法。

在本快速入门指南中，您将：

* 创建和使用存储库
* 启动和管理新分支
* 对文件进行更改并将其作为提交推送到 {% data variables.product.product_name %}
* 打开与合并拉取请求

要完成本教程，您需要 [{% data variables.product.product_name %} 帐户](http://github.com)和连接互联网。 您不需要知道如何编码、使用命令行或安装 Git（构建 {% data variables.product.product_name %} 的版本控制软件）。 如果您对本指南中使用的任何表达方式有疑问，请转到[词汇表](/get-started/quickstart/github-glossary)了解术语的更多信息。

## 创建仓库

存储库通常用于组织单个项目。 存储库可以包含文件夹和文件、图像、视频、电子表格和数据集 - 项目所需的任何内容。 通常，存储库包括一个 _README_ 文件，其中含项目的相关信息。 _README_ 文件以纯文本 Markdown 语言编写。 您可以使用此[备忘单](https://www.markdownguide.org/cheat-sheet/)开始使用 Markdown 语法。 {% data variables.product.product_name %} 允许您在创建新存储库的同时添加 _README_ 文件。 {% data variables.product.product_name %} 还提供了其他常用选项，例如许可证文件，但您现在不必选择其中任何一个。

您的 `hello-world` 存储库可以是您存储想法、资源甚至与他人共享和讨论的地方。

{% data reusables.repositories.create_new %}
1. 在 **Repository name（存储库名称）**框中，输入 `hello-world`。
2. 在 **Description（说明）**框中，编写简短说明。
3. 选择 **Add a README file（添加 README 文件）**。
4. 选择您的存储库是**公有**还是**私有**。
5. 单击 **Create repository（创建仓库）**。

   ![创建 hello world 存储库](/assets/images/help/repository/hello-world-repo.png)

## 创建分支

通过分支，您可以同时拥有不同版本的存储库。

默认情况下，存储库有一个名为 `main` 的分支，被视为最终分支。 您可以在存储库中创建 `main` 以外的其他分支。 您可以使用分支一次拥有项目的不同版本。 当您想要在不更改主要代码源的情况下向项目添加新功能时，这非常有用。 在合并主分支之前，在不同分支上完成的工作不会显示在主分支上，我们将在本指南的后面部分介绍。 您可以使用分支进行试验和编辑，然后再将其提交到 `main`。

当您创建 `main` 分支以外的分支时，创建的是 `main` 在当时的副本或快照。 如果其他人在您处理分支时对 `main` 分支进行了更改，您可以拉入这些更新。

此图显示：

* `main` 分支
* 一个名为 `feature` 的新分支
* `feature` 在合并到 `main` 之前的历程

![分支图](/assets/images/help/repository/branching.png)

您是否曾经保存过文件的不同版本？ 像这样：

* `story.txt`
* `story-edit.txt`
* `story-edit-reviewed.txt`

分支在 {% data variables.product.product_name %} 存储库中实现了类似的目标。

在 {% data variables.product.product_name %}，我们的开发人员、编写者和设计师使用分支将错误修复和功能工作与我们的 `main`（生产）分支分开。 当更改准备就绪时，他们会将其分支合并到 `main`。

### 创建分支

1. 单击 `hello-world` 存储库的 **Code（代码）**选项卡。
2. 单击其中显示 **main** 的文件列表顶部的下拉列表。 ![分支菜单](/assets/images/help/branch/branch-selection-dropdown.png)
4. 在文本框中键入分支名称 `readme-edits`。
5. 单击 **Create branch: readme-edits from main（创建分支：从 main 创建 readme-edits）**。

![分支菜单](/assets/images/help/repository/new-branch.png)

此时您有两个分支：`main` 和 `readme-edits`。 现在，它们看起来完全相同。 接下来，您将向新分支添加更改。

## 创建和提交更改

在上一步中创建新分支时， {% data variables.product.product_name %} 会将您带到作为 `main` 副本的新 `readme-edits` 分支的代码页。

您可以对存储库中的文件进行更改并保存更改。 在 {% data variables.product.product_name %} 上，保存的更改称为提交。 每个提交都有一个关联的提交消息，该消息是解释为什么进行特定更改的说明。 提交消息会捕获您更改的历史记录，以便其他参与者可以了解您执行了哪些操作及其原因。

1. 在您创建的 `readme-edits` 分支下，单击 _README.md_ 文件。
2. 单击 {% octicon "pencil" aria-label="The edit icon" %} 编辑文件。
3. 在编辑器中，编写一些关于您自己的内容。 尝试使用不同的 Markdown 元素。
4. 在 **Commit changes（提交更改）** 框中，编写描述更改的提交消息。
5. 单击 **Commit changes（提交更改）**。

   ![提交示例](/assets/images/help/repository/first-commit.png)

这些更改将仅适用于 `readme-edits` 分支上的 README 文件，所以这个分支现在包含不同于 `main` 的内容。

## 打开拉取请求

现在，您在 `main` 以外的分支中进行了更改，可以打开拉取请求。

拉取请求是 {% data variables.product.product_name %} 上协作的核心。 打开拉取请求后，可以提出更改，要求某人审查和提取您的贡献并将其合并到其分支中。 拉取请求显示两个分支中内容的差异。 变化、增减以不同的颜色显示。

只要进行提交，便可打开拉取请求并开始讨论，即使在代码完成之前亦可。

通过在拉取请求消息中使用 {% data variables.product.product_name %} 的 `@提及`功能，您可以向特定人员或团队请求反馈，无论他们近在大厅还是远在 10 个时区之外。

您甚至可以在自己的存储库中打开拉取请求并自行合并。 这是在处理大型项目之前了解 {% data variables.product.product_name %} 流程的好方法。

1. 单击 `hello-world` 存储库的 **Pull requests（拉取请求）**选项卡。
2. 单击 **New pull request（新拉取请求）**。
3. 在 **Example Comparisons（示例比较）**框中，选择您创建的分支 `readme-edits` 以与 `main`（原始分支）进行比较。
4. 在 Compare（比较）页面上的差异中查看您的更改，确保它们是您要提交的内容。

   ![差异示例](/assets/images/help/repository/diffs.png)

5. 单击 **Create pull request（创建拉取请求）**。
6. 为拉取请求指定一个标题，并写下更改的简要说明。 您可以包含表情符号以及拖放图像和 gif。
7. （可选）在标题和说明右侧，单击 **Reviewers（审查者）**旁边的 {% octicon "gear" aria-label="The Gear icon" %}。 单击 **Assignees（受理人）**、**Labels（标签）**、**Projects（项目）**或 **Milestone（里程碑）**以将这些选项添加到您的拉取请求。 您不需要添加任何内容，但这些选项提供了使用拉取请求进行协作的不同方式。 更多信息请参阅“[关于拉取请求](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)”。
7. 单击 **Create pull request（创建拉取请求）**。

您的协作者现在可以查看您的编辑内容并提出建议。

## 合并拉取请求

在最后一步中，您将 `readme-edits` 分支合并到 `main` 分支中。  合并拉取请求后，`readme-edits` 分支上的更改将合并到 `main`。

有时，拉取请求可能会引入与 `main` 上现有代码冲突的代码更改。 如果存在任何冲突， {% data variables.product.product_name %} 将提醒您有关冲突代码的信息，并防止合并，直到冲突解决为止。 您可以进行解决冲突的提交，也可以使用拉取请求中的注释与团队成员讨论冲突。

在本演练中，应该没有任何冲突，因此您已准备好将分支合并到主分支中。

1. 单击 **Merge pull request（合并拉取请求）**，将更改合并到 `main`。 ![合并按钮的屏幕截图。](/assets/images/help/pull_requests/pullrequest-mergebutton.png)
2. 单击 **Confirm merge（确认合并）**。 您将收到一条消息，指出请求已成功合并且请求已关闭。
3. 单击 **Delete branch（删除分支）**。 现在，您的拉取请求已合并，并且您的更改位于 `main` 上，您可以安全地删除 `readme-edits` 分支。 如果要对项目进行更多更改，可以随时创建新分支并重复此过程。

## 后续步骤

通过完成本教程，您已经学会了创建项目和在 {% data variables.product.product_name %} 上发出拉取请求。

以下是您在本教程中完成的工作：

* 创建了一个开源仓库
* 启动并管理了新的分支
* 更改了文件并将这些更改提交到 {% data variables.product.product_name %}
* 打开并合并了拉取请求

查看您的 {% data variables.product.product_name %} 个人资料，将会看到您的工作反映在您的贡献图表上。

有关分支和拉取请求的强大功能的更多信息，请参阅“[GitHub 流程](/get-started/quickstart/github-flow)”。 有关开始使用 {% data variables.product.product_name %} 的详细信息，请参阅[快速入门](/get-started/quickstart)中的其他指南。
