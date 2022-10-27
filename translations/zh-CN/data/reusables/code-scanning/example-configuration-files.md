---
ms.openlocfilehash: 77c9b4b73d2d839bc9c0bdaa73ffc148f0eda6ca
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108159"
---
当扫描代码时，此配置文件将 `security-and-quality` 查询套件添加到 {% data variables.product.prodname_codeql %} 运行的查询列表中。 有关可供使用的查询套件的详细信息，请参阅“[运行其他查询](#running-additional-queries)”。

``` yaml
name: "My {% data variables.product.prodname_codeql %} config"

queries:
  - uses: security-and-quality
```

以下配置文件禁用默认查询，并指定一组要运行的自定义查询。 它还配置 {% data variables.product.prodname_codeql %} 以扫描 src 目录（相对于根目录）中的文件，除了 src/node_modules 目录和名称以 .test.js 结尾的文件  。 因此，src/node_modules 中的文件和名称以 .test.js 结尾的文件被排除在分析之外 。

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

以下配置文件仅运行生成严重性错误警报的查询。 该配置首先选择所有默认查询、`./my-queries` 中的所有查询以及 `codeql/java-queries` 中的默认套件，然后排除生成警告或建议的所有查询。 

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
