{%- ifversion fpt %}
El {% data variables.product.prodname_code_scanning_capc %} está disponible para todos los repositorios públicos en {% data variables.product.prodname_dotcom_the_website %}. El {% data variables.product.prodname_code_scanning_capc %} también está disponible para los repositorios privados que pertenecen a organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} y tienen una licencia para {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghec %}
El {% data variables.product.prodname_code_scanning_capc %} está disponible para todos los repositorios públicos en {% data variables.product.prodname_dotcom_the_website %}. Para utilizar el {% data variables.product.prodname_code_scanning %} en un repositorio privado que le pertenezca a una organización, debes tener una licencia para {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghes %}
El {% data variables.product.prodname_code_scanning_capc %} se encuentra disponible para repositorios que pertenecen a organizaciones de {% data variables.product.product_name %}. Esta característica requiere una licencia para la {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae %}
El {% data variables.product.prodname_code_scanning_capc %} se encuentra disponible para repositorios que pertenecen a organizaciones de {% data variables.product.product_name %}. Esta es una característica de la {% data variables.product.prodname_GH_advanced_security %} (gratuita durante el lanzamiento beta).

{%- endif %} Para obtener más información, consulta "[Productos de GitHub](/articles/githubs-products)".