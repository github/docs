{%- ifversion fpt or ghec %}
{% data variables.secret-scanning.partner_alerts_caps %} runs automatically on public repositories and public npm packages to notify service providers about leaked secrets on {% data variables.product.prodname_dotcom_the_website %}.

{% data variables.secret-scanning.user_alerts_caps %} are available for free on all public repositories. Organizations using {% data variables.product.prodname_ghe_cloud %} with a license for {% data variables.product.prodname_GH_advanced_security %} can also enable {% data variables.secret-scanning.user_alerts %} on their private and internal repositories.

{%- elsif ghes %}
{% data variables.product.prodname_secret_scanning_caps %} is available for organization-owned repositories in {% data variables.product.product_name %} if your enterprise has a license for {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae %}
{% data variables.product.prodname_secret_scanning_caps %} is available for organization-owned repositories in {% data variables.product.product_name %}. This is a {% data variables.product.prodname_GH_advanced_security %} feature (free during the beta release).

{%- endif %} {% ifversion not ghae %}{% data reusables.advanced-security.more-info-ghas-secret-scanning %}{% endif %}

{% ifversion ghec %}{% data reusables.advanced-security.ghas-trial %}{% endif %}
