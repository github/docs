---
title: GitHub의 제품
intro: '{% data variables.product.prodname_dotcom %}의 제품 및 가격 책정 계획에 대한 개요입니다.'
redirect_from:
  - /articles/github-s-products
  - /articles/githubs-products
  - /github/getting-started-with-github/githubs-products
  - /github/getting-started-with-github/learning-about-github/githubs-products
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - CLI
  - Mobile
  - Desktop
  - Security
ms.openlocfilehash: e2965befe319637296361e270646cd331478ae44
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160041'
---
## {% data variables.product.prodname_dotcom %} 제품 정보

{% data variables.product.prodname_dotcom %}는 코드를 저장하고 협업하기 위한 무료 및 유료 제품을 제공합니다. 일부 제품은 개인 계정에만 적용되고, 다른 플랜은 조직 및 엔터프라이즈 계정에만 적용됩니다. 계정에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 계정 유형](/get-started/learning-about-github/types-of-github-accounts)”을 참조하세요.

<{% data variables.product.pricing_url %}>에서 각 제품의 가격과 전체 기능 목록을 볼 수 있습니다. {% data reusables.products.product-roadmap %}

{% data variables.product.prodname_docs %}를 읽는 경우 제품을 반영하는 버전을 선택해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_docs %} 버전 정보](/get-started/learning-about-github/about-versions-of-github-docs)”를 참조하세요.

## 개인 계정용 {% data variables.product.prodname_free_user %}

개인 계정용 {% data variables.product.prodname_free_team %}을 사용하면 전체 기능 집합이 있는 무제한 퍼블릭 리포지토리 및 제한된 기능 집합이 있는 무제한 프라이빗 리포지토리에서 무제한 협력자와 함께 작업할 수 있습니다.

{% data variables.product.prodname_free_user %}를 사용하면 개인 계정에 다음이 포함됩니다.
- {% data variables.product.prodname_gcf %}
- {% data variables.product.prodname_dependabot_alerts %}
- 2단계 인증 적용
- 매월 2,000 {% 데이터 variables.product.prodname_actions %} 분 
- 500MB {% data variables.product.prodname_registry %} 스토리지 {% ifversion fpt or ghec%}
- 매월 120 {% 데이터 variables.product.prodname_github_codespaces %} 코어 시간
- 매월 15GB {% 데이터 variables.product.prodname_github_codespaces %} 스토리지 {% endif %}

## {% data variables.product.prodname_pro %}

개인 계정용 {% data variables.product.prodname_free_user %}에서 사용할 수 있는 기능 외에, {% data variables.product.prodname_pro %}에는 다음도 포함됩니다.
- 메일을 통한 {% data variables.contact.github_support %}
- 매월 3,000 {% 데이터 variables.product.prodname_actions %} 분 
- 2GB {% data variables.product.prodname_registry %} 스토리지 {% ifversion fpt or ghec%}
- 매월 180 {% 데이터 variables.product.prodname_github_codespaces %} 코어 시간
- 매월 20GB {% 데이터 variables.product.prodname_github_codespaces %} 스토리지 {% endif %}
- 프라이빗 리포지토리의 고급 도구 및 인사이트:
  - 끌어오기 요청 검토자 필요
  - 여러 끌어오기 요청 검토자
  - 보호된 분기
  - 코드 소유자
  - 자동 연결된 참조
  - {% data variables.product.prodname_pages %}
  - Wikis
  - 리포지토리 인사이트 그래프: Pulse, 기여자, 트래픽, 커밋, 코드 빈도, 네트워크, 포크

## 조직용 {% data variables.product.prodname_free_team %}

조직용 {% data variables.product.prodname_free_team %}을 사용하면 전체 기능 집합이 있는 무제한 퍼블릭 리포지토리 또는 제한된 기능 집합이 있는 무제한 프라이빗 리포지토리에서 무제한 협력자와 함께 작업할 수 있습니다.

개인 계정용 {% data variables.product.prodname_free_user %}에서 사용할 수 있는 기능 외에, 조직용 {% data variables.product.prodname_free_team %}에는 다음도 포함됩니다.
- {% data variables.product.prodname_gcf %}
- 팀 토론
- 그룹 관리를 위한 팀 액세스 제어
- 매월 2,000 {% 데이터 variables.product.prodname_actions %} 분 
- 500MB {% data variables.product.prodname_registry %} 스토리지 

## {% data variables.product.prodname_team %}

