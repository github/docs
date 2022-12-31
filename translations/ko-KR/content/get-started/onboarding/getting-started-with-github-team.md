---
title: GitHub Team 시작
intro: '{% data variables.product.prodname_team %} 그룹의 사용자는 조직 계정에서 동시에 여러 프로젝트에서 협업할 수 있습니다.'
versions:
  fpt: '*'
ms.openlocfilehash: b3a99092f3b701b2763dbefacd5f60867fa18690
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099158'
---
이 가이드에서는 조직 소유자가 {% data variables.product.prodname_team %} 계정을 설정, 구성, 관리하는 방법을 안내합니다.

## 1부: {% 데이터 variables.location.product_location %}에서 계정 구성
{% data variables.product.prodname_team %}으로 시작하는 경우 첫 번째 단계로 개인 계정을 만들거나 {% data variables.product.prodname_dotcom %}에서 기존 계정에 로그인하고, 조직을 만들고, 청구를 설정해야 합니다.

### 1. 조직 정보
조직은 비즈니스와 오픈 소스 프로젝트가 한 번에 여러 프로젝트에서 협업할 수 있는 공유 계정입니다. 소유자 및 관리자는 정교한 보안 및 관리 기능을 사용하여 조직의 데이터와 프로젝트에 대한 멤버 액세스를 관리할 수 있습니다. 조직의 기능에 대한 자세한 내용은 “[조직 정보](/organizations/collaborating-with-groups-in-organizations/about-organizations#terms-of-service-and-data-protection-for-organizations)”를 참조하세요.

### 2. 조직 만들기 및 {% data variables.product.prodname_team %} 등록
조직을 만들기 전에 {% 데이터 variables.location.product_location %}에서 개인 계정을 만들거나 기존 계정에 로그인해야 합니다. 자세한 내용은 “[새 {% data variables.product.prodname_dotcom %} 계정 등록](/get-started/signing-up-for-github/signing-up-for-a-new-github-account)”을 참조하세요.

개인 계정이 설정되면 조직을 만들고 플랜을 선택할 수 있습니다. 여기에서 조직의 {% data variables.product.prodname_team %} 구독을 선택할 수 있습니다. 자세한 내용은 “[처음부터 새 조직 만들기](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)”를 참조하세요.

### 3. 조직에 대한 청구 관리
각 개인 계정 및 조직에 대한 청구 설정, 결제 방법, 유료 기능 및 제품을 개별적으로 관리해야 합니다. 설정에서 컨텍스트 전환기를 사용하여 여러 계정의 설정 간에 전환할 수 있습니다. 자세한 내용은 “[여러 계정의 설정 간 전환](/billing/managing-your-github-billing-settings/about-billing-on-github#switching-between-settings-for-your-different-accounts)”을 참조하세요.

조직의 청구 설정 페이지에서 결제 방법, 청구 주기, 청구 메일과 같은 설정을 관리하거나 구독, 청구 날짜, 결제 기록과 같은 정보를 볼 수 있습니다. 스토리지 및 GitHub Actions 시간(분)을 보고 업그레이드할 수도 있습니다. 청구 설정을 관리하는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 청구 설정 관리](/billing/managing-your-github-billing-settings)”를 참조하세요.

소유자 또는 청구 관리자 역할이 있는 조직 멤버만 조직에 대한 청구 설정에 액세스하거나 변경할 수 있습니다.  청구 관리자는 조직에 대한 청구 설정을 관리하고 조직 구독의 유료 라이선스를 사용하지 않는 사용자입니다. 조직에 청구 관리자를 추가하는 방법에 대한 자세한 내용은 “[조직에 청구 관리자 추가](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization)”를 참조하세요.


## 2부: 멤버 추가 및 팀 설정
조직을 만든 후 멤버를 초대하고 권한 및 역할을 설정할 수 있습니다. 다양한 수준의 팀을 만들고 조직의 리포지토리, 프로젝트 보드, 앱에 대한 사용자 지정 수준의 권한을 설정할 수도 있습니다.

### 1. 조직의 멤버 관리
{% data reusables.getting-started.managing-org-members %}

### 2. 조직 권한 및 역할
{% data reusables.getting-started.org-permissions-and-roles %}

### 3. 팀 정보 및 만들기
{% data reusables.getting-started.about-and-creating-teams %}
### 4. 팀 설정 관리
{% data reusables.getting-started.managing-team-settings %}

### 5. 사용자 및 팀에 리포지토리, 프로젝트 보드, 앱에 대한 액세스 권한 부여
{% data reusables.getting-started.giving-access-to-repositories-projects-apps %}
## 3부: 조직의 보안 관리
조직 멤버에게 2단계 인증을 권장하거나 요구하고, 보안 기능을 구성하고, 조직의 감사 로그 및 통합을 검토하여 조직을 더욱 안전하게 만들 수 있습니다.

### 1. 2단계 인증 요구
{% data reusables.getting-started.requiring-2fa %}

### 2. 조직의 보안 기능 구성
{% data reusables.getting-started.configuring-security-features %}

### 3. 조직의 감사 로그 및 통합 검토
{% data reusables.getting-started.reviewing-org-audit-log-and-integrations %}

## 4부: 조직 수준 정책 설정
### 1. 조직 정책 관리
{% data reusables.getting-started.managing-org-policies %}
### 2. 리포지토리 변경 내용 관리
{% data reusables.getting-started.managing-repo-changes %}
### 3. 조직 수준 커뮤니티 상태 파일 및 조정 도구 사용
{% data reusables.getting-started.using-org-community-files-and-moderation-tools %}
## 5부: {% data variables.product.product_name %}에서 작업 사용자 지정 및 자동화

{% data reusables.getting-started.customizing-and-automating %}
### 1. {% data variables.product.prodname_marketplace %} 사용
{% data reusables.getting-started.marketplace %}
### 2. {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 사용
{% data reusables.getting-started.api %}

### 3. {% data variables.product.prodname_actions %} 빌드
{% data reusables.getting-started.actions %}

### 4. {% data variables.product.prodname_registry %} 게시 및 관리 
{% data reusables.getting-started.packages %}

## 6부: {% data variables.product.prodname_dotcom %} 커뮤니티 참여
{% data reusables.getting-started.participating-in-community %}
### 1. 오픈 소스 프로젝트에 기여
{% data reusables.getting-started.open-source-projects %}

### 2. {% data variables.product.prodname_gcf %} 조작
{% data reusables.support.ask-and-answer-forum %}

### 3. {% data variables.product.prodname_docs %}에서 {% data variables.product.prodname_team %}에 대해 읽기
{% data variables.product.prodname_team %}에서 사용할 수 있는 기능을 반영하는 설명서를 읽을 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_docs %} 버전 정보](/get-started/learning-about-github/about-versions-of-github-docs)”를 참조하세요.

### 4. {% data variables.product.prodname_learning %}을 사용하여 학습
{% data reusables.getting-started.learning %}

### 5. 오픈 소스 커뮤니티 지원
{% data reusables.getting-started.sponsors %}

### 6. {% data variables.contact.github_support %}에 문의
{% data reusables.getting-started.contact-support %}
## 추가 참고 자료

- “[GitHub 계정 시작](/get-started/onboarding/getting-started-with-your-github-account)”
