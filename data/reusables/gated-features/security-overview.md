{% ifversion fpt %}
Security overview is available for organizations that use {% data variables.product.prodname_enterprise %}. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."
{% elsif security-overview-displayed-alerts %}
All enterprises and their organizations have a security overview. If you use {% data variables.product.prodname_GH_advanced_security %} features{% ifversion ghec %}, which are free for public repositories,{% endif %} you will see additional information. {% data reusables.advanced-security.more-info-ghas %}
{% endif %}
