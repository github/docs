---
title: GitHub Enterprise Server 시작
intro: '{% data variables.location.product_location %}을(를) 설정하고 관리하는 것을 시작합니다.'
versions:
  ghes: '*'
ms.openlocfilehash: 68cd462c42ef63863750d9edc5e122dc3c325115
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163418'
---
이 가이드에서는 엔터프라이즈 관리자로 {% data variables.location.product_location %}을 설정, 구성 및 관리하는 방법을 안내합니다.

{% data variables.product.company_short %}는 {% data variables.product.prodname_enterprise %}를 배포하는 두 가지 방법을 제공합니다.

- **{% data variables.product.prodname_ghe_cloud %}**
- **{% data variables.product.prodname_ghe_server %}**

{% data variables.product.company_short %}는 {% data variables.product.prodname_ghe_cloud %}를 호스트합니다. 사용자 고유의 데이터 센터 또는 지원되는 클라우드 공급자에서 {% data variables.product.prodname_ghe_server %}를 배포하고 호스트할 수 있습니다.

{% data variables.product.product_name %}에 대한 자세한 내용은 “[{% data variables.product.prodname_ghe_server %} 정보](/admin/overview/about-github-enterprise-server)”를 참조하세요.

## 1부: {% data variables.product.product_name %} 설치
{% data variables.product.product_name %}를 시작하려면 엔터프라이즈 계정을 만들고, 인스턴스를 설치하고, 초기 설정에 관리 콘솔을 사용하고, 인스턴스를 구성하고, 청구를 관리해야 합니다. 
### 1. 엔터프라이즈 계정 만들기
{% data variables.product.product_name %}를 설치하기 전에 [{% data variables.product.prodname_dotcom %}의 영업 팀](https://enterprise.github.com/contact)에 문의하여 {% data variables.product.prodname_dotcom_the_website %}에서 엔터프라이즈 계정을 만들 수 있습니다. {% data variables.product.prodname_dotcom_the_website %}의 엔터프라이즈 계정은 {% data variables.product.prodname_github_connect %}를 통해 {% data variables.product.prodname_dotcom_the_website %}와 공유된 기능 및 청구에 유용합니다.  자세한 내용은 “[엔터프라이즈 계정 정보](/admin/overview/about-enterprise-accounts)”를 참조하세요.
### 2. {% data variables.product.product_name %} 설치
{% data variables.product.product_name %}를 시작하려면 원하는 가상화 플랫폼에 어플라이언스를 설치해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_server %} 인스턴스 설정](/admin/installation/setting-up-a-github-enterprise-server-instance)”을 참조하세요.

### 3. 관리 콘솔 사용
관리 콘솔을 사용하여 {% data variables.location.product_location %}을(를) 처음 시작할 때 초기 설정 프로세스를 안내합니다. 관리 콘솔을 사용하여 라이선스, 도메인, 인증, TLS와 같은 인스턴스 설정을 관리할 수도 있습니다. 자세한 내용은 “[관리 콘솔 액세스](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)”를 참조하세요.

### 4. {% data variables.location.product_location %} 구성
관리 콘솔 외에도 사이트 관리자 대시보드와 SSH(관리 셸)를 사용하여 {% data variables.location.product_location %}을(를) 관리할 수 있습니다. 예를 들어 애플리케이션 및 속도 한도를 구성하고, 보고서를 보고, 명령줄 유틸리티를 사용할 수 있습니다. 자세한 내용은 “[엔터프라이즈 구성](/admin/configuration/configuring-your-enterprise)”을 참조하세요.

DHCP(Dynamic Host Configuration Protocol)를 통해 {% data variables.product.product_name %}에서 사용하는 기본 네트워크 설정을 사용하거나 가상 머신 콘솔을 사용하여 네트워크 설정을 구성할 수 있습니다. 프록시 서버 또는 방화벽 규칙을 구성할 수도 있습니다. 자세한 내용은 “[네트워크 설정 구성](/admin/configuration/configuring-network-settings)”을 참조하세요.

### 5. 고가용성 구성
고가용성을 위해 {% data variables.location.product_location %}을(를) 구성하여 하드웨어 오류 및 네트워크 중단의 영향을 최소화할 수 있습니다. 자세한 내용은 “[고가용성 구성](/admin/enterprise-management/configuring-high-availability)”을 참조하세요.

