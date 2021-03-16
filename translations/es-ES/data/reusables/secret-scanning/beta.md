{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
{% note %}

**Nota:** El {% data variables.product.prodname_secret_scanning_caps %} para los repositorios{% if currentVersion ver_gt "enterprise-server@2.22" %} públicos y{% endif %} privados que pertenecen a las organizaciones se encuentra acutalmente en beta y está sujeto a cambios.

{% endnote %}

{% endif %}
