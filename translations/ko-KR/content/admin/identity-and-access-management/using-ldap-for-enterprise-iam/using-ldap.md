---
title: LDAP 사용
redirect_from:
  - /enterprise/admin/articles/configuring-ldap-authentication
  - /enterprise/admin/articles/about-ldap-authentication
  - /enterprise/admin/articles/viewing-ldap-users
  - /enterprise/admin/hidden/enabling-ldap-sync
  - /enterprise/admin/hidden/ldap-sync
  - /enterprise/admin/user-management/using-ldap
  - /enterprise/admin/authentication/using-ldap
  - /admin/authentication/using-ldap
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-ldap
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-ldap
intro: 'LDAP(Lightweight Directory Access Protocol)를 사용하여 애플리케이션 간 액세스를 중앙 집중화하는 경우 인스턴스에 대한 LDAP 인증을 구성하여 {% data variables.product.product_name %}를 통합할 수 있습니다.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
ms.openlocfilehash: 5d9b6aa9a5d641afa0b24dbe0e0f446ab723c735
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107527'
---
## {% data variables.product.product_name %}에 대한 LDAP 인증 정보

LDAP는 디렉터리 정보 서비스의 액세스와 유지 관리를 위한 많이 사용되는 애플리케이션 프로토콜이며 타사 소프트웨어를 대기업 사용자 디렉터리와 통합하는 데 사용되는 가장 일반적인 프로토콜 중 하나입니다. 자세한 내용은 Wikipedia의 “[Lightweight Directory Access Protocol](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol)”을 참조하세요.

중앙 집중식 인증에 LDAP 디렉터리를 사용하는 경우 {% data variables.location.product_location %}를 사용하는 사용자에 대해 LDAP 인증을 구성할 수 있습니다.

{% data reusables.enterprise_user_management.built-in-authentication %}

## 지원되는 LDAP 서비스

{% data variables.product.prodname_ghe_server %}는 다음 LDAP 서비스와 통합됩니다.

* Active Directory
* FreeIPA
* Oracle Directory Server Enterprise Edition
* OpenLDAP
* Open Directory
* 389-ds

## LDAP를 사용하는 사용자 이름 고려 사항

{% data reusables.enterprise_user_management.consider-usernames-for-external-authentication %} 자세한 내용은 “[외부 인증에 대한 사용자 이름 고려 사항](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)”을 참조하세요.

## {% data variables.location.product_location %}을(를) 사용하여 LDAP 구성

LDAP를 구성한 후 사용자는 LDAP 자격 증명을 사용하여 인스턴스에 로그인할 수 있습니다. 사용자가 처음으로 로그인하면 해당 프로필 이름, 메일 주소 및 SSH 키가 디렉터리의 LDAP 특성으로 설정됩니다.

{% data variables.enterprise.management_console %}을 통해 사용자에 대한 LDAP 액세스를 구성하는 경우 사용자가 인스턴스에 처음 로그인할 때까지 사용자 라이선스가 사용되지 않습니다. 그러나 사이트 관리자 설정을 사용하여 계정을 수동으로 만들면 사용자 라이선스는 즉시 고려됩니다.

{% warning %}

**경고:** {% data variables.location.product_location %}에서 LDAP를 구성하기 전에 LDAP 서비스가 페이징된 결과를 지원하는지 확인합니다.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
3. “인증” 아래에서 **LDAP** 를 선택합니다.
![LDAP 선택](/assets/images/enterprise/management-console/ldap-select.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %} ![LDAP 기본 제공 인증 확인란 선택](/assets/images/enterprise/management-console/ldap-built-in-authentication.png)
5. 구성 설정을 추가합니다.

## LDAP 특성
이러한 특성을 사용하여 {% data variables.location.product_location %}에 대한 LDAP 구성을 완료합니다.

