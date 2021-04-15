---
title: Organization メンバーのプロジェクトボードへのアクセスを管理する
intro: 'Organization のオーナーまたはプロジェクトボード管理者は、Organization のすべてのメンバーについて、プロジェクトボードのデフォルトの権限レベルを設定できます。'
redirect_from:
  - /articles/managing-access-to-a-project-board-for-organization-members
  - /github/setting-up-and-managing-organizations-and-teams/managing-access-to-a-project-board-for-organization-members
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---

デフォルトでは、Organization のメンバーはその Organization のプロジェクトボードに対する書き込みアクセスを持ちます。ただし、Organization のオーナーまたはプロジェクトボード管理者が、特定のプロジェクトボードに異なる権限を設定している場合は例外です。

### Organization のすべてのメンバーに対して標準の権限レベルを設定する

{% tip %}

**ヒント:** Organization メンバーの、プロジェクトボードに対する権限を高くすることができます。 詳しい情報については、「[Organization のプロジェクトボードの権限](/articles/project-board-permissions-for-an-organization)」を参照してください。

{% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
8. [Organization member permission] で、Organization のすべてのメンバーに対する標準の権限レベルを、[**Read**]、[**Write**]、[**Admin**]、[**None**] の中から選択します。 ![Organization のすべてのメンバーのプロジェクトボードに対する標準の権限](/assets/images/help/projects/baseline-project-permissions-for-organization-members.png)
9. [**Save**] をクリックします。

### 参考リンク

- 「[Organization のプロジェクトボードに対する個々のアクセスを管理する](/articles/managing-an-individual-s-access-to-an-organization-project-board)」
- 「[Organization のプロジェクトボードに対するチームのアクセスを管理する](/articles/managing-team-access-to-an-organization-project-board)」
- [Organization のプロジェクトボード権限](/articles/project-board-permissions-for-an-organization)
