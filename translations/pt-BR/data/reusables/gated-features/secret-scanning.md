{%- ifversion fpt %}
{% data variables.product.prodname_secret_scanning_caps %} is enabled on public repositories in all products. {% data variables.product.prodname_secret_scanning_caps %} is also available in private repositories owned by organizations that use {% data variables.product.prodname_ghe_cloud %} and have a license for {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghec %}
{% data variables.product.prodname_secret_scanning_caps %} is included in {% data variables.product.product_name %} for public repositories. To use {% data variables.product.prodname_secret_scanning %} in private repositories owned by organizations, you must have a license for {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghes %}
{% data variables.product.prodname_secret_scanning_caps %} is available for organization-owned repositories in {% data variables.product.product_name %} if your enterprise has a license for {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae %}
{% data variables.product.prodname_secret_scanning_caps %} is available for organization-owned repositories in {% data variables.product.product_name %}. This is a {% data variables.product.prodname_GH_advanced_security %} feature (free during the beta release).

{%- endif %} {% ifversion not ghae %}For more information, see "[GitHub's products](/articles/githubs-products)."{% endif %}
