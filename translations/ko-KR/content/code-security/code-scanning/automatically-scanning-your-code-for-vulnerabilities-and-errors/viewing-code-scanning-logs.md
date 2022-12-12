---
title: 코드 검사 로그 보기
intro: '{% 데이터 variables.location.product_location %}에서 {% 데이터 variables.product.prodname_code_scanning %} 분석 중에 생성된 출력을 볼 수 있습니다.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can view the {% data variables.product.prodname_code_scanning %} logs for that repository.'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Security
shortTitle: View code scanning logs
ms.openlocfilehash: f89d57c2ddd8c405eb95645476f470df70a0f5a8
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098805'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## {% data variables.product.prodname_code_scanning %} 설정 정보 

다양한 도구를 사용하여 리포지토리에서 {% data variables.product.prodname_code_scanning %}를 설정할 수 있습니다. 자세한 내용은 "[리포지토리에 대한 {% data variables.product.prodname_code_scanning %} 설정](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#options-for-setting-up-code-scanning)"을 참조하세요.

사용할 수 있는 로그 및 진단 정보는 리포지토리의 {% data variables.product.prodname_code_scanning %}에 사용하는 방법에 따라 달라집니다. 경고 목록의 **도구** 드롭다운 메뉴를 사용하여 리포지토리의 **보안** 탭에서 사용 중인 {% data variables.product.prodname_code_scanning %}의 유형을 확인할 수 있습니다. 자세한 내용은 "[리포지토리에 대한 {% data variables.product.prodname_code_scanning %} 경고 관리](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)"를 참조하세요.

## 분석 및 진단 정보 소개

{% data variables.product.prodname_dotcom %}에서 {% data variables.product.prodname_codeql %} 분석을 사용하여 실행된 {% data variables.product.prodname_code_scanning %}에 대한 분석 및 진단 정보를 확인할 수 있습니다. 

**분석** 정보는 경고 목록 맨 위에 있는 헤더의 최신 분석에 대해 표시됩니다. 자세한 내용은 “[리포지토리에 대한 코드 검사 경고 관리](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)를 참조하세요.

**진단** 정보는 작업 워크플로 로그에 표시되며 요약 메트릭과 추출 진단으로 구성됩니다. {% data variables.product.prodname_dotcom %}에서 {% data variables.product.prodname_code_scanning %} 로그에 액세스하는 방법에 대한 자세한 내용은 아래의 "[{% data variables.product.prodname_code_scanning %}에서 로깅 출력 보기](#viewing-the-logging-output-from-code-scanning)"를 참조하세요.

{% data variables.product.prodname_dotcom %} 외부에서 {% data variables.product.prodname_codeql_cli %}를 사용하는 경우 데이터베이스 분석 중에 생성된 출력에 진단 정보가 표시됩니다. 이 정보는 {% data variables.product.prodname_code_scanning %} 결과와 함께 {% data variables.product.prodname_dotcom %}로 업로드하는 SARIF 결과 파일에도 포함됩니다.

{% data variables.product.prodname_codeql_cli %}에 대한 자세한 내용은 "[CI 시스템에서 {% data variables.product.prodname_codeql_cli %} 구성](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system#viewing-log-and-diagnostic-information)"을 참조하세요.

### 요약 메트릭 정보

{% data reusables.code-scanning.summary-metrics %}

### {% data variables.product.prodname_codeql %} 소스 코드 추출 진단 정보

{% data reusables.code-scanning.extractor-diagnostics %}

{% ifversion codeql-action-debug-logging %}

디버그 로깅을 사용하도록 설정하여 데이터베이스를 만드는 동안 발생한 {% data variables.product.prodname_codeql %} 추출기 오류 및 경고에 대한 자세한 정보를 볼 수 있습니다. 자세한 내용은 “[CodeQL 워크플로 문제 해결](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow#creating-codeql-debugging-artifacts-by-re-running-jobs-with-debug-logging-enabled)”을 참조하세요.

{% endif %}

## {% data variables.product.prodname_code_scanning %}의 로깅 출력 보기

이 섹션은 {% data variables.product.prodname_actions %}({% data variables.product.prodname_codeql %} 또는 타사)를 사용하여 실행된 {% data variables.product.prodname_code_scanning %}에 적용됩니다.

리포지토리에 대한 {% data variables.product.prodname_code_scanning %}를 설정한 후에는 실행할 때 작업의 출력을 볼 수 있습니다.

{% data reusables.repositories.actions-tab %}

  {% data variables.product.prodname_code_scanning %} 워크플로를 실행하기 위한 항목이 포함된 목록이 표시됩니다. 항목의 텍스트는 커밋 메시지에 지정한 제목입니다.

  ![{% data variables.product.prodname_code_scanning %} 워크플로를 보여 주는 작업 목록](/assets/images/help/repository/code-scanning-actions-list.png)

1. {% data variables.product.prodname_code_scanning %} 워크플로의 항목을 클릭합니다.

2. 왼쪽에서 작업 이름을 클릭합니다. 예: **Analyze (LANGUAGE)** .

  ![{% data variables.product.prodname_code_scanning %} 워크플로의 로그 출력](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. 실행 시 이 워크플로의 작업에서 발생하는 로깅 출력을 검토합니다.

1. 모든 작업이 완료되면 식별된 모든 {% data variables.product.prodname_code_scanning %} 경고의 세부 정보를 볼 수 있습니다. 자세한 내용은 “[리포지토리에 대한 {% data variables.product.prodname_code_scanning %} 경고 관리](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)”를 참조하세요.

{% note %}

**참고:** {% data variables.product.prodname_code_scanning %} 워크플로를 리포지토리에 추가하기 위해 끌어오기 요청을 발생시킨 경우 끌어오기 요청이 병합될 때까지 해당 끌어오기 요청의 경고가 {% data variables.product.prodname_code_scanning_capc %} 페이지에 직접 표시되지 않습니다. 경고가 발견되면 끌어오기 요청이 병합되기 전에 {% data variables.product.prodname_code_scanning_capc %} 페이지의 배너에 있는 **_n_ 개의 경고** 링크를 클릭하여 확인할 수 있습니다.

!["n개의 경고가 발견되었습니다." 링크를 클릭합니다.](/assets/images/help/repository/code-scanning-alerts-found-link.png)

{% endnote %}
