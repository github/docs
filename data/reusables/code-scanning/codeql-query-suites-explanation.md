The following query suites are built into {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} and are available for use.

{% data reusables.code-scanning.codeql-query-suites %}

Each of these query suites contains a different subset of the queries included in the built-in {% data variables.product.prodname_codeql %} query pack for that language. The query suites are automatically generated using the metadata for each query. For more information, see "[Metadata for CodeQL queries](https://codeql.github.com/docs/writing-codeql-queries/metadata-for-codeql-queries/)."

<!--See lists of query tables linked in the reusable above.-->

When you specify a query suite, the {% data variables.product.prodname_codeql %} analysis engine will run the default set of queries and any extra queries defined in the additional query suite.
