---
title: 关于将 Visual Studio Code 与 GitHub Classroom 配合使用
shortTitle: 关于使用 Visual Studio Code
intro: '您可以将 {% data variables.product.prodname_vscode %} 配置为 {% data variables.product.prodname_classroom %} 中任务的首选编辑器。'
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/about-using-vs-code-with-github-classroom
---

## 关于 {% data variables.product.prodname_vscode %}

{% data variables.product.prodname_vscode %} 是一个轻量级但功能强大的源代码编辑器，可在桌面上运行，适用于 Windows、macOS 和 Linux。 借助 [{% data variables.product.prodname_vscode_shortname %} 的 GitHub Classroom 扩展](https://aka.ms/classroom-vscode-ext)，学生可以轻松浏览、编辑、提交、协作和测试他们的课堂作业。 有关 IDE 和 {% data variables.product.prodname_classroom %} 的更多信息，请参阅“[集成 {% data variables.product.prodname_classroom %} 与 IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide)”。

### 您学生的首选编辑器
GitHub Classroom 与 {% data variables.product.prodname_vscode_shortname %} 的集成为学生提供了一个扩展包，其中包含：

1. [GitHub 课程扩展](https://aka.ms/classroom-vscode-ext)，其中包含自定义摘要，便于学生轻松入门。
2. [Visual Studio 实时分享扩展](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)，集成到学生视图中，以便轻松获取助教和同学的帮助与协作。
3. [GitHub 拉取请求扩展](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)，允许学生在编辑器中查看教师的反馈。

### 如何在 {% data variables.product.prodname_vscode_shortname %} 中启动作业
创建任务时，可以将 {% data variables.product.prodname_vscode_shortname %} 添加为任务的首选编辑器。 有关详细信息，请参阅“[集成 {% data variables.product.prodname_classroom %} 与 IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide)”。

这将包括所有学生存储库中的“在 {% data variables.product.prodname_vscode_shortname %} 中打开”徽章。 此徽章处理安装 {% data variables.product.prodname_vscode_shortname %}（课堂扩展包）以及一键打开活动的作业。

{% note %}

**注意：**学生必须在其计算机上安装 Git 才能将代码从 {% data variables.product.prodname_vscode_shortname %} 推送到其存储库。 单击**在 {% data variables.product.prodname_vscode_shortname %} 代码中打开**按钮时不自动安装。 学生可以从[这里](https://git-scm.com/downloads)下载 Git。

{% endnote %}

### 如何使用 GitHub 课堂扩展包
GitHub 课堂扩展有两个主要组件：“课堂”视图和“活动的作业”视图。

当学生首次启动扩展时，他们将自动导航到 {% data variables.product.prodname_vscode_shortname %} 中的 Explorer 选项卡，在其中可以看到“活动的作业”视图以及存储库中文件的树视图。

![GitHub 课堂活动作业视图](/assets/images/help/classroom/vs-code-active-assignment.png)

学生可以通过单击 **sync changes（同步更改）**按钮（将鼠标悬停在“活动的作业”行上时显示）将其提交推送到最新版本的远程。 这去掉了 Git 的源代码控制，允许教师按照自己的节奏教授 Git。 如果教师已为其作业配置自动评分，同步更改还会触发“测试”运行。

如果作业是组项目，则“活动的作业”下的“组”节点将显示组的成员。 它还将显示存储库的管理员成员，当学生遇到困难时，他们可以提供帮助。 要协作处理项目，学生可以与组节点中的任何人启动实时共享会话，他们将立即与他们共享存储库的整个上下文。 您可以在[此处](https://docs.microsoft.com/en-us/visualstudio/liveshare/)了解有关实时共享并与之协作的更多信息。

学生完成作业后，还可以导航以查看其他作业和教室。 这些可以在 GitHub 选项卡下找到。
