{% data variables.product.prodname_security_configurations_caps %} is available for the following repositories:

{% ifversion ghec %}

  * Public repositories
  * Private and internal repositories in organizations using {% data variables.product.prodname_ghe_cloud %} with [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) enabled{% ifversion secret-scanning-user-owned-repos %}

{% endif %}

{% elsif ghes %}

* Organization-owned repositories with [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) enabled
* {% ifversion secret-scanning-user-owned-repos %}User-owned repositories{% endif %} for an enterprise with {% data variables.product.prodname_GH_advanced_security %} enabled

{% endif %}
