---
title: リポジトリへのトラフィックを表示する
intro: フルクローン (フェッチではない)、過去 14 日間の訪問者、参照サイト、トラフィックグラフの人気コンテンツなど、リポジトリへのプッシュアクセスを持つユーザは誰でもそのトラフィックを表示できます。
product: 'This repository insights graph is available in public repositories with {% data variables.product.prodname_free_user %} and {% data variables.product.prodname_free_team %} for organizations, and in public and private repositories with {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, and {% data variables.product.prodname_ghe_cloud %}.{% if currentVersion == "free-pro-team@latest" %} For more information, see "[About repository graphs](/articles/about-repository-graphs)" and "[{% data variables.product.prodname_dotcom %}''s products](/articles/github-s-products)."{% endif %}'
redirect_from:
  - /articles/viewing-traffic-to-a-repository
versions:
  free-pro-team: '*'
topics:
  - Repositories
---

特定のパスが参照されていたリンクから、検索エンジンと {% data variables.product.product_name %} 自体を除く、参照元サイトに移動できます。 人気のあるコンテンツは、トラフィックを発生させた特定のコンテンツにリンクしています。

参照サイトと人気のあるコンテンツは、ビューと一意の訪問者によって並べ替えられます。 フルクローンと訪問者情報は 1 時間ごとに更新され、参照サイトと人気のあるコンテンツセクションは毎日更新されます。 現在地に関係なく、トラフィックグラフのすべてのデータは、UTC+0 タイムゾーンを使用します。

{% tip %}

**ヒント:** トラフィックグラフで特定の日にカーソルを合わせると、その日の正確なデータを表示できます。

{% endtip %}

![ツールチップを使用したリポジトリトラフィックグラフ](/assets/images/help/graphs/repo_traffic_graphs_tooltip_dotcom.png)

### トラフィックグラフにアクセスする

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. 左側のサイドバーで、[**Traffic**] をクリックします。 ![[Traffic] タブ](/assets/images/help/graphs/traffic_tab.png)
