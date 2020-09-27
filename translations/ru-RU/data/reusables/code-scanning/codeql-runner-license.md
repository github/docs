{% note %}

{% if currentVersion == "free-pro-team@latest" %}
**Note:** The {{ site.data.variables.product.prodname_codeql_runner }} uses the {{ site.data.variables.product.prodname_codeql }} CLI to analyze code and therefore has the same license conditions. It's free to use on public repositories that are maintained on {{ site.data.variables.product.prodname_dotcom_the_website}}, and available to use on private repositories that are owned by customers with an {{ site.data.variables.product.prodname_advanced_security }} license. For information, see "[{{ site.data.variables.product.product_name }} {{ site.data.variables.product.prodname_codeql }} Terms and Conditions](https://securitylab.github.com/tools/codeql/license)" and "[{{ site.data.variables.product.prodname_codeql }} CLI](https://help.semmle.com/codeql/codeql-cli.html)."

{% else %}
**Note:** The {{ site.data.variables.product.prodname_codeql_runner }} is available to customers with an {{ site.data.variables.product.prodname_advanced_security }} license.
{% endif %}

{% endnote %}