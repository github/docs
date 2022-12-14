---
title: 코드 검사 경고 정보
intro: 다양한 유형의 코드 검사 경고 및 각 경고가 강조 표시하는 문제를 이해하는 데 도움이 되는 정보에 대해 알아봅니다.
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
ms.openlocfilehash: 1e540aa8b061e0bbdd5b7be1a2563cd983cfb753
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881229'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## {% data variables.product.prodname_code_scanning %}의 경고 정보

기본 {% data variables.product.prodname_codeql %} 분석, 타사 분석 또는 여러 유형의 분석을 사용하여 리포지토리의 코드를 확인하도록 {% data variables.product.prodname_code_scanning %}을 설정할 수 있습니다. 분석이 완료되면 결과 경고가 리포지토리의 보안 보기에 나란히 표시됩니다. 타사 도구 또는 사용자 지정 쿼리의 결과에는 {% data variables.product.company_short %}의 기본 {% data variables.product.prodname_codeql %} 분석에서 감지한 경고에 대해 표시되는 속성 중 일부가 포함되지 않을 수 있습니다. 자세한 내용은 “[리포지토리에 대한 {% data variables.product.prodname_code_scanning %} 설정](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)”을 참조하세요.

기본적으로 {% data variables.product.prodname_code_scanning %}은 기본 분기 및 끌어오기 요청 중에 주기적으로 코드를 분석합니다. 끌어오기 요청에서 경고를 관리하는 방법에 대한 자세한 내용은 "[끌어오기 요청에서 {% data variables.product.prodname_code_scanning %} 경고 심사](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)"를 참조하세요.

## 경고 세부 정보

