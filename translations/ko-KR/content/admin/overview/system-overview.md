---
title: 시스템 개요
intro: '{% data variables.product.product_name %}의 시스템 내부, 기능 및 보안에 대해 자세히 알아봅니다.'
redirect_from:
  - /enterprise/admin/installation/system-overview
  - /enterprise/admin/overview/system-overview
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Security
  - Storage
ms.openlocfilehash: 138a54bcdf23dc540ef8dc753da1252d647496a3
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098285'
---
## {% data variables.product.product_name %} 정보

{% data reusables.enterprise.ghes-is-a-self-hosted-platform %} {% data reusables.enterprise.github-distributes-ghes %} 자세한 내용은 “[{% data variables.product.prodname_ghe_server %} 정보](/admin/overview/about-github-enterprise-server)”를 참조하세요.

## 스토리지 아키텍처

{% data variables.product.product_name %}에는 두 개의 스토리지 볼륨이 필요합니다. 하나는 루트 파일 시스템 경로(`/`)에 탑재되고 다른 하나는 사용자 파일 시스템 경로(`/data/user`)에 탑재됩니다.  이 아키텍처는 실행 중인 소프트웨어 환경을 영구 애플리케이션 데이터와 분리하여 업그레이드, 롤백, 복구 절차를 간소화합니다.

루트 파일 시스템은 분산 머신 이미지에 포함됩니다. 여기에는 베이스 운영 체제 및 {% data variables.product.product_name %} 애플리케이션 환경이 포함되어 있습니다. 루트 파일 시스템은 임시로 처리되어야 합니다. 루트 파일 시스템의 모든 데이터는 향후 {% data variables.product.product_name %} 릴리스로 업그레이드할 때 바뀝니다.

루트 스토리지 볼륨은 동일한 크기의 두 파티션으로 분할됩니다. 파티션 중 하나가 루트 파일 시스템(`/`)으로 탑재됩니다. 다른 파티션은 필요한 경우 더 쉽게 롤백할 수 있도록 업그레이드 및 업그레이드 롤백 중에만 `/mnt/upgrade`로 탑재됩니다. 예를 들어 200GB 루트 볼륨이 할당되면 루트 파일 시스템에 100GB가 할당되고 업그레이드 및 롤백을 위해 100GB가 예약됩니다.

루트 파일 시스템에는 다음 정보를 저장하는 파일이 포함되어 있습니다. 이 목록은 전체 목록이 아닙니다.

- 사용자 지정 CA(인증 기관) 인증서(`/usr/local/share/ca-certificates*`)
- 사용자 지정 네트워킹 구성
- 사용자 지정 방화벽 구성
- 복제본 상태

사용자 파일 시스템에는 다음 구성 및 데이터를 저장하는 파일이 포함되어 있습니다. 이 목록은 전체 목록이 아닙니다.

- Git 리포지토리
- 데이터베이스
- 인덱스 검색
- {% data variables.product.prodname_pages %} 사이트에 게시된 콘텐츠
- {% data variables.large_files.product_name_long %}의 대용량 파일
- 사전 수신 후크 환경

## 배포 토폴로지

