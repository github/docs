---
title: GitHub AE 시작
intro: '{% data variables.location.product_location %}에 대한 {% data variables.product.product_name %} 설정 및 구성을 시작합니다.'
versions:
  ghae: '*'
ms.openlocfilehash: 957a922a2493abd8f625cdb9e9d6650283820222
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180063'
---
이 가이드에서는 엔터프라이즈 소유자로 {% data variables.product.product_name %}에서 {% data variables.location.product_location %}에 대한 설정 설정, 구성 및 관리를 안내합니다. {% data variables.product.product_name %}에 대한 자세한 내용은 “[{% data variables.product.prodname_ghe_managed %} 정보](/admin/overview/about-github-ae)”를 참조하세요.

## 1부: {% data variables.product.product_name %} 설정
{% data variables.product.product_name %}을(를) 시작하려면 엔터프라이즈 계정을 만들고, {% data variables.product.product_name %}을(를) 초기화하고, IP 허용 목록을 구성하고, 사용자 인증 및 프로비저닝을 구성하고, {% data variables.location.product_location %}에 대한 청구를 관리할 수 있습니다.

### 1. {% data variables.product.product_name %} 엔터프라이즈 계정 만들기
먼저 {% data variables.product.product_name %}를 구매해야 합니다. 자세한 내용은 [{% data variables.product.prodname_dotcom %}의 영업 팀](https://enterprise.github.com/contact)에 문의하세요.

{% data reusables.github-ae.initialize-enterprise %}

### 2. {% data variables.product.product_name %} 초기화
{% data variables.product.company_short %}이(가) {% data variables.product.product_name %}에서 {% data variables.location.product_location %}에 대한 소유자 계정을 만든 후 로그인하고 초기화를 완료하는 이메일을 받게 됩니다. 초기화 중에 엔터프라이즈 소유자로서 {% data variables.location.product_location %}의 이름을 지정하고, SAML SSO를 구성하고, {% data variables.location.product_location %}의 모든 조직에 대한 정책을 만들고, 엔터프라이즈 구성원에 대한 지원 연락처를 구성합니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_managed %} 초기화](/admin/configuration/configuring-your-enterprise/initializing-github-ae)”를 참조하세요.

### 3. 네트워크 트래픽 제한
특정 IP 주소의 허용 목록을 구성하여 엔터프라이즈 계정의 조직이 소유한 자산에 대한 액세스를 제한할 수 있습니다. 자세한 내용은 "[IP 허용 목록을 사용하여 엔터프라이즈로 네트워크 트래픽 제한"을 참조하세요](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list).

### 4. {% data variables.location.product_location %}에 대한 ID 및 액세스 관리
사용자 인증을 위한 SAML SSO(Single Sign-On)와 사용자 프로비저닝을 위한 SCIM(도메인 간 ID 관리)을 사용하여 ID 공급자(IdP)에서 {% data variables.product.product_name %}의 {% data variables.location.product_location %}에 대한 액세스를 중앙에서 관리할 수 있습니다. 프로비저닝을 구성한 후에는 IdP에서 애플리케이션에 사용자를 할당하거나 할당을 취소하여 엔터프라이즈에서 사용자 계정을 만들거나 사용하지 않도록 설정할 수 있습니다. 자세한 내용은 “[엔터프라이즈의 ID 및 액세스 관리 정보](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)”를 참조하세요.

### 5. {% data variables.location.product_location %}에 대한 청구 관리
{% data variables.product.product_name %}의 {% data variables.location.product_location %}에 대한 구독 소유자는 Azure Portal {% data variables.product.product_name %}에 대한 청구 세부 정보를 볼 수 있습니다. 자세한 내용은 “[엔터프라이즈에 대한 청구 관리](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)”를 참조하세요.

## 2부: 엔터프라이즈 멤버 구성 및 관리
{% data variables.product.product_name %}의 엔터프라이즈 소유자는 사용자, 리포지토리, 팀, 조직 수준에서 설정을 관리할 수 있습니다. {% data variables.location.product_location %}의 구성원을 관리하고, 조직을 만들고 관리하고, 리포지토리 관리에 대한 정책을 설정하고, 팀을 만들고 관리할 수 있습니다.

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
{% data variables.location.product_location %}의 보안을 강화하려면 {% data variables.location.product_location %}을(를) 모니터링하고 조직에 대한 보안 및 분석 기능을 구성할 수 있습니다.

### 1. {% data variables.location.product_location %} 모니터링
활동 대시보드 및 감사 로깅을 사용하여 {% 데이터 variables.location.product_location %}을(를) 모니터링할 수 있습니다. 자세한 내용은 “[엔터프라이즈의 작업 모니터링](/admin/monitoring-activity-in-your-enterprise)”을 참조하세요.

### 2. 조직의 보안 기능 구성
{% data reusables.getting-started.configuring-security-features %}

## 4부: {% data variables.location.product_location %}에서 작업 사용자 지정 및 자동화
{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API, {% data variables.product.prodname_actions %}, {% data variables.product.prodname_pages %}를 사용하여 {% data variables.location.product_location %}의 조직에서 작업을 사용자 지정하고 자동화할 수 있습니다.

### 1. {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 사용
{% data reusables.getting-started.api %}

### 2. {% data variables.product.prodname_actions %} 빌드
{% data reusables.getting-started.actions %}

{% data variables.product.product_name %}용 {% data variables.product.prodname_actions %}를 사용하도록 설정하고 구성하는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_ghe_managed %}용 {% data variables.product.prodname_actions %} 시작](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae)”을 참조하세요.

### 3. {% data variables.product.prodname_pages %} 사용
{% data reusables.getting-started.github-pages-enterprise %}
## 5부: {% data variables.product.prodname_dotcom %}의 학습 및 지원 리소스 사용
엔터프라이즈 멤버는 학습 리소스를 사용하여 Git 및 {% data variables.product.prodname_dotcom %}에 대해 자세히 알아볼 수 있으며, {% data variables.product.prodname_dotcom %} 엔터프라이즈 지원을 통해 필요한 지원을 받을 수 있습니다.

### 1. {% data variables.product.prodname_docs %}에서 {% data variables.product.product_name %}에 대해 읽기
{% data variables.product.prodname_ghe_managed %}에서 사용할 수 있는 기능을 반영하는 설명서를 읽을 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_docs %} 버전 정보](/get-started/learning-about-github/about-versions-of-github-docs)”를 참조하세요.

### 2. {% data variables.product.prodname_learning %}을 사용하여 학습
{% data reusables.getting-started.learning-enterprise %}

### 3. {% data variables.product.prodname_dotcom %} 엔터프라이즈 지원 사용
{% data reusables.getting-started.contact-support-enterprise %}
