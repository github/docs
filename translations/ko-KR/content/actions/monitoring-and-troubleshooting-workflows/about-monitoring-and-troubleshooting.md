---
title: 모니터링 및 문제 해결 정보
intro: '{% data variables.product.prodname_actions %}의 도구를 사용하여 워크플로를 모니터링하고 디버그할 수 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: About monitoring and troubleshooting
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: d9158cd9bba6d003a583e78459240aa6790a1154
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062044'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 워크플로 모니터링 

{% ifversion github-runner-dashboard %}
### 조직 또는 엔터프라이즈에서 현재 작업 모니터링

{% data reusables.actions.github-hosted-runners-check-concurrency %}

{% endif %}

### 시각화 그래프 사용

모든 워크플로 실행은 실행 진행률을 보여 주는 실시간 그래프를 생성합니다. 이 그래프를 사용하여 워크플로를 모니터링하고 디버그할 수 있습니다. 예를 들면 다음과 같습니다.

   ![워크플로 그래프](/assets/images/help/images/workflow-graph.png)

자세한 내용은 “[시각화 그래프 사용](/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph)”을 참조하세요. 

### 워크플로 상태 배지 추가

{% data reusables.repositories.actions-workflow-status-badge-intro %}

자세한 내용은 “[워크플로 상태 배지 추가](/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge)”를 참조하세요.

{% ifversion fpt or ghec %}
### 작업 실행 시간 보기

작업을 실행하는 데 걸린 시간을 확인하기 위해 실행 시간을 볼 수 있습니다. 예를 들면 다음과 같습니다.

   ![실행 및 청구 가능 시간 세부 정보 링크](/assets/images/help/repository/view-run-billable-time.png)

자세한 내용은 “[작업 실행 시간 보기](/actions/monitoring-and-troubleshooting-workflows/viewing-job-execution-time)”를 참조하세요.
{% endif %}

### 워크플로 실행 기록 보기

워크플로에 포함된 각 작업 및 단계의 상태를 볼 수 있습니다. 예를 들면 다음과 같습니다.

   ![워크플로 실행 이름](/assets/images/help/repository/run-name.png)

자세한 내용은 “[워크플로 실행 기록 보기](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)”를 참조하세요.

## 워크플로 문제 해결

### 워크플로 실행 로그 사용

각 워크플로 실행은 보고, 검색하고, 다운로드할 수 있는 활동 로그를 생성합니다. 예를 들면 다음과 같습니다.

   ![Super Linter 워크플로 결과](/assets/images/help/repository/super-linter-workflow-results-updated-2.png)

자세한 내용은 “[워크플로 실행 로그 사용](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs)”을 참조하세요.

### 디버그 로깅 사용

워크플로 로그가 워크플로, 작업 또는 단계가 예상대로 작동하지 않는 이유를 진단하기에 충분한 세부 정보를 제공하지 않는 경우 추가 디버그 로깅을 사용하도록 설정할 수 있습니다. 자세한 내용은 “[디버그 로깅 사용](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging)”을 참조하세요.

## 자체 호스팅 실행기 모니터링 및 문제 해결

자체 호스팅 실행기를 사용하는 경우 해당 활동을 보고 일반적인 문제를 진단할 수 있습니다. 

자세한 내용은 “[자체 호스팅 실행기 모니터링 및 문제 해결](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)”을 참조하세요.
