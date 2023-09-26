{%- ifversion fpt or ghec %}
{% data variables.product.prodname_dependabot_alerts %} are free to use for all repositories on {% data variables.product.prodname_dotcom_the_website %}. Advanced capabilities, like reachability analysis and the ability to create custom alert rules, are available on any public repositories (for free), and on any private repositories, when you have a license for {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghes %}
{% data variables.product.prodname_dependabot_alerts %} are free to use for repositories (user-owned and organization-owned) on {% data variables.product.prodname_ghe_server %}, provided enterprise administrators enable the feature for your enterprise.

{%- elsif ghae %}
{% data variables.product.prodname_dependabot_alerts %} are free to use for repositories (user-owned and organization-owned) on {% data variables.product.prodname_ghe_managed %}.

{% endif %}
