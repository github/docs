---
title: 사용자를 조직으로 변환
redirect_from:
  - /articles/what-is-the-difference-between-create-new-organization-and-turn-account-into-an-organization
  - /articles/explaining-the-account-transformation-warning
  - /articles/converting-a-user-into-an-organization
  - /github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/converting-a-user-into-an-organization
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/converting-a-user-into-an-organization
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/converting-a-user-into-an-organization
intro: 개인 계정을 조직으로 변환할 수 있습니다. 이렇게 하면 조직에 속한 리포지토리에 대해 보다 세부적인 권한이 허용됩니다.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: User into an organization
ms.openlocfilehash: 16680b332a521cd8de1a349bf52c9aac6294d4c3
ms.sourcegitcommit: bafb4fe4c8c086a510eafee6e54a2d172fd3a01b
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/16/2022
ms.locfileid: '148046581'
---
{% warning %}

**경고**: 사용자를 조직으로 변환하기 전에 다음 사항에 유의하세요.

* 변환된 개인 계정에는 **더 이상** 로그인할 수 없습니다.
* 변환된 개인 계정이 소유한 gist를 **더 이상** 만들거나 수정할 수 없습니다.
* 조직을 사용자로 다시 변환할 수 **없습니다**.
* SSH 키, OAuth 토큰, 작업 프로필, 반응, 관련 사용자 정보는 조직으로 전송되지 **않습니다**. 이는 변환되는 개인 계정에만 해당되며 개인 계정의 협력자에는 해당되지 않습니다.
* 변환된 개인 계정에 설치된 {% 데이터 variables.product.prodname_github_apps %}이(가) 제거됩니다.
* 변환된 개인 계정으로 이루어진 모든 커밋은 해당 계정에 **더 이상 연결되지 않습니다**. 커밋 자체는 그대로 유지 **됩니다**.
* 변환된 개인 계정에서 작성한 기존 주석은 해당 계정에 **더 이상 연결되지 않습니다**. 주석 자체는 **유지** 되지만 `ghost` 사용자와 연결됩니다.
* 변환된 개인 계정으로 만든 프라이빗 리포지토리의 모든 포크는 삭제됩니다.
{% endwarning %}

{% ifversion fpt or ghec or ghes %}
## 개인 계정 유지 및 새 조직 수동으로 만들기

조직에서 현재 개인 계정에 사용하고 있는 이름과 동일한 이름을 가지도록 하거나 개인 계정의 정보를 그대로 유지하려는 경우 개인 계정을 조직으로 변환하는 대신 새 조직을 만들고 리포지토리를 해당 조직으로 전송해야 합니다.

1. 개인 용도로 현재 개인 계정 이름을 유지하려면 [개인 계정의 이름](/articles/changing-your-github-username)을 새롭고 멋진 이름으로 변경합니다.
2. 개인 계정의 원래 이름으로 [새 조직을 만듭니다](/articles/creating-a-new-organization-from-scratch).
3. 새 조직 계정으로 [리포지토리를 전송](/articles/transferring-a-repository)합니다.{% endif %}

## 개인 계정을 조직으로 자동 변환

개인 계정을 조직으로 직접 변환할 수도 있습니다. 계정 변환:
 - 리포지토리를 다른 계정으로 수동으로 전송할 필요 없이 있는 그대로 유지합니다.
 - {% ifversion fpt or ghec %} 이전과 동일한 권한이 있는 팀에 협력자를 자동으로 초대합니다. - {% data variables.product.prodname_pro %} 개인 계정의 경우 청구가 [유료 {% data variables.product.prodname_team %}](/articles/about-billing-for-github-accounts)으로 자동으로 전환되며 결제 정보를 다시 입력하거나 결제 주기를 조정하거나 언제라도 이중 결제할 필요가 없습니다.{% endif %}

1. GitHub에 로그인하고 변환 후 조직 및 리포지토리에 액세스하는 데 사용할 새 개인 계정을 만듭니다.
2.  변환 중인 개인 계정이 조인된 [조직은 그대로 둡니다](/articles/removing-yourself-from-an-organization).
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.organizations %}
5. “계정 변환”에서 **조직으로 <username> 전환** 을 클릭합니다.
    ![조직 변환 단추](/assets/images/help/settings/convert-to-organization.png)
6. 계정 변환 경고 대화 상자에서 변환을 검토하고 확인합니다. 이 상자의 정보는 이 문서의 위에 있는 경고와 동일합니다.
    ![변환 경고](/assets/images/help/organizations/organization-account-transformation-warning.png)
7. “사용자를 조직으로 변환” 페이지의 “조직 소유자 선택”에서 이전 섹션에서 만든 보조 개인 계정 또는 조직을 관리하는 데 신뢰할 수 있는 다른 사용자를 선택합니다.
    ![조직 소유자 추가 페이지](/assets/images/help/organizations/organization-add-owner.png)
8. 새 조직의 구독을 선택하고 메시지가 표시되면 청구 정보를 입력합니다.
9. **조직 만들기** 를 클릭합니다.
10. 1단계에서 만든 새 개인 계정에 로그인한 다음 컨텍스트 전환기를 사용하여 새 조직에 액세스합니다.

{% tip %}

**팁**: 개인 계정을 조직으로 전환하면 해당 계정에 속한 리포지토리의 협력자가 새 조직에 외부 협력자로 추가됩니다. 그런 다음 원하는 경우 *외부 협력자* 를 새 조직의 멤버로 초대할 수 있습니다. 자세한 내용은 “[조직의 역할](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators)”을 참조하세요.

{% endtip %}

## 추가 참고 자료
- “[팀 설정](/articles/setting-up-teams)” {% ifversion fpt or ghec %}- “[조직에 참가할 사용자 초대](/articles/inviting-users-to-join-your-organization)”{% endif %}
- “[조직 액세스](/articles/accessing-an-organization)”
