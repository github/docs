{%- ifversion fpt %}
{% data variables.product.prodname_secret_scanning_partner_caps %} is automatically run on public repositories in all products on {% data variables.product.prodname_dotcom_the_website %}. {% data variables.product.prodname_secret_scanning_GHAS_caps %} is available for repositories owned by organizations that use {% data variables.product.prodname_ghe_cloud %} and have a license for {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghec %}
{% data variables.product.prodname_secret_scanning_partner_caps %} is automatically run on all public repositories. If you have a license for {% data variables.product.prodname_GH_advanced_security %}, you can enable and configure {% data variables.product.prodname_secret_scanning_GHAS %} for any repository owned by an organization.

{%- elsif ghes %}
El {% data variables.product.prodname_secret_scanning_caps %} se encuentra disponible para los repositorios que pertenecen a organizaciones de {% data variables.product.product_name %} si tu empresa tiene una licencia de {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae %}
El {% data variables.product.prodname_secret_scanning_caps %} se encuentra disponible para repositorios que pertenecen a organizaciones de {% data variables.product.product_name %}. Esta es una característica de la {% data variables.product.prodname_GH_advanced_security %} (gratuita durante el lanzamiento beta).

{%- endif %} {% ifversion not ghae %}Para obtener más información, consulta la sección "[Productos de GitHub](/articles/githubs-products)".{% endif %}
