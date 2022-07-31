---
title: リポジトリ間の接続を理解する
intro: You can better understand the connections that exist between repositories by viewing a repository's network and forks and the projects that depend on the repository.
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-repository-s-network
  - /articles/viewing-a-repositorys-network
  - /github/visualizing-repository-data-with-graphs/viewing-a-repositorys-network
  - /articles/understanding-connections-between-repositories
  - /articles/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/viewing-the-dependencies-of-a-repository
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/viewing-a-repositorys-network
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/viewing-the-dependencies-of-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Connections between repositories
---

## リポジトリのネットワークを表示する

ネットワークグラフには、ルートリポジトリのブランチとネットワークに固有のコミットを含むフォークのブランチを含む、リポジトリネットワーク全体のブランチ履歴が表示されます。

![リポジトリネットワークグラフ](/assets/images/help/graphs/repo_network_graph.png)

{% tip %}

**ヒント:** 古いブランチを表示するには、グラフ内をクリックしてドラッグします。

{% endtip %}

## ネットワークグラフにアクセスする

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. 左サイドバーで [**Network**] をクリックします。 ![[Network] タブ](/assets/images/help/graphs/network_tab.png)

## リポジトリのフォークをリストする

メンバーグラフには、リポジトリのすべてのフォークが表示されます。

フォークは、リポジトリをフォークしたユーザの名前のアルファベット順に表示されます。 ユーザ名をクリックして、そのユーザの {% data variables.product.product_name %} プロフィール ページにリダイレクトすることも、フォーク名をクリックして、リポジトリの特定のフォークにリダイレクトすることもできます。

{% ifversion fpt or ghec %}

![リポジトリ メンバーグラフ](/assets/images/help/graphs/repo_forks_graph_dotcom.png)

{% else %}

![リポジトリ メンバーグラフ](/assets/images/help/graphs/repo_members_graph.png)

{% endif %}

### メンバーグラフにアクセスする

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. 左サイトバーで [**Forks**] をクリックします。 ![[Forks] タブ](/assets/images/help/graphs/graphs-sidebar-forks-tab.png)

## リポジトリの依存関係を表示する

依存関係グラフを使用して、リポジトリが依存するコードを調べることができます。

ほとんどすべてのソフトウェアは、他の開発者 (サプライチェーンとして知られる) によって開発および保守されているコードに依存しています。 たとえば、ユーティリティ、ライブラリ、フレームワークなどです。 これらの依存関係はコードの不可欠な部分であり、それらのバグや脆弱性がコードに影響を与える可能性があります。 これらの依存関係をレビューして維持することが重要です。

依存関係グラフは、リポジトリの依存関係を視覚化して調査するために最適な方法を提供しています。 詳しい情報については、「[依存関係グラフについて](/code-security/supply-chain-security/about-the-dependency-graph)」および「[リポジトリの依存関係を調べる](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository) 」を参照してください。

依存関係の 1 つにセキュリティの脆弱性が見つかった場合は、{% data variables.product.company_short %} が自動的に警告するようにリポジトリを設定することもできます。 詳しい情報については、「[{% data variables.product.prodname_dependabot_alerts %} について](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」を参照してください。
