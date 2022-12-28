---
title: 코드 검사 구성
intro: '{% data variables.product.prodname_dotcom %}가 프로젝트에서 취약점 및 오류에 대해 코드를 검사하는 방법을 구성할 수 있습니다.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_code_scanning %} for the repository.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning
  - /code-security/secure-coding/configuring-code-scanning
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning
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
  - Pull requests
  - JavaScript
  - Python
shortTitle: Configure code scanning
ms.openlocfilehash: cad147292c113d749004f2fe303b27a4dada1456
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/25/2022
ms.locfileid: '148182316'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

{% ifversion ghes or ghae %} {% note %}

**참고:** 이 문서에서는 이 {% data variables.product.product_name %} 버전의 초기 릴리스에 포함된 CodeQL 작업 및 관련 CodeQL CLI 번들의 버전에서 사용할 수 있는 기능을 설명합니다. 엔터프라이즈에서 더 최신 버전의 CodeQL 작업을 사용하는 경우, 최신 기능에 대한 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 문서](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning)를 참조하세요. {% ifversion not ghae %} 최신 버전 사용에 대한 자세한 내용은 “[어플라이언스에 대한 코드 검사 구성](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)”을 참조하세요.{% endif %}

{% endnote %} {% endif %}

## {% data variables.product.prodname_code_scanning %} 구성 정보

{% data variables.product.prodname_actions %}를 사용하여 {% data variables.product.product_name %}에서 또는 연속 통합(CI) 시스템에서 {% data variables.product.prodname_code_scanning %}을 실행할 수 있습니다. 자세한 내용은 "[{% data variables.product.prodname_actions %} 정보](/actions/getting-started-with-github-actions/about-github-actions)" 또는 "[CI 시스템의 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 정보](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)"를 참조하세요.

이 문서에서는 작업을 사용하여 {% data variables.product.product_name %}에서 {% data variables.product.prodname_code_scanning %}을 실행하는 방법을 설명합니다.

리포지토리에 {% data variables.product.prodname_code_scanning %}을 구성하려면 먼저 {% data variables.product.prodname_actions %} 워크플로를 리포지토리에 추가하여 {% data variables.product.prodname_code_scanning %}을 설정해야 합니다. 자세한 내용은 “[리포지토리에 대한 {% data variables.product.prodname_code_scanning %} 설정](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)”을 참조하세요.

{% data reusables.code-scanning.edit-workflow %}

{% data variables.product.prodname_codeql %} 분석은 {% data variables.product.prodname_dotcom %}에서 수행할 수 있는 {% data variables.product.prodname_code_scanning %}의 한 유형일 뿐입니다. {% ifversion ghes %}{% data variables.product.prodname_dotcom_the_website %}의 {% endif %}{% data variables.product.prodname_marketplace %}에는 사용할 수 있는 다른 {% data variables.product.prodname_code_scanning %} 워크플로가 있습니다. {% ifversion fpt or ghec %} {% **octicon "shield" aria-label="The shield symbol" %} 보안** 탭에서 액세스할 수 있는 "{% data variables.product.prodname_code_scanning %} 시작" 페이지에서 이러한 항목을 선택할 수 있습니다.{% endif %} 이 문서에 제공된 특정 예제는 {% data variables.code-scanning.codeql_workflow %} 파일과 관련이 있습니다.

## {% data variables.product.prodname_code_scanning %} 워크플로 편집

{% data variables.product.prodname_dotcom %}은 리포지토리의 _.github/workflows_ 디렉터리에 워크플로 파일을 저장합니다. 파일 이름을 검색하여 추가한 워크플로를 찾을 수 있습니다. 예를 들어 기본적으로 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}용 워크플로 파일은 _codeql-analysis.yml_ 이라고 합니다.

1. 리포지토리에서 편집할 워크플로 파일로 이동합니다.
1. 워크플로 편집기를 열려면 파일 뷰의 오른쪽 위에서 {% octicon "pencil" aria-label="The edit icon" %}을 클릭합니다.
![워크플로 파일 편집 단추](/assets/images/help/repository/code-scanning-edit-workflow-button.png)
1. 파일을 편집한 후 **커밋 시작** 을 클릭하고 "변경 내용 커밋" 양식을 완료합니다. 현재 분기에 직접 커밋하도록 선택하거나 새 분기를 만들고 끌어오기 요청을 시작할 수 있습니다.
![codeql.yml 워크플로에 대한 업데이트 커밋](/assets/images/help/repository/code-scanning-workflow-update.png)

워크플로 파일 편집에 대한 자세한 내용은 "[{% data variables.product.prodname_actions %} 알아보기](/actions/learn-github-actions)"를 참조하세요.

## 빈도 구성

일정에 따라 또는 리포지토리에서 특정 이벤트가 발생하는 경우 코드를 검사하도록 {% data variables.code-scanning.codeql_workflow %}를 구성할 수 있습니다.

누군가가 변경 사항을 푸시할 때 또는 끌어오기 요청을 만들 때마다 코드를 검사하면 개발자가 코드에 새로운 취약성 및 오류를 도입할 수 없습니다. 일정에 따라 코드를 검사하면 개발자가 리포지토리를 적극적으로 유지 관리하지 않는 경우에도 {% data variables.product.company_short %}, 보안 연구원 및 커뮤니티가 발견한 최신 취약성 및 오류에 대해 알 수 있습니다.

