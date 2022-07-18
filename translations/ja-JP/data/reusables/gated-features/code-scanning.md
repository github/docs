{% ifversion fpt %} {% data variables.product.prodname_code_scanning_capc %} is available for all public repositories. {% data variables.product.prodname_code_scanning_capc %} is also available in private repositories owned by organizations that use {% data variables.product.prodname_ghe_cloud %} and have a license for {% data variables.product.prodname_GH_advanced_security %}.
{%- elsif ghec %} {% data variables.product.prodname_code_scanning_capc %} is available for all public repositories, and for private repositories owned by organizations where {% data variables.product.prodname_GH_advanced_security %} is enabled.
{%- elsif ghes %}{% data variables.product.prodname_code_scanning_capc %} is available for organization-owned repositories where {% data variables.product.prodname_GH_advanced_security %} is enabled.
{%- elsif ghae %}
{% data variables.product.prodname_code_scanning_capc %} is available as part of {% data variables.product.prodname_GH_advanced_security %}, which is free during the beta release.
{%- else %}
{% data variables.product.prodname_code_scanning_capc %} is available if you have a license for {% data variables.product.prodname_GH_advanced_security %}.{% endif %} {% data reusables.advanced-security.more-info-ghas %}
