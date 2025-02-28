{%- ifversion fpt or ghec %}
{% data variables.dependabot.custom_rules_caps %} for {% data variables.product.prodname_dependabot_alerts %} are available{% ifversion fpt %} on public repositories{% elsif ghec %} on any organization-owned repositories in organizations using {% data variables.product.prodname_ghe_cloud %} with [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) enabled{% endif %}.

{%- elsif ghes %}
{% data variables.dependabot.custom_rules_caps %} for {% data variables.product.prodname_dependabot_alerts %} are available for organization-owned repositories in {% data variables.product.prodname_ghe_server %}, for organizations with [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) enabled

{% endif %}