각 경고는 코드 관련 문제 및 이를 식별한 도구 이름을 강조 표시합니다. 경고를 트리거한 코드 줄과 경고 속성(예: 경고 심각도, 보안 심각도 및 문제의 특성)을 볼 수 있습니다. 또한 경고는 문제가 처음 발생한 시간을 알려줍니다. {% data variables.product.prodname_codeql %} 분석에서 식별한 경고의 경우 문제를 해결하는 방법에 대한 정보도 표시됩니다.

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.alert-default-branch %} {% endif %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![{% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-alert.png)의 경고 예제 {% else %} ![{% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/3.4/repository/code-scanning-alert.png)의 경고 예제 {% endif %}

{% data variables.product.prodname_codeql %}을 사용하여 {% data variables.product.prodname_code_scanning %}을 설정하면 코드에서 데이터 흐름 문제를 찾을 수도 있습니다. 데이터 흐름 분석은 코드에서 잠재적인 보안 문제(예: 안전하지 않은 데이터 사용, 함수에 위험한 인수 전달, 중요한 정보 유출)를 찾습니다.

{% data variables.product.prodname_code_scanning %}에서 데이터 흐름 경고를 보고하면 {% data variables.product.prodname_dotcom %}에서 데이터가 코드를 통해 이동하는 방법을 보여 줍니다. {% data variables.product.prodname_code_scanning_capc %}를 사용하면 중요한 정보를 유출하는 코드 영역을 식별할 수 있으며, 이 영역은 악의적인 사용자의 공격에 대한 진입점이 될 수 있습니다.

### 심각도 수준 정보

경고 심각도 수준은 `Error`, `Warning` 또는 `Note`일 수 있습니다.

{% data variables.product.prodname_code_scanning %}이 끌어오기 요청 확인으로 사용하도록 설정되는 경우 심각도가 `error`인 결과가 검색되면 확인이 실패합니다. 확인 실패가 발생하는 코드 검사 경고의 심각도 수준을 지정할 수 있습니다. 자세한 내용은 “[끌어오기 요청 확인이 실패하는 심각도 정의](/code-security/secure-coding/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure)”를 참조하세요.

### 보안 심각도 수준 정보

{% data variables.product.prodname_code_scanning_capc %}는 보안 쿼리에서 생성된 경고에 대한 보안 심각도 수준을 표시합니다. 보안 심각도 수준은 `Critical`, `High`, `Medium` 또는 `Low`일 수 있습니다.

경고의 보안 심각도를 계산하기 위해 CVSS(Common Vulnerability Scoring System) 데이터를 사용합니다. CVSS는 소프트웨어 취약성의 특성 및 심각도를 전달하기 위한 개방형 프레임워크이며, 일반적으로 다른 보안 제품에서 경고 점수를 매기는 데 사용됩니다. 심각도 수준을 계산하는 방법에 대한 자세한 내용은 [이 블로그 게시물](https://github.blog/changelog/2021-07-19-codeql-code-scanning-new-severity-levels-for-security-alerts/)을 참조하세요.

기본적으로 보안 심각도가 `Critical` 또는 `High`인 모든 {% data variables.product.prodname_code_scanning %} 결과로 인해 확인 실패가 발생합니다. 확인 실패가 발생해야 하는 {% data variables.product.prodname_code_scanning %} 결과에 대한 보안 심각도 수준을 지정할 수 있습니다. 자세한 내용은 “[끌어오기 요청 확인이 실패하는 심각도 정의](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure)”를 참조하세요.

{% ifversion fpt or ghes > 3.4 or ghae-issue-6251 or ghec %}
### 분석 원본 정보

다양한 도구를 사용하고 다양한 언어 또는 코드 영역을 대상으로 하여 리포지토리에서 여러 코드 분석 구성을 설정할 수 있습니다. 코드 검사의 각 구성은 생성하는 모든 경고에 대한 분석 원본입니다. 예를 들어 GitHub Actions에서 기본 CodeQL 분석을 사용하여 생성된 경고는 외부에서 생성되고 코드 검사 API를 통해 업로드된 경고와 다른 분석 원본을 갖습니다.

여러 구성을 사용하여 파일을 분석하는 경우 동일한 쿼리에서 검색된 모든 문제는 여러 분석 원본이 있는 경고로 보고됩니다. 경고에 둘 이상의 분석 원본이 있는 경우 {% octicon "workflow" aria-label="The workflow icon" %} 아이콘이 경고 페이지의 오른쪽에 있는 **영향을 받는 분기** 섹션의 관련 분기 옆에 표시됩니다. 마우스로 {% octicon "workflow" aria-label="The workflow icon" %} 아이콘 위를 가리키면 각 분석 원본의 이름과 해당 분석 원본에 대한 경고 상태를 볼 수 있습니다. 또한 경고 페이지의 타임라인에서 각 분석 원본에 경고가 발생한 시점의 기록을 볼 수 있습니다. 경고에 하나의 분석 원본만 있는 경우 경고 페이지에 분석 원본에 대한 정보가 표시되지 않습니다.

![여러 분석 원본이 있는 코드 검사 경고](/assets/images/help/repository/code-scanning-analysis-origins.png)

{% note %}

**참고:** 코드 검사 경고가 한 분석 원본에 대해 고정된 것으로 표시되지만 두 번째 분석 원본에 대해 여전히 열려 있는 경우가 있습니다. 이 문제는 두 번째 코드 검사 구성을 다시 실행하여 해당 분석 원본에 대한 경고 상태를 업데이트하면 해결할 수 있습니다.

{% endnote %}

{% endif %}
### 애플리케이션 코드에 없는 경고에 대한 레이블 정보

{% data variables.product.product_name %}은 범주 레이블을 애플리케이션 코드에 없는 경고에 할당합니다. 레이블은 경고의 위치와 관련이 있습니다.

- **생성됨**: 빌드 프로세스에서 생성된 코드
- **테스트**: 테스트 코드
- **라이브러리**: 라이브러리 또는 타사 코드
- **설명서**: 설명서

{% data variables.product.prodname_code_scanning_capc %}는 파일을 파일 경로별로 분류합니다. 원본 파일은 수동으로 분류할 수 없습니다.

라이브러리 코드에서 발생하는 것으로 표시된 경고의 {% data variables.product.prodname_code_scanning %} 경고 목록의 예는 다음과 같습니다.

![목록의 코드 검사 라이브러리 경고](/assets/images/help/repository/code-scanning-library-alert-index.png)

경고 페이지에서 파일 경로가 라이브러리 코드(`Library` 레이블)로 표시된 것을 볼 수 있습니다.

![코드 검사 라이브러리 경고 세부 정보](/assets/images/help/repository/code-scanning-library-alert-show.png)

{% ifversion codeql-ml-queries %}

## 실험적 경고 정보

{% data reusables.code-scanning.beta-codeql-ml-queries %}

{% data variables.product.prodname_codeql %} 작업을 사용하여 {% data variables.product.prodname_code_scanning %}을 실행하는 리포지토리에서 '실험적'으로 표시된 일부 경고가 표시될 수 있습니다. 기존 {% data variables.product.prodname_codeql %} 쿼리의 기능을 확장하기 위해 기계 학습 모델을 사용하여 검색된 경고입니다.

![목록의 코드 검사 실험적 경고](/assets/images/help/repository/code-scanning-experimental-alert-list.png)

### 기계 학습 모델을 사용하여 쿼리 확장의 이점

기계 학습 모델을 사용하는 쿼리는 원래 쿼리 작성기에 포함되지 않은 프레임워크 및 라이브러리를 사용하여 작성된 코드에서 취약성을 찾을 수 있습니다.

{% data variables.product.prodname_codeql %}에 대한 각 보안 쿼리는 특정 유형의 공격에 취약한 코드를 식별합니다. 보안 연구원은 쿼리를 작성하고, 가장 일반적인 프레임워크 및 라이브러리를 포함합니다. 따라서 기존의 각 쿼리는 일반적인 프레임워크 및 라이브러리의 취약한 사용을 찾습니다. 그러나 개발자는 다양한 프레임워크와 라이브러리를 사용하지만, 수동으로 유지 관리되는 쿼리에 모두 포함할 수 없습니다. 따라서 수동으로 유지 관리되는 쿼리는 모든 프레임워크 및 라이브러리에 대한 적용 범위를 제공하지 않습니다.

{% data variables.product.prodname_codeql %}은 기계 학습 모델을 통해 기존 보안 쿼리를 확장하여 더 광범위한 프레임워크 및 라이브러리를 처리합니다. 기계 학습 모델은 이전에 확인되지 않은 코드의 문제를 검색하도록 학습되었습니다. 모델을 사용하는 쿼리는 원래 쿼리에 설명되지 않은 프레임워크 및 라이브러리에 대한 결과를 찾습니다.

### 기계 학습을 사용하여 식별된 경고

기계 학습 모델을 사용하여 검색된 경고는 "실험적 경고"로 태그가 지정되어 해당 기술이 활성 개발 중임을 표시합니다. 이러한 경고는 기반이 되는 쿼리보다 가양성 결과의 비율이 더 높습니다. 기계 학습 모델은 잘못된 결과를 가양성으로 표시하거나 좋은 결과를 수정하는 것과 같은 사용자 작업에 따라 향상됩니다.

![코드 검사 실험적 경고 세부 정보](/assets/images/help/repository/code-scanning-experimental-alert-show.png)

## 실험적 경고 사용

기본 {% data variables.product.prodname_codeql %} 쿼리 도구 모음에는 기계 학습을 사용하여 실험적 경고를 생성하는 쿼리가 포함되어 있지 않습니다. {% data variables.product.prodname_code_scanning %} 중에 기계 학습 쿼리를 실행하려면 다음 쿼리 도구 모음 중 하나에 포함된 추가 쿼리를 실행해야 합니다.

{% data reusables.code-scanning.codeql-query-suites %}

추가 쿼리 도구 모음을 실행하도록 워크플로를 업데이트하면 분석 시간이 늘어납니다.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    # Run extended queries including queries using machine learning
    queries: security-extended
```

자세한 내용은 “[코드 검사 구성](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-queries-in-ql-packs)”을 참조하세요.

## 실험적 경고 사용 안 함

기계 학습을 사용하여 실험적 경고를 생성하는 쿼리를 사용하지 않도록 설정하는 가장 간단한 방법은 `security-extended` 또는 `security-and-quality` 쿼리 도구 모음의 실행을 중지하는 것입니다. 위의 예제에서는 `queries` 줄을 주석으로 처리합니다. `security-extended` 또는 `security-and-quality` 도구 모음을 계속 실행해야 하고 기계 학습 쿼리로 인해 문제가 발생하는 경우 다음 세부 정보를 사용하여 [{% data variables.product.company_short %} 지원](https://support.github.com/contact)을 통해 티켓을 열 수 있습니다.

- 티켓 제목: "{% data variables.product.prodname_code_scanning %}: 실험적 경고 베타에서 제거"
- 영향을 받는 리포지토리 또는 조직의 세부 정보 지정
- 엔지니어링에 대한 에스컬레이션 요청

{% endif %}
