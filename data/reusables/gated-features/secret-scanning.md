{% data variables.product.prodname_secret_scanning_caps %} is available for the following repositories:

{% ifversion fpt or ghec %}

  * Public repositories (for free)
  * Private and internal repositories in organizations using {% data variables.product.prodname_ghe_cloud %} with [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) enabled{% ifversion secret-scanning-user-owned-repos %}
  * User-owned repositories for {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_emus %}{% endif %}

{% elsif ghes %}

* Organization-owned repositories with [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) enabled
* {% ifversion secret-scanning-user-owned-repos %}User-owned repositories{% endif %} for an enterprise with {% data variables.product.prodname_GH_advanced_security %} enabled

{% endif %}
