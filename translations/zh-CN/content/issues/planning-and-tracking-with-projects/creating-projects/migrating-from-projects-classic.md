---
title: 'Migrating from {% data variables.product.prodname_projects_v1 %}'
intro: 'You can migrate your {% data variables.projects.projects_v1_board %} to the new {% data variables.product.prodname_projects_v2 %} experience.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/migrating-your-project
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
---


{% note %}

**注意：**

- 如果要迁移的项目包含的项目超过 1200 个项目，则将优先处理未解决的问题，然后是打开的拉取请求，然后是注释。 剩余空间将用于已关闭的议题、合并的拉取请求和已关闭的拉取请求。 由于此限制而无法迁移的项目将被移动到存档中。 如果达到 10,000 个项目的存档限制，则不会迁移其他项目。
- 便笺卡将转换为草稿问题，内容将保存到草稿议题正文中。 如果信息似乎缺失，请使所有隐藏字段可见。 有关详细信息，请参阅“[显示和隐藏字段](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view#showing-and-hiding-fields)”。
- 不会迁移自动化。
- 不会迁移分类、存档和活动。
- 迁移后，新迁移的项目和旧项目将不会保持同步。

{% endnote %}

## 关于项目迁移

You can migrate your project boards to the new {% data variables.product.prodname_projects_v2 %} experience and try out tables, multiple views, new automation options, and powerful field types. For more information, see "[About projects](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)."

## 迁移组织项目板

{% data reusables.projects.enable-migration %}
{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}
1. 在左侧，单击 **Projects (classic)（项目[经典]）**。 ![显示项目（经典）菜单选项的屏幕截图](/assets/images/help/issues/projects-classic-org.png)
{% data reusables.projects.migrate-project-steps %}

## 迁移用户项目板

{% data reusables.projects.enable-migration %}
{% data reusables.profile.access_profile %}
1. 在个人资料页面顶部的主导航栏中，单击 {% octicon "project" aria-label="The project board icon" %} **Projects（项目）**。 ![项目选项卡](/assets/images/help/projects/user-projects-tab.png)
1. 在项目列表上方，单击 **Projects (classic)（项目[经典]）**。 ![显示项目（经典）菜单选项的屏幕截图](/assets/images/help/issues/projects-classic-user.png)
{% data reusables.projects.migrate-project-steps %}

## 迁移存储库项目板

{% note %}

**Note:** {% data variables.projects.projects_v2_caps %} does not support repository level projects. 迁移存储库项目板时，它将迁移到拥有存储库项目的组织或个人帐户，并且迁移的项目将固定到原始存储库。

{% endnote %}

{% data reusables.projects.enable-migration %}
{% data reusables.repositories.navigate-to-repo %}
1. 在仓库名称下，单击 {% octicon "project" aria-label="The project board icon" %} **Projects（项目）**。 ![项目选项卡](/assets/images/help/projects/repo-tabs-projects.png)
1. 单击 **Projects (classic)（项目[经典]）**。 ![显示项目（经典）菜单选项的屏幕截图](/assets/images/help/issues/projects-classic-org.png)
{% data reusables.projects.migrate-project-steps %}
