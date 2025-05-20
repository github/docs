Delegated bypass for push protection is available for the following repository types:

{% ifversion fpt %}
* Organization-owned repositories on {% data variables.product.prodname_team %} with [{% data variables.product.prodname_GH_secret_protection %}](/get-started/learning-about-github/about-github-advanced-security) enabled{% endif %}

{% ifversion ghec %}
* Organization-owned repositories on {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %} with [{% data variables.product.prodname_GH_secret_protection %}](/get-started/learning-about-github/about-github-advanced-security) enabled{% endif %}

{% ifversion ghes %}
* Organization-owned repositories with [{% data variables.product.prodname_GH_secret_protection %}](/get-started/learning-about-github/about-github-advanced-security) enabled{% endif %}
