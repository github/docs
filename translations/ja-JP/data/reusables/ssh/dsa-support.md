{% note %}

**ノート：** {% if currentVersion != "free-pro-team@latest" or currentVersion ver_lt "enterprise-server@2.19" %}DSAキーはOpenSSH 7.0で非推奨となりました。 使用しているオペレーティングシステムがOpenSSHを使っているなら、SSHをセットアップする際にRSAキーなどの別の種類のキーを使う必要があります。 たとえば、使用しているオペレーティングシステムがmacOS Sierraであるなら、RSAキーを使ってSSHをセットアップできます。{% else %}DSAキー（SSH-DSS）はもうサポートされていません。 既存のキーは引き続き動作しますが、{% data variables.product.product_name %}アカウントに新しいDSAキーを追加することはできません。{% endif %}

{% endnote %}
