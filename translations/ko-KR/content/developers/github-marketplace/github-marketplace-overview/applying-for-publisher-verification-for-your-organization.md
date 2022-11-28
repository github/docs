---
title: 조직에 대한 게시자 확인 신청
intro: 앱에 대한 유료 플랜을 제공하거나 앱 목록에 마켓플레이스 배지를 포함하려면 조직에 대한 게시자 확인 프로세스를 완료해야 합니다.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
redirect_from:
  - /developers/github-marketplace/applying-for-publisher-verification-for-your-organization
shortTitle: Publisher verification
ms.openlocfilehash: 34085acb78eba5057cea382ab250e4704dd958d1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145089721'
---
게시자 확인을 통해 {% data variables.product.prodname_dotcom %}에서 사용자에게 연락할 수 있고, 조직에 대해 2단계 인증을 사용하도록 설정했으며, 조직의 도메인이 확인되었는지 확인할 수 있습니다.

조직이 확인되면 앱에 대한 유료 플랜을 게시할 수 있습니다. 자세한 내용은 “[목록에 대한 가격 책정 플랜 설정](/developers/github-marketplace/setting-pricing-plans-for-your-listing)”을 참조하세요.

앱에 대한 유료 플랜을 제공하려면 조직에서 앱을 소유해야 하며 조직이 소유자 권한을 보유하고 있어야 합니다. 현재 개인 계정으로 앱을 소유한 경우 앱의 소유권을 조직으로 이전해야 합니다. 자세한 내용은 “[GitHub 앱의 소유권 이전](/developers/apps/transferring-ownership-of-a-github-app)” 또는 “[OAuth 앱의 소유권 이전](/developers/apps/transferring-ownership-of-an-oauth-app)”을 참조하세요.

## 게시자 확인 요청


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 왼쪽 사이드바에서 **개발자 설정** 을 클릭합니다.
  ![조직 설정 사이드바의 개발자 설정 옵션](/assets/images/marketplace/developer-settings-in-org-settings.png)
1. “개발자 설정”에서 **개시자 확인** 을 클릭합니다.
  ![조직 설정 사이드바의 게시자 확인 옵션](/assets/images/marketplace/publisher-verification-settings-option.png)
1. “게시자 확인”에서 검사 목록의 정보를 완료합니다.
   - 기본 프로필 정보가 있고 정확한지 확인합니다. 또한 {% data variables.product.company_short %}의 지원 및 업데이트에 가장 적합한 이메일 주소를 포함했는지 확인합니다.
   - 조직에 대해 2단계 인증이 사용 설정되어 있는지 확인합니다. 자세한 내용은 “[조직에서 2단계 인증 필요](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)”를 참조하세요.
   - 확인된 도메인을 제출하고 조직의 프로필 페이지에 “확인된” 배지가 표시되는지 확인합니다. 관련 정보는 “[조직의 도메인 확인 또는 승인](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)”을 참조하세요.

  ![게시자 확인 검사 목록](/assets/images/marketplace/publisher-verification-checklist.png)

2. **요청 확인** 을 클릭합니다. {% data variables.product.company_short %}은(는) 세부 정보를 검토하고 게시자 확인이 완료되면 알려 줍니다.

## 추가 참고 자료

앱을 게시하는 프로세스에 대한 자세한 내용은 “[GitHub Marketplace 정보](/developers/github-marketplace/about-github-marketplace)”를 참조하세요.
