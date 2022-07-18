{% ifversion ghae %}
如果您有 {% data variables.product.prodname_GH_advanced_security %} 许可证，则可获得组织的安全概览，该许可证在测试版期间是免费的。 {% data reusables.advanced-security.more-info-ghas %}
{% elsif ghec or ghes %}
组织的安全概览在您拥有 {% data variables.product.prodname_GH_advanced_security %} 的许可证时可用。 {% data reusables.advanced-security.more-info-ghas %}
{% elsif fpt %}
安全性概述适用于使用 {% data variables.product.prodname_enterprise %} 并拥有 {% data variables.product.prodname_GH_advanced_security %} 许可证的组织。 更多信息请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)”。 {% endif %}
