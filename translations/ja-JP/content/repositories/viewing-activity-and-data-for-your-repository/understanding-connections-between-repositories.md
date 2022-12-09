---
title: リポジトリ間の接続を理解する
intro: ネットワーク グラフとフォークの一覧を使用して、フォークのネットワークを理解します。
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
ms.openlocfilehash: 46cc440093c3ca8dc0952933847a6f04b0446661
ms.sourcegitcommit: 468a0323fa636517985a3e08e2772dbb0545cab8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/03/2022
ms.locfileid: '148191359'
---
## リポジトリのネットワークを表示する

ネットワーク グラフには、フォーク ブランチを含む、リポジトリ ネットワーク全体のブランチ履歴が表示されます。 このグラフは最新のコミットのタイムラインであり、最近ブランチにプッシュされたものが最大 100 個まで表示されます。 最初の行は日付を参照し、最初の列はブランチ所有者を参照します。 方向キーやその他のキーボード ショートカットを使用して、グラフをより簡単に移動できます。 それらは、グラフの下の [Keyboard shortcuts available] ポップアップに表示されます。


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

フォークは、リポジトリをフォークしたユーザーの組織または名前のアルファベット順に表示されます。 組織またはユーザー名をクリックして、その組織またはユーザーの {% data variables.product.product_name %} プロファイル ページに移動したり、またはフォーク名をクリックして、リポジトリの特定のフォークに移動したりできます。

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
