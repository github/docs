---
title: 'Linking a repository to a {% data variables.product.prodname_project_v1 %}'
intro: 'You can link a repository to your organization''s or personal account''s {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/linking-a-repository-to-a-project-board
  - /articles/linking-a-repository-to-a-project-board
  - /github/managing-your-work-on-github/linking-a-repository-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 将仓库链接到板
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

Anyone with write permissions to a {% data variables.projects.projects_v1_board %} can link repositories owned by that organization or personal account to the {% data variables.projects.projects_v1_board %}. For more information, see "[{% data variables.product.prodname_project_v1_caps %} permissions for an organization](/articles/project-board-permissions-for-an-organization/)" or "[Permission levels for user-owned {% data variables.product.prodname_projects_v1 %}](/articles/permission-levels-for-user-owned-project-boards/)."

{% data reusables.project-management.link-repos-to-project-board %} 您可以在卡中输入议题或拉取请求 URL，从任何未链接的仓库添加议题和拉取请求。 For more information, see "[Adding issues and pull requests to a {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)."

1. Navigate to the {% data variables.projects.projects_v1_board %} where you want to link a repository.
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
4. 在左侧边栏中，单击 **Linked repositories（链接的仓库）**。 ![左侧边栏中链接的仓库菜单选项](/assets/images/help/projects/project-board-linked-repositories-setting.png)
5. 单击 **Link a repository（链接仓库）**。 ![链接的仓库选项卡中的链接仓库按钮](/assets/images/help/projects/link-repository-button.png)
6. 搜索要链接的仓库。 ![链接仓库窗口中的搜索字段](/assets/images/help/projects/search-to-link-repository.png)
7. 单击 **Link（链接）**。 要取消链接，请单击 **Unlink（取消链接）**。 ![链接按钮](/assets/images/help/projects/link-button.png)

{% note %}

**Note:** In order to link a repository to your organization or user owned {% data variables.projects.projects_v1_board %} the repository needs to have issues enabled. 也就是说，仓库有一个“议题”选项卡（在复刻的仓库中默认禁用议题）。  有关如何对仓库启用或禁用议题的信息，请参阅“[对仓库禁用议题](/github/managing-your-work-on-github/disabling-issues)”。

{% endnote %}

## 延伸阅读

- "[关于 {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
