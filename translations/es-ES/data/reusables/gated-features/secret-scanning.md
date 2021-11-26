{% ifversion fpt or ghec %}El {% data variables.product.prodname_secret_scanning_caps %} se encuentra disponible para todos los repositorios públicos y para los privados que pertenecen a organizaciones en donde se habilitó la {% data variables.product.prodname_GH_advanced_security %}.
{%- elsif ghes > 3.0 or ghae-next %}Las {% data variables.product.prodname_secret_scanning_caps %} están disponibles para los repositorios que pertenezcan a organizaciones en donde esté habilitada la {% data variables.product.prodname_GH_advanced_security %}.
{%- elsif ghae %}
El {% data variables.product.prodname_secret_scanning_caps %} se encuentra disponible como parte de la {% data variables.product.prodname_GH_advanced_security %}, la cual es gratuita durante el lanzamiento beta.
{%- else %}
El {% data variables.product.prodname_secret_scanning_caps %} se encuentra disponible si tienes una licencia de {% data variables.product.prodname_GH_advanced_security %}.{% endif %} {% data reusables.advanced-security.more-info-ghas %}
