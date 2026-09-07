{% ifversion fpt %}
Organizations on {% data variables.product.prodname_team %} with [{% data variables.product.prodname_GH_cs_or_sp %}](/get-started/learning-about-github/about-github-advanced-security) enabled{% endif %}

{% ifversion ghec %}
Organizations on {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %} with [{% data variables.product.prodname_GH_cs_or_sp %}](/get-started/learning-about-github/about-github-advanced-security) enabled{% endif %}

{% ifversion ghes %}
Organizations with [{% ifversion security-campaigns %}{% data variables.product.prodname_GH_code_security %}{% elsif security-campaigns-secrets %}{% data variables.product.prodname_GH_cs_or_sp %}{% endif %}](/get-started/learning-about-github/about-github-advanced-security) enabled{% endif %}
