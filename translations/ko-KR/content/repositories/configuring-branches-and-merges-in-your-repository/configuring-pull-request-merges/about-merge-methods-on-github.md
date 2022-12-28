---
title: GitHub에서의 병합 메서드 정보
intro: '리포지토리에 대한 푸시 액세스 권한이 있는 참가자가 {% 데이터 variables.location.product_location %}에서 끌어오기 요청을 다른 병합 옵션으로 병합하거나 리포지토리의 모든 끌어오기 요청에 대해 특정 병합 방법을 적용하도록 허용할 수 있습니다.'
redirect_from:
  - /articles/about-merge-methods-on-github
  - /github/administering-a-repository/about-merge-methods-on-github
  - /github/administering-a-repository/configuring-pull-request-merges/about-merge-methods-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: About merge methods
ms.openlocfilehash: 053a34ba2dd3e2fb948b06b61e65e477328aef3f
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099302'
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %} 리포지토리에 대해 원하는 메서드만 사용하도록 설정하여 커밋 Squash 또는 다시 지정 같은 병합 메서드의 한 가지 유형을 적용할 수 있습니다.

{% ifversion fpt or ghec %} {% note %}

**참고:** 병합 큐를 사용하는 경우 큐에 의해 제어되므로 더 이상 병합 메서드를 선택할 수 없습니다. {% data reusables.pull_requests.merge-queue-references %}

{% endnote %} {% endif %}

{% data reusables.pull_requests.default_merge_option %}

기본 병합 메서드는 병합 커밋을 만듭니다. 선형 커밋 기록을 적용함으로써 아무나 보호된 분기에 병합 커밋을 푸시하지 못하게 할 수 있습니다. 자세한 내용은 “[보호된 분기 정보](/github/administering-a-repository/about-protected-branches#require-linear-history)”를 참조하세요.

## 병합 커밋 Squash하기

{% data reusables.pull_requests.squash_and_merge_summary %}

커밋 Squash를 사용하도록 설정하기 전에 다음과 같은 단점을 고려하세요.
- 특정 변경이 원래 언제 이루어졌으며 누가 Squash된 커밋을 작성했는지에 대한 정보가 손실됩니다.
- Squash 및 병합 후 끌어오기 요청의 헤드 분기에 대한 작업을 계속한 다음 동일한 분기 간에 새 끌어오기 요청을 만드는 경우, 이전에 Squash하고 병합한 커밋이 새 끌어오기 요청에 나열됩니다. 또한 각 연속 끌어오기 요청에서 반복적으로 해결해야 하는 충돌이 있을 수 있습니다. 자세한 내용은 “[끌어오기 요청 병합 정보](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges#squashing-and-merging-a-long-running-branch)”를 참조하세요.
- 원래 커밋에 대한 SHA ID가 손실되므로 “SHA” 또는 “hash” ID를 사용하는 일부 Git 명령은 사용하기가 더 어려울 수 있습니다. 예를 들어 [`git rerere`](https://git-scm.com/docs/git-rerere) 사용은 효과적이지 않을 수 있습니다.

자세한 내용은 “[끌어오기 요청에 대한 커밋 Squash 구성](/articles/configuring-commit-squashing-for-pull-requests)”을 참조하세요.

## 커밋 다시 지정 및 병합

{% data reusables.pull_requests.rebase_and_merge_summary %}

커밋 다시 지정을 사용하도록 설정하기 전에 다음과 같은 단점을 고려하세요.
- 리포지토리 참가자는 {% 데이터 variables.location.product_location %}에서 **rebase 및 merge** 옵션을 사용하기 전에 명령줄을 다시 기반으로 하고, 충돌을 해결하고, 변경 내용을 끌어오기 요청의 토픽 분기(또는 원격 헤드 분기)에 강제로 푸시해야 할 수 있습니다. 다른 사용자가 기반으로 하는 작업을 기여자가 덮어쓰지 않도록 강제 푸시는 신중하게 수행해야 합니다. {% 데이터 variables.location.product_location %}에서 **다시 사용 및 병합** 옵션을 사용하지 않도록 설정한 경우 및 다시 사용하도록 설정하는 워크플로에 대해 자세히 알아보려면 "[끌어오기 요청 병합 정보](/articles/about-pull-request-merges/#rebase-and-merge-your-pull-request-commits)"를 참조하세요.
- {% indented_data_reference reusables.pull_requests.rebase_and_merge_verification spaces=3 %}

자세한 내용은 “[끌어오기 요청에 대한 커밋 다시 지정 구성](/articles/configuring-commit-rebasing-for-pull-requests)”을 참조하세요.
