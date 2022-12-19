---
title: 워크플로 정보
shortTitle: About workflows
intro: '트리거, 구문, 고급 기능을 포함하여 개략적인 개요 {% data variables.product.prodname_actions %} 워크플로를 가져옵니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
redirect_from:
  - /actions/learn-github-actions/managing-complex-workflows
  - /actions/using-workflows/advanced-workflow-features
topics:
  - Workflows
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: cb0b834604d49432d34cec48b0c9f27e37161804
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '146180513'
---
## 워크플로 정보

{% data reusables.actions.about-workflows-long %}

## 워크플로 기본 사항

워크플로에는 다음과 같은 기본 구성 요소가 포함되어야 합니다.

1. 워크플로를 트리거하는 하나 이상의 _이벤트_.
1. 하나 이상의 _작업_ 이며, 각 작업은 _실행기_ 머신에서 실행되고 일련의 하나 이상의 _단계_ 를 실행합니다.
1. 각 단계에서는 워크플로를 간소화할 수 있는 재사용 가능한 확장인 작업을 정의하거나 실행하는 스크립트를 실행할 수 있습니다.

이러한 기본 구성 요소에 대한 자세한 내용은 "[GitHub Actions 이해](/actions/learn-github-actions/understanding-github-actions#the-components-of-github-actions)"를 참조하세요.

![워크플로 개요](/assets/images/help/images/overview-actions-simple.png)

## 워크플로 트리거

{% data reusables.actions.about-triggers %}

자세한 내용은 "[워크플로 트리거](/actions/using-workflows/triggering-a-workflow)"를 참조하고 이벤트의 전체 목록은 "[워크플로를 트리거하는 이벤트](/actions/using-workflows/events-that-trigger-workflows)"를 참조하세요.

## 워크플로 구문

워크플로는 YAML을 사용하여 정의됩니다. 워크플로 작성에 대한 YAML 구문의 전체 참조는 "[GitHub Actions용 워크플로 구문](/actions/using-workflows/workflow-syntax-for-github-actions#about-yaml-syntax-for-workflows)"을 참조하세요.


{% data reusables.actions.workflow-basic-example-and-explanation %}

워크플로 실행 다시 실행, 취소 또는 삭제와 같은 워크플로 실행 관리에 대한 자세한 내용은 "[워크플로 실행 관리](/actions/managing-workflow-runs)"를 참조하세요.

## 시작 워크플로 사용

{% data reusables.actions.workflow-template-overview %}

시작 워크플로 사용 및 생성에 대한 자세한 내용은 "[시작 워크플로 사용](/actions/using-workflows/using-starter-workflows)" 및 "[조직에 대한 시작 워크플로 만들기](/actions/using-workflows/creating-starter-workflows-for-your-organization)"를 참조하세요.

## 고급 워크플로 기능

이 섹션에서는 더 복잡한 워크플로를 만드는 데 도움이 되는 {% data variables.product.prodname_actions %}의 고급 기능 중 일부를 간략하게 설명합니다.

### 비밀 저장

워크플로에서 암호 또는 인증서와 같은 중요한 데이터를 사용하는 경우 {% data variables.product.prodname_dotcom %}에 비밀로 저장한 다음 워크플로에서 환경 변수로 사용할 수 있습니다. 즉, 워크플로의 YAML 원본에 중요한 값을 직접 포함할 필요 없이 워크플로를 만들고 공유할 수 있습니다.

이 예제 작업은 기존 비밀을 환경 변수로 참조하고 예제 명령에 매개 변수로 보내는 방법을 보여 줍니다.

{% raw %}
```yaml
jobs:
  example-job:
    runs-on: ubuntu-latest
    steps:
      - name: Retrieve secret
        env:
          super_secret: ${{ secrets.SUPERSECRET }}
        run: |
          example-command "$super_secret"
```
{% endraw %}

자세한 내용은 “[암호화된 비밀](/actions/security-guides/encrypted-secrets)”을 참조하세요.

### 종속 작업 만들기

기본적으로 워크플로의 작업은 모두 동시에 병렬로 실행됩니다. 다른 작업이 완료된 후에만 실행해야 하는 작업이 있는 경우 `needs` 키워드를 사용하여 이 종속성을 만들 수 있습니다. 작업 중 하나가 실패하면 모든 종속 작업은 건너뜁니다. 그러나 작업을 계속해야 하는 경우 `if` 조건문을 사용하여 이를 정의할 수 있습니다.

이 예제에서 `setup`, `build` 및 `test` 작업은 연달아 실행되며 `build`와 `test`는 그 앞 작업의 성공적인 완료에 따라 실행됩니다.

```yaml
jobs:
  setup:
    runs-on: ubuntu-latest
    steps:
      - run: ./setup_server.sh
  build:
    needs: setup
    runs-on: ubuntu-latest
    steps:
      - run: ./build_server.sh
  test:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - run: ./test_server.sh
```