### 푸시할 때 검사

기본적으로 {% data variables.code-scanning.codeql_workflow %}는 이벤트를 사용하여 `on.push` 리포지토리의 기본 분기와 보호된 분기로 푸시할 때마다 코드 검사를 트리거합니다. 지정된 분기에서 {% data variables.product.prodname_code_scanning %}을 트리거하려면 워크플로가 해당 분기에 있어야 합니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}의 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions#on)”을 참조하세요.

푸시할 때 검사하면 리포지토리의 **보안** 탭에 결과가 표시됩니다. 자세한 내용은 “[리포지토리에 대한 코드 검사 경고 관리](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)를 참조하세요.

`on:push` 또한 검사가 열린 끌어오기 요청에 매핑할 수 있는 결과를 반환하면 이러한 경고는 다른 끌어오기 요청 경고와 동일한 위치에 있는 끌어오기 요청에 자동으로 표시됩니다. 경고는 분기 헤드의 기존 분석을 대상 분기에 대한 분석과 비교하여 식별됩니다. 끌어오기 요청의 {% data variables.product.prodname_code_scanning %} 경고에 대한 자세한 내용은 "[끌어오기 요청에서 {% data variables.product.prodname_code_scanning %} 경고 심사](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)"를 참조하세요.

### 끌어오기 요청 검사

기본 {% data variables.code-scanning.codeql_workflow %}는 이벤트를 사용하여 `pull_request` 기본 분기를 대상으로 하는 끌어오기 요청에 대한 코드 검사를 트리거합니다. {% ifversion ghes %}끌어오기 요청이 프라이빗 포크에서 열린 경우 `pull_request` 이벤트가 트리거되지 않습니다.{% else %}끌어오기 요청이 프라이빗 포크에서 왔다면 리포지토리 설정에서 "포크 끌어오기 요청에서 워크플로 실행" 옵션을 선택한 경우에만 `pull_request` 이벤트가 트리거됩니다. 자세한 내용은 "[리포지토리에 대한 {% data variables.product.prodname_actions %} 설정 관리](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-private-repository-forks)"를 참조하세요.{% endif %}

`pull_request` 이벤트에 관한 자세한 내용은 "[워크플로를 트리거하는 이벤트](/actions/learn-github-actions/events-that-trigger-workflows#pull_request)"를 참조하세요.

끌어오기 요청을 검사하면 결과가 끌어오기 요청 검사에서 경고로 표시됩니다. 자세한 내용은 "[끌어오기 요청에서 코드 검사 경고 심사](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)"를 참조하세요.

`pull_request` 헤드 커밋이 아닌 끌어오기 요청의 병합 커밋을 검사하도록 구성된 트리거를 사용하면 각 푸시에서 분기의 헤드를 스캔하는 것보다 더 효율적이고 정확한 결과를 생성합니다. 그러나 끌어오기 요청에서 트리거하도록 구성할 수 없는 CI/CD 시스템을 사용하는 경우에도 `on:push` 트리거를 사용할 수 있으며 {% data variables.product.prodname_code_scanning %}은 결과를 매핑하여 분기에서 끌어오기 요청을 열고 끌어오기 요청에 대한 주석으로 경고를 추가합니다. 자세한 내용은 "[푸시할 때 검사](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-on-push)"를 참조하세요.

### 끌어오기 요청 확인 실패를 일으키는 심각도 정의

기본적으로 심각도 수준이 `Error` 또는 보안 심각도 수준이 `Critical` 또는 `High`인 경고에서만 끌어오기 요청 검사 실패가 발생하고 심각도가 낮은 경고에서는 검사가 성공합니다. 리포지토리 설정에서 끌어오기 요청 확인 실패를 유발하는 경고 심각도 및 보안 심각도 수준을 변경할 수 있습니다. 심각도 수준에 대한 자세한 내용은 "[코드 검사 경고 정보](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-alert-details)"를 참조하세요.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. "코드 검사"의 "실패 검사" 오른쪽에 있는 드롭다운 메뉴를 사용하여 끌어오기 요청 검사 실패를 유발할 심각도 수준을 선택합니다.
![확인 실패 설정](/assets/images/help/repository/code-scanning-check-failure-setting.png)

### 불필요한 끌어오기 요청 검사 방지

변경된 파일에 관계없이 기본 분기를 대상으로 하는 특정 끌어오기 요청에서 코드 검사가 트리거되지 않도록 할 수 있습니다. {% data variables.product.prodname_code_scanning %} 워크플로에서 `on:pull_request:paths-ignore` 또는 `on:pull_request:paths`를 지정하면 이 설정을 구성할 수 있습니다. 예를 들어, 끌어오기 요청의 유일한 변경 사항이 파일 확장자가 `.md` 또는 `.txt`인 파일인 경우 다음 `paths-ignore` 배열을 사용할 수 있습니다.

``` yaml
on:
  push:
    branches: [main, protected]
  pull_request:
    branches: [main]
    paths-ignore:
      - '**/*.md'
      - '**/*.txt'
```

{% note %}

**참고 사항**

