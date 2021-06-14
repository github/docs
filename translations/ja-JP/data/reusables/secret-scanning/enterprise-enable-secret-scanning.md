{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}

{% note %}

**ノート:** この機能を使う前には、サイト管理者が{% data variables.product.product_location %}の{% data variables.product.prodname_secret_scanning %}を有効化していなければなりません。 詳しい情報については「[アプライアンスのための{% data variables.product.prodname_secret_scanning %}の設定](/enterprise/admin/configuration/configuring-secret-scanning-for-your-appliance)」を参照してください。

{% endnote %}

{% endif %}
