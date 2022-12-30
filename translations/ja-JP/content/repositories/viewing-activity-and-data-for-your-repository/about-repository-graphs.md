---
title: リポジトリグラフについて
intro: リポジトリグラフは、リポジトリのデータを見たり分析したりするための役に立ちます。
redirect_from:
  - /articles/using-graphs
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
ms.openlocfilehash: a8e2b228e4729e0c86d0234aadc7f0eebab7d2d5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145132054'
---
リポジトリのグラフは、{% ifversion fpt or ghec %}トラフィック、リポジトリに依存するプロジェクト、{% endif %}リポジトリのコントリビューターとコミット、リポジトリのフォークやネットワークに関する情報を提供します。 自分が管理しているリポジトリがある場合、このデータを使用すれば、リポジトリを誰が使っているのか、なぜ使っているのかをよりよく知ることができます。

{% ifversion fpt or ghec %}

リポジトリグラフの中には {% data variables.product.prodname_free_user %} のパブリックリポジトリでしか利用できないものもあります。
- パルス
- 共同作成者
- トラフィック
- コミット
- コードの更新頻度
- ネットワーク

その他のリポジトリグラフは、すべてのリポジトリで利用できます。 {% data variables.product.prodname_pro %}、{% data variables.product.prodname_team %}、および {% data variables.product.prodname_ghe_cloud %} では、パブリックおよびプライベートリポジトリですべてのリポジトリグラフを利用できます。 {% data reusables.gated-features.more-info %}

{% endif %}