조직용 {% data variables.product.prodname_free_team %}에서 사용할 수 있는 기능 외에도 {% data variables.product.prodname_team %}에는 다음이 포함됩니다.
- 메일을 통한 {% data variables.contact.github_support %}
- 매월 3,000 {% 데이터 variables.product.prodname_actions %} 분 
- 2GB {% data variables.product.prodname_registry %} 스토리지 
- 프라이빗 리포지토리의 고급 도구 및 인사이트:
  - 끌어오기 요청 검토자 필요
  - 여러 끌어오기 요청 검토자
  - 초안 끌어오기 요청
  - 팀 끌어오기 요청 검토자
  - 보호된 분기
  - 코드 소유자
  - 예약된 미리 알림
  - {% data variables.product.prodname_pages %}
  - Wikis
  - 리포지토리 인사이트 그래프: Pulse, 기여자, 트래픽, 커밋, 코드 빈도, 네트워크, 포크 {%- ifversion fpt or ghec %}
- {% data variables.product.prodname_github_codespaces %}를 사용하도록 설정하는 옵션
  - 조직 소유자는 지출 한도를 설정하고 조직 멤버에게 사용자 권한을 부여하여 조직에서 {% data variables.product.prodname_github_codespaces %}를 사용하도록 설정할 수 있습니다. 자세한 내용은 “[조직에 {% data variables.product.prodname_github_codespaces %} 사용](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)”을 참조하세요.
{%- endif %}

{% data variables.product.company_short %}는 사용자 단위로 {% data variables.product.prodname_team %}에 대한 요금을 청구합니다. 자세한 내용은 “[사용자 단위 가격 정보]({% ifversion not fpt %}/free-pro-team@latest{% endif %}/billing/managing-billing-for-your-github-account/about-per-user-pricing){% ifversion fpt %}”를 참조하세요.{% else %}”를 참조하세요(Free, Pro, Team 설명서).{% endif %}

{% data reusables.actions.actions-billing %}

## {% data variables.product.prodname_enterprise %}

{% data variables.product.prodname_enterprise %}에는 클라우드 호스팅 및 자체 호스팅이라는 두 가지 배포 옵션이 포함되어 있습니다. 

{% data variables.product.prodname_team %}에서 사용할 수 있는 기능 외에도 {% data variables.product.prodname_enterprise %}에는 다음이 포함됩니다.
- {% data variables.contact.enterprise_support %}
- 추가 보안, 규정 준수, 배포 제어
- SAML Single Sign-On을 사용한 인증
- SAML 또는 SCIM을 사용한 액세스 프로비저닝
- {% data variables.product.prodname_github_connect %}
- {% data variables.product.prodname_GH_advanced_security %} 구매 옵션. 자세한 내용은 “[{% data variables.product.prodname_GH_advanced_security %} 정보](/github/getting-started-with-github/about-github-advanced-security)”를 참조하세요.

{% data variables.product.prodname_ghe_cloud %}에는 다음도 포함됩니다.
- {% data variables.contact.enterprise_support %}. 자세한 내용은 “<a href="/articles/github-enterprise-cloud-support" class="dotcom-only">{% data variables.product.prodname_ghe_cloud %} 지원</a>” 및 “<a href="/articles/github-enterprise-cloud-addendum" class="dotcom-only">{% data variables.product.prodname_ghe_cloud %} 부록</a>”을 참조하세요.
- 매월 50,000 {% 데이터 variables.product.prodname_actions %} 분 
- 50GB {% data variables.product.prodname_registry %} 스토리지 
- {% data variables.product.prodname_pages %} 사이트에 대한 액세스 제어. 자세한 내용은 “[{% data variables.product.prodname_pages %} 사이트의 표시 유형 변경](/enterprise-cloud@latest/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)”을 참조하세요.
- 99.9% 월간 작동 시간의 서비스 수준 약정
- ID 공급자를 사용하여 멤버를 프로비저닝 및 관리하고 멤버의 기여를 엔터프라이즈로만 제한할 수 있도록 {% data variables.product.prodname_emus %}에 대해 엔터프라이즈를 구성하는 옵션입니다. 자세한 내용은 “[{% data variables.product.prodname_emus %} 정보](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)”를 참조하세요.
- 엔터프라이즈 계정을 사용하여 여러 {% data variables.product.prodname_dotcom_the_website %} 조직에 대한 정책 및 청구를 중앙에서 관리하는 옵션입니다. 자세한 내용은 “[엔터프라이즈 계정 정보](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts)”를 참조하세요.

{% data reusables.enterprise.about-github-for-enterprises %}

평가판을 설정하여 {% data variables.product.prodname_ghe_cloud %}를 평가할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_cloud %} 평가판 설정](/enterprise-cloud@latest/articles/setting-up-a-trial-of-github-enterprise-cloud)”을 참조하세요.

평가판 설정을 포함하여 {% data variables.product.prodname_ghe_server %}의 사용자 고유 인스턴스를 호스팅하는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_ghe_server %} 정보](/enterprise-server/admin/overview/about-github-enterprise-server)”를 참조하세요.

## 추가 참고 자료

- {% data variables.product.prodname_ghe_cloud %} 설명서의 “[사용자당 가격 책정 정보]({% ifversion not ghec %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/about-per-user-pricing)”{% ifversion not ghec %}”{% endif %}