* `on:pull_request:paths-ignore` 및 `on:pull_request:paths`는 워크플로에서의 작업이 끌어오기 요청에서 실행될지 여부를 결정하는 조건을 설정합니다. _작업이 실행_ 될 때 분석할 파일을 결정하지 않습니다. 끌어오기 요청에 `on:pull_request:paths-ignore` 또는 `on:pull_request:paths`와 일치하지 않은 파일이 포함된 경우 워크플로는 이러한 파일이 제외되지 않은 한, 작업을 실행하고 끌어오기 요청에서 변경된 모든 파일(`on:pull_request:paths-ignore` 또는 `on:pull_request:paths`와 일치하는 파일 포함)을 검색합니다. 분석에서 이러한 파일을 제외하는 자세한 방법은 "[검사할 디렉터리 지정](#specifying-directories-to-scan)"을 참조하세요.
* {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 워크플로 파일의 경우에는 `on:push` 이벤트와 함께 `paths-ignore` 또는 `paths` 키워드를 사용해선 안 됩니다. 분석이 누락될 수 있습니다. 정확한 결과를 얻으려면 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}에서 새 변경 내용을 이전 커밋 분석과 비교할 수 있어야 합니다.

{% endnote %}

`on:pull_request:paths-ignore` 및 `on:pull_request:paths`를 사용하여 끌어오기 요청을 위한 워크플로를 실행하는 시기를 확인하는 자세한 방법은 "[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)"을 참조하세요.

### 일정에 따라 검사

기본 {% data variables.code-scanning.codeql_workflow %}를 사용하는 경우 워크플로는 이벤트에 의해 트리거되는 검사 외에도 일주일에 한 번 리포지토리의 코드를 검사합니다. 이 일정을 조정하려면 워크플로의 `cron` 값을 편집합니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}의 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions#onschedule)”을 참조하세요.

{% note %}

**참고**: {% data variables.product.prodname_dotcom %}은 기본 분기의 워크플로에 있는 예약된 작업만 실행합니다. 다른 분기에 있는 워크플로에서의 일정 변경은 분기를 기본 분기에 병합해야 효과를 발휘합니다.

{% endnote %}

### 예제

다음 예제에서는 라는 기본 분기와 라는 `main` 보호된 분기 `protected`가 있는 특정 리포지토리에 대한 {% data variables.code-scanning.codeql_workflow %}를 보여 줍니다.

``` yaml
on:
  push:
    branches: [main, protected]
  pull_request:
    branches: [main]
  schedule:
    - cron: '20 14 * * 1'
```

이 워크플로는 다음을 검사합니다.
* 기본 분기 및 보호된 분기에 대한 모든 푸시
* 기본 분기에 대한 모든 끌어오기 요청
* 매주 월요일 14:20 UTC의 기본 분기

## 운영 체제 지정

코드에 컴파일할 특정 운영 체제가 필요한 경우 {% data variables.code-scanning.codeql_workflow %}에서 운영 체제를 구성할 수 있습니다. {% data variables.product.prodname_code_scanning %} 작업을 실행하는 머신의 운영 체제를 지정하려면 `jobs.analyze.runs-on` 값을 편집합니다. {% ifversion ghes %}적절한 레이블을 두 요소 배열에서 `self-hosted` 다음에 오는 두 번째 요소로 사용하여 운영 체제를 지정합니다.{% else %}

``` yaml
jobs:
  analyze:
    name: Analyze
    runs-on: [ubuntu-latest]
```

코드 검사에 자체 호스팅 실행기를 사용하기로 한 경우 적절한 레이블을 두 요소 배열에서 `self-hosted` 다음에 오는 두 번째 요소로 사용하여 운영 체제를 지정할 수 있습니다.{% endif %}

``` yaml
jobs:
  analyze:
    name: Analyze
    runs-on: [self-hosted, ubuntu-latest]
```

{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}은 Ubuntu, Windows 및 macOS 최신 버전을 지원합니다. 따라서 이 설정의 일반적인 값은 `ubuntu-latest`, `windows-latest`, `macos-latest`입니다. 자세한 내용은 "[작업에 대한 실행기 선택](/actions/using-jobs/choosing-the-runner-for-a-job)" 및 "[자체 호스팅 실행기로 레이블 사용](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)"을 참조하세요.

{% ifversion ghes %}Git가 자체 호스팅 실행기의 PATH 변수에 있는지 확인해야 합니다.{% else %}자체 호스팅 실행기를 사용하는 경우 Git가 PATH 변수에 있어야 합니다.{% endif %} 자세한 내용은 "[자체 호스팅 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners)"와 "[자체 호스팅 실행기 추가](/actions/hosting-your-own-runners/adding-self-hosted-runners)"를 참조하세요.

자체 호스팅 실행기에서 {% data variables.product.prodname_codeql %} 분석{% ifversion not ghes %}을 실행하기 위한 권장 사양(RAM, CPU 코어 및 디스크){% endif %}에 대해서는 "[{% data variables.product.prodname_codeql %} 실행을 위한 권장 하드웨어 리소스](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/recommended-hardware-resources-for-running-codeql)"를 참조하세요.

## {% data variables.product.prodname_codeql %} 데이터베이스의 위치 지정

