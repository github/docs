---
title: 创建项目板
intro: 项目板可用于创建满足您需求的自定义工作流程，例如对特定功能工作、全面路线图甚至发布检查清单进行跟踪和排列优先级。
redirect_from:
  - /articles/creating-a-project/
  - /articles/creating-a-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

{% data reusables.project-management.link-repos-to-project-board %}更多信息请参阅“[将仓库链接到项目板](/articles/linking-a-repository-to-a-project-board)”。

创建项目板后，您可以向其添加议题、拉取请求和备注。 更多信息请参阅“[向项目板添加议题和拉取请求](/articles/adding-issues-and-pull-requests-to-a-project-board)”和“[向项目板添加备注](/articles/adding-notes-to-a-project-board)”。

还可以配置工作流程自动化，使项目板与议题和拉取请求的状态保持同步。 更多信息请参阅“[关于项目板的自动化](/articles/about-automation-for-project-boards)”。

{% data reusables.project-management.project-board-import-with-api %}

### 创建用户拥有的项目板

{% data reusables.profile.access_profile %}
2. On the top of your profile page, in the main navigation, click
{% octicon "project" aria-label="The project board icon" %} **Projects**.
![项目选项卡](/assets/images/help/projects/user-projects-tab.png)
{% data reusables.project-management.click-new-project %}
{% data reusables.project-management.create-project-name-description %}
{% data reusables.project-management.choose-template %}
{% data reusables.project-management.linked-repositories %}
{% data reusables.project-management.create-project-button %}
{% data reusables.project-management.add-column-new-project %}
{% data reusables.project-management.name-project-board-column %}
{% data reusables.project-management.select-column-preset %}
{% data reusables.project-management.select-automation-options-new-column %}
{% data reusables.project-management.click-create-column %}
{% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

### 创建组织范围的项目板

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.click-new-project %}
{% data reusables.project-management.create-project-name-description %}
{% data reusables.project-management.choose-template %}
{% data reusables.project-management.linked-repositories %}
{% data reusables.project-management.create-project-button %}
{% data reusables.project-management.add-column-new-project %}
{% data reusables.project-management.name-project-board-column %}
{% data reusables.project-management.select-column-preset %}
{% data reusables.project-management.select-automation-options-new-column %}
{% data reusables.project-management.click-create-column %}
{% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

### 创建仓库项目板

{% data reusables.repositories.navigate-to-repo %}
2. Under your repository name, click
{% octicon "project" aria-label="The project board icon" %} **Projects**.
![项目选项卡](/assets/images/help/projects/repo-tabs-projects.png)
{% data reusables.project-management.click-new-project %}
{% data reusables.project-management.create-project-name-description %}
{% data reusables.project-management.choose-template %}
{% data reusables.project-management.create-project-button %}
{% data reusables.project-management.add-column-new-project %}
{% data reusables.project-management.name-project-board-column %}
{% data reusables.project-management.select-column-preset %}
{% data reusables.project-management.select-automation-options-new-column %}
{% data reusables.project-management.click-create-column %}
{% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

### 延伸阅读

- "[关于项目板](/articles/about-project-boards)"
- "[编辑项目板](/articles/editing-a-project-board)"{% if currentVersion == "free-pro-team@latest" %}
- "[复制项目板](/articles/copying-a-project-board)"{% endif %}
- "[关闭项目板](/articles/closing-a-project-board)"
- “[关于项目板的自动化](/articles/about-automation-for-project-boards)”