| 특성 이름           | 형식     | Description |
|--------------------------|----------|-------------|
| `Host`                   | 필수 | LDAP 호스트로, 예를 들면 `ldap.example.com` 또는 `10.0.0.30`입니다. 호스트 이름을 내부 네트워크에서만 사용할 수 있는 경우 내부 이름 서버를 사용하여 호스트 이름을 확인할 수 있도록 먼저 {% data variables.location.product_location %}의 DNS를 구성해야 할 수 있습니다. |
| `Port`                   | 필수 | 호스트의 LDAP 서비스가 수신 대기하는 포트입니다. 389 및 636(LDAPS의 경우)을 예로 들 수 있습니다. |
| `Encryption`             | 필수 | LDAP 서버에 대한 통신을 보호하는 데 사용되는 암호화 방법입니다. 예를 들어 일반(암호화 없음), SSL/LDAPS(처음부터 암호화됨), StartTLS(연결되면 암호화된 통신으로 업그레이드)가 있습니다. |
| `Domain search user`     | 선택 사항 | 인증을 허용하기 위해 로그인하는 다른 사용자를 조회하는 LDAP 사용자입니다. 일반적으로 타사 통합을 위해 특별히 만들어진 서비스 계정입니다. `cn=Administrator,cn=Users,dc=Example,dc=com` 같은 정규화된 이름을 사용합니다. Active Directory를 사용하면 Active Directory를 사용하는 도메인 검색 사용자에 대한 `[DOMAIN]\[USERNAME]` 구문(예: `WINDOWS\Administrator`)을 사용할 수도 있습니다. |
| `Domain search password` | 선택 사항 | 도메인 검색 사용자의 암호입니다. |
| `Administrators group`   | 선택 사항 | 이 그룹의 사용자는 어플라이언스에 로그인할 때 사이트 관리자로 승격됩니다. LDAP 관리자 그룹을 구성하지 않으면 어플라이언스에 로그인하는 첫 번째 LDAP 사용자 계정이 자동으로 사이트 관리자로 승격됩니다. |
| `Domain base`            | 필수 | 사용자 및 그룹을 검색하려는 LDAP 하위 트리의 정규화된 `Distinguished Name`(DN)입니다. 원하는 만큼 추가할 수 있습니다. 그러나 각 그룹은 해당 그룹에 속한 사용자와 동일한 도메인 기반에서 정의되어야 합니다. 제한된 사용자 그룹을 지정하는 경우 해당 그룹에 속한 사용자만 범위에 포함됩니다. LDAP 디렉터리 트리의 최상위 수준을 도메인 기반으로 지정하고 제한된 사용자 그룹을 사용하여 액세스를 제어하는 것이 좋습니다. |
| `Restricted user groups` | 선택 사항 | 지정된 경우 해당 그룹의 사용자만 로그인할 수 있습니다. 그룹의 일반 이름(CN)만 지정하면 되며 원하는 만큼 그룹을 추가할 수 있습니다. 그룹을 지정하지 않으면 지정된 도메인 기반 범위 내의 모든 사용자가 {% data variables.product.prodname_ghe_server %} 인스턴스에 로그인할 수 있습니다. |
| `User ID`                | 필수 | 인증을 시도하는 LDAP 사용자를 식별하는 LDAP 특성입니다. 매핑이 설정되면 사용자는 {% data variables.product.prodname_ghe_server %} 사용자 이름을 변경할 수 있습니다. 이 필드는 대부분의 Active Directory 설치에 대해 `sAMAccountName`이어야 하지만 OpenLDAP 같은 다른 LDAP 솔루션에 대해서는 `uid`일 수 있습니다. 기본값은 `uid`입니다. |
| `Profile name`           | Optional | 사용자의 {% data variables.product.prodname_ghe_server %} 프로필 페이지에 표시되는 이름입니다. LDAP 동기화를 사용하도록 설정하지 않으면 사용자는 프로필 이름을 변경할 수 있습니다. |
| `Emails`                 | 선택 사항 | 사용자 {% data variables.product.prodname_ghe_server %} 계정의 메일 주소입니다. |
| `SSH keys`               | 선택 사항 | 사용자 {% data variables.product.prodname_ghe_server %} 계정에 연결된 퍼블릭 SSH 키입니다. 키는 OpenSSH 형식이어야 합니다. |
| `GPG keys`               | 선택 사항 | 사용자 {% data variables.product.prodname_ghe_server %} 계정에 연결된 GPG 키입니다. |
| `Disable LDAP authentication for Git operations` | 선택 사항 |이 옵션을 선택하면 LDAP 암호를 사용하여 Git 작업을 인증하는 사용자의 기능이 [꺼집니다](#disabling-password-authentication-for-git-operations). |
| `Enable LDAP certificate verification` | 선택 사항 |이 옵션을 선택하면 LDAP 인증서 확인이 [켜집니다](#enabling-ldap-certificate-verification). |
| `Synchronization` | 선택 사항 |이 옵션을 선택하면 LDAP 동기화가 [켜집니다](#enabling-ldap-sync). |

### Git 작업에 암호 인증 사용 안 함

LDAP 설정에서 **Git 작업에 대한 사용자 이름 및 암호 인증 사용 안 함을** 선택하여 {% data variables.product.pat_generic %}s 또는 SSH 키를 Git 액세스에 사용하도록 적용하여 서버가 LDAP 인증 요청에 의해 오버로드되는 것을 방지할 수 있습니다. 특히 폴링으로 인한 많은 수의 요청과 느린 응답 LDAP 서버가 결합되면 성능 문제 및 중단을 빈번하게 일으키므로 이 설정을 사용하는 것이 좋습니다.

![Git에 대한 LDAP 암호 인증 사용 안 함 확인란](/assets/images/enterprise/management-console/ldap-disable-password-auth-for-git.png)

이 옵션을 선택할 경우 사용자가 명령줄을 통해 Git 작업에 암호를 사용하려고 하면 `Password authentication is not allowed for Git operations. You must use a {% data variables.product.pat_generic %}.`이라는 오류 메시지가 표시됩니다.

### LDAP 인증서 확인 사용

LDAP 설정에서 **LDAP 인증서 확인 사용** 을 선택하여 TLS로 사용하는 LDAP 서버 인증서의 유효성을 검사합니다.

![LDAP 인증서 확인 확인란](/assets/images/enterprise/management-console/ldap-enable-certificate-verification.png)

이 옵션을 선택하면 다음을 확인하도록 인증서의 유효성이 검사됩니다.
- 인증서에 SAN(주체 대체 이름)이 하나 이상 포함된 경우 SAN 중 하나가 LDAP 호스트 이름과 일치합니다. 그렇지 않으면 CN(일반 이름)이 LDAP 호스트 이름과 일치합니다.
- 인증서가 만료되지 않았습니다.
- 신뢰할 수 있는 CA(인증 기관)이 인증서에 서명합니다.

### LDAP 동기화 사용

{% note %}

**참고:** LDAP 동기화를 사용하는 Teams의 멤버 수는 최대 1499명으로 제한됩니다.

{% endnote %}

LDAP 동기화를 사용하면 설정된 LDAP 그룹에 대해 {% data variables.product.prodname_ghe_server %} 사용자 및 팀 멤버 자격을 동기화할 수 있습니다. 이렇게 하면 {% data variables.product.prodname_ghe_server %} 내에서 수동으로 설정하지 않고도 LDAP 서버에서 사용자에 대한 역할 기반 액세스 제어를 설정할 수 있습니다. 자세한 내용은 “[팀 만들기](/enterprise/admin/guides/user-management/creating-teams#creating-teams-with-ldap-sync-enabled)”를 참조하세요.

LDAP 동기화를 사용하도록 설정하려면 LDAP 설정에서 **메일 동기화**, **SSH 키 동기화** 또는 **GPG 키 동기화** 를 선택합니다.

![동기화 확인란](/assets/images/enterprise/management-console/ldap-synchronize.png)

LDAP 동기화를 사용하도록 설정하면 지정된 시간 간격으로 동기화 작업이 실행되어 각 사용자 계정에 대해 다음 작업이 수행됩니다.

- ID 공급 기업 외부의 사용자에 대해 기본 제공 인증을 허용했고 사용자가 기본 제공 인증을 사용하는 경우 다음 사용자로 이동합니다.
- 사용자에 대한 LDAP 매핑이 없는 경우 사용자를 디렉터리의 LDAP 항목에 매핑해 봅니다. 사용자를 LDAP 항목에 매핑할 수 없는 경우 사용자를 일시 중단하고 다음 사용자로 이동합니다.
- LDAP 매핑이 있고 디렉터리에 해당 LDAP 항목이 없는 경우 사용자를 일시 중단하고 다음 사용자로 이동합니다.
- 해당 LDAP 항목이 비활성화된 것으로 표시되고 사용자가 아직 일시 중단되지 않은 경우 사용자를 일시 중단하고 다음 사용자로 이동합니다.
- 해당 LDAP 항목이 비활성화된 것으로 표시되지 않고 사용자가 일시 중단되었으며 관리 센터에서 일시 중단된 사용자 재활성화를 사용 설정한 경우 사용자의 일시 중단을 해제합니다.
- 하나 이상의 제한된 사용자 그룹이 인스턴스에 구성되어 있고 해당 LDAP 항목이 해당 그룹 중 하나에 없는 경우 사용자를 일시 중단합니다.
- 하나 이상의 제한된 사용자 그룹이 인스턴스에 구성되어 있고 해당 LDAP 항목이 해당 그룹 중 하나에 있으며 관리 센터에서 일시 중단된 사용자 재활성화가 사용 설정된 경우 사용자의 일시 중단을 해제합니다.
- 해당 LDAP 항목에 `name` 특성이 포함된 경우 사용자의 프로필 이름을 업데이트합니다.
- 해당 LDAP 항목이 관리자 그룹에 있는 경우 사용자를 사이트 관리자로 승격합니다.
- 해당 LDAP 항목이 관리자 그룹에 없는 경우 사용자를 일반 계정으로 강등합니다.
- 메일에 대해 LDAP 사용자 필드가 정의된 경우 사용자의 메일 설정을 LDAP 항목과 동기화합니다. 첫 번째 LDAP `mail` 항목을 기본 메일로 설정합니다.
- 퍼블릭 SSH 키에 대해 LDAP 사용자 필드가 정의된 경우 사용자의 퍼블릭 SSH 키를 LDAP 항목과 동기화합니다.  
- GPG 키에 대해 LDAP 사용자 필드가 정의된 경우 사용자의 GPG 키를 LDAP 항목과 동기화합니다.  

{% note %}

**참고**: LDAP 항목은 Active Directory를 사용하고 `userAccountControl` 특성이 존재하며 `ACCOUNTDISABLE`가 지정된 경우에만 비활성화된 것으로 표시할 수 있습니다. AD LDS 및 ADAM과 같은 일부 Active Directory 변형은 `userAccountControl` 특성을 지원하지 않습니다.

{% endnote %}

또한 동기화 작업은 LDAP 그룹에 매핑된 각 팀에서 다음 작업을 수행하도록 지정된 시간 간격으로 실행됩니다.

- 팀의 해당 LDAP 그룹이 제거된 경우 팀에서 모든 구성원을 제거합니다.
- LDAP 구성원 항목이 LDAP 그룹에서 제거된 경우 팀에서 해당 사용자를 제거합니다. 사용자가 더 이상 조직의 팀 구성원이 아니고 조직의 소유자가 아닌 경우 조직에서 사용자를 제거합니다. 결과적으로 사용자가 리포지토리에 액세스할 수 없게 되면 해당 리포지토리의 프라이빗 포크를 삭제합니다.

  {% note %}

  **참고:** 사용자가 해당 조직의 소유자인 경우 LDAP 동기화는 조직에서 사용자를 제거하지 않습니다. 다른 조직 소유자는 사용자를 수동으로 제거해야 합니다.

  {% endnote %}
- LDAP 구성원 항목이 LDAP 그룹에 추가된 경우 해당 사용자를 팀에 추가합니다. 결과적으로 사용자가 리포지토리에 대한 액세스 권한을 다시 얻은 경우 사용자가 지난 90일 동안 액세스 권한을 잃었기 때문에 삭제된 리포지토리의 프라이빗 포크를 복원합니다.

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

{% warning %}

**보안 경고:**

LDAP 동기화를 사용 설정하면 사이트 관리자와 조직 소유자는 LDAP 디렉터리에서 팀을 매핑할 그룹을 검색할 수 있습니다.

이렇게 하면 다음을 포함하여 계약자 또는 기타 권한 없는 사용자에게 중요한 조직 정보를 공개할 수 있습니다.

- 도메인 검색 사용자에게 표시되는 특정 LDAP 그룹의 존재.
- {% data variables.product.prodname_ghe_server %} 사용자 계정이 있는 LDAP 그룹의 구성원. 해당 LDAP 그룹과 동기화된 팀을 만들 때 공개됩니다.

해당 정보를 공개하는 것이 바람직하지 않은 경우 회사 또는 조직은 관리 콘솔에서 구성된 도메인 검색 사용자의 권한을 제한해야 합니다. 이와 같은 제한이 불가능한 경우 {% data variables.contact.contact_ent_support %}에 문의하세요.

{% endwarning %}

### 지원되는 LDAP 그룹 개체 클래스

{% data variables.product.prodname_ghe_server %}는 다음과 같은 LDAP 그룹 개체 클래스를 지원합니다. 그룹은 중첩할 수 있습니다.

- `group`
- `groupOfNames`
- `groupOfUniqueNames`
- `posixGroup`

## LDAP 사용자 보기 및 만들기

인스턴스에 대한 액세스 권한이 있는 LDAP 사용자의 전체 목록을 보고 새 사용자를 프로비저닝할 수 있습니다.

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %}
3. 왼쪽 사이드바에서 **LDAP 사용자** 를 클릭합니다.
![LDAP 사용자 탭](/assets/images/enterprise/site-admin-settings/ldap-users-tab.png)
4. 사용자를 검색하려면 사용자 이름 전체 또는 일부를 입력하고 **검색** 을 클릭합니다. 기존 사용자가 검색 결과에 표시됩니다. 사용자가 없는 경우 **만들기** 를 클릭하여 새 사용자 계정을 프로비저닝합니다.
![LDAP 검색](/assets/images/enterprise/site-admin-settings/ldap-users-search.jpg)

## LDAP 계정 업데이트

[LDAP 동기화를 사용 설정](#enabling-ldap-sync)하지 않으면 LDAP 계정에 대한 변경 내용이 {% data variables.product.prodname_ghe_server %}와 자동으로 동기화되지 않습니다.

* 새 LDAP 관리 그룹을 사용하려면 {% data variables.product.prodname_ghe_server %}에서 사용자를 수동으로 승격하고 강등하여 LDAP의 변경 내용을 반영해야 합니다.
* LDAP 관리 그룹에서 LDAP 계정을 추가하거나 제거하려면 [{% data variables.product.prodname_ghe_server %}에서 계정을 승격 또는 강등](/enterprise/admin/guides/user-management/promoting-or-demoting-a-site-administrator)합니다.
* LDAP 계정을 제거하려면 [{% data variables.product.prodname_ghe_server %} 계정을 일시 중단](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)합니다.

### LDAP 계정 수동 동기화

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user %} {% data reusables.enterprise_site_admin_settings.click-user %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
5. “LDAP”에서 **지금 동기화** 를 클릭하여 LDAP 서버의 데이터로 계정을 수동 업데이트합니다.
![LDAP 지금 동기화 단추](/assets/images/enterprise/site-admin-settings/ldap-sync-now-button.png)

[API를 사용하여 수동 동기화를 트리거](/enterprise/user/rest/reference/enterprise-admin#ldap)할 수도 있습니다.

## {% data variables.location.product_location %}에 대한 액세스 취소

[LDAP 동기화를 사용 설정](#enabling-ldap-sync)할 경우 다음 동기화 실행 후 사용자의 LDAP 자격 증명을 제거하면 해당 계정이 일시 중단됩니다.

LDAP 동기화를 사용 설정하지 **않은** 경우 LDAP 자격 증명을 제거한 후 {% data variables.product.prodname_ghe_server %} 계정을 수동으로 일시 중단해야 합니다. 자세한 내용은 “[사용자 일시 중단 및 일시 중단 해제](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)”를 참조하세요.
