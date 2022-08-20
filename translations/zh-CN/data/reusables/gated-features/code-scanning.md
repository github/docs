{%- ifversion fpt %}
{% data variables.product.prodname_code_scanning_capc %} is available for all public repositories on {% data variables.product.prodname_dotcom_the_website %}. {% data variables.product.prodname_code_scanning_capc %} is also available for private repositories owned by organizations that use {% data variables.product.prodname_ghe_cloud %} and have a license for {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghec %}
{% data variables.product.prodname_code_scanning_capc %} is available for all public repositories on {% data variables.product.prodname_dotcom_the_website %}. To use {% data variables.product.prodname_code_scanning %} in a private repository owned by an organization, you must have a license for {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghes %}
{% data variables.product.prodname_code_scanning_capc %} 可用于 {% data variables.product.product_name %} 中的组织拥有的存储库。 此功能需要 {% data variables.product.prodname_GH_advanced_security %} 的许可证。

{%- elsif ghae %}
{% data variables.product.prodname_code_scanning_capc %} 可用于 {% data variables.product.product_name %} 中的组织拥有的存储库。 这是一项 {% data variables.product.prodname_GH_advanced_security %} 功能（在测试版期间免费）。

{%- endif %} 更多信息请参阅“[GitHub 的产品](/articles/githubs-products)”。