---
title: リポジトリ間の接続を理解する
intro: リポジトリのネットワークおよびそのリポジトリに依存するフォークやプロジェクトを表示することで、リポジトリ間に存在する接続をよりよく理解できます。
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
ms.openlocfilehash: f1b92a62d0acf9f31a16ce1b7c57850b87c1bf9c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060067'
---
## リポジトリのネットワークを表示する

ネットワークグラフには、ルートリポジトリのブランチとネットワークに固有のコミットを含むフォークのブランチを含む、リポジトリネットワーク全体のブランチ履歴が表示されます。

![リポジトリネットワークグラフ](/assets/images/help/graphs/repo_network_graph.png)

{% tip %}

**参考:** 古いブランチを表示するには、グラフ内をクリックしてドラッグします。

{% endtip %}

## ネットワークグラフにアクセスする

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. 左側のサイドバーで、 **[ネットワーク]** をクリックします。
![[ネットワーク] タブ](/assets/images/help/graphs/network_tab.png)

## リポジトリのフォークをリストする

メンバーグラフには、リポジトリのすべてのフォークが表示されます。

フォークは、リポジトリをフォークしたユーザの名前のアルファベット順に表示されます。 ユーザ名をクリックして、そのユーザの {% data variables.product.product_name %} プロフィール ページにリダイレクトすることも、フォーク名をクリックして、リポジトリの特定のフォークにリダイレクトすることもできます。

{% ifversion fpt or ghec %}

![リポジトリ メンバーグラフ](/assets/images/help/graphs/repo_forks_graph_dotcom.png)

{% else %}

![リポジトリ メンバーグラフ](/assets/images/help/graphs/repo_members_graph.png)

{% endif %}

### メンバーグラフにアクセスする

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. 左側のサイドバーで、 **[フォーク]** をクリックします。
![[フォーク] タブ](/assets/images/help/graphs/graphs-sidebar-forks-tab.png)

## リポジトリの依存関係を表示する

依存関係グラフを使用して、リポジトリが依存するコードを調べることができます。

ほとんどすべてのソフトウェアは、他の開発者 (サプライチェーンとして知られる) によって開発および保守されているコードに依存しています。 たとえば、ユーティリティ、ライブラリ、フレームワークなどです。 これらの依存関係はコードの不可欠な部分であり、それらのバグや脆弱性がコードに影響を与える可能性があります。 これらの依存関係をレビューして維持することが重要です。

依存関係グラフは、リポジトリの依存関係を視覚化して調査するために最適な方法を提供しています。 詳しくは、「[依存関係グラフについて](/code-security/supply-chain-security/about-the-dependency-graph)」と「[リポジトリの依存関係を調べる](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository)」を参照してください。

依存関係の 1 つにセキュリティの脆弱性が見つかった場合は、{% data variables.product.company_short %} が自動的に警告するようにリポジトリを設定することもできます。 詳細については、「[{% data variables.product.prodname_dependabot_alerts %} について](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」を参照してください。
