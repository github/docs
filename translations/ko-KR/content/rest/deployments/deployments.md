---
title: 배포
intro: 배포 API를 사용하면 배포 및 배포 환경을 만들고 삭제할 수 있습니다.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 59567f92afddb8941005146a3fa92fd20549fa61
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147687054'
---
## 배포 API 정보

배포는 특정 참조(분기, SHA, 태그)를 배포하기 위한 요청입니다. GitHub는 새 배포가 만들어질 때 외부 서비스가 수신 대기하고 조치를 취할 수 있는 [`deployment` 이벤트](/developers/webhooks-and-events/webhook-events-and-payloads#deployment)를 발송합니다. 배포를 통해 개발자와 조직은 다양한 유형의 애플리케이션(예: 웹, 네이티브)을 제공하는 구현 세부 정보에 대해 걱정할 필요 없이 배포를 중심으로 느슨하게 결합된 도구를 빌드할 수 있습니다.

배포 상태를 통해 외부 서비스는 [`deployment_status` 이벤트](/developers/webhooks-and-events/webhook-events-and-payloads#deployment_status)를 수신 대기하는 시스템이 사용할 수 있는 `error`, `failure`, `pending`, `in_progress`, `queued` 또는 `success` 상태로 배포를 표시할 수 있습니다.

배포 상태에는 배포 상태를 더 유용하게 하므로 매우 권장되는 선택 사항인 `description` 및 `log_url`도 포함할 수 있습니다. `log_url`은 배포 출력에 대한 전체 URL이고 `description`은 배포에서 발생한 일에 대한 상위 수준 요약입니다.

GitHub는 새 배포 및 배포 상태가 만들어질 때 `deployment` 및 `deployment_status` 이벤트를 발송합니다. 이러한 이벤트를 통해 타사 통합이 배포 요청에 대한 응답을 수신하고 진행 상황에 따라 배포 상태를 업데이트할 수 있습니다.

다음은 이러한 상호 작용이 작동하는 방식에 대한 간단한 시퀀스 다이어그램입니다.

```
+---------+             +--------+            +-----------+        +-------------+
| Tooling |             | GitHub |            | 3rd Party |        | Your Server |
+---------+             +--------+            +-----------+        +-------------+
     |                      |                       |                     |
     |  Create Deployment   |                       |                     |
     |--------------------->|                       |                     |
     |                      |                       |                     |
     |  Deployment Created  |                       |                     |
     |<---------------------|                       |                     |
     |                      |                       |                     |
     |                      |   Deployment Event    |                     |
     |                      |---------------------->|                     |
     |                      |                       |     SSH+Deploys     |
     |                      |                       |-------------------->|
     |                      |                       |                     |
     |                      |   Deployment Status   |                     |
     |                      |<----------------------|                     |
     |                      |                       |                     |
     |                      |                       |   Deploy Completed  |
     |                      |                       |<--------------------|
     |                      |                       |                     |
     |                      |   Deployment Status   |                     |
     |                      |<----------------------|                     |
     |                      |                       |                     |
```

GitHub는 실제로 서버에 액세스하지 않습니다. 배포 이벤트와 상호 작용하는 것은 타사 통합에 달려 있습니다. 여러 시스템이 배포 이벤트를 수신 대기할 수 있으며 서버에 코드를 푸시하고 네이티브 코드를 빌드하는 등의 책임이 있는지 여부에 대한 결정은 각 시스템에 달려 있습니다.

`repo_deployment` [OAuth 범위](/developers/apps/scopes-for-oauth-apps)는 리포지토리 코드에 대한 액세스 권한을 부여하지 **않고** 배포 및 배포 상태에 대한 대상 액세스 권한을 부여하지만 {% ifversion not ghae %}`public_repo` 및{% endif %}`repo` 범위는 코드에도 권한을 부여합니다.

### 비활성 배포

배포 상태를 `success`로 설정하면 동일한 환경 이름이 있는 동일한 리포지토리에서 이전의 모든 영구 비프로덕션 환경 배포가 `inactive`됩니다. 이를 방지하려면 배포 상태를 만들 때 `auto_inactive`를 `false`로 설정할 수 있습니다.

`state`를 `inactive`로 설정하여 임시 환경이 더 이상 존재하지 않음을 알릴 수 있습니다.  `state`를 `inactive`로 설정하면 {% data variables.product.prodname_dotcom %}에서 배포가 `destroyed`로 표시되고 이에 대한 액세스가 제거됩니다.
