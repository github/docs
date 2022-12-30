---
title: 조직 멤버 자격 정보
intro: 한 번에 여러 리포지토리에서 동료 또는 오픈 소스 기여자와 공동 작업하는 조직의 구성원이 될 수 있습니다.
redirect_from:
  - /articles/about-organization-membership
  - /github/setting-up-and-managing-your-github-user-account/about-organization-membership
  - /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/about-organization-membership
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/about-organization-membership
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Organization membership
ms.openlocfilehash: be1f2901ed18c98edf5e05c453dec5d3c443955f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145165435'
---
조직 소유자는 조직에 멤버, 청구 관리자 또는 소유자로 가입하도록 초대할 수 있습니다. 리포지토리에 대한 관리자 권한이 있는 조직 소유자 또는 멤버는 하나 이상의 리포지토리에서 외부 협력자로 협업하도록 초대할 수 있습니다. 자세한 내용은 “[조직의 역할](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”을 참조하세요.

프로필 페이지에서 멤버인 조직에 액세스할 수 있습니다. 자세한 내용은 “[조직 액세스](/articles/accessing-an-organization)”를 참조하세요.

조직에 가입하라는 초대를 수락하면 조직 소유자가 다음을 확인할 수 있습니다.

- 퍼블릭 프로필 정보
- 이메일 주소
- 2단계 권한 부여를 사용하도록 설정한 경우
- 조직 내에서 액세스할 수 있는 리포지토리 및 액세스 수준
- 조직 내 특정 활동
- 요청이 발생한 국가
- 사용자 IP 주소

자세한 내용은 <a href="/articles/github-privacy-statement/" class="dotcom-only">{% data variables.product.prodname_dotcom %} 개인정보처리방침</a>을 참조하세요.

  {% note %}

  **참고:** 소유자는 조직의 감사 로그에서 멤버 IP 주소를 볼 수 없습니다. 계정이 손상되거나 중요한 데이터를 실수로 공유하는 것과 같은 보안 인시던트가 발생하는 경우 조직 소유자는 프라이빗 리포지토리에 대한 액세스 세부 정보를 요청할 수 있습니다. 반환하는 정보에는 IP 주소가 포함될 수 있습니다.

  {% endnote %}

기본값으로 조직 멤버 자격 표시 여부는 프라이빗으로 설정됩니다. 프로필에서 개별 조직 멤버 자격을 공개하도록 선택할 수 있습니다. 자세한 내용은 “[조직 멤버 자격 공개 또는 숨기기](/articles/publicizing-or-hiding-organization-membership)”를 참조하세요.

{% ifversion fpt or ghec %}

조직이 엔터프라이즈 계정에 속하는 경우 자동으로 엔터프라이즈 계정의 멤버가 되며 엔터프라이즈 계정 소유자에게 표시됩니다. 자세한 내용은 {% data variables.product.prodname_ghe_cloud %} 설명서의 “[엔터프라이즈 계정 정보](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts){% ifversion fpt %}”를 참조하세요.{% else %}."{% endif %}

{% endif %}

언제든지 조직을 떠날 수 있습니다. 자세한 내용은 “[조직에서 자신을 제거](/articles/removing-yourself-from-an-organization)”를 참조하세요.

## 추가 참고 자료

- “[조직 정보](/articles/about-organizations)”
- “[조직에서 멤버 자격 관리](/articles/managing-your-membership-in-organizations)”