### 6. 스테이징 인스턴스 설정
{% data variables.location.product_location %}에 적용하기 전에 수정 사항을 테스트하고, 재해 복구를 계획하고, 업데이트를 시도하도록 스테이징 인스턴스를 설정할 수 있습니다.  자세한 내용은 “[스테이징 인스턴스 설정](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)”을 참조하세요.

### 7. 백업 및 재해 복구 지정
프로덕션 데이터를 보호하려면 {% data variables.product.prodname_enterprise_backup_utilities %}을(를) 사용하여 {% data variables.location.product_location %}의 자동화된 백업을 구성할 수 있습니다. 자세한 내용은 “[어플라이언스에서 백업 구성](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)”을 참조하세요.

### 8. 엔터프라이즈에 대한 청구 관리
엔터프라이즈 계정에 연결된 모든 조직 및 {% data variables.product.product_name %} 인스턴스에 대한 청구는 모든 유료 {% data variables.product.prodname_dotcom %}.com 서비스에 대해 단일 청구 요금으로 집계됩니다. 엔터프라이즈 소유자와 청구 관리자는 엔터프라이즈 계정에 대한 청구 설정에 액세스하고 관리할 수 있습니다. 자세한 내용은 “[엔터프라이즈에 대한 청구 관리](/admin/overview/managing-billing-for-your-enterprise)”를 참조하세요.

## 2부: 팀 구성 및 관리
엔터프라이즈 소유자 또는 관리자는 사용자, 리포지토리, 팀, 조직 수준에서 설정을 관리할 수 있습니다. 엔터프라이즈의 멤버를 관리하고, 조직을 만들어 관리하고, 리포지토리 관리 정책을 설정하고, 팀을 만들어 관리할 수 있습니다.

### 1. {% data variables.location.product_location %}의 멤버 관리
{% data reusables.getting-started.managing-enterprise-members %}

### 2. 조직 만들기
{% data reusables.getting-started.creating-organizations %}

### 3. 조직에 멤버 추가
{% data reusables.getting-started.adding-members-to-organizations %}

### 4. 팀 만들기
{% data reusables.getting-started.creating-teams %}

### 5. 조직 및 리포지토리 권한 수준 설정
{% data reusables.getting-started.setting-org-and-repo-permissions %}

### 6. 리포지토리 관리 정책 적용
{% data reusables.getting-started.enforcing-repo-management-policies %}

## 3부: 안전하게 빌드
{% data variables.location.product_location %}의 보안을 강화하려면 엔터프라이즈 구성원에 대한 인증을 구성하고, 도구 및 감사 로깅을 사용하여 규정 준수 상태를 유지하고, 조직에 대한 보안 및 분석 기능을 구성하고, 필요에 따라 {% data variables.product.prodname_GH_advanced_security %}를 사용하도록 설정할 수 있습니다.
### 1. 엔터프라이즈 멤버 인증
{% data variables.product.product_name %}의 기본 제공 인증 방법을 사용하거나 CAS, LDAP 또는 SAML과 같은 외부 인증 공급자 중에서 선택하여 기존 계정을 통합하고 {% data variables.location.product_location %}에 대한 사용자 액세스를 중앙에서 관리할 수 있습니다. 자세한 내용은 “[엔터프라이즈 인증 정보](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)”를 참조하세요.

각 조직에서 2단계 인증을 요구할 수도 있습니다. 자세한 내용은 “[조직에서 2단계 인증 요구](/admin/user-management/managing-organizations-in-your-enterprise/requiring-two-factor-authentication-for-an-organization)”를 참조하세요.

### 2. 규정 준수 유지
필요한 상태 검사를 구현하고 확인을 커밋하여 조직의 규정 준수 표준을 적용하고 규정 준수 워크플로를 자동화할 수 있습니다. 조직의 감사 로그를 사용하여 팀에서 수행한 작업을 검토할 수도 있습니다. 자세한 내용은 “[사전 수신 후크를 사용하여 정책 적용](/admin/policies/enforcing-policy-with-pre-receive-hooks)” 및 “[엔터프라이즈의 감사 로그 정보](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)”를 참조하세요.

{% ifversion ghes %}
### 3. 조직의 보안 기능 구성
{% data reusables.getting-started.configuring-security-features %} {% endif %}

