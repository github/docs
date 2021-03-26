{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
{% data variables.product.prodname_secret_scanning_caps %} está disponível {% if currentVersion == "free-pro-team@latest" %}em repositórios públicos, e em repositórios privados pertencentes a organizações com {% else %}se você tiver {% endif %}uma licença de {% data variables.product.prodname_advanced_security %}. {% data reusables.advanced-security.more-info-ghas %}
{% endif %}

{% if currentVersion == "github-ae@latest" %}
{% data variables.product.prodname_secret_scanning_caps %} is available as part of {% data variables.product.prodname_GH_advanced_security %}, which is free during the beta release.
{% endif %}