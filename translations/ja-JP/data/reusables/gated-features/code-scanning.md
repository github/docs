{% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_code_scanning_capc %} is available for all public repositories and for private repositories owned by organizations where {% data variables.product.prodname_GH_advanced_security %} is enabled.
{%- elsif currentVersion ver_gt "enterprise-server@3.0" %}{% data variables.product.prodname_code_scanning_capc %} is available if {% data variables.product.prodname_GH_advanced_security %} is enabled for the repository.
{%- else %}
{% data variables.product.prodname_code_scanning_capc %} is available if you have a license for {% data variables.product.prodname_GH_advanced_security %}.{% endif %} {% data reusables.advanced-security.more-info-ghas %}
