---
title: 分配议题和拉取请求到其他 GitHub 用户
intro: 受理人明确谁在处理特定议题和拉取请求。
permissions: 'Anyone with write access to a repository can assign issues and pull requests. {% data reusables.enterprise-accounts.emu-permission-repo %}'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/assigning-issues-and-pull-requests-to-other-github-users
  - /articles/assigning-issues-and-pull-requests-to-other-github-users
  - /github/managing-your-work-on-github/assigning-issues-and-pull-requests-to-other-github-users
  - /issues/tracking-your-work-with-issues/managing-issues/assigning-issues-and-pull-requests-to-other-github-users
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: 分配议题和 PR
---

## 关于议题和拉取请求受理人

每个议题和拉取请求最多可分配给 10 个人，包括您自己、 任何评论了议题或拉取请求的人、任何对仓库有写入权限的人以及对仓库有读取权限的组织成员 。 更多信息请参阅“[{% data variables.product.prodname_dotcom %} 上的访问权限](/articles/access-permissions-on-github)”。

## 分配单个议题或拉取请求

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. 打开要分配给某人的议题或拉取请求。
4. 如果没有人被分配到议题或拉取请求，单击 **assign yourself（分配自己）**以分配您自己。 ![分配您自己的项目](/assets/images/help/issues/assign_yourself.png)
5. 在右侧菜单中，单击 **Assignees（受理人）**。 ![Assignees（受理人）菜单项](/assets/images/help/issues/assignee_menu.png)
6. 要分配议题或拉取请求给某用户，先输入其用户名，然后单击显示的名称。 您可以选择并添加最多十个受理人到议题或拉取请求。 ![议题分配下拉菜单](/assets/images/help/issues/issues_assigning_dropdown.png)

## 分配多个议题或拉取请求

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. 选中要分配给某人的项目旁边的复选框。 ![议题元数据复选框](/assets/images/help/issues/issues_assign_checkbox.png)
4. 在右上角单击 **Assign（分配）**。
5. 要分配项目给某用户，先输入其用户名，然后单击显示的名称。 您可以选择并添加最多十个受理人到议题或拉取请求。 ![议题分配下拉菜单](/assets/images/help/issues/issues_assigning_dropdown.png)

## 延伸阅读

* "[按受理人过滤议题和拉取请求](/articles/filtering-issues-and-pull-requests-by-assignees)"
