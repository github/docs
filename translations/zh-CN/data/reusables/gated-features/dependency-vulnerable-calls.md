{%- ifversion fpt %}
在公共存储库上启用对有漏洞调用的检测。 此分析也可用于使用 {% data variables.product.prodname_ghe_cloud %} 并已获得许可 {% data variables.product.prodname_GH_advanced_security %} 的组织所拥有的私有仓库。

{%- elsif ghec %}
对有漏洞调用的检测包含在公共存储库的 {% data variables.product.product_name %} 中。 要在组织拥有的私有仓库中检测有漏洞的调用，您的组织必须有 {% data variables.product.prodname_GH_advanced_security %} 的许可证。

{%- elsif ghes > 3.5 %}
{% data variables.product.product_name %} 中组织拥有的存储库可以检测有漏洞的调用。 此功能需要 {% data variables.product.prodname_GH_advanced_security %} 的许可证。

{%- elsif ghae-issue-6076 %}
{% data variables.product.product_name %} 中组织拥有的存储库可以检测有漏洞的调用。 这是一项 {% data variables.product.prodname_GH_advanced_security %} 功能（在测试版期间免费）。

{%- endif %} {% data reusables.advanced-security.more-info-ghas %}
