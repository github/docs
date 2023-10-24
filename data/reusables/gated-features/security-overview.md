{% ifversion fpt %}
Security overview is available for organizations that use {% data variables.product.prodname_enterprise %}. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."
{% elsif security-overview-displayed-alerts %}
All enterprises and their organizations have a security overview. If you use {% data variables.product.prodname_GH_advanced_security %} features{% ifversion ghae %}, which are free during the beta release,{% elsif ghec %}, which are free for public repositories,{% endif %} you will see additional information. {% data reusables.advanced-security.more-info-ghas %}
{% elsif ghes < 3.7 %}
Security overview for your organization is available if you have a license for {% data variables.product.prodname_GH_advanced_security %}. {% data reusables.advanced-security.more-info-ghas %}
{% elsif ghae %}
A security overview for your enterprise and for organizations is available if you use {% data variables.product.prodname_GH_advanced_security %}, which is free during the beta release. {% data reusables.advanced-security.more-info-ghas %}
{% endif %}
