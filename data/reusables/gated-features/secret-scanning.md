{%- ifversion fpt %}
{% data variables.secret-scanning.partner_alerts_caps %} run automatically on public repositories in all products on {% data variables.product.prodname_dotcom_the_website %}. {% data variables.secret-scanning.user_alerts_caps %} are available for public repositories, as well as repositories owned by organizations that use {% data variables.product.prodname_ghe_cloud %} and have a license for {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghec %}
{% data variables.secret-scanning.partner_alerts_caps %} run automatically on all public repositories. If you have a license for {% data variables.product.prodname_GH_advanced_security %}, you can enable and configure {% data variables.secret-scanning.user_alerts %} for any repository owned by an organization.

{%- elsif ghes %}
{% data variables.product.prodname_secret_scanning_caps %} is available for organization-owned repositories in {% data variables.product.product_name %} if your enterprise has a license for {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghae %}
{% data variables.product.prodname_secret_scanning_caps %} is available for organization-owned repositories in {% data variables.product.product_name %}. This is a {% data variables.product.prodname_GH_advanced_security %} feature (free during the beta release).

{%- endif %} {% ifversion not ghae %}{% data reusables.advanced-security.more-info-ghas-secret-scanning %}{% endif %}
