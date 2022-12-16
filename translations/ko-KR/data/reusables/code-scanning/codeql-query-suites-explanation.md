---
ms.openlocfilehash: 6581cf0b9a8c740d04e96d3049ff51e89f570666
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146180873"
---
다음 쿼리 도구 모음은 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}에 기본 제공되며 사용할 수 있습니다.

{% data reusables.code-scanning.codeql-query-suites %}

쿼리 도구 모음을 지정하면 {% data variables.product.prodname_codeql %} 분석 엔진은 기본 쿼리 집합과 추가 쿼리 도구 모음에 정의된 추가 쿼리를 실행합니다. {% ifversion codeql-ml-queries %}JavaScript용 `security-extended` 및 `security-and-quality` 쿼리 도구 모음에는 실험적 쿼리가 포함되어 있습니다. 자세한 내용은 “[{% data variables.product.prodname_code_scanning %} 경고 정보](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts)”를 참조하세요.{% endif %}
