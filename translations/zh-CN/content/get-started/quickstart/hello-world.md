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

默认情况下，存储库有一个名为 `main` 的分支，被视为最终分支。 您可以在存储库中创建 `main` 以外的其他分支。 You can use branches to have different versions of a project at one time. This is helpful when you want to add new features to a project without changing the main source of code. The work done on different branches will not show up on the main branch until you merge it, which we will cover later in this guide. You can use branches to experiment and make edits before committing them to `main`.

When you create a branch off the `main` branch, you're making a copy, or snapshot, of `main` as it was at that point in time. If someone else made changes to the `main` branch while you were working on your branch, you could pull in those updates.

This diagram shows:

* The `main` branch
* A new branch called `feature`
* The journey that `feature` takes before it's merged into `main`

![branching diagram](/assets/images/help/repository/branching.png)

Have you ever saved different versions of a file? Something like:

* `story.txt`
* `story-edit.txt`
* `story-edit-reviewed.txt`

Branches accomplish similar goals in {% data variables.product.product_name %} repositories.

Here at {% data variables.product.product_name %}, our developers, writers, and designers use branches for keeping bug fixes and feature work separate from our `main` (production) branch. When a change is ready, they merge their branch into `main`.

### 创建分支

1. Click the **Code** tab of your `hello-world` repository.
2. Click the drop down at the top of the file list that says **main**. ![Branch menu](/assets/images/help/branch/branch-selection-dropdown.png)
4. Type a branch name, `readme-edits`, into the text box.
5. Click **Create branch: readme-edits from main**.

![Branch menu](/assets/images/help/repository/new-branch.png)

Now you have two branches, `main` and `readme-edits`. Right now, they look exactly the same. Next you'll add changes to the new branch.

## Making and committing changes

When you created a new branch in the previous step, {% data variables.product.product_name %} brought you to the code page for your new `readme-edits` branch, which is a copy of `main`.

You can make and save changes to the files in your repository. On {% data variables.product.product_name %}, saved changes are called commits. Each commit has an associated commit message, which is a description explaining why a particular change was made. Commit messages capture the history of your changes so that other contributors can understand what you’ve done and why.

1. Under the `readme-edits` branch you created, click the _README.md_ file.
2. 单击 {% octicon "pencil" aria-label="The edit icon" %} 编辑文件。
3. In the editor, write a bit about yourself. Try using different Markdown elements.
4. In the **Commit changes** box, write a commit message that describes your changes.
5. 单击 **Commit changes（提交更改）**。

   ![Commit example](/assets/images/help/repository/first-commit.png)

These changes will be made only to the README file on your `readme-edits` branch, so now this branch contains content that's different from `main`.

## 打开拉取请求

Now that you have changes in a branch off of `main`, you can open a pull request.

Pull requests are the heart of collaboration on {% data variables.product.product_name %}. When you open a pull request, you're proposing your changes and requesting that someone review and pull in your contribution and merge them into their branch. Pull requests show diffs, or differences, of the content from both branches. The changes, additions, and subtractions are shown in different colors.

As soon as you make a commit, you can open a pull request and start a discussion, even before the code is finished.

By using {% data variables.product.product_name %}'s `@mention` feature in your pull request message, you can ask for feedback from specific people or teams, whether they're down the hall or 10 time zones away.

You can even open pull requests in your own repository and merge them yourself. It's a great way to learn the {% data variables.product.product_name %} flow before working on larger projects.

1. Click the **Pull requests** tab of your `hello-world` repository.
2. Click **New pull request**
3. In the **Example Comparisons** box, select the branch you made, `readme-edits`, to compare with `main` (the original).
4. Look over your changes in the diffs on the Compare page, make sure they're what you want to submit.

   ![diff example](/assets/images/help/repository/diffs.png)

5. 单击 **Create pull request（创建拉取请求）**。
6. Give your pull request a title and write a brief description of your changes. You can include emojis and drag and drop images and gifs.
7. Optionally, to the right of your title and description, click the {% octicon "gear" aria-label="The Gear icon" %} next to **Reviewers**. **Assignees**, **Labels**, **Projects**, or **Milestone** to add any of these options to your pull request. You do not need to add any yet, but these options offer different ways to collaborate using pull requests. 更多信息请参阅“[关于拉取请求](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)”。
7. 单击 **Create pull request（创建拉取请求）**。

Your collaborators can now review your edits and make suggestions.

## Merging your pull request

In this final step, you will merge your `readme-edits` branch into the `main` branch.  After you merge your pull request, the changes on your `readme-edits` branch will be incorporated into `main`.

Sometimes, a pull request may introduce changes to code that conflict with the existing code on `main`. If there are any conflicts, {% data variables.product.product_name %} will alert you about the conflicting code and prevent merging until the conflicts are resolved. You can make a commit that resolves the conflicts or use comments in the pull request to discuss the conflicts with your team members.

In this walk-through, you should not have any conflicts, so you are ready to merge your branch into the main branch.

1. Click **Merge pull request** to merge the changes into `main`. ![Screen shot of merge button.](/assets/images/help/pull_requests/pullrequest-mergebutton.png)
2. 单击 **Confirm merge（确认合并）**。 You will receive a message that the request was successfully merged and the request was closed.
3. Click **Delete branch**. Now that your pull request is merged and your changes are on `main`, you can safely delete the `readme-edits` branch. If you want to make more changes to your project, you can always create a new branch and repeat this process.

## 后续步骤

By completing this tutorial, you've learned to create a project and make a pull request on {% data variables.product.product_name %}.

Here's what you accomplished in this tutorial:

* Created an open source repository
* Started and managed a new branch
* Changed a file and committed those changes to {% data variables.product.product_name %}
* Opened and merged a pull request

Take a look at your {% data variables.product.product_name %} profile and you'll see your work reflected on your contribution graph.

For more information about the power of branches and pull requests, see "[GitHub flow](/get-started/quickstart/github-flow)." For more information about getting started with {% data variables.product.product_name %}, see the other guides in the [getting started quickstart](/get-started/quickstart).
