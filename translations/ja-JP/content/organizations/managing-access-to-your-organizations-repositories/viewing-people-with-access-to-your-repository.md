---
title: 自分のリポジトリにアクセスできる人を表示する
intro: 'Organization内のリポジトリにアクセスできる人のリストを表示{% ifversion ghec or ghes or ghae %}及びエクスポート{% endif %}できます。'
redirect_from:
  - /articles/viewing-people-with-access-to-your-repository
  - /github/setting-up-and-managing-organizations-and-teams/viewing-people-with-access-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: アクセス権を持つ人の表示
permissions: Organization owners can view people with access to a repository.
---

## リポジトリにアクセスできる人のリストについて

この情報は、外部の人の支援、コンプライアンスのデータ収集、その他の一般的なセキュリティチェックに利用できます。

{% ifversion fpt %}
{% data variables.product.prodname_ghe_cloud %}を使うOrganizationは、リポジトリにアクセスできる人のCSVリストをエクスポートすることもできます。 詳しい情報については[{% data variables.product.prodname_ghe_cloud %}のドキュメンテーション](/enterprise-cloud@latest/organizations/managing-access-to-your-organizations-repositories/viewing-people-with-access-to-your-repository)を参照してください。
{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}
![アクセス管理の概要](/assets/images/help/repository/manage-access-overview.png)
{% else %}
![リポジトリユーザの権限リスト](/assets/images/help/repository/repository-permissions-list.png)
{% endif %}
## 自分のリポジトリにアクセスできる人を表示する

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}
リポジトリ設定では、リポジトリへのアクセス権を持つTeamと人が組み合わさった概要を見ることができます。 詳しい情報については「[リポジトリへのアクセスを持つTeamや人の管理](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#about-access-management-for-repositories)」を参照してください。
{% else %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.accessing-repository-people %}
{% endif %}

{% ifversion ghec or ghes or ghae %}
## リポジトリへのアクセス権を持つ人のリストをエクスポートする

{% ifversion ghec %}
{% note %}

**ノート:** {% data variables.product.prodname_ghe_cloud %}を使うOrganizationだけが、リポジトリにアクセスできる人のリストをエクスポートできます。 {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.accessing-repository-people %}
4. [**Export CSV**] をクリックします。 ![リポジトリサイドバーの人タブ](/assets/images/help/repository/export-repository-permissions.png)
{% endif %}
