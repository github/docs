---
title: 조직에서 사용자 차단 해제
intro: 조직 소유자와 진행자는 이전에 차단된 사용자를 차단 해제하여 조직의 리포지토리에 대한 액세스를 복원할 수 있습니다.
redirect_from:
  - /articles/unblocking-a-user-from-your-organization
  - /github/building-a-strong-community/unblocking-a-user-from-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Unblock from your org
ms.openlocfilehash: 0c7099c21e3342717605f59a94e0025a7949b1cc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145117663'
---
조직에서 사용자 차단을 해제하면 해당 사용자는 조직의 리포지토리에 기여할 수 있게 됩니다.

사용자를 차단하기 위해 특정 시간을 선택한 경우 해당 기간이 끝나면 자동으로 차단이 해제됩니다. 자세한 내용은 “[조직에서 사용자 차단](/articles/blocking-a-user-from-your-organization)”을 참조하세요.

{% tip %}

**팁**: 협력자 상태, 별, 시계 등 조직에서 사용자를 차단할 때 제거된 모든 설정은 사용자 차단을 해제할 때 복원되지 않습니다.

{% endtip %}

## 주석에서 사용자 차단 해제

1. 차단 해제하려는 작성자의 주석으로 이동합니다.
2. 주석의 오른쪽 위에서 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}을 클릭한 다음 **사용자 차단 해제** 를 클릭합니다.
![사용자 차단 해제 옵션을 보여 주는 가로 케밥 아이콘 및 주석 검토 메뉴](/assets/images/help/repository/comment-menu-unblock-user.png)
3. 사용자 차단을 해제할지 확인하려면 **확인** 을 클릭합니다.

## 조직 설정에서 사용자 차단 해제


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.block_users %}
1. “차단된 사용자”에서 차단을 해제하려는 사용자 옆에 있는 **차단 해제** 를 클릭합니다.
![사용자 차단 해제 단추](/assets/images/help/organizations/org-unblock-user-button.png)

## 추가 참고 자료

- “[조직에서 사용자 차단](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)”
- “[개인 계정에서 사용자 차단](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-personal-account)”
- “[개인 계정에서 사용자 차단 해제](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account)”
- “[남용 또는 스팸 보고](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)”
