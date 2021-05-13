---
title: 从评论打开议题
intro: 您可以从议题或拉取请求中的特定评论行打开新议题。
permissions: People with read permissions can create an issue in a repository where issues are enabled.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

从评论打开议题时，该议题包含一个代码段，显示评论的原始发布位置。

{% data reusables.repositories.administrators-can-disable-issues %}

1. 导航到您要打开其评论的议题。

2. 在该评论中，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}。 ![拉取请求审查评论中的烤肉串式按钮](/assets/images/help/pull_requests/kebab-in-pull-request-review-comment.png)
3. 单击 **Reference in new issue（新议题中的引用）**。 ![新议题中的引用菜单项](/assets/images/help/pull_requests/reference-in-new-issue.png)
4. 使用“Repository（仓库）”下拉菜单，并选择要在其中打开议题的仓库。 ![新议题的仓库下拉列表](/assets/images/help/pull_requests/new-issue-repository.png)
5. 键入议题的描述性标题和正文。 ![新议题的标题和正文](/assets/images/help/pull_requests/new-issue-title-and-body.png)
6. 单击 **Create issue（创建过滤器）**。 ![创建新议题的按钮](/assets/images/help/pull_requests/create-issue.png)
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}

### 延伸阅读

- “[创建议题](/github/managing-your-work-on-github/creating-an-issue)”
