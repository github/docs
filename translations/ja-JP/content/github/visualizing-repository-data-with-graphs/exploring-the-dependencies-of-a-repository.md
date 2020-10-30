---
title: Exploring the dependencies of a repository
intro: 'Using the dependency graph, you can see the packages your project depends on{% if currentVersion == "free-pro-team@latest" %} and the repositories that depend on it{% endif %}. また、その依存関係で脆弱性が検出されると、それも表示されます。'
redirect_from:
  - /articles/listing-the-packages-that-a-repository-depends-on
  - /github/visualizing-repository-data-with-graphs/listing-the-packages-that-a-repository-depends-on
  - /articles/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-and-dependents-of-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 依存関係グラフの表示

{% data reusables.repositories.enable-security-alerts %}

The dependency graph shows the dependencies{% if currentVersion == "free-pro-team@latest" %} and dependents{% endif %} of your repository. For information about the detection of dependencies and which ecosystems are supported, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}{% if currentVersion == "free-pro-team@latest" %}
4. オプションとして、[Dependency graph] で [**Dependents**] をクリックします。 ![Dependents tab on the dependency graph page](/assets/images/help/graphs/dependency-graph-dependents-tab.png){% endif %}

#### 依存関係ビュー

{% if currentVersion == "free-pro-team@latest" %}
依存関係はエコシステム別にグループ化されます。 依存関係を拡張すると、その依存関係を表示できます。 For dependencies on public repositories hosted on {% data variables.product.product_name %}, you can also click a dependency to view the repository. Dependencies on private repositories, private packages, or unrecognized files are shown in plain text.

If vulnerabilities have been detected in the repository, these are shown at the top of the view for users with access to {% data variables.product.prodname_dependabot_alerts %}.

![依存関係グラフ](/assets/images/help/graphs/dependencies_graph.png)

{% endif %}

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.21" %}
Any direct and indirect dependencies that are specified in the repository's manifest or lock files are listed, grouped by ecosystem. If vulnerabilities have been detected in the repository, these are shown at the top of the view for users with access to {% data variables.product.prodname_dependabot_short %} alerts.

{% note %}

**Note:** {% data variables.product.prodname_ghe_server %} does not populate the **Dependents** view.

{% endnote %}

![依存関係グラフ](/assets/images/help/graphs/dependencies_graph_server.png)

{% note %}

**Note:** {% data variables.product.prodname_ghe_server %} does not populate the **Dependents** view.

{% endnote %}

{% endif %}

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.22" %}
Any direct and indirect dependencies that are specified in the repository's manifest or lock files are listed, grouped by ecosystem. If vulnerabilities have been detected in the repository, these are shown at the top of the view for users with access to security alerts.

{% note %}

**Note:** {% data variables.product.prodname_ghe_server %} does not populate the **Dependents** view.

{% endnote %}

![依存関係グラフ](/assets/images/help/graphs/dependencies_graph_server.png)

{% note %}

**Note:** {% data variables.product.prodname_ghe_server %} does not populate the **Dependents** view.

{% endnote %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### 依存ビュー

パブリックリポジトリの場合、他のリポジトリによってどう使用されているかが、依存ビューに表示されます。 パッケージマネージャーにライブラリを含むリポジトリのみを表示するには、依存リポジトリのリストのすぐ上にある「**NUMBER Packages**」をクリックします。 依存の数は概数であり、リストされている依存と一致しないことがあります。

![依存グラフ](/assets/images/help/graphs/dependents_graph.png)

### プライベートリポジトリの依存関係グラフを有効化および無効化する

リポジトリ管理者は、プライベートリポジトリに対して依存関係グラフを有効または無効にすることができます。

You can also enable or disable the dependency graph for all repositories owned by your user account or organization. 詳しい情報については、「[ユーザーアカウントのセキュリティおよび分析設定を管理する](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)」または「[Organization のセキュリティおよび分析設定を管理する](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)」を参照してください。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. リポジトリ データへの読み取りアクセスを {% data variables.product.product_name %} に許可して依存関係グラフを有効にすることに関するメッセージを読んだうえで、[Dependency Graph] の隣にある [**Enable**] をクリックします。 ![依存関係グラフの [Enable] ボタン](/assets/images/help/repository/dependency-graph-enable-button.png)

[Security & analysis] タブで [Dependency Graph] の隣にある [**Disable**] をクリックすれば、依存関係グラフはいつでも無効にできます。
{% endif %}

### 依存関係グラフのトラブルシューティング

依存関係グラフが空の場合は、依存関係を含むファイルに問題があるかもしれません。 ファイルがファイルタイプに合わせて適切にフォーマットされているかをチェックしてください。

{% if currentVersion == "free-pro-team@latest" %}
ファイルのフォーマットが正しい場合は、大きさをチェックします。 あなたが {% data variables.product.prodname_enterprise %} ユーザでない限り、依存関係グラフは 0.5 MB を超える個々のマニフェストおよびロックファイルを無視します。 デフォルトでは、最大 20 個のマニフェストまたはロックファイルが処理されるので、リポジトリのサブディレクトリで依存関係を小さいファイルに分割することができます。{% endif %}

マニフェストまたはロックファイルが処理されない場合、その依存関係は依存関係グラフから省略され、脆弱な依存関係はチェックされなくなります。

### 参考リンク

- [依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph){% if currentVersion == "free-pro-team@latest" %}
- "[Viewing insights for your organization](/github/setting-up-and-managing-organizations-and-teams/viewing-insights-for-your-organization)"
- [リポジトリ内の脆弱な依存関係を表示・更新する](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)
- [{% data variables.product.product_name %}によるデータの利用と保護の方法の理解](/github/understanding-how-github-uses-and-protects-your-data)
{% endif %}
