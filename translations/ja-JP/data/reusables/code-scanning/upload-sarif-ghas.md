{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}

{% note %}

**ノート:** {% data variables.product.product_name %}で{% data variables.product.prodname_code_scanning %}の結果として表示するためにSARIFデータをアップロードすることは、{% data variables.product.prodname_GH_advanced_security %}が有効化されたOrganizationが所有するリポジトリ{% if currentVersion == "free-pro-team@latest" %}と{% data variables.product.prodname_dotcom_the_website %}上のパブリックリポジトリ{% endif %}でサポートされています。 詳しい情報については「[リポジトリのセキュリティ及び分析の設定の管理](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)」を参照してください。

{% endnote %}

{% endif %}
