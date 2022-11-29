---
title: スケジュールされたリマインダーの管理
intro: 自分または自分の Team に対してレビュー待ちのプルリクエストがあるとき、Slack でリマインダーを受け取ります。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-your-scheduled-reminders
  - /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/managing-your-scheduled-reminders
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/managing-your-scheduled-reminders
shortTitle: Manage scheduled reminders
ms.openlocfilehash: 7dab3826b1791d3b06b3a2594c3ba132c6d675b4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145164899'
---
## ユーザのスケジュールされたリマインダーについて

スケジュールされたリマインダーは、注意を払う必要がある重要なレビューリクエストにユーザが集中できるようにする目的で使用します。 プルリクエストのスケジュールされたリマインダーは、指定した時間にレビューが必要なオープンのプルリクエストとともに、Slack でメッセージを送信します。 たとえば、あなた、またはあなたの Team によるレビューが必要なプルリクエストとともに、毎日午前10時に Slack でメッセージを送信するように、リマインダーをスケジュール設定できます。

特定のイベントに対しては、スケジュールされたリマインダーにリアルタイムのアラートを有効にすることもできます。 リアルタイムアラートは、自分がレビューを割り当てられたなど、重要なイベントが発生したときすぐに Slack チャネルで送信されます。

メンバーになっている Organization のプルリクエストについて、個人または Team レベルのレビューリクエストのスケジュールされたリマインダーを設定できます。 自分自身のスケジュールされたリマインダーを作成するには、Organization のオーナーが Slack ワークスペースを承認する必要があります。 詳細については、「[組織のスケジュールされたリマインダーの管理](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)」を参照してください。

{% data reusables.reminders.scheduled-reminders-limitations %}

## 個人アカウントのスケジュールされたリマインダーを作成する

{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. リマインダーをスケジュールする組織の横にある **[編集]** をクリックします。
![スケジュールされたリマインダー編集ボタン](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.add-reminder %} {% data reusables.reminders.authorize-slack %} {% data reusables.reminders.days-dropdown %} {% data reusables.reminders.times-dropdowns %}
8. オプションで、自分が割り当てられているレビュー担当者のスケジュールされたリマインダーを受け取るには、 **[Review requests assigned to you]** を選択します。
![[Review requests assigned to you] チェックボックス](/assets/images/help/profile/scheduled-reminders-your-requests.png)
9. オプションで、自分がメンバーになっている Team に割り当てられているレビュー担当者のスケジュールされたリマインダーを受け取るには、 **[Review requests assigned to your team]** を選択します。
![チームに割り当てられた要求を確認するチェックボックス](/assets/images/help/profile/scheduled-reminders-your-team-requests.png) {% data reusables.reminders.real-time-alerts %} ![リアルタイム アラートを有効にするチェックボックス](/assets/images/help/settings/scheduled-reminders-real-time-alerts-personal.png) {% data reusables.reminders.create-reminder %}

## 個人アカウントのスケジュールされたリマインダーを管理する
{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. スケジュール済みリマインダーを編集する組織の横にある **[編集]** をクリックします。
![スケジュール済みリマインダー編集ボタン](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.edit-page %} {% data reusables.reminders.update-buttons %}

## 個人アカウントのスケジュールされたリマインダーを削除する
{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. リマインダーを削除する組織の横にある **[編集]** をクリックします。
![スケジュール済みリマインダー編集ボタン](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.delete %}

## 参考資料

- "[組織のスケジュール済みリマインダーを管理する](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)"
- "[チームのスケジュール済みリマインダーを管理する](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team)"
