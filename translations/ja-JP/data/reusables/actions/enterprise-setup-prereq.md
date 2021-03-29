{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}

#### {% data variables.product.prodname_ghe_server %}上でのセルフホストランナーの利用

{% data variables.product.prodname_ghe_server %}上でセルフホストランナーと合わせてセットアップアクション（`actions/setup-LANGUAGE`のような）を使う場合、インターネットアクセスを持たないランナー上にツールキャッシュをセットアップする必要があるかもしれません。 詳しい情報については「[インターネットアクセスを持たないセルフホストランナー上へのツールキャッシュのセットアップ](/enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access)」を参照してください。

{% endif %}
