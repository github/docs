使用 {% data variables.product.prodname_codeql %} 扫描代码时，{% data variables.product.prodname_codeql %} 分析引擎将从代码生成数据库并对其运行查询。 更多信息请参阅“[关于 {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning#about-codeql)”。

{% data variables.product.prodname_codeql %} 分析使用默认的查询集，但除了默认查询外，您还可以指定更多的查询来运行。 要运行的查询必须属于 {% data variables.product.prodname_ql %} 包，可以位于您拥有的仓库或任何公共仓库中。 更多信息请参阅“[关于 {% data variables.product.prodname_ql %} 包](https://help.semmle.com/codeql/codeql-cli/reference/qlpack-overview.html)”。

查询只能依赖于标准库（即查询中的 `import LANGUAGE` 语句引用的库）或与查询相同的 {% data variables.product.prodname_ql %} 包中的库。 标准库位于 [github/codeql](https://github.com/github/codeql) 仓库中。 更多信息请参阅“[关于 CodeQL 查询](https://help.semmle.com/QL/learn-ql/writing-queries/introduction-to-queries.html)。”

您可以指定一个 _.ql_ 文件（一个目录中包含多个 _.ql_ 文件）、一个 _.qls_ 查询套件定义文件或任意组合。 有关查询套件定义的更多信息，请参阅“[创建 {% data variables.product.prodname_codeql %} 查询套件](https://help.semmle.com/codeql/codeql-cli/procedures/query-suites.html)”。

{% if currentVersion == "free-pro-team@latest" %}不建议直接从 `github/codeql` 仓库引用查询套件，如 `github/codeql/cpp/ql/src@main`。 此类查询不可使用与其他查询所用版本相同的 {% data variables.product.prodname_codeql %} 版本编译，否则可能导致分析过程中出错。{% endif %}
