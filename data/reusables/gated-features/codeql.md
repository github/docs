{% data variables.product.prodname_codeql %} is available for the following repository types:

{%- ifversion fpt %}
* Public repositories on {% data variables.product.prodname_dotcom_the_website %}, see [GitHub CodeQL Terms and Conditions](https://github.com/github/codeql-cli-binaries/blob/main/LICENSE.md)
* Organization-owned repositories on {% data variables.product.prodname_team %} with [{% data variables.product.prodname_GH_code_security %}](/get-started/learning-about-github/about-github-advanced-security) enabled

{%- elsif ghec %}
* Public repositories on {% data variables.product.prodname_dotcom_the_website %}, see [GitHub CodeQL Terms and Conditions](https://github.com/github/codeql-cli-binaries/blob/main/LICENSE.md)
* Organization-owned repositories on {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %} with [{% data variables.product.prodname_GH_code_security %}](/get-started/learning-about-github/about-github-advanced-security) enabled

{%- elsif ghes %}
* Organization-owned repositories with [{% data variables.product.prodname_GH_code_security %}](/get-started/learning-about-github/about-github-advanced-security) enabled

{% endif %}