일반적으로 {% data variables.code-scanning.codeql_workflow %}에서 {% data variables.product.prodname_codeql %} 데이터베이스를 배치하는 위치에 대해 걱정할 필요가 없습니다. 이후 단계에서는 이전 단계에서 만든 데이터베이스를 자동으로 찾습니다. 그러나 {% data variables.product.prodname_codeql %} 데이터베이스가 특정 디스크 위치에 있어야 하는 사용자 지정 워크플로 단계를 작성하는 경우(예: 데이터베이스를 워크플로 아티팩트로 업로드하는 경우)에는 `init` 작업에서 `db-location` 매개 변수를 사용하여 해당 위치를 지정할 수 있습니다.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    db-location: {% raw %}'${{ github.workspace }}/codeql_dbs'{% endraw %}
```

{% data variables.code-scanning.codeql_workflow %}에는 제공된 `db-location` 경로가 쓰기 가능하고 존재하지 않거나 빈 디렉터리가 될 것으로 예상됩니다. 자체 호스팅 실행기에서 실행 중이거나 Docker 컨테이너를 사용하는 작업에서 이 매개 변수를 사용하는 경우, 사용자는 선택된 디렉터리가 다음 실행 전에 지워지거나 필요 없어진 데이터베이스가 제거되는지 확인해야 합니다. {% ifversion fpt or ghec or ghes %} 이 작업은 실행할 때마다 새 인스턴스와 클린 파일 시스템을 얻는 {% data variables.product.prodname_dotcom %} 호스팅 실행기에서 실행 중인 작업에는 필요하지 않습니다. 자세한 내용은 "[{% data variables.product.prodname_dotcom %} 호스팅 실행기 정보](/actions/using-github-hosted-runners/about-github-hosted-runners)"를 참조하세요.{% endif %}

이 매개 변수를 사용하지 않으면 {% data variables.code-scanning.codeql_workflow %}는 선택한 임시 위치에 데이터베이스를 만듭니다.

## 분석되는 언어 변경

{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}은 지원되는 언어로 작성된 코드를 자동으로 검색합니다.

{% data reusables.code-scanning.codeql-languages-bullets %}

기본 {% data variables.code-scanning.codeql_workflow %} 파일에는 분석되는 리포지토리의 언어를 나열하는 이라는 `language` 행렬이 포함되어 있습니다. {% data variables.product.prodname_codeql %}은 사용자가 {% data variables.product.prodname_code_scanning %}을 리포지토리에 추가하면 이 행렬을 자동으로 채웁니다. `language` 행렬로 {% data variables.product.prodname_codeql %}을 최적화하여 각 분석을 병렬로 실행합니다. 빌드 병렬화의 성능 이점을 고려할 때 모든 워크플로에 이 구성을 채택하는 것이 좋습니다. 행렬에 대한 자세한 내용은 "[작업에 행렬 사용](/actions/using-jobs/using-a-matrix-for-your-jobs)"을 참조하세요.

{% data reusables.code-scanning.specify-language-to-analyze %}

워크플로에서 `language` 행렬을 사용하는 경우 {% data variables.product.prodname_codeql %}은 행렬의 언어만 분석하도록 하드 코딩됩니다. 분석할 언어를 변경하려면 행렬 변수의 값을 편집합니다. 언어를 제거하여 분석되지 않도록 하거나 {% data variables.product.prodname_code_scanning %}이 설정될 당시 리포지토리에 없던 언어를 추가할 수 있습니다. 예를 들어 처음에 {% data variables.product.prodname_code_scanning %}을 설정할 때 리포지토리에 JavaScript만 있었는데 나중에 Python 코드를 추가한 경우 행렬에 `python`를 추가해야 합니다.

```yaml
jobs:
  analyze:
    name: Analyze
    ...
    strategy:
      fail-fast: false
      matrix:
        language: ['javascript', 'python']
```

워크플로에 `language`라는 행렬이 포함되어 있지 않으면 {% data variables.product.prodname_codeql %}이 분석을 순차적으로 실행하도록 구성됩니다. 워크플로에서 언어를 지정하지 않으면 {% data variables.product.prodname_codeql %}은 리포지토리에서 지원되는 모든 언어를 자동으로 검색하여 분석을 시도합니다. 행렬을 사용하지 않고 분석할 언어를 선택할 경우 `init` 작업에서 `languages` 매개 변수를 사용할 수 있습니다.

```yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    languages: cpp, csharp, python
```
{% ifversion fpt or ghec %}
## Python 종속성 분석

Linux만 사용하는 GitHub 호스팅 실행기의 경우 {% data variables.code-scanning.codeql_workflow %}는 Python 종속성을 자동으로 설치하여 CodeQL 분석에 더 많은 결과를 제공합니다. "CodeQL 초기화" 단계에서 호출하는 작업에 대한 `setup-python-dependencies` 매개 변수를 지정하면 이 동작을 제어할 수 있습니다. 이 매개 변수는 기본적으로 `true`로 설정됩니다.

-  리포지토리에 Python으로 작성한 코드가 포함된 경우에는 필요한 종속성을 "CodeQL 초기화" 단계에서 GitHub 호스팅 실행기에 설치합니다. 자동 설치에 성공하면 작업은 환경 변수 `CODEQL_PYTHON`을 종속성을 포함하는 Python 실행 파일로 설정합니다.

- 리포지토리에 Python 종속성이 없거나 종속성이 예기치 않은 방식으로 지정되면 경고가 표시되고 작업은 나머지 일을 계속 처리합니다. 종속성을 해석하는 데 문제가 있는 경우에도 작업을 성공적으로 실행할 수 있지만, 결과가 불완전할 수 있습니다.

모든 운영 체제에 Python 종속성을 수동으로 설치하는 방법도 있습니다. 이 워크플로 추출에서처럼 `setup-python-dependencies`를 추가하고 `false`로 설정한 다음 `CODEQL_PYTHON`을 종속성을 포함하는 Python 실행 파일로 설정해야 합니다.

```yaml
jobs:
  CodeQL-Build:
    runs-on: ubuntu-latest
    permissions:
      security-events: write
      actions: read

    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Set up Python
        uses: {% data reusables.actions.action-setup-python %}
        with:
          python-version: '3.x'
      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          if [ -f requirements.txt ];
          then pip install -r requirements.txt;
          fi
          # Set the `CODEQL-PYTHON` environment variable to the Python executable
          # that includes the dependencies
          echo "CODEQL_PYTHON=$(which python)" >> $GITHUB_ENV
      - name: Initialize CodeQL
        uses: {% data reusables.actions.action-codeql-action-init %}
        with:
          languages: python
          # Override the default behavior so that the action doesn't attempt
          # to auto-install Python dependencies
          setup-python-dependencies: false
