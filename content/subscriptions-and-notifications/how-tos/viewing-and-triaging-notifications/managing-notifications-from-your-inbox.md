---
title: Managing notifications from your inbox
intro: Use your inbox to quickly triage and sync your notifications across email and mobile.
redirect_from:
  - /articles/marking-notifications-as-read
  - /articles/saving-notifications-for-later
  - /github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox
  - /github/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/managing-notifications-from-your-inbox
  - /account-and-profile/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/managing-notifications-from-your-inbox
  - /subscriptions-and-notifications/viewing-and-triaging-notifications/managing-notifications-from-your-inbox
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Notifications
shortTitle: Manage from your inbox
---

## Prerequisites

{% data reusables.notifications-v2.notifications-inbox-required-setting %} For more information, see [AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#choosing-your-notification-settings).

## Accessing your inbox

To access your notifications inbox, in the upper-right corner of any page, click {% octicon "inbox" aria-label="The notifications inbox" %}.

Your inbox shows all of the notifications that you haven't unsubscribed to or marked as **Done.** You can customize your inbox to best suit your workflow using filters, viewing all or just unread notifications, and grouping your notifications to get a quick overview.

By default, your inbox will show read and unread notifications. To only see unread notifications, click **Unread** or use the `is:unread` query.

## Triaging options

You have several options for triaging notifications from your inbox.

| Triaging option | Description |
|-----------------|-------------|
| Save            | Saves your notification for later review. To save a notification, to the right of the notification, click {% octicon "bookmark" aria-label="Save" %}. <br> <br> Saved notifications are kept indefinitely and can be viewed by clicking **Saved** in the sidebar or with the `is:saved` query. If your saved notification is older than 5 months and becomes unsaved, the notification will disappear from your inbox within a day. |
| Done            | Marks a notification as completed and removes the notification from your inbox. You can see all completed notifications by clicking **Done** in the sidebar or with the `is:done` query. Notifications marked as **Done** are saved for 5 months.
| Unsubscribe     | Automatically removes the notification from your inbox and unsubscribes you from the conversation until you are @mentioned, a team you're on is @mentioned, or you're requested for review.
| Read            | Marks a notification as read. To only view read notifications in your inbox, use the `is:read` query. This query doesn't include notifications marked as **Done**.
| Unread          | Marks notification as unread. To only view unread notifications in your inbox, use the `is:unread` query. |

To see the available keyboard shortcuts, see [AUTOTITLE](/get-started/accessibility/keyboard-shortcuts#notifications).

Before choosing a triage option, you can preview your notification's details first and investigate. For more information, see [AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/triaging-a-single-notification).

## Triaging multiple notifications at the same time

To triage multiple notifications at once, select the relevant notifications and use the {% octicon "kebab-horizontal" aria-label="More options" %} drop-down to choose a triage option.

![Screenshot of the "Notifications" page. A drop-down menu is highlighted with an orange outline.](/assets/images/help/notifications-v2/triage-multiple-notifications-together.png)

## Default notification filters

By default, your inbox has filters for when you are assigned, participating in a thread, requested to review a pull request, or when your username is @mentioned directly or a team you're a member of is @mentioned.

## Customizing your inbox with custom filters

You can add up to 15 of your own custom filters. For information about the available filters, see [AUTOTITLE](/subscriptions-and-notifications/reference/inbox-filters).

{% data reusables.notifications.access_notifications %}
1. To open the filter settings, in the left sidebar, next to "Filters", click {% octicon "gear" aria-label="Customize filters" %}.

   > [!TIP]
   > You can quickly preview a filter's inbox results by creating a query in your inbox view and clicking **Save**, which opens the custom filter settings.

1. Add a name for your filter and a filter query. For example, to only see notifications for a specific repository, you can create a filter using the query `repo:octocat/open-source-project-name reason:participating`. You can also add emojis with a native emoji keyboard. For a list of supported search queries, see [AUTOTITLE](/subscriptions-and-notifications/reference/inbox-filters).

   ![Screenshot showing notification filters. Two input fields, with an example name and filter query filled in, are highlighted with an orange outline.](/assets/images/help/notifications-v2/custom-filter-example.png)

1. Click **Create**.
