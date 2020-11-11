When you use {% data variables.product.prodname_codeql %} to scan code, the {% data variables.product.prodname_codeql %} analysis engine generates a database from the code and runs queries on it. For more information, see "[About {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning#about-codeql)."

{% data variables.product.prodname_codeql %} analysis uses a default set of queries, but you can specify more queries to run, in addition to the default queries. 実行するクエリは、{% data variables.product.prodname_ql %} パックに属している必要があり、独自のリポジトリまたは任意のパブリックリポジトリに格納することができます。 詳しい情報については、「[{% data variables.product.prodname_ql %} パックについて](https://help.semmle.com/codeql/codeql-cli/reference/qlpack-overview.html)」を参照してください。

クエリは、標準ライブラリ（クエリの `import LANGUAGE` ステートメントで参照されるライブラリ）、またはクエリと同じ {% data variables.product.prodname_ql %} パック内のライブラリにのみ依存している必要があります。 標準ライブラリは [github/codeql](https://github.com/github/codeql) リポジトリにあります。 For more information, see "[About CodeQL queries](https://help.semmle.com/QL/learn-ql/writing-queries/introduction-to-queries.html)."

単一の _.ql_ ファイル、複数の _.ql_ ファイルを含むディレクトリ、_.qls_ クエリスイート定義ファイル、または任意の組み合わせを指定できます。 For more information about query suite definitions, see "[Creating {% data variables.product.prodname_codeql %} query suites](https://help.semmle.com/codeql/codeql-cli/procedures/query-suites.html)."

{% if currentVersion == "free-pro-team@latest" %}We don't recommend referencing query suites directly from the `github/codeql` repository, like `github/codeql/cpp/ql/src@main`. Such queries may not be compiled with the same version of {% data variables.product.prodname_codeql %} as used for your other queries, which could lead to errors during analysis.{% endif %}
