---
title: 코드 검사
intro: '{% data variables.product.prodname_code_scanning %} API를 사용하면 리포지토리에서 {% data variables.product.prodname_code_scanning %} 경고를 검색하고 업데이트할 수 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
  - Code scanning
  - REST
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/code-scanning
ms.openlocfilehash: 29e04fddb96212e716f2f54b1b62e99fcff1e4da
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061396'
---
{% data reusables.code-scanning.beta %}

## 코드 검사 API 정보

{% data variables.product.prodname_code_scanning %} API를 사용하면 리포지토리에서 {% data variables.product.prodname_code_scanning %} 경고를 검색하고 업데이트할 수 있습니다. 엔드포인트를 사용하여 조직의 {% data variables.product.prodname_code_scanning %} 경고에 대한 자동화된 보고서를 만들거나 오프라인 {% data variables.product.prodname_code_scanning %} 도구를 사용하여 생성된 분석 결과를 업로드할 수 있습니다. 자세한 내용은 “[코드에서 보안 취약성 및 오류 찾기](/github/finding-security-vulnerabilities-and-errors-in-your-code)”를 참조하세요.

### {% data variables.product.prodname_code_scanning %}에 대한 사용자 지정 미디어 유형

{% data variables.product.prodname_code_scanning %} REST API에 대해 지원되는 사용자 지정 미디어 유형이 하나 있습니다. 

    application/sarif+json

`/analyses/{analysis_id}` 엔드포인트로 전송된 `GET` 요청과 함께 이를 사용할 수 있습니다. 이 작업에 대한 자세한 내용은 “[리포지토리에 대한 {% data variables.product.prodname_code_scanning %} 분석 가져오기](#get-a-code-scanning-analysis-for-a-repository)”를 참조하세요. 이 작업에서 이 미디어 형식을 사용하면 기본 미디어 형식을 사용할 때 반환되는 분석의 요약이 아니라 지정된 분석을 위해 업로드된 실제 데이터의 하위 집합이 응답에 포함됩니다. `github/alertNumber` 및 `github/alertUrl` 속성 같은 추가 데이터도 응답에 포함됩니다. 데이터는 [SARIF 버전 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html)으로 형식이 지정됩니다.

자세한 내용은 “[미디어 유형](/rest/overview/media-types)”을 참조하세요.
