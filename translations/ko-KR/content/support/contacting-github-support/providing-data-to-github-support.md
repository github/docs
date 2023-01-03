---
title: GitHub 지원에 데이터 제공
intro: '{% data variables.contact.github_support %}는 사용자 환경에 액세스할 수 없으므로 사용자로부터 몇 가지 추가 정보가 필요한 경우가 있습니다.'
shortTitle: Providing data
versions:
  ghes: '*'
redirect_from:
  - /enterprise/admin/guides/installation/troubleshooting
  - /enterprise/admin/articles/support-bundles
  - /enterprise/admin/guides/enterprise-support/providing-data-to-github-enterprise-support
  - /enterprise/admin/enterprise-support/providing-data-to-github-support
  - /admin/enterprise-support/providing-data-to-github-support
  - /admin/enterprise-support/receiving-help-from-github-support/providing-data-to-github-support
topics:
  - Support
ms.openlocfilehash: bc941b09d6d38f0cad45fcb1ab5977002a3618d8
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093963'
---
## 진단 파일 및 지원 번들 정보

{% data variables.contact.github_support %}에서 삭제된 로그 파일 형식으로 추가 데이터를 제공하도록 요청할 수 있습니다. 세 가지 유형의 로그 파일을 제공하도록 요청할 수 있습니다.

진단 파일에는 {% data variables.product.prodname_ghe_server %} 인스턴스의 설정 및 환경에 대한 정보가 포함되고, 지원 번들에는 지난 2일 동안의 진단 및 로그가 포함되며, 추가 지원 번들에는 지난 7일 동안의 진단 및 로그도 포함됩니다.

## 로그 파일 삭제 정보

인증 토큰, 키 및 비밀은 지원 번들 또는 진단 파일 내에 포함된 다음 로그 디렉터리에 있는 로그 파일에서 제거됩니다.

* `alambic-logs`
* `babeld-logs`
* `codeload-logs`
* `enterprise-manage-logs`
* `github-logs`
* `hookshot-logs`
* `lfs-server-logs`
* `semiotic-logs`
* `task-dispatcher-logs`
* `pages-logs`
* `registry-logs`
* `render-logs`
* `svn-bridge-logs`

## 진단 파일 만들기 및 공유

진단 파일은 다음을 포함하는 {% data variables.product.prodname_ghe_server %} 인스턴스의 설정 및 환경에 대한 개요입니다.

- 회사 이름, 만료 날짜 및 사용자 라이선스 수를 포함한 클라이언트 라이선스 정보
- 버전 번호 및 SHA
- VM 아키텍처
- 호스트 이름, 프라이빗 모드, SSL 설정
- 목록 로드 및 처리
- 네트워크 설정
- 인증 방법 및 세부 정보
- 리포지토리, 사용자 및 기타 설치 데이터 수

{% data variables.enterprise.management_console %}에서 또는 `ghe-diagnostics` 명령줄 유틸리티를 실행하여 인스턴스에 대한 진단을 다운로드할 수 있습니다.

### {% data variables.enterprise.management_console %}에서 진단 파일 만들기

SSH 키를 쉽게 사용할 수 없는 경우 이 방법을 사용할 수 있습니다.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %} {% data reusables.enterprise_management_console.support-link %}
5. **진단 정보 다운로드** 를 클릭합니다.

### SSH를 사용하여 진단 파일 만들기

{% data variables.enterprise.management_console %}에 로그인하지 않고도 이 방법을 사용할 수 있습니다.

