---
title: Organizationでのプロジェクトの可視性の変更の許可
intro: 'Organization owners can allow members with admin permissions to adjust the visibility of {% data variables.projects.projects_v2_and_v1 %} in their organization.'
versions:
  feature: classic-project-visibility-permissions-or-projects-v2
topics:
  - Organizations
  - Projects
shortTitle: プロジェクトの可視性の権限
allowTitleToDifferFromFilename: true
permissions: 'Organization owners can allow {% data variables.projects.project_v2_and_v1 %} visibility changes for an organization.'
---

You can restrict who has the ability to change the visibility of {% data variables.projects.projects_v2_and_v1 %} in your organization, such as restricting members from changing {% data variables.projects.projects_v2_and_v1 %} from private to public.

You can limit the ability to change {% data variables.projects.project_v2_and_v1 %} visibility to just organization owners, or you can allow anyone granted admin permissions to change the visibility.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. サイドバーの「Code planning, and automation（コードの計画と自動化）」セクションで、**{% octicon "table" aria-label="The table icon" %} Projects（プロジェクト）**をクリックしてください。
1. プロジェクトの可視性の調整をメンバーに許可するには、**Allow members to change project visibilities for this organization（このOrganizationのプロジェクトの可視性の変更をメンバーに許可）**を選択してください。 ![可視性の変更を設定するチェックボックスを表示しているスクリーンショット](/assets/images/help/projects-v2/visibility-change-checkbox.png)
1. [**Save**] をクリックします。

## 参考リンク

{% ifversion projects-v2 %}
- "[Managing visibility of your {% data variables.projects.projects_v2 %}](/issues/planning-and-tracking-with-projects/managing-your-project/managing-visibility-of-your-projects)"
{%- endif %}{%- ifversion projects-v1 %}
- 「[{% data variables.product.prodname_project_v1 %}の可視性の変更](/issues/organizing-your-work-with-project-boards/managing-project-boards/changing-project-board-visibility)」
{% endif %}
