---
title: 예약된 미리 알림 관리
intro: Get reminders in Slack when you or your team have pull requests waiting for review.
versions:
  fpt: '*'
  ghec: '*'
topics:
- Accounts
redirect_from:
- /github/setting-up-and-managing-your-github-user-account/managing-your-scheduled-reminders
- /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/managing-your-scheduled-reminders
shortTitle: Manage scheduled reminders
ms.openlocfilehash: 41670a8c8b8aa1e6eade16c42f5a146f1ec0f5ee
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145088793"
---
## <a name="about-scheduled-reminders-for-users"></a>사용자의 예약된 미리 알림 정보

예약된 미리 알림은 사용자가 주의해야 하는 가장 중요한 검토 요청에 집중하도록 하는 데 사용됩니다. 끌어오기 요청에 대한 예약된 미리 알림은 지정된 시간에 검토가 필요한 열린 끌어오기 요청이 있는 Slack에서 메시지를 보냅니다. 예를 들어 매일 아침 10시에 Slack에서 사용자 또는 팀원 한 명이 검토해야 하는 끌어오기 요청이 포함된 메시지를 보내도록 예약된 미리 알림을 설정할 수 있습니다.

특정 이벤트의 경우 예약된 미리 알림에 대해 실시간 경고를 사용하도록 설정할 수도 있습니다. 검토가 할당된 경우와 같은 중요한 이벤트가 발생하는 즉시 실시간 경고가 Slack 채널로 전송됩니다.

멤버인 조직의 끌어오기 요청에 대한 개인 또는 팀 수준 검토 요청에 대해 예약된 미리 알림을 설정할 수 있습니다. 예약된 미리 알림을 직접 만들려면 먼저 조직 소유자가 사용자의 Slack 작업 영역에 권한을 부여해야 합니다. 자세한 내용은 “[조직의 예약된 미리 알림 관리](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)”를 참조하세요.

{% data reusables.reminders.scheduled-reminders-limitations %}

## <a name="creating-scheduled-reminders-for-your-personal-account"></a>개인 계정에 대한 예약된 미리 알림 만들기

{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. 미리 알림을 예약하려는 조직 옆에 있는 **편집** 을 클릭합니다.
![예약된 미리 알림 편집 단추](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.add-reminder %} {% data reusables.reminders.authorize-slack %} {% data reusables.reminders.days-dropdown %} {% data reusables.reminders.times-dropdowns %}
8. 필요에 따라 할당된 검토에 대한 예약된 미리 알림을 받으려면 **사용자에게 할당된 요청 검토** 를 선택합니다.
![할당된 요청 검토 확인란](/assets/images/help/profile/scheduled-reminders-your-requests.png)
9. 필요에 따라 멤버인 팀에 할당된 검토에 대한 예약된 미리 알림을 받으려면 **팀에 할당된 요청 검토** 를 선택합니다.
![팀에 할당된 요청 검토 확인란](/assets/images/help/profile/scheduled-reminders-your-team-requests.png) {% data reusables.reminders.real-time-alerts %} ![실시간 경고를 사용하도록 설정 확인란](/assets/images/help/settings/scheduled-reminders-real-time-alerts-personal.png) {% data reusables.reminders.create-reminder %}

## <a name="managing-scheduled-reminders-for-your-personal-account"></a>개인 계정에 대한 예약된 미리 알림 관리
{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. 미리 알림을 편집하려는 조직 옆에 있는 **편집** 을 클릭합니다.
![예약된 미리 알림 편집 단추](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.edit-page %} {% data reusables.reminders.update-buttons %}

## <a name="deleting-scheduled-reminders-for-your-personal-account"></a>개인 계정에 대한 예약된 미리 알림 삭제
{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. 미리 알림을 삭제하려는 조직 옆에 있는 **편집** 을 클릭합니다.
![예약된 미리 알림 편집 단추](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.delete %}

## <a name="further-reading"></a>추가 참고 자료

- “[조직에 대한 예약된 미리 알림 관리](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)”
- “[팀에 대한 예약된 미리 알림 관리](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team)”
