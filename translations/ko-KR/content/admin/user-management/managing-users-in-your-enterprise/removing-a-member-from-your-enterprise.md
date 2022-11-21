---
title: 엔터프라이즈에서 멤버 제거
intro: 엔터프라이즈가 소유한 모든 조직에서 멤버를 제거할 수 있습니다.
permissions: Enterprise owners can remove an enterprise member from the enterprise.
versions:
  feature: remove-enterprise-members
type: how_to
topics:
  - Enterprise
shortTitle: Remove member
ms.openlocfilehash: c3090cd49c2c2e8089093dc01ddeb7b69ae39416
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717991'
---
## 엔터프라이즈 멤버 제거 정보

엔터프라이즈에서 엔터프라이즈 멤버를 제거하면 엔터프라이즈가 소유한 모든 조직에서 멤버가 제거됩니다.

제거하려는 엔터프라이즈 멤버가 엔터프라이즈가 소유한 조직의 마지막 소유자인 경우 회원님이 해당 조직의 소유자가 됩니다.

엔터프라이즈 또는 엔터프라이즈가 소유한 조직이 IdP(ID 공급자)를 사용하여 조직의 멤버 자격을 관리하는 경우 IdP가 멤버를 조직에 다시 추가할 수 있습니다. 또한 IdP에서 필요한 내용을 변경해야 합니다.

## 엔터프라이즈에서 멤버 제거

{% note %}

**참고:** 엔터프라이즈 멤버가 {% data variables.product.prodname_ghe_server %}만 사용하고 {% data variables.product.prodname_ghe_cloud %}은(는) 사용하지 않는 경우 이러한 방식으로 엔터프라이즈 멤버를 제거할 수 없습니다.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. 제거하려는 사용자의 오른쪽에서 {% octicon "gear" aria-label="The gear icon" %} 드롭다운 메뉴를 선택하고 **엔터프라이즈에서 제거** 를 클릭합니다.

   ![엔터프라이즈 멤버에 대한 “엔터프라이즈에서 제거” 옵션 스크린샷](/assets/images/help/business-accounts/remove-member.png)
