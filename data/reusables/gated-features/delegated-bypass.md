Delegated bypass requires push protection to be enabled for the organization or the repository. See [AUTOTITLE](/code-security/secret-scanning/introduction/about-push-protection).

Delegated bypass is available for the following repositories:

{% ifversion ghec %}

* Private and internal repositories in organizations using {% data variables.product.prodname_ghe_cloud %} with [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) enabled

{% elsif ghes %}

* Organization-owned repositories with [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) enabled

{% endif %}
