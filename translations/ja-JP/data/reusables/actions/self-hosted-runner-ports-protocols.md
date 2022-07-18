{% ifversion ghes or ghae %}
セルフホストランナーと{% data variables.product.product_name %}の通信は{% ifversion ghes %}HTTP（ポート80）もしくは{% endif %}HTTPS（ポート443）です。 {% ifversion ghes %}HTTPS経由での接続性を確認するには、{% data variables.product.product_location %}にTLSを設定してください。 詳しい情報については「[TLSの設定](/admin/configuration/configuring-network-settings/configuring-tls)」を参照してください。{% endif %}
{% endif %}
