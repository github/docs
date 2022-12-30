---
title: 앱 목록 초안 작성
intro: '사용자가 {% data variables.product.prodname_marketplace %} 목록을 만들면 GitHub는 승인을 위해 앱을 제출할 때까지 초안 모드로 저장합니다. 목록에는 고객이 앱을 사용하는 방법이 표시됩니다.'
redirect_from:
  - /apps/adding-integrations/listing-apps-on-github-marketplace/listing-an-app-on-github-marketplace
  - /apps/marketplace/listing-apps-on-github-marketplace/listing-an-app-on-github-marketplace
  - /apps/marketplace/getting-started-with-github-marketplace-listings/listing-an-app-on-github-marketplace
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/listing-an-app-on-github-marketplace
  - /apps/adding-integrations/managing-listings-on-github-marketplace/removing-a-listing-from-github-marketplace
  - /apps/marketplace/managing-github-marketplace-listings/removing-a-listing-from-github-marketplace
  - /apps/adding-integrations/managing-listings-on-github-marketplace/editing-a-github-marketplace-listing
  - /apps/marketplace/managing-github-marketplace-listings/editing-a-github-marketplace-listing
  - /apps/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing
  - /marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing
  - /developers/github-marketplace/drafting-a-listing-for-your-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Draft an app listing
ms.openlocfilehash: 9dccf5486c446c5cdd9dbef4d36650340116e044
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089694'
---
## 새로운 {% data variables.product.prodname_marketplace %} 목록 초안을 만듭니다.

공개 앱에 대한 초안 목록만 만들 수 있습니다. 초안 목록을 만들기 전에 {% data variables.product.prodname_marketplace %} 목록에서 설정을 작성하고 구성하기 위한 다음 지침을 읽을 수 있습니다.

* [{% data variables.product.prodname_marketplace %} 목록 설명 작성](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)
* [{% data variables.product.prodname_marketplace %} 목록의 가격 책정 플랜 설정](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)
* [{% data variables.product.prodname_marketplace %} 웹후크 구성](/marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook/)

{% data variables.product.prodname_marketplace %} 목록을 만들려면 다음을 수행합니다.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %}
3. 왼쪽 사이드바에서 {% data variables.product.prodname_marketplace %}에 추가하는 앱에 따라 **OAuth Apps**(OAuth 앱) 또는 **GitHub Apps**(GitHub 앱)을 클릭합니다.

  {% note %}

  **참고**: https://github.com/marketplace/new 를 탐색하고, 사용 가능한 앱을 확인하고, **초안 목록 만들기** 를 클릭하여 목록을 추가할 수도 있습니다.

  {% endnote %}

  ![앱 유형 선택](/assets/images/settings/apps_choose_app.png)

4. {% data variables.product.prodname_marketplace %}에 추가하려는 앱을 선택합니다.
![{% data variables.product.prodname_marketplace %} 목록에 대한 앱 선택](/assets/images/github-apps/github_apps_select-app.png) {% data reusables.user-settings.edit_marketplace_listing %}
5. 새 초안 목록을 만들었으면 {% data variables.product.prodname_marketplace %} 목록이 완료되기 전에 방문해야 하는 섹션의 개요가 표시됩니다.
![GitHub Marketplace 목록](/assets/images/marketplace/marketplace_listing_overview.png)


{% note %}

**참고:** 목록의 “연락처 정보” 섹션에서는 support@domain.com과 같은 그룹 이메일 주소 대신 개별 이메일 주소를 사용하는 것이 좋습니다. GitHub에서는 이러한 이메일 주소를 사용하여 목록, 새 기능 릴리스, 마케팅 기회, 지급, 회의 및 스폰서쉽에 대한 정보에 영향을 줄 수 있는 {% data variables.product.prodname_marketplace %}의 업데이트에 대해 문의합니다.

{% endnote %}

## 목록 편집

{% data variables.product.prodname_marketplace %} 초안 목록을 만든 후에는 언제든지 목록에 있는 정보를 수정하기 위해 돌아올 수 있습니다. 앱이 이미 승인되었으며 {% data variables.product.prodname_marketplace %}에서 목록의 정보 및 이미지를 편집할 수 있지만 게시된 기존 가격 책정 플랜은 변경할 수 없습니다. “[{% data variables.product.prodname_marketplace %} 목록의 가격 책정 플랜 설정](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)”을 참조하세요.

## 앱 제출

{% data variables.product.prodname_marketplace %} 목록을 완료하면 **개요** 페이지에서 검토를 위해 목록을 제출할 수 있습니다. “[{% data variables.product.prodname_marketplace %} 개발자 계약](/free-pro-team@latest/github/site-policy/github-marketplace-developer-agreement/)”을 읽고 동의한 다음 **검토를 위해 제출** 을 클릭할 수 있습니다. 검토를 위해 앱을 제출하면 온보딩 전문가가 온보딩 프로세스에 대한 추가 정보를 문의합니다.

## {% data variables.product.prodname_marketplace %} 목록 제거

{% data variables.product.prodname_marketplace %}에 더 이상 앱을 나열하지 않으려면 {% data variables.contact.contact_support %}에 문의하여 목록을 제거합니다.
