{% if currentVersion == "free-pro-team@latest" %}El {% data variables.product.prodname_code_scanning_capc %} se encuentra disponible para todos los repositorios públicos y para los privados que pertenecen a organizaciones en donde se habilitó la {% data variables.product.prodname_GH_advanced_security %}.
{%- elsif currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}El {% data variables.product.prodname_code_scanning_capc %} se encuentra disponible para los repositorios que pertenecen a organizaciones donde se habilitó el {% data variables.product.prodname_GH_advanced_security %}.
{%- elsif currentVersion == "github-ae@latest" %}
El {% data variables.product.prodname_code_scanning_capc %} se encuentra disponible como parte de la {% data variables.product.prodname_GH_advanced_security %}, la cual es gratuita durante el lanzamiento beta.
{%- else %}
El {% data variables.product.prodname_code_scanning_capc %} se encuentra disponible si tienes una licencia de {% data variables.product.prodname_GH_advanced_security %}.{% endif %} {% data reusables.advanced-security.more-info-ghas %}
