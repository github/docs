{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
{% note %}

**ノート**: メール通知は、{% data variables.product.product_location %}でアウトバウンドメールサポートが有効化されている場合にのみ受信できます。 詳しい情報については、サイト管理者にお問い合わせください。

{% endnote %}
{% endif %}