{% ifversion ghes %}
### 4. {% data variables.product.prodname_GH_advanced_security %} 기능 사용
{% data variables.product.prodname_GH_advanced_security %}를 포함하도록 {% data variables.product.product_name %} 라이선스를 업그레이드할 수 있습니다. 이러게 하면 코드에서 보안 문제를 찾고 해결하는 데 도움이 되는 코드 및 비밀 검사와 같은 추가 기능이 제공됩니다. 자세한 내용은 “[엔터프라이즈용 {% data variables.product.prodname_GH_advanced_security %}](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)”를 참조하세요.
{% endif %}

## 4부: {% data variables.product.prodname_dotcom %}에서 엔터프라이즈의 작업 사용자 지정 및 자동화
{% data variables.product.prodname_dotcom %} 및 {% data variables.product.prodname_oauth_apps %}, {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API, {% data variables.product.prodname_actions %}, {% data variables.product.prodname_registry %}, {% data variables.product.prodname_pages %}를 사용하여 엔터프라이즈의 조직에서 작업을 사용자 지정하고 자동화할 수 있습니다.

### 1. {% data variables.product.prodname_github_apps %} 및 {% data variables.product.prodname_oauth_apps %} 빌드
엔터프라이즈의 조직에서 워크플로를 보완하고 확장하는 데 사용하기 위해 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API(예: {% data variables.product.prodname_github_apps %} 또는 {% data variables.product.prodname_oauth_apps %})를 사용하여 통합을 빌드할 수 있습니다. 자세한 내용은 “[앱 정보](/developers/apps/getting-started-with-apps/about-apps)”를 참조하세요.
### 2. {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 사용
{% data reusables.getting-started.api %}

{% ifversion ghes %}
### 3. {% data variables.product.prodname_actions %} 빌드
{% data reusables.getting-started.actions %}

{% data variables.product.product_name %}에서 {% data variables.product.prodname_actions %}를 사용하도록 설정하고 구성하는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_ghe_server %}용 {% data variables.product.prodname_actions %} 시작](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)”을 참조하세요.

### 4. {% data variables.product.prodname_registry %} 게시 및 관리 
{% data reusables.getting-started.packages %}

{% data variables.location.product_location %}에 대한 {% data variables.product.prodname_registry %}를 사용하도록 설정하고 구성하는 방법에 대한 자세한 내용은 "[엔터프라이즈에 대한 {% 데이터 variables.product.prodname_registry %} 시작](/admin/packages/getting-started-with-github-packages-for-your-enterprise)"을 참조하세요.
{% endif %}

### 5. {% data variables.product.prodname_pages %} 사용
{% data reusables.getting-started.github-pages-enterprise %}

## 5부: 다른 {% data variables.product.prodname_dotcom %} 리소스와 연결
{% data variables.product.prodname_github_connect %}를 사용하여 리소스를 공유할 수 있습니다.

{% data variables.product.product_name %} 인스턴스와 {% data variables.product.prodname_ghe_cloud %} 조직 또는 엔터프라이즈 계정의 소유자인 경우 {% data variables.product.prodname_github_connect %}를 사용하도록 설정할 수 있습니다. {% data variables.product.prodname_github_connect %}를 사용하면 {% data variables.location.product_location %}과 {% data variables.product.prodname_ghe_cloud %}(예: 통합 검색 및 기여) 간에 특정 워크플로 및 기능을 공유할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_cloud %}에 {% data variables.product.prodname_ghe_server %} 연결](/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud)”을 참조하세요.

## 6부: {% data variables.product.prodname_dotcom %}의 학습 및 지원 리소스 사용
엔터프라이즈 구성원은 학습 리소스를 사용하여 Git 및 {% data variables.product.prodname_dotcom %}에 대해 자세히 알아볼 수 있으며, {% data variables.product.prodname_dotcom %} 엔터프라이즈 지원을 사용하여 {% data variables.location.product_location %}을(를) 설정하고 관리할 때 필요한 지원을 받을 수 있습니다.

### 1. {% data variables.product.prodname_docs %}에서 {% data variables.product.product_name %}에 대해 읽기

{% data variables.product.prodname_ghe_server %}에서 사용할 수 있는 기능을 반영하는 설명서를 읽을 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_docs %} 버전 정보](/get-started/learning-about-github/about-versions-of-github-docs)”를 참조하세요.

{% data reusables.enterprise.best-practices %}

### 2. {% data variables.product.prodname_learning %}을 사용하여 학습
{% data reusables.getting-started.learning-enterprise %}

### 3. {% data variables.product.prodname_dotcom %} 엔터프라이즈 지원 사용
{% data reusables.getting-started.contact-support-enterprise %}
