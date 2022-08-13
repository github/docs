<!--This reusable describes the GHAS secret scanning feature. For a reusable that also covers the free secret scanning for public repositories on GitHub.com, use `secret-scanning-partner.md`  -->

{%- ifversion ghec or ghes %}
{% data variables.product.prodname_secret_scanning_GHAS_caps %} is available for organization-owned repositories in {% data variables.product.product_name %} if your enterprise has a license for {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae %}
{% data variables.product.prodname_secret_scanning_caps %} is available for organization-owned repositories in {% data variables.product.product_name %}. This is a {% data variables.product.prodname_GH_advanced_security %} feature (free during the beta release).

{%- endif %} {% ifversion not ghae %}For more information, see "[GitHub's products](/articles/githubs-products)."{% endif %}
