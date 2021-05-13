{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
{% note %}
**Nota:** Si habilitas

{% data variables.product.prodname_GH_advanced_security %}, los confirmantes de estos repositorios utilizarán las plazas en tu licencia de {% data variables.product.prodname_GH_advanced_security %}. Esta opción se inhabilita si excediste la capacidad de tu licencia. {% if currentVersion == "free-pro-team@latest" %}Para obtener más información, consulta la sección "[Acerca del licenciamiento de {% data variables.product.prodname_GH_advanced_security %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security)".{% endif %}
{% endnote %}
{% endif %}