{%- ifversion fpt %}
Detection of vulnerable calls is enabled on public repositories. This analysis is also available in private repositories owned by organizations that use {% data variables.product.prodname_ghe_cloud %} and have licensed {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghec %}
Detection of vulnerable calls is included in {% data variables.product.product_name %} for public repositories. To detect vulnerable calls in private repositories owned by organizations, your organization must have a license for {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghes > 3.5 %}
Detection of vulnerable calls is available for organization-owned repositories in {% data variables.product.product_name %}. 此功能需要 {% data variables.product.prodname_GH_advanced_security %} 的许可证。

{%- elsif ghae-issue-6076 %}
Detection of vulnerable calls is available for organization-owned repositories in {% data variables.product.product_name %}. 这是一项 {% data variables.product.prodname_GH_advanced_security %} 功能（在测试版期间免费）。

{%- endif %} {% data reusables.advanced-security.more-info-ghas %}
