{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**ノート:** プライベート及びインターナルリポジトリについては、{% data variables.product.prodname_code_scanning %}は{% data variables.product.prodname_GH_advanced_security %}機能がそのリポジトリで有効化されている場合に利用できます。 `Advanced Security must be enabled for this repository to use code scanning（Code Scanningを利用するためにはAdvanced Securityが有効になっていなければなりません）`というエラーが表示されたなら、{% data variables.product.prodname_GH_advanced_security %}が有効になっているかをチェックしてください。 詳しい情報については「[リポジトリのセキュリティ及び分析の設定の管理](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)」を参照してください。

{% endnote %}
{% endif %}
