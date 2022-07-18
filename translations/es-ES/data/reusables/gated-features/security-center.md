{% ifversion ghae %}
El resumen de seguridad de tu organización se encuentra disponible si tienes una licencia para la {% data variables.product.prodname_GH_advanced_security %}, la cual es gratuita durante el lanzamiento beta. {% data reusables.advanced-security.more-info-ghas %}
{% elsif ghec or ghes %}
El resumen de seguridad de tu organización se encuentra disponible si tienes una licencia para la {% data variables.product.prodname_GH_advanced_security %}. {% data reusables.advanced-security.more-info-ghas %}
{% elsif fpt %}
El resumen de seguridad se encuentra disponible para las organizaciones que utilizan {% data variables.product.prodname_enterprise %} y tienen una licencia para {% data variables.product.prodname_GH_advanced_security %}. Para obtener más información, consulta la sección "[Acerca de la {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)". {% endif %}
