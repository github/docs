---
title: GitHub Enterprise Cloud 평가판 설치
intro: '{% data variables.product.prodname_ghe_cloud %}를 무료로 체험해 볼 수 있습니다.'
redirect_from:
  - /articles/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Accounts
shortTitle: Enterprise Cloud trial
ms.openlocfilehash: a50aebc43ba5d674af132786ffb75e5fb3029aeb
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183990'
---
{% data reusables.enterprise.ghec-cta-button %}


## {% data variables.product.prodname_ghe_cloud %} 정보

{% data variables.product.prodname_ghe_cloud %}는 {% data variables.product.prodname_dotcom_the_website %}에서 협업하는 대기업 또는 팀을 위한 플랜입니다. {% data reusables.enterprise.about-github-for-enterprises %}

{% data reusables.organizations.about-organizations %} 계정에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 계정 유형](/get-started/learning-about-github/types-of-github-accounts)”을 참조하세요.

조직에서 {% data variables.product.prodname_free_team %}를 무료로 사용할 수 있지만 기능은 제한적입니다. SAML SSO(Single Sign-On), {% data variables.product.prodname_pages %}에 대한 액세스 제어, {% data variables.product.prodname_actions %} 시간(분) 포함과 같은 추가 기능을 사용하려면 {% data variables.product.prodname_ghe_cloud %}로 업그레이드할 수 있습니다. {% data variables.product.prodname_ghe_cloud %}에서 사용할 수 있는 기능에 대한 자세한 목록은 [가격 책정](https://github.com/pricing) 페이지를 참조하세요.

{% data variables.product.prodname_ghe_cloud %}의 평가판을 설치하여 새 조직 계정 또는 기존 조직 계정으로 이러한 추가 기능을 평가할 수 있습니다.

{% data variables.product.prodname_ghe_server %}용 평가판도 제공됩니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_server %} 평가판 설치](/articles/setting-up-a-trial-of-github-enterprise-server)”를 참조하세요.

{% data reusables.products.which-product-to-use %}

## {% data variables.product.prodname_ghe_cloud %}의 평가판 정보

30일 평가판을 설치하여 {% data variables.product.prodname_ghe_cloud %}를 평가할 수 있습니다. 결제 방법이 필요한 조직에 {% data variables.product.prodname_marketplace %} 앱을 추가하는 경우가 아니라면 평가판 사용 중에 결제 방법을 제공할 필요가 없습니다. 자세한 내용은 “[{% data variables.product.prodname_marketplace %}에 대한 청구 정보](/enterprise-cloud@latest/articles/about-billing-for-github-marketplace/)”를 참조하세요.

평가판에는 50명이 포함됩니다. {% data variables.product.prodname_ghe_cloud %}를 평가하기 위해 더 많은 사용자가 필요한 경우 {% data variables.contact.contact_enterprise_sales %}에 문의하세요. 평가판이 끝나면 사용자 수를 다르게 선택할 수 있습니다.

{% data reusables.saml.saml-accounts %}

자세한 내용은 {% data variables.product.prodname_ghe_cloud %} 설명서에서 “[SAML Single Sign-On을 통한 ID 및 액세스 관리 정보](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on){% ifversion not ghec %}”를 참조하세요.{% else %}.”{% endif %}

{% data variables.product.prodname_emus %}는 {% data variables.product.prodname_ghe_cloud %}의 평가판에 포함되지 않습니다. {% data variables.product.prodname_emus %}에 관심이 있는 경우 [{% data variables.product.prodname_dotcom %}의 영업 팀](https://enterprise.github.com/contact)에 문의하세요.

## {% data variables.product.prodname_ghe_cloud %} 평가판 설치

{% data variables.product.prodname_ghe_cloud %}를 체험해 보려면 먼저 개인 계정에 로그인해야 합니다. {% data variables.product.prodname_dotcom_the_website %}에 개인 계정이 아직 없는 경우 만들어야 합니다. 자세한 내용은 “[새 {% data variables.product.prodname_dotcom %} 계정 등록](/free-pro-team@latest/articles/signing-up-for-a-new-github-account)”을 참조하세요.

1. [엔터프라이즈용 {% data variables.product.prodname_dotcom %}](https://github.com/enterprise)로 이동합니다.
1. **Start a free trial**(평가판 시작)을 클릭합니다.
   ![“Start a free trial”(평가판 시작) 단추](/assets/images/help/organizations/start-a-free-trial-button.png)
1. **Enterprise Cloud**(엔터프라이즈 클라우드)를 클릭합니다.
   ![“Enterprise Cloud”(엔터프라이즈 클라우드) 버튼](/assets/images/help/organizations/enterprise-cloud-trial-option.png)
1. 프롬프트에 따라 평가판을 구성합니다.

## {% data variables.product.prodname_ghe_cloud %} 탐색

평가판을 설정한 후 조직의 “개요” 탭에서 제안된 작업을 수행하여 {% data variables.product.prodname_ghe_cloud %}를 탐색할 수 있습니다. 이전에 작업을 해제한 경우 페이지 맨 위에 **제안된 작업 시작** 을 클릭하여 다시 액세스할 수 있습니다.

![“제안된 작업 시작” 단추](/assets/images/help/organizations/suggested-tasks-button.png)

{% data reusables.docs.you-can-read-docs-for-your-product %}

{% data reusables.enterprise.best-practices %}

{% data reusables.products.product-roadmap %}

## 평가판 완료

평가판 중에 언제든지 {% data variables.product.prodname_enterprise %}를 구매할 수 있습니다. {% data variables.product.prodname_enterprise %}를 구매하면 평가판이 종료되고 최대 50명의 사용자가 제거되며 결제가 시작됩니다.

{% data variables.product.prodname_enterprise %}을(를) 구매하지 않으면 평가판은 30일 기간이 끝날 때까지 계속됩니다. 평가판을 일찍 종료할 수 없습니다. 평가판이 종료되면 조직이 다운그레이드됩니다. 기존 조직을 평가판에 사용한 경우 조직은 평가판 전에 사용하던 제품으로 다운그레이드됩니다. 평가판을 위해 새 조직을 만든 경우 조직은 {% data variables.product.prodname_free_team %}로 다운그레이드됩니다. 

조직은 프라이빗 리포지토리에 대한 {% data variables.product.prodname_pages %}과 같은 고급 기능과 같이 새 계획에 포함되지 않은 모든 기능에 액세스할 수 없게 됩니다. 업그레이드할 계획이 없는 경우 고급 기능에 대한 액세스가 손실되지 않도록 평가판이 끝나기 전에 영향을 받는 리포지토리를 공개하는 것이 좋습니다. 자세한 내용은 “[리포지토리 표시 여부 설정](/articles/setting-repository-visibility)”을 참조하세요.

또한 다운그레이드하면 평가 기간 동안 구성된 SAML 설정도 비활성화됩니다. 나중에 {% data variables.product.prodname_enterprise %}를 구매하면 조직의 사용자가 인증할 수 있도록 SAML 설정이 다시 활성화됩니다.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %}
5. “{% data variables.product.prodname_ghe_cloud %} Free Trial”에서 **Buy Enterprise**(Enterprise 구입) 또는 **Downgrade to Team**(Team으로 다운그레이드)을 클릭합니다.
  ![Buy Enterprise(Enterprise 구입) 및 Downgrade to Team(Team으로 다운그레이드) 단추](/assets/images/help/organizations/finish-trial-buttons.png)
6. 프롬프트에 따라 결제 방법을 입력한 다음 **Submit**(제출)을 클릭합니다.
