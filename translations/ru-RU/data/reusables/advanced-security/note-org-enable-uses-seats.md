{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
{% note %}
**Note:** If you enable

{% data variables.product.prodname_GH_advanced_security %}, committers to these repositories will use seats on your {% data variables.product.prodname_GH_advanced_security %} license. This option is disabled if you have exceeded your license capacity. {% if currentVersion == "free-pro-team@latest" %}For more information, see "[About licensing for {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security)."{% endif %}
{% endnote %}
{% endif %}