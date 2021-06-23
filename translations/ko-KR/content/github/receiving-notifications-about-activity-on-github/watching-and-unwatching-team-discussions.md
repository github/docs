---
title: Watching and unwatching team discussions
intro: You can watch a team to receive notifications for team discussions. You can unwatch a team if you no longer want to receive notifications for that team's discussions.
versions:
  enterprise-server: <2.21
---

By default, you'll automatically receive notifications for team discussions you're a member of. If you don't want to receive certain notifications for an existing team discussion, you must unwatch that team. You can also unsubscribe or subscribe to specific team discussion posts. For more information, see "[About team discussions](/articles/about-team-discussions)" and "[Subscribing to and unsubscribing from notifications](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/subscribing-to-and-unsubscribing-from-notifications)."

If you don't want to automatically watch team discussions when you become a member of new teams, you can update your automatic watching settings.

### Watching all team discussions for new teams you join

To automatically watch all team discussions for new teams you join, set your automatic watching notification settings.

{% note %}

**Note:** By default, this setting is set to **Automatically watching teams**.

{% endnote %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.notifications %}
{% data reusables.user_settings.automatic_watching_box %} select **Automatically watch teams**.
![Checkbox for automatically watching teams](/assets/images/help/notifications/automatic-team-discussions-watching.png)

### Watching a single team's discussions

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.watch-team-options %} click **Watch** to open your notifications options. Then click **Watching**.
![Watch options in a drop-down menu for a specific team](/assets/images/help/notifications/specific-team-watch-options.png)

### Unwatching team discussions for all new teams you join

If you don't want to automatically receive team discussion notifications when you join a team, you can change your notification settings to unwatch all new teams you join.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.notifications %}
{% data reusables.user_settings.automatic_watching_box %} unselect **Automatically watch teams**.
![Automatically watching teams setting selected by default](/assets/images/help/notifications/automatic-team-discussions-watching.png)

### Unwatching a single team's discussions

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.watch-team-options %} click **Unwatch** to open your notifications options. Then click **Not watching**.
![Watch options in a drop-down menu for a specific team](/assets/images/help/notifications/specific-team-unwatch.png)

{% note %}

**Note:** You can also choose to ignore a team's notifications. If you ignore a team, you won't receive any notifications. We don't recommend ignoring teams as you won't be notified if you're @mentioned.

{% endnote %}

### 더 읽을거리

- "[About notifications](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)"
- "[About team discussions](/articles/about-team-discussions)"
- "[About teams](/articles/about-teams)"
