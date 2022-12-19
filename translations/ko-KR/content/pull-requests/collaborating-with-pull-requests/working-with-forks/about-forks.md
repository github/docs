---
title: 포크 정보
intro: 포크는 관리한 리포지토리의 복사본입니다. 포크는 원본 리포지토리에 영향을 미치지 않고 프로젝트를 변경하도록 해줍니다. 끌어오기 요청을 사용하여 원본 리포지토리에서 업데이트를 가져오거나 원래 리포지토리에 변경 내용을 제출할 수 있습니다.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/about-forks
  - /articles/about-forks
  - /github/collaborating-with-issues-and-pull-requests/about-forks
  - /github/collaborating-with-pull-requests/working-with-forks/about-forks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 83372d27f052ee8c22730f5ce5d22e9efbf04fbb
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158751'
---
리포지토리 포크는 리포지토리 복사와 유사하지만 두 가지 주요 차이점이 있습니다.

* 끌어오기 요청을 사용하여 사용자 소유 포크에서 *업스트림* 리포지토리라고도 하는 GitHub 인스턴스의 원래 리포지토리로 변경 내용을 제안할 수 있습니다.
* 업스트림 리포지토리와 포크를 동기화하여 업스트림 리포지토리에서 로컬 포크로 변경 내용을 가져올 수 있습니다.

{% data reusables.repositories.you-can-fork %}

{% ifversion fpt or ghec %}

{% data variables.enterprise.prodname_emu_enterprise %}의 멤버인 경우 포크할 수 있는 리포지토리에 대한 추가 제한이 있습니다. {% data reusables.enterprise-accounts.emu-forks %} 자세한 내용은 {% data variables.product.prodname_ghe_cloud %} 설명서의 “[{% data variables.product.prodname_emus %} 정보](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users){% ifversion fpt %}”를 참조하세요.{% else %}."{% endif %}

{% endif %}

{% data reusables.repositories.desktop-fork %}

포크를 삭제해도 원래 업스트림 리포지토리는 삭제되지 않습니다. 원본에 영향을 주지 않고 포크를 원하는 대로 변경할 수 있습니다(협력자 추가, 파일 이름 변경, {% data variables.product.prodname_pages %} 페이지 생성).{% ifversion fpt or ghec %} 포크된 리포지토리가 삭제되면 복원할 수 없습니다. 자세한 내용은 “[삭제된 리포지토리 복원](/articles/restoring-a-deleted-repository)”을 참조하세요.{% endif %}

오픈 소스 프로젝트에서 포크는 업스트림 리포지토리로 다시 제공되기 전에 아이디어 또는 변경 내용을 반복하는 데 종종 사용됩니다. 사용자 소유의 포크를 변경하고 작업을 업스트림 리포지토리와 비교하는 끌어오기 요청을 열면, 업스트림 리포지토리에 대한 푸시 액세스 권한이 있는 모든 사용자에게 끌어오기 요청 분기에 변경 내용을 푸시할 수 있는 권한을 부여할 수 있습니다(분기 삭제 포함). 이렇게 하면 리포지토리 유지 관리자가 병합하기 전에 사용자 소유 포크에서 끌어오기 요청 분기로 로컬에서 커밋하거나 테스트를 실행할 수 있도록 하여 협업 속도가 향상됩니다. 조직에서 소유한 포크에는 푸시 권한을 부여할 수 없습니다. 

{% data reusables.repositories.private_forks_inherit_permissions %}

기존 리포지토리의 콘텐츠에서 새 리포지토리를 만들되 나중에 변경 내용을 업스트림에 병합하지 않으려는 경우, 리포지토리를 복제하거나 리포지토리가 템플릿인 경우 리포지토리를 템플릿으로 사용할 수 있습니다. 자세한 내용은 “[리포지토리 복제](/articles/duplicating-a-repository)” 및 “[템플릿에서 리포지토리 만들기](/articles/creating-a-repository-from-a-template)”를 참조하세요.

## 추가 참고 자료

- “[협업 개발 모델 정보](/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models)”
- “[포크에서 끌어오기 요청 만들기](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)”
- [오픈 소스 가이드](https://opensource.guide/){% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
