---
title: 병합 큐 관리
intro: 리포지토리에서 끌어오기 요청에 대한 병합 큐를 사용하여 개발 속도를 높일 수 있습니다.
versions:
  fpt: '*'
  ghec: '*'
permissions: People with admin permissions can manage merge queues for pull requests targeting selected branches of a repository.
topics:
  - Repositories
  - Pull requests
shortTitle: Managing merge queue
redirect_from:
  - /repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/using-a-merge-queue
ms.openlocfilehash: 08726e420c43895b5aebca10c4951cd034736170
ms.sourcegitcommit: c45cc7325ed19e69ddd7506e46fcafd0b5182b3f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/12/2022
ms.locfileid: '148019616'
---
{% data reusables.pull_requests.merge-queue-beta %}

## 병합 큐 정보

{% data reusables.pull_requests.merge-queue-overview %}

병합 큐는 특수 접두사가 있는 임시 분기를 만들어 끌어오기 요청 변경 내용의 유효성을 검사합니다. 그런 다음 끌어오기 요청의 변경 내용이 최신 버전의 `base_branch` 및 큐에서 앞에 있는 변경 내용과 함께 `merge_group`으로 그룹화됩니다. {% data variables.product.product_name %}는 `base_branch`의 분기 보호에 필요한 검사에 통과한 후 모든 변경 내용을 `base_branch`에 병합합니다.


병합 방법에 대한 자세한 내용은 “[끌어오기 요청 병합 정보](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)”를 참조하세요.

{% note %}

**참고:**

* 분기 이름 패턴에 와일드카드 문자(`*`)를 사용하는 분기 보호 규칙으로 병합 큐를 사용하도록 설정할 수는 없습니다.
* 병합 큐는 병합을 진행하기 전에 필요한 검사가 보고될 때까지 기다립니다. 병합 큐가 필요한 경우 병합 그룹 이벤트를 트리거하고 보고하도록 CI 구성을 업데이트해야 합니다.

{% endnote %}

{% data reusables.pull_requests.merge-queue-reject %}

### {% data variables.product.prodname_actions %}으로 병합 그룹 검사 트리거

끌어오기 요청이 병합 그룹에 추가되면 `merge_group` 이벤트를 사용하여 {% data variables.product.prodname_actions %} 워크플로를 트리거할 수 있습니다. 이 이벤트는 `pull_request` 및 `push` 이벤트와는 다른 이벤트입니다.

대상 분기의 보호에 필요한 검사를 보고하는 워크플로는 다음과 같습니다.

```yaml
on:
  pull_request:
  merge_group:
```

자세한 내용은 “[워크플로를 트리거하는 이벤트](/actions/using-workflows/events-that-trigger-workflows#merge-group)”를 참조하세요.

### 다른 CI 공급자를 사용하여 병합 그룹 검사 트리거

다른 CI 공급자를 사용하면 특수 접두사 `gh-readonly-queue/{base_branch}`로 시작하는 분기가 만들어질 때 실행되도록 CI 구성을 업데이트해야 할 수 있습니다.

## 병합 큐 관리

리포지토리 관리자는 기본 분기에 대한 보호 규칙에서 분기 보호 설정 "병합 큐 필요"를 사용하도록 설정하여 병합 큐를 요구할 수 있습니다.

### 병합 그룹 크기 설정 정보

각 병합 그룹에 포함된 끌어오기 요청 수를 결정하는 병합 큐의 병합 그룹 크기를 구성할 수 있습니다. 상태 검사 실패 또는 병합 충돌이 없는 경우 기본 "작은" 병합 그룹 크기를 선택하면 끌어오기 요청 2개를 포함하는 그룹이 형성됩니다. 그룹당 더 많은 끌어오기 요청을 그룹화하려는 경우 "중간" 병합 그룹 크기를 선택하여 각각 5개의 끌어오기 요청을 포함하는 그룹을 구성할 수 있습니다.

병합 큐 보호 설정을 사용하도록 설정하는 방법에 대한 자세한 내용은 “[분기 보호 규칙 관리](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule#creating-a-branch-protection-rule)”를 참조하세요.

## 추가 참고 자료

* “[병합 큐와 끌어오기 요청 병합](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue)”
* “[보호된 분기 정보](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)”
