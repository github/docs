{% ifversion fpt %} {% data variables.product.prodname_code_scanning_capc %} is available for all public repositories. {% data variables.product.prodname_code_scanning_capc %} is also available in private repositories owned by organizations that use {% data variables.product.prodname_ghe_cloud %} and have a license for {% data variables.product.prodname_GH_advanced_security %}.
{%- elsif ghec %} {% data variables.product.prodname_code_scanning_capc %} is available for all public repositories, and for private repositories owned by organizations where {% data variables.product.prodname_GH_advanced_security %} is enabled.
{%- elsif ghes %}{% data variables.product.prodname_code_scanning_capc %} está disponível para repositórios de organizações onde {% data variables.product.prodname_GH_advanced_security %} está habilitado.
{%- elsif ghae %}
{% data variables.product.prodname_code_scanning_capc %} está disponível como parte de {% data variables.product.prodname_GH_advanced_security %}, que é grátis durante a versão beta.
{%- else %}
{% data variables.product.prodname_code_scanning_capc %} está disponível se você tiver uma licença para {% data variables.product.prodname_GH_advanced_security %}.{% endif %} {% data reusables.advanced-security.more-info-ghas %}
