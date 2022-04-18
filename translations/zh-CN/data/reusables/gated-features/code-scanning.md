{% ifversion fpt %} {% data variables.product.prodname_code_scanning_capc %} is available for all public repositories. {% data variables.product.prodname_code_scanning_capc %} is also available in private repositories owned by organizations that use {% data variables.product.prodname_ghe_cloud %} and have a license for {% data variables.product.prodname_GH_advanced_security %}.
{%- elsif ghec %} {% data variables.product.prodname_code_scanning_capc %} is available for all public repositories, and for private repositories owned by organizations where {% data variables.product.prodname_GH_advanced_security %} is enabled.
{%- elsif ghes %}{% data variables.product.prodname_code_scanning_capc %} 适用于启用了 {% data variables.product.prodname_GH_advanced_security %} 的组织拥有的仓库。
{%- elsif ghae %}
{% data variables.product.prodname_code_scanning_capc %} 可用作 {% data variables.product.prodname_GH_advanced_security %} 的一部分，在测试期间免费使用。
{%- else %}
{% data variables.product.prodname_code_scanning_capc %} 在您拥有 {% data variables.product.prodname_GH_advanced_security %} 的许可证时可用。{% endif %} {% data reusables.advanced-security.more-info-ghas %}