```
{% endif %}

## 분석을 위한 범주 구성

`category`는 다양한 언어 또는 다양한 코드 부분에서 수행되지만 동일한 도구와 커밋을 대상으로 하는 여러 분석을 구분하는 데 사용합니다. 워크플로에 지정한 범주는 SARIF 결과 파일에 포함됩니다.

이 매개 변수는 단일 리포지토리로 작업하고 단일 리포지토리의 여러 구성 요소에 대한 여러 SARIF 파일이 있을 때 특히 유용합니다.

``` yaml
    - name: Perform CodeQL Analysis
      uses: {% data reusables.actions.action-codeql-action-analyze %}
      with:
        # Optional. Specify a category to distinguish between multiple analyses
        # for the same tool and ref. If you don't use `category` in your workflow,
        # GitHub will generate a default category name for you
        category: "my_category"
```

워크플로에서 `category` 매개 변수를 지정하지 않으면 {% data variables.product.product_name %}은 작업을 트리거하는 워크플로 파일의 이름, 작업 이름 및 행렬 변수를 기준으로 범주 이름을 생성합니다. 예를 들면 다음과 같습니다.
- `.github/workflows/codeql-analysis.yml` 워크플로와 `analyze` 작업은 `.github/workflows/codeql.yml:analyze` 범주를 생성합니다.
- `.github/workflows/codeql-analysis.yml` 워크플로, `analyze` 작업과 `{language: javascript, os: linux}` 행렬 변수는 `.github/workflows/codeql-analysis.yml:analyze/language:javascript/os:linux` 범주를 생성합니다.

`category` 값은 SARIF v2.1.0의 `<run>.automationDetails.id` 속성에 표시됩니다. 자세한 내용은 "[{% data variables.product.prodname_code_scanning %}에 대한 SARIF 지원](/code-security/secure-coding/sarif-support-for-code-scanning#runautomationdetails-object)"을 참조하세요.

지정된 범주는 SARIF 파일(포함된 경우)에 있는 `runAutomationDetails` 개체의 세부 정보를 덮어쓰지 않습니다.

## 추가 쿼리 실행

{% data reusables.code-scanning.run-additional-queries %}

{% ifversion codeql-packs %}
### {% data variables.product.prodname_codeql %} 쿼리 팩 사용

{% data reusables.code-scanning.beta-codeql-packs-cli %}

하나 이상의 {% data variables.product.prodname_codeql %} 쿼리 팩(베타)을 추가하려면 워크플로의 `uses: {% data reusables.actions.action-codeql-action-init %}` 섹션 내에 `with: packs:` 항목을 추가합니다. `packs` 내에서 사용할 패키지를 하나 이상 지정하고, 필요하다면 다운로드할 버전을 지정합니다. 버전을 지정하지 않으면 최신 버전이 다운로드됩니다. 공개적으로 사용할 수 없는 패키지를 사용하려면 `GITHUB_TOKEN` 환경 변수를 패키지에 액세스할 수 있는 비밀로 설정해야 합니다. 자세한 내용은 "[워크플로의 인증](/actions/reference/authentication-in-a-workflow)"과 "[암호화된 비밀](/actions/reference/encrypted-secrets)"을 참조하세요.

{% note %}

**참고:** 여러 언어에 대한 {% data variables.product.prodname_codeql %} 데이터베이스를 생성하는 워크플로의 경우 구성 파일에서 {% data variables.product.prodname_codeql %} 쿼리 팩을 대신 지정해야 합니다. 자세한 내용은 아래 "[{% data variables.product.prodname_codeql %} 쿼리 팩 지정](#specifying-codeql-query-packs)"을 참조하세요.

{% endnote %}

아래 예제에서 `scope`는 패키지를 게시한 조직 또는 개인 계정입니다. 워크플로가 실행되면 {% data variables.product.prodname_codeql %} 쿼리 팩 4개가 {% data variables.product.product_name %}에서 다운로드되고 각 팩 실행에 대한 기본 쿼리 또는 쿼리 도구 모음이 다운로드됩니다.
- 최신 버전의 `pack1`이 다운로드되고 모든 기본 쿼리가 실행됩니다.
- `pack2` 버전 1.2.3이 다운로드되고 모든 기본 쿼리가 실행됩니다.
- 버전 3.2.1과 호환되는 최신 버전의 `pack3`이 다운로드되고 모든 기본 쿼리가 실행됩니다.
- `pack4` 버전 4.5.6이 다운로드되고 `path/to/queries`에서 찾은 쿼리만 실행됩니다.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    # Comma-separated list of packs to download
    packs: scope/pack1,scope/pack2@1.2.3,scope/pack3@~3.2.1,scope/pack4@4.5.6:path/to/queries
```

