---
title: Managing your subscriptions
intro: 'To help you manage your notifications efficiently, there are several ways to unsubscribe.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
redirect_from:
  - /github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions
  - /github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github/managing-your-subscriptions
shortTitle: Manage your subscriptions
---
To help you understand your subscriptions and decide whether to unsubscribe, see "[Viewing your subscriptions](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions)."

{% note %}

**Note:** Instead of unsubscribing, you have the option to ignore a repository. If you ignore a repository, you won't receive any notifications. We don't recommend ignoring repositories as you won't be notified if you're @mentioned. {% ifversion fpt or ghec %}If you're experiencing abuse and want to ignore a repository, please contact {% data variables.contact.contact_support %} so we can help. {% data reusables.policies.abuse %}{% endif %}

{% endnote %}

## Choosing how to unsubscribe

To unwatch (or unsubscribe from) repositories quickly, navigate to [github.com/watching](https://github.com/watching) to see all the repositories you're following. For more information, see "[Unwatching repositories](#unwatching-repositories)."

To unsubscribe from multiple notifications at the same time, you can unsubscribe using your inbox or on the subscriptions page. Both of these options offer more context about your subscriptions than the "Watched repositories" page.

### Benefits of unsubscribing from your inbox

When you unsubscribe from notifications in your inbox, you have several other triaging options and can filter your notifications by custom filters and discussion types. For more information, see "[Managing notifications from your inbox](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox)."

### Benefits of unsubscribing from the subscriptions page

When you unsubscribe from notifications on the subscriptions page, you can see more of the notifications you're subscribed to and sort them by "Most recently subscribed" or "Least recently subscribed".

The subscriptions page shows you all of the notifications that you're currently subscribed to, including notifications that you have marked as **Done** in your inbox.

You can only filter your subscriptions by repository and the reason you're receiving the notification.

## Unsubscribing from notifications in your inbox

When you unsubscribe from notifications in your inbox, they will automatically disappear from your inbox.

{% data reusables.notifications.access_notifications %}
1. From the notifications inbox, select the notifications you want to unsubscribe to.
2. Click **Unsubscribe.**
  ![Unsubscribe option from main inbox](/assets/images/help/notifications-v2/unsubscribe-from-main-inbox.png)

## Unsubscribing from notifications on the subscriptions page

{% data reusables.notifications.access_notifications %}
1. In the left sidebar, under the list of repositories, use the "Manage notifications" drop-down to click **Subscriptions**.
  ![Manage notifications drop down menu options](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. Select the notifications you want to unsubscribe to. In the top right, click **Unsubscribe.**
  ![Subscriptions page](/assets/images/help/notifications-v2/unsubscribe-from-subscriptions-page.png)

## Unwatching repositories

When you unwatch a repository, you unsubscribe from future updates from that repository unless you participate in a conversation or are @mentioned.

{% data reusables.notifications.access_notifications %}
1. In the left sidebar, under the list of repositories, use the "Manage notifications" drop-down to click **Watched repositories**.

  ![Manage notifications drop down menu options](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. On the watched repositories page, after you've evaluated the repositories you're watching, choose whether to:
   
   - Unwatch a repository
   - Ignore all notifications for a repository
   - If enabled, customize the types of event you receive notifications for ({% data reusables.notifications-v2.custom-notification-types %})
   
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
1. Optionally, to unsubscribe from all repositories owned by a given user or organization, select the **Unwatch all** dropdown and click the organization whose repositories you'd like to unsubscribe from. The button to unwatch all repositories is only available if you are watching all activity or custom notifications on over 10 repositories.

   ![Screenshot of the Unwatch All button.](/assets/images/help/notifications-v2/unsubscribe-from-all-repos.png)

   - Click **Unwatch** to confirm that you want to unwatch the repositories owned by the selected user or organization, or click **Cancel** to cancel.

   ![Screenshot of the unwatch all confirmation dialogue.](/assets/images/help/notifications-v2/unwatch-repo-dialog.png)

{% endif %}
