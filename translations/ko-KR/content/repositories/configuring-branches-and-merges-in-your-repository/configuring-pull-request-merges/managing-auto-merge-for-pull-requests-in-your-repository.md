---
title: 리포지토리의 끌어오기 요청에 대한 자동 병합 관리
intro: 리포지토리에서 끌어오기 요청에 대한 자동 병합을 허용하거나 허용하지 않을 수 있습니다.
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: People with maintainer permissions can manage auto-merge for pull requests in a repository.
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository
  - /github/administering-a-repository/configuring-pull-request-merges/managing-auto-merge-for-pull-requests-in-your-repository
shortTitle: Manage auto merge
ms.openlocfilehash: 4d0f0d465ea3c8551dc909d56620a06ee9864c1c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883443'
---
## 자동 병합 정보

리포지토리의 끌어오기 요청에 대한 자동 병합을 허용하면 쓰기 권한이 있는 사용자는 모든 병합 요구 사항이 충족될 경우 리포지토리의 개별 끌어오기 요청이 자동으로 병합되도록 구성할 수 있습니다. 쓰기 권한이 없는 사용자가 자동 병합을 사용할 수 있는 끌어오기 요청에 대한 변경 내용을 푸시하는 경우 해당 끌어오기 요청에 자동 병합을 사용할 수 없게 됩니다. 자세한 내용은 “[끌어오기 요청 자동 병합](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)”을 참조하세요.

## 자동 병합 관리

{% data reusables.pull_requests.auto-merge-requires-branch-protection %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}”끌어오기 요청”{% else %}”병합 단추”{% endif %}에서 **자동 병합 허용** 을 선택하거나 선택을 취소합니다.
  ![자동 병합을 허용하거나 허용하지 않는 확인란](/assets/images/help/pull_requests/allow-auto-merge-checkbox.png)