### {% data variables.product.prodname_ghe_server %}에서 {% data variables.product.prodname_codeql %} 팩 다운로드

워크플로에서 {% data variables.product.prodname_ghe_server %} 설치에 게시된 팩을 사용하는 경우 워크플로에서 찾을 위치를 알려야 합니다. {% data reusables.actions.action-codeql-action-init %} 작업의 입력을 사용하여 `registries` 이 작업을 수행할 수 있습니다. 이 입력은 아래와 같이 , `packages`및 `token` 속성 목록을 `url`허용합니다.

```
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    registries: {% raw %}|
      # URL to the container registry, usually in this format
      - url: https://containers.GHEHOSTNAME1/v2/

        # List of package glob patterns to be found at this registry
        packages:
          - my-company/*
          - my-company2/*

        # Token, which should be stored as a secret
        token: ${{ secrets.GHEHOSTNAME1_TOKEN }}

      # URL to the default container registry
      - url: https://ghcr.io/v2/
        # Packages can also be a string
        packages: "*/*"
        token: ${{ secrets.GHCR_TOKEN }}

    {% endraw %}
```

레지스트리 목록의 패키지 패턴은 순서대로 검사되므로 일반적으로 가장 구체적인 패키지 패턴을 먼저 배치해야 합니다. 의 `token` 값은 권한으로 다운로드하는 GitHub 인스턴스에서 `read:packages` 생성된 {% 데이터 variables.product.pat_v1 %}이어야 합니다.

`|` 속성 이름 뒤의 를 확인 `registries` 합니다. {% data variables.product.prodname_actions %} 입력은 문자열만 수락할 수 있으므로 이는 중요합니다. 를 `|` 사용하면 후속 텍스트를 문자열로 변환합니다. 이 문자열은 나중에 {% data reusables.actions.action-codeql-action-init %} 작업에 의해 구문 분석됩니다.

### QL 팩에서 쿼리 사용
{% endif %} 하나 이상의 쿼리를 추가하려면 워크플로의 `uses: {% data reusables.actions.action-codeql-action-init %}` 섹션 내에 `with: queries:` 항목을 추가합니다. 쿼리가 프라이빗 리포지토리에 있는 경우 `external-repository-token` 매개 변수를 사용하여 프라이빗 리포지토리를 체크 아웃할 액세스 권한이 있는 토큰을 지정합니다.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    queries: COMMA-SEPARATED LIST OF PATHS
    # Optional. Provide a token to access queries stored in private repositories.
    external-repository-token: {% raw %}${{ secrets.ACCESS_TOKEN }}{% endraw %}
```

`queries` 값에 쿼리 도구 모음을 지정할 수도 있습니다. 쿼리 도구 모음은 일반적으로 목적 또는 언어별로 그룹화된 쿼리 컬렉션입니다.

{% data reusables.code-scanning.codeql-query-suites-explanation %}

{% ifversion codeql-packs %}
### 사용자 지정 구성 파일 작업
{% endif %}

또한 사용자 지정 설정에 구성 파일을 사용하는 경우 구성 파일에 지정된 팩이나 쿼리 대신 워크플로에 지정된 추가 {% ifversion codeql-packs %}팩이나 {% endif %}쿼리가 사용됩니다. 추가 {% ifversion codeql-packs %}팩 또는 {% endif %}쿼리의 결합된 집합을 실행하고 싶다면 워크플로의 {% ifversion codeql-packs %}`packs` 또는 {% endif %}`queries` 값을 `+` 기호와 함께 접두사로 추가합니다. 자세한 내용은 "[사용자 지정 구성 파일 사용](#using-a-custom-configuration-file)"을 참조하세요.

다음 예제에서는 `+` 기호를 사용하면 지정된 추가 {% ifversion codeql-packs %}팩 및 {% endif %}쿼리가 참조된 구성 파일에 지정된 모든 팩 및 쿼리와 함께 사용됩니다.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    config-file: ./.github/codeql/codeql-config.yml
    queries: +security-and-quality,octo-org/python-qlpack/show_ifs.ql@main
    {%- ifversion codeql-packs %}
    packs: +scope/pack1,scope/pack2@1.2.3,scope/pack3@4.5.6:path/to/queries
    {%- endif %}
```

## 사용자 지정 구성 파일 사용

사용자 지정 구성 파일은 실행할 추가 {% ifversion codeql-packs %}팩 및 {% endif %}쿼리를 지정하는 다른 방법입니다. 또한 이 파일을 사용하여 기본 쿼리를 사용하지 않도록 설정하고{% ifversion code-scanning-exclude-queries-from-analysis %} 특정 쿼리를 제외하거나 포함할 수 있고{% endif %} 분석 중에 검색할 디렉터리를 지정할 수 있습니다.

