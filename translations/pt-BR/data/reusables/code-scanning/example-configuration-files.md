---
ms.openlocfilehash: 77c9b4b73d2d839bc9c0bdaa73ffc148f0eda6ca
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107905"
---
Este arquivo de configuração adiciona o conjunto de consulta `security-and-quality` à lista de consultas executadas pelo {% data variables.product.prodname_codeql %} ao fazer a verificação do seu código. Para obter mais informações sobre os conjuntos de consulta disponíveis para uso, veja "[Executando consultas adicionais](#running-additional-queries)".

``` yaml
name: "My {% data variables.product.prodname_codeql %} config"

queries:
  - uses: security-and-quality
```

O seguinte arquivo de configuração desabilita as consultas-padrão e especifica um conjunto de consultas personalizadas para serem executadas. Ele também configura o {% data variables.product.prodname_codeql %} para verificar arquivos no diretório _src_ (em relação à raiz), com exceção do diretório _src/node_modules_ e exceto arquivos cujos nomes terminam em _.test.js_. Os arquivos no _src/node_modules_ e arquivos com nomes que terminam em _.test.js_ são, portanto, excluídos da análise.

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

{% ifversion code-scanning-exclude-queries-from-analysis %}

O arquivo de configuração a seguir executa apenas consultas que geram alertas de erro de gravidade. A configuração primeiro seleciona todas as consultas padrão, todas as consultas em `./my-queries` e o pacote padrão em `codeql/java-queries`, depois exclui todas as consultas que geram avisos ou recomendações. 

``` yaml
queries:
  - name: Use an in-repository QL pack (run queries in the my-queries directory)
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
