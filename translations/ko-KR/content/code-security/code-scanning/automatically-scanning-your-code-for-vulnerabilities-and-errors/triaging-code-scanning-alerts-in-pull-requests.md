---
title: 끌어오기 요청에서 코드 검사 경고 심사
shortTitle: Triage alerts in pull requests
intro: '{% data variables.product.prodname_code_scanning %}에서 끌어오기 요청의 문제를 식별하는 경우 강조 표시된 코드를 검토하고 경고를 해결할 수 있습니다.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have read permission for a repository, you can see annotations on pull requests. With write permission, you can see detailed information and resolve {% data variables.product.prodname_code_scanning %} alerts for that repository.'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests
  - /code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Pull requests
  - Alerts
  - Repositories
ms.openlocfilehash: f73b0ef30b4512bc951fdbae4ae2f3c300e4c534
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148162744'
---
{% data reusables.code-scanning.beta %}

## 끌어오기 요청에 대한 {% data variables.product.prodname_code_scanning %} 결과 정보

{% data variables.product.prodname_code_scanning %}이 끌어오기 요청 확인으로 구성된 리포지토리에서 {% data variables.product.prodname_code_scanning %}은 끌어오기 요청의 코드를 확인합니다. 기본적으로 이는 기본 분기를 대상으로 하는 끌어오기 요청으로 제한되지만, 이 구성은 {% data variables.product.prodname_actions %} 내에서 또는 타사 CI/CD 시스템에서 변경할 수 있습니다. 변경 내용 병합으로 인해 대상 분기에 새 {% data variables.product.prodname_code_scanning %} 경고가 발생하면 경고가 여러 위치에서 보고됩니다.

- 끌어오기 요청에서 결과 확인 {% ifversion code-scanning-pr-conversations-tab %}
- 끌어오기 요청의 **대화** 탭(끌어오기 요청 검토의 일부) {% endif %} 
- 끌어오기 요청의 **변경된 파일** 탭

리포지토리에 대한 쓰기 권한이 있는 경우 **보안** 탭에서 기존 {% data variables.product.prodname_code_scanning %} 경고를 볼 수 있습니다. 리포지토리 경고에 대한 자세한 내용은 "[리포지토리에 대한 {% data variables.product.prodname_code_scanning %} 경고 관리](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)"를 참조하세요.

{% data variables.product.prodname_code_scanning %}이(가) 코드가 푸시될 때마다 검사하도록 구성된 리포지토리에서 {% data variables.product.prodname_code_scanning %}는 열려 있는 끌어오기 요청에 결과를 매핑하고 경고를 다른 끌어오기 요청 검사와 동일한 위치에 주석으로 추가합니다. 자세한 내용은 "[푸시할 때 검사](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-on-push)"를 참조하세요.

끌어오기 요청에서 {% data variables.product.prodname_code_scanning %}을 사용하는 보호된 분기를 대상으로 하고 리포지토리 소유자가 필요한 상태 확인을 구성한 경우 끌어오기 요청을 병합하기 전에 먼저 "{% data variables.product.prodname_code_scanning_capc %} 결과" 확인을 통과해야 합니다. 자세한 내용은 “[보호된 분기 정보](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)”를 참조하세요.

## 끌어오기 요청 확인으로서의 {% data variables.product.prodname_code_scanning %} 정보

{% data variables.product.prodname_code_scanning %}을 끌어오기 요청 확인으로 구성하는 여러 옵션이 있으므로 각 리포지토리의 정확한 설정은 다양하며 일부는 둘 이상의 검사를 받습니다. 

### {% data variables.product.prodname_code_scanning_capc %} 결과 확인

{% data variables.product.prodname_code_scanning %}의 모든 구성에 대해 {% data variables.product.prodname_code_scanning %}의 결과를 포함하는 확인은 **{% data variables.product.prodname_code_scanning_capc %} 결과** 입니다. 사용되는 각 분석 도구의 결과는 별도로 표시됩니다. 끌어오기 요청의 변경으로 인해 발생하는 모든 새 경고는 주석으로 표시됩니다. 

분석된 분기에 대한 전체 경고 집합을 보려면 **모든 분기 경고 보기를** 클릭합니다. 그러면 형식, 심각도, 태그 등을 기준으로 분기의 모든 경고를 필터링할 수 있는 전체 경고 보기가 열립니다. 자세한 내용은 "[리포지토리에 대한 코드 검사 경고 관리](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#filtering-and-searching-for-code-scanning-alerts)"를 참조하세요.

![끌어오기 요청에 대한 {% data variables.product.prodname_code_scanning_capc %} 결과 확인](/assets/images/help/repository/code-scanning-results-check.png)

### {% data variables.product.prodname_code_scanning_capc %} 결과 확인 실패

