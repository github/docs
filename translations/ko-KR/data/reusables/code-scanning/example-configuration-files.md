---
ms.openlocfilehash: 77c9b4b73d2d839bc9c0bdaa73ffc148f0eda6ca
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109229"
---
이 구성 파일은 코드를 스캔할 때 {% data variables.product.prodname_codeql %}에서 실행하는 쿼리 목록에 `security-and-quality` 쿼리 도구 모음을 추가합니다. 사용할 수 있는 쿼리 도구 모음에 대한 자세한 내용은 “[추가 쿼리 실행](#running-additional-queries)”을 참조하세요.

``` yaml
name: "My {% data variables.product.prodname_codeql %} config"

queries:
  - uses: security-and-quality
```

다음 구성 파일은 기본 쿼리를 사용하지 않도록 설정하고 대신 실행할 사용자 지정 쿼리 집합을 지정합니다. 또한 _src/node_modules_ 디렉터리와 이름이 _.test.js_ 로 끝나는 파일을 제외하고 _src_ 디렉터리(루트를 기준으로)의 파일을 스캔하도록 {% data variables.product.prodname_codeql %}을 구성합니다. 따라서 _src/node_modules_ 의 파일과 이름이 _.test.js_ 로 끝나는 파일은 분석에서 제외됩니다.

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

다음 구성 파일은 심각도 오류 경고를 생성하는 쿼리만 실행합니다. 구성은 먼저 모든 기본 쿼리, `./my-queries`의 모든 쿼리 및 `codeql/java-queries`의 기본 도구 모음을 선택한 다음 경고 또는 권장 사항을 생성하는 모든 쿼리를 제외합니다. 

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
