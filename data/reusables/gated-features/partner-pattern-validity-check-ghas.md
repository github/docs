Validity checks for partner patterns are available for the following repository types:

{% ifversion fpt %}{% ifversion ghas-products-cloud %}
* Organization-owned repositories on {% data variables.product.prodname_team %} with [{% data variables.product.prodname_GH_secret_protection %}](/get-started/learning-about-github/about-github-advanced-security) enabled{% endif %}{% endif %}

{% ifversion ghec %}
* Organization-owned repositories on {% ifversion ghas-products-cloud %}{% data variables.product.prodname_team %} or {% endif %}{% data variables.product.prodname_ghe_cloud %} with [{% data variables.product.prodname_GH_secret_protection %}](/get-started/learning-about-github/about-github-advanced-security) enabled{% endif %}

{% ifversion ghes %}
* Organization-owned repositories with [{% data variables.product.prodname_GH_secret_protection %}](/get-started/learning-about-github/about-github-advanced-security) enabled{% endif %}
