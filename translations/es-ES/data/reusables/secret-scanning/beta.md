{% if  currentVersion == "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
{% note %}

**Nota:** Las {% data variables.product.prodname_secret_scanning_caps %} para los repositorios que pertenecen a organizaciones se encuentra actualmente en beta y está sujeta a cambios.

{% endnote %}

{% endif %}
{% if currentVersion ver_gt "enterprise-server@3.0" %}

{% note %}

**Nota:** El {% data variables.product.prodname_secret_scanning_caps %} estaba en beta en {% data variables.product.prodname_ghe_server %} 3.0. Para encontrar el lanzamiento del {% data variables.product.prodname_secret_scanning %} que está generalmente disponible, mejora al último lanzamiento de {% data variables.product.prodname_ghe_server %}.


{% endnote %}

{% endif %}
