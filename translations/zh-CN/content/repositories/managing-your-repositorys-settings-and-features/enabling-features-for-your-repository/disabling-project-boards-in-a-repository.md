---
title: 在仓库中禁用项目板
intro: 如果您或您的团队以不同方式管理工作，则仓库管理员可关闭仓库的项目板。
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/disabling-project-boards-in-a-repository
  - /articles/disabling-project-boards-in-a-repository
  - /github/managing-your-work-on-github/disabling-project-boards-in-a-repository
  - /github/administering-a-repository/managing-repository-settings/disabling-project-boards-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: 禁用项目板
---

禁用项目板后，在时间表或[审核日志](/articles/reviewing-your-security-log/)中将不再看到项目板信息。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 在“Features”（功能）下，取消选择 **Projects（项目）**复选框。 ![删除项目复选框](/assets/images/help/projects/disable-projects-checkbox.png)

禁用项目板后，将无法通过其先前的 URL 访问现有项目板。 {% data reusables.organizations.disable_project_board_results %}
