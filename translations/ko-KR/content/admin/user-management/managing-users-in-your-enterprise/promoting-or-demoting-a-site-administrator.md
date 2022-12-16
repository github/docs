---
title: 사이트 관리자 승격 또는 강등
redirect_from:
  - /enterprise/admin/articles/promoting-a-site-administrator
  - /enterprise/admin/articles/demoting-a-site-administrator
  - /enterprise/admin/user-management/promoting-or-demoting-a-site-administrator
  - /admin/user-management/promoting-or-demoting-a-site-administrator
intro: 사이트 관리자는 일반 사용자 계정을 사이트 관리자로 승격하고 다른 사이트 관리자를 일반 사용자로 강등할 수 있습니다.
versions:
  ghes: '*'
type: how_to
topics:
  - Access management
  - Accounts
  - User account
  - Enterprise
shortTitle: Manage administrators
ms.openlocfilehash: 8a96b85a2d9d097a7aae46414246ef19287cfc27
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008800'
---
{% tip %}

**참고:** [LDAP 동기화를 사용하도록 설정하고](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync) [사용자에 대한 LDAP 액세스를 구성](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance)할 때 `Administrators group` 특성을 설정한 경우, 이러한 사용자는 인스턴스에 대한 사이트 관리자 액세스 권한을 자동으로 갖게 됩니다. 이 경우 아래 단계를 사용하여 사용자를 수동으로 승격할 수 없습니다. 사용자를 LDAP 관리자 그룹에 추가해야 합니다.

{% endtip %}

사용자를 조직 소유자로 승격하는 자세한 방법은 "[명령줄 유틸리티](/enterprise/admin/guides/installation/command-line-utilities#ghe-org-admin-promote)"의 `ghe-org-admin-promote` 섹션을 참조하세요.

## 엔터프라이즈 설정에서 사용자 승격

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
5. 페이지의 오른쪽 상단 모서리에서 **소유자 추가** 를 클릭합니다.
  ![관리자를 추가하는 단추](/assets/images/help/business-accounts/business-account-add-admin-button.png)
6. 검색 필드에 사용자의 이름을 입력하고 **추가** 를 클릭합니다.
  ![관리자를 추가하는 검색 필드](/assets/images/help/business-accounts/business-account-search-to-add-admin.png)

## 엔터프라이즈 설정에서 사이트 관리자 강등

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
1. 페이지의 왼쪽 위 모서리에 있는 "관리자 찾기" 검색 필드에 강등할 사용자의 사용자 이름을 입력합니다.
  ![필드를 검색하여 관리자 찾기](/assets/images/help/business-accounts/business-account-search-for-admin.png)

1. 검색 결과에서 강등할 사용자의 사용자 이름을 찾은 다음 {% octicon "gear" %} 드롭다운 메뉴를 사용하여 **소유자 제거** 를 선택합니다.
  ![엔터프라이즈 옵션에서 제거](/assets/images/help/business-accounts/demote-admin-button.png)

## 명령줄에서 사용자 승격

1. 어플라이언스에 [SSH](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/)합니다.
2. 승격할 사용자 이름으로 [ghe-user-promote](/enterprise/admin/guides/installation/command-line-utilities#ghe-user-promote)를 실행합니다.
  ```shell
  $ ghe-user-promote USERNAME
  ```

## 명령줄에서 사이트 관리자 강등

1. 어플라이언스에 [SSH](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/)합니다.
2. 사용자 이름으로 [ghe-user-demote](/enterprise/admin/guides/installation/command-line-utilities#ghe-user-demote)를 실행하여 강등합니다.
  ```shell
  $ ghe-user-demote USERNAME
  ```
