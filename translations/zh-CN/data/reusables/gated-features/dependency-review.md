{%- ifversion fpt %}
在公共存储库上启用依赖项审查。 依赖项审查也可在使用 {% data variables.product.prodname_ghe_cloud %} 并有 {% data variables.product.prodname_GH_advanced_security %} 许可证的组织拥有的私有存储库中进行。

{%- elsif ghec %}
依赖项审查包含在公共存储库的 {% data variables.product.product_name %} 中。 要在组织拥有的私有存储库中使用依赖项审查，您必须具有 {% data variables.product.prodname_GH_advanced_security %} 许可证。

{%- elsif ghes %}
依赖项审查适用于 {% data variables.product.product_name %} 中的组织拥有的存储库。 此功能需要 {% data variables.product.prodname_GH_advanced_security %} 的许可证。

{%- elsif ghae %}
依赖项审查适用于 {% data variables.product.product_name %} 中的组织拥有的存储库。 这是一项 {% data variables.product.prodname_GH_advanced_security %} 功能（在测试版期间免费）。

{%- endif %} {% data reusables.advanced-security.more-info-ghas %}
