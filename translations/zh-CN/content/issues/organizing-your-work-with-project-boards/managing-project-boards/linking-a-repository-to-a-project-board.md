---
title: 将仓库链接到项目板
intro: 您可以将仓库链接到组织或用户的项目板。
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/linking-a-repository-to-a-project-board
  - /articles/linking-a-repository-to-a-project-board
  - /github/managing-your-work-on-github/linking-a-repository-to-a-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

对项目板具有写入权限的任何人都可以将该组织或用户帐户拥有的仓库链接到项目板。 更多信息请参阅“[组织的项目板权限](/articles/project-board-permissions-for-an-organization/)”或“[用户拥有的项目板的权限级别](/articles/permission-levels-for-user-owned-project-boards/)”。

{% data reusables.project-management.link-repos-to-project-board %} 您可以在卡中输入议题或拉取请求 URL，从任何未链接的仓库添加议题和拉取请求。 更多信息请参阅“[添加议题和拉取请求到项目板](/articles/adding-issues-and-pull-requests-to-a-project-board)”。

1. 导航到您要在其中链接仓库的项目板。
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
4. 在左侧边栏中，单击 **Linked repositories（链接的仓库）**。 ![左侧边栏中链接的仓库菜单选项](/assets/images/help/projects/project-board-linked-repositories-setting.png)
5. 单击 **Link a repository（链接仓库）**。 ![链接的仓库选项卡中的链接仓库按钮](/assets/images/help/projects/link-repository-button.png)
6. 搜索要链接的仓库。 ![链接仓库窗口中的搜索字段](/assets/images/help/projects/search-to-link-repository.png)
7. 单击 **Link（链接）**。 要取消链接，请单击 **Unlink（取消链接）**。 ![链接按钮](/assets/images/help/projects/link-button.png)

{% note %}

**注：**要将仓库链接到组织或用户拥有的项目板，仓库需要启用议题。 也就是说，仓库有一个“议题”选项卡（在复刻的仓库中默认禁用议题）。  有关如何对仓库启用或禁用议题的信息，请参阅“[对仓库禁用议题](/github/managing-your-work-on-github/disabling-issues)”。

{% endnote %}

### 延伸阅读

- "[关于项目板](/articles/about-project-boards)"
