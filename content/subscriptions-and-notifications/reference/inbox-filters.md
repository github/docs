---
title: Inbox filters
intro: 'Learn about filtering notifications in your {% data variables.product.prodname_dotcom %} inbox.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Notifications
---

You can create custom filters for your inbox using the following supported filters. For more information about creating custom filters, see [AUTOTITLE](/subscriptions-and-notifications/how-tos/viewing-and-triaging-notifications/managing-notifications-from-your-inbox#customizing-your-inbox-with-custom-filters).

## Custom filter limitations

Custom filters do not currently support:

* Full text search in your inbox, including searching for pull request or issue titles
* Distinguishing between the `is:issue`, `is:pr`, and `is:pull-request` query filters. These queries will return both issues and pull requests.
* Creating more than 15 custom filters
* Changing the default filters or their order
* Search [exclusion](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#exclude-certain-results) using `NOT` or `-QUALIFIER`

## Supported queries for custom filters

These are the types of filters that you can use:
* Filter by repository with `repo:`
* Filter by discussion type with `is:`
* Filter by notification reason with `reason:`{% ifversion fpt or ghec %}
* Filter by notification author with `author:`
* Filter by organization with `org:`{% endif %}

### Supported `repo:` queries

To add a `repo:` filter, you must include the owner of the repository in the query: `repo:owner/repository`. An owner is the organization or the user who owns the {% data variables.product.prodname_dotcom %} asset that triggers the notification. For example, `repo:octo-org/octo-repo` will show notifications triggered in the octo-repo repository within the octo-org organization.

### Supported `is:` queries

To filter notifications for specific activity on {% data variables.product.prodname_dotcom %}, you can use the `is` query. For example, to only see repository invitation updates, use `is:repository-invitation`, and to only see {% data variables.product.prodname_dependabot_alerts %}, use `is:repository-vulnerability-alert`.

* `is:check-suite`
* `is:commit`
* `is:gist`
* `is:issue-or-pull-request`
* `is:release`
* `is:repository-invitation`
* `is:repository-vulnerability-alert`{% ifversion fpt or ghec %}
* `is:repository-advisory`{% endif %}{% ifversion fpt or ghec %}
* `is:discussion`{% endif %}

For information about reducing noise from notifications for {% data variables.product.prodname_dependabot_alerts %}, see [AUTOTITLE](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts).

You can also use the `is:` query to describe how the notification was triaged.

* `is:saved`
* `is:done`
* `is:unread`
* `is:read`

### Supported `reason:` queries

To filter notifications by why you've received an update, you can use the `reason:` query. For example, to see notifications when you (or a team you're on) is requested to review a pull request, use `reason:review-requested`. For more information, see [AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications#reasons-for-receiving-notifications).

| Query | Description |
|-----------------|-------------|
| `reason:assign` | When there's an update on an issue or pull request you've been assigned to.
| `reason:author` | When you opened a pull request or issue and there has been an update or new comment.
| `reason:comment`| When you commented on an issue or pull request.
| `reason:participating` | When you have commented on an issue or pull request or you have been @mentioned.
| `reason:invitation` | When you're invited to a team, organization, or repository.
| `reason:manual` | When you click **Subscribe** on an issue or pull request you weren't already subscribed to.
| `reason:mention` | You were directly @mentioned.
| `reason:review-requested` | You or a team you're on have been requested to review a pull request.
| `reason:security-alert` | When a security alert is issued for a repository.
| `reason:state-change`  | When the state of a pull request or issue is changed. For example, an issue is closed or a pull request is merged.
| `reason:team-mention` | When a team you're a member of is @mentioned.
| `reason:ci-activity` | When a repository has a CI update, such as a new workflow run status.

{% ifversion fpt or ghec %}

### Supported `author:` queries

To filter notifications by user, you can use the `author:` query. An author is the original author of the thread (for example: in an issue, pull request, gist, or discussion) for which you are being notified. For example, to see notifications for threads created by the Octocat user, use `author:octocat`.

### Supported `org:` queries

To filter notifications by organization, you can use the `org` query. The organization you need to specify in the query is the organization of the repository for which you are being notified on {% data variables.product.prodname_dotcom %}. This query is useful if you belong to several organizations, and want to see notifications for a specific organization.

For example, to see notifications from the octo-org organization, use `org:octo-org`.

{% endif %}

## {% data variables.product.prodname_dependabot %} custom filters

If you use {% data variables.product.prodname_dependabot %} to keep your dependencies up to date, you can use and save these custom filters:
* `is:repository_vulnerability_alert` to show notifications for {% data variables.product.prodname_dependabot_alerts %}.
* `reason:security_alert` to show notifications for {% data variables.product.prodname_dependabot_alerts %} and security update pull requests.
* `author:app/dependabot` to show notifications generated by {% data variables.product.prodname_dependabot %}. This includes {% data variables.product.prodname_dependabot_alerts %}, security update pull requests, and version update pull requests.

For more information about {% data variables.product.prodname_dependabot %}, see [AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).
