{% if  currentVersion == "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
{% note %}

**Nota:** Las {% data variables.product.prodname_secret_scanning_caps %} para los repositorios que pertenecen a organizaciones se encuentra actualmente en beta y está sujeta a cambios.

{% endnote %}

{% endif %}
{% if currentVersion ver_gt "enterprise-server@3.0" %}

{% note %}

**Note:** {% data variables.product.prodname_secret_scanning_caps %} was in beta in {% data variables.product.prodname_ghe_server %} 3.0. For the generally available release of {% data variables.product.prodname_secret_scanning %}, upgrade to the latest release of {% data variables.product.prodname_ghe_server %}.


{% endnote %}

{% endif %}
