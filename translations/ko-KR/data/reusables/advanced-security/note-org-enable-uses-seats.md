{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
{% note %}

**Note:** If you enable {% data variables.product.prodname_GH_advanced_security %}, committers to these repositories will use seats on your {% data variables.product.prodname_GH_advanced_security %} license. This option controls access to all {% data variables.product.prodname_advanced_security %} features including {% if currentVersion == "free-pro-team@latest" %}dependency review,{% endif %} {% data variables.product.prodname_code_scanning %}, and {% data variables.product.prodname_secret_scanning %}.

{% endnote %}
{% endif %}