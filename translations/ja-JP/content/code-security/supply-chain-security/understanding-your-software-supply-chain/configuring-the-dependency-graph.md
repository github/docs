---
title: Configuring the dependency graph
intro: You can allow users to identify their projects' dependencies by enabling the dependency graph.
redirect_from:
  - /code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: issue-4864
  ghec: '*'
type: how_to
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Configure dependency graph
---

## 依存関係グラフについて

{% data reusables.dependabot.about-the-dependency-graph %}

詳しい情報については、「[依存関係グラフについて](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)」を参照してください。

{% ifversion fpt or ghec %} ## About configuring the dependency graph {% endif %}
{% ifversion fpt or ghec %}依存関係グラフを生成するには、{% data variables.product.product_name %} がリポジトリの依存関係のマニフェストおよびロックファイルに読み取りアクセスできる必要があります。 依存関係グラフは、パブリックリポジトリに対しては常に自動的に生成され、プライベートリポジトリに対しては有効化を選択することができます。 For more information on viewing the dependency graph, see "[Exploring the dependencies of a repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)."{% endif %}

{% ifversion ghes or ghae %} ## Enabling the dependency graph
{% data reusables.dependabot.ghes-ghae-enabling-dependency-graph %}{% endif %}{% ifversion fpt or ghec %}

### プライベートリポジトリの依存関係グラフを有効化および無効化する

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}
{% endif %}

依存関係グラフを初めて有効化すると、サポートされているエコシステムのマニフェストおよびロックファイルがすぐに解析されます。 グラフは通常数分以内に入力されますが、多くの依存関係を持つリポジトリの場合は時間がかかる場合があります。 有効にすると、リポジトリにプッシュするたびに{% ifversion fpt or ghec %}、またグラフ中の他のリポジトリにプッシュするたびに{% endif %}、グラフが自動的に更新されます。

## 参考リンク

{% ifversion ghec %}- "[Viewing insights for your organization](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)"{% endif %}
- "[Viewing {% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- 「[脆弱性のある依存関係の検出のトラブルシューティング](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)」
