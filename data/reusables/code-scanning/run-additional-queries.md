When you use {% data variables.product.prodname_codeql %} to scan code, the {% data variables.product.prodname_codeql %} analysis engine generates a database from the code and runs queries on it. {% data variables.product.prodname_codeql %} analysis uses a default set of queries, but you can specify more queries to run, in addition to the default queries.

{% ifversion code-scanning-exclude-queries-from-analysis %}
{% tip %}

You can also specify the queries you want to exclude from analysis, or include in the analysis. This requires the use of a custom configuration file. For more information, see "[Using a custom configuration file](#using-a-custom-configuration-file)" and "[Excluding specific queries from analysis](#excluding-specific-queries-from-analysis) " below.

{% endtip %}
{% endif %}

{% ifversion codeql-packs %}
You can run extra queries if they are part of a {% data variables.product.prodname_codeql %} pack (beta) published to the {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} or a {% data variables.product.prodname_ql %} pack stored in a repository. For more information, see "[AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql#about-codeql-queries)."

The options available to specify the additional queries you want to run are:

- `packs` to install one or more {% data variables.product.prodname_codeql %} query packs (beta) and run the default query suite or queries for those packs.
- `queries` to specify a single _.ql_ file, a directory containing multiple _.ql_ files, a _.qls_ query suite definition file, or any combination. For more information about query suite definitions, see "[Creating {% data variables.product.prodname_codeql %} query suites](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/)."

You can use both `packs` and `queries` in the same workflow.
{% else %}
Any additional queries you want to run must belong to a {% data variables.product.prodname_ql %} pack in a repository. For more information, see "[AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql#about-codeql-queries)."

You can specify a single _.ql_ file, a directory containing multiple _.ql_ files, a _.qls_ query suite definition file, or any combination. For more information about query suite definitions, see "[Creating {% data variables.product.prodname_codeql %} query suites](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/)."
{% endif %}

{% ifversion fpt or ghec %}We don't recommend referencing query suites directly from the `github/codeql` repository, for example, `github/codeql/cpp/ql/src@main`. Such queries would have to be recompiled, and may not be compatible with the version of {% data variables.product.prodname_codeql %} currently active on {% data variables.product.prodname_actions %}, which could lead to errors during analysis.{% endif %}
