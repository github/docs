---
ms.openlocfilehash: 77c9b4b73d2d839bc9c0bdaa73ffc148f0eda6ca
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109228"
---
この構成ファイルは、コードのスキャン時に {% data variables.product.prodname_codeql %} によって実行されるクエリのリストに `security-and-quality` クエリ スイートを追加します。 使用できるクエリ スイートの詳細については、「[追加のクエリを実行する](#running-additional-queries)」を参照してください。

``` yaml
name: "My {% data variables.product.prodname_codeql %} config"

queries:
  - uses: security-and-quality
```

以下の設定ファイルはデフォルトのクエリを無効化し、その代わりに実行するカスタムクエリのセットを指定します。 また、{% data variables.product.prodname_codeql %} が、_src/node_modules_ ディレクトリと _.test.js_ で名前が終わるファイルを除く、_src_ ディレクトリ (ルートに対する相対) 内のファイルをスキャンするようにも設定します。 _src/node_modules_ 内のファイルと末尾が _.test.js_ で終わる名前のファイルは、分析から除外されます。

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

次の構成ファイルを使用すると、重大度エラーのアラートを生成するクエリのみが実行されます。 構成では、最初にすべての既定のクエリ、`./my-queries` 内のすべてのクエリ、および `codeql/java-queries` 内の既定のスイートを選んでから、警告または推奨事項を生成するすべてのクエリを除外します。 

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
