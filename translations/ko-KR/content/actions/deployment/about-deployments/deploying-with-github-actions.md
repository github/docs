---
title: GitHub Actions를 사용하여 배포
intro: 환경 및 동시성과 같은 기능을 사용하여 배포를 제어하는 방법을 알아봅니다.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
redirect_from:
  - /actions/deployment/deploying-with-github-actions
topics:
  - CD
shortTitle: Deploy with GitHub Actions
ms.openlocfilehash: 1e832b9fb4094009bc9b977e1ee2ab937839db41
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098422'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 소개

{% data variables.product.prodname_actions %}는 배포를 제어할 수 있는 기능을 제공합니다. 다음과 같습니다.

- 다양한 이벤트를 사용하여 워크플로를 트리거합니다.
- 작업을 진행하기 전에 규칙을 설정하고 비밀에 대한 액세스를 제한하도록 환경을 구성합니다.
- 동시성을 사용하여 한 번에 실행되는 배포 수를 제어합니다.

지속적인 배포에 대한 자세한 내용은 “[지속적인 배포 정보](/actions/deployment/about-continuous-deployment)”를 참조하세요.

## 필수 조건

{% data variables.product.prodname_actions %}의 구문에 익숙해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_actions %} 알아보기](/actions/learn-github-actions)”를 참조하세요.

## 배포 트리거

다양한 이벤트를 사용하여 배포 워크플로를 트리거할 수 있습니다. 가장 일반적인 것은 `pull_request`, `push`, `workflow_dispatch`입니다.

예를 들어 다음 트리거가 있는 워크플로는 언제든 실행됩니다.

- `main` 분기에 푸시가 있습니다.
- `main` 분기를 대상으로 하는 끌어오기 요청이 열리거나 동기화되거나 다시 열립니다.
- 누군가가 이를 수동으로 트리거합니다.

```yaml
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  workflow_dispatch:
```

자세한 내용은 “[워크플로를 트리거하는 이벤트](/actions/reference/events-that-trigger-workflows)”를 참조하세요.

## 환경 사용

{% data reusables.actions.about-environments %}

## 동시성 사용

동시성은 동일한 동시성 그룹을 사용하는 단일 작업 또는 워크플로만 한 번에 실행되도록 합니다. 환경에 최대 하나의 배포가 진행 중이고 한 번에 하나의 배포가 보류되도록 동시성을 사용할 수 있습니다.

{% note %}

**참고:** `concurrency` 및 `environment`는 연결되어 있지 않습니다. 동시성 값은 모든 문자열일 수 있습니다. 환경 이름이 될 필요는 없습니다. 또한 다른 워크플로가 동일한 환경을 사용하지만 동시성을 지정하지 않는 경우 해당 워크플로에는 동시성 규칙이 적용되지 않습니다.

{% endnote %}

예를 들어 다음 워크플로가 실행될 때 `production` 동시성 그룹을 사용하는 작업이나 워크플로가 진행 중인 경우 상태가 `pending`인 상태에서 일시 중지됩니다. 또한 `production` 동시성 그룹을 사용하고 상태가 `pending`인 모든 작업 또는 워크플로를 취소합니다. 즉, `production` 동시성 그룹을 사용하는 최대 하나의 실행 중인 작업 또는 하나의 보류 중인 작업 또는 워크플로가 있습니다.

```yaml
name: Deployment

concurrency: production

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: deploy
        # ...deployment-specific steps
```

작업 수준에서 동시성을 지정할 수도 있습니다. 이렇게 하면 동시 작업이 `pending`인 경우에도 워크플로의 다른 작업을 진행할 수 있습니다.

```yaml
name: Deployment

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: production
    concurrency: production
    steps:
      - name: deploy
        # ...deployment-specific steps
```

동일한 동시성 그룹에서 현재 실행 중인 작업 또는 워크플로를 취소하는 데 `cancel-in-progress`를 사용할 수도 있습니다.

```yaml
name: Deployment

concurrency: 
  group: production
  cancel-in-progress: true

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: deploy
        # ...deployment-specific steps
```

배포 관련 단계 작성에 대한 지침은 “[배포 예제 찾기](#finding-deployment-examples)”를 참조하세요.

## 배포 기록 보기

{% data variables.product.prodname_actions %} 워크플로가 환경에 배포되면 환경이 리포지토리의 기본 페이지에 표시됩니다. 환경에 대한 배포 보기에 대한 자세한 내용은 “[배포 기록 보기](/developers/overview/viewing-deployment-history)”를 참조하세요.

## 워크플로 실행 모니터링

모든 워크플로 실행은 실행 진행률을 보여 주는 실시간 그래프를 생성합니다. 이 그래프를 사용하여 배포를 모니터링하고 디버그할 수 있습니다. 자세한 내용은 “[시각화 그래프 사용](/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph)”을 참조하세요.

각 워크플로 실행의 로그와 워크플로 실행 기록을 볼 수도 있습니다. 자세한 내용은 “[워크플로 실행 기록 보기](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)”를 참조하세요.

## 앱을 통한 배포 추적

{% ifversion fpt 또는 ghec %} {% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}의 개인 계정 또는 조직이 Microsoft Teams 또는 Slack과 통합된 경우 Microsoft Teams 또는 Slack을 통해 환경을 사용하는 배포를 추적할 수 있습니다. 예를 들어 배포가 승인 보류 중이거나 배포가 승인된 경우 또는 배포 상태가 변경된 경우 앱을 통해 알림을 받을 수 있습니다. Microsoft Teams 또는 Slack 통합에 대한 자세한 내용은 “[GitHub 확장 및 통합](/github/customizing-your-github-workflow/exploring-integrations/github-extensions-and-integrations#team-communication-tools)”을 참조하세요.
{% endif %}

배포 및 배포 상태 웹후크를 사용하여 배포를 추적하는 앱을 빌드할 수도 있습니다. {% data reusables.actions.environment-deployment-event %} 자세한 내용은 “[앱](/developers/apps)” 및 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment)”를 참조하세요.

{% ifversion fpt or ghes or ghec %}

## 실행기 선택

{% data variables.product.company_short %} 호스트 실행기 또는 자체 호스트 실행기에서 배포 워크플로를 실행할 수 있습니다. {% data variables.product.company_short %} 호스트 실행기의 트래픽은 [광범위한 네트워크 주소](/rest/reference/meta#get-github-meta-information)에서 올 수 있습니다. 내부 환경에 배포 중이고 회사에서 외부 트래픽을 개인 네트워크로 제한하는 경우 {% data variables.product.company_short %} 호스트 실행기에서 실행되는 {% data variables.product.prodname_actions %} 워크플로는 내부 서비스 또는 리소스와 통신하지 못할 수 있습니다. 이를 극복하기 위해 자체 실행기를 호스트할 수 있습니다. 자세한 내용은 “[자체 호스트 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners)” 및 “[GitHub 호스트 실행기 정보](/actions/using-github-hosted-runners/about-github-hosted-runners)”를 참조하세요.

{% endif %}

## 상태 배지 표시

상태 배지를 사용하여 배포 워크플로의 상태를 표시할 수 있습니다. {% data reusables.repositories.actions-workflow-status-badge-intro %}

자세한 내용은 “[워크플로 상태 배지 추가](/actions/managing-workflow-runs/adding-a-workflow-status-badge)”를 참조하세요.

## 배포 예제 찾기

이 문서에서는 배포 워크플로에 추가할 수 있는 {% data variables.product.prodname_actions %}의 기능을 보여 줍니다.

{% data reusables.actions.cd-templates-actions %}
