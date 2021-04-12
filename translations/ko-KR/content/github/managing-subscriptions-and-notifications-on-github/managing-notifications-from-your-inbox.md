---
title: Managing notifications from your inbox
intro: 'Use your inbox to quickly triage and sync your notifications across email{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %} and mobile{% endif %}.'
redirect_from:
  - /articles/marking-notifications-as-read
  - /articles/saving-notifications-for-later
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
  github-ae: '*'
topics:
  - notifications
---

{% if enterpriseServerVersions contains currentVersion %}
{% data reusables.mobile.ghes-release-phase %}
{% endif %}

### About your inbox

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %}
{% data reusables.notifications-v2.notifications-inbox-required-setting %} For more information, see "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)."
{% endif %}

To access your notifications inbox, in the upper-right corner of any page, click {% octicon "bell" aria-label="The notifications bell" %}.

  ![Notification indicating any unread message](/assets/images/help/notifications/notifications_general_existence_indicator.png)

Your inbox shows all of the notifications that you haven't unsubscribed to or marked as **Done.** You can customize your inbox to best suit your workflow using filters, viewing all or just unread notifications, and grouping your notifications to get a quick overview.

  ![inbox view](/assets/images/help/notifications-v2/inbox-view.png)

By default, your inbox will show read and unread notifications. To only see unread notifications, click **Unread** or use the `is:unread` query.

  ![unread inbox view](/assets/images/help/notifications-v2/unread-inbox-view.png)

### Triaging options

You have several options for triaging notifications from your inbox.

| Triaging option | 설명                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Save            | Saves your notification for later review. To save a notification, to the right of the notification, click {% octicon "bookmark" aria-label="The bookmark icon" %}. <br> <br> Saved notifications are kept indefinitely and can be viewed by clicking **Saved** in the sidebar or with the `is:saved` query. If your saved notification is older than 5 months and becomes unsaved, the notification will disappear from your inbox within a day. |
| Done            | Marks a notification as completed and removes the notification from your inbox. You can see all completed notifications by clicking **Done** in the sidebar or with the `is:done` query. Notifications marked as **Done** are saved for 5 months.                                                                                                                                                                                                            |
| Unsubscribe     | Automatically removes the notification from your inbox and unsubscribes you from the conversation until you are @mentioned, a team you're on is @mentioned, or you're requested for review.                                                                                                                                                                                                                                                                  |
| Read            | Marks a notification as read. To only view read notifications in your inbox, use the `is:read` query. This query doesn't include notifications marked as **Done**.                                                                                                                                                                                                                                                                                           |
| Unread          | Marks notification as unread. To only view unread notifications in your inbox, use the `is:unread` query.                                                                                                                                                                                                                                                                                                                                                    |

To see the available keyboard shortcuts, see "[Keyboard Shortcuts](/github/getting-started-with-github/keyboard-shortcuts#notifications)."

Before choosing a triage option, you can preview your notification's details first and investigate. For more information, see "[Triaging a single notification](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification)."

### Triaging multiple notifications at the same time

To triage multiple notifications at once, select the relevant notifications and use the {% octicon "kebab-horizontal" aria-label="The edit icon" %} drop-down to choose a triage option.

![Drop-down menu with triage options and selected notifications](/assets/images/help/notifications-v2/triage-multiple-notifications-together.png)

### Default notification filters

By default, your inbox has filters for when you are assigned, participating in a thread, requested to review a pull request, or when your username is @mentioned directly or a team you're a member of is @mentioned.

  ![Default custom filters](/assets/images/help/notifications-v2/default-filters.png)

### Customizing your inbox with custom filters

You can add up to 15 of your own custom filters.

{% data reusables.notifications.access_notifications %}
2. To open the filter settings, in the left sidebar, next to "Filters", click {% octicon "gear" aria-label="The Gear icon" %}.

  {% tip %}

  **Tip:** You can quickly preview a filter's inbox results by creating a query in your inbox view and clicking **Save**, which opens the custom filter settings.

  {% endtip %}

3. Add a name for your filter and a filter query. For example, to only see notifications for a specific repository, you can create a filter using the query `repo:octocat/open-source-project-name reason:participating`. You can also add emojis with a native emoji keyboard. For a list of supported search queries, see "[Supported queries for custom filters](#supported-queries-for-custom-filters)."

  ![Custom filter example](/assets/images/help/notifications-v2/custom-filter-example.png)

4. Click **Create**.

### Custom filter limitations

