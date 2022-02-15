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

{% ifversion ghes or ghae-issue-4864 %}
Enterprise owners can configure the dependency graph at an enterprise level. For more information, see "[Enabling the dependency graph and {% data variables.product.prodname_dependabot_alerts %} for your enterprise](/admin/configuration/configuring-github-connect/enabling-the-dependency-graph-and-dependabot-alerts-for-your-enterprise)."
{% endif %}

### 依存関係ビュー

{% ifversion fpt or ghec %}
依存関係はエコシステム別にグループ化されます。 依存関係を拡張すると、その依存関係を表示できます。 {% data variables.product.product_name %}でホストされているパブリックリポジトリの依存関係については、クリックしてそのリポジトリを見ることもできます。 プライベートリポジトリ、プライベートパッケージ、認識できないファイルの依存関係は、プレーンテキストで表示されます。

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

リポジトリ管理者は、プライベートリポジトリに対して依存関係グラフを有効または無効にすることができます。

ユーザアカウントまたは Organization が所有するすべてのリポジトリの依存関係グラフを有効または無効にすることもできます。 詳しい情報については、「[ユーザーアカウントのセキュリティおよび分析設定を管理する](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)」または「[Organization のセキュリティおよび分析設定を管理する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. リポジトリ データへの読み取りアクセスを {% data variables.product.product_name %} に許可して依存関係グラフを有効にすることに関するメッセージを読んだうえで、[Dependency Graph] の隣にある [**Enable**] をクリックします。 ![依存関係グラフの [Enable] ボタン](/assets/images/help/repository/dependency-graph-enable-button.png)

[Security & analysis] タブで [Dependency Graph] の隣にある [**Disable**] をクリックすれば、依存関係グラフはいつでも無効にできます。

## "Used by"パッケージの変更

依存関係グラフが有効になっている場合、サポートされているパッケージエコシステム上で公開されているパッケージをリポジトリが含んでいると、{% data variables.product.prodname_dotcom %}はリポジトリの**Code**タブのサイドバー内の"Used by"セクションに表示します。 サポートされているパッケージエコシステムに関する詳しい情報については「[依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)」を参照してください。

"Used by"セクションは、見つかったパッケージに対する公開参照数を示し、依存物のプロジェクトのオーナーのアバターを表示します。

!["Used by"サイドバーセクション](/assets/images/help/repository/used-by-section.png)

このセクション内のアイテムをクリックすると、依存関係グラフの**Dependents（依存物）**タブに移動します。

"Used by"セクションは、リポジトリからの単一のパッケージを表します。 複数のパッケージを含むリポジトリへの管理者権限を持っているなら、"Used by"セクションがどのパッケージを表すのかを選択できます。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. "Configure security and analysis features（セキュリティと分析機能の設定）"の下で、"Used by counter"セクション内のドロップダウンメニューをクリックし、パッケージを選択してください。 !["Used by"パッケージの選択](/assets/images/help/repository/choose-used-by-package.png)

{% endif %}

## 依存関係グラフのトラブルシューティング

依存関係グラフが空の場合は、依存関係を含むファイルに問題があるかもしれません。 ファイルがファイルタイプに合わせて適切にフォーマットされているかをチェックしてください。

{% ifversion fpt or ghec %}
ファイルのフォーマットが正しい場合は、大きさをチェックします。 あなたが {% data variables.product.prodname_enterprise %} ユーザでない限り、依存関係グラフは 1.5 MB を超える個々のマニフェストおよびロックファイルを無視します。 デフォルトでは、最大 20 個のマニフェストまたはロックファイルが処理されるので、リポジトリのサブディレクトリで依存関係を小さいファイルに分割することができます。{% endif %}

マニフェストまたはロックファイルが処理されない場合、その依存関係は依存関係グラフから省略され、脆弱な依存関係はチェックされなくなります。

## 参考リンク

- [依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)
- [リポジトリ内の脆弱な依存関係を表示・更新する](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository){% ifversion fpt or ghec %}
- [Organization のインサイトを表示する](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)
- [{% data variables.product.prodname_dotcom %}によるデータの利用と保護の方法の理解](/get-started/privacy-on-github)
{% endif %}
