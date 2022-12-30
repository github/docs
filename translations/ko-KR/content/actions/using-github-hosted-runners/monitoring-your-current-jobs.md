---
title: 현재 작업 모니터링
shortTitle: Monitor current jobs
intro: '{% data variables.product.prodname_dotcom %}호스팅 실행기가 조직 또는 엔터프라이즈에서 작업을 처리하는 방법을 모니터링하고 관련 제약 조건을 식별합니다.'
versions:
  feature: github-runner-dashboard
ms.openlocfilehash: 57fe17f4204082e78af65d837a6c5a7e060fd597
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009620'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 조직 또는 엔터프라이즈에서 활성 작업 보기

조직 또는 엔터프라이즈의 {% data variables.product.prodname_dotcom %} 호스팅 실행기에서 현재 실행 중인 모든 작업 목록을 가져올 수 있습니다.

{% data reusables.actions.github-hosted-runners-navigate-to-repo-org-enterprise %} {% data reusables.actions.github-hosted-runners-table-entry %}
1. {% data variables.product.prodname_dotcom %} 호스팅 실행기에서 현재 실행 중인 모든 작업의 목록이 포함된 “Active jobs”(활성 작업) 섹션을 검토합니다.

  ![활성 작업 목록 스크린샷](/assets/images/help/settings/actions-runner-active-jobs.png)

## 조직 또는 엔터프라이즈에서 대기 중인 작업 보기

{% data variables.product.prodname_dotcom %} 호스팅 실행기를 사용하면 동시에 작업을 실행할 수 있으며 최대 동시 작업 수는 플랜에 따라 달라집니다. 최대 동시 작업 수에 도달하면 모든 새 작업이 큐에 들어가기 시작합니다. 플랜에 사용할 수 있는 동시 작업 수에 대한 자세한 내용은 “[사용량 한도, 청구 및 관리](/actions/learn-github-actions/usage-limits-billing-and-administration)”를 참조하세요.

다음 프로시저에서는 실행할 수 있는 최대 동시 작업 수를 확인하는 방법을 보여 줍니다.

{% data reusables.actions.github-hosted-runners-navigate-to-repo-org-enterprise %} {% data reusables.actions.github-hosted-runners-table-entry %}
1. 활성 작업 수와 실행할 수 있는 최대 작업 수를 나열하는 “All jobs usage”(모든 작업 사용량) 섹션을 검토합니다. 이 예제에서 `9` 작업은 현재 최대 `180`개까지 부족합니다.
  ![계정의 최대 작업 스크린샷](/assets/images/help/settings/github-hosted-runners-max-jobs.png)
