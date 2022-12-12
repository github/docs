---
title: 리포지토리에 대한 코드 검사 설정
shortTitle: Set up code scanning
intro: '리포지토리에 워크플로를 추가하여 {% data variables.product.prodname_code_scanning %}을 설정할 수 있습니다.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can set up or configure {% data variables.product.prodname_code_scanning %} for that repository.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning-for-a-repository
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository
  - /code-security/secure-coding/setting-up-code-scanning-for-a-repository
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Actions
  - Repositories
ms.openlocfilehash: 8abfb992c3369242501350be20cf8e465ce090fa
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161136'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## {% data variables.product.prodname_code_scanning %}를 설정하기 위한 옵션

{% data variables.product.prodname_code_scanning %} 경고를 생성하는 방법과 리포지토리 수준에서 사용할 도구를 결정합니다. {% data variables.product.product_name %}는 {% data variables.product.prodname_codeql %} 분석에 대해 완벽하게 통합된 지원을 제공하고, 타사 도구를 사용한 분석도 지원합니다. 자세한 내용은 “[{% data variables.product.prodname_code_scanning %} 정보](/code-security/secure-coding/about-code-scanning#about-tools-for-code-scanning)”를 참조하세요.

{% data reusables.code-scanning.enabling-options %}

{% ifversion fpt or ghes > 3.4 or ghae > 3.4 or ghec %} {% data reusables.code-scanning.about-analysis-origins-link %} {% endif %}

{% ifversion ghes or ghae %} {% note %}

**참고:** CodeQL 분석을 사용하려는 경우 이 문서에서는 이 {% data variables.product.product_name %} 버전의 초기 릴리스에 포함된 CodeQL 작업 및 관련 CodeQL CLI 번들의 버전에서 사용할 수 있는 기능을 설명합니다. 엔터프라이즈에서 더 최신 버전의 CodeQL 작업을 사용하는 경우, 최신 기능에 대한 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 문서](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository)를 참조하세요. {% ifversion not ghae %} 최신 버전 사용에 대한 자세한 내용은 “[어플라이언스에 대한 코드 검사 구성](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)”을 참조하세요.{% endif %}

{% endnote %} {% endif %}

{% ifversion ghae %}
## 필수 조건

리포지토리에 대해 {% data variables.product.prodname_code_scanning %}를 설정하기 전에 리포지토리에 사용할 수 있는 자체 호스팅 {% data variables.product.prodname_actions %} 실행기가 하나 이상 있어야 합니다.

엔터프라이즈 소유자, 조직 및 리포지토리 관리자는 자체 호스팅 실행기를 추가할 수 있습니다. 자세한 내용은 “[자체 호스트된 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners)”와 “[자체 호스트된 실행기 추가](/actions/hosting-your-own-runners/adding-self-hosted-runners)”를 참조하세요.
{% endif %}

{% ifversion fpt or ghec %}
## 시작 워크플로를 사용하여 {% data variables.product.prodname_code_scanning %} 설정

{% data reusables.advanced-security.starter-workflows-beta %}

{% ifversion ghes or ghae %} {% note %}

**참고:** 이 문서에서는 이 {% data variables.product.product_name %} 버전의 초기 릴리스에 포함된 CodeQL 작업 및 관련 CodeQL CLI 번들의 버전에서 사용할 수 있는 기능을 설명합니다. 엔터프라이즈에서 더 최신 버전의 CodeQL 작업을 사용하는 경우, 최신 기능에 대한 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 문서](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository)를 참조하세요. {% ifversion not ghae %} 최신 버전 사용에 대한 자세한 내용은 “[어플라이언스에 대한 코드 검사 구성](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)”을 참조하세요.{% endif %}

{% endnote %} {% endif %}

{% data reusables.advanced-security.starter-workflow-overview %} {% data variables.product.prodname_code_scanning_capc %} 시작 워크플로는 {% data variables.product.prodname_code_scanning %}를 사용하도록 설정한 경우에만 리포지토리에 사용할 수 있습니다.

