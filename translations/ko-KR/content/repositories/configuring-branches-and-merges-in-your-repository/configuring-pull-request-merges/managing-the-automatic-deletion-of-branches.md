---
title: 분기 자동 삭제 관리
intro: 리포지토리에서 끌어오기 요청이 병합된 후 헤드 분기를 자동으로 삭제할 수 있습니다.
redirect_from:
  - /articles/managing-the-automatic-deletion-of-branches
  - /github/administering-a-repository/managing-the-automatic-deletion-of-branches
  - /github/administering-a-repository/configuring-pull-request-merges/managing-the-automatic-deletion-of-branches
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Automatic branch deletion
ms.openlocfilehash: feaeb7c2178beab4dc23a310df6924c6e1c52e0f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882459'
---
리포지토리에 대한 관리자 권한이 있는 모든 사용자는 분기 자동 삭제를 사용하거나 사용하지 않도록 설정할 수 있습니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}”끌어오기 요청”{% else %}”병합 단추”{% endif %}에서 **헤드 분기 자동 삭제** 를 선택하거나 선택을 취소합니다.
  ![분기 자동 삭제를 사용하거나 사용하지 않도록 설정하는 확인란](/assets/images/help/repository/automatically-delete-branches.png)

## 추가 참고 자료
- “[끌어오기 요청 병합](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)”
- “[리포지토리 내에서 분기 만들기 및 삭제](/articles/creating-and-deleting-branches-within-your-repository)”
