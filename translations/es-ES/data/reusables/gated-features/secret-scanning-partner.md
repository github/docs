{%- ifversion fpt %}
{% data variables.product.prodname_secret_scanning_partner_caps %} se ejecuta automáticamente en los repositorios públicos en todos los productos de {% data variables.product.prodname_dotcom_the_website %}. {% data variables.product.prodname_secret_scanning_GHAS_caps %} se encuentra disponible para los repositorios que pertenecen a las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} y tienen una licencia para la {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghec %}
{% data variables.product.prodname_secret_scanning_partner_caps %} se ejecuta automáticamente en todos los repositorios públicos. Si tienes una licencia de {% data variables.product.prodname_GH_advanced_security %}, puedes habilitar y configurar el 
{% data variables.product.prodname_secret_scanning_GHAS %} para cualquier repositorio que le pertenezca a una organización.

{%- elsif ghes %}
El {% data variables.product.prodname_secret_scanning_caps %} se encuentra disponible para los repositorios que pertenecen a organizaciones de {% data variables.product.product_name %} si tu empresa tiene una licencia de {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae %}
El {% data variables.product.prodname_secret_scanning_caps %} se encuentra disponible para repositorios que pertenecen a organizaciones de {% data variables.product.product_name %}. Esta es una característica de la {% data variables.product.prodname_GH_advanced_security %} (gratuita durante el lanzamiento beta).

{%- endif %} {% ifversion not ghae %}Para obtener más información, consulta la sección "[Productos de GitHub](/articles/githubs-products)".{% endif %}
