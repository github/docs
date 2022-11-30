---
title: 스폰서쉽 계층 관리
intro: 새 스폰서쉽 계층을 추가하거나 기존 계층을 편집하거나 사용 중지할 수 있습니다.
redirect_from:
  - /articles/changing-your-sponsorship-tiers
  - /github/supporting-the-open-source-community-with-github-sponsors/changing-your-sponsorship-tiers
  - /github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Open Source
  - Sponsors profile
shortTitle: Manage payment tiers
ms.openlocfilehash: e41218f175063a20964ce690f3328af91291aaf6
ms.sourcegitcommit: 474603237fcc20c82947e5c8c68624749c445b21
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/03/2022
ms.locfileid: '148008749'
---
## 스폰서쉽 계층 정보

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

## 계층 추가

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
1. 계층을 처음으로 설정하는 경우에는 제안된 계층 예제를 검토하여 다른 오픈 소스 기여자가 {% data variables.product.prodname_sponsors %}를 어떻게 설정했는지 확인하는 것이 좋습니다. 계층 편집기에서 사용자 지정할 수 있는 몇 가지 제안된 초안 계층으로 시작할지를 결정하세요.
   - 제안된 계층을 사용하려면 초안 계층 또는 여러 계층에 포함할 보상을 선택합니다. 그런 다음 **계층 편집기로 진행** 을 클릭합니다.
   - 초안 제안을 사용하지 않고 계층을 만들려면 **이 단계 건너뛰기** 를 클릭합니다.
     
     !["이 단계 건너뛰기" 옵션 및 "계층 편집기 계속하기" 단추의 스크린샷](/assets/images/help/sponsors/tier-editor-button.png)

1. 필요에 따라 "사용자 지정 금액" 아래의 텍스트 상자에 권장 또는 최소 스폰서쉽 금액을 입력합니다. 최소 금액은 되풀이 및 일회성 스폰서쉽 모두에 적용됩니다.

   ![사용자 지정 금액 필드의 스크린샷](/assets/images/help/sponsors/custom-amounts.png)

1. 필요에 따라 초안 계층을 편집하려면 초안 계층을 찾고 **편집** 을 클릭합니다.

   ![초안 계층 옆의 편집 단추 스크린샷](/assets/images/help/sponsors/draft-tier-edit.png)

{% data reusables.sponsors.click-add-tier %} {% data reusables.sponsors.tier-price-description %} {% data reusables.sponsors.add-welcome-message %} {% data reusables.sponsors.save-tier-draft %} {% data reusables.sponsors.review-and-publish-tier %}

## 계층 편집 또는 사용 중지

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.edit-tier %} {% note %}

  **참고:** 계층 설명의 아이디어를 보려면 아래로 스크롤하세요.

  {% endnote %} {% data reusables.sponsors.tier-price-description %} {% data reusables.sponsors.tier-update %} {% data reusables.sponsors.retire-tier %}

## 스폰서쉽 계층에 리포지토리 추가

{% data reusables.sponsors.sponsors-only-repos %}

### 스폰서쉽 계층에 리포지토리 추가 정보

계층에 리포지토리를 추가하려면 리포지토리가 프라이빗이고 조직에서 소유해야 하며, 사용자에게 리포지토리에 대한 관리자 액세스 권한이 있어야 합니다.

계층에 리포지토리를 추가하면 {% data variables.product.company_short %}에서 자동으로 새 스폰서에게 리포지토리 초대를 보내고 스폰서쉽이 취소되면 액세스 권한을 제거합니다. 

조직이 아닌 개인 계정만 스폰서쉽 계층과 연결된 개인 리포지토리에 초대할 수 있습니다.

협력자를 리포지토리에 수동으로 추가하거나 제거할 수도 있으며, {% data variables.product.company_short %}는 동기화에서 이를 재정의하지 않습니다. 

### 스폰서쉽 계층에 추가된 리포지토리 전송 정보

스폰서쉽 계층에 추가된 리포지토리를 전송하는 경우 계층을 통해 리포지토리에 액세스하는 스폰서가 영향을 받을 수 있습니다.

- 후원 프로필이 조직용이고 리포지토리가 다른 조직으로 이전되는 경우, 현재 스폰서가 이전되지만 새 스폰서는 추가되지 않습니다. 리포지토리의 새 소유자는 기존 스폰서를 제거할 수 있습니다.
- 후원 프로필이 개인 계정용인 경우 리포지토리는 조직으로 전송되고, 개인 계정에는 새 리포지토리에 대한 관리자 액세스 권한이 있으며, 기존 스폰서는 이전되고, 새 스폰서가 리포지토리에 계속 추가됩니다.
- 리포지토리가 개인 계정으로 전송되면 모든 스폰서가 제거되고 새 스폰서가 리포지토리에 추가되지 않습니다.

### 스폰서쉽 계층에 리포지토리 추가

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.edit-tier %}
1. **스폰서에게 프라이빗 리포지토리에 대한 액세스 권한 부여** 를 선택합니다.

   ![스폰서에게 프라이빗 리포지토리에 대한 액세스 권한 부여하는 확인란의 스크린샷](/assets/images/help/sponsors/grant-sponsors-access-to-repo-checkbox.png)

1. 드롭다운 메뉴를 선택하고 추가할 리포지토리를 클릭합니다.

   ![스폰서에게 액세스 권한을 부여할 리포지토리를 선택하는 드롭다운 메뉴의 스크린샷](/assets/images/help/sponsors/grant-sponsors-access-to-repo-dropdown.png)

{% data reusables.sponsors.tier-update %}