{% data variables.product.prodname_code_scanning %} 결과 확인에서 심각도가 `error`, `critical` 또는 `high`인 문제가 있으면 확인이 실패하고 확인 결과에 오류가 보고됩니다. {% data variables.product.prodname_code_scanning %}에서 찾은 모든 결과의 심각도가 낮으면 경고가 경고 또는 참고로 처리되고 확인이 성공합니다.

![끌어오기 요청에 대한 {% data variables.product.prodname_code_scanning %} 확인 실패](/assets/images/help/repository/code-scanning-check-failure.png)

끌어오기 요청 확인 실패를 유발하는 심각도 및 보안 심각도 수준을 지정하여 리포지토리 설정의 기본 동작을 재정의할 수 있습니다. 자세한 내용은 "[끌어오기 요청 확인이 실패하는 심각도 정의](/code-security/secure-coding/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure)"를 참조하세요.

### 기타 {% data variables.product.prodname_code_scanning %} 확인

구성에 따라 {% data variables.product.prodname_code_scanning %}이 구성된 끌어오기 요청에서 실행되는 추가 확인을 볼 수 있습니다. 이러한 확인은 일반적으로 코드를 분석하거나 {% data variables.product.prodname_code_scanning %} 결과를 업로드하는 워크플로입니다. 이러한 확인은 분석 관련 문제가 있을 때 해당 문제를 해결하는 데 유용합니다. 

예를 들어 리포지토리에서 {% data variables.code-scanning.codeql_workflow %}를 사용하는 경우 결과 검사가 실행되기 전에 각 언어에 **대해 {% data variables.product.prodname_codeql %} / 분석(LANGUAGE)** 검사가 실행됩니다. 구성 문제가 있거나 끌어오기 요청에서 분석을 컴파일해야 하는 언어(예: C/C++, C# 또는 Java)에 대한 빌드를 중단하는 경우 분석 확인이 실패할 수 있습니다. 

다른 끌어오기 요청 확인과 마찬가지로 **확인** 탭에서 확인 실패에 대한 전체 세부 정보를 볼 수 있습니다. 구성 및 문제 해결에 대한 자세한 내용은 "[{% data variables.product.prodname_code_scanning %} 구성](/code-security/secure-coding/configuring-code-scanning)" 또는 "[{% data variables.product.prodname_codeql %} 워크플로 문제 해결](/code-security/secure-coding/troubleshooting-the-codeql-workflow)"을 참조하세요.

## 끌어오기 요청에 대한 경고 보기

{% ifversion code-scanning-pr-conversations-tab %} **대화** 탭을 보면 끌어오기 요청에 도입된 {% data variables.product.prodname_code_scanning %} 경고를 확인할 수 있습니다. {% data variables.product.prodname_code_scanning_capc %}은 각 경고를 경고가 트리거된 코드 줄에 주석으로 표시하는 끌어오기 요청 검토를 게시합니다. 주석에서 직접 경고에 대해 주석을 달고, 경고를 해제하고, 경고의 경로를 볼 수 있습니다. "자세한 정보 표시" 링크를 클릭하여 경고 세부 정보 페이지로 이동하면 경고의 전체 세부 정보를 볼 수 있습니다.

![끌어오기 요청 대화 탭 내의 경고 주석](/assets/images/help/repository/code-scanning-pr-conversation-tab.png)

끌어오기 요청의 **변경된 파일** 탭에서 모든 {% data variables.product.prodname_code_scanning %} 경고를 볼 수도 있습니다. 끌어오기 요청에 도입된 변경 내용의 차이를 벗어나는 파일에 대한 기존 {% data variables.product.prodname_code_scanning %} 경고는 **변경된 파일** 탭에만 표시됩니다.

{% else %} **변경된 파일** 탭을 표시하여 끌어오기 요청에 도입된 {% data variables.product.prodname_code_scanning %} 경고를 볼 수 있습니다. 각 경고는 해당 경고를 트리거한 코드 줄에 주석으로 표시됩니다. 경고의 심각도는 주석에 표시됩니다. 

![끌어오기 요청 차이 내의 경고 주석](/assets/images/help/repository/code-scanning-pr-annotation.png) {% endif %}

리포지토리에 대한 쓰기 권한이 있는 경우 일부 주석에는 경고에 대한 추가 컨텍스트가 있는 링크가 포함됩니다. 위 예제의 {% data variables.product.prodname_codeql %} 분석에서 **user-provided value**(사용자 제공 값)를 클릭하여 신뢰할 수 없는 데이터가 데이터 흐름에 들어가는 위치(이를 원본이라고 함)를 확인할 수 있습니다. 이 경우 **경로 표시** 를 클릭하여 원본에서 데이터를 사용하는 코드(싱크)까지의 전체 경로를 볼 수도 있습니다. 이렇게 하면 데이터를 신뢰할 수 없는지 또는 분석에서 원본과 싱크 간의 데이터 삭제 단계를 인식하지 못했는지를 쉽게 확인할 수 있습니다. {% data variables.product.prodname_codeql %}을 사용하여 데이터 흐름을 분석하는 방법에 대한 자세한 내용은 "[데이터 흐름 분석 정보](https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/)"를 참조하세요.

경고에 대한 자세한 내용을 보려면 쓰기 권한이 있는 사용자가 주석에 표시된 **자세히** 링크를 클릭할 수 있습니다. 이렇게 하면 경고 보기에서 도구가 제공하는 모든 컨텍스트 및 메타데이터를 볼 수 있습니다. 아래 예제에서는 문제에 대한 심각도, 형식 및 관련 CWE(Common Weakness Enumeration)를 보여 주는 태그를 볼 수 있습니다. 또한 보기에서는 문제가 발생한 커밋을 보여 줍니다.

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} {% data reusables.code-scanning.alert-default-branch %} {% endif %}

