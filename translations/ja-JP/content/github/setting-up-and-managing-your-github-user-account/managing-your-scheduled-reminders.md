---
title: スケジュールされたリマインダーの管理
intro: 自分または自分の Team に対してレビュー待ちのプルリクエストがあるとき、Slack でリマインダーを受け取ります。
versions:
  free-pro-team: '*'
topics:
  - Accounts
---

### ユーザのスケジュールされたリマインダーについて

スケジュールされたリマインダーは、注意を払う必要がある重要なレビューリクエストにユーザが集中できるようにする目的で使用します。 プルリクエストのスケジュールされたリマインダーは、指定した時間にレビューが必要なオープンのプルリクエストとともに、Slack でメッセージを送信します。 たとえば、あなた、またはあなたの Team によるレビューが必要なプルリクエストとともに、毎日午前10時に Slack でメッセージを送信するように、リマインダーをスケジュール設定できます。

特定のイベントに対しては、スケジュールされたリマインダーにリアルタイムのアラートを有効にすることもできます。 リアルタイムアラートは、自分がレビューを割り当てられたなど、重要なイベントが発生したときすぐに Slack チャネルで送信されます。

メンバーになっている Organization のプルリクエストについて、個人または Team レベルのレビューリクエストのスケジュールされたリマインダーを設定できます。 自分自身のスケジュールされたリマインダーを作成するには、Organization のオーナーが Slack ワークスペースを承認する必要があります。 詳しい情報については、「[Organization にスケジュールされたリマインダーを管理する](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)」を参照してください。

{% data reusables.reminders.scheduled-reminders-limitations %}

### ユーザアカウントのスケジュールされたリマインダーを作成する

{% data reusables.user_settings.access_settings %}
{% data reusables.reminders.scheduled-reminders %}
![[Scheduled reminders] ボタン](/assets/images/help/profile/scheduled-reminders-profile.png)
3. リマインダーをスケジュールしたい Organization の隣で [**Edit**] をクリックします。 ![[Scheduled reminders edit] ボタン](/assets/images/help/settings/scheduled-reminders-org-choice.png)
{% data reusables.reminders.add-reminder %}
{% data reusables.reminders.authorize-slack %}
{% data reusables.reminders.days-dropdown %}
{% data reusables.reminders.times-dropdowns %}
8. オプションで、自分が割り当てられているレビュー担当者のスケジュールされたリマインダーを受け取るには、[**Review requests assigned to you**] を選択します。 ![[Review requests assigned to you] チェックボックス](/assets/images/help/profile/scheduled-reminders-your-requests.png)
9. オプションで、自分がメンバーになっている Team に割り当てられているレビュー担当者のスケジュールされたリマインダーを受け取るには、[**Review requests assigned to your team**] を選択します。 ![[Review requests assigned to your team] チェックボックス](/assets/images/help/profile/scheduled-reminders-your-team-requests.png)
{% data reusables.reminders.real-time-alerts %}
![[Enable real-time alerts] チェックボックス](/assets/images/help/settings/scheduled-reminders-real-time-alerts-personal.png)
{% data reusables.reminders.create-reminder %}

### ユーザアカウントのスケジュールされたリマインダーを管理する
{% data reusables.user_settings.access_settings %}
{% data reusables.reminders.scheduled-reminders %}
![[Scheduled reminders] ボタン](/assets/images/help/profile/scheduled-reminders-profile.png)
3. スケジュールされたリマインダーを編集したい Organization の隣で [**Edit**] をクリックします。 ![[Scheduled reminders edit] ボタン](/assets/images/help/settings/scheduled-reminders-org-choice.png)
{% data reusables.reminders.edit-page %}
{% data reusables.reminders.update-buttons %}

### ユーザアカウントのスケジュールされたリマインダーを削除する
{% data reusables.user_settings.access_settings %}
{% data reusables.reminders.scheduled-reminders %}
![[Scheduled reminders] ボタン](/assets/images/help/profile/scheduled-reminders-profile.png)
3. リマインダーを削除したい Organization の隣で [**Edit**] をクリックします。 ![[Scheduled reminders edit] ボタン](/assets/images/help/settings/scheduled-reminders-org-choice.png)
{% data reusables.reminders.delete %}

### 参考リンク

- [Organization にスケジュールされたリマインダーを管理する](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)
- [Team のスケジュールされたリマインダーを管理する](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team)
