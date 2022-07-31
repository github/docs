---
title: 'Disabling {% ifversion projects-v2 %}projects{% else %}project boards{% endif %} in your organization'
intro: 'Organization owners can turn off {% ifversion projects-v2 %}organization-wide {% data variables.projects.projects_v2 %}, organization-wide {% data variables.projects.projects_v1_boards %}, and repository-level {% data variables.projects.projects_v1_boards %}{% else %}organization-wide project boards and repository project boards{% endif %} in an organization.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/disabling-project-boards-in-your-organization
  - /articles/disabling-project-boards-in-your-organization
  - /github/managing-your-work-on-github/disabling-project-boards-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Disable projects
allowTitleToDifferFromFilename: true
---

禁用组织范围的项目板后，将无法在组织级别创建新的项目板，并且将无法通过其先前的 URL 访问任何现有组织级别项目板。 组织仓库中的项目板不受影响。 {% ifversion projects-v2 %}These settings apply to {% data variables.projects.projects_v2 %} and {% data variables.projects.projects_v1_boards %}.{% endif %}

在组织中禁用仓库项目板后，将无法在任何组织仓库中创建新项目板，并且将无法通过其先前的 URL 访问组织仓库中的任何现有项目板。 组织级别的项目板不受影响。


禁用项目板后，在时间表或[审核日志](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization)中将不再看到项目板信息。


{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. 在侧边栏的“Code planning, and automation（代码规划和自动化）”部分中，点击 **{% octicon "table" aria-label="The table icon" %} 项目**。
{% endif %}
1. 决定是否禁用组织范围的项目板，禁用组织中的仓库项目板，或两者均禁用。 然后，在“项目”（项目）下：
    - 要禁用组织范围的项目板，请取消选择 **Enable projects for the organization（启用组织的项目）**。
    - 要在组织中禁用仓库项目板，请取消选择 **Enable projects for all repositories（启用所有仓库的项目）**。 ![用于禁用单个组织或单个组织所有仓库的项目的复选框](/assets/images/help/projects/disable-org-projects-checkbox.png)
1. 单击 **Save（保存）**。

{% data reusables.organizations.disable_project_board_results %}

## 延伸阅读

{% ifversion projects-v2 %}- "[About {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)"{% endif %}
- "[关于 {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
- "[Closing a {% data variables.projects.projects_v1_board %}](/articles/closing-a-project-board)"
- "[Deleting a {% data variables.projects.projects_v1_board %}](/articles/deleting-a-project-board)"
- "[Disabling {% data variables.projects.projects_v1_boards %} in a repository](/articles/disabling-project-boards-in-a-repository)"
