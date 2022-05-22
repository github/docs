---
title: Organization のリポジトリへの個人のアクセスを管理する
intro: Organization が所有するリポジトリへの個人のアクセスを管理できます。
redirect_from:
  - /articles/managing-an-individual-s-access-to-an-organization-repository-early-access-program/
  - /articles/managing-an-individual-s-access-to-an-organization-repository
  - /articles/managing-an-individuals-access-to-an-organization-repository
  - /github/setting-up-and-managing-organizations-and-teams/managing-an-individuals-access-to-an-organization-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---
管理権限を持つ人は、Organization のメンバーや外部のコラボレータの、Organization のリポジトリに対するアクセスを管理できます。

### リポジトリへのアクセスを削除する

Organization のリポジトリからコラボレーターを削除すると、そのコラボレータはリポジトリに対する読み取りおよび書き込みアクセスを失います。 リポジトリがプライベートで、コラボレータがリポジトリをフォークしている場合、そのそのフォークも削除されますが、リポジトリのローカルクローンは保持したままになります。

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

### Organization のリポジトリへの個人のアクセスを管理する

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
4. アクセスのタイプが異なるユーザを管理するには、[**Members**] または [**Outside collaborators**] をクリックします。 ![メンバーまたは外部コラボレーターを Organization に招待するボタン](/assets/images/help/organizations/select-outside-collaborators.png)
5. 管理する個人の名前の右側にある {% octicon "gear" aria-label="The Settings gear" %}ドロップダウン メニューで、[**Manage**] をクリックします。 ![[Manage] アクセスリンク](/assets/images/help/organizations/member-manage-access.png)
6. [Manage access] ページで、リポジトリの隣にある [**Manage access**] をクリックします。 ![リポジトリの [Manage access] ボタン](/assets/images/help/organizations/repository-manage-access.png)
7. この個人がコラボレーターなのか、チーム メンバーとしてリポジトリにアクセスできるのかなど、特定のリポジトリに対するアクセスを確認します。 ![ユーザのリポジトリへのアクセスのマトリクス](/assets/images/help/organizations/repository-access-matrix-for-user.png)

### 参考リンク

{% if currentVersion == "free-pro-team@latest" %}- [リポジトリ内での操作を制限する](/articles/limiting-interactions-with-your-repository){% endif %}
- [Organization のリポジトリ権限レベル](/articles/repository-permission-levels-for-an-organization)
