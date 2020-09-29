当您扫描代码时，此配置文件将 `security-and-quality` 查询套件添加到 {% data variables.product.prodname_codeql %} 运行的查询列表。 有关可供使用的查询套件的更多信息，请参阅“[运行其他查询](#running-additional-queries)”。

``` yaml
name: "My {% data variables.product.prodname_codeql %} config"

queries:
  - uses: security-and-quality
```

The following configuration file disables the default queries and specifies a set of custom queries to run instead. It also configures {% data variables.product.prodname_codeql %} to scan files in the  _src_ directory (relative to the root), and to exclude the _node_modules_ directory (also relative to the root), as well as any file whose name ends in _.test.js_.

``` yaml
name: "My {% data variables.product.prodname_codeql %} config"

disable-default-queries: true

queries:
  - name: Use an in-repository {% data variables.product.prodname_ql %} pack (run queries in the my-queries directory)
    uses: ./my-queries
  - name: Use an external JavaScript {% data variables.product.prodname_ql %} pack (run queries from an external repo)
    uses: octo-org/javascript-qlpack@main
  - name: Use an external query (run a single query from an external {% data variables.product.prodname_ql %} pack)
    uses: octo-org/python-qlpack/show_ifs.ql@main
  - name: Use a query suite file (run queries from a query suite in this repo)
    uses: ./codeql-qlpacks/complex-python-qlpack/rootAndBar.qls

paths-ignore: 
  - node_modules
  - '**/*.test.js'
paths:
  - src 
```