[ghe-diagnostics](/enterprise/admin/guides/installation/command-line-utilities#ghe-diagnostics) 명령줄 유틸리티를 사용하여 인스턴스에 대한 진단을 검색합니다.

```shell
$ ssh -p122 admin@HOSTNAME -- 'ghe-diagnostics' > diagnostics.txt
```

## 지원 번들 만들기 및 공유

지원 요청을 제출한 후 지원 번들을 우리 팀과 공유하도록 요청할 수 있습니다. 지원 번들은 다음과 같은 인스턴스의 진단 및 중요한 로그를 포함하는 gzip 압축 tar 보관 파일입니다.

- 인증 오류 문제를 해결하거나 LDAP, CAS 또는 SAML을 구성할 때 유용할 수 있는 인증 관련 로그
- {% data variables.enterprise.management_console %} 로그
- `github-logs/exceptions.log`: 사이트에서 발생한 500개의 오류에 대한 정보
- `github-logs/audit.log`: {% data variables.product.prodname_ghe_server %} 감사 로그
- `babeld-logs/babeld.log`: Git 프록시 로그
- `system-logs/haproxy.log`: HAProxy 로그
- `elasticsearch-logs/github-enterprise.log`: Elasticsearch 로그
- `configuration-logs/ghe-config.log`: {% data variables.product.prodname_ghe_server %} 구성 로그
- `collectd/logs/collectd.log`: 수집된 로그
- `mail-logs/mail.log`: SMTP 이메일 배달 로그

자세한 내용은 "[엔터프라이즈의 감사 로그 정보](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)"를 참조하세요.

지원 번들에는 지난 2일 동안의 로그가 포함됩니다. 지난 7일 동안의 로그를 가져오려면 추가 지원 번들을 다운로드할 수 있습니다. 자세한 내용은 "[추가 지원 번들 만들기 및 공유](#creating-and-sharing-extended-support-bundles)"를 참조하세요.

{% tip %}

**팁:** {% data variables.contact.github_support %}에 문의하면 티켓 참조 링크가 포함된 확인 이메일이 전송됩니다. {% data variables.contact.github_support %}에서 지원 번들을 업로드하도록 요청하는 경우 티켓 참조 링크를 사용하여 지원 번들을 업로드할 수 있습니다.

{% endtip %}

### {% data variables.enterprise.management_console %}에서 지원 번들 만들기

웹 기반 {% data variables.enterprise.management_console %}에 액세스할 수 있고 아웃바운드 인터넷에 액세스할 수 있는 경우 다음 단계를 사용하여 지원 번들을 만들고 공유할 수 있습니다.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %} {% data reusables.enterprise_management_console.support-link %}
5. **지원 번들 다운로드** 를 클릭합니다.
{% data reusables.enterprise_enterprise_support.sign-in-to-support %} {% data reusables.enterprise_enterprise_support.upload-support-bundle %}

### SSH를 사용하여 지원 번들 만들기

{% 데이터 variables.location.product_location %}에 대한 SSH 액세스 권한이 있고 아웃바운드 인터넷에 액세스할 수 있는 경우 다음 단계를 사용하여 지원 번들을 만들고 공유할 수 있습니다.

{% data reusables.enterprise_enterprise_support.use_ghe_cluster_support_bundle %}

1. SSH를 통해 지원 번들을 다운로드합니다.
  ```shell
  $ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -o' > support-bundle.tgz
  ```
  `ghe-support-bundle` 명령에 대한 자세한 내용은 "[명령줄 유틸리티](/enterprise/admin/guides/installation/command-line-utilities#ghe-support-bundle)"를 참조하세요.
{% data reusables.enterprise_enterprise_support.sign-in-to-support %} {% data reusables.enterprise_enterprise_support.upload-support-bundle %}

### 엔터프라이즈 계정을 사용하여 지원 번들 업로드

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
3. 왼쪽 사이드바에서 **엔터프라이즈 라이선스** 를 클릭합니다.
  ![엔터프라이즈 계정 설정 사이드바에서 "엔터프라이즈 라이선스" 링크를 보여주는 스크린샷.](/assets/images/help/enterprises/enterprise-licensing-tab.png)
4. "{% data variables.product.prodname_enterprise %} 도움말"에서 **지원 번들 업로드** 를 클릭합니다.
  !["지원 번들 링크 업로드"를 보여주는 스크린샷.](/assets/images/enterprise/support/upload-support-bundle.png)
