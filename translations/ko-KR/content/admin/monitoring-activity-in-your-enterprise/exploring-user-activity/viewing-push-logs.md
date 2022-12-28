---
title: 푸시 로그 보기
intro: 사이트 관리자는 엔터프라이즈의 모든 리포지토리에 대한 Git 푸시 작업 목록을 볼 수 있습니다.
redirect_from:
  - /enterprise/admin/articles/viewing-push-logs
  - /enterprise/admin/installation/viewing-push-logs
  - /enterprise/admin/user-management/viewing-push-logs
  - /admin/user-management/viewing-push-logs
  - /admin/user-management/monitoring-activity-in-your-enterprise/viewing-push-logs
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Git
  - Logging
ms.openlocfilehash: 5477e981cc579d75de37e4ce06ea367b93d9790c
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008815'
---
푸시 로그 항목은 다음을 표시합니다.

- 푸시를 시작한 사람
- 강제 푸시인지 아닌지 여부
- 다른 사용자가 푸시한 분기
- 푸시하는 데 사용한 프로토콜
- 원래 IP 주소
- 푸시하는 데 사용한 Git 클라이언트
- 작업 전후의 SHA 해시

## 리포지토리의 푸시 로그 보기

1. 사이트 관리자로 {% data variables.product.prodname_ghe_server %}에 로그인합니다.
1. 리포지토리로 이동합니다.
1. 리포지토리 페이지의 오른쪽 위 모서리에서 {% octicon "rocket" aria-label="The rocket ship" %}을 클릭합니다.
    ![사이트 관리자 설정에 액세스하기 위한 로켓선 아이콘](/assets/images/enterprise/site-admin-settings/access-new-settings.png) {% data reusables.enterprise_site_admin_settings.security-tab %}
4. 왼쪽 사이드바에서 **푸시 로그** 를 클릭합니다.
![푸시 로그 탭](/assets/images/enterprise/site-admin-settings/push-log-tab.png)

{% ifversion ghes %}
## 명령줄에서 리포지토리의 푸시 로그 보기

{% data reusables.enterprise_installation.ssh-into-instance %}
1. 적절한 Git 리포지토리에서 감사 로그 파일을 엽니다.
  ```shell
  ghe-repo OWNER/REPOSITORY -c "cat audit_log"
  ```
{% endif %}
