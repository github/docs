---
title: 사용자 계정 리포지토리의 소유권 연속성 유지 관리
intro: You can invite someone to manage your user owned repositories if you are not able to.
versions:
  fpt: '*'
  ghec: '*'
topics:
- Accounts
- Repositories
redirect_from:
- /github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories
- /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/maintaining-ownership-continuity-of-your-user-accounts-repositories
shortTitle: Ownership continuity
ms.openlocfilehash: f958e3ca640a1180db03361457ec7c185e4ce7ba
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145090095"
---
## <a name="about-successors"></a>후속 사용자 정보

사용자 소유 리포지토리를 관리할 수 없는 경우 해당 리포지토리를 관리할 또 다른 {% data variables.product.company_short %} 사용자를 후속 사용자로 초대하는 것이 좋습니다. 후속 사용자는 다음을 수행할 권한을 가집니다.

- 퍼블릭 리포지토리를 보관합니다.
- 퍼블릭 리포지토리를 자신의 사용자 소유 계정으로 전송합니다.
- 리포지토리를 만들 수 있는 조직으로 퍼블릭 리포지토리를 전송합니다.

후속 사용자는 원래 사용자 계정에 로그인할 수 없습니다.

지정된 후속 사용자는 사망 증명서를 제시한 다음, 7일 동안 기다리거나, 부고를 제시한 다음, 21일 동안 기다린 후 퍼블릭 리포지토리를 관리할 수 있습니다. 자세한 내용은 “[{% data variables.product.company_short %} 사망한 사용자 정책](/free-pro-team@latest/github/site-policy/github-deceased-user-policy)”을 참조하세요.

후속 사용자로 리포지토리를 관리하기 위해 액세스 권한을 요청하려면 [GitHub 지원](https://support.github.com/contact?tags=docs-accounts)에 문의하세요.

## <a name="inviting-a-successor"></a>후속 사용자 초대
후속 사용자로 초대하는 사람은 {% data variables.product.company_short %} 계정을 보유해야 합니다.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. “후속 사용자 설정”에서 후속 사용자를 초대하려면 먼저 사용자 이름, 전체 이름 또는 메일 주소를 입력한 다음, 사용자가 표시되면 해당 이름을 클릭합니다.
   ![후속 사용자 초대 검색 필드](/assets/images/help/settings/settings-invite-successor-search-field.png)
4. **후속 사용자 추가** 를 클릭합니다.
{% data reusables.user-settings.sudo-mode-popup %}
5. 초대를 받은 사용자는 후속 사용자가 되기로 동의할 때까지 “보류 중”으로 나열됩니다.
   ![보류 중인 후속 사용자 초대](/assets/images/help/settings/settings-pending-successor.png)