5. "엔터프라이즈 계정 선택" 아래의 드롭다운 메뉴에서 지원 번들과 연결된 계정을 선택합니다.
  ![지원 번들의 엔터프라이즈 계정을 선택하기 위한 드롭다운 메뉴를 보여주는 스크린샷.](/assets/images/enterprise/support/support-bundle-account.png)
6. "{% data variables.contact.enterprise_support %}를 위한 지원 번들 업로드"에서 지원 번들을 선택하려면 **파일 선택** 을 클릭하거나 지원 번들 파일을 **파일 선택** 으로 끌어옵니다.
  ![지원 번들 파일을 업로드하는 "파일 선택" 단추를 보여주는 스크린샷.](/assets/images/enterprise/support/choose-support-bundle-file.png)
7. **업로드** 를 클릭합니다.

### SSH를 사용하여 지원 번들 직접 업로드

다음과 같은 경우 지원 번들을 서버에 직접 업로드할 수 있습니다.
- {% 데이터 variables.location.product_location %}에 대한 SSH 액세스 권한이 있습니다.
- TCP 포트 443을 통한 아웃바운드 HTTPS 연결은 {% 데이터 variables.location.product_location %}에서 _enterprise-bundles.github.com 및 esbtoolsproduction.blob.core.windows.net_ 허용됩니다.

1. 번들을 지원 번들 서버에 업로드합니다.
  ```shell
  $ ssh -p122 admin@HOSTNAME -- 'ghe-support-bundle -u'
  ```

## 추가 지원 번들 만들기 및 공유

지원 번들에는 지난 2일 동안의 로그가 포함되며, _추가_ 지원 번들에는 지난 7일 동안의 로그가 포함됩니다. {% data variables.contact.github_support %}에서 조사 중인 이벤트가 이틀 이전에 발생한 경우 추가 지원 번들을 공유하도록 요청할 수 있습니다. 추가 번들을 다운로드하려면 SSH 액세스 권한이 필요합니다. {% data variables.enterprise.management_console %}에서 추가 번들을 다운로드할 수 없습니다.

번들이 너무 커지는 것을 방지하기 위해 번들은 회전 및 압축되지 않은 로그만 포함합니다. {% data variables.product.prodname_ghe_server %}의 로그 회전은 예상되는 로그 크기에 따라 다양한 로그 파일에 대해 다양한 빈도(매일 또는 매주)로 발생합니다.

### SSH를 사용하여 추가 지원 번들 만들기

{% 데이터 variables.location.product_location %}에 대한 SSH 액세스 권한이 있고 아웃바운드 인터넷에 액세스할 수 있는 경우 이러한 단계를 사용하여 확장 지원 번들을 만들고 공유할 수 있습니다.

1. `ghe-support-bundle` 명령에 `-x` 플래그를 추가하여 SSH를 통해 추가 지원 번들을 다운로드합니다.
  ```shell
  $ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -o -x' > support-bundle.tgz
  ```
{% data reusables.enterprise_enterprise_support.sign-in-to-support %} {% data reusables.enterprise_enterprise_support.upload-support-bundle %}

### SSH를 사용하여 추가 지원 번들 직접 업로드

다음과 같은 경우 지원 번들을 서버에 직접 업로드할 수 있습니다.
- {% 데이터 variables.location.product_location %}에 대한 SSH 액세스 권한이 있습니다.
- TCP 포트 443을 통한 아웃바운드 HTTPS 연결은 {% 데이터 variables.location.product_location %}에서 _enterprise-bundles.github.com 및 esbtoolsproduction.blob.core.windows.net_ 허용됩니다.

1. 번들을 지원 번들 서버에 업로드합니다.
  ```shell
  $ ssh -p122 admin@HOSTNAME -- 'ghe-support-bundle -u -x'
  ```

## 추가 참고 자료

- "[GitHub 지원 정보](/support/learning-about-github-support/about-github-support)"
- "[엔터프라이즈에 대한 상태 검사 생성](/enterprise-server@latest/admin/enterprise-management/monitoring-your-appliance/generating-a-health-check-for-your-enterprise)"
