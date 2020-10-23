---
title: Managing your subscriptions
intro: 'To help you manage your notifications efficiently, there are several ways to unsubscribe.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
---

To help you understand your subscriptions and decide whether to unsubscribe, see "[Viewing your subscriptions](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions)."

{% note %}

**Note:** Instead of unsubscribing, you have the option to ignore a repository. If you ignore a repository, you won't receive any notifications. We don't recommend ignoring repositories as you won't be notified if you're @mentioned. {% if currentVersion == "free-pro-team@latest" %}If you're experiencing abuse and want to ignore a repository, please [contact support](/contact) so we can help. {% data reusables.policies.abuse %}{% endif %}

{% endnote %}

### Choosing how to unsubscribe

To unwatch (or unsubscribe from) repositories quickly, go to the "Watched repositories" page, where you can see all repositories you're watching. For more information, see "[Unwatch a repository](#unwatch-a-repository)."

To unsubscribe from multiple notifications at the same time, you can unsubscribe using your inbox or on the subscriptions page. Both of these options offer more context about your subscriptions than the "Watched repositories" page.

#### Benefits of unsubscribing from your inbox

When you unsubscribe from notifications in your inbox, you have several other triaging options and can filter your notifications by custom filters and discussion types. For more information, see "[Managing notifications from your inbox](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox)."

#### Benefits of unsubscribing from the subscriptions page

When you unsubscribe from notifications on the subscriptions page, you can see more of the notifications you're subscribed to and sort them by "Most recently subscribed" or "Least recently subscribed".

The subscriptions page shows you all of the notifications that you're currently subscribed to, including notifications that you have marked as **Done** in your inbox.

You can only filter your subscriptions by repository and the reason you're receiving the notification.

### Unsubscribing from notifications in your inbox

When you unsubscribe from notifications in your inbox, they will automatically disappear from your inbox.

{% data reusables.notifications.access_notifications %}
1. From the notifications inbox, select the notifications you want to unsubscribe to.
2. Use the **selected** {% octicon "triangle-down" aria-label="The down triangle icon" %} drop-down to click **Unsubscribe.**
  ![Unsubcribe option from main inbox](/assets/images/help/notifications-v2/unsubscribe-from-main-inbox.png)

### Unsubscribing from notifications on the subscriptions page

{% data reusables.notifications.access_notifications %}
1. In the left sidebar, under the list of repositories, use the "Manage notifications" drop-down to click **Subscriptions**.
  ![Manage notifications drop down menu options](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. Select the notifications you want to unsubscribe to. In the top right, click **Unsubscribe.**
  ![Subscriptions page](/assets/images/help/notifications-v2/unsubscribe-from-subscriptions-page.png)

### Unwatch a repository

When you unwatch a repository, you unsubscribe from future updates from that repository unless you participate in a conversation or are @mentioned.

{% data reusables.notifications.access_notifications %}
1. In the left sidebar, under the list of repositories, use the "Manage notifications" drop-down to click **Watched repositories**.
  ![Manage notifications drop down menu options](/assets/images/help/notifications-v2/manage-notifications-options.png)
2. On the watched repositories page, after you've evaluated the repositories you're watching, choose whether to:
    - unwatch a repository
    - only watch releases for a repository
    - ignore all notifications for a repository
