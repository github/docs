{% warning %}

**Warning**: Changing this setting will cause {% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}{% data variables.product.prodname_ghe_server %}{% else %}{% data variables.product.prodname_dotcom %}{% endif %} to restart. Você deve programar essa mudança com cuidado para minimizar o tempo de inatividade.

{% endwarning %}
