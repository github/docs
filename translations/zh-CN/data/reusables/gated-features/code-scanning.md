{% ifversion fpt or ghec %}{% data variables.product.prodname_code_scanning_capc %} 适用于所有公共仓库以及启用了 {% data variables.product.prodname_GH_advanced_security %} 的组织拥有的私有仓库。
{%- elsif ghes %}{% data variables.product.prodname_code_scanning_capc %} 适用于启用了 {% data variables.product.prodname_GH_advanced_security %} 的组织拥有的仓库。
{%- elsif ghae %}
{% data variables.product.prodname_code_scanning_capc %} 可用作 {% data variables.product.prodname_GH_advanced_security %} 的一部分，在测试期间免费使用。
{%- else %}
{% data variables.product.prodname_code_scanning_capc %} 在您拥有 {% data variables.product.prodname_GH_advanced_security %} 的许可证时可用。{% endif %} {% data reusables.advanced-security.more-info-ghas %}