경고에 대한 자세한 보기에서 {% data variables.product.prodname_codeql %} 분석과 같은 일부 {% data variables.product.prodname_code_scanning %} 도구에는 문제에 대한 설명 및 **자세히 표시** 코드를 수정하는 방법의 지침에 대한 링크도 포함되어 있습니다.

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} ![ 경고 설명 및 링크 - 추가 정보](/assets/images/help/repository/code-scanning-pr-alert.png) 표시 {% else %} ![경고 설명 및 추가 정보](/assets/images/enterprise/3.4/repository/code-scanning-pr-alert.png) 표시 링크 {% endif %}

{% ifversion code-scanning-pr-conversations-tab %}
## 끌어오기 요청에서 경고에 대한 주석 처리

끌어오기 요청의 변경 내용에 의해 도입된 {% data variables.product.prodname_code_scanning %} 경고에 대해 주석을 달 수 있습니다. 경고는 끌어오기 요청 검토의 일부로 끌어오기 요청의 **대화** 탭에 주석으로 표시되며 **변경된 파일** 탭에도 표시됩니다. 끌어오기 요청의 변경 내용에 의해 도입된 경고에 대해서만 주석을 달 수 있습니다. 끌어오기 요청에 도입된 변경 내용을 벗어나는 파일에 대한 기존 {% data variables.product.prodname_code_scanning %} 경고는 **변경된 파일** 탭에 표시되지만 주석을 달 수는 없습니다.

끌어오기 요청을 병합하기 전에 {% data variables.product.prodname_code_scanning %} 경고에 대한 대화를 포함하여 끌어오기 요청의 모든 대화를 확인하도록 선택할 수 있습니다. 자세한 내용은 “[보호된 분기 정보](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-conversation-resolution-before-merging)”를 참조하세요.
{% endif %}
## 끌어오기 요청에 대한 경고 수정

끌어오기 요청에 대한 푸시 액세스 권한이 있는 사용자는 해당 끌어오기 요청에서 식별된 {% data variables.product.prodname_code_scanning %} 경고를 수정할 수 있습니다. 끌어오기 요청에 대한 변경 내용을 커밋하면 끌어오기 요청 확인의 새 실행이 트리거됩니다. 변경 내용으로 문제가 해결되면 경고가 종료되고 주석이 제거됩니다.

## 끌어오기 요청에 대한 경고 해제

경고를 종료하는 다른 방법은 경고를 해제하는 것입니다. 수정할 필요가 없다고 생각되면 경고를 해제할 수 있습니다. {% data reusables.code-scanning.close-alert-examples %} 리포지토리에 대한 쓰기 권한이 있는 경우 코드 주석 및 경고 요약에서 **해제** 단추를 사용할 수 있습니다. **해제** 를 클릭하면 경고를 종료하는 이유를 선택하라는 메시지가 표시됩니다.
{% ifversion comment-dismissed-code-scanning-alert %} ![해제 이유를 선택하기 위한 드롭다운이 강조 표시된 코드 검사 경고의 스크린샷](/assets/images/help/repository/code-scanning-alert-dropdown-reason.png) {% else %} ![경고를 해제하는 이유 선택](/assets/images/help/repository/code-scanning-alert-close-drop-down.png) {% endif %} {% data reusables.code-scanning.choose-alert-dismissal-reason %}

{% data reusables.code-scanning.false-positive-fix-codeql %}

경고를 해제하는 방법에 대한 자세한 내용은 {% ifversion delete-code-scanning-alerts %}"[리포지토리에 대한 {% data variables.product.prodname_code_scanning %} 경고 관리](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#dismissing-or-deleting-alerts)"를 참조하세요.{% else %} " [리포지토리에 대한 {% data variables.product.prodname_code_scanning %} 경고 관리](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#dismissing--alerts)"를 참조하세요.{% endif %}
