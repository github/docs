{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
{% note %}

**Nota:** Se você habilitar {% data variables.product.prodname_GH_advanced_security %}, os committers para esses repositórios usarão estações na sua licença de {% data variables.product.prodname_GH_advanced_security %}. This option controls access to all {% data variables.product.prodname_advanced_security %} features including {% if currentVersion == "free-pro-team@latest" %}dependency review,{% endif %} {% data variables.product.prodname_code_scanning %}, and {% data variables.product.prodname_secret_scanning %}.

{% endnote %}
{% endif %}