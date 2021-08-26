When you use {% data variables.product.prodname_codeql %} to scan code, the {% data variables.product.prodname_codeql %} analysis engine generates a database from the code and runs queries on it. {% data variables.product.prodname_codeql %} analysis uses a default set of queries, but you can specify more queries to run, in addition to the default queries.

{% if codeql-packs %}
You can run extra queries if they are part of a {% data variables.product.prodname_codeql %} pack (beta) published to the {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} or a {% data variables.product.prodname_ql %} pack stored in a repository. For more information, see "[About {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)."

The options available to specify the additional queries you want to run are:

- `packs` to install one or more {% data variables.product.prodname_codeql %} query packs (beta) and run the default query suite or queries for those packs.
- `queries` to specify a single _.ql_ file, a directory containing multiple _.ql_ files, a _.qls_ query suite definition file, or any combination. For more information about query suite definitions, see "[Creating {% data variables.product.prodname_codeql %} query suites](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/)."

You can use both `packs` and `queries` in the same workflow.
{% else %}
Any additional queries you want to run must belong to a {% data variables.product.prodname_ql %} pack in a repository. For more information, see {% ifversion ghes < 3.0 %}"[About {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning#about-codeql)."{% else %}"[About {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)."{% endif %}

You can specify a single _.ql_ file, a directory containing multiple _.ql_ files, a _.qls_ query suite definition file, or any combination. For more information about query suite definitions, see "[Creating {% data variables.product.prodname_codeql %} query suites](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/)."
{% endif %}

{% ifversion fpt %}We don't recommend referencing query suites directly from the `github/codeql` repository, like `github/codeql/cpp/ql/src@main`. Such queries may not be compiled with the same version of {% data variables.product.prodname_codeql %} as used for your other queries, which could lead to errors during analysis.{% endif %}
