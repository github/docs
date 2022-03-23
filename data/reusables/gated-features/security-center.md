{% ifversion ghae %}
The security overview for your organization is available if you have a license for {% data variables.product.prodname_GH_advanced_security %}, which is free during the beta release. {% data reusables.advanced-security.more-info-ghas %}
{% elsif ghec or ghes %}
The security overview for your organization is available if you have a license for {% data variables.product.prodname_GH_advanced_security %}. {% data reusables.advanced-security.more-info-ghas %}
{% elsif fpt %}
The security overview is available for {% data variables.product.prodname_enterprise %} organizations with a license for {% data variables.product.prodname_GH_advanced_security %}. For more information, see "[About {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)." {% endif %}