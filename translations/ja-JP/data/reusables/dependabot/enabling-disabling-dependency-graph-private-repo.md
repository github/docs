リポジトリ管理者は、プライベートリポジトリに対して依存関係グラフを有効または無効にすることができます。

ユーザアカウントまたは Organization が所有するすべてのリポジトリの依存関係グラフを有効または無効にすることもできます。 詳しい情報については「[依存関係グラフの設定](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph)」を参照してください。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. リポジトリ データへの読み取りアクセスを {% data variables.product.product_name %} に許可して依存関係グラフを有効にすることに関するメッセージを読んだうえで、[Dependency Graph] の隣にある [**Enable**] をクリックします。 !["Enable" button for the dependency graph](/assets/images/help/repository/dependency-graph-enable-button.png) 依存関係グラフは、{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}"Code security and analysis（コードのセキュリティと分析）"{% else %}""Security & analysis（セキュリティと分析）"{% endif %}の設定ページの"Dependency Graph（依存関係グラフ）"の隣の**Disable（無効化）**をクリックすれば、いつでも無効化できます。
