{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
{% note %}

**Nota:** Las {% data variables.product.prodname_secret_scanning_caps %} para los repositorios que pertenecen a organizaciones{% if currentVersion == "free-pro-team@latest" %} privados{% endif %} se encuentran actualmente en beta y están sujetas a cambios.

{% endnote %}

{% endif %}
