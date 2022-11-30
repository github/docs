---
title: 개인 계정에서 사용자 차단 해제
intro: '차단한 {% data variables.product.prodname_dotcom %} 사용자를 통해 펜스를 고쳤다면 해당 계정의 차단을 해제할 수 있습니다.'
redirect_from:
  - /articles/unblocking-a-user-from-your-personal-account
  - /github/building-a-strong-community/unblocking-a-user-from-your-personal-account
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Unblock from your account
ms.openlocfilehash: a88a8613a8d787ee7e42ea9f6f5ef994353aedc8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145090272'
---
사용자 차단을 해제하면 해당 사용자가 사용자를 리포지토리에 협력자로 초대할 수 있습니다. 해당 사용자가 GitHub에서 사용자를 [@mention](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)하면 알림을 받게 됩니다.

사용자가 소유한 리포지토리에서 해당 사용자는 정상적으로 협업할 수 있습니다.

계정 설정 또는 사용자의 프로필 페이지에서 사용자를 차단 해제할 수 있습니다.

## 계정 설정에서 사용자 차단 해제

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.blocked_users %}
3. “차단된 사용자”에서 차단을 해제하려는 사용자 옆에 있는 **차단 해제** 를 클릭합니다.
![사용자 차단 해제 단추](/assets/images/help/organizations/org-unblock-user-button.png)

## 프로필 페이지에서 사용자 차단 해제

{% data reusables.profile.user_profile_page_navigation %}
2. 왼쪽 사이드바의 사용자 프로필 사진 아래에서 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 아이콘을 클릭한 다음 **사용자 차단 해제 또는 보고** 를 클릭합니다.
![사용자 차단 해제 또는 보고 링크](/assets/images/help/profile/profile-unblock-or-report-user.png)
3. **사용자 차단 해제** 를 클릭합니다.
  ![사용자 차단을 해제하거나 남용을 보고하는 옵션이 있는 모달 상자](/assets/images/help/profile/profile-unblockuser.png)

{% tip %}

**팁**: 사용자를 차단할 때 제거된 설정(예: 협력자 상태, 별, 팔로우)은 사용자 차단을 해제할 때 복원되지 않습니다.

{% endtip %}

## 추가 참고 자료

- “[개인 계정에서 사용자 차단](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-personal-account)”
- “[조직에서 사용자 차단](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)”
- “[조직에서 사용자 차단 해제](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)”
- “[남용 또는 스팸 보고](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)”
