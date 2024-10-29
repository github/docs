---
title: Managing scheduled reminders for your team
intro: You can get reminders in Slack when your team has pull requests waiting for review.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests
  - /github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-your-team
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Scheduled reminders
---

## About scheduled reminders for teams

{% data reusables.reminders.about-scheduled-reminders-teams-orgs %}

Team maintainers and organization owners can set scheduled reminders for any pull requests that a team has been requested to review. Before you can create a scheduled reminder for your team, an organization owner must authorize your Slack workspace. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)."

{% data reusables.reminders.scheduled-reminders-limitations %}

## Creating a scheduled reminder for a team

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% data reusables.reminders.scheduled-reminders %}
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
{% data reusables.reminders.test-reminder %}

## Managing a scheduled reminder for a team

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% data reusables.reminders.scheduled-reminders %}
{% data reusables.reminders.edit-existing %}
{% data reusables.reminders.edit-page %}
{% data reusables.reminders.update-buttons %}
{% data reusables.reminders.test-reminder %}

## Deleting a scheduled reminder for a team

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% data reusables.reminders.scheduled-reminders %}
{% data reusables.reminders.delete %}

## Further reading

* [Getting started](https://github.com/integrations/slack?tab=readme-ov-file#getting-started) in the Slack integrations documentation
* "[AUTOTITLE](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)"
* "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/managing-your-scheduled-reminders)"
