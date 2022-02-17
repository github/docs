{%- ifversion fpt %}
El {% data variables.product.prodname_secret_scanning_caps %} se encuentra habilitado en los repositorios públicos de todos los productos. El {% data variables.product.prodname_secret_scanning_caps %} también está disponible en los repositorios privados que pertenecen a las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} y que tienen una licencia de {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghec %}
El {% data variables.product.prodname_secret_scanning_caps %} se incluye en {% data variables.product.product_name %} para los repositorios públicos. Para utilizar el {% data variables.product.prodname_secret_scanning %} en repositoriso privados que pertenecen a las organizaciones, debes tener una licencia para la {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghes %}
El {% data variables.product.prodname_secret_scanning_caps %} se encuentra disponible para los repositorios que pertenecen a organizaciones de {% data variables.product.product_name %} si tu empresa tiene una licencia de {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae %}
El {% data variables.product.prodname_secret_scanning_caps %} se encuentra disponible para repositorios que pertenecen a organizaciones de {% data variables.product.product_name %}. Esta es una característica de la {% data variables.product.prodname_GH_advanced_security %} (gratuita durante el lanzamiento beta).

{%- endif %} {% ifversion not ghae %}Para obtener más información, consulta la sección "[Productos de GitHub](/articles/githubs-products)".{% endif %}
