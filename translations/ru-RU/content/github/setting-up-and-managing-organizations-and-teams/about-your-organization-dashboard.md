---
title: About your organization dashboard
intro: 'As an organization member, you can visit your organization''s dashboard throughout the day to stay updated on recent activity and keep track of issues and pull requests you''re working on or following in the organization.'
redirect_from:
  - /articles/about-your-organization-dashboard
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---

### Accessing your organization dashboard

{% data reusables.dashboard.access-org-dashboard %}

### Finding your recent activity

In the "Recent activity" section of your news feed, you can quickly find and follow up with recently updated issues and pull requests in your organization.

{% data reusables.dashboard.recent-activity-qualifying-events %}

### Finding repositories in your organization

In the left sidebar of your dashboard, you can access your organization's top repositories you're active in.

![List of repositories you're most active in from your organization](/assets/images/help/dashboard/repositories-from-organization-dashboard.png)

### Staying updated with activity from the organization

In the "All activity" section of your news feed, you can view updates from other teams and repositories in your organization.

The "All activity" section shows all recent activity in the organization, including activity in repositories you're not subscribed to and of people you're not following. For more information, see {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}"[About notifications](/github/managing-subscriptions-and-notifications-on-github/about-notifications){% else %}"[Watching and unwatching repositories](/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories){% endif %}" and "[Following people](/articles/following-people)."

For instance, the organization news feed shows updates when someone in the organization:
 - Creates a new branch.
 - Comments on an issue or pull request.
 - Submits a pull request review comment.
 - Forks a repository.
 - Creates a wiki page.
 - Pushes commits.{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
 - Creates a public repository.{% endif %}

### Further information

- "[About your personal dashboard](/articles/about-your-personal-dashboard)"
