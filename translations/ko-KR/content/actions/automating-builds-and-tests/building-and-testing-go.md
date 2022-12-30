---
title: Go 빌드 및 테스트
intro: CI(연속 통합) 워크플로를 만들어 Go 프로젝트를 빌드하고 테스트할 수 있습니다.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
shortTitle: Build & test Go
ms.openlocfilehash: 590edc2af0b7f370e52b449f320bdc2a758450bc
ms.sourcegitcommit: 2e1852bcdd690cb66b9b5d69cb056a2bb2b9a6b4
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160857'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

이 가이드에서는 Go 패키지를 빌드하고 테스트하고 게시하는 방법을 보여 줍니다.

{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% else %} {% data variables.product.prodname_dotcom %} 호스트 실행기에는 소프트웨어가 사전 설치된 도구 캐시가 있습니다. 여기에는 Go에 대한 종속성이 포함되어 있습니다. 최신 소프트웨어 및 사전 설치된 버전의 Go에 대한 전체 목록은 [{% data variables.product.prodname_dotcom %} 호스트 실행기 정보](/actions/using-github-hosted-runners/about-github-hosted-runners#preinstalled-software)를 참조하세요.
{% endif %}

## 필수 조건

YAML 구문과 이를 {% data variables.product.prodname_actions %}와 함께 사용하는 방법에 대해 잘 알고 있어야 합니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/using-workflows/workflow-syntax-for-github-actions)”을 참조하세요.

Go 언어를 기본적으로 이해하는 것이 좋습니다. 자세한 내용은 [Go 시작](https://golang.org/doc/tutorial/getting-started)을 참조하세요.

## Go 시작 워크플로 사용

{% data variables.product.prodname_dotcom %}는 대부분의 Go 프로젝트에서 작동하는 Go 시작 워크플로를 제공합니다. 이 가이드에는 시작 워크플로를 사용자 지정하는 데 사용할 수 있는 예제가 포함되어 있습니다. 자세한 내용은 [Go 시작 워크플로](https://github.com/actions/starter-workflows/blob/main/ci/go.yml)를 참조하세요.

빠르게 시작하려면 시작 워크플로를 리포지토리의 `.github/workflows` 디렉터리에 추가합니다.

```yaml{:copy}
name: Go package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Set up Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: 1.15

      - name: Build
        run: go build -v ./...

      - name: Test
        run: go test -v ./...
```

## Go 버전 지정

Go 버전을 지정하는 가장 쉬운 방법은 {% data variables.product.prodname_dotcom %}에서 제공하는 `setup-go` 작업을 사용하는 것입니다. 자세한 내용은 [`setup-go` 작업](https://github.com/actions/setup-go/)을 참조하세요.

{% data variables.product.prodname_dotcom %} 호스팅 실행기에서 미리 설치된 Go 버전을 사용하려면 관련 버전을 작업의 속성에 `setup-go` 작업의 `go-version` 속성에 전달합니다. 이 작업은 각 실행기의 도구 캐시에서 특정 버전의 Go를 찾고 필수 이진 파일을 `PATH`에 추가합니다. 이러한 변경 내용은 작업의 나머지 부분에 대해 유지됩니다.

`setup-go` 작업은 다양한 실행기 및 다양한 버전의 Go에서 일관된 동작을 보장하는 데 유용하므로 {% data variables.product.prodname_actions %}로 Go를 사용하는 데 권장되는 방법입니다. 자체 호스트 실행기를 사용하는 경우 Go를 설치하고 이를 `PATH`에 추가해야 합니다.

### 여러 버전의 Go 사용

```yaml{:copy}
name: Go

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        go-version: [ '1.14', '1.15', '1.16.x' ]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go {% raw %}${{ matrix.go-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: {% raw %}${{ matrix.go-version }}{% endraw %}
      # You can test your matrix by printing the current Go version
      - name: Display Go version
        run: go version
```

### 특정 Go 버전 사용

`1.16.2`과 같은 특정 버전의 Go를 사용하도록 작업을 구성할 수 있습니다. 또는 의미 체계 버전 구문을 사용하여 최신 부 릴리스를 가져올 수 있습니다. 이 예제에서는 Go 1.16의 최신 패치 릴리스를 사용합니다.

```yaml{:copy}
      - name: Setup Go 1.16.x
        uses: {% data reusables.actions.action-setup-go %}
        with:
          # Semantic version range syntax or exact version of Go
          go-version: '1.16.x'
```

## 종속성 설치

종속성을 설치하는 데 `go get`을 사용할 수 있습니다.

```yaml{:copy}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.16.x'
      - name: Install dependencies
        run: |
          go get .
          go get example.com/octo-examplemodule
          go get example.com/octo-examplemodule@v1.3.4
```

{% ifversion actions-caching %}

### 종속성 캐싱

[`setup-go`작업](https://github.com/actions/setup-go)을 사용하여 종속성을 캐시하고 복원할 수 있습니다. 기본적으로 캐싱은 사용하지 않도록 설정되지만 `cache` 매개 변수를 `true`로 설정하여 사용하도록 설정할 수 있습니다.

캐싱을 사용하도록 설정하면 `setup-go` 작업은 리포지토리 루트에서 종속성 파일 `go.sum`을 검색하고 종속성 파일의 해시를 캐시 키의 일부로 사용합니다.

```yaml{:copy}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.16.x'
          cache: true
```

또는 여러 종속성 파일이 사용되거나 다른 하위 디렉터리에 있는 경우 `cache-dependency-path` 매개 변수를 사용할 수 있습니다.

```yaml{:copy}
      - uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.17'
          cache: true
          cache-dependency-path: subdir/go.sum
```

사용자 지정 요구사항이 있거나 캐싱에 대한 세부적인 제어가 필요한 경우 [`cache` 작업](https://github.com/marketplace/actions/cache)을 사용할 수 있습니다. 자세한 내용은 “[워크플로 속도를 높이기 위한 종속성 캐싱](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)”을 참조하세요.

{% endif %}

## 코드 빌드 및 테스트

코드를 빌드하고 테스트하기 위해 로컬에서 사용하는 것과 동일한 명령을 사용할 수 있습니다. 이 예제 워크플로에서는 작업에서 `go build` 및 `go test`를 사용하는 방법을 보여 줍니다.

```yaml{:copy}
name: Go
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.16.x'
      - name: Install dependencies
        run: go get .
      - name: Build
        run: go build -v ./...
      - name: Test with the Go CLI
        run: go test
```

## 워크플로 데이터를 아티팩트로 패키지

워크플로가 완료되면 분석을 위해 결과 아티팩트 업로드할 수 있습니다. 예를 들어 로그 파일, 코어 덤프, 테스트 결과 또는 스크린샷을 저장해야 할 수 있습니다. 다음 예제에서는 `upload-artifact` 작업을 사용하여 테스트 결과를 업로드하는 방법을 보여 줍니다.

자세한 내용은 “[워크플로 데이터를 아티팩트로 저장](/actions/using-workflows/storing-workflow-data-as-artifacts)”을 참조하세요.

```yaml{:copy}
name: Upload Go test results

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        go-version: [ '1.14', '1.15', '1.16.x' ]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: {% raw %}${{ matrix.go-version }}{% endraw %}
      - name: Install dependencies
        run: go get .
      - name: Test with Go
        run: go test -json > TestResults-{% raw %}${{ matrix.go-version }}{% endraw %}.json
      - name: Upload Go test results
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: Go-results-{% raw %}${{ matrix.go-version }}{% endraw %}
          path: TestResults-{% raw %}${{ matrix.go-version }}{% endraw %}.json
```
