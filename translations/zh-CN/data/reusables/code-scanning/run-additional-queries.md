When you use {% data variables.product.prodname_codeql %} to scan code, the {% data variables.product.prodname_codeql %} analysis engine generates a database from the code and runs queries on it. 更多信息请参阅“[关于 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning#about-codeql)”。

{% data variables.product.prodname_codeql %} analysis uses a default set of queries, but you can specify more queries to run, in addition to the default queries. 要运行的查询必须属于 {% data variables.product.prodname_ql %} 包，可以位于您拥有的仓库或任何公共仓库中。 更多信息请参阅“[关于 {% data variables.product.prodname_ql %} 包](https://help.semmle.com/codeql/codeql-cli/reference/qlpack-overview.html)”。

查询只能依赖于标准库（即查询中的 `import LANGUAGE` 语句引用的库）或与查询相同的 {% data variables.product.prodname_ql %} 包中的库。 标准库位于 [github/codeql](https://github.com/github/codeql) 仓库中。 For more information, see "[About CodeQL queries](https://help.semmle.com/QL/learn-ql/writing-queries/introduction-to-queries.html)."

您可以指定一个 _.ql_ 文件（一个目录中包含多个 _.ql_ 文件）、一个 _.qls_ 查询套件定义文件或任意组合。 For more information about query suite definitions, see "[Creating {% data variables.product.prodname_codeql %} query suites](https://help.semmle.com/codeql/codeql-cli/procedures/query-suites.html)."

{% if currentVersion == "free-pro-team@latest" %}We don't recommend referencing query suites directly from the `github/codeql` repository, like `github/codeql/cpp/ql/src@main`. Such queries may not be compiled with the same version of {% data variables.product.prodname_codeql %} as used for your other queries, which could lead to errors during analysis.{% endif %}
