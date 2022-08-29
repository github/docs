---
title: 'Organizationのメンバーに対する{% data variables.product.prodname_project_v1 %}へのアクセスの管理'
intro: 'Organizationのオーナーまたは{% data variables.projects.projects_v1_board %}の管理者は、すべてのOrganizationメンバーに対して{% data variables.projects.projects_v1_board %}へのデフォルトの権限レベルを設定できます。'
redirect_from:
  - /articles/managing-access-to-a-project-board-for-organization-members
  - /github/setting-up-and-managing-organizations-and-teams/managing-access-to-a-project-board-for-organization-members
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: メンバーのアクセスの管理
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

デフォルトでは、Organization のメンバーはその Organization の{% data variables.projects.projects_v1_boards %}に対する書き込みアクセスを持ちます。ただし、Organization のオーナーまたは{% data variables.projects.projects_v1_board %}の管理者が、特定の{% data variables.projects.projects_v1_boards %}に異なる権限を設定している場合は例外です。

## Organization のすべてのメンバーに対して標準の権限レベルを設定する

{% tip %}

**参考:** Organizationのメンバーに{% data variables.projects.projects_v1_board %}へのより高い権限を付与することができます。 詳しい情報については、「[Organization のプロジェクトボードの権限](/articles/project-board-permissions-for-an-organization)」を参照してください。

{% endtip %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Click **Projects (classic)**{% endif %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
8. [Organization member permission] で、Organization のすべてのメンバーに対する標準の権限レベルを、[**Read**]、[**Write**]、[**Admin**]、[**None**] の中から選択します。 ![Organization のすべてのメンバーのプロジェクトボードに対する標準の権限](/assets/images/help/projects/baseline-project-permissions-for-organization-members.png)
9. [**Save**] をクリックします。

## 参考リンク

- 「[Organizationの{% data variables.product.prodname_project_v1 %}への個人のアクセスの管理](/articles/managing-an-individual-s-access-to-an-organization-project-board)」
- 「[Organizationの{% data variables.product.prodname_project_v1 %}への Team のアクセスの管理](/articles/managing-team-access-to-an-organization-project-board)」
- 「[Organizationの{% data variables.product.prodname_project_v1_caps %}の権限](/articles/project-board-permissions-for-an-organization)」
