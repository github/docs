---
title: 자체 호스팅 실행기로 자동 스케일링
shortTitle: Autoscale self-hosted runners
intro: 웹후크 이벤트에 대한 응답으로 자체 호스팅 실행기를 자동으로 스케일링할 수 있습니다.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
ms.openlocfilehash: 2fe0c197ac122ea9cd976c2718a492bd80c073fe
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107559'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 자동 스케일링 정보

특정 레이블을 사용하여 수신하는 웹후크 이벤트에 대한 응답으로 환경에서 자체 호스팅 실행기 수를 자동으로 늘리거나 줄일 수 있습니다. 예를 들어 [`queued`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job) 활동과 함께 [`workflow_job`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job) 웹후크 이벤트를 받을 때마다 새 자체 호스팅 실행기를 추가하는 자동화를 만들어 새 작업을 처리할 준비가 되었다는 알림을 받을 수 있습니다. 웹후크 페이로드는 레이블 데이터를 포함하므로 작업이 요청하는 실행기 유형을 식별할 수 있습니다. 작업이 완료되면 `workflow_job` [`completed`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job) 작업에 대한 응답으로 실행기를 제거하는 자동화를 만들 수 있습니다. 

## 권장되는 자동 스케일링 솔루션

{% data variables.product.prodname_dotcom %}는 실행기 자동 스케일링에 사용할 수 있는 두 개의 오픈 소스 프로젝트와 긴밀하게 협력하고 이를 권장합니다. 요구 사항에 따라 하나 또는 두 가지 솔루션이 적합할 수 있습니다. 

다음 리포지토리에는 해당 자동 스케일러를 설정하기 위한 자세한 지침이 있습니다. 

