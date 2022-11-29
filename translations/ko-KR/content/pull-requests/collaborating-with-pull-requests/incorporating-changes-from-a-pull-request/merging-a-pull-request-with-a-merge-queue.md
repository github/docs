---
title: 병합 큐와 끌어오기 요청 병합
intro: '분기의 분기 보호 설정에 병합 큐가 필요한 경우 병합 큐에 끌어오기 요청을 추가할 수 있습니다. 그러면 모든 필수 검사가 통과된 후 {% data variables.product.product_name %}가 끌어오기 요청을 병합합니다.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Merge PR with merge queue
redirect_from:
  - /pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/adding-a-pull-request-to-the-merge-queue
ms.openlocfilehash: ce2bc87b82e3590c2a7f55f528fc9f71dc0ceb0d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614273'
---
{% data reusables.pull_requests.merge-queue-beta %}

## 병합 큐 정보

{% data reusables.pull_requests.merge-queue-overview %} {% data reusables.pull_requests.merge-queue-references %}

## 병합 큐에 끌어오기 요청 추가

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}

1. "끌어오기 요청" 목록에서 병합 큐에 추가하려는 끌어오기 요청을 클릭합니다.

1. 병합 큐에 끌어오기 요청을 추가할 **준비가 되면 병합** 을 클릭합니다. 또는 관리자인 경우 다음을 수행할 수 있습니다.
   -  분기 보호 설정에서 허용되는 경우 **요구 사항이 충족될 때까지 기다리지 않고 병합({% ifversion bypass-branch-protections %}분기 보호 무시{% else %}관리자 전용{% endif %})** 을 선택하여 끌어오기 요청을 직접 병합하고 표준 흐름을 따릅니다.
   ![병합 큐 옵션](/assets/images/help/pull_requests/merge-queue-options.png)

  {% tip %}

  **팁:** 제안된 변경 내용을 병합할 준비가 되면 **준비가 되면 병합** 을 클릭할 수 있습니다. {% data variables.product.product_name %}은 필요한 승인 및 상태 검사 조건이 충족되면 병합 큐에 끌어오기 요청을 자동으로 추가합니다.

  {% endtip %}

1. **준비되면 병합 확인** 을 클릭하여 병합 큐에 끌어오기 요청을 추가할 것인지 확인합니다.

## 병합 큐에서 끌어오기 요청 제거

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}

1. "끌어오기 요청" 목록에서 병합 큐에서 제거하려는 끌어오기 요청을 클릭합니다.

1. 큐에서 끌어오기 요청을 제거하려면 **큐에서 제거** 를 클릭합니다.
  ![큐에서 끌어오기 요청 제거](/assets/images/help/pull_requests/remove-from-queue-button.png)

또는 기본 분기의 병합 큐 페이지로 이동하여 제거할 끌어오기 요청 옆의 **...** 를 클릭하고 **큐에서 제거** 를 선택할 수 있습니다. 기본 분기의 병합 큐 페이지로 이동하는 방법에 대한 자세한 내용은 아래 섹션을 참조하세요.

## 병합 큐 보기

{% data variables.product.product_name %}의 다양한 위치에서 기본 분기에 대한 병합 큐를 볼 수 있습니다.

- 리포지토리의 **분기** 페이지에서 큐에 이미 있는 끌어오기 요청이 없거나 모르는 경우와 해당 큐에 있는 항목을 확인하려는 경우 이 경로를 사용하는 것이 좋습니다. 자세한 내용은 "[리포지토리에서 분기 보기](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository)"를 참조하세요.

  ![분기 페이지에서 병합 큐 보기](/assets/images/help/pull_requests/merge-queue-branches-page.png)

- 리포지토리의 **끌어오기 요청** 페이지에서 병합 큐의 끌어오기 요청 옆에 있는 {% octicon "clock" aria-label="The clock symbol" %}을 클릭합니다.

  ![끌어오기 요청 페이지에서 병합 큐 보기](/assets/images/help/pull_requests/clock-icon-in-pull-request-list.png)

- 병합 큐를 병합하는 데 필요한 경우 끌어오기 요청 페이지에서 타임라인의 아래쪽으로 스크롤하여 **병합 큐** 링크를 클릭합니다.

  ![끌어오기 요청에서 큐 링크 병합](/assets/images/help/pull_requests/merge-queue-link.png)

- 병합 큐 보기에는 현재 큐에 있는 끌어오기 요청이 표시되고 끌어오기 요청이 명확하게 표시됩니다.

  ![병합 큐 보기](/assets/images/help/pull_requests/merge-queue-view.png)

## 병합 큐에서 제거된 끌어오기 요청 처리

{% data reusables.pull_requests.merge-queue-reject %}
