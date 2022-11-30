---
title: 개인 계정에서 사용자 차단
intro: 사용자가 활동 및 리포지토리에 대한 액세스하는 것을 거부하고 알림을 보내지 못하도록 차단할 수 있습니다.
redirect_from:
  - /articles/blocking-a-user-from-your-personal-account
  - /github/building-a-strong-community/blocking-a-user-from-your-personal-account
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Block from your account
ms.openlocfilehash: bd657c221b007b6b574e97f54f2b330401b8fd9b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147422878'
---
## 사용자 차단 정보

계정 설정 또는 사용자 프로필에서 사용자를 차단할 수 있습니다. {% data variables.product.prodname_dotcom %}는 차단 시 사용자에게 알리지 않습니다. 차단한 사람과 동일한 프로젝트에 기여하지 않으려면 차단된 사용자의 이전에 기여한 리포지토리에 경고를 표시하도록 선택할 수 있습니다. 자세한 내용은 “[계정 설정에서 사용자 차단](#blocking-a-user-in-your-account-settings)”을 참조하세요. 공유 공간에서 차단된 사용자의 활동이 계속 표시될 수 있으며 차단된 사용자는 기존 콘텐츠를 삭제할 수 있습니다.

{% tip %}

**팁:** 열띤 대화로 인해 사용자를 차단하는 경우 협력자만 주석을 달 수 있도록 대화를 잠그는 것이 좋습니다. 자세한 내용은 “[대화 잠금](/communities/moderating-comments-and-conversations/locking-conversations)”을 참조하세요.

{% endtip %}

사용자를 차단하는 경우 다음이 수행됩니다.
- 사용자가 팔로우를 중지합니다.
- 사용자가 리포지토리 확인을 중지하고 리포지토리를 고정 해제합니다.
- 소유자인 조직에 사용자가 참가할 수 없습니다.
- 사용자의 별 및 문제 할당이 리포지토리에서 제거됩니다.
- 리포지토리에서 토론 또는 주석에 대한 사용자의 투표가 삭제됩니다.
- 사용자는 리포지토리의 협력자에서 제거됩니다.
- 리포지토리에 대한 사용자의 기여는 더 이상 해당 사용자의 기여로 계산되지 않습니다.
- 차단된 사용자의 리포지토리에 대한 기여는 더 이상 기여로 계산되지 않습니다.
- 리포지토리의 공동 작업자에서 제거됩니다.
- 사용자의 스폰서쉽이 취소됩니다.
- 차단된 사용자에 대한 보류 중인 리포지토리 또는 계정 후속 초대가 취소됩니다.
- 사용자가 소유한 모든 프로젝트 및 {% data variables.projects.projects_v1_boards %}에서 공동 작업자로서 제거됩니다.
- 자신이 소유한 모든 프로젝트 및 {% data variables.projects.projects_v1_boards %}에서 공동 작업자로 제거됩니다.

사용자를 차단한 후 사용자는 다음을 수행할 수 없습니다.
- 내 사용자 이름을 [@mentioning](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)하는 것을 포함한 알림 보내기
- 내가 만든 문제 및 끌어오기 요청에 대한 주석 달기 및 편집
- 문제, 끌어오기 요청 및 커밋에 대한 의견에 반응
- 나를 팔로우하거나 사용자의 활동 피드에서 내 콘텐츠를 확인
- 문제 또는 끌어오기 요청에 할당
- 리포지토리에서 협력자로 초대
- 보안 공지의 협력자로 초대
- 주석에서 리포지토리 상호 참조
- 리포지토리를 포크, 확인, 고정 또는 별표 표시
- 스폰서
- 프로젝트에서 공동 작업자로 추가하고 {% data variables.projects.projects_v1_boards %}를 추가합니다.
- 퍼블릭 프로젝트 및 {% data variables.projects.projects_v1_boards %}를 변경합니다.

소유한 리포지토리에서 차단된 사용자는 다음을 수행할 수 없습니다.
- 문제 열기
- 끌어오기 요청 보내기, 닫기 또는 병합
- 문제, 끌어오기 요청 또는 커밋에 대한 주석
- Wiki 페이지 추가 및 편집

## 계정 설정에서 사용자 차단

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.blocked_users %}
3. “사용자 차단”에서 차단하려는 사용자의 사용자 이름을 입력하고 **사용자 차단** 을 클릭합니다.
  ![사용자 이름 필드 및 차단 단추](/assets/images/help/settings/user-settings-block-user.png)
4. 필요에 따라 차단된 사용자가 기여자인 리포지토리를 방문할 때 경고를 표시하려면 **차단된 사용자가 리포지토리에 대한 이전 참가자인 경우 경고 표시** 를 선택합니다.
  ![차단된 사용자에 대한 경고 표시 옵션](/assets/images/help/settings/warn-block-user.png)

## 프로필 페이지에서 사용자 차단

{% data reusables.profile.user_profile_page_navigation %} {% data reusables.profile.user_profile_page_block_or_report %}
3. **사용자 차단** 을 클릭합니다.
   ![사용자를 차단하거나 남용을 보고하는 옵션이 있는 모달 상자](/assets/images/help/profile/profile-blockuser.png)

{% note %}

괴롭힘을 당하고 있다면 {% data variables.contact.report_abuse %}를 사용하여 문의하세요. {% data reusables.policies.abuse %}

{% endnote %}

## 추가 참고 자료

- “[개인 계정에서 차단된 사용자 보기](/communities/maintaining-your-safety-on-github/viewing-users-youve-blocked-from-your-personal-account)”
- “[개인 계정에서 사용자 차단 해제](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account)”
- “[조직에서 사용자 차단](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)”
- “[조직에서 사용자 차단 해제](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)”
- “[남용 또는 스팸 보고](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)”
- “[리포지토리에서 상호 작용 제한](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)”