자세한 내용은 “[필수 구성 요소 작업 정의](/actions/using-jobs/using-jobs-in-a-workflow#defining-prerequisite-jobs)”를 참조하세요.

### 매트릭스 사용

{% data reusables.actions.jobs.about-matrix-strategy %} 매트릭스는 빌드 옵션을 배열로 수신하는 `strategy` 키워드를 사용하여 만들어집니다. 예를 들어 이 매트릭스는 여러 버전의 Node.js 사용하여 작업을 여러 번 실행합니다.

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [12, 14, 16]
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node }}{% endraw %}
```

자세한 내용은 “[작업에 매트릭스 사용](/actions/using-jobs/using-a-matrix-for-your-jobs)”을 참조하세요.

{% ifversion actions-caching %}
### 종속성 캐싱

작업에서 종속성을 정기적으로 다시 사용하는 경우 이러한 파일을 캐싱하여 성능을 개선하는 것이 좋습니다. 캐시가 만들어지면 동일한 리포지토리의 모든 워크플로에서 사용할 수 있습니다.

이 예제에서는 ` ~/.npm` 디렉터리를 캐싱하는 방법을 보여 줍니다.

```yaml
jobs:
  example-job:
    steps:
      - name: Cache node modules
        uses: {% data reusables.actions.action-cache %}
        env:
          cache-name: cache-node-modules
        with:
          path: ~/.npm
          key: {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}{% endraw %}
          restore-keys: |
            {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-{% endraw %}
```

자세한 내용은 “[워크플로 속도를 높이기 위한 종속성 캐싱](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)”을 참조하세요.
{% endif %}

### 데이터베이스 및 서비스 컨테이너 사용

작업에 데이터베이스 또는 캐시 서비스가 필요한 경우 [`services`](/actions/using-jobs/running-jobs-in-a-container) 키워드를 사용하여 서비스를 호스팅하는 임시 컨테이너를 만들 수 있습니다. 그러면 해당 작업의 모든 단계에서 결과 컨테이너를 사용할 수 있으며 작업이 완료되면 제거됩니다. 이 예제에서는 작업이 `services`을 사용하여 `postgres` 컨테이너를 만든 다음 서비스에 연결하는 데 `node`을 사용할 수 있는 방법을 보여 줍니다.

```yaml
jobs:
  container-job:
    runs-on: ubuntu-latest
    container: node:10.18-jessie
    services:
      postgres:
        image: postgres
    steps:
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}
      - name: Install dependencies
        run: npm ci
      - name: Connect to PostgreSQL
        run: node client.js
        env:
          POSTGRES_HOST: postgres
          POSTGRES_PORT: 5432
```

자세한 내용은 "[컨테이너화된 서비스 사용](/actions/using-containerized-services)"을 참조하세요.

### 레이블을 사용하여 워크플로 라우팅

특정 유형의 실행기에서 작업을 처리하도록 하려면 레이블을 사용하여 작업이 실행되는 위치를 제어할 수 있습니다. 자체 호스팅 실행기에서 `self-hosted`의 기본 레이블 외에도 레이블을 할당할 수 있습니다. 그런 다음 YAML 워크플로에서 해당 레이블을 참조하여 작업이 예측 가능한 방식으로 라우팅되도록 할 수 있습니다.{% ifversion not ghae %} {% data variables.product.prodname_dotcom %} 호스팅 실행기에 미리 정의된 레이블이 할당되었습니다. {% endif %}

이 예제에서는 다음과 같이 워크플로에서 레이블을 사용하여 필요한 실행기를 지정하는 방법을 보여 줍니다.

```yaml
jobs:
  example-job:
    runs-on: [self-hosted, linux, x64, gpu]
```

워크플로는 `runs-on` 배열에 모든 레이블이 있는 실행기에서만 실행됩니다. 작업은 우선 지정된 레이블이 있는 유휴 자체 호스팅 실행기로 이동합니다. {% ifversion fpt or ghec %} 사용할 수 없는 경우 지정된 레이블이 있는 {% data variables.product.prodname_dotcom %} 호스팅 실행기가 있으면 작업이 {% data variables.product.prodname_dotcom %} 호스팅 실행기로 이동합니다.{% endif %}

자체 호스팅 실행기 레이블에 대한 자세한 내용은 "[자체 호스팅 실행기가 있는 레이블 사용](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)"을 참조하세요.

{% ifversion fpt or ghec %} {% data variables.product.prodname_dotcom %} 호스팅 실행기 레이블에 대한 자세한 내용은 “[지원되는 실행기 및 하드웨어 리소스](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources)”를 참조하세요.
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
### 워크플로 다시 사용
{% data reusables.actions.reusable-workflows %} {% endif %}

### 환경 사용

워크플로에서 작업 실행을 제어하도록 보호 규칙 및 비밀을 사용하여 환경을 구성할 수 있습니다. 워크플로의 각 작업은 단일 환경을 참조할 수 있습니다. 환경을 참조하는 작업이 실행기에 전송되기 전에 환경에 대해 구성된 모든 보호 규칙이 전달되어야 합니다. 자세한 내용은 “[배포에 환경 사용](/actions/deployment/using-environments-for-deployment)”을 참조하세요.
