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

## プロジェクトの可視性について

Projects can be public or private. パブリックプロジェクトでは、インターネット上の誰もがプロジェクトを見ることができます。 プライベートプロジェクトでは、最低でも読み取りアクセスを付与されたユーザだけがプロジェクトを見ることができます。

影響を受けるのはプロジェクトの可視性のみです。プロジェクト上のアイテムを見るには、アイテムが属する得リポジトリに対する必要な権限を持っていなければなりません。 プロジェクトにプライベートリポジトリのアイテムが含まれているなら、そのリポジトリのコラボレータではないユーザは、そのリポジトリのアイテムを見ることはできません。

![非表示のアイテムを持つプロジェクト](/assets/images/help/projects/hidden-items.png)

Project admins and organization owners can control project visibility. Organization owners can restrict the ability to change project visibility to just organization owners.

In public and private projects, insights are only visible to users with write permissions for the project.

Organizationが所有するプライベートのプロジェクトでは、プロジェクトを現在更新しているユーザのアバターがプロジェクトのUIに表示されます。

プロジェクトの管理者は、プロジェクトに対する書き込み及び管理アクセスの管理と、個々のユーザの読み取りアクセスの制御もできます。 For more information, see "[Managing access to your projects](/issues/planning-and-tracking-with-projects/managing-your-project/managing-access-to-your-projects)."

## プロジェクトの可視性の変更

{% data reusables.projects.project-settings %}
1. Next to **Visibility** in the "Danger zone", select **Private** or **Public**. ![Screenshot showing the visibility controls](/assets/images/help/projects-v2/visibility.png)

## 参考リンク

- [Allowing project visibility changes in your organization](/organizations/managing-organization-settings/allowing-project-visibility-changes-in-your-organization)
