---
title: Watching and unwatching repositories
intro: You can watch a repository to receive notifications for new pull requests and issues that are created. You can also unwatch a repository if you no longer want to receive notifications for that specific repository.
versions:
  enterprise-server: <2.21
---

{% if currentVersion ver_gt "enterprise-server@2.17" %}
{% data reusables.notifications.auto-watch %} For more information, see "[About notifications](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-notifications)."
{% endif %}

You can also watch and unwatch releases in a repository. For more information, see "[Watching and unwatching releases for a repository](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-releases-for-a-repository)."

### Watching all repositories that you have push access to

{% data reusables.notifications.access_watching %}
2. Click **Watching**. ![Listing of watched repositories](/assets/images/help/notifications/notifications-watching-tab.png)
3. On the right side of the page, select **Automatically watch**. ![A checkbox for configuring watching repositories automatically](/assets/images/help/notifications/ent-automatically-watch-repos.png)

### Watching a single repository

{% data reusables.repositories.navigate-to-repo %}
2. In the upper-right corner, click **Watching** from the "Watch" drop-down menu. ![Watch options in a drop-down menu for a repository](/assets/images/help/notifications/watch-repository.png)

### Unwatching all repositories that you have push access to

{% data reusables.notifications.access_watching %}
2. Click **Watching**. ![Listing of watched repositories](/assets/images/help/notifications/notifications-watching-tab.png)
3. On the right side of the page, unselect **Automatically watch**. ![A checkbox for configuring watching repositories automatically](/assets/images/help/notifications/ent-automatically-watch-repos.png)

### Unwatching a single repository

{% data reusables.repositories.navigate-to-repo %}
2. In the upper-right corner, click **Unwatch** from the "Watch" drop-down menu. ![Watch options in a drop-down menu for a repository](/assets/images/help/notifications/unwatch-repository.png)

{% note %}

**Note:** You can also choose to ignore a repository. If you ignore a repository, you won't receive any notifications. We don't recommend ignoring repositories as you won't be notified if you're @mentioned. {% if currentVersion == "free-pro-team@latest" %}If you experiencing abuse and want to ignore a repository, please [contact support](/contact) so we can help. {% data reusables.policies.abuse %}{% endif %}

{% endnote %}

### Дополнительная литература

- "[Subscribing to and unsubscribing from notifications](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/subscribing-to-and-unsubscribing-from-notifications)"
- "[Listing the repositories you're watching](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/listing-the-repositories-youre-watching)"
