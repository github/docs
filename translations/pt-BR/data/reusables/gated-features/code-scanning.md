{% ifversion fpt or ghec %}{% data variables.product.prodname_code_scanning_capc %} está disponível para todos os repositórios públicos e para repositórios privados pertencentes a organizações em que {% data variables.product.prodname_GH_advanced_security %} está habilitado.
{%- elsif ghes %}{% data variables.product.prodname_code_scanning_capc %} está disponível para repositórios de organizações onde {% data variables.product.prodname_GH_advanced_security %} está habilitado.
{%- elsif ghae %}
{% data variables.product.prodname_code_scanning_capc %} está disponível como parte de {% data variables.product.prodname_GH_advanced_security %}, que é grátis durante a versão beta.
{%- else %}
{% data variables.product.prodname_code_scanning_capc %} está disponível se você tiver uma licença para {% data variables.product.prodname_GH_advanced_security %}.{% endif %} {% data reusables.advanced-security.more-info-ghas %}
