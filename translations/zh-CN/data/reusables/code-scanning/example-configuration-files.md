当您扫描代码时，此配置文件将 `security-and-quality` 查询套件添加到 {% data variables.product.prodname_codeql %} 运行的查询列表。 有关可供使用的查询套件的更多信息，请参阅“[运行其他查询](#running-additional-queries)”。

``` yaml
name: "My {% data variables.product.prodname_codeql %} config"

queries:
  - uses: security-and-quality
```

以下配置文件禁用默认查询，并指定一组要运行的自定义查询。 它还配置 {% data variables.product.prodname_codeql %} 以扫描  _src_ 目录中的文件（相对于根目录），并且排除 _node_modules_ 目录（也相对于根目录）以及名称以 _est.js_ 结尾的任何文件。

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
