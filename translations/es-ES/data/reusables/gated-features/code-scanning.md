{% if currentVersion == "free-pro-team@latest" %}El {% data variables.product.prodname_code_scanning_capc %} se encuentra disponible para todos los repositorios públicos y para aquellos privados que pertenezcan a organizaciones en donde la {% data variables.product.prodname_GH_advanced_security %} se encuentra habilitada.
{%- elsif currentVersion ver_gt "enterprise-server@3.0" %}El {% data variables.product.prodname_code_scanning_capc %} se encuentra disponible si la {% data variables.product.prodname_GH_advanced_security %} se encuentra habiltiada en el repositorio.
{%- elsif currentVersion == "github-ae@latest" %}
El {% data variables.product.prodname_code_scanning_capc %} se encuentra disponible como parte de la {% data variables.product.prodname_GH_advanced_security %}, la cual es gratuita durante el lanzamiento beta.
{%- else %}
El {% data variables.product.prodname_code_scanning_capc %} se encuentra disponible si tienes una licencia de {% data variables.product.prodname_GH_advanced_security %}.{% endif %} {% data reusables.advanced-security.more-info-ghas %}
