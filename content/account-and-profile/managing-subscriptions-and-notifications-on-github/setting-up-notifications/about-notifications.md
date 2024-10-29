---
title: About notifications
intro: 'Notifications provide updates about the activity on {% data variables.product.prodname_dotcom %} that you''ve subscribed to. You can use the notifications inbox to customize, triage, and manage your updates.'
redirect_from:
  - /articles/notifications
  - /articles/about-notifications
  - /github/managing-subscriptions-and-notifications-on-github/about-notifications-beta
  - /github/managing-subscriptions-and-notifications-on-github/about-notifications
  - /github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Notifications
---

## Notifications and subscriptions

You can choose to receive ongoing updates about specific activity on {% data variables.product.prodname_dotcom %} through a subscription. Notifications are updates that you receive for specific activity that you are subscribed to.

### Subscription options

You can choose to subscribe to notifications for:
* A conversation in a specific issue, pull request, or gist
* All activity in a repository{% ifversion team-discussions %} or team discussion{% endif %}
* CI activity, such as the status of workflows in repositories set up with {% data variables.product.prodname_actions %}
* Repository {% data reusables.notifications-v2.custom-notification-types %} (if enabled)

You can also choose to automatically watch all repositories that you have push access to, except forks. You can watch any other repository you have access to manually by clicking **Watch**.

If you're no longer interested in a conversation, you can unsubscribe, unwatch, or customize the types of notifications you'll receive in the future. For example, if you no longer want to receive notifications from a particular repository, you can click **Unsubscribe**. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github/managing-your-subscriptions)."

### Default subscriptions

In general, you are automatically subscribed to conversations by default when you have:
* Not disabled automatic watching for repositories or teams you've joined in your notification settings. This setting is enabled by default.
* Been assigned to an issue or pull request.
* Opened a pull request{% ifversion team-discussions %}, issue, or created a team discussion post{% else %} or issue{% endif %}.
* Commented on a thread.
* Subscribed to a thread manually by clicking **Watch** or **Subscribe**.
* Had your username @mentioned.
* Changed the state of a thread, such as by closing an issue or merging a pull request.
* Had a team you're a member of @mentioned.

By default, you also automatically watch all repositories that you create and are owned by your personal account.

To unsubscribe from conversations you're automatically subscribed to, you can change your notification settings or directly unsubscribe or unwatch activity on {% data variables.product.prodname_dotcom %}. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github/managing-your-subscriptions)."

## Customizing notifications and subscriptions

You can choose to view your notifications through the notifications inbox at [https://github.com/notifications](https://github.com/notifications) and in the {% data variables.product.prodname_mobile %} app, through your email, or some combination of these options.

To customize the types of updates you'd like to receive and where to send those updates, configure your notification settings. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications)."

To keep your subscriptions manageable, review your subscriptions and watched repositories and unsubscribe as needed. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)."

To customize how you'd like to receive updates for specific pull requests or issues, you can configure your preferences within the issue or pull request. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/triaging-a-single-notification#customizing-when-to-receive-future-updates-for-an-issue-or-pull-request)."

You can customize and schedule push notifications in the {% data variables.product.prodname_mobile %} app. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#managing-your-notification-settings-with-github-mobile)."

## Reasons for receiving notifications

Your inbox is configured with default filters, which represent the most common reasons that people need to follow-up on their notifications. For more information about inbox filters, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/managing-notifications-from-your-inbox#default-notification-filters)."

Your inbox shows the `reason` you're receiving a notification as a label, such as, `mention`, `subscribed`, or `review requested`.

You can filter your inbox by the reason you're subscribed to notifications. For example, to only see pull requests where someone requested your review, you can use the `reason:review-requested` query filter.

If you've configured notifications to be sent by email and believe you're receiving notifications that don't belong to you, consider troubleshooting with email headers, which show the intended recipient. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#filtering-email-notifications)."

## Triaging notifications from your inbox

To effectively manage your notifications, you can triage your inbox with options to:
* Remove a notification from the inbox with **Done**. You can review **Done** notifications all in one place by clicking **Done** in the sidebar or by using the query `is:done`.
* Mark a notification as read or unread.
* **Save** a notification for later review. **Saved** notifications are flagged in your inbox. You can review **Saved** notifications all in one place in the sidebar by clicking **Saved** or by using the query `is:saved`.
* Automatically unsubscribe from this notification and future updates from this conversation. Unsubscribing also removes the notification from your inbox. If you unsubscribe from a conversation and someone mentions your username or a team you're on that you're receiving updates for, then you will start to receive notifications from this conversation again.

From your inbox you can also triage multiple notifications at once. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/managing-notifications-from-your-inbox#triaging-multiple-notifications-at-the-same-time)."

## Customizing your notifications inbox

To focus on a group of notifications in your inbox, you can create custom filters. For example, you can create a custom filter for an open source project you contribute to and only see notifications for that repository in which you are mentioned. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/managing-notifications-from-your-inbox)." For more examples of how to customize your triaging workflow, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/customizing-a-workflow-for-triaging-your-notifications)."

## Notification retention policy

Notifications that are not marked as **Saved** are kept for 5 months. Notifications marked as **Saved** are kept indefinitely. If your saved notification is older than 5 months and you unsave it, the notification will disappear from your inbox within a day.

## Feedback and support

If you have feedback or feature requests for notifications, use a [{% data variables.product.prodname_github_community %} discussion](https://github.com/orgs/community/discussions/categories/general).
