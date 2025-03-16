{% data variables.product.prodname_security_configurations_caps %} are available for the following repository types:

{%- ifversion ghec %}
* Organization-owned repositories on {% data variables.product.prodname_ghe_cloud %} with [{% data variables.product.prodname_GH_cs_or_sp %}](/get-started/learning-about-github/about-github-advanced-security) enabled{% ifversion secret-scanning-user-owned-repos %}
* User-owned repositories for {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_emus %}{% endif %}{% endif %}

{% ifversion ghes %}
* Organization-owned repositories with [{% data variables.product.prodname_GH_cs_or_sp %}](/get-started/learning-about-github/about-github-advanced-security) enabled{% ifversion secret-scanning-user-owned-repos %}
* User-owned repositories for enterprises with [{% data variables.product.prodname_GH_cs_or_sp %}](/get-started/learning-about-github/about-github-advanced-security) enabled{% endif %}{% endif %}
