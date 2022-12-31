---
title: 사용자 일시 중단 및 일시 중단 취소
redirect_from:
  - /enterprise/admin/articles/suspending-a-user
  - /enterprise/admin/articles/unsuspending-a-user
  - /enterprise/admin/articles/viewing-suspended-users
  - /enterprise/admin/articles/suspended-users
  - /enterprise/admin/articles/suspending-and-unsuspending-users
  - /enterprise/admin/user-management/suspending-and-unsuspending-users
  - /admin/user-management/suspending-and-unsuspending-users
intro: '사용자가 회사의 다른 부분으로 나가거나 이동하는 경우 {% 데이터 variables.location.product_location %}에 액세스하는 기능을 제거하거나 수정해야 합니다.'
versions:
  ghes: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Security
  - User account
shortTitle: Manage user suspension
ms.openlocfilehash: f1468af13d0322e8391138fdd5130234b7396fa2
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094699'
---
직원이 퇴사하는 경우 {% data variables.product.prodname_ghe_server %} 계정을 일시 중단하여 {% data variables.product.prodname_enterprise %} 라이선스에서 사용자 라이선스를 만들고 문제, 의견, 리포지토리, gist 및 기타 데이터를 보존할 수 있습니다. 일시 중단된 사용자는 인스턴스에 로그인할 수 없으며 코드를 푸시하거나 풀할 수 없습니다.

사용자를 일시 중단하면 변경 내용이 사용자에게 알림 없이 즉시 적용됩니다. 사용자가 리포지토리를 풀하거나 리포지토리로 푸시하려고 하면 다음 오류가 표시됩니다.

```shell
$ git clone git@[hostname]:john-doe/test-repo.git
Cloning into 'test-repo'...
ERROR: Your account is suspended. Please check with your installation administrator.
fatal: The remote end hung up unexpectedly
```

사이트 관리자를 일시 중단하기 전에 일반 사용자로 강등해야 합니다. 자세한 내용은 “[사이트 관리자 승격 또는 강등](/enterprise/admin/user-management/promoting-or-demoting-a-site-administrator)”을 참조하세요.

{% tip %}

**참고:** {% 데이터 variables.location.product_location %}에 대해 [LDAP 동기화를 사용하도록 설정](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync) 하면 사용자가 LDAP 디렉터리 서버에서 제거되면 자동으로 일시 중단됩니다. 인스턴스에 대해 LDAP 동기화를 사용하도록 설정하면 일반 사용자 일시 중단 메서드가 비활성화됩니다.

{% endtip %}

## 사용자 관리자 대시보드에서 사용자 일시 중단

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user %} {% data reusables.enterprise_site_admin_settings.click-user %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
5. 빨간색 위험 영역 상자의 “계정 일시 중단”에서 **일시 중단** 을 클릭합니다.
![일시 중단 단추](/assets/images/enterprise/site-admin-settings/suspend.png)
6. 사용자를 일시 중단해야 하는 이유를 제공합니다.
![일시 중단 이유](/assets/images/enterprise/site-admin-settings/suspend-reason.png)

## 사용자 관리자 대시보드에서 사용자 일시 중단 해제

사용자를 일시 중단할 때와 마찬가지로 사용자 일시 중단 해제가 즉시 적용됩니다. 사용자에게 알림이 표시되지 않습니다.

{% data reusables.enterprise_site_admin_settings.access-settings %}
3. 왼쪽 사이드바에서 **일시 중단된 사용자** 를 클릭합니다.
![일시 중단된 사용자 탭](/assets/images/enterprise/site-admin-settings/user/suspended-users-tab.png)
2. 일시 중단을 해제하려는 사용자 계정의 이름을 클릭합니다.
![일시 중단된 사용자](/assets/images/enterprise/site-admin-settings/user/suspended-user.png) {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
4. 빨간색 위험 영역 상자의 “계정 일시 중단”에서 **일시 중단 해제** 를 클릭합니다.
![일시 중단 해제 단추](/assets/images/enterprise/site-admin-settings/unsuspend.png)
5. 사용자를 일시 중단 해제한 이유를 제공합니다.
![일시 중단 해제 이유](/assets/images/enterprise/site-admin-settings/unsuspend-reason.png)

## 명령줄에서 사용자 일시 중단

{% data reusables.enterprise_installation.ssh-into-instance %}
2. 사용자 이름으로 [ghe-user-suspend](/enterprise/admin/guides/installation/command-line-utilities#ghe-user-suspend)를 실행하여 일시 중단합니다.
  ```shell
  $ ghe-user-suspend USERNAME
  ```

## 일시 중단된 사용자에 대한 사용자 지정 메시지 만들기

로그인을 시도할 때 일시 중단된 사용자에게 표시되는 사용자 지정 메시지를 만들 수 있습니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
5. **메시지 추가** 를 클릭합니다.
![메시지 추가](/assets/images/enterprise/site-admin-settings/add-message.png)
6. **일시 중단된 사용자 메시지** 상자에 메시지를 입력합니다. Markdown을 입력하거나 Markdown 도구 모음을 사용하여 메시지의 스타일을 지정할 수 있습니다.
![일시 중단된 사용자 메시지](/assets/images/enterprise/site-admin-settings/suspended-user-message.png)
7. **일시 중단된 사용자 메시지** 필드 아래의 **미리 보기** 단추를 클릭하여 렌더링된 메시지를 확인합니다.
![미리 보기 단추](/assets/images/enterprise/site-admin-settings/suspended-user-message-preview-button.png)
8. 렌더링된 메시지를 검토합니다.
![일시 중단된 사용자 메시지 렌더링](/assets/images/enterprise/site-admin-settings/suspended-user-message-rendered.png) {% data reusables.enterprise_site_admin_settings.save-changes %}

## 명령줄에서 사용자 일시 중단 해제

{% data reusables.enterprise_installation.ssh-into-instance %}
2. 사용자 이름으로 [ghe-user-unsuspend](/enterprise/admin/guides/installation/command-line-utilities#ghe-user-unsuspend)를 실행하여 일시 중단을 해제합니다.
  ```shell
  $ ghe-user-unsuspend USERNAME
  ```

## 추가 참고 자료
- “[사용자 일시 중단](/rest/reference/enterprise-admin#suspend-a-user)”
