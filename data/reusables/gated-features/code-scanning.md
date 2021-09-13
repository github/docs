{% ifversion fpt %}{% data variables.product.prodname_code_scanning_capc %} is available for all public repositories, and for private repositories owned by organizations where {% data variables.product.prodname_GH_advanced_security %} is enabled.
{%- elsif ghes > 3.0 %}{% data variables.product.prodname_code_scanning_capc %} is available for organization-owned repositories where {% data variables.product.prodname_GH_advanced_security %} is enabled.
{%- elsif ghae %}
{% data variables.product.prodname_code_scanning_capc %} is available as part of {% data variables.product.prodname_GH_advanced_security %}, which is free during the beta release.
{%- else %}
{% data variables.product.prodname_code_scanning_capc %} is available if you have a license for {% data variables.product.prodname_GH_advanced_security %}.{% endif %} {% data reusables.advanced-security.more-info-ghas %}
