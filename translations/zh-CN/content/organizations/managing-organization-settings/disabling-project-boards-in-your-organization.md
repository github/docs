---
title: 删除组织中的项目板
intro: 组织所有者可关闭组织中的组织范围的项目板和仓库项目板。
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/disabling-project-boards-in-your-organization
  - /articles/disabling-project-boards-in-your-organization
  - /github/managing-your-work-on-github/disabling-project-boards-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

禁用组织范围的项目板后，将无法在组织级别创建新的项目板，并且将无法通过其先前的 URL 访问任何现有组织级别项目板。 组织仓库中的项目板不受影响。

在组织中禁用仓库项目板后，将无法在任何组织仓库中创建新项目板，并且将无法通过其先前的 URL 访问组织仓库中的任何现有项目板。 组织级别的项目板不受影响。

禁用项目板后，在时间表或[审核日志](/articles/reviewing-the-audit-log-for-your-organization/)中将不再看到项目板信息。


{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
4. 决定是否禁用组织范围的项目板，禁用组织中的仓库项目板，或两者均禁用。 然后，在“项目”（项目）下：
    - 要禁用组织范围的项目板，请取消选择 **Enable projects for the organization（启用组织的项目）**。
    - 要在组织中禁用仓库项目板，请取消选择 **Enable projects for all repositories（启用所有仓库的项目）**。 ![用于禁用单个组织或单个组织所有仓库的项目的复选框](/assets/images/help/projects/disable-org-projects-checkbox.png)
5. 单击 **Save（保存）**。

{% data reusables.organizations.disable_project_board_results %}

### 延伸阅读

- "[关于项目板](/articles/about-project-boards)"
- "[关闭项目板](/articles/closing-a-project-board)"
- “[删除项目板](/articles/deleting-a-project-board)”
- “[在仓库中禁用项目板](/articles/disabling-project-boards-in-a-repository)”
