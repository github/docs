{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
{% data variables.product.prodname_secret_scanning_caps %} se encuentra disponible {% if currentVersion == "free-pro-team@latest" %}en los repositorios públicos, y en los repositorios privados que pertenezcan a las organizaciónes con {% else %}si tienes {% endif %}una {% data variables.product.prodname_advanced_security %}licencia. {% data reusables.advanced-security.more-info-ghas %}
{% endif %}

{% if currentVersion == "github-ae@latest" %}
El {% data variables.product.prodname_secret_scanning_caps %} se encuentra disponible como parte de la {% data variables.product.prodname_GH_advanced_security %}, la cual es gratuita durante el lanzamiento beta.
{% endif %}