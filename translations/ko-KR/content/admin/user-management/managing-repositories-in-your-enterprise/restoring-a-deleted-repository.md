---
title: 삭제된 리포지토리 복원
intro: 삭제된 리포지토리를 복원하여 콘텐츠를 복구할 수 있습니다.
permissions: Enterprise owners can restore a deleted repository.
versions:
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
  - Privacy
  - Repositories
shortTitle: Restore a deleted repository
ms.openlocfilehash: 538521e865b6a59c1d143a9774d7a462f5e4ee42
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146199789'
---
## 리포지토리 복원 정보

일반적으로 누군가가 리포지토리를 삭제하는 경우 90일 동안 디스크에서 사용할 수 있으며 사이트 관리자 대시보드를 통해 복원할 수 있습니다. 자세한 내용은 "[사이트 관리자 대시보드](/admin/configuration/configuring-your-enterprise/site-admin-dashboard)"를 참조하세요.

사용자 또는 조직에 법적 보존이 적용되지 않는 한 90일 후에 리포지토리가 제거되고 영원히 삭제됩니다.

리포지토리가 삭제될 때 포크 네트워크의 일부인 경우 복원된 리포지토리는 원래 포크 네트워크에서 분리됩니다.

리포지토리를 삭제한 후 해당 리포지토리를 복원하는 데 최대 1시간이 걸릴 수 있습니다.

리포지토리를 복원해도 릴리스 첨부 파일 또는 팀 권한은 복원되지 않습니다. 복원된 문제는 레이블이 지정되지 않습니다.

## 삭제된 리포지토리 복원

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %}
1. {% octicon "repo" aria-label="The repo icon" %} **리포지토리** 섹션에서 {% octicon "trash" aria-label="The trash icon" %} **삭제된 리포지토리** 링크를 클릭합니다.
1. 삭제된 리포지토리 목록에서 복원할 리포지토리를 찾은 다음 리포지토리 이름 오른쪽에 있는 **복원** 을 클릭합니다.
1. 명명된 리포지토리를 복원할 것인지 확인하려면 **복원** 을 클릭합니다.

## 추가 참고 자료

- “[사용자 또는 조직에 법적 보존](/admin/user-management/managing-users-in-your-enterprise/placing-a-legal-hold-on-a-user-or-organization)”
