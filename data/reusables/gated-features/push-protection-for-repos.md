{%- ifversion fpt or ghec %}

Push protection for repositories and organizations is available for {% ifversion ghec %}user-owned {% endif %}public repositories for free. Organizations using {% data variables.product.prodname_ghe_cloud %} with a license for {% data variables.product.prodname_GH_advanced_security %} can also enable push protection on their private and internal repositories.

{%- elsif ghes %}
Push protection is available for organization-owned repositories in {% data variables.product.product_name %} if your enterprise has a license for {% data variables.product.prodname_GH_advanced_security %}.{% endif %}
