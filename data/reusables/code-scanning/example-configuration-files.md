This configuration file adds the `security-and-quality` query suite to the list of queries run by {% data variables.product.prodname_codeql %} when scanning your code. For more information about the query suites available for use, see "[Running additional queries](#running-additional-queries)."

``` yaml
name: "My {% data variables.product.prodname_codeql %} config"

queries:
  - uses: security-and-quality
```

The following configuration file disables the default queries and specifies a set of custom queries to run instead. It also configures {% data variables.product.prodname_codeql %} to scan files in the _src_ directory (relative to the root), except for the _src/node_modules_ directory, and except for files whose name ends in _.test.js_. Files in _src/node_modules_ and files with names ending _.test.js_ are therefore excluded from analysis.

``` yaml
name: "My {% data variables.product.prodname_codeql %} config"

disable-default-queries: true

queries:
  - name: Use an in-repository {% data variables.product.prodname_codeql %} pack (run queries in the my-queries directory)
    uses: ./my-queries
  - name: Use an external JavaScript {% data variables.product.prodname_codeql %} pack (run queries from an external repo)
    uses: octo-org/javascript-codeql-pack@main
  - name: Use an external query (run a single query from an external {% data variables.product.prodname_codeql %} pack)
    uses: octo-org/python-codeql-pack/show_ifs.ql@main
  - name: Use a query suite file (run queries from a query suite in this repo)
    uses: ./codeql-packs/complex-python-codeql-pack/rootAndBar.qls

paths:
  - src 
paths-ignore: 
  - src/node_modules
  - '**/*.test.js'
```

{% ifversion code-scanning-exclude-queries-from-analysis %}

The following configuration file only runs queries that generate alerts of severity error. The configuration first selects all the default queries, all queries in `./my-queries`, and the default suite in `codeql/java-queries`, then excludes all the queries that generate warnings or recommendations.

``` yaml
queries:
  - name: Use an in-repository CodeQL query pack (run queries in the my-queries directory)
    uses: ./my-queries
packs:
  - codeql/java-queries
query-filters:
- exclude:
    problem.severity:
      - warning
      - recommendation
```

{% endif %}
