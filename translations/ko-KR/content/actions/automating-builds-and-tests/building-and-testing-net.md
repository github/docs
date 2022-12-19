---
title: .NET 빌드 및 테스트
intro: CI(연속 통합) 워크플로를 만들어 .NET 프로젝트를 빌드하고 테스트할 수 있습니다.
redirect_from:
  - /actions/guides/building-and-testing-net
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Build & test .NET
ms.openlocfilehash: eadb00516976159f2efffcaa04cb4b46471c527f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063620'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

이 가이드에서는 .NET 패키지를 빌드하고 테스트하고 게시하는 방법을 보여 줍니다.

{% ifversion ghae %} {% data variables.product.prodname_ghe_managed %}에서 .NET 프로젝트를 빌드하고 테스트하려면 .NET Core SDK가 필요합니다. {% data reusables.actions.self-hosted-runners-software %} {% else %} {% data variables.product.prodname_dotcom %} 호스트 실행기에는 소프트웨어가 사전 설치된 도구 캐시가 있습니다. 여기에는 .NET Core SDK가 포함되어 있습니다. 최신 소프트웨어 및 사전 설치된 버전의 .NET Core SDK에 대한 전체 목록은 [{% data variables.product.prodname_dotcom %} 호스트 실행기에 설치된 소프트웨어](/actions/reference/specifications-for-github-hosted-runners)를 참조하세요.
{% endif %}

## 필수 조건

YAML 구문과 이를 {% data variables.product.prodname_actions %}와 함께 사용하는 방법에 대해 잘 알고 있어야 합니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)”을 참조하세요.

