{% note %}

**Note:** {% if currentVersion != "free-pro-team@latest" or currentVersion ver_lt "enterprise-server@2.19" %}DSA keys were deprecated in OpenSSH 7.0. If your operating system uses OpenSSH, you'll need to use an alternate type of key when setting up SSH, such as an RSA key. For instance, if your operating system is macOS Sierra, you can set up SSH using an RSA key.{% else %}DSA keys (SSH-DSS) are no longer supported. Existing keys will continue to function, but you cannot add new DSA keys to your {% data variables.product.product_name %} account.{% endif %}

{% endnote %}
