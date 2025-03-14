{% ifversion fpt %}{% ifversion ghas-products-cloud %}
Organizations on {% data variables.product.prodname_team %} with [{% data variables.product.prodname_GH_code_security %}](/get-started/learning-about-github/about-github-advanced-security) enabled{% endif %}{% endif %}

{% ifversion ghec %}
Organizations on {% ifversion ghas-products-cloud %}{% data variables.product.prodname_team %} or {% endif %}{% data variables.product.prodname_ghe_cloud %} with [{% data variables.product.prodname_GH_code_security %}](/get-started/learning-about-github/about-github-advanced-security) enabled{% endif %}

{% ifversion ghes %}
Organizations with [{% data variables.product.prodname_GH_code_security %}](/get-started/learning-about-github/about-github-advanced-security) enabled{% endif %}
