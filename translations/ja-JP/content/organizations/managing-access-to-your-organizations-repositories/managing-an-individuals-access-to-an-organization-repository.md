---
title: Organization のリポジトリへの個人のアクセスを管理する
intro: Organization が所有するリポジトリへの個人のアクセスを管理できます。
redirect_from:
  - /articles/managing-an-individual-s-access-to-an-organization-repository-early-access-program
  - /articles/managing-an-individual-s-access-to-an-organization-repository
  - /articles/managing-an-individuals-access-to-an-organization-repository
  - /github/setting-up-and-managing-organizations-and-teams/managing-an-individuals-access-to-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 個人のアクセスの管理
permissions: People with admin access to a repository can manage access to the repository.
---

## About access to organization repositories

Organization のリポジトリからコラボレーターを削除すると、そのコラボレータはリポジトリに対する読み取りおよび書き込みアクセスを失います。 リポジトリがプライベートで、コラボレータがリポジトリをフォークしている場合、そのそのフォークも削除されますが、リポジトリのローカルクローンは保持したままになります。

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

## Giving a person access to a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
{% data reusables.organizations.invite-teams-or-people %}
5. In the search field, start typing the name of the person to invite, then click a name in the list of matches. ![リポジトリに招待する Team または人の名前を入力するための検索フィールド](/assets/images/help/repository/manage-access-invite-search-field.png)
6. Under "Choose a role", select the repository role to assign the person, then click **Add NAME to REPOSITORY**. ![Team または人の権限を選択する](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

## Organization のリポジトリへの個人のアクセスを管理する

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.people %}
4. アクセスのタイプが異なるユーザを管理するには、[**Members**] または [**Outside collaborators**] をクリックします。 ![メンバーまたは外部コラボレーターを Organization に招待するボタン](/assets/images/help/organizations/select-outside-collaborators.png)
5. 管理する個人の名前の右側にある {% octicon "gear" aria-label="The Settings gear" %}ドロップダウン メニューで、[**Manage**] をクリックします。 ![[Manage] アクセスリンク](/assets/images/help/organizations/member-manage-access.png)
6. [Manage access] ページで、リポジトリの隣にある [**Manage access**] をクリックします。 ![リポジトリの [Manage access] ボタン](/assets/images/help/organizations/repository-manage-access.png)
7. この個人がコラボレーターなのか、チーム メンバーとしてリポジトリにアクセスできるのかなど、特定のリポジトリに対するアクセスを確認します。 ![ユーザのリポジトリへのアクセスのマトリクス](/assets/images/help/organizations/repository-access-matrix-for-user.png)

## 参考リンク

{% ifversion fpt or ghec %}- [リポジトリ内での操作を制限する](/articles/limiting-interactions-with-your-repository){% endif %}
- "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
