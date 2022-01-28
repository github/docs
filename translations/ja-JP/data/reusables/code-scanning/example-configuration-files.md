この設定ファイルは、コードのスキャン時に {% data variables.product.prodname_codeql %} によって実行されるクエリのリストに `security-and-quality` クエリスイートを追加します。 使用可能なクエリスイートの詳細については、「[追加のクエリを実行する](#running-additional-queries)」を参照してください。

``` yaml
name: "My {% data variables.product.prodname_codeql %} config"

queries:
  - uses: security-and-quality
```

以下の設定ファイルはデフォルトのクエリを無効化し、その代わりに実行するカスタムクエリのセットを指定します。 また、{% data variables.product.prodname_codeql %}が_src/node_modules_ディレクトリと_.test.js_で名前が終わるファイルを除く、_src_ディレクトリ（ルートに対する相対）内のファイルをスキャンするようにも設定します。 したがって、 _src/node_modules_内のファイル や、_.test.js_で名前が終わるファイルは分析から除外されます。

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

paths:
  - src 
paths-ignore: 
  - src/node_modules
  - '**/*.test.js'
```
