{% ifversion fpt %}
The security overview is available for organizations that use {% data variables.product.prodname_enterprise %}. 更多信息请参阅“[GitHub's products](/articles/githubs-products)”。
{% elsif security-overview-displayed-alerts %}
All organizations and enterprises have a security overview. If you use {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghae %}, which is free during the beta release,{% endif %} you will see additional information. {% data reusables.advanced-security.more-info-ghas %}
{% elsif ghes < 3.7 %}
组织的安全概览在您拥有 {% data variables.product.prodname_GH_advanced_security %} 的许可证时可用。 {% data reusables.advanced-security.more-info-ghas %}
{% elsif ghae %}
A security overview for your enterprise and for organizations is available if you use {% data variables.product.prodname_GH_advanced_security %}, which is free during the beta release. {% data reusables.advanced-security.more-info-ghas %}
{% endif %}
