{% data variables.copilot.copilot_autofix %} for {% data variables.product.prodname_code_scanning %} is available for the following repository types:

{% ifversion fpt %}
* Public repositories on {% data variables.product.prodname_dotcom_the_website %}
* Organization-owned repositories on {% data variables.product.prodname_team %} with [{% data variables.product.prodname_GH_code_security %}](/get-started/learning-about-github/about-github-advanced-security) enabled{% endif %}

{% ifversion ghec %}
* Public repositories on {% data variables.product.prodname_dotcom_the_website %}
* Organization-owned repositories on {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %} with [{% data variables.product.prodname_GH_code_security %}](/get-started/learning-about-github/about-github-advanced-security) enabled{% endif %}
