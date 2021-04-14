{% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_code_scanning_capc %} está disponível para todos os repositórios públicos e para repositórios privados pertencentes a organizações em que {% data variables.product.prodname_GH_advanced_security %} está habilitado.
{%- elsif currentVersion ver_gt "enterprise-server@3.0" %}{% data variables.product.prodname_code_scanning_capc %} está disponível se {% data variables.product.prodname_GH_advanced_security %} estiver habilitado para o repositório.
{%- elsif currentVersion == "github-ae@latest" %}
{% data variables.product.prodname_code_scanning_capc %} is available as part of {% data variables.product.prodname_GH_advanced_security %}, which is free during the beta release.
{%- else %}
{% data variables.product.prodname_code_scanning_capc %} está disponível se você tiver uma licença para {% data variables.product.prodname_GH_advanced_security %}.{% endif %} {% data reusables.advanced-security.more-info-ghas %}
