---
title: 'Organizationの{% data variables.product.prodname_project_v1 %}への外部のコラボレータの追加'
intro: 'Organizationのオーナーもしくは{% data variables.projects.projects_v1_board %}の管理者は、{% data variables.projects.projects_v1_board %}に外部のコラボレータを追加してその権限をカスタマイズできます。'
redirect_from:
  - /articles/adding-an-outside-collaborator-to-a-project-board-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-an-outside-collaborator-to-a-project-board-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: コラボレーターの追加
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

外部のコラボレータは Organization の明示的なメンバーではありませんが、Organizationの{% data variables.projects.projects_v1_board %}への権限を持っています。

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. Click **Projects (classic)**{% endif %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
9. \[Search by username, full name or email address\] (ユーザ名、フルネーム、メールアドレスでの検索) の下で、外部のコラボレータの名前、ユーザ名、{% data variables.product.prodname_dotcom %}メールを入力してください。 ![Octocat のユーザ名が検索フィールドに入力されているコラボレーターセクション](/assets/images/help/projects/org-project-collaborators-find-name.png)
{% data reusables.project-management.add-collaborator %}
{% data reusables.project-management.collaborator-permissions %}
