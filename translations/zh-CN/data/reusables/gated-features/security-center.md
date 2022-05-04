{% ifversion ghae %}
如果您有 {% data variables.product.prodname_GH_advanced_security %} 许可证，则可获得组织的安全概览，该许可证在测试版期间是免费的。 {% data reusables.advanced-security.more-info-ghas %}
{% elsif ghec or ghes %}
The security overview for your organization is available if you have a license for {% data variables.product.prodname_GH_advanced_security %}. {% data reusables.advanced-security.more-info-ghas %}
{% elsif fpt %}
The security overview is available for organizations that use {% data variables.product.prodname_enterprise %} and have a license for {% data variables.product.prodname_GH_advanced_security %}. 更多信息请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)”。 {% endif %}