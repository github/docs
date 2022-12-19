---
title: Types of GitHub accounts(GitHub 계정 유형)
intro: '{% data variables.product.product_name %}의 계정을 사용하면 코드에 대한 액세스를 구성하고 제어할 수 있습니다.'
redirect_from:
  - /manage-multiple-clients
  - /managing-clients
  - /articles/what-s-the-difference-between-user-and-organization-accounts
  - /articles/differences-between-user-and-organization-accounts
  - /articles/types-of-github-accounts
  - /github/getting-started-with-github/types-of-github-accounts
  - /github/getting-started-with-github/learning-about-github/types-of-github-accounts
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
ms.openlocfilehash: 7f5a7357d13e010f5cacfca60d2b25ee98b0ea72
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099093'
---
## {% data variables.product.product_name %}의 계정 정보

{% data variables.product.product_name %}를 사용하면 코드를 저장하고 협업할 수 있습니다. 계정을 사용하여 해당 코드에 대한 액세스를 구성하고 제어할 수 있습니다. {% data variables.product.product_name %}에는 세 가지 유형의 계정이 있습니다.
- 개인 계정
- 조직 계정
- 엔터프라이즈 계정

{% data variables.product.product_name %}를 사용하는 모든 사용자는 개인 계정에 로그인합니다. 조직 계정은 여러 개인 계정 간의 공동 작업을 향상시키고, {% ifversion fpt 또는 ghec %}엔터프라이즈 계정{% else %}{% 데이터 variables.location.product_location %}{% endif %}에 대한 엔터프라이즈 계정은 여러 조직의 중앙 관리를 허용합니다.

## 개인 계정

{% 데이터 variables.location.product_location %}을(를) 사용하는 모든 사용자는 개인 계정에 로그인합니다. 개인 계정은 {% 데이터 variables.location.product_location %}의 ID이며 사용자 이름과 프로필이 있습니다. 예를 들어 [@octocat의 프로필](https://github.com/octocat)을 참조하세요.

개인 계정은 리포지토리, 패키지, 프로젝트와 같은 리소스를 소유할 수 있습니다. 문제 만들기 또는 끌어오기 요청 검토와 같은 {% 데이터 variables.location.product_location %}에 대한 작업을 수행할 때마다 작업은 개인 계정에 기인합니다.

{% ifversion fpt or ghec %}각 개인 계정은 {% data variables.product.prodname_free_user %} 또는 {% data variables.product.prodname_pro %}를 사용합니다. 모든 개인 계정은 무제한 퍼블릭 및 프라이빗 리포지토리를 소유할 수 있으며, 해당 리포지토리에는 무제한 협력자가 있습니다. {% data variables.product.prodname_free_user %}를 사용하는 경우 개인 계정이 소유한 프라이빗 리포지토리에는 제한된 기능 집합이 있습니다. {% data variables.product.prodname_pro %}로 업그레이드하면 프라이빗 리포지토리에 대한 전체 기능 집합을 얻을 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 제품](/articles/githubs-products)”을 참조하세요. {% else %}개인 계정이 소유한 리포지토리를 개수 제한 없이 만들 수 있으며, 해당 리포지토리에는 무제한 협력자가 있습니다.{% endif %}

{% tip %}

**팁**: 개인 계정은 사용자용이지만 계정을 만들어 {% data variables.product.product_name %}에서 작업을 자동화할 수 있습니다. 이 유형의 계정을 머신 사용자라고 합니다. 예를 들어 머신 사용자 계정을 만들어 CI(연속 통합) 워크플로를 자동화할 수 있습니다.

{% endtip %}

{% ifversion fpt or ghec %} 대부분의 사용자는 오픈 소스 프로젝트와 유급 고용을 포함하여 {% data variables.product.prodname_dotcom_the_website %}에서의 모든 작업에 하나의 개인 계정을 사용합니다. 현재 직접 만든 개인 계정을 둘 이상 사용하는 경우 계정을 결합하는 것이 좋습니다. 자세한 내용은 “[여러 개인 계정 병합](/articles/merging-multiple-user-accounts)”을 참조하세요.
{% endif %}

## 조직 계정

조직은 무제한 사용자가 한 번에 여러 프로젝트에서 협업할 수 있는 공유 계정입니다. 

개인 계정과 마찬가지로, 조직은 리포지토리, 패키지, 프로젝트와 같은 리소스를 소유할 수 있습니다. 그러나 조직에 로그인할 수는 없습니다. 각 사용자는 대신 개인 계정에 로그인하며, 사용자가 조직 리소스에 대해 수행하는 모든 작업은 개인 계정에 귀속됩니다. 각 개인 계정은 여러 조직의 멤버가 될 수 있습니다.

조직 내의 개인 계정에 조직의 다양한 역할을 지정할 수 있으며, 역할에 따라 조직 및 해당 데이터에 대한 다른 수준의 액세스 권한이 부여됩니다. 모든 멤버는 리포지토리 및 프로젝트에서 서로 협업할 수 있지만 조직 소유자 및 보안 관리자만 조직의 설정을 관리하고 정교한 보안 및 관리 기능을 사용하여 조직의 데이터에 대한 액세스를 제어할 수 있습니다. 자세한 내용은 “[조직의 역할](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)” 및 “[조직 보안 유지](/organizations/keeping-your-organization-secure)”를 참조하세요.

![사용자가 조직의 리소스에 액세스하기 위해 개인 계정에 로그인해야 함을 보여 주는 다이어그램](/assets/images/help/overview/sign-in-pattern.png)

{% ifversion fpt or ghec %} SAML Single Sign-On을 사용하는 조직의 멤버인 경우에도 {% data variables.product.prodname_dotcom_the_website %}에서 사용자 고유의 개인 계정에 로그인하며, 개인 계정은 조직 IdP(ID 공급자)의 ID에 연결됩니다. 자세한 내용은 “[SAML Single Sign-On을 사용한 인증 정보](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on){% ifversion fpt %}”를 참조하세요({% data variables.product.prodname_ghe_cloud %} 설명서).{% else %}”를 참조하세요.{% endif %}

그러나 사용자가 만든 개인 계정을 사용하는 대신 {% data variables.product.prodname_emus %}를 사용하는 엔터프라이즈의 멤버인 경우 엔터프라이즈의 IdP가 새 계정을 프로비저닝합니다. 엔터프라이즈가 소유한 조직에 액세스하려면 {% data variables.product.prodname_dotcom_the_website %} 사용자 이름 및 암호 대신 해당 IdP를 사용하여 인증해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_emus %} 정보](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users){% ifversion fpt %}”를 참조하세요({% data variables.product.prodname_ghe_cloud %} 설명서).{% else %}”를 참조하세요.{% endif %} {% endif %}

그룹의 구조를 반영하고 액세스 관리를 간소화하기 위해 팀이라는 조직 멤버의 중첩된 하위 그룹을 만들 수도 있습니다. 자세한 내용은 “[팀 정보](/organizations/organizing-members-into-teams/about-teams)”를 참조하세요.

{% data reusables.organizations.organization-plans %}

조직의 모든 기능에 대한 자세한 내용은 “[조직 정보](/organizations/collaborating-with-groups-in-organizations/about-organizations)”를 참조하세요.

## 엔터프라이즈 계정

{% ifversion fpt %} {% data variables.product.prodname_ghe_cloud %} 및 {% data variables.product.prodname_ghe_server %}에는 관리자가 여러 조직에 대한 정책 및 청구를 중앙에서 관리하고 조직 간의 내부 소싱을 사용하도록 설정할 수 있게 해주는 엔터프라이즈 계정이 포함되어 있습니다. 자세한 내용은 {% data variables.product.prodname_ghe_cloud %} 설명서에서 “[엔터프라이즈 계정 정보](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts)”를 참조하세요.
{% elsif ghec %} 엔터프라이즈 계정은 여러 조직에 대한 중앙 정책 관리 및 청구를 허용합니다. 엔터프라이즈 계정을 사용하여 정책 및 청구를 중앙에서 관리할 수 있습니다. 조직과 달리 엔터프라이즈 계정은 리포지토리, 패키지 또는 프로젝트와 같은 리소스를 직접 소유할 수 없습니다. 해당 리소스는 엔터프라이즈 계정 내의 조직이 대신 소유합니다. 자세한 내용은 “[엔터프라이즈 계정 정보](/admin/overview/about-enterprise-accounts)”를 참조하세요.
{% elsif ghes 또는 ghae %} 엔터프라이즈 계정은 {% endif %} {% data variables.location.product_location %}에서{% elsif ghes %}가 소유한 모든 조직 {% ifversion ghae %}의 컬렉션입니다. 엔터프라이즈 계정을 사용하여 정책 및 청구를 중앙에서 관리할 수 있습니다. 조직과 달리 엔터프라이즈 계정은 리포지토리, 패키지 또는 프로젝트와 같은 리소스를 직접 소유할 수 없습니다. 해당 리소스는 엔터프라이즈 계정 내의 조직이 대신 소유합니다. 자세한 내용은 “[엔터프라이즈 계정 정보](/admin/overview/about-enterprise-accounts)”를 참조하세요.
{% endif %}

## 추가 참고 자료

{% ifversion fpt or ghec %}
- “[새 {% data variables.product.prodname_dotcom %} 계정 등록](/articles/signing-up-for-a-new-github-account)”{% endif %}
- “[새 조직 계정 만들기](/articles/creating-a-new-organization-account)”
- {% data variables.product.company_short %} 리소스의 [성공적인 협업을 위한 사용자 구성](https://vimeo.com/333786093) 비디오
