---
title: 依存関係グラフを設定する
intro: 依存関係グラフを有効にすることで、ユーザーはプロジェクトの依存関係を識別できます。
redirect_from:
  - /code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Configure dependency graph
ms.openlocfilehash: 24dcaac4ddd994d544f6caa7d04529e1e4a5d569
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146684078'
---
## 依存関係グラフについて

{% data reusables.dependabot.about-the-dependency-graph %}  

詳細については、「[依存関係グラフの概要](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)」を参照してください。

{% ifversion fpt or ghec %}
## 依存関係グラフの構成について 
依存関係グラフを生成するには、{% data variables.product.product_name %} がリポジトリの依存関係のマニフェストとロックファイルに読み取りアクセスできる必要があります。 依存関係グラフは、パブリックリポジトリに対しては常に自動的に生成され、プライベートリポジトリに対しては有効化を選択することができます。 依存関係グラフの表示に関する詳細については、「[リポジトリの依存関係の調査](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)」を参照してください。

{% data reusables.dependency-submission.dependency-submission-link %} {% endif %}

{% ifversion ghes %} ## 依存関係グラフ {% data reusables.dependabot.ghes-ghae-enabling-dependency-graph %}{% endif %}{% ifversion fpt or ghec %} の有効化

### プライベートリポジトリの依存関係グラフを有効化および無効化する

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %} {% endif %}

依存関係グラフを初めて有効化すると、サポートされているエコシステムのマニフェストおよびロックファイルがすぐに解析されます。 グラフは通常数分以内に入力されますが、多くの依存関係を持つリポジトリの場合は時間がかかる場合があります。 有効にすると、リポジトリにプッシュするたびに{% ifversion fpt or ghec %}、またグラフ中の他のリポジトリにプッシュするたびに{% endif %}、グラフが自動的に更新されます。

{% ifversion ghes %} {% ifversion dependency-submission-api %}{% data reusables.dependency-submission.dependency-submission-link %}{% endif %} {% endif %}

## 参考資料

{% ifversion ghec %}- 「[Organization のインサイトを表示する](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)」{% endif %}
- "[{% data variables.product.prodname_dependabot_alerts %} の表示と更新](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"
- [脆弱性のある依存関係の検出のトラブルシューティング](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)
