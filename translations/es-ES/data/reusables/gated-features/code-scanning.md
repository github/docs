{% ifversion fpt %} {% data variables.product.prodname_code_scanning_capc %} is available for all public repositories. El {% data variables.product.prodname_code_scanning_capc %} también está disponible en los repositorios privados que pertenecen a las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} y que tienen una licencia de {% data variables.product.prodname_GH_advanced_security %}.
{%- elsif ghec %} {% data variables.product.prodname_code_scanning_capc %} is available for all public repositories, and for private repositories owned by organizations where {% data variables.product.prodname_GH_advanced_security %} is enabled.
{%- elsif ghes %}El {% data variables.product.prodname_code_scanning_capc %} se encuentra disponible para los repositorios que pertenecen a organizaciones donde se habilitó el {% data variables.product.prodname_GH_advanced_security %}.
{%- elsif ghae %}
El {% data variables.product.prodname_code_scanning_capc %} se encuentra disponible como parte de la {% data variables.product.prodname_GH_advanced_security %}, la cual es gratuita durante el lanzamiento beta.
{%- else %}
El {% data variables.product.prodname_code_scanning_capc %} se encuentra disponible si tienes una licencia de {% data variables.product.prodname_GH_advanced_security %}.{% endif %} {% data reusables.advanced-security.more-info-ghas %}
