---
title: 关于提交
intro: 您可以将一小组有意义的更改保存为提交。
redirect_from:
  - /articles/why-are-my-commits-in-the-wrong-order
  - /github/committing-changes-to-your-project/why-are-my-commits-in-the-wrong-order
  - /github/committing-changes-to-your-project/about-commits
  - /github/committing-changes-to-your-project/creating-and-editing-commits/about-commits
  - /pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/commit-branch-and-tag-labels
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## 关于提交

{% data reusables.commits.about-commits %}

您可以对协作处理的任何提交添加合作作者。 更多信息请参阅“[创建有多个作者的提交](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors)”。

{% ifversion fpt or ghec %}
您也可以代表组织创建提交。 更多信息请参阅“[代表组织创建提交](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization)”{% endif %}

变基允许您更改一系列提交，并且可以修改时间表中的提交顺序。 更多信息请参阅“[关于 Git 变基](/github/getting-started-with-github/about-git-rebase)”。

## 关于提交分支和标记标签

您可以通过查看提交页面上提交下方的标签来查看提交所在的分支。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-commit-page %}
1. 通过单击提交消息链接导航到提交。 ![强调提交消息链接的提交屏幕截图](/assets/images/help/commits/commit-message-link.png)
2. 要查看提交位于哪个分支上，请检查提交消息下方的标签。 ![强调提交分支指示的提交屏幕截图](/assets/images/help/commits/commit-branch-indicator.png)

如果您的提交不在默认分支 (`main`) 上，标签将显示包含提交的分支。 如果提交是未合并的拉取请求的一部分，则可以单击该链接转到拉取请求。

如果提交在默认分支上，将显示包含提交的任何标记，并且默认分支将是列出的唯一分支。 有关标记的更多信息，请参阅 Git 文档中的“[Git 基础知识 - 标记](https://git-scm.com/book/en/v2/Git-Basics-Tagging)”。

![强调提交标记的提交屏幕截图](/assets/images/help/commits/commit-tag-label.png)

{% ifversion commit-tree-view %}

## 使用文件树

You can use the file tree to navigate between files in a commit.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-commit-page %}
1. 通过单击提交消息链接导航到提交。 ![强调提交消息链接的提交屏幕截图](/assets/images/help/commits/commit-message-link.png)
1. 单击文件树中的文件可查看相应的文件差异 如果文件树处于隐藏状态，请单击 {% octicon "sidebar-collapse" aria-label="The sidebar collapse icon" %} 以显示文件树。

  {% note %}

  **Note**: The file tree will not display if your screen width is too narrow or if the commit only includes one file.

  {% endnote %}

  ![Screenshot of filter changed files search box and file tree emphasized](/assets/images/help/repository/file-tree.png)
1. 要按文件路径进行筛选，请在 **Filter changed files（筛选已更改的文件）**搜索框中输入部分或全部文件路径。

{% endif %}

## 延伸阅读
- {% data variables.product.prodname_desktop %} 上的“[提交和审查对项目的更改](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#about-commits)”
