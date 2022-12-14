---
title: 삭제된 리포지토리 복원
intro: '{% ifversion ghes or ghae %}엔터프라이즈 소유자는{% elsif fpt or ghec %}You{% endif %} 일부 삭제된 리포지토리를 복원하여 콘텐츠를 복구할 수 있습니다.'
permissions: '{% ifversion ghes or ghae %}{% elsif fpt or ghec %}Anyone can restore deleted repositories that were owned by their own personal account. Organization owners can restore deleted repositories that were owned by the organization.{% endif %}'
redirect_from:
  - /articles/restoring-a-deleted-repository
  - /github/administering-a-repository/restoring-a-deleted-repository
  - /github/administering-a-repository/managing-repository-settings/restoring-a-deleted-repository
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: Restore deleted repository
ms.openlocfilehash: 759abe1762ec05d7baaec6f82f634002931e3ad4
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099126'
---
{% ifversion ghes or ghae %}

일반적으로 삭제된 리포지토리는 {% 데이터 variables.location.product_location %}{% endif %}에서 엔터프라이즈 소유자{% ifversion ghes %}에 의해 90일 이내에 복원할 수 있습니다. 자세한 내용은 “[삭제된 리포지토리 복원](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository)”을 참조하세요. 

{% else %}

## 리포지토리 복원 정보

리포지토리가 현재 비어 있지 않은 포크 네트워크의 일부가 아닌 경우 90일 내에 삭제된 리포지토리를 복원할 수 있습니다. 포크 네트워크는 부모 리포지토리, 리포지토리의 포크 및 리포지토리 포크의 포크로 구성됩니다. 리포지토리가 포크 네트워크의 일부인 경우 네트워크의 다른 모든 리포지토리가 삭제되거나 네트워크에서 분리되지 않는 한, 복원할 수 없습니다. 포크에 대한 자세한 내용은 "[포크 정보](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)"를 참조하세요.

현재 비어 있지 않은 포크 네트워크의 일부인 리포지토리를 복원하려면 {% data variables.contact.contact_support %}에 문의할 수 있습니다.

리포지토리를 삭제한 후 해당 리포지토리를 복원하는 데 최대 1시간이 걸릴 수 있습니다.

리포지토리를 복원해도 릴리스 첨부 파일 또는 팀 권한은 복원되지 않습니다. 복원된 문제는 레이블이 지정되지 않습니다.

## 개인 계정이 소유한 삭제된 리포지토리 복원

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.repo-tab %} {% data reusables.user-settings.deleted-repos %} {% data reusables.user-settings.restore-repo %} {% data reusables.user-settings.restore-confirmation %}

## 개인 계정이 소유한 삭제된 리포지토리 복원


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.deleted-repos %} {% data reusables.user-settings.restore-repo %} {% data reusables.user-settings.restore-confirmation %}

## 추가 참고 자료

- “[리포지토리 삭제](/articles/deleting-a-repository)”

{% endif %}
