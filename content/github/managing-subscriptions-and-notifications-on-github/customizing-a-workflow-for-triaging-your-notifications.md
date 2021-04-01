---
title: Customizing a workflow for triaging your notifications
intro: 'To create an ideal workflow for triaging your notifications, you can adapt and customize these example workflows.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
  github-ae: '*'
topics:
  - notifications
---

### Starting your inbox triage

Before you start triaging your inbox, consider whether you prefer to first find and respond to the most important updates or to clear your inbox of distracting updates that are easy to remove or triage.

You may decide to use a combination of both approaches at various times depending on the volume of notifications you have.

For an example workflow of finding and responding to the most important notifications, see "[Checking your highest notification priorities](#checking-your-highest-notification-priorities)."

For an example workflow of removing notifications that are easy to remove or triage, see "[Clearing your least important notifications](#clearing-your-least-important-notifications)."

### Checking your highest notification priorities

Choose which type of notifications are most urgent to review and pick a time to review them that's best for you. You might consider the question "Who am I blocking?"

For example, you may decide to check your notifications in this order in the morning during your daily planning time:
  - Pull requests where your review is requested. (filter by `reason:review-requested`)
  - Events where your username is @mentioned, also called direct mentions. (filter by `reason:mention`)
  - Events where a team you're a member of is @mentioned, also called team mentions. (filter by `reason:team-mention`)
  - CI workflow failures for a specific repository. (filter by `reason:ci-activity` and `repo:owner/repo-name` and ensure you've enabled CI activity notifications for workflow failures in your notification settings)

  {% tip %}

  **Tip:** To quickly review your highest priorities, set up custom filters in order of their reviewing priority. For more information, see "[Managing notifications from your inbox](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#customizing-your-inbox-with-custom-filters)."

  {% endtip %}

### Following up on ongoing notification updates

To follow-up on notifications, you might consider the question "What was I blocked on that I'm no longer blocked on?" Choose your follow-up notification priorities.

For example, you may decide to follow up in this order:
  - Issues and pull requests you're assigned to. Immediately close any issues or pull requests you can and add updates. As needed, save notifications to review later.
  - Review notifications in the saved inbox, especially unread updates. If the thread is no longer relevant, uncheck {% octicon "bookmark" aria-label="The bookmark icon" %} to remove the notification from the saved inbox and unsave it.

### Managing lower-priority notifications

After triaging the higher priority notifications, review the remaining notifications, such as participating notifications. Consider these questions:
  - Can you unsubscribe to this notification? Is this notification completed and ready to be marked as **Done**?
  {% tip %}

  **Tip:** When you unsubscribe from a notification you won't receive new updates unless you start participating in the thread or you're @mentioned or a team you're on is @mentioned. When you mark a notification as **Done**, the notification is removed from your main inbox view and can be viewed with the query `is:read`. For more information, see "[Managing notifications from your inbox](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-options)."

  {% endtip %}
  - Would you like to receive future updates when this issue or pull request is closed or reopened, or when a pull request is merged? For more information on these options, see "[Triaging a single notification](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification#customizing-when-to-receive-future-updates-for-an-issue-or-pull-request)."
  - Would you like to avoid receiving notifications like this in the future? If so, consider unsubscribing. For more information, see "[Managing subscriptions for activity on GitHub](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)."

### Clearing your least important notifications

Choose which type of notifications are quickest and easiest for you to triage and remove from your inbox, ideally triaging multiple notifications at once.

For example, you may decide to clear notifications in this order:
  - Participating notifications that you can unsubscribe to.
  - Repository updates that are not relevant to keep or follow-up on.

For more information on managing multiple notifications in your inbox at the same time, see "[Managing notifications from your inbox](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-multiple-notifications-at-the-same-time)."

You may also consider changing your notification settings or unsubscribing from these updates if possible. For more information, see "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)" or "[Managing subscriptions for activity on GitHub](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)."
