---
title: 'Managing access to a {% data variables.product.prodname_project_v1 %} for organization members'
intro: 'As an organization owner or {% data variables.projects.projects_v1_board %} admin, you can set a default permission level for a {% data variables.projects.projects_v1_board %} for all organization members.'
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

By default, organization members have write access to their organization's {% data variables.projects.projects_v1_boards %} unless organization owners or {% data variables.projects.projects_v1_board %} admins set different permissions for specific {% data variables.projects.projects_v1_boards %}.

## Organization のすべてのメンバーに対して標準の権限レベルを設定する

{% tip %}

**Tip:** You can give an organization member higher permissions to {% data variables.projects.projects_v1_board %}. 詳しい情報については、「[Organization のプロジェクトボードの権限](/articles/project-board-permissions-for-an-organization)」を参照してください。

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

- "[Managing an individual’s access to an organization {% data variables.product.prodname_project_v1 %}](/articles/managing-an-individual-s-access-to-an-organization-project-board)"
- "[Managing team access to an organization {% data variables.product.prodname_project_v1 %}](/articles/managing-team-access-to-an-organization-project-board)"
- "[{% data variables.product.prodname_project_v1_caps %} permissions for an organization](/articles/project-board-permissions-for-an-organization)"
