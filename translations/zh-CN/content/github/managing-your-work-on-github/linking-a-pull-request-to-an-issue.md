---
title: 将拉取请求链接到议题
intro: 'You can link a pull request to an issue to{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %} show that a fix is in progress and to{% endif %} automatically close the issue when the pull request is merged.'
redirect_from:
  - /articles/closing-issues-via-commit-message/
  - /articles/closing-issues-via-commit-messages/
  - /articles/closing-issues-using-keywords
  - /github/managing-your-work-on-github/closing-issues-using-keywords
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% note %}

**Note:** The special keywords in a pull request description are interpreted when the pull request targets the repository's *default* branch. However, if the PR's base is *any other branch*, then these keywords are ignored, no links are created and merging the PR has no effect on the issues. **If you want to link a pull request to an issue using a keyword, the PR must be on the default branch.**

{% endnote %}

### 关于链接的议题和拉取请求

You can link an issue to a pull request {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}manually or {% endif %}using a supported keyword in the pull request description.

当您将拉取请求链接到拉取请求指向的议题，如果有人正在操作该议题，协作者可以看到。 {% if currentVersion ver_lt "enterprise-server@2.21" %}If the pull request and the issue are in different repositories, {% data variables.product.product_name %} will display the link after the pull request is merged, if the person who merges the pull request also has permission to close the issue.{% endif %}

将链接的拉取请求合并到仓库的默认分支时，其链接的议题将自动关闭。 For more information about the default branch, see "[Changing the default branch](/github/administering-a-repository/changing-the-default-branch)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
### 手动将拉取请求链接到议题

对仓库有写入权限的任何人都可以手动将拉取请求链接到议题。

您可以手动链接最多 10 个议题到每个拉取请求。 议题和拉取请求必须位于同一仓库中。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
3. 在拉取请求列表中，单击要链接到议题的拉取请求。
4. 在右侧边栏中，单击 **Linked issues（链接的议题）**。 ![右侧边栏中链接的议题](/assets/images/help/pull_requests/linked-issues.png)
5. 单击要链接到拉取请求的议题。 ![下拉以链接议题](/assets/images/help/pull_requests/link-issue-drop-down.png)
{% endif %}

### 使用关键词将拉取请求链接到议题

You can link a pull request to an issue by using a supported keyword in the pull request's description or in a commit message (please note that the pull request must be on the default branch).

* close
* closes
* closed
* fix
* fixes
* fixed
* 解决
* resolves
* resolved

关闭关键词的语法取决于议题是否与拉取请求在同一仓库中。

| 链接的议题    | 语法                                            | 示例                                                             |
| -------- | --------------------------------------------- | -------------------------------------------------------------- |
| 同一仓库中的议题 | *KEYWORD* #*ISSUE-NUMBER*                     | `Closes #10`                                                   |
| 不同仓库中的议题 | *KEYWORD* *OWNER*/*REPOSITORY*#*ISSUE-NUMBER* | `Fixes octo-org/octo-repo#100`                                 |
| 多个议题     | 对每个议题使用完整语法                                   | `Resolves #10, resolves #123, resolves octo-org/octo-repo#100` |

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}Only manually linked pull requests can be manually unlinked. 要取消链接您使用关键词链接的议题，必须编辑拉取请求说明以删除该关键词。{% endif %}

您也可以在提交消息中使用关闭关键词。 The issue will be closed when you merge the commit into the default branch, but the pull request that contains the commit will not be listed as a linked pull request.

### 延伸阅读

- "[自动链接的引用和 URL](/articles/autolinked-references-and-urls/#issues-and-pull-requests)"
