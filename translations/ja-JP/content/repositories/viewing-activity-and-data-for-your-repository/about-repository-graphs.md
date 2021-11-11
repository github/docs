---
title: リポジトリグラフについて
intro: リポジトリグラフは、リポジトリのデータを見たり分析したりするための役に立ちます。
redirect_from:
  - /articles/using-graphs/
  - /articles/about-repository-graphs
  - /github/visualizing-repository-data-with-graphs/about-repository-graphs
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/about-repository-graphs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

リポジトリグラフは、{% ifversion fpt or ghec %}トラフィック、リポジトリに依存するプロジェクト、{% endif %}リポジトリのコントリビューターとコミット、そしてリポジトリのフォークやネットワークに関する情報を提供します。 自分が管理しているリポジトリがある場合、このデータを使用すれば、リポジトリを誰が使っているのか、なぜ使っているのかをよりよく知ることができます。

{% ifversion fpt or ghec %}

リポジトリグラフの中には {% data variables.product.prodname_free_user %} のパブリックリポジトリでしか利用できないものもあります。
- パルス
- コントリビューター
- トラフィック
- コミット
- コードの更新頻度
- ネットワーク

その他のリポジトリグラフは、すべてのリポジトリで利用できます。 {% data variables.product.prodname_pro %}、{% data variables.product.prodname_team %}、および {% data variables.product.prodname_ghe_cloud %} では、パブリックおよびプライベートリポジトリですべてのリポジトリグラフを利用できます。 {% data reusables.gated-features.more-info %}

{% endif %}
