Este arquivo de configuração adiciona o suite de consulta de `security-and-quality` para a lista de consultas executadas por {% data variables.product.prodname_codeql %} ao fazer a varredura do seu código. Para obter mais informações sobre o suite de consultas disponível para uso, consulte "[Executar consultas adicionais](#running-additional-queries)".

``` yaml
name: "My {% data variables.product.prodname_codeql %} config"

queries:
  - uses: security-and-quality
```

O seguinte arquivo de configuração desabilita as consultas-padrão e especifica um conjunto de consultas personalizadas para serem executadas. Também configura {% data variables.product.prodname_codeql %} para fazer a varredura de arquivos no diretório _src_ (relativo à raiz), exceto o diretório _src/node_modules_ e os arquivos cujo nome termina com _.test.js_. Os arquivos em _src/node_modules_ e arquivos com nomes terminados em _.test.js_ são, portanto, excluídos da análise.

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
