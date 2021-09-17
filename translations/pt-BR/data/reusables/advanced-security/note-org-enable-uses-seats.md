{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
{% note %}
**Observação:** Se você habilitar

Os committers de {% data variables.product.prodname_GH_advanced_security %} nesses repositórios usarão assentos na sua licença de {% data variables.product.prodname_GH_advanced_security %}. Esta opção está desabilitada se você excedeu a capacidade da sua licença. {% if currentVersion == "free-pro-team@latest" %}Para obter mais informações, consulte "[Sobre licenciamento para {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-licensing-for-github-advanced-security/about-licensing-for-github-advanced-security){% endif %}
{% endnote %}
{% endif %}