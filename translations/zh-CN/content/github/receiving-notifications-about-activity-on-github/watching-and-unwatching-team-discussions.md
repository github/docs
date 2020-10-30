---
title: 关注和取消关注团队讨论
intro: 您可以关注团队以接收团队讨论的通知。 如果不想再接收该团队讨论的通知，您也可以取消关注团队。
versions:
  enterprise-server: <2.21
---

默认情况下，您将自动接收所属团队讨论的通知。 如果不想接收现有团队讨论的某些通知，您必须取消关注该团队。 您还可以取消订阅或订阅特定团队讨论帖子。 更多信息请参阅“[关于团队讨论](/articles/about-team-discussions)”和“[订阅和退订通知](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/subscribing-to-and-unsubscribing-from-notifications)”。

如果不想在成为新团队成员时自动关注团队讨论，则可以更新自动关注设置。

### 关注您加入的新团队的所有团队讨论

要自动关注您加入的新团队的所有团队讨论，请设置自动关注通知设置。

{% note %}

**注：**默认情况下，此设置设为 **Automatically watching teams（自动关注团队）**。

{% endnote %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.notifications %}
{% data reusables.user_settings.automatic_watching_box %} select **Automatically watch teams**. ![自动关注团队的复选框](/assets/images/help/notifications/automatic-team-discussions-watching.png)

### 关注单个团队讨论

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.watch-team-options %} click **Watch** to open your notifications options. 然后单击 **Watching（关注）**。 ![特定团队下拉菜单中的关注选项](/assets/images/help/notifications/specific-team-watch-options.png)

### 取消关注您加入的所有新团队的团队讨论

如果不想在加入团队时自动接收团队讨论通知，则可以更改通知设置以取消关注您加入的所有新团队。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.notifications %}
{% data reusables.user_settings.automatic_watching_box %} unselect **Automatically watch teams**. ![默认选择的自动关注团队设置](/assets/images/help/notifications/automatic-team-discussions-watching.png)

### 取消关注单个团队讨论

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.watch-team-options %} click **Unwatch** to open your notifications options. 然后单击 **Not watching（不再关注）**。 ![特定团队下拉菜单中的关注选项](/assets/images/help/notifications/specific-team-unwatch.png)

{% note %}

**注：**您也可以选择忽略团队的通知。 如果忽略团队，将不会收到任何通知。 我们不建议忽略团队，因为这样您被@提及时将不会收到通知。

{% endnote %}

### 延伸阅读

- "[关于通知](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)"
- "[关于团队讨论](/articles/about-team-discussions)"
- "[关于团队](/articles/about-teams)"
