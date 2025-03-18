{% data variables.product.prodname_code_scanning_caps %} is available for the following repository types:

{%- ifversion fpt %}
* Public repositories on {% data variables.product.prodname_dotcom_the_website %}{% ifversion ghas-products-cloud %}
* Organization-owned repositories on {% data variables.product.prodname_team %} with [{% data variables.product.prodname_GH_code_security %}](/get-started/learning-about-github/about-github-advanced-security) enabled{% endif %}

{%- elsif ghec %}
* Public repositories on {% data variables.product.prodname_dotcom_the_website %}
* Organization-owned repositories on {% ifversion ghas-products-cloud %}{% data variables.product.prodname_team %} or {% endif %}{% data variables.product.prodname_ghe_cloud %} with [{% data variables.product.prodname_GH_code_security %}](/get-started/learning-about-github/about-github-advanced-security) enabled

{%- elsif ghes %}
* Organization-owned repositories with [{% data variables.product.prodname_GH_code_security %}](/get-started/learning-about-github/about-github-advanced-security) enabled

{% endif %}
