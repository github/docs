---
title: 리포지토리에 대한 푸시 정책 관리
intro: 단일 푸시에서 업데이트할 수 있는 분기 및 태그 수를 제한할 수 있습니다.
versions:
  feature: limit-branches-tags-in-push
permissions: People with admin permissions for a repository can manage the push policy for the repository.
topics:
  - Repositories
shortTitle: Manage the push policy
ms.openlocfilehash: bfcf58bdd6aa32ffb5daa613ee4ae93548c70ef0
ms.sourcegitcommit: 2dfd754ff9157822c9bfce5c08715d80fac44878
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/21/2022
ms.locfileid: '148104388'
---
## 푸시 정책 정보

{% note %}

**참고:** 푸시 정책은 현재 베타 버전이며 변경될 수 있습니다.

{% endnote %}

기본적으로 단일 푸시에서 업데이트할 수 있는 분기 및 태그 수에는 제한이 없습니다.

잠재적으로 파괴적인 푸시를 차단하기 위해 단일 푸시로 업데이트할 수 있는 분기 및 태그 수를 제한할 수 있습니다. 이렇게 하면 데이터 손실을 방지하거나 제한할 수 있습니다. 

푸시 정책은 Git 명령 `git push --mirror`도 차단합니다. 이는 원격이 로컬 클론과 정확히 일치하게 만드는 잠재적으로 파괴적인 명령입니다. 실수로 실행하면 경고 없이 원격에서 많은 강제 푸시 및 분기 삭제가 발생할 수 있습니다.

## 단일 푸시에서 업데이트할 수 있는 분기 및 태그 수 제한

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. "푸시"에서 **단일 푸시로 업데이트할 수 있는 분기 및 태그 수 제한을** 선택합니다.

   ![단일 푸시 옵션으로 업데이트할 수 있는 분기 및 태그 수 제한의 스크린샷](/assets/images/help/repository/limit-branches-and-tags-single-push.png)
4. 한 번의 푸시로 제한하려는 분기 및 태그 수를 입력합니다. 더 낮은 숫자는 푸시가 허용되는 제한적이며, 더 높은 숫자는 덜 제한적이지만 파괴적일 가능성이 더 높습니다.

   한 번의 푸시에서 허용되는 분기 또는 태그 업데이트의 `5` 기본 최대값을 사용하는 것이 좋습니다. 최소값은 Git에서 `2`분기를 삭제하고 분기를 만드는 두 가지 분기 업데이트가 필요하기 때문에 한 번의 푸시로 *분기* 이름을 바꿔야 *하기 때문* 입니다.

   ![제한하려는 분기 및 태그 수를 입력하는 필드의 스크린샷](/assets/images/help/repository/set-limit-branch-tags-single-push.png)
