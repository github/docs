---
title: Managing scheduled reminders for your team
intro: You can get reminders in Slack when your team has pull requests waiting for review.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests
versions:
  free-pro-team: '*'
---

### About scheduled reminders for teams

{% data reusables.reminders.about-scheduled-reminders-teams-orgs %}

Team maintainers and organization owners can set scheduled reminders for any pull requests that a team has been requested to review. Before you can create a scheduled reminder for your team, an organization owner must authorize your Slack workspace. For more information, see "[Managing scheduled reminders for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-your-organization)."

### Creating a scheduled reminder for a team
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% data reusables.reminders.scheduled-reminders %}
![Scheduled reminders button](/assets/images/help/teams/scheduled-reminders-teams.png)
{% data reusables.reminders.add-reminder %}
{% data reusables.reminders.authorize-slack %}
{% data reusables.reminders.slack-channel %}
{% data reusables.reminders.days-dropdown %}
{% data reusables.reminders.times-dropdowns %}
{% data reusables.reminders.tracked-repos %}
{% data reusables.reminders.ignore-drafts %}
{% data reusables.reminders.no-review-requests %}
{% data reusables.reminders.author-reviews %}
{% data reusables.reminders.approved-prs %}
{% data reusables.reminders.min-age %}
{% data reusables.reminders.min-staleness %}
{% data reusables.reminders.ignored-terms %}
{% data reusables.reminders.ignored-labels %}
{% data reusables.reminders.required-labels %}
{% data reusables.reminders.create-reminder %}

### Managing a scheduled reminder for a team
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% data reusables.reminders.scheduled-reminders %}
![Scheduled reminders button](/assets/images/help/teams/scheduled-reminders-teams.png)
{% data reusables.reminders.edit-existing %}
{% data reusables.reminders.edit-page %}
{% data reusables.reminders.update-buttons %}

### Deleting a scheduled reminder for a team
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% data reusables.reminders.scheduled-reminders %}
![Scheduled reminders button](/assets/images/help/teams/scheduled-reminders-teams.png)
{% data reusables.reminders.delete %}

### Further reading

- "[Managing scheduled reminders for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-your-organization)"
- "[Managing your scheduled reminders](/github/setting-up-and-managing-your-github-user-account/managing-your-scheduled-reminders)"
