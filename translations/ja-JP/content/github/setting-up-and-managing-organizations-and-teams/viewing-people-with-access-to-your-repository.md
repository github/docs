---
title: 自分のリポジトリにアクセスできる人を表示する
intro: 'Organization のオーナーは、Organization 内のリポジトリへの人のアクセスを表示できます。 {% data variables.product.prodname_ghe_cloud %} または {% data variables.product.prodname_ghe_server %} を使用して、Organization のオーナーは、リポジトリにアクセスできる人の CSV リストをエクスポートすることもできます。'
redirect_from:
  - /articles/viewing-people-with-access-to-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---

管理者はこの情報を使用して、社外の人の支援、コンプライアンスのためのデータ収集、およびその他の一般的なセキュリティチェックを行うことができます。

![リポジトリユーザの権限リスト](/assets/images/help/repository/repository-permissions-list.png)

### 自分のリポジトリにアクセスできる人を表示する

{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**注釈**: リポジトリにアクセスできる Team と人について、組み合わせた概要を確認することもできます。 詳細は、「[リポジトリへのアクセス権を持つ Team と人を管理する](/github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository)」を参照してください。

{% endnote %}
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.accessing-repository-people %}

### リポジトリへのアクセス権を持つ人のリストをエクスポートする

{% data variables.product.prodname_ghe_cloud %} または {% data variables.product.prodname_ghe_server %} の Organization のオーナーは、リポジトリにアクセスできる人の CSV リストをエクスポートできます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.accessing-repository-people %}
4. [**Export CSV**] をクリックします。 ![リポジトリサイドバーの人タブ](/assets/images/help/repository/export-repository-permissions.png)
