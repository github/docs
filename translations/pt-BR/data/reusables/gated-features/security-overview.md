{% ifversion fpt %}
The security overview is available for organizations that use {% data variables.product.prodname_enterprise %}. Para obter mais informações, consulte os "[Produtos do GitHub](/articles/githubs-products)".
{% elsif security-overview-displayed-alerts %}
All organizations and enterprises have a security overview. If you use {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghae %}, which is free during the beta release,{% endif %} you will see additional information. {% data reusables.advanced-security.more-info-ghas %}
{% elsif ghes < 3.7 %}
A visão geral de segurança para sua organização está disponível se você tiver uma licença para {% data variables.product.prodname_GH_advanced_security %}. {% data reusables.advanced-security.more-info-ghas %}
{% elsif ghae %}
A security overview for your enterprise and for organizations is available if you use {% data variables.product.prodname_GH_advanced_security %}, which is free during the beta release. {% data reusables.advanced-security.more-info-ghas %}
{% endif %}
