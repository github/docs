---
title: リポジトリの依存関係を調べる
intro: '依存関係グラフを使用すると、プロジェクトが依存しているパッケージ{% ifversion fpt or ghec %}と、そのプロジェクトに依存しているリポジトリ{% endif %}を確認できます。 また、その依存関係で脆弱性が検出されると、それも表示されます。'
redirect_from:
  - /articles/listing-the-packages-that-a-repository-depends-on
  - /github/visualizing-repository-data-with-graphs/listing-the-packages-that-a-repository-depends-on
  - /articles/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-and-dependents-of-a-repository
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository
  - /code-security/supply-chain-security/exploring-the-dependencies-of-a-repository
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
shortTitle: 依存関係の調査
---

<!--For this article in earlier GHES versions, see /content/github/visualizing-repository-data-with-graphs-->

## 依存関係グラフの表示

依存関係グラフには、リポジトリの依存関係{% ifversion fpt or ghec %}と依存物{% endif %}が表示されます。 依存関係の検出とサポートされているエコシステムについては、「[依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)」を参照してください。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}{% ifversion fpt or ghec %}
4. オプションとして、[Dependency graph] で [**Dependents**] をクリックします。 ![Dependents tab on the dependency graph page](/assets/images/help/graphs/dependency-graph-dependents-tab.png){% endif %}

{% ifversion ghes %}
Enterprise owners can configure the dependency graph at an enterprise level. For more information, see "[Enabling the dependency graph for your enterprise](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)."
{% endif %}

### 依存関係ビュー

{% ifversion fpt or ghec %}
依存関係はエコシステム別にグループ化されます。 依存関係を拡張すると、その依存関係を表示できます。  プライベートリポジトリ、プライベートパッケージ、認識できないファイルの依存関係は、プレーンテキストで表示されます。 If the package manager for the dependency is in a public repository, {% data variables.product.product_name %} will display a link to that repository.

リポジトリで脆弱性が検出された場合は、{% data variables.product.prodname_dependabot_alerts %}にアクセスできるユーザに、ビューの上部で表示されます。

![依存関係グラフ](/assets/images/help/graphs/dependencies_graph.png)

{% endif %}

{% ifversion ghes or ghae %}
リポジトリのマニフェストもしくはロックファイルで指定されている直接あるいは間接の依存関係は、エコシステムでグループ化されてリストされます。 リポジトリで脆弱性が検出された場合は、{% data variables.product.prodname_dependabot_alerts %}にアクセスできるユーザに、ビューの上部で表示されます。

![依存関係グラフ](/assets/images/help/graphs/dependencies_graph_server.png)

{% note %}

**ノート:** {% data variables.product.product_name %}は**Dependents（依存物）**ビューを表示しません。

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}
### 依存ビュー

パブリックリポジトリの場合、他のリポジトリによってどう使用されているかが、依存ビューに表示されます。 パッケージマネージャーにライブラリを含むリポジトリのみを表示するには、依存リポジトリのリストのすぐ上にある「**NUMBER Packages**」をクリックします。 依存の数は概数であり、リストされている依存と一致しないことがあります。

![依存グラフ](/assets/images/help/graphs/dependents_graph.png)

## プライベートリポジトリの依存関係グラフを有効化および無効化する

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}

## "Used by"パッケージの変更

You may notice some repositories have a "Used by" section in the sidebar of the **Code** tab. Your repository will have a "Used by" section if:
  * The dependency graph is enabled for the repository (see the above section for more details).
  * Your repository contains a package that is published on a [supported package ecosystem](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems).
  * Within the ecosystem, your package has a link to a _public_ repository where the source is stored.

"Used by"セクションは、見つかったパッケージに対する公開参照数を示し、依存物のプロジェクトのオーナーのアバターを表示します。

!["Used by"サイドバーセクション](/assets/images/help/repository/used-by-section.png)

このセクション内のアイテムをクリックすると、依存関係グラフの**Dependents（依存物）**タブに移動します。

"Used by"セクションは、リポジトリからの単一のパッケージを表します。 複数のパッケージを含むリポジトリへの管理者権限を持っているなら、"Used by"セクションがどのパッケージを表すのかを選択できます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Under "Code security and analysis", click the drop-down menu in the "Used by counter" section and choose a package. !["Used by"パッケージの選択](/assets/images/help/repository/choose-used-by-package.png)

{% endif %}

## 依存関係グラフのトラブルシューティング

依存関係グラフが空の場合は、依存関係を含むファイルに問題があるかもしれません。 ファイルがファイルタイプに合わせて適切にフォーマットされているかをチェックしてください。

{% ifversion fpt or ghec %}
ファイルのフォーマットが正しい場合は、大きさをチェックします。 あなたが {% data variables.product.prodname_enterprise %} ユーザでない限り、依存関係グラフは 1.5 MB を超える個々のマニフェストおよびロックファイルを無視します。 デフォルトでは、最大 20 個のマニフェストまたはロックファイルが処理されるので、リポジトリのサブディレクトリで依存関係を小さいファイルに分割することができます。{% endif %}

マニフェストまたはロックファイルが処理されない場合、その依存関係は依存関係グラフから省略され、脆弱な依存関係はチェックされなくなります。

## 参考リンク

- [依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)
- 「[脆弱性のある依存関係に対する{% data variables.product.prodname_dependabot_alerts %}の表示](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)」{% ifversion ghec %}
- "[Viewing insights for your organization](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)"{% endif %}{% ifversion fpt or ghec %}
- [{% data variables.product.prodname_dotcom %}によるデータの利用と保護の方法の理解](/get-started/privacy-on-github)
{% endif %}
