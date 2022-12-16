---
title: 컨테이너에서 CodeQL 코드 검사 실행
shortTitle: '{% data variables.product.prodname_code_scanning_capc %} in a container'
intro: '모든 프로세스가 동일한 컨테이너에서 실행되도록 하여 컨테이너에서 {% data variables.product.prodname_code_scanning %}를 실행할 수 있습니다.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-a-container
  - /code-security/secure-coding/running-codeql-code-scanning-in-a-container
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/running-codeql-code-scanning-in-a-container
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Actions
  - Repositories
  - Containers
  - Java
ms.openlocfilehash: 60dac8a7f71af067c5cfaba5f48d123a3068f704
ms.sourcegitcommit: aa488e9e641139f9056885b1479c8801e9906131
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/11/2022
ms.locfileid: '148162809'
---
{% data reusables.code-scanning.beta %}

## 컨테이너화된 빌드를 사용하는 {% data variables.product.prodname_code_scanning %} 정보

컴파일된 언어에 대해 {% data variables.product.prodname_code_scanning %}를 설정하고 컨테이너화된 환경에서 코드를 빌드하는 경우 “빌드 중 소스 코드가 표시되지 않았습니다”라는 오류 메시지와 함께 분석이 실패할 수 있습니다. 이는 {% data variables.product.prodname_codeql %}이 컴파일될 때 코드를 모니터링할 수 없음을 나타냅니다.

코드를 빌드하는 컨테이너 내에서 {% data variables.product.prodname_codeql %}을 실행해야 합니다. 이는 {% data variables.product.prodname_codeql_cli %}{% ifversion codeql-runner-supported %}, {% data variables.code-scanning.codeql_runner %},{% endif %} 또는 {% data variables.product.prodname_actions %}를 사용하든 적용됩니다. {% data variables.product.prodname_codeql_cli %} {% ifversion codeql-runner-supported %}또는 {% data variables.code-scanning.codeql_runner %}{% endif %}의 경우 자세한 내용은 "[CI 시스템에 {% data variables.product.prodname_codeql_cli %} 설치](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)"{% ifversion codeql-runner-supported %} 또는 "[CI 시스템에서 {% data variables.code-scanning.codeql_runner %} 실행](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)"을 참조하세요. {% data variables.product.prodname_actions %}를 사용하는 경우 동일한 컨테이너에서 모든 작업을 실행하도록 워크플로를 구성합니다. 자세한 내용은 “[예제 워크플로](#example-workflow)”를 참조하세요.

{% note %}

**참고:** {% data reusables.code-scanning.non-glibc-linux-support %}

{% endnote %}

## 종속성

사용 중인 컨테이너에 특정 종속성이 누락된 경우 {% data variables.product.prodname_code_scanning %}를 실행하는 데 어려움이 있을 수 있습니다(예: Git을 설치하고 PATH 변수에 추가해야 함). 종속성 문제가 발생하는 경우 일반적으로 {% data variables.product.prodname_dotcom %}의 실행기 이미지에 포함된 소프트웨어 목록을 검토합니다. 자세한 내용은 다음 위치에 있는 버전별 `readme` 파일을 참조하세요.

* Linux: https://github.com/actions/runner-images/tree/main/images/linux
* macOS: https://github.com/actions/runner-images/tree/main/images/macos
* Windows: https://github.com/actions/runner-images/tree/main/images/win

## 예제 워크플로

{% ifversion ghes or ghae %} {% note %}

**참고:** 이 문서에서는 이 {% data variables.product.product_name %} 버전의 초기 릴리스에 포함된 CodeQL 작업 및 관련 CodeQL CLI 번들의 버전에서 사용할 수 있는 기능을 설명합니다. 엔터프라이즈에서 최신 버전의 CodeQL 작업을 사용하는 경우 최신 기능에 대한 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 문서](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/running-codeql-code-scanning-in-a-container)를 참조하세요.{% ifversion not ghae %} 최신 버전 사용에 대한 자세한 내용은 “[어플라이언스에 대한 코드 검사 구성](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)”을 참조하세요.{% endif %}

{% endnote %} {% endif %}

이 샘플 워크플로는 {% data variables.product.prodname_actions %}를 사용하여 컨테이너화된 환경에서 {% data variables.product.prodname_codeql %} 분석을 수행합니다. `container.image` 값은 사용할 컨테이너를 식별합니다. 이 예에서 이미지 이름은 `codeql-container`이고 태그는 `f0f91db`입니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontainer)”을 참조하세요.

``` yaml
name: "{% data variables.product.prodname_codeql %}"

on: 
  push:
    branches: [main]
  pull_request:
    branches: [main]
  schedule:
    - cron: '15 5 * * 3'

jobs:
  analyze:
    name: Analyze
    runs-on: ubuntu-latest
    permissions:
      security-events: write
      actions: read

    strategy:
      fail-fast: false
      matrix:
        language: [java]

    # Specify the container in which actions will run
    container:
      image: codeql-container:f0f91db

    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: {% data reusables.actions.action-codeql-action-init %}
        with:
          languages: {% raw %}${{ matrix.language }}{% endraw %}
      - name: Build
        run: |
          ./configure
          make
      - name: Perform {% data variables.product.prodname_codeql %} Analysis
        uses: {% data reusables.actions.action-codeql-action-analyze %}
```
