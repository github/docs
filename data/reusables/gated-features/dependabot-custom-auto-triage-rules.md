{%- ifversion fpt or ghec %}
{% data variables.dependabot.custom_rules_caps %} for {% data variables.product.prodname_dependabot_alerts %} are available{% ifversion fpt %} (for free) on public repositories{% elsif ghec %} on any organization-owned repositories, when you have a license for {% data variables.product.prodname_GH_advanced_security %}{% endif %}.

{%- elsif ghes %}
{% data variables.dependabot.custom_rules_caps %} for {% data variables.product.prodname_dependabot_alerts %} are available for organization-owned repositories in {% data variables.product.product_name %}. This feature requires a license for {% data variables.product.prodname_GH_advanced_security %}.

{% endif %}