{% data reusables.code-scanning.billing %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. 리포지토리에 이미 하나 이상의 워크플로가 설정되고 실행되고 있는 경우 **새 워크플로** 를 클릭하고 5단계로 이동합니다. 현재 리포지토리에 대해 구성된 워크플로가 없는 경우 다음 단계로 이동합니다.
   ![새 워크플로 단추의 스크린샷](/assets/images/help/security/actions-new-workflow-button.png)
1. "보안" 범주까지 아래로 스크롤하고 구성하려는 워크플로에서 **구성** 을 클릭하거나 **모두 보기** 를 클릭하여 사용 가능한 모든 보안 워크플로를 확인합니다.
   ![작업 워크플로 보안 섹션의 스크린샷](/assets/images/help/security/actions-workflows-security-section.png)
1. 워크플로 페이지의 오른쪽 창에서 **설명서** 를 클릭하고 화면의 지침에 따라 필요에 맞게 워크플로를 조정합니다.
   ![시작 워크플로에 대한 설명서 탭의 스크린샷](/assets/images/help/security/actions-workflows-documentation.png) 자세한 내용은 "[시작 워크플로 사용](/actions/using-workflows/using-starter-workflows#using-starter-workflows)" 및 "[{% data variables.product.prodname_code_scanning %} 구성](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning)"을 참조하세요.

{% endif %}

## 수동으로 {% data variables.product.prodname_code_scanning %} 설정

{% ifversion fpt %}

쓰기 액세스 권한이 있는 퍼블릭 리포지토리에서 {% data variables.product.prodname_code_scanning %}를 설정할 수 있습니다.

{% endif %}

{% data reusables.code-scanning.billing %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %}
1. "{% data variables.product.prodname_code_scanning_capc %} 경고" 오른쪽에서 **{% data variables.product.prodname_code_scanning %}** 를 클릭합니다. {% ifversion ghec or ghes or ghae %} {% data variables.product.prodname_code_scanning %}가 없는 경우 조직 소유자 또는 리포지토리 관리자에게 {% data variables.product.prodname_GH_advanced_security %}을 설정하도록 요청해야 합니다. {% endif %} 자세한 내용은 "[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)" 또는 "[리포지토리에 대한 보안 및 분석 설정 관리](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"를 참조하세요.
 ![보안 개요의 "{% data variables.product.prodname_code_scanning_capc %}" 오른쪽에 있는 "{% data variables.product.prodname_code_scanning %} 설정" 단추](/assets/images/help/security/overview-set-up-code-scanning.png)
4. "{% data variables.product.prodname_code_scanning %} 시작"에서 {% data variables.code-scanning.codeql_workflow %} 또는 타사 워크플로에서 **이 워크플로 설정을** 클릭합니다.
 !["{% data variables.product.prodname_code_scanning %} 시작" 제목 아래의 "이 워크플로 설정" 단추](/assets/images/help/repository/code-scanning-set-up-this-workflow.png)워크플로는 리포지토리에서 검색된 프로그래밍 언어와 관련된 경우에만 표시됩니다. {% data variables.code-scanning.codeql_workflow %}는 항상 표시되지만 {% data variables.product.prodname_codeql %} 분석에서 리포지토리에 있는 언어를 지원하는 경우에만 "이 워크플로 설정" 단추가 활성화됩니다.
5. {% data variables.product.prodname_code_scanning %}가 코드를 검사하는 방법을 사용자 지정하려면 워크플로를 편집합니다.

   일반적으로 변경하지 않고 {% data variables.code-scanning.codeql_workflow %}를 커밋할 수 있습니다. 그러나 대부분의 타사 워크플로에는 추가 구성이 필요하므로 커밋하기 전에 워크플로의 설명을 읽어 봅니다.

   자세한 내용은 “[{% data variables.product.prodname_code_scanning %} 구성](/code-security/secure-coding/configuring-code-scanning)”을 참조하세요.
6. **커밋 시작** 드롭다운을 사용하고 커밋 메시지를 입력합니다.
 ![커밋 시작](/assets/images/help/repository/start-commit-commit-new-file.png)
7. 기본 분기로 직접 커밋할지, 새 분기를 만들어 끌어오기 요청을 시작할지를 선택합니다.
 ![커밋할 위치 선택](/assets/images/help/repository/start-commit-choose-where-to-commit.png)
8. **새 파일 커밋** 또는 **새 파일 제안** 을 클릭합니다.

기본 {% data variables.code-scanning.codeql_workflow %}에서 {% data variables.product.prodname_code_scanning %}는 기본 분기 또는 보호된 분기로 변경 내용을 푸시하거나 기본 분기에 대해 끌어오기 요청을 발생할 때마다 코드를 분석하도록 구성됩니다. 따라서 {% data variables.product.prodname_code_scanning %}가 시작됩니다.

코드 검사에 대한 `on:pull_request` 및 `on:push` 트리거가 유용한 용도는 각기 다릅니다. 자세한 내용은 "[끌어오기 요청 검사](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-pull-requests)" 및 "[푸시 시 검사](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-on-push)"를 참조하세요.
## {% data variables.product.prodname_code_scanning %}의 대량 설정

스크립트를 사용하여 여러 리포지토리에서 {% data variables.product.prodname_code_scanning %}를 한 번에 설정할 수 있습니다. 스크립트를 사용하여 여러 리포지토리에 {% data variables.product.prodname_actions %} 워크플로를 추가하는 끌어오기 요청을 발생시키려면 PowerShell 사용 사례를 위한 [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) 리포지토리를 참조하고, PowerShell이 없어 대신 NodeJS를 사용하려는 팀의 경우 [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement)를 참조하세요.

## {% data variables.product.prodname_code_scanning %}의 로깅 출력 보기

리포지토리에 대한 {% data variables.product.prodname_code_scanning %}를 설정한 후에는 실행할 때 작업의 출력을 볼 수 있습니다.

{% data reusables.repositories.actions-tab %}

  {% data variables.product.prodname_code_scanning %} 워크플로를 실행하기 위한 항목이 포함된 목록이 표시됩니다. 항목의 텍스트는 커밋 메시지에 지정한 제목입니다.

  ![{% data variables.product.prodname_code_scanning %} 워크플로를 보여 주는 작업 목록](/assets/images/help/repository/code-scanning-actions-list.png)

1. {% data variables.product.prodname_code_scanning %} 워크플로의 항목을 클릭합니다.

1. 왼쪽에서 작업 이름을 클릭합니다. 예: **Analyze (LANGUAGE)** .

  ![{% data variables.product.prodname_code_scanning %} 워크플로의 로그 출력](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. 실행 시 이 워크플로의 작업에서 발생하는 로깅 출력을 검토합니다.

1. 모든 작업이 완료되면 식별된 모든 {% data variables.product.prodname_code_scanning %} 경고의 세부 정보를 볼 수 있습니다. 자세한 내용은 "[리포지토리에 대한 {% data variables.product.prodname_code_scanning %} 경고 관리](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)"를 참조하세요.

{% note %}

**참고:** {% data variables.product.prodname_code_scanning %} 워크플로를 리포지토리에 추가하기 위해 끌어오기 요청을 발생시킨 경우 끌어오기 요청이 병합될 때까지 해당 끌어오기 요청의 경고가 {% data variables.product.prodname_code_scanning_capc %} 페이지에 직접 표시되지 않습니다. 경고가 발견되면 끌어오기 요청이 병합되기 전에 {% data variables.product.prodname_code_scanning_capc %} 페이지의 배너에 있는 **_n_ 개의 경고** 링크를 클릭하여 확인할 수 있습니다.

!["n개의 경고가 발견되었습니다." 링크를 클릭합니다.](/assets/images/help/repository/code-scanning-alerts-found-link.png)

{% endnote %}

## 끌어오기 요청 검사 이해

끌어오기 요청에서 실행하도록 설정한 각 {% data variables.product.prodname_code_scanning %} 워크플로에서 끌어오기 요청의 검사 섹션에는 항상 두 개 이상의 항목이 나열됩니다. 워크플로의 각 분석 작업에 대한 항목 1개와 분석 결과에 대한 최종 항목 1개가 있습니다.

{% data variables.product.prodname_code_scanning %} 분석 검사의 이름은 "TOOL NAME / JOB NAME (TRIGGER)" 형식을 나타냅니다. 예를 들어 {% data variables.product.prodname_codeql %}의 경우 C++ 코드 분석에는 "{% data variables.product.prodname_codeql %} / Analyze (cpp) (pull_request)" 항목이 있습니다. {% data variables.product.prodname_code_scanning %} 분석 항목에서 **세부 정보** 를 클릭하여 로깅 데이터를 볼 수 있습니다. 이렇게 하면 분석 작업이 실패한 경우 문제를 디버그할 수 있습니다. 예를 들어 컴파일된 언어의 {% data variables.product.prodname_code_scanning %} 분석에서 작업이 코드를 빌드할 수 없는 경우 문제가 발생할 수 있습니다.

  ![{% data variables.product.prodname_code_scanning %} 끌어오기 요청 검사](/assets/images/help/repository/code-scanning-pr-checks.png)

{% data variables.product.prodname_code_scanning %} 작업이 완료되면 {% data variables.product.prodname_dotcom %}는 끌어오기 요청에 의해 경고가 추가되었는지 여부를 확인하고 검사 목록에 "{% data variables.product.prodname_code_scanning_capc %} 결과 / TOOL NAME" 항목을 추가합니다. {% data variables.product.prodname_code_scanning %}가 한 번 이상 수행된 후 **세부 정보** 를 클릭하여 분석 결과를 볼 수 있습니다.

{% ifversion ghes < 3.5 or ghae %} 끌어오기 요청을 사용하여 {% data variables.product.prodname_code_scanning %}을 리포지토리에 추가한 경우 "{% data variables.product.prodname_code_scanning_capc %} 결과/도구 이름" 확인에서 **세부 정보를** 클릭하면 처음에 "분석을 찾을 수 없음" 메시지가 표시됩니다.

  ![커밋 메시지에 대한 분석을 찾을 수 없음](/assets/images/enterprise/3.4/repository/code-scanning-analysis-not-found.png)

테이블에는 하나 이상의 범주가 나열됩니다. 각 범주는 동일한 도구 및 커밋에 대해 다른 언어 또는 코드의 다른 부분에서 수행되는 특정 분석과 관련됩니다. 각 범주에 대해 테이블에는 {% data variables.product.prodname_code_scanning %}가 끌어오기 요청에서 도입되었거나 수정된 경고를 확인하기 위해 비교한 두 가지 분석이 표시됩니다.

예를 들어 위의 스크린샷에서 {% data variables.product.prodname_code_scanning %}는 끌어오기 요청의 병합 커밋에 대한 분석을 찾았지만 주 분기의 헤드에 대한 분석은 찾지 못했습니다.

### "분석을 찾을 수 없음" 메시지가 표시되는 이유


{% data variables.product.prodname_code_scanning %}가 끌어오기 요청에서 코드를 분석한 후에는 토픽 분기(끌어오기 요청을 만드는 데 사용한 분기)의 분석과 기본 분기(끌어오기 요청을 병합하려는 분기)의 분석을 비교해야 합니다. 이렇게 하면 {% data variables.product.prodname_code_scanning %}에서 끌어오기 요청에 의해 새로 도입된 경고, 기본 분기에 이미 있는 경고 및 끌어오기 요청의 변경으로 인해 기존 경고가 수정되었는지 여부를 컴퓨팅할 수 있습니다. 처음에 끌어오기 요청을 사용하여 {% data variables.product.prodname_code_scanning %}를 리포지토리에 추가하는 경우 기본 분기가 아직 분석되지 않았으므로 이러한 세부 정보를 컴퓨팅할 수 없습니다. 이 경우 끌어오기 요청에 대한 결과 확인에서 를 클릭하면 "분석을 찾을 수 없음" 메시지가 표시됩니다.

끌어오기 요청의 기본 분기에 대한 최신 커밋과 관련된 분석이 없을 수 있는 다른 상황이 있습니다. 이러한 개체는 다음과 같습니다.

* 끌어오기 요청이 기본 분기가 아닌 다른 분기에 대해 발생했으며 이 분기는 분석되지 않았습니다.

  분기가 검사되었는지 확인하려면 {% data variables.product.prodname_code_scanning_capc %} 페이지로 이동하여 **분기** 드롭다운을 클릭하고 관련 분기를 선택합니다.

  ![분기 드롭다운 메뉴에서 분기 선택](/assets/images/help/repository/code-scanning-branch-dropdown.png)

  이 상황에서 해결 방법은 해당 분기의 {% data variables.product.prodname_code_scanning %} 워크플로에서 `on:push` 및 `on:pull_request` 사양에 기본 분기의 이름을 추가한 다음, 검사하려는 열린 끌어오기 요청을 업데이트하는 변경을 수행하는 것입니다.

* 끌어오기 요청에 대한 기본 분기의 최신 커밋이 현재 분석 중이며 분석을 아직 사용할 수 없습니다.

  몇 분 정도 기다린 다음, 끌어오기 요청에 대해 변경 내용을 푸시하여 {% data variables.product.prodname_code_scanning %}를 다시 트리거합니다.

* 기본 분기에서 최신 커밋을 분석하는 동안 오류가 발생했으며 해당 커밋에 대한 분석을 사용할 수 없습니다.

  사소한 변경 내용을 기본 분기에 병합하여 이 최신 커밋에서 {% data variables.product.prodname_code_scanning %}를 트리거한 다음, 끌어오기 요청에 대해 변경 내용을 푸시하여 {% data variables.product.prodname_code_scanning %}를 다시 트리거합니다.

{% endif %}

## 다음 단계

{% data variables.product.prodname_code_scanning %}를 설정하고 작업을 완료하도록 허용한 후에는 다음을 수행할 수 있습니다.

- 이 리포지토리에 대해 생성된 모든 {% data variables.product.prodname_code_scanning %} 경고를 봅니다. 자세한 내용은 “[리포지토리에 대한 {% data variables.product.prodname_code_scanning %} 경고 관리](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)”를 참조하세요.
- {% data variables.product.prodname_code_scanning %}를 설정한 후 제출된 끌어오기 요청에 대해 생성된 경고를 봅니다. 자세한 내용은 “[끌어오기 요청에서 {% data variables.product.prodname_code_scanning %} 경고 심사](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)”를 참조하세요.
- 완료된 실행에 대한 알림을 설정합니다. 자세한 내용은 “[알림 구성](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)”을 참조하세요.
- {% data variables.product.prodname_code_scanning %} 분석을 통해 생성된 로그를 봅니다. 자세한 내용은 "[{% data variables.product.prodname_code_scanning %} 로그 보기](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs)"를 참조하세요.
- {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}의 초기 설정에서 발생하는 문제를 조사합니다. 자세한 내용은 “[{% data variables.product.prodname_codeql %} 워크플로 문제 해결](/code-security/secure-coding/troubleshooting-the-codeql-workflow)”을 참조하세요.
- {% data variables.product.prodname_code_scanning %}가 리포지토리의 코드를 검사하는 방법을 사용자 지정합니다. 자세한 내용은 “[{% data variables.product.prodname_code_scanning %} 구성](/code-security/secure-coding/configuring-code-scanning)”을 참조하세요.
