使用 {% data variables.product.prodname_codeql %} 扫描代码时，{% data variables.product.prodname_codeql %} 分析引擎将从代码生成数据库并对其运行查询。 {% data variables.product.prodname_codeql %} 分析使用默认的查询集，但除了默认查询外，您还可以指定更多的查询来运行。

{% if codeql-packs %}
You can run extra queries if they are part of a
{% data variables.product.prodname_codeql %} pack (beta) published to the {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} or a {% data variables.product.prodname_ql %} pack stored in a repository. For more information, see "[About {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)."

The options available to specify the additional queries you want to run are:

- `packs` to install one or more {% data variables.product.prodname_codeql %} query packs (beta) and run the default query suite or queries for those packs.
- `queries` to specify a single _.ql_ file, a directory containing multiple _.ql_ files, a _.qls_ query suite definition file, or any combination. 有关查询套件定义的更多信息，请参阅“[创建 {% data variables.product.prodname_codeql %} 查询套件](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/)”。

You can use both `packs` and `queries` in the same workflow.
{% else %}
Any additional queries you want to run must belong to a
{% data variables.product.prodname_ql %} pack in a repository. For more information, see {% ifversion ghes < 3.0 %}"[About {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning#about-codeql)."{% else %}"[About {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)."{% endif %}

您可以指定一个 _.ql_ 文件（一个目录中包含多个 _.ql_ 文件）、一个 _.qls_ 查询套件定义文件或任意组合。 有关查询套件定义的更多信息，请参阅“[创建 {% data variables.product.prodname_codeql %} 查询套件](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/)”。
{% endif %}

{% ifversion fpt %}We don't recommend referencing query suites directly from the `github/codeql` repository, like `github/codeql/cpp/ql/src@main`. 此类查询不可使用与其他查询所用版本相同的 {% data variables.product.prodname_codeql %} 版本编译，否则可能导致分析过程中出错。{% endif %}
