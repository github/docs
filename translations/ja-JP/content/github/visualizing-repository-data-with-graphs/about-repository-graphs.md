---
title: リポジトリグラフについて
intro: リポジトリグラフは、リポジトリのデータを見たり分析したりするための役に立ちます。
redirect_from:
  - /articles/using-graphs/
  - /articles/about-repository-graphs
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositories
---

A repository's graphs give you information on {% if currentVersion == "free-pro-team@latest" %} traffic, projects that depend on the repository,{% endif %} contributors and commits to the repository, and a repository's forks and network. 自分が管理しているリポジトリがある場合、このデータを使用すれば、リポジトリを誰が使っているのか、なぜ使っているのかをよりよく知ることができます。

{% if currentVersion == "free-pro-team@latest" %}

リポジトリグラフの中には {% data variables.product.prodname_free_user %} のパブリックリポジトリでしか利用できないものもあります。
- パルス
- コントリビューター
- トラフィック
- コミット
- コードの更新頻度
- ネットワーク

その他のリポジトリグラフは、すべてのリポジトリで利用できます。 {% data variables.product.prodname_pro %}、{% data variables.product.prodname_team %}、および {% data variables.product.prodname_ghe_cloud %} では、パブリックおよびプライベートリポジトリですべてのリポジトリグラフを利用できます。 {% data reusables.gated-features.more-info %}

{% endif %}

### 参考リンク

- [基本的なリポジトリデータへのアクセス](/articles/accessing-basic-repository-data)
- [リポジトリの内容の変更の分析](/articles/analyzing-changes-to-a-repository-s-content)
- [リポジトリ間のコネクションを理解する](/articles/understanding-connections-between-repositories)
