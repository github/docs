Push protection for repositories and organizations is available for the following repository types:

{% ifversion fpt or ghec %}

* {% ifversion ghec %}User-owned public{% elsif fpt %}Public{% endif %} repositories for free
* Private and internal repositories in organizations using {% data variables.product.prodname_ghe_cloud %} with [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) enabled{% ifversion ghec %}
* User namespace repositories belonging to {% data variables.product.prodname_emus %}{% endif %}

{% elsif ghes %}

* Organization-owned repositories with [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) enabled

{% endif %}
