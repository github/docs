---
title: 'Managing visibility of your {% data variables.projects.projects_v2 %}'
shortTitle: 'Managing {% data variables.projects.project_v2 %} visibility'
intro: 'Learn about setting your {% data variables.projects.project_v2 %} to private or public visibility.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
permissions: Organization owners can manage the visibility of project boards in their organization. Organization owners can also allow collaborators with admin permissions to manage project visibility. Visibility of user projects can be managed by the owner of the project and collaborators with admin permissions.
---

## 关于项目可见性

Projects can be public or private. 对于公共项目，互联网上的每个人都可以查看。 对于私有项目，只有被授予至少读取访问权限的用户才能查看。

只有项目可见性会受影响；要查看项目上的项，必须有人具有该项所属存储库所需的权限。 如果项目包含私有存储库中的项目，则不是存储库协作者的用户将无法查看该存储库中的项。

![包含隐藏项的项目](/assets/images/help/projects/hidden-items.png)

Project admins and organization owners can control project visibility. Organization owners can restrict the ability to change project visibility to just organization owners.

In public and private projects, insights are only visible to users with write permissions for the project.

在组织拥有的私有项目中，当前对项目进行更新的用户的头像将显示在项目 UI 中。

项目管理员还可以管理对其项目的写入和管理员访问权限，并控制单个用户的读取访问权限。 For more information, see "[Managing access to your projects](/issues/planning-and-tracking-with-projects/managing-your-project/managing-access-to-your-projects)."

## 更改项目可见性

{% data reusables.projects.project-settings %}
1. Next to **Visibility** in the "Danger zone", select **Private** or **Public**. ![Screenshot showing the visibility controls](/assets/images/help/projects-v2/visibility.png)

## 延伸阅读

- [Allowing project visibility changes in your organization](/organizations/managing-organization-settings/allowing-project-visibility-changes-in-your-organization)