워크플로 파일에서 `init` 작업의 `config-file` 매개 변수를 사용하여 이후 사용하려는 구성 파일의 경로를 지정합니다. 이 예제에서는 구성 파일 _./.github/codeql/codeql-config.yml_ 을 로드합니다.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    config-file: ./.github/codeql/codeql-config.yml
```

{% data reusables.code-scanning.custom-configuration-file %}

구성 파일이 외부 프라이빗 리포지토리에 있는 경우 `init` 작업의 `external-repository-token` 매개 변수를 사용하여 프라이빗 리포지토리에 대한 액세스 권한이 있는 토큰을 지정합니다.

```yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    external-repository-token: {% raw %}${{ secrets.ACCESS_TOKEN }}{% endraw %}
```

구성 파일의 설정은 YAML 형식으로 작성됩니다.

{% ifversion codeql-packs %}
### {% data variables.product.prodname_codeql %} 쿼리 팩 지정

{% data reusables.code-scanning.beta-codeql-packs-cli %}

배열에서 {% data variables.product.prodname_codeql %} 쿼리 팩을 지정합니다. 형식은 워크플로 파일에서 사용하는 형식과 다릅니다.

{% raw %}
``` yaml
packs:
  # Use the latest version of 'pack1' published by 'scope'
  - scope/pack1
  # Use version 1.2.3 of 'pack2'
  - scope/pack2@1.2.3
  # Use the latest version of 'pack3' compatible with 3.2.1
  - scope/pack3@~3.2.1
  # Use pack4 and restrict it to queries found in the 'path/to/queries' directory
  - scope/pack4:path/to/queries
  # Use pack5 and restrict it to the query 'path/to/single/query.ql'
  - scope/pack5:path/to/single/query.ql
  # Use pack6 and restrict it to the query suite 'path/to/suite.qls'
  - scope/pack6:path/to/suite.qls
```
{% endraw %}

쿼리 팩을 지정하기 위한 전체 형식은 `scope/name[@version][:path]`입니다. `version` 및 `path`는 모두 선택 사항입니다. `version`은 유의적 버전 범위입니다. 누락된 경우 최신 버전이 사용됩니다. 유의적 버전 범위에 대한 자세한 내용은 [npm의 유의적 버전 문서](https://docs.npmjs.com/cli/v6/using-npm/semver#ranges)를 참조하세요.

둘 이상의 {% data variables.product.prodname_codeql %} 데이터베이스를 생성하는 워크플로가 있는 경우 중첩된 팩 맵을 사용하여 사용자 지정 구성 파일에서 실행할 {% data variables.product.prodname_codeql %} 쿼리 팩을 지정할 수 있습니다.

{% raw %}
``` yaml
packs:
  # Use these packs for JavaScript and TypeScript analysis
  javascript:
    - scope/js-pack1
    - scope/js-pack2
  # Use these packs for Java and Kotlin analysis
  java:
    - scope/java-pack1
    - scope/java-pack2@v1.0.0
```
{% endraw %} {% endif %}

### 추가 쿼리 지정

`queries` 배열에 추가 쿼리를 지정합니다. 배열의 각 요소에는 단일 쿼리 파일, 쿼리 파일이 포함된 디렉터리 또는 쿼리 도구 모음 정의 파일을 식별하는 값이 있는 `uses` 매개 변수가 포함되어 있습니다.

``` yaml
queries:
  - uses: ./my-basic-queries/example-query.ql
  - uses: ./my-advanced-queries
  - uses: ./query-suites/my-security-queries.qls
```

필요에 따라 아래 예제 구성 파일에 표시된 대로 각 배열 요소에 이름을 지정할 수 있습니다. 추가 쿼리에 대한 자세한 내용은 위의 "[추가 쿼리 실행](#running-additional-queries)"을 참조하세요.

### 기본 쿼리 사용 안 함

사용자 지정 쿼리만 실행하려면 `disable-default-queries: true`를 사용하여 기본 보안 쿼리를 사용하지 않도록 설정할 수 있습니다.

{% ifversion code-scanning-exclude-queries-from-analysis %}
### 분석에서 특정 쿼리 제외

사용자 지정 구성 파일에 `exclude` 및 `include` 필터를 추가하여 분석에서 제외하거나 분석에 포함할 쿼리를 지정할 수 있습니다.

이 기능은 제외하려는 경우에 유용합니다. 예를 들면 다음과 같습니다.
- 기본 도구 모음(`security`, `security-extended` 및 `security-and-quality`)의 특정 쿼리입니다.
- 결과에 관심 없는 특정 쿼리입니다.
- 경고 및 권장 사항을 생성하는 모든 쿼리입니다.

아래 구성 파일의 필터와 유사한 `exclude` 필터를 사용하여 기본 분석에서 제거하려는 쿼리를 제외할 수 있습니다. 아래 구성 파일의 예에서는 `js/redundant-assignment` 및 `js/useless-assignment-to-local` 쿼리가 둘 다 분석에서 제외됩니다.

```yaml
query-filters:
  - exclude:
      id: js/redundant-assignment
  - exclude:
      id: js/useless-assignment-to-local
