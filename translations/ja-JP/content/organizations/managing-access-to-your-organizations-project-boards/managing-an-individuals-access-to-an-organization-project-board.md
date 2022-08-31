---
title: '{% data variables.product.prodname_project_v1 %}への個人のアクセス管理'
intro: 'Organization のオーナーまたは{% data variables.projects.projects_v1_board %}の管理者は、Organization が所有する{% data variables.projects.projects_v1_board %}への個々のメンバーのアクセスを管理できます。'
redirect_from:
  - /articles/managing-an-individual-s-access-to-an-organization-project-board
  - /articles/managing-an-individuals-access-to-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/managing-an-individuals-access-to-an-organization-project-board
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 個人のアクセスの管理
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% note %}

**ノート:** {% data reusables.project-management.cascading-permissions %} 詳しい情報については「[Organizatonの{% data variables.product.prodname_project_v1_caps %}の権限](/articles/project-board-permissions-for-an-organization)」を参照してください。

{% endnote %}

## Organizationのメンバーへの{% data variables.projects.projects_v1_board %}に対するアクセスの付与

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Click **Projects (classic)**{% endif %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
9. [Search by username, full name or email address] で、コラボレーターの名前、ユーザ名、または {% data variables.product.prodname_dotcom %} メールを入力します。 ![Octocat のユーザ名が検索フィールドに入力されているコラボレーターセクション](/assets/images/help/projects/org-project-collaborators-find-name.png)
{% data reusables.project-management.add-collaborator %}
{% data reusables.project-management.collaborator-permissions %}

## {% data variables.projects.projects_v1_board %}へのOrganizationメンバーのアクセスの変更

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Click **Projects (classic)**{% endif %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
{% data reusables.project-management.collaborator-permissions %}

## {% data variables.projects.projects_v1_board %}へのOrganizationのメンバーのアクセスの削除

{% data variables.projects.projects_v1_board %}からコラボレータを削除しても、コラボレータは引き続き他のロールの権限に基づきボードにアクセスできることがあります。 {% data variables.projects.projects_v1_board %}へのアクセスを完全に削除するには、その人が持っている各ロールのアクセスを削除しなければなりません。 たとえば、ある人は{% data variables.projects.projects_v1_board %}へのアクセスをOrganizationのメンバーあるいはTeamのメンバーとして持っているかもしれません。 詳しい情報については[Organizationの{% data variables.product.prodname_project_v1_caps %}の権限](/articles/project-board-permissions-for-an-organization)」を参照してください。

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Click **Projects (classic)**{% endif %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
{% data reusables.project-management.remove-collaborator %}

## 参考リンク

- 「[Organizationの{% data variables.product.prodname_project_v1_caps %}の権限](/articles/project-board-permissions-for-an-organization)」
