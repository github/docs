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

**ノート:**

- 移行しようとしているプロジェクトが1200以上のアイテムを含む場合、オープンなIssueが優先され、そのあとにオープンなPull Request、そしてノートが続きます。 残りの領域はクローズされたIssue、マージされたPull Request、クローズされたあPull Requestに使われます。 この制限のために移行できなかったアイテムは、アーカイブに移されます。 アーカイブの限度である10,000アイテムに達すると、それ以降のアイテムは移行されません。
- カードはドラフトのIssueに変換され、その内容はドラフトのIssueの本文に保存されることに注意してください。 情報が欠落しているように見える場合は、非表示のフィールドを見えるようにしてください。 詳しい情報については「[非表示のフィールドの表示](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view#showing-and-hiding-fields)」を参照してください。
- オートメーションは移行されません。
- トリアージ、アーカイブ、アクティビティは移行されません。
- 移行のあと、移行された新しいプロジェクトと古いプロジェクトの同期は取られません。

{% endnote %}

## プロジェクトの移行について

You can migrate your project boards to the new {% data variables.product.prodname_projects_v2 %} experience and try out tables, multiple views, new automation options, and powerful field types. For more information, see "[About projects](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)."

## Organizationのプロジェクトボードの移行

{% data reusables.projects.enable-migration %}
{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}
1. 左側で**Projects (classic)**をクリックしてください。 ![Projects (classic)メニューオプションが表示されているスクリーンショット](/assets/images/help/issues/projects-classic-org.png)
{% data reusables.projects.migrate-project-steps %}

## ユーザプロジェクトボードの移行

{% data reusables.projects.enable-migration %}
{% data reusables.profile.access_profile %}
1. プロフィールページの一番上のメインナビゲーションにある{% octicon "project" aria-label="The project board icon" %}[**Projects**] をクリックします。 ![プロジェクトタブ](/assets/images/help/projects/user-projects-tab.png)
1. プロジェクトのリストの上部で**Projects (classic)**をクリックしてください。 ![Projects (classic)メニューオプションが表示されているスクリーンショット](/assets/images/help/issues/projects-classic-user.png)
{% data reusables.projects.migrate-project-steps %}

## リポジトリプロジェクトボードの移行

{% note %}

**Note:** {% data variables.projects.projects_v2_caps %} does not support repository level projects. リポジトリプロジェクトボードを移行する場合、リポジトリプロジェクトを所有しているOrganizationもしくは個人アカウントに移行することになり、移行されたプロジェクトはオリジナルのリポジトリにピン止めされます。

{% endnote %}

{% data reusables.projects.enable-migration %}
{% data reusables.repositories.navigate-to-repo %}
1. リポジトリ名の下にある {% octicon "project" aria-label="The project board icon" %}[**Projects**] をクリックします。 ![プロジェクトタブ](/assets/images/help/projects/repo-tabs-projects.png)
1. **Projects (classic)**をクリックしてください。 ![Projects (classic)メニューオプションが表示されているスクリーンショット](/assets/images/help/issues/projects-classic-org.png)
{% data reusables.projects.migrate-project-steps %}
