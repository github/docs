---
title: リポジトリの依存関係を調べる
intro: '依存関係グラフを使用すると、プロジェクトが依存しているパッケージ{% ifversion fpt %}とそれに依存しているリポジトリを確認できます{% endif %}。 また、その依存関係で脆弱性が検出されると、それも表示されます。'
versions:
  ghes: <=2.22
topics:
  - Repositories
redirect_from:
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/exploring-the-dependencies-of-a-repository
shortTitle: Explore dependencies
---

<!--See /content/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository for the latest version of this article -->

## 依存関係グラフの表示

{% data reusables.repositories.enable-security-alerts %}

依存関係グラフには、リポジトリの依存関係が表示されます。 依存関係の検出とサポートされているエコシステムについては、「[依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)」を参照してください。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}

### 依存関係ビュー

{% ifversion ghes %}
リポジトリのマニフェストもしくはロックファイルで指定されている直接あるいは間接の依存関係は、エコシステムでグループ化されてリストされます。 リポジトリで脆弱性が検出された場合は、{% data variables.product.prodname_dependabot_alerts %}にアクセスできるユーザに、ビューの上部で表示されます。

![依存関係グラフ](/assets/images/help/graphs/dependencies_graph_server.png)

{% note %}

**ノート:** {% data variables.product.prodname_ghe_server %}は**Dependents（依存物）**ビューを表示しません。

{% endnote %}

{% endif %}


## 依存関係グラフのトラブルシューティング

依存関係グラフが空の場合は、依存関係を含むファイルに問題があるかもしれません。 ファイルがファイルタイプに合わせて適切にフォーマットされているかをチェックしてください。

マニフェストまたはロックファイルが処理されない場合、その依存関係は依存関係グラフから省略され、脆弱な依存関係はチェックされなくなります。
