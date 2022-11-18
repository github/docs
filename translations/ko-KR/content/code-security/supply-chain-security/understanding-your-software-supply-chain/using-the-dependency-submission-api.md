---
title: 종속성 제출 API 사용
intro: 종속성 제출 API를 사용하면 프로젝트에 대해 프로젝트를 빌드하거나 컴파일할 때 확인되는 종속성과 같은 종속성을 제출할 수 있습니다.
shortTitle: Dependency submission API
topics:
  - API
  - Dependency graph
  - Dependencies
  - REST
versions:
  feature: dependency-submission-api
ms.openlocfilehash: 4ebf367a083010bc9177a2c67bce28cf99078a5f
ms.sourcegitcommit: c45cc7325ed19e69ddd7506e46fcafd0b5182b3f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/12/2022
ms.locfileid: '148019563'
---
{% data reusables.dependency-submission.dependency-submission-api-beta %}

## 종속성 제출 API 정보

{% data reusables.dependency-submission.about-dependency-submission %}

종속성은 스냅샷 형식으로 종속성 제출 API에 제출됩니다. 스냅샷은 커밋 SHA 및 기타 메타데이터와 연결된 종속성 집합으로, 커밋에 대한 리포지토리의 현재 상태를 반영합니다. 종속성 제출 API에 대한 자세한 내용은 [종속성 제출 REST API 설명서](/rest/dependency-graph/dependency-submission)를 참조하세요.

## 빌드 시 종속성 제출

{% data variables.product.prodname_actions %} 워크플로에서 종속성 제출 API를 사용하여 프로젝트를 빌드할 때 프로젝트에 대한 종속성을 제출할 수 있습니다. 

### 미리 만들어진 작업 사용

종속성 제출 API를 사용하는 가장 간단한 방법은 종속성 목록을 수집하고 필요한 스냅샷 형식으로 변환한 후 목록을 API에 제출하는 미리 만들어진 작업을 리포지토리에 추가하는 것입니다. 다양한 에코시스템에 대해 이러한 단계를 완료하는 작업은 {% data variables.product.prodname_marketplace %}에서 사용할 수 있으며 베타 과정 및 그 이후에도 추가 작업이 생성될 예정입니다. 아래 표에서 현재 사용 가능한 작업에 대한 링크를 찾을 수 있습니다.

에코시스템 | 작업 |
--- | --- |
Go | [Go 종속성 제출](https://github.com/actions/go-dependency-submission)

예를 들어 다음 [Go 종속성 제출](https://github.com/actions/go-dependency-submission) 워크플로는 Go 빌드 대상(`main` 함수를 포함하는 Go 파일)에 대한 종속성을 계산하고 해당 목록을 종속성 제출 API에 제출합니다. 

```yaml

name: Go Dependency Submission
on:
  push:
    branches:
      - main
      
# The API requires write permission on the repository to submit dependencies
permissions:
  contents: write

# Envionment variables to configure Go and Go modules. Customize as necessary
env:
  GOPROXY: '' # A Go Proxy server to be used
  GOPRIVATE: '' # A list of modules are considered private and not requested from GOPROXY
jobs:
  go-action-detection:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout Repository'
        uses: {% data reusables.actions.action-checkout %}
        
      - uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: ">=1.18.0"
          
      - name: Run snapshot action
        uses: actions/go-dependency-submission@v1
        with:
            # Required: Define the repo path to the go.mod file used by the
            # build target
            go-mod-path: go-example/go.mod
            #
            # Optional. Define the repo path of a build target,
            # a file with a `main()` function.
            # If undefined, this action will collect all dependencies
            # used by all build targets for the module. This may
            # include Go dependencies used by tests and tooling.
            go-build-target: go-example/cmd/octocat.go

```
### 사용자 고유의 작업 만들기

또는 빌드 시 프로젝트에 대한 종속성을 제출하는 고유한 작업을 작성할 수 있습니다. 워크플로는 다음을 수행해야 합니다.

  1. 프로젝트에 대한 종속성 목록을 생성합니다.
  2. 종속성 목록을 종속성 제출 API에서 허용하는 스냅샷 형식으로 변환합니다. 형식에 대한 자세한 내용은 [종속성 제출 REST API 설명서](/rest/dependency-graph/dependency-submission)의 “리포지토리 스냅샷 만들기” API 작업에 대한 본문 매개 변수를 참조하세요.
  3. 종속성 제출 API에 형식이 지정된 종속성 목록을 제출합니다.

{% data variables.product.product_name %}는 종속성 제출 API에 종속성을 제출하기 위한 고유한 GitHub 작업을 빌드하는 데 도움이 되는 TypeScript 라이브러리인 [종속성 제출 도구 키트](https://github.com/github/dependency-submission-toolkit)를 유지 관리합니다. 작업 작성에 대한 자세한 내용은 “[작업 만들기](/actions/creating-actions)”를 참조하세요.
