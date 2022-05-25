リポジトリ管理者は、プライベートリポジトリに対して依存関係グラフを有効または無効にすることができます。

ユーザアカウントまたは Organization が所有するすべてのリポジトリの依存関係グラフを有効または無効にすることもできます。 For more information, see "[Configuring the dependency graph](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. リポジトリ データへの読み取りアクセスを {% data variables.product.product_name %} に許可して依存関係グラフを有効にすることに関するメッセージを読んだうえで、[Dependency Graph] の隣にある [**Enable**] をクリックします。 !["Enable" button for the dependency graph](/assets/images/help/repository/dependency-graph-enable-button.png) You can disable the dependency graph at any time by clicking **Disable** next to "Dependency Graph" on the settings page for {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}"Code security and analysis."{% else %}"Security & analysis."{% endif %}
