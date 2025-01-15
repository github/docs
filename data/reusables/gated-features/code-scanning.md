{% ifversion fpt or ghec %}
{% data variables.product.prodname_code_scanning_caps %} is available for the following repository types:

* Public repositories on {% data variables.product.prodname_dotcom_the_website %}
* Organization-owned repositories on {% data variables.product.prodname_ghe_cloud %} with [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) enabled

{% elsif ghes %}
Organization-owned repositories with [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) enabled

{% endif %}
