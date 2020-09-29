{% note %}

**Hinweis:** {% if currentVersion != "free-pro-team@latest" or currentVersion ver_lt "enterprise-server@2.19" %}DSA-Schlüssel wurden in OpenSSH 7.0 als veraltet definiert. Wenn Dein Betriebssystem OpenSSH verwendet, musst Du beim Einrichten von SSH einen alternativen Schlüsseltyp verwenden, wie zum Beispiel einen RSA-Schlüssel. Wenn Dein Betriebssystem zum Beispiel macOS Sierra ist, kannst Du SSH mit einem RSA-Schlüssel einrichten.{% else %}DSA-Schlüssel (SSH-DSS) werden nicht mehr unterstützt. Bestehende Schlüssel werden weiterhin funktionieren, aber du kannst keinen neuen DSA-Schlüssel zu Deinem {% data variables.product.product_name %}-Konto hinzufügen.{% endif %}

{% endnote %}
