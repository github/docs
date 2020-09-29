{% note %}

**注意：**{% if currentVersion != "free-pro-team@latest" or currentVersion ver_lt "enterprise-server@2.19" %}DSA 密钥在 OpenSSH 7.0 中已废弃。 如果您的操作系统使用 OpenSSH ，您需要在设置 SSH 时使用另一种类型的密钥，如 RSA 密钥。 例如，如果您的操作系统是 macOS Sierra，您可以使用 RSA 密钥设置SSH。{% else %}DSA 密钥 (SSH-DSS) 不再受支持。 现有密钥将继续运行，但您不能将新的 DSA 密钥添加到您的 {% data variables.product.product_name %} 帐户。{% endif %}

{% endnote %}
