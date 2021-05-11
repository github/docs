---
title: Organization にスケジュールされたリマインダーを管理する
intro: Organization の Team がレビューをリクエストされたすべてのプルリクエストについて、Slack でリマインダーを受け取ることができます。
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-your-organization
versions:
  free-pro-team: '*'
topics:
  - Organizations
  - Teams
---

### プルリクエストのスケジュールされたリマインダーについて

{% data reusables.reminders.about-scheduled-reminders-teams-orgs %}

Organization のオーナーは、Team がレビューをリクエストされたすべてのプルリクエストについて、その Organization の 1 つ以上の Team にリマインダーをスケジュールできます。

{% data reusables.reminders.scheduled-reminders-limitations %}

### Organization のスケジュールされたリマインダーを作成する
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.reminders.scheduled-reminders %}
![[Scheduled reminders] ボタン](/assets/images/help/organizations/scheduled-reminders-org.png)
{% data reusables.reminders.add-reminder %}
{% data reusables.reminders.authorize-slack %}
{% data reusables.reminders.slack-channel %}
{% data reusables.reminders.days-dropdown %}
{% data reusables.reminders.times-dropdowns %}
{% data reusables.reminders.tracked-repos %}
11. [Filter by team assigned to review code] で、[**Add a team**] ドロップダウンをクリックし、1 つ以上の Team を選択します。 最大 100 チームまで追加できます。 選択した Team が、上で選択する [Tracked repositories] にアクセスできない場合は、スケジュールされたリマインダーは作成できません。 ![[Add a team] ドロップダウン](/assets/images/help/organizations/scheduled-reminders-add-teams.png)
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

### Organization のスケジュールされたリマインダーを管理する
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.reminders.scheduled-reminders %}
![[Scheduled reminders] ボタン](/assets/images/help/organizations/scheduled-reminders-org.png)
{% data reusables.reminders.edit-existing %}
{% data reusables.reminders.edit-page %}
{% data reusables.reminders.update-buttons %}

### Organization のスケジュールされたリマインダーを削除する
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.reminders.scheduled-reminders %}
![[Scheduled reminders] ボタン](/assets/images/help/organizations/scheduled-reminders-org.png)
{% data reusables.reminders.delete %}

### 参考リンク

- [スケジュールされたリマインダーの管理](/github/setting-up-and-managing-your-github-user-account/managing-your-scheduled-reminders)
- [Team のスケジュールされたリマインダーを管理する](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team)
