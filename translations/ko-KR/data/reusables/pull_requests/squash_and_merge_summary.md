---
ms.openlocfilehash: 92b050ef47528cc06ba8a03056444e785b2b7b05
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: "148097866"
---
{% 데이터 variables.location.product_location %}에서 끌어오기 요청에서 **Squash 및 병합** 옵션을 선택하면 끌어오기 요청의 커밋이 단일 커밋으로 분할됩니다. 토픽 분기의 기여자 개별 커밋을 모두 보는 대신 커밋이 하나의 커밋으로 결합되어 기본 분기에 병합됩니다. Squah된 커밋이 있는 끌어오기 요청은 [빨리 감기 옵션](https://git-scm.com/docs/git-merge#_fast_forward_merge)을 사용하여 병합됩니다.

끌어오기 요청을 Squah하고 병합하려면 리포지토리에서 [쓰기 권한](/articles/repository-permission-levels-for-an-organization/)이 있어야 하며 리포지토리에서 [Squah 병합을 허용](/articles/configuring-commit-squashing-for-pull-requests/)해야 합니다.

![commit-squashing-diagram](/assets/images/help/pull_requests/commit-squashing-diagram.png)

Squash 및 병합을 사용하여 리포지토리에서 보다 간소화된 Git 기록을 만들 수 있습니다. 진행 중인 작업 커밋은 기능 분기에서 작업할 때 유용하지만 Git 기록을 보존하는 것이 반드시 필요하지는 않습니다. 기본 분기에 병합하는 동안 이러한 커밋을 하나의 커밋으로 Squash하는 경우 명확한 Git 기록으로 원래 변경 내용을 보존할 수 있습니다.
