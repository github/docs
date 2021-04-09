---
title: 管理团队的预定提醒
intro: 当您的团队有等待审查的拉取请求时，您可以在 Slack 中收到提醒。
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests
versions:
  free-pro-team: '*'
topics:
  - 组织
  - 团队
---

### 关于团队的预定提醒

{% data reusables.reminders.about-scheduled-reminders-teams-orgs %}

团队维护员和组织所有者可为团队已请求审查的任何拉取请求设置预定提醒。 组织所有者必须先授权您的 Slack 工作区，然后您才可为团队创建预定提醒。 更多信息请参阅“[管理组织的预定提醒](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-your-organization)”。

{% data reusables.reminders.scheduled-reminders-limitations %}

### 为团队创建预定提醒
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% data reusables.reminders.scheduled-reminders %}
![预定提醒按钮](/assets/images/help/teams/scheduled-reminders-teams.png)
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

### 管理团队的预定提醒
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% data reusables.reminders.scheduled-reminders %}
![预定提醒按钮](/assets/images/help/teams/scheduled-reminders-teams.png)
{% data reusables.reminders.edit-existing %}
{% data reusables.reminders.edit-page %}
{% data reusables.reminders.update-buttons %}

### Deleting a scheduled reminder for a team
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% data reusables.reminders.scheduled-reminders %}
![预定提醒按钮](/assets/images/help/teams/scheduled-reminders-teams.png)
{% data reusables.reminders.delete %}

### 延伸阅读

- “[管理组织的预定提醒](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-your-organization)”
- “[管理您的预定提醒](/github/setting-up-and-managing-your-github-user-account/managing-your-scheduled-reminders)”
