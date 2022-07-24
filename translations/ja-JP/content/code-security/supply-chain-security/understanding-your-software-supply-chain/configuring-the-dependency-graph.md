---
title: 依存関係グラフの設定
intro: 依存関係グラフを有効にすることによって、ユーザが自分のプロジェクトの依存関係を特定できるようになります。
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
shortTitle: 依存関係グラフの設定
---

## 依存関係グラフについて

{% data reusables.dependabot.about-the-dependency-graph %}

詳しい情報については、「[依存関係グラフについて](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)」を参照してください。

{% ifversion fpt or ghec %}
## 依存関係グラフの設定について
依存関係グラフを生成するには、{% data variables.product.product_name %} がリポジトリの依存関係のマニフェストおよびロックファイルに読み取りアクセスできる必要があります。 依存関係グラフは、パブリックリポジトリに対しては常に自動的に生成され、プライベートリポジトリに対しては有効化を選択することができます。 依存関係グラフの表示に関する詳しい情報については「[リポジトリの依存関係の調査](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)」を参照してください。

{% data reusables.dependency-submission.dependency-submission-link %}
{% endif %}

{% ifversion ghes %} ## 依存関係グラフの有効化
{% data reusables.dependabot.ghes-ghae-enabling-dependency-graph %}{% endif %}{% ifversion fpt or ghec %}

### プライベートリポジトリの依存関係グラフを有効化および無効化する

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}
{% endif %}

依存関係グラフを初めて有効化すると、サポートされているエコシステムのマニフェストおよびロックファイルがすぐに解析されます。 グラフは通常数分以内に入力されますが、多くの依存関係を持つリポジトリの場合は時間がかかる場合があります。 有効にすると、リポジトリにプッシュするたびに{% ifversion fpt or ghec %}、またグラフ中の他のリポジトリにプッシュするたびに{% endif %}、グラフが自動的に更新されます。

{% ifversion ghes %}
{% ifversion dependency-submission-api %}{% data reusables.dependency-submission.dependency-submission-link %}{% endif %}
{% endif %}

## 参考リンク

{% ifversion ghec %}- 「[Organizationのインサイトの表示](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)」{% endif %}
- 「[{% data variables.product.prodname_dependabot_alerts %}の表示と更新](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)」
- 「[脆弱性のある依存関係の検出のトラブルシューティング](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)」
