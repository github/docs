{%- ifversion fpt or ghec %}
{% data variables.product.prodname_dependabot_alerts %} are free to use for all repositories on {% data variables.product.prodname_dotcom %}. {% ifversion fpt%}Advanced capabilities, like the ability to create {% data variables.dependabot.custom_rules %} for {% data variables.product.prodname_dependabot_alerts %}, are available (for free) on public repositories only.{% elsif ghec %} Advanced capabilities, like reachability analysis and the ability to create {% data variables.dependabot.custom_rules %}, are available on any organization-owned repositories, when you have a license for {% data variables.product.prodname_GH_advanced_security %}.{% endif %}

{%- elsif ghes %}
{% data variables.product.prodname_dependabot_alerts %} are free to use for repositories (user-owned and organization-owned) on {% data variables.product.prodname_ghe_server %}, provided enterprise administrators enable the feature for your enterprise.{% ifversion dependabot-auto-triage-rules %} Advanced capabilities, like the ability to create {% data variables.dependabot.custom_rules %}, are available to all organization-owned repositories, when you have a license for {% data variables.product.prodname_GH_advanced_security %}.{% endif %}

{% endif %}