.NET Core SDK를 기본적으로 이해하는 것이 좋습니다. 자세한 내용은 [.NET 시작](https://dotnet.microsoft.com/learn)을 참조하세요.

## .NET 시작 워크플로 사용

{% data variables.product.prodname_dotcom %}는 대부분의 .NET 프로젝트에서 작동하는 .NET 시작 워크플로를 제공하며 가이드에는 .NET 시작 워크플로를 사용자 지정하는 방법을 보여 주는 예제가 포함되어 있습니다. 자세한 내용은 [.NET 시작 워크플로](https://github.com/actions/setup-dotnet)를 참조하세요.

빠르게 시작하려면 시작 워크플로를 리포지토리의 `.github/workflows` 디렉터리에 추가합니다.

```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet-version: ['3.0', '3.1.x', '5.0.x' ]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup .NET Core SDK {% raw %}${{ matrix.dotnet-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-dotnet %}
        with:
          dotnet-version: {% raw %}${{ matrix.dotnet-version }}{% endraw %}
      - name: Install dependencies
        run: dotnet restore
      - name: Build
        run: dotnet build --configuration Release --no-restore
      - name: Test
        run: dotnet test --no-restore --verbosity normal
```

## .NET 버전 지정

{% data variables.product.prodname_dotcom %} 호스트 실행기에서 사전 설치된 버전의 .NET Core SDK를 사용하려면 `setup-dotnet` 작업을 사용하세요. 이 작업은 각 실행기의 도구 캐시에서 특정 버전의 .NET을 찾고 필수 이진 파일을 `PATH`에 추가합니다. 이러한 변경 내용은 작업의 나머지 부분에 대해 유지됩니다.

`setup-dotnet` 작업은 다양한 실행기 및 다양한 버전의 .NET에서 일관된 동작을 보장하므로 {% data variables.product.prodname_actions %}로 .NET을 사용하는 데 권장되는 방법입니다. 자체 호스트 실행기를 사용하는 경우 .NET을 설치하고 이를 `PATH`에 추가해야 합니다. 자세한 내용은 [`setup-dotnet`](https://github.com/marketplace/actions/setup-net-core-sdk) 작업을 참조하세요.

### 여러 .NET 버전 사용

```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet-version: [ '3.0', '3.1.x', '5.0.x' ]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup dotnet {% raw %}${{ matrix.dotnet-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-dotnet %}
        with:
          dotnet-version: {% raw %}${{ matrix.dotnet-version }}{% endraw %}
      # You can test your matrix by printing the current dotnet version
      - name: Display dotnet version
        run: dotnet --version
```

### 특정 .NET 버전 사용

`3.1.3`과 같은 특정 버전의 .NET을 사용하도록 작업을 구성할 수 있습니다. 또는 의미 체계 버전 구문을 사용하여 최신 부 릴리스를 가져올 수 있습니다. 이 예제에서는 .NET 3의 최신 부 릴리스를 사용합니다.

```yaml
    - name: Setup .NET 3.x
      uses: {% data reusables.actions.action-setup-dotnet %}
      with:
        # Semantic version range syntax or exact version of a dotnet version
        dotnet-version: '3.x'
```

## 종속성 설치

{% data variables.product.prodname_dotcom %} 호스트 실행기에는 NuGet 패키지 관리자가 설치되어 있습니다. 코드를 빌드하고 테스트하기 전에 dotnet CLI를 사용하여 NuGet 패키지 레지스트리에서 종속성을 설치할 수 있습니다. 예를 들어 아래 YAML은 `Newtonsoft` 패키지를 설치합니다.

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Setup dotnet
  uses: {% data reusables.actions.action-setup-dotnet %}
  with:
    dotnet-version: '3.1.x'
- name: Install dependencies
  run: dotnet add package Newtonsoft.Json --version 12.0.1
```

{% ifversion actions-caching %}

### 종속성 캐싱

고유한 키를 사용하여 NuGet 종속성을 캐시할 수 있으므로 [`cache`](https://github.com/marketplace/actions/cache) 작업으로 향후 워크플로에 대한 종속성을 복원할 수 있습니다. 예를 들어 아래 YAML은 `Newtonsoft` 패키지를 설치합니다.

자세한 내용은 “[워크플로 속도를 높이기 위한 종속성 캐싱](/actions/guides/caching-dependencies-to-speed-up-workflows)”을 참조하세요.

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Setup dotnet
  uses: {% data reusables.actions.action-setup-dotnet %}
  with:
    dotnet-version: '3.1.x'
- uses: {% data reusables.actions.action-cache %}
  with:
    path: ~/.nuget/packages
    # Look to see if there is a cache hit for the corresponding requirements file
    key: {% raw %}${{ runner.os }}-nuget-${{ hashFiles('**/packages.lock.json') }}
    restore-keys: |
      ${{ runner.os }}-nuget{% endraw %}
- name: Install dependencies
  run: dotnet add package Newtonsoft.Json --version 12.0.1
```

{% note %}

**참고:** 종속성 수에 따라 종속성 캐시를 사용하는 것이 더 빠를 수 있습니다. 종속성이 많은 프로젝트는 다운로드에 필요한 시간이 줄어들기 때문에 성능이 향상되어야 합니다. 종속성이 더 적은 프로젝트는 성능이 크게 향상되지 않을 수 있으며 NuGet 캐시된 종속성을 설치하는 방식에 따라 성능이 약간 저하될 수도 있습니다. 성능은 프로젝트마다 다릅니다.

{% endnote %}

{% endif %}

## 코드 빌드 및 테스트

코드를 빌드하고 테스트하기 위해 로컬에서 사용하는 것과 동일한 명령을 사용할 수 있습니다. 이 예제에서는 작업에서 `dotnet build` 및 `dotnet test`를 사용하는 방법을 보여 줍니다.

```yaml
steps:
- uses: {% data reusables.actions.action-checkout %}
- name: Setup dotnet
  uses: {% data reusables.actions.action-setup-dotnet %}
  with:
    dotnet-version: '3.1.x'
- name: Install dependencies
  run: dotnet restore
- name: Build
  run: dotnet build
- name: Test with the dotnet CLI
  run: dotnet test
```

## 워크플로 데이터를 아티팩트로 패키지

워크플로가 완료되면 분석을 위해 결과 아티팩트 업로드할 수 있습니다. 예를 들어 로그 파일, 코어 덤프, 테스트 결과 또는 스크린샷을 저장해야 할 수 있습니다. 다음 예제에서는 `upload-artifact` 작업을 사용하여 테스트 결과를 업로드하는 방법을 보여 줍니다.

자세한 내용은 “[아티팩트를 사용하여 워크플로 데이터 유지](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)”를 참조하세요.

```yaml
name: dotnet package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        dotnet-version: [ '3.0', '3.1.x', '5.0.x' ]

      steps:
        - uses: {% data reusables.actions.action-checkout %}
        - name: Setup dotnet
          uses: {% data reusables.actions.action-setup-dotnet %}
          with:
            dotnet-version: {% raw %}${{ matrix.dotnet-version }}{% endraw %}
        - name: Install dependencies
          run: dotnet restore
        - name: Test with dotnet
          run: dotnet test --logger trx --results-directory {% raw %}"TestResults-${{ matrix.dotnet-version }}"{% endraw %}
        - name: Upload dotnet test results
          uses: {% data reusables.actions.action-upload-artifact %}
          with:
            name: {% raw %}dotnet-results-${{ matrix.dotnet-version }}{% endraw %}
            path: {% raw %}TestResults-${{ matrix.dotnet-version }}{% endraw %}
          # Use always() to always run this step to publish test results when there are test failures
          if: {% raw %}${{ always() }}{% endraw %}
```

## 패키지 레지스트리에 게시

CI 테스트에 통과하면 .NET 패키지를 패키지 레지스트리에 게시하도록 워크플로를 구성할 수 있습니다. 리포지토리 비밀을 사용하여 이진 파일을 게시하는 데 필요한 토큰 또는 자격 증명을 저장할 수 있습니다. 다음 예제에서는 `dotnet core cli`를 사용하여 패키지를 만들고 {% data variables.product.prodname_registry %}에 게시합니다.

```yaml
name: Upload dotnet package

on:
  release:
    types: [created]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      packages: write
      contents: read
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-dotnet %}
        with:
          dotnet-version: '3.1.x' # SDK Version to use.
          source-url: https://nuget.pkg.github.com/<owner>/index.json
        env:
          NUGET_AUTH_TOKEN: {% raw %}${{secrets.GITHUB_TOKEN}}{% endraw %}
      - run: dotnet build --configuration Release <my project>
      - name: Create the package
        run: dotnet pack --configuration Release <my project>
      - name: Publish the package to GPR
        run: dotnet nuget push <my project>/bin/Release/*.nupkg
```
