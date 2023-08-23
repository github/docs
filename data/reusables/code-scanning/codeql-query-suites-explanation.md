The following query suites are built into {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} and are available for use.

{% data reusables.code-scanning.codeql-query-suites %}

Each of these query suites contains a different subset of the queries included in the built-in {% data variables.product.prodname_codeql %} query pack for that language. The query suites are automatically generated using the metadata for each query. For more information, see "[Metadata for CodeQL queries](https://codeql.github.com/docs/writing-codeql-queries/metadata-for-codeql-queries/)."

You can identify which query suites a query is included in by browsing the [CodeQL query help documentation](https://codeql.github.com/codeql-query-help/). For each query, any suites that it is included in are displayed at the top of the page with the query metadata. For example: [Arbitrary file write during zip extraction (”Zip Slip”)](https://codeql.github.com/codeql-query-help/javascript/js-zipslip/) and [Client-side request forgery](https://codeql.github.com/codeql-query-help/javascript/js-client-side-request-forgery/).

When you specify a query suite, the {% data variables.product.prodname_codeql %} analysis engine will run the default set of queries and any extra queries defined in the additional query suite. {% ifversion codeql-ml-queries %}The `security-extended` and `security-and-quality` query suites for JavaScript contain experimental queries. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts#about-experimental-alerts)."{% endif %}