Custom filters do not currently support:
  - Full text search in your inbox, including searching for pull request or issue titles.
  - Distinguishing between the `is:issue`, `is:pr`, and `is:pull-request` query filters. These queries will return both issues and pull requests.
  - Creating more than 15 custom filters.
  - Changing the default filters or their order.
  - Search [exclusion](/github/searching-for-information-on-github/understanding-the-search-syntax#exclude-certain-results) using `NOT` or `-QUALIFIER`.

### Supported queries for custom filters

These are the types of filters that you can use:
  - Filter by repository with `repo:`
  - Filter by discussion type with `is:`
  - Filter by notification reason with `reason:`{% if currentVersion == "free-pro-team@latest" %}
  - Filter by notification author with `author:`
  - Filter by organization with `org:`{% endif %}

#### Supported `repo:` queries

To add a `repo:` filter, you must include the owner of the repository in the query: `repo:owner/repository`. An owner is the organization or the user who owns the {% data variables.product.prodname_dotcom %} asset that triggers the notification. For example, `repo:octo-org/octo-repo` will show notifications triggered in the octo-repo repository within the octo-org organization.

#### Supported `is:` queries

To filter notifications for specific activity on {% data variables.product.product_name %}, you can use the  `is` query. For example, to only see repository invitation updates, use `is:repository-invitation`{% if currentVersion != "github-ae@latest" %}, and to only see {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %} security{% endif %} alerts, use `is:repository-vulnerability-alert`.{% endif %}

- `is:check-suite`
- `is:commit`
- `is:gist`
- `is:issue-or-pull-request`
- `is:release`
- `is:repository-invitation`{% if currentVersion != "github-ae@latest" %}
- `is:repository-vulnerability-alert`
- `is:repository-advisory`{% endif %}
- `is:team-discussion`{% if currentVersion == "free-pro-team@latest" %}
- `is:discussions`{% endif %}

{% if currentVersion != "github-ae@latest" %}
For information about reducing noise from notifications for
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %}, see "[Configuring notifications for vulnerable dependencies](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies)."
{% endif %}

You can also use the `is:` query to describe how the notification was triaged.

- `is:saved`
- `is:done`
- `is:unread`
- `is:read`

#### Supported `reason:` queries

To filter notifications by why you've received an update, you can use the `reason:` query. For example, to see notifications when you (or a team you're on) is requested to review a pull request, use `reason:review-requested`. For more information, see "[About notifications](/github/managing-subscriptions-and-notifications-on-github/about-notifications#reasons-for-receiving-notifications)."

| Query                     | 설명                                                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `reason:assign`           | When there's an update on an issue or pull request you've been assigned to.                                        |
| `reason:author`           | When you opened a pull request or issue and there has been an update or new comment.                               |
| `reason:comment`          | When you commented on an issue, pull request, or team discussion.                                                  |
| `reason:participating`    | When you have commented on an issue, pull request, or team discussion or you have been @mentioned.                 |
| `reason:invitation`       | When you're invited to a team, organization, or repository.                                                        |
| `reason:manual`           | When you click **Subscribe** on an issue or pull request you weren't already subscribed to.                        |
| `reason:mention`          | You were directly @mentioned.                                                                                      |
| `reason:review-requested` | You or a team you're on have been requested to review a pull request.{% if currentVersion != "github-ae@latest" %}
| `reason:security-alert`   | When a security alert is issued for a repository.{% endif %}
| `reason:state-change`     | When the state of a pull request or issue is changed. For example, an issue is closed or a pull request is merged. |
| `reason:team-mention`     | When a team you're a member of is @mentioned.                                                                      |
| `reason:ci-activity`      | When a repository has a CI update, such as a new workflow run status.                                              |

{% if currentVersion == "free-pro-team@latest" %}
#### Supported `author:` queries

To filter notifications by user, you can use the `author:` query. An author is the original author of the thread (issue, pull request, gist, discussions, and so on) for which you are being notified. For example, to see notifications for threads created by the Octocat user, use `author:octocat`.

#### Supported `org:` queries

To filter notifications by organization, you can use the  `org` query. The organization you need to specify in the query is the organization of the repository for which you are being notified on {% data variables.product.prodname_dotcom %}. This query is useful if you belong to several organizations, and want to see notifications for a specific organization.

For example, to see notifications from the octo-org organization, use `org:octo-org`.

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
### {% data variables.product.prodname_dependabot %} custom filters

{% if currentVersion == "free-pro-team@latest" %}
If you use
{% data variables.product.prodname_dependabot %} to keep your dependencies up-to-date, you can use and save these custom filters:
- `is:repository_vulnerability_alert` to show notifications for {% data variables.product.prodname_dependabot_alerts %}.
- `reason:security_alert` to show notifications for {% data variables.product.prodname_dependabot_alerts %} and security update pull requests.
- `author:app/dependabot` to show notifications generated by {% data variables.product.prodname_dependabot %}. This includes {% data variables.product.prodname_dependabot_alerts %}, security update pull requests, and version update pull requests.
For more information about

{% data variables.product.prodname_dependabot %}, see "[About managing vulnerable dependencies](/github/managing-security-vulnerabilities/about-managing-vulnerable-dependencies)."
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}
If you use
{% data variables.product.prodname_dependabot %} to keep your dependencies-up-to-date, you can use and save the `is:repository_vulnerability_alert` custom filter to show notifications for {% data variables.product.prodname_dependabot_alerts %}.
For more information about

{% data variables.product.prodname_dependabot %}, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."
{% endif %}

{% endif %}
