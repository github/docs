---
title: Team のスケジュールされたリマインダーを管理する
intro: Team に対してレビュー待ちのプルリクエストがあるとき、Slack でリマインダーを受け取ることができます。
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests
  - /github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-your team
versions:
  free-pro-team: '*'
topics:
  - Organizations
  - Teams
---

### Team のスケジュールされたリマインダーについて

{% data reusables.reminders.about-scheduled-reminders-teams-orgs %}

チームメンテナと Organization のオーナーは、Team がレビューをリクエストされたプルリクエストのスケジュールされたリマインダーを設定できます。 Team のスケジュールされたリマインダーを作成するには、Organization のオーナーが Slack ワークスペースを承認する必要があります。 詳しい情報については、「[Organization にスケジュールされたリマインダーを管理する](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)」を参照してください。

{% data reusables.reminders.scheduled-reminders-limitations %}

### Team のスケジュールされたリマインダーを作成する
{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% data reusables.reminders.scheduled-reminders %}
![[Scheduled reminders] ボタン](/assets/images/help/teams/scheduled-reminders-teams.png)
{% data reusables.reminders.add-reminder %}
{% data reusables.reminders.authorize-slack %}
{% data reusables.reminders.slack-channel %}
{% data reusables.reminders.days-dropdown %}
{% data reusables.reminders.times-dropdowns %}
{% data reusables.reminders.tracked-repos %}
{% data reusables.reminders.ignore-drafts %}
{% data reusables.reminders.no-review-requests %}
{% data reusables.reminders.author-reviews %}
{% data reusables.reminders.approved-prs %}
{% data reusables.reminders.min-age %}
{% data reusables.reminders.min-staleness %}
{% data reusables.reminders.ignored-terms %}
{% data reusables.reminders.ignored-labels %}
{% data reusables.reminders.required-labels %}
{% data reusables.reminders.create-reminder %}

### Team のスケジュールされたリマインダーを管理する
{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% data reusables.reminders.scheduled-reminders %}
![[Scheduled reminders] ボタン](/assets/images/help/teams/scheduled-reminders-teams.png)
{% data reusables.reminders.edit-existing %}
{% data reusables.reminders.edit-page %}
{% data reusables.reminders.update-buttons %}

### Team のスケジュールされたリマインダーを削除する
{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% data reusables.reminders.scheduled-reminders %}
![[Scheduled reminders] ボタン](/assets/images/help/teams/scheduled-reminders-teams.png)
{% data reusables.reminders.delete %}

### 参考リンク

- [Organization にスケジュールされたリマインダーを管理する](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)
- [スケジュールされたリマインダーの管理](/github/setting-up-and-managing-your-github-user-account/managing-your-scheduled-reminders)
