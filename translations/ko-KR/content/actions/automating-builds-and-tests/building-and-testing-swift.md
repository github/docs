---
title: Swift 빌드 및 테스트
intro: CI(연속 통합) 워크플로를 만들어 Swift 프로젝트를 빌드하고 테스트할 수 있습니다.
redirect_from:
  - /actions/guides/building-and-testing-swift
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Swift
shortTitle: Build & test Swift
ms.openlocfilehash: 5717f9c7a939d2347ea5a49458002185c3ec07eb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147408997'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

이 가이드에서는 Swift 패키지를 빌드하고 테스트하는 방법을 보여 줍니다.

{% ifversion ghae %} {% data variables.product.prodname_ghe_managed %}에서 Swift 프로젝트를 빌드하고 테스트하려면 필수 Swift 종속성이 필요합니다. {% data reusables.actions.self-hosted-runners-software %} {% else %}{% data variables.product.prodname_dotcom %} 호스트 실행기에는 사전 설치된 소프트웨어가 있는 도구 캐시가 있으며 Ubuntu 및 macOS 실행기에는 Swift 패키지를 빌드하기 위한 종속성이 포함되어 있습니다. 최신 소프트웨어의 전체 목록과 사전 설치된 Swift 및 Xcode 버전은 “[GitHub 호스트 실행기 정보](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-software)”를 참조하세요.{% endif %}

## 필수 조건

YAML 구문과 이를 {% data variables.product.prodname_actions %}와 함께 사용하는 방법에 대해 잘 알고 있어야 합니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)”을 참조하세요.

Swift 패키지를 기본적으로 이해하는 것이 좋습니다. 자세한 내용은 Apple 개발자 설명서의 “[Swift 패키지](https://developer.apple.com/documentation/swift_packages)”를 참조하세요.

## Swift 시작 워크플로 사용

{% data variables.product.prodname_dotcom %}는 대부분의 Swift 프로젝트에서 작동하는 Swift 시작 워크플로를 제공하며 가이드에는 Swift 시작 워크플로를 사용자 지정하는 방법을 보여 주는 예제가 포함되어 있습니다. 자세한 내용은 [Swift 시작 워크플로](https://github.com/actions/starter-workflows/blob/main/ci/swift.yml)를 참조하세요.

빠르게 시작하려면 시작 워크플로를 리포지토리의 `.github/workflows` 디렉터리에 추가합니다.

```yaml{:copy}
name: Swift

on: [push]

jobs:
  build:

    runs-on: macos-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```

## Swift 버전 지정

{% data variables.product.prodname_dotcom %} 호스트 실행기에서 사전 설치된 특정 버전의 Swift를 사용하려면 `fwal/setup-swift` 작업을 사용하세요. 이 작업은 실행기의 도구 캐시에서 특정 버전의 Swift를 찾고 필수 이진 파일을 `PATH`에 추가합니다. 이러한 변경 내용은 작업의 나머지 부분에 대해 유지됩니다. 자세한 내용은 [`fwal/setup-swift`](https://github.com/marketplace/actions/setup-swift) 작업을 참조하세요.

자체 호스트 실행기를 사용하는 경우 원하는 Swift 버전을 설치하고 `PATH`에 추가해야 합니다.

아래 예제에서는 `fwal/setup-swift` 작업을 사용하는 방법을 보여 줍니다.

### 여러 Swift 버전 사용

행렬에서 여러 버전의 Swift를 사용하도록 작업을 구성할 수 있습니다.

```yaml{:copy}

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}


name: Swift

on: [push]

jobs:
  build:
    name: {% raw %}Swift ${{ matrix.swift }} on ${{ matrix.os }}{% endraw %}
    strategy:
      matrix:
        os: [ubuntu-latest, macos-latest]
        swift: ["5.2", "5.3"]
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    steps:
      - uses: fwal/setup-swift@2040b795e5c453c3a05fcb8316496afc8a74f192
        with:
          swift-version: {% raw %}${{ matrix.swift }}{% endraw %}
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```

### 단일 특정 Swift 버전 사용

`5.3.3`과 같은 특정 버전의 Swift를 사용하도록 작업을 구성할 수 있습니다.

{% raw %}
```yaml{:copy}
steps:
  - uses: fwal/setup-swift@2040b795e5c453c3a05fcb8316496afc8a74f192
    with:
      swift-version: "5.3.3"
  - name: Get swift version
    run: swift --version # Swift 5.3.3
```
{% endraw %}

## 코드 빌드 및 테스트

로컬에서 사용하는 것과 동일한 명령으로 Swift를 사용하여 코드를 빌드하고 테스트할 수 있습니다. 이 예제에서는 작업에서 `swift build` 및 `swift test`를 사용하는 방법을 보여 줍니다.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: fwal/setup-swift@2040b795e5c453c3a05fcb8316496afc8a74f192
    with:
      swift-version: "5.3.3"
  - name: Build
    run: swift build
  - name: Run tests
    run: swift test
```
