---
title: 팀에 대해 예약된 미리 알림 관리
intro: 팀에 검토를 기다리는 끌어오기 요청이 있는 경우 Slack에서 미리 알림을 받을 수 있습니다.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests
  - /github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-your-team
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Scheduled reminders
ms.openlocfilehash: 3c86b54c527c89409326840e0089a9a05ab9c49a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145125508'
---
## 팀에 대해 예약된 미리 알림 정보

{% data reusables.reminders.about-scheduled-reminders-teams-orgs %}

팀 유지 관리자 및 조직 소유자는 팀에 검토하도록 요청된 모든 끌어오기 요청에 대해 예약된 미리 알림을 설정할 수 있습니다. 팀에 대해 예약된 미리 알림을 만들려면 먼저 조직 소유자가 Slack 작업 영역에 권한을 부여해야 합니다. 자세한 내용은 “[조직에 대해 예약된 미리 알림 관리](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)”를 참조하세요.

{% data reusables.reminders.scheduled-reminders-limitations %}

## 팀에 대해 예약된 미리 알림 만들기
{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %} {% data reusables.reminders.scheduled-reminders %} {% data reusables.reminders.add-reminder %} {% data reusables.reminders.authorize-slack %} {% data reusables.reminders.slack-channel %} {% data reusables.reminders.days-dropdown %} {% data reusables.reminders.times-dropdowns %} {% data reusables.reminders.tracked-repos %} {% data reusables.reminders.ignore-drafts %} {% data reusables.reminders.no-review-requests %} {% data reusables.reminders.author-reviews %} {% data reusables.reminders.approved-prs %} {% data reusables.reminders.min-age %} {% data reusables.reminders.min-staleness %} {% data reusables.reminders.ignored-terms %} {% data reusables.reminders.ignored-labels %} {% data reusables.reminders.required-labels %} {% data reusables.reminders.create-reminder %}

## 팀에 대해 예약된 미리 알림 관리
{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %} {% data reusables.reminders.scheduled-reminders %} {% data reusables.reminders.edit-existing %} {% data reusables.reminders.edit-page %} {% data reusables.reminders.update-buttons %}

## 팀에 대해 예약된 미리 알림 삭제
{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %} {% data reusables.reminders.scheduled-reminders %} {% data reusables.reminders.delete %}

## 추가 참고 자료

- “[조직에 대해 예약된 미리 알림 관리](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)”
- “[예약된 미리 알림 관리](/github/setting-up-and-managing-your-github-user-account/managing-your-scheduled-reminders)”
