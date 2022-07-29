{%- ifversion fpt %}
La revisión de dependencias se encuentra habilitada en los repositorios públicos. La revisión de dependencias también se encuentra disponible en los repositorios privados que pertenezcan a las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} y que tienen una licencia para la {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghec %}
La revisión de dependencias se incluye en {% data variables.product.product_name %} para los repositorios públicos. Para utilizar la revisión de dependencias en los repositorios privados que pertenecen a las organizaciones, debes tener una licencia para la {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghes %}
La revisión de dependencias se encuentra disponible para los repositorios que pertenecen a las organizaciones en {% data variables.product.product_name %}. Esta característica requiere una licencia para la {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae %}
La revisión de dependencias se encuentra disponible para los repositorios que pertenecen a las organizaciones en {% data variables.product.product_name %}. Esta es una característica de la {% data variables.product.prodname_GH_advanced_security %} (gratuita durante el lanzamiento beta).

{%- endif %} {% data reusables.advanced-security.more-info-ghas %}
