{%- ifversion fpt or ghec %}
{% data variables.dependabot.custom_rules_caps %} for {% data variables.product.prodname_dependabot_alerts %} are available on any public repositories (for free), and on any private repositories, when you have a license for {% data variables.product.prodname_GH_advanced_security %}.

{%- elsif ghes %}
{% data variables.dependabot.custom_rules_caps %} for {% data variables.product.prodname_dependabot_alerts %} are available for all repositories in {% data variables.product.product_name %}. This feature requires a license for {% data variables.product.prodname_GH_advanced_security %}.

{% endif %}
