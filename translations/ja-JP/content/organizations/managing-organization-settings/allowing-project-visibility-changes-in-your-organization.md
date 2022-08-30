---
title: Organizationでのプロジェクトの可視性の変更の許可
intro: 'Organizationのオーナーは、管理権限を持つメンバーに、Organization内の{% data variables.projects.projects_v2_and_v1 %}の可視性の調整を許可できます。'
versions:
  feature: classic-project-visibility-permissions-or-projects-v2
topics:
  - Organizations
  - Projects
shortTitle: プロジェクトの可視性の権限
allowTitleToDifferFromFilename: true
permissions: 'Organization owners can allow {% data variables.projects.project_v2_and_v1 %} visibility changes for an organization.'
---

{% data variables.projects.projects_v2_and_v1 %}をプライベートからパブリックに変更できるメンバーを制限するといったように、Organizationにおいて{% data variables.projects.projects_v2_and_v1 %}の可視性を変更できる人を制限できます。

{% data variables.projects.project_v2_and_v1 %}の可視性を変更できるのをOrganizationオーナーだけに制限したり、あるいは管理権限を付与されている人なら誰でもこの可視性を変更できるように許可したりすることができます。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. サイドバーの「Code planning, and automation（コードの計画と自動化）」セクションで、**{% octicon "table" aria-label="The table icon" %} Projects（プロジェクト）**をクリックしてください。
1. プロジェクトの可視性の調整をメンバーに許可するには、**Allow members to change project visibilities for this organization（このOrganizationのプロジェクトの可視性の変更をメンバーに許可）**を選択してください。 ![可視性の変更を設定するチェックボックスを表示しているスクリーンショット](/assets/images/help/projects-v2/visibility-change-checkbox.png)
1. [**Save**] をクリックします。

## 参考リンク

{% ifversion projects-v2 %}
- 「[{% data variables.projects.projects_v2 %}の可視性の管理](/issues/planning-and-tracking-with-projects/managing-your-project/managing-visibility-of-your-projects)」
{%- endif %}{%- ifversion projects-v1 %}
- 「[{% data variables.product.prodname_project_v1 %}の可視性の変更](/issues/organizing-your-work-with-project-boards/managing-project-boards/changing-project-board-visibility)」
{% endif %}
