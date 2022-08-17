---
title: '{% data variables.projects.projects_v2 %}の可視性の管理'
shortTitle: '{% data variables.projects.project_v2 %}の可視性の管理'
intro: '{% data variables.projects.project_v2 %}の可視性のプライベートもしくはパブリックへの設定について学んでください。'
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

プロジェクトはパブリックあるいはプライベートにできます。 パブリックプロジェクトでは、インターネット上の誰もがプロジェクトを見ることができます。 プライベートプロジェクトでは、最低でも読み取りアクセスを付与されたユーザだけがプロジェクトを見ることができます。

影響を受けるのはプロジェクトの可視性のみです。プロジェクト上のアイテムを見るには、アイテムが属する得リポジトリに対する必要な権限を持っていなければなりません。 プロジェクトにプライベートリポジトリのアイテムが含まれているなら、そのリポジトリのコラボレータではないユーザは、そのリポジトリのアイテムを見ることはできません。

![非表示のアイテムを持つプロジェクト](/assets/images/help/projects/hidden-items.png)

プロジェクトの管理者とOrganizationのオーナーは、プロジェクトの可視性を制御できます。 Organizationのオーナーは、プロジェクトの可視性を変更できるのをOrganizationのオーナーだけに制限できます。

パブリック及びプライベートのプロジェクトでは、インサイトはプロジェクトの書き込み権限を持っているユーザだけが見ることができます。

Organizationが所有するプライベートのプロジェクトでは、プロジェクトを現在更新しているユーザのアバターがプロジェクトのUIに表示されます。

プロジェクトの管理者は、プロジェクトに対する書き込み及び管理アクセスの管理と、個々のユーザの読み取りアクセスの制御もできます。 詳しい情報については「[プロジェクトへのアクセスの管理](/issues/planning-and-tracking-with-projects/managing-your-project/managing-access-to-your-projects)」を参照してください。

## プロジェクトの可視性の変更

{% data reusables.projects.project-settings %}
1. "Danger zone（危険区域）"の**Visibility（可視性）**の隣で、**Private（プライベート）**もしくは**Public（パブリック）**を選択してください。 ![可視性のコントロールを表示しているスクリーンショット](/assets/images/help/projects-v2/visibility.png)

## 参考リンク

- [Organizationでのプロジェクトの可視性の変更の許可](/organizations/managing-organization-settings/allowing-project-visibility-changes-in-your-organization)
