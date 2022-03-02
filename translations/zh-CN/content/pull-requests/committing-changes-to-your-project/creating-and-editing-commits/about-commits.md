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

## About commit branches and tag labels

You can see which branch a commit is on by looking at the labels beneath the commit on the commit page.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-commit-page %}
1. 通过单击提交消息链接导航到提交。 ![Screenshot of commit with commit message link emphasized](/assets/images/help/commits/commit-message-link.png)
2. To see what branch the commit is on, check the label below the commit message. ![Screenshot of commit with commit branch indicator emphasized](/assets/images/help/commits/commit-branch-indicator.png)

If your commit is not on the default branch (`main`), the label will show the branches which contain the commit. If the commit is part of an unmerged pull request, you can click the link to go to the pull request.

如果提交在默认分支上，将显示包含提交的任何标记，并且默认分支将是列出的唯一分支。 For more information on tags, see "[Git Basics - Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)" in the Git documentation.

![Screenshot of commit with commit tag emphasized](/assets/images/help/commits/commit-tag-label.png)

## 延伸阅读
- {% data variables.product.prodname_desktop %} 上的“[提交和审查对项目的更改](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#about-commits)”
