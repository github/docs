{%- ifversion fpt or ghec %}
{% data variables.product.prodname_dependabot_alerts %} are free to use for all repositories on {% data variables.product.prodname_dotcom_the_website %}.

{%- elsif ghes %}
{% data variables.product.prodname_dependabot_alerts %} are free to use for repositories (user-owned and organization-owned) on {% data variables.product.prodname_ghe_server %}, provided enterprise administrators enable the feature for your enterprise.

{%- elsif ghae %}
{% data variables.product.prodname_dependabot_alerts %} are free to use for repositories (user-owned and organization-owned) on {% data variables.product.prodname_ghe_managed %}.

{% endif %}
