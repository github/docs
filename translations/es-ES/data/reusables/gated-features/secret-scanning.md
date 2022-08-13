<!--This reusable describes the GHAS secret scanning feature. For a reusable that also covers the free secret scanning for public repositories on GitHub.com, use `secret-scanning-partner.md`  -->

{%- ifversion ghec or ghes %}
El {% data variables.product.prodname_secret_scanning_GHAS_caps %} se encuentra disponible para los repositorios que pertenecen a organizaciones de {% data variables.product.product_name %} si tu empresa tiene una licencia de {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae %}
El {% data variables.product.prodname_secret_scanning_caps %} se encuentra disponible para repositorios que pertenecen a organizaciones de {% data variables.product.product_name %}. Esta es una característica de la {% data variables.product.prodname_GH_advanced_security %} (gratuita durante el lanzamiento beta).

{%- endif %} {% ifversion not ghae %}Para obtener más información, consulta la sección "[Productos de GitHub](/articles/githubs-products)".{% endif %}