고가용성 쌍과 같은 다양한 토폴로지에서 {% data variables.product.product_name %}를 배포할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_server %} 정보](/admin/overview/about-github-enterprise-server#about-deployment-topologies)”를 참조하세요.

## 데이터 보존 및 데이터 센터 중복도

{% warning %}

**경고**: 프로덕션 환경에서 {% data variables.product.product_name %}를 사용하기 전에 백업 및 재해 복구 계획을 설정하는 것이 좋습니다.

{% endwarning %}

{% data variables.product.product_name %}에는 {% data variables.product.prodname_enterprise_backup_utilities %}를 사용한 온라인 및 증분 백업 지원이 포함되어 있습니다. 오프사이트 또는 지리적으로 분산된 스토리지를 위해 원격으로 보안 네트워크 링크(SSH 관리 포트)를 통해 증분 스냅샷을 생성할 수 있습니다. 기본 데이터 센터에서 재해가 발생한 경우 복구 시 네트워크를 통해 새로 프로비저닝된 인스턴스로 스냅샷을 복원할 수 있습니다.

네트워크 백업 외에도 인스턴스가 오프라인이거나 유지 관리 모드인 동안 사용자 스토리지 볼륨의 AWS(EBS) 및 VMware 디스크 스냅샷이 모두 지원됩니다. 서비스 수준 요구 사항으로 인해 정기적인 오프라인 유지 관리를 허용하는 경우 {% data variables.product.prodname_enterprise_backup_utilities %}를 사용하는 네트워크 백업 대신 일반 볼륨 스냅샷을 저렴하고 복잡성이 낮은 대안으로 사용할 수 있습니다.

자세한 내용은 “[어플라이언스에서 백업 구성](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)”을 참조하세요.

## 보안

{% data reusables.enterprise.ghes-runs-on-your-infrastructure %}

{% data variables.product.product_name %}에는 추가 보안 기능도 포함되어 있습니다.

- [운영 체제, 소프트웨어, 패치](#operating-system-software-and-patches)
- [네트워크 보안](#network-security)
- [애플리케이션 보안](#application-security)
- [외부 서비스 및 지원 액세스](#external-services-and-support-access)
- [암호화된 통신](#encrypted-communication)
- [사용자 및 액세스 권한](#users-and-access-permissions)
- [인증](#authentication)
- [감사 및 액세스 로깅](#audit-and-access-logging)

### 운영 체제, 소프트웨어, 패치

{% data variables.product.product_name %}는 필수 애플리케이션과 서비스만 포함하여 사용자 지정 Linux 운영 체제를 실행합니다. {% data variables.product.company_short %}는 표준 제품 릴리스 주기의 일부로 인스턴스의 핵심 운영 체제용 패치를 배포합니다. 패치는 {% data variables.product.product_name %} 애플리케이션의 기능, 안정성, 중요하지 않은 보안 문제를 해결합니다. {% data variables.product.company_short %}는 정기적인 릴리스 주기 외에 필요에 따라 중요한 보안 패치도 제공합니다.

{% data variables.product.product_name %}는 어플라이언스로 제공되며 일반적인 Debian 배포에 비해 많은 운영 체제 패키지가 수정됩니다. 이러한 이유로 기본 운영 체제 수정(운영 체제 업그레이드 포함)은 지원하지 않으며, 이는 섹션 11.3 제외의 [{% data variables.product.prodname_ghe_server %} 라이선스 및 지원 계약](https://enterprise.github.com/license)을 따릅니다.

현재 {% data variables.product.product_name %}의 기본 운영 체제는 Debian 9(Stretch)이며 Debian 장기 지원 프로그램에서 지원을 받습니다.  Stretch에 대한 Debian LTS 기간이 끝나기 전에 최신 기본 운영 체제로 이동할 계획이 있습니다.

정기적인 패치 업데이트는 {% data variables.product.product_name %} [릴리스](https://enterprise.github.com/releases) 페이지에서 발표되며 [릴리스 정보](/admin/release-notes) 페이지에서 자세한 정보를 제공합니다. 이러한 패치에는 일반적으로 엔지니어링 팀에서 테스트를 거쳐 품질을 승인한 업스트림 공급업체 및 프로젝트 보안 패치가 포함되어 있습니다. 업스트림 업데이트가 릴리스된 후 테스트되고 향후 {% data variables.product.product_name %} 패치 릴리스에 번들로 포함될 때까지 약간의 시간이 지연될 수 있습니다.

### 네트워크 보안

{% data variables.product.product_name %}의 내부 방화벽은 인스턴스의 서비스에 대한 네트워크 액세스를 제한합니다. 어플라이언스가 작동하는 데 필요한 서비스만 네트워크를 통해 사용할 수 있습니다. 자세한 내용은 “[네트워크 포트](/admin/configuration/configuring-network-settings/network-ports)”를 참조하세요.

### 애플리케이션 보안

{% data variables.product.company_short %}의 애플리케이션 보안 팀은 {% data variables.product.product_name %}를 포함하여 {% data variables.product.company_short %} 제품에 대한 취약성 평가, 침투 테스트, 코드 검토에 대해 항상 집중합니다. 또한 {% data variables.product.company_short %}는 외부 보안 회사와 계약을 맺어 {% data variables.product.company_short %} 제품에 대한 특정 시점 보안 평가를 제공합니다.

### 외부 서비스 및 지원 액세스

{% data variables.product.product_name %}는 네트워크에서 외부 서비스로의 송신 액세스 없이 작동할 수 있습니다. 필요에 따라 메일 배달, 외부 모니터링, 로그 전달을 위해 외부 서비스와의 통합을 사용하도록 설정할 수 있습니다. 자세한 내용은 “[알림에 대한 메일 구성](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)”, “[외부 모니터링 설정](/admin/enterprise-management/monitoring-your-appliance/setting-up-external-monitoring)”, “[로그 전달](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)”을 참조하세요.

문제 해결 데이터를 수동으로 수집하고 {% data variables.contact.github_support %}으로 보낼 수 있습니다. 자세한 내용은 “[{% data variables.contact.github_support %}에 데이터 제공](/support/contacting-github-support/providing-data-to-github-support)”을 참조하세요.

### 암호화된 통신

{% data variables.product.company_short %}는 회사 방화벽 뒤에서 실행되도록 {% data variables.product.product_name %}를 디자인합니다. 유선 통신을 보호하려면 TLS(전송 계층 보안)를 활성화하는 것이 좋습니다. {% data variables.product.product_name %}는 HTTPS 트래픽에 대해 2048비트 이상의 상용 TLS 인증서를 지원합니다. 자세한 내용은 “[TLS 구성](/admin/configuration/configuring-network-settings/configuring-tls)”을 참조하세요.

기본적으로 인스턴스는 Git을 사용한 리포지토리 액세스와 관리 목적 모두에 대해 SSH(Secure Shell) 액세스를 제공합니다. 자세한 내용은 “[SSH 정보](/authentication/connecting-to-github-with-ssh/about-ssh)” 및 “[관리 셸(SSH) 액세스](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)”를 참조하세요.

{% ifversion ghes > 3.3 %}

{% 데이터 variables.location.product_location %}에 대한 SAML 인증을 구성하는 경우 인스턴스와 SAML IdP 간에 암호화된 어설션을 사용하도록 설정할 수 있습니다. 자세한 내용은 “[SAML 사용](/admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-saml#enabling-encrypted-assertions)”을 참조하세요.

{% endif %}

### 사용자 및 액세스 권한

{% data variables.product.product_name %}는 세 가지 유형의 계정을 제공합니다.

- `admin` Linux 사용자 계정은 직접 파일 시스템 및 데이터베이스 액세스를 포함하여 기본 운영 체제에 대한 액세스를 제어했습니다. 소수의 신뢰할 수 있는 관리자는 SSH를 통해 액세스할 수 있는 이 계정에 액세스할 수 있어야 합니다. 자세한 내용은 “[관리 셸(SSH) 액세스](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)”를 참조하세요.
- 인스턴스 웹 애플리케이션의 사용자 계정은 자신의 데이터와 다른 사용자 또는 조직이 명시적으로 부여한 모든 데이터에 대한 전체 액세스 권한을 보유합니다.
- 인스턴스 웹 애플리케이션의 사이트 관리자는 고급 웹 애플리케이션 및 인스턴스 설정, 사용자 및 조직 계정 설정 및 리포지토리 데이터를 관리할 수 있는 사용자 계정입니다.

{% data variables.product.product_name %}의 사용자 권한에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에 대한 액세스 권한](/get-started/learning-about-github/access-permissions-on-github)”을 참조하세요.

### 인증

{% data variables.product.product_name %}는 네 가지 인증 방법을 제공합니다.

- SSH 퍼블릭 키 인증은 Git을 사용한 리포지토리 액세스와 관리 셸 액세스를 모두 제공합니다. 자세한 내용은 “[SSH 정보](/authentication/connecting-to-github-with-ssh/about-ssh)” 및 “[관리 셸(SSH) 액세스](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)”를 참조하세요.
- HTTP 쿠키를 사용한 사용자 이름 및 암호 인증은 선택적 2FA(2단계 인증)를 사용하여 웹 애플리케이션 액세스 및 세션 관리를 제공합니다. 자세한 내용은 “[기본 제공 인증 사용](/admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication)”을 참조하세요.
- LDAP 서비스, SAML IdP(ID 공급자) 또는 기타 호환 서비스를 사용하는 외부 LDAP, SAML 또는 CAS 인증은 웹 애플리케이션에 대한 액세스를 제공합니다. 자세한 내용은 “[엔터프라이즈에 대한 IAM 관리](/admin/identity-and-access-management/managing-iam-for-your-enterprise)”를 참조하세요.
- OAuth 및 {% 데이터 variables.product.pat_generic %}s은(는) 외부 클라이언트와 서비스 모두에 대한 Git 리포지토리 데이터 및 API에 대한 액세스를 제공합니다. 자세한 내용은 "[%}variables.product.pat_generic {% 데이터 만들기](/github/authenticating-to-github/creating-a-personal-access-token)"를 참조하세요.

### 감사 및 액세스 로깅

{% data variables.product.product_name %}는 기존 운영 체제와 애플리케이션 로그를 모두 저장합니다. 또한 애플리케이션은 {% data variables.product.product_name %}가 영구적으로 저장하는 자세한 감사 및 보안 로그를 작성합니다. `syslog-ng` 프로토콜을 통해 두 가지 형식의 로그를 실시간으로 여러 대상에 전달할 수 있습니다. 자세한 내용은 “[엔터프라이즈의 감사 로그 정보](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)” 및 “[로그 전달](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)”을 참조하세요.

액세스 및 감사 로그에는 다음과 같은 정보가 포함됩니다.

#### 액세스 로그

- 브라우저 및 API 액세스 모두에 대한 전체 웹 서버 로그
- Git, HTTPS, SSH 프로토콜을 통해 리포지토리 데이터에 액세스하기 위한 전체 로그
- HTTPS 및 SSH를 통한 관리 액세스 로그

#### 감사 로그

- 사용자 로그인, 암호 재설정, 2FA 요청, 메일 설정 변경, 권한 있는 애플리케이션 및 API에 대한 변경
- 사용자 계정 및 리포지토리 잠금 해제와 같은 사이트 관리자 작업
- 리포지토리 푸시 이벤트, 액세스 권한 부여, 전송, 이름 바꾸기
- 팀 만들기 및 소멸을 포함한 조직 멤버 자격 변경

## {% data variables.product.product_name %}에 대한 오픈 소스 종속성

`http(s)://HOSTNAME/site/credits`에서 인스턴스 버전의 {% data variables.product.product_name %} 및 각 프로젝트의 라이선스에서 전체 종속성 목록을 볼 수 있습니다.

종속성 및 관련 메타데이터의 전체 목록이 있는 Tarball은 인스턴스에서 사용할 수 있습니다.

- 모든 플랫폼에 공통적인 종속성의 경우 `/usr/local/share/enterprise/dependencies-<GHE version>-base.tar.gz`에 있습니다.
- 플랫폼에 대한 특정 종속성의 경우 `/usr/local/share/enterprise/dependencies-<GHE version>-<platform>.tar.gz`에 있습니다.

종속성 및 메타데이터의 전체 목록과 함께 Tarball도 `https://enterprise.github.com/releases/<version>/download.html`에서 사용할 수 있습니다.

## 추가 참고 자료

- “[{% data variables.product.prodname_ghe_server %}의 평가판 설정](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-server)”
- “[{% data variables.product.prodname_ghe_server %} 인스턴스 설정](/admin/installation/setting-up-a-github-enterprise-server-instance)”
