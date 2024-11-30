The following query suites are built into {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} and are available for use.

{% data reusables.code-scanning.codeql-query-suites %}

When you specify a query suite, the {% data variables.product.prodname_codeql %} analysis engine will run the default set of queries and any extra queries defined in the additional query suite. {% ifversion codeql-ml-queries %}The `security-extended` and `security-and-quality` query suites for JavaScript contain experimental queries. For more information, see "[About {% data variables.product.prodname_code_scanning %} alerts](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts)."{% endif %}
