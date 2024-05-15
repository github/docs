{%- ifversion fpt or ghec %}
{% data variables.secret-scanning.partner_alerts_caps %} runs automatically on public repositories and public npm packages to notify service providers about leaked secrets on {% data variables.product.prodname_dotcom %}.

{% data variables.secret-scanning.user_alerts_caps %} are available for {% ifversion ghec %}user-owned {% endif %}public repositories for free. Organizations using {% data variables.product.prodname_ghe_cloud %} with a license for {% data variables.product.prodname_GH_advanced_security %} can also enable {% data variables.secret-scanning.user_alerts %} on their private and internal repositories. {% data reusables.secret-scanning.secret-scanning-user-owned-repos-beta %}

{%- elsif ghes %}
{% data variables.product.prodname_secret_scanning_caps %} is available for organization-owned repositories{% ifversion secret-scanning-user-owned-repos %}, and in beta for user-owned repositories{% endif %} in {% data variables.product.product_name %} if your enterprise has a license for {% data variables.product.prodname_GH_advanced_security %}.

{%- endif %} {% data reusables.advanced-security.more-info-ghas-secret-scanning %}

{% data reusables.advanced-security.ghas-trial %}
