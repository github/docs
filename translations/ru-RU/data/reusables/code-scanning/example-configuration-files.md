---
ms.openlocfilehash: 77c9b4b73d2d839bc9c0bdaa73ffc148f0eda6ca
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109231"
---
Этот файл конфигурации добавляет набор запросов `security-and-quality` в список запросов, выполняемых {% data variables.product.prodname_codeql %} при сканировании кода. Дополнительные сведения о наборах запросов, доступных для использования, см. в разделе [Выполнение дополнительных запросов](#running-additional-queries).

``` yaml
name: "My {% data variables.product.prodname_codeql %} config"

queries:
  - uses: security-and-quality
```

Следующий файл конфигурации отключает запросы по умолчанию и задает набор пользовательских запросов для выполнения. Он также настраивает {% data variables.product.prodname_codeql %} на сканирование файлов в каталоге _src_ (относительно корневого каталога), кроме каталога _src/node_modules_ и кроме файлов, имя которых заканчивается на _.test.js_. Поэтому файлы в папке _src/node_modules_ и файлы с именами, заканчивающимися на _.test.js_, исключаются из анализа.

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

Следующий файл конфигурации выполняет только запросы, которые создают оповещения об ошибке. Сначала конфигурация выбирает все запросы по умолчанию, все запросы в `./my-queries` и набор по умолчанию в `codeql/java-queries`, а затем исключает все запросы, которые создают предупреждения или рекомендации. 

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
