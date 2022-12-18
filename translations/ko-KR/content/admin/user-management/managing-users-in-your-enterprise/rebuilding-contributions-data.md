---
title: 기여 데이터 다시 빌드
intro: 기존 커밋을 사용자 계정에 연결하려면 기여 데이터를 다시 빌드해야 할 수 있습니다.
redirect_from:
  - /enterprise/admin/articles/rebuilding-contributions-data
  - /enterprise/admin/user-management/rebuilding-contributions-data
  - /admin/user-management/rebuilding-contributions-data
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Repositories
  - User account
shortTitle: Rebuild contributions
ms.openlocfilehash: 66a4aff597be725eb06dd4c8743ee2ad8691c7e4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145116220'
---
커밋이 {% data variables.product.prodname_enterprise %}에 푸시될 때마다 둘 다 동일한 이메일 주소와 연결된 경우 사용자 계정에 연결됩니다. 그러나 사용자가 새 이메일 주소를 등록하거나 새 계정을 만드는 경우 기존 커밋은 소급하여 연결되지 *않습니다*.

1. 사용자의 프로필 페이지를 방문합니다.
{% data reusables.enterprise_site_admin_settings.access-settings %}
3. 페이지 왼쪽에서 **관리자** 를 클릭합니다. ![관리자 탭](/assets/images/enterprise/site-admin-settings/admin-tab.png)
4. **기여 데이터** 에서 **다시 빌드** 를 클릭합니다.
![다시 빌드 단추](/assets/images/enterprise/site-admin-settings/rebuild-button.png)

{% data variables.product.prodname_enterprise %}은(는) 이제 백그라운드 작업을 시작하여 해당 사용자의 계정으로 커밋을 다시 연결합니다.
  ![대기 중인 다시 빌드 작업](/assets/images/enterprise/site-admin-settings/rebuild-jobs.png)
