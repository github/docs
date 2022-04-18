{% ifversion ghae %}
El resumen de seguridad de tu organización se encuentra disponible si tienes una licencia para la {% data variables.product.prodname_GH_advanced_security %}, la cual es gratuita durante el lanzamiento beta. {% data reusables.advanced-security.more-info-ghas %}
{% elsif ghec or ghes %}
El resumen de seguridad de tu organización se encuentra disponible si tienes una licencia para la {% data variables.product.prodname_GH_advanced_security %}. {% data reusables.advanced-security.more-info-ghas %}
{% elsif fpt %}
The security overview is available for organizations that use {% data variables.product.prodname_enterprise %} and have a license for {% data variables.product.prodname_GH_advanced_security %}. For more information, see "[About {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)." {% endif %}