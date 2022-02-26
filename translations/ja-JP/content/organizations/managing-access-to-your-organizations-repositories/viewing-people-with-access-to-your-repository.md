---
title: 自分のリポジトリにアクセスできる人を表示する
intro: 'Organization のオーナーは、Organization 内のリポジトリへの人のアクセスを表示できます。 {% data variables.product.prodname_ghe_cloud %} または {% data variables.product.prodname_ghe_server %} を使用して、Organization のオーナーは、リポジトリにアクセスできる人の CSV リストをエクスポートすることもできます。'
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
---

管理者はこの情報を使用して、社外の人の支援、コンプライアンスのためのデータ収集、およびその他の一般的なセキュリティチェックを行うことができます。
{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}
![アクセス管理の概要](/assets/images/help/repository/manage-access-overview.png)
{% else %}
![リポジトリユーザの権限リスト](/assets/images/help/repository/repository-permissions-list.png)
{% endif %}
## 自分のリポジトリにアクセスできる人を表示する

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}
リポジトリ設定では、リポジトリへのアクセス権を持つTeamと人が組み合わさった概要を見ることができます。 詳細は、「[リポジトリへのアクセス権を持つ Team と人を管理する](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#about-access-management-for-repositories)」を参照してください。
{% else %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.accessing-repository-people %}
{% endif %}
## リポジトリへのアクセス権を持つ人のリストをエクスポートする

{% data variables.product.prodname_ghe_cloud %} または {% data variables.product.prodname_ghe_server %} の Organization のオーナーは、リポジトリにアクセスできる人の CSV リストをエクスポートできます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.accessing-repository-people %}
4. [**Export CSV**] をクリックします。 ![リポジトリサイドバーの人タブ](/assets/images/help/repository/export-repository-permissions.png)
