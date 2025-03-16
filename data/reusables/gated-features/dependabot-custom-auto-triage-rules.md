{%- ifversion fpt %}
{% data variables.dependabot.custom_rules_caps %} for {% data variables.product.prodname_dependabot_alerts %} are available on public repositories{% ifversion ghas-products-cloud %} and on any organization-owned repositories in {% data variables.product.prodname_team %} with [{% data variables.product.prodname_GH_code_security %}](/get-started/learning-about-github/about-github-advanced-security) enabled{% endif %}.

{%- elsif ghec %}
{% data variables.dependabot.custom_rules_caps %} for {% data variables.product.prodname_dependabot_alerts %} are available on public repositories and on any organization-owned repositories in {% ifversion ghas-products-cloud %}{% data variables.product.prodname_team %} or {% endif %}{% data variables.product.prodname_enterprise %} with [{% data variables.product.prodname_GH_code_security %}](/get-started/learning-about-github/about-github-advanced-security) enabled.

{%- elsif ghes %}
{% data variables.dependabot.custom_rules_caps %} for {% data variables.product.prodname_dependabot_alerts %} are available for organization-owned repositories with [{% data variables.product.prodname_GH_code_security %}](/get-started/learning-about-github/about-github-advanced-security) enabled.

{% endif %}
