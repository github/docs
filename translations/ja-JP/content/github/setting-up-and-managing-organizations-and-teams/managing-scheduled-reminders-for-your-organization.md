---
title: Organization にスケジュールされたリマインダーを管理する
intro: Organization の Team がレビューをリクエストされたすべてのプルリクエストについて、Slack でリマインダーを受け取ることができます。
versions:
  free-pro-team: '*'
---

### プルリクエストのスケジュールされたリマインダーについて

{{ site.data.reusables.reminders.about-scheduled-reminders-teams-orgs }}

Organization のオーナーは、Team がレビューをリクエストされたすべてのプルリクエストについて、その Organization の 1 つ以上の Team にリマインダーをスケジュールできます。

### Organization のスケジュールされたリマインダーを作成する
{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.reminders.scheduled-reminders }}
![[Scheduled reminders] ボタン](/assets/images/help/organizations/scheduled-reminders-org.png)
{{ site.data.reusables.reminders.add-reminder }}
{{ site.data.reusables.reminders.authorize-slack }}
{{ site.data.reusables.reminders.slack-channel }}
{{ site.data.reusables.reminders.days-dropdown }}
{{ site.data.reusables.reminders.times-dropdowns }}
{{ site.data.reusables.reminders.tracked-repos }}
11. [Filter by team assigned to review code] で、[**Add a team**] ドロップダウンをクリックし、1 つ以上の Team を選択します。 最大 100 チームまで追加できます。 選択した Team が、上で選択する [Tracked repositories] にアクセスできない場合は、スケジュールされたリマインダーは作成できません。 ![[Add a team] ドロップダウン](/assets/images/help/organizations/scheduled-reminders-add-teams.png)
{{ site.data.reusables.reminders.ignore-drafts }}
{{ site.data.reusables.reminders.no-review-requests }}
{{ site.data.reusables.reminders.author-reviews }}
{{ site.data.reusables.reminders.approved-prs }}
{{ site.data.reusables.reminders.min-age }}
{{ site.data.reusables.reminders.min-staleness }}
{{ site.data.reusables.reminders.ignored-terms }}
{{ site.data.reusables.reminders.ignored-labels }}
{{ site.data.reusables.reminders.required-labels }}
{{ site.data.reusables.reminders.create-reminder }}

### Organization のスケジュールされたリマインダーを管理する
{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.reminders.scheduled-reminders }}
![[Scheduled reminders] ボタン](/assets/images/help/organizations/scheduled-reminders-org.png)
{{ site.data.reusables.reminders.edit-existing }}
{{ site.data.reusables.reminders.edit-page }}
{{ site.data.reusables.reminders.update-buttons }}

### Organization のスケジュールされたリマインダーを削除する
{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.reminders.scheduled-reminders }}
![[Scheduled reminders] ボタン](/assets/images/help/organizations/scheduled-reminders-org.png)
{{ site.data.reusables.reminders.delete }}

### 参考リンク

- [スケジュールされたリマインダーの管理](/github/setting-up-and-managing-your-github-user-account/managing-your-scheduled-reminders)
- [Team のスケジュールされたリマインダーを管理する](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-your-team)
