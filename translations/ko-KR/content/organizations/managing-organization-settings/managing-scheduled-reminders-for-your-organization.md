---
title: 조직에 대해 예약된 미리 알림 관리
intro: 조직의 팀에서 검토하도록 요청된 모든 끌어오기 요청에 대해 Slack에서 미리 알림을 받을 수 있습니다.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage scheduled reminders
ms.openlocfilehash: 870e22581488689a72cc70f317b6d97fdc4f5ed5
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145125716'
---
## 끌어오기 요청에 대한 예약된 미리 알림 정보

{% data reusables.reminders.about-scheduled-reminders-teams-orgs %}

조직 소유자는 팀 또는 팀에서 검토하도록 요청된 모든 끌어오기 요청에 대해 조직 내 하나 이상의 팀에 대한 미리 알림을 예약할 수 있습니다.

{% data reusables.reminders.scheduled-reminders-limitations %}

## 조직에 대해 예약된 미리 알림 만들기
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.reminders.scheduled-reminders %} {% data reusables.reminders.add-reminder %} {% data reusables.reminders.authorize-slack %} {% data reusables.reminders.slack-channel %} {% data reusables.reminders.days-dropdown %} {% data reusables.reminders.times-dropdowns %} {% data reusables.reminders.tracked-repos %}
1.  “코드를 검토하도록 할당된 팀별로 필터링”에서 **팀 추가** 드롭다운을 클릭하고 하나 이상의 팀을 선택합니다. 최대 100개의 팀을 추가할 수 있습니다. 선택한 팀이 위에서 선택한 “추적된 리포지토리”에 액세스할 수 없는 경우 예약된 미리 알림을 만들 수 없습니다.
![팀 추가 드롭다운](/assets/images/help/organizations/scheduled-reminders-add-teams.png) {% data reusables.reminders.ignore-drafts %} {% data reusables.reminders.no-review-requests %} {% data reusables.reminders.author-reviews %} {% data reusables.reminders.approved-prs %} {% data reusables.reminders.min-age %} {% data reusables.reminders.min-staleness %} {% data reusables.reminders.ignored-terms %} {% data reusables.reminders.ignored-labels %} {% data reusables.reminders.required-labels %} {% data reusables.reminders.create-reminder %}

## 조직에 대해 예약된 미리 알림 관리
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.reminders.scheduled-reminders %} {% data reusables.reminders.edit-existing %} {% data reusables.reminders.edit-page %} {% data reusables.reminders.update-buttons %}

## 조직에 대해 예약된 미리 알림 삭제
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.reminders.scheduled-reminders %} {% data reusables.reminders.delete %}

## 추가 참고 자료

- “[예약된 미리 알림 관리](/github/setting-up-and-managing-your-github-user-account/managing-your-scheduled-reminders)”
- “[팀에 대한 예약된 미리 알림 관리](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team)”
