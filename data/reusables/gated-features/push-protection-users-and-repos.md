{%- ifversion fpt or ghec %}

{%- ifversion secret-scanning-push-protection-for-users %}
Push protection for users is on by default and can be disabled in your personal account settings.

{%- endif %}

Push protection for repositories and organizations is available for {% ifversion ghec %}user-owned {% endif %}public repositories for free. Organizations using {% data variables.product.prodname_ghe_cloud %} with a license for {% data variables.product.prodname_GH_advanced_security %} can also enable push protection on their private and internal repositories.

{%- elsif ghes %}
Push protection is available for organization-owned repositories in {% data variables.product.product_name %} if your enterprise has a license for {% data variables.product.prodname_GH_advanced_security %}.{% endif %}

For more information, see {% ifversion secret-scanning-push-protection-for-users %}"[AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/push-protection-for-users)" and {% endif %}"[AUTOTITLE](/code-security/secret-scanning/introduction/about-push-protection)."
