---
title: Organization のプロジェクトボードに対する個々のアクセスを管理する
intro: Organization のオーナーまたはプロジェクトボードの管理者は、Organization で所有しているプロジェクトボードに対する個々のメンバーのアクセスを管理できます。
redirect_from:
  - /articles/managing-an-individual-s-access-to-an-organization-project-board
  - /articles/managing-an-individuals-access-to-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/managing-an-individuals-access-to-an-organization-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

{% note %}

**メモ:** {% data reusables.project-management.cascading-permissions %} 詳細は「[Orgazniation のプロジェクトボード権限](/articles/project-board-permissions-for-an-organization)」を参照してください。

{% endnote %}

### Organization メンバーにプロジェクトボードへのアクセスを付与する

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
9. [Search by username, full name or email address] で、コラボレーターの名前、ユーザ名、または {% data variables.product.prodname_dotcom %} メールを入力します。 ![Octocat のユーザ名が検索フィールドに入力されているコラボレーターセクション](/assets/images/help/projects/org-project-collaborators-find-name.png)
{% data reusables.project-management.add-collaborator %}
{% data reusables.project-management.collaborator-permissions %}

### Organization のメンバーのプロジェクトボードへのアクセスを変更する

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
{% data reusables.project-management.collaborator-permissions %}

### Organization メンバーのプロジェクトボードへのアクセスを削除する

プロジェクトボードからコラボレーターを削除しても、コラボレーターは引き続き他のロールの権限でボードにアクセスできる場合があります。 プロジェクトボードへのアクセスを完全に削除するには、個人の各ロールごとにアクセスを削除する必要があります。 たとえば、ユーザは Organization のメンバーとして、またはチーム メンバーとしてプロジェクトボードにアクセスできます。 詳しい情報については、「[Organization のプロジェクトボードの権限](/articles/project-board-permissions-for-an-organization)」を参照してください。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
{% data reusables.project-management.collaborator-option %}
{% data reusables.project-management.remove-collaborator %}

### 参考リンク

- [Organization のプロジェクトボード権限](/articles/project-board-permissions-for-an-organization)
