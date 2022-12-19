---
title: 조직의 사용자가 2FA를 사용하도록 설정하였는지 여부 보기
intro: '2단계 인증을 사용하도록 설정한 조직 소유자, 구성원 및 외부 협력자를 확인할 수 있습니다.'
redirect_from:
  - /articles/viewing-whether-users-in-your-organization-have-2fa-enabled
  - /github/setting-up-and-managing-organizations-and-teams/viewing-whether-users-in-your-organization-have-2fa-enabled
  - /organizations/keeping-your-organization-secure/viewing-whether-users-in-your-organization-have-2fa-enabled
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: View 2FA usage
ms.openlocfilehash: 20659ea2e1979123b15d9ee5d333655ad188b2e9
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/12/2022
ms.locfileid: '145135076'
---
{% note %}

**참고:** 소유자, 청구 관리자 및 {% else %} 및 {% endif %}를 포함한 모든 구성원{% ifversion fpt or ghec %}이 조직의 외부 협력자에게 2단계 인증을 사용하도록 설정하도록 요구할 수 있습니다. 자세한 내용은 “[조직에서 2단계 인증 요구](/articles/requiring-two-factor-authentication-in-your-organization)”를 참조하세요.

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. 2단계 인증을 사용하거나 사용하지 않도록 설정한 조직 소유자를 포함한 조직 구성원을 보려면 오른쪽에서 **2FA** 를 클릭하고 **사용** 또는 **사용 안 함** 을 선택합니다.
 ![filter-org-members-by-2fa](/assets/images/help/2fa/filter-org-members-by-2fa.png)
5. 조직의 외부 협력자를 보려면 "사람" 탭에서 **외부 협력자** 를 클릭합니다.
![select-outside-collaborators](/assets/images/help/organizations/select-outside-collaborators.png)
6. 2단계 인증을 사용하거나 사용하지 않도록 설정한 외부 협력자를 보려면 오른쪽에서 **2FA** 를 클릭하고 **사용** 또는 **사용 안 함** 을 선택합니다.
![filter-outside-collaborators-by-2fa](/assets/images/help/2fa/filter-outside-collaborators-by-2fa.png)

## 추가 참고 자료

- "[조직에서 사용자의 역할 보기](/articles/viewing-people-s-roles-in-an-organization)"
