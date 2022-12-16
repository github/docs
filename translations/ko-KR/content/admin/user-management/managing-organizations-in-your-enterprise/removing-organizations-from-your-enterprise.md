---
title: 엔터프라이즈에서 조직 제거
intro: 조직이 더 이상 엔터프라이즈에 속하지 않아야 하는 경우 조직을 제거할 수 있습니다.
permissions: Enterprise owners can remove any organization from their enterprise.
versions:
  ghec: '*'
type: how_to
topics:
  - Enterprise
shortTitle: Removing organizations
ms.openlocfilehash: 8645e8f6d424ee8a02ae5d414e9901173df460aa
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145115135'
---
{% warning %}

**경고**: 엔터프라이즈에서 조직을 제거하는 경우 다음에 유의합니다.
- 엔터프라이즈에서 청구, ID 관리, 2FA 요구 사항, 조직에 대한 기타 정책을 더 이상 관리하지 않습니다.
- 조직이 무료 플랜으로 다운그레이드됩니다.
- 조직에 표준 서비스 약관이 적용됩니다.
- 조직 내부 리포지토리가 프라이빗 리포지토리로 변환됩니다.

{% endwarning %}

## 엔터프라이즈에서 조직 제거

{% data reusables.enterprise-accounts.access-enterprise %}
2. 검색 결과에 조직이 표시될 때까지 “조직” 아래 검색 창에 조직 이름을 입력하기 시작합니다.
![조직 검색 필드 스크린샷](/assets/images/help/enterprises/organization-search.png)
3. 조직 이름 오른쪽에 있는 {% octicon "gear" aria-label="The gear icon" %} 드롭다운 메뉴를 선택하고 **조직 제거** 를 클릭합니다.
![검색 결과의 조직 스크린샷](/assets/images/help/enterprises/remove-organization.png)
4. 경고를 검토하고 **조직 제거** 를 클릭합니다.
![경고 메시지 및 조직 제거 단추 스크린샷](/assets/images/help/enterprises/remove-organization-warning.png)