- [actions-runner-controller/actions-runner-controller](https://github.com/actions-runner-controller/actions-runner-controller) - {% data variables.product.prodname_actions %} 자체 호스팅 실행기를 위한 Kubernetes 컨트롤러입니다.
- [philips-labs/terraform-aws-github-runner](https://github.com/philips-labs/terraform-aws-github-runner) - Amazon Web Services의 스케일링 가능한 {% data variables.product.prodname_actions %} 실행기를 위한 Terraform 모듈입니다.

각 솔루션에는 고려해야 할 특정 세부 사항이 있습니다.

| **기능** | **actions-runner-controller** | **terraform-aws-github-runner** |
| :--- | :--- | :--- |
| 런타임 | Kubernetes | Linux 및 Windows VM |
| 지원되는 클라우드 | Azure, Amazon Web Services, Google Cloud Platform, 온-프레미스 | Amazon Web Services |
| 실행기를 스케일링할 수 있는 위치 | 엔터프라이즈, 조직 및 리포지토리 수준. 실행기 레이블 및 실행기 그룹별. | 조직 및 리포지토리 수준. 실행기 레이블 및 실행기 그룹별. |
| 실행기를 스케일링할 수 있는 방법 | 웹후크 이벤트, 예약됨, 끌어오기 기반 | 웹후크 이벤트, 예약됨(조직 수준 실행기만 해당) |

## 자동 스케일링에 임시 실행기 사용

{% data variables.product.prodname_dotcom %}는 임시 자체 호스팅 실행기를 사용하여 자동 스케일링을 구현할 것을 권장합니다. 영구 자체 호스팅 실행기를 사용한 자동 스케일링은 권장되지 않습니다. 경우에 따라 {% data variables.product.prodname_dotcom %}는 작업이 종료되는 동안 영구 실행기에 할당되지 않음을 보장할 수 없습니다. 임시 실행기를 사용하면 {% data variables.product.prodname_dotcom %}가 실행기에 하나의 작업만 할당하기 때문에 이를 보장할 수 있습니다.

이 방법을 사용하면 자동화를 사용하여 각 작업에 대한 정리된 환경을 제공할 수 있으므로 실행기를 임시 시스템으로 관리할 수 있습니다. 이렇게 하면 이전 작업에서 중요한 리소스의 노출을 제한하고 새 작업을 받는 손상된 실행기의 위험을 완화하는 데 도움이 됩니다.  

사용 중인 환경에 임시 실행기를 추가하려면 `config.sh`를 사용하여 실행기를 등록할 때 `--ephemeral` 매개 변수를 포함합니다. 예를 들면 다음과 같습니다.

```shell
./config.sh --url https://github.com/octo-org --token example-token --ephemeral
```

그러면 {% data variables.product.prodname_actions %} 서비스가 하나의 작업을 처리한 후 실행기를 자동으로 등록 해제합니다. 그런 다음, 등록이 해제된 후 실행기를 초기화하는 고유한 자동화를 만들 수 있습니다.

{% note %}

**참고:**  특정 유형의 실행기에서 작업에 레이블이 지정되어 있지만 해당 형식과 일치하는 항목이 없는 경우 큐에 대기할 때 작업이 즉시 실패하지는 않습니다. 대신 24시간 제한 시간이 만료될 때까지 작업이 큐에 대기 상태로 유지됩니다.

{% endnote %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae %}

## 자체 호스팅 실행기에서 실행기 소프트웨어 업데이트 제어

기본적으로 자체 호스팅 실행기는 새 버전의 실행기 소프트웨어를 사용할 수 있을 때마다 자동으로 소프트웨어 업데이트를 수행합니다.  컨테이너에서 임시 실행기를 사용하는 경우 새 실행기 버전이 릴리스될 때 소프트웨어 업데이트가 반복될 수 있습니다.  자동 업데이트를 해제하면 자체 일정에 따라 컨테이너 이미지의 실행기 버전을 직접 업데이트할 수 있습니다.

자동 소프트웨어 업데이트를 해제하고 소프트웨어 업데이트를 직접 설치하려면 `config.sh`를 사용하여 실행기를 등록할 때 `--disableupdate` 플래그를 지정합니다. 예를 들면 다음과 같습니다.

```shell
./config.sh --url https://github.com/YOUR-ORGANIZATION --token EXAMPLE-TOKEN --disableupdate
```

자동 업데이트를 사용하지 않도록 설정하는 경우 실행기 버전을 정기적으로 업데이트해야 합니다.  {% data variables.product.prodname_actions %}의 새로운 기능을 사용하려면 {% data variables.product.prodname_actions %} 서비스와 실행기 소프트웨어를 모두 변경해야 합니다.  실행기는 소프트웨어 업데이트 없이 {% data variables.product.prodname_actions %}의 새로운 기능을 활용하는 작업을 올바르게 처리하지 못할 수 있습니다.

자동 업데이트를 사용하지 않도록 설정하는 경우 새 버전을 사용할 수 있게 된 후 30일 이내에 실행기 버전을 업데이트해야 합니다.  [`actions/runner`리포지토리](https://github.com/actions/runner/releases)의 릴리스에 대한 알림을 구독하는 것이 좋습니다. 자세한 내용은 “[알림 구성](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#about-custom-notifications)”을 참조하세요.

최신 실행기 버전을 설치하는 방법에 대한 지침은 [최신 릴리스](https://github.com/actions/runner/releases)의 설치 지침을 참조하세요.

{% note %}

**참고:** 30일 이내에 소프트웨어 업데이트를 수행하지 않으면 {% data variables.product.prodname_actions %} 서비스가 실행기의 큐에 작업을 추가하지 않습니다.  또한 중요한 보안 업데이트가 필요한 경우 {% data variables.product.prodname_actions %} 서비스는 업데이트될 때까지 실행기의 큐에 작업을 추가하지 않습니다.

{% endnote %}

{% endif %}

## 자동 스케일링에 웹후크 사용

[`workflow_job`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job) 웹후크에서 받은 페이로드를 사용하여 고유한 자동 스케일링환경을 만들 수 있습니다. 이 웹후크는 리포지토리, 조직 및 엔터프라이즈 수준에서 사용할 수 있으며, 이 이벤트의 페이로드에는 워크플로 작업의 수명 주기 단계에 해당하는 `action` 키(예: 작업이 `queued`, `in_progress` 및 `completed`인 경우)가 포함됩니다. 그런 다음, 해당 웹후크 페이로드에 대한 응답으로 고유한 스케일링 자동화를 만들어야 합니다.

- `workflow_job` 웹후크에 대한 자세한 내용은 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job)”를 참조하세요.
- 웹후크를 사용하는 방법을 알아보려면 “[웹후크 만들기](/developers/webhooks-and-events/webhooks/creating-webhooks)”를 참조하세요.

## 인증 요구 사항

[API](/rest/reference/actions#self-hosted-runners)를 사용하여 리포지토리 및 조직 자체 호스팅 실행기를 등록하고 삭제할 수 있습니다. API에 인증하기 위해 액세스 토큰 또는 {% data variables.product.prodname_dotcom %} 앱을 사용하여 자동 스케일링 구현을 할 수 있습니다. 

액세스 토큰에는 다음 범위가 필요합니다.

- 프라이빗 리포지토리의 경우 [`repo` 범위](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)가 있는 액세스 토큰을 사용합니다.
- 퍼블릭 리포지토리의 경우 [`public_repo` 범위](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)가 있는 액세스 토큰을 사용합니다.
- 조직의 경우 [`admin:org` 범위](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)가 있는 액세스 토큰을 사용합니다.

{% data variables.product.prodname_dotcom %} 앱을 사용하여 인증하려면 다음 권한이 할당되어야 합니다.
- 리포지토리의 경우 `administration` 권한을 할당합니다.
- 조직의 경우 `organization_self_hosted_runners` 권한을 할당합니다.

[API](/rest/reference/actions#self-hosted-runners)를 사용하여 엔터프라이즈 자체 호스팅 실행기를 등록하고 삭제할 수 있습니다. API에 인증하기 위해 액세스 토큰을 사용하여 자동 스케일링을 구현할 수 있습니다.

액세스 토큰에는 `manage_runners:enterprise` 범위가 필요합니다.