```
쿼리의 ID를 찾으려면 보안 탭의 경고 목록에서 경고를 클릭할 수 있습니다. 그러면 경고 세부 정보 페이지가 열립니다. `Rule ID` 필드에는 쿼리 ID가 포함되어 있습니다. 경고 세부 정보 페이지에 대한 자세한 내용은 “[{% data variables.product.prodname_code_scanning %} 경고 정보](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-alert-details)”를 참조하세요.

{% tip %}

**팁:**
- 필터의 순서가 중요합니다. 쿼리 및 쿼리 팩에 대한 지침 이후에 표시되는 첫 번째 필터 명령은 쿼리가 기본적으로 포함되는지 아니면 제외되는지를 결정합니다.
- 후속 지침은 순서대로 실행되며 파일의 뒷부분에 표시되는 지침이 이전 지침보다 우선합니다.

{% endtip %}

“[예제 구성 파일](#example-configuration-files)” 섹션에서 이러한 필터의 사용을 보여 주는 또 다른 예제를 찾을 수 있습니다.

사용자 지정 구성 파일에서 `exclude` 및 `include` 필터 사용에 대한 자세한 내용은 “[{% data variables.product.prodname_codeql %} 쿼리 도구 모음 만들기](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/#filtering-the-queries-in-a-query-suite)”를 참조하세요. 필터링할 수 있는 쿼리 메타데이터에 대한 자세한 내용은 “[CodeQL 쿼리에 대한 메타데이터](https://codeql.github.com/docs/writing-codeql-queries/metadata-for-codeql-queries/)”를 참조하세요.

{% endif %}

### 검사할 디렉터리 지정

{% data variables.product.prodname_codeql %}에서 지원하는 해석된 언어(Python{% ifversion fpt or ghes > 3.3 또는 ghae > 3.3 %}, Ruby{% endif %} 및 JavaScript/TypeScript)의 경우 구성 파일에 배열을 추가하여 `paths` {% data variables.product.prodname_code_scanning %}를 특정 디렉터리의 파일로 제한할 수 있습니다. `paths-ignore` 배열을 추가하여 분석에서 특정 디렉터리에 있는 파일을 제외할 수 있습니다.

``` yaml
paths:
  - src
paths-ignore:
  - src/node_modules
  - '**/*.test.js'
```

{% note %}

**고**:

* {% data variables.product.prodname_code_scanning %} 구성 파일의 컨텍스트에서 사용하는 `paths` 및 `paths-ignore` 키워드는 워크플로에서 `on.<push|pull_request>.paths`에 대해 사용할 때 동일한 키워드와 혼동해선 안 됩니다. 워크플로에서 `on.<push|pull_request>`를 수정하는 데 사용되는 경우 사용자가 지정된 디렉터리에서 코드를 수정할 때 작업이 실행될지 여부를 결정합니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}의 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)”을 참조하세요.
* `?`, `+`, `[`, `]`, `!` 필터 패턴 문자는 지원되지 않으며 문자 그대로 일치됩니다.
* `**` 문자는 줄의 시작 또는 끝에만 있거나 슬래시로 둘러싸일 수 있으며 `**` 및 다른 문자와 혼합할 수 없습니다. 예를 들어 `foo/**`, `**/foo`, `foo/**/bar`는 모두 허용되는 구문이지만 `**foo`는 그렇지 않습니다. 그러나 예제와 같이 다른 문자와 함께 별을 하나만 사용할 수 있습니다. `*` 문자가 포함된 모든 항목을 인용해야 합니다.

{% endnote %}

컴파일된 언어의 경우 {% data variables.product.prodname_code_scanning %}을 프로젝트의 특정 디렉터리로 제한하려면 워크플로에서 적절한 빌드 단계를 지정해야 합니다. 빌드에서 디렉터리를 제외하는 데 사용해야 하는 명령은 빌드 시스템에 따라 달라집니다. 자세한 내용은 "[컴파일된 언어를 위한 {% data variables.product.prodname_codeql %} 워크플로 구성](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)"을 참조하세요.

특정 디렉터리에서 코드를 수정할 때 monorepo의 작은 부분을 빠르게 분석할 수 있습니다. 빌드 단계에서 디렉터리를 제외하고, 워크플로에서 [`on.<push|pull_request>`](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)에 대해 `paths-ignore` 및 `paths` 키워드를 모두 사용해야 합니다.

### 예제 구성 파일

{% data reusables.code-scanning.example-configuration-files %}

## 컴파일된 언어에 대해 {% data variables.product.prodname_code_scanning %} 구성

{% data reusables.code-scanning.autobuild-compiled-languages %} {% data reusables.code-scanning.analyze-go %}

{% data reusables.code-scanning.autobuild-add-build-steps %} 컴파일된 언어에 대해 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}을 구성하는 자세한 방법은 "[컴파일된 언어를 위한 {% data variables.product.prodname_codeql %} 워크플로 구성](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages)"을 참조하세요.

## {% data variables.product.prodname_code_scanning %} 데이터를 {% data variables.product.prodname_dotcom %}에 업로드

{% data variables.product.prodname_dotcom %}은 타사 도구를 이용해 외부에서 생성된 코드 분석 데이터를 표시할 수 있습니다. `upload-sarif` 작업을 사용하여 코드 분석 데이터를 업로드할 수 있습니다. 자세한 내용은 "[SARIF 파일을 GitHub에 업로드](/code-security/secure-coding/uploading-a-sarif-file-to-github)"를 참조하세요.
