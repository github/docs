Os conjuntos de consulta a seguir foram criados em {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} e estão disponíveis para uso.

{% data reusables.code-scanning.codeql-query-suites %}

When you specify a query suite, the {% data variables.product.prodname_codeql %} analysis engine will run the default set of queries and any extra queries defined in the additional query suite. {% ifversion codeql-ml-queries %}The `security-extended` and `security-and-quality` query suites for JavaScript contain experimental queries. Para obter mais informações, consulte "[Sobre alertas de{% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts)."{% endif %}
