---
title: Managing scheduled reminders for your organization
intro: You can get reminders in Slack for all pull requests that teams in your organization have been requested to review.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage scheduled reminders
---

## About scheduled reminders for pull requests

{% data reusables.reminders.about-scheduled-reminders-teams-orgs %}

Organization owners can schedule a reminder for one or more teams in their organization, for all pull requests the team or teams have been requested to review.

{% data reusables.reminders.scheduled-reminders-limitations %}

## Creating a scheduled reminder for an organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.reminders.scheduled-reminders %}
{% data reusables.reminders.add-reminder %}
{% data reusables.reminders.authorize-slack %}
{% data reusables.reminders.slack-channel %}
{% data reusables.reminders.days-dropdown %}
{% data reusables.reminders.times-dropdowns %}
{% data reusables.reminders.tracked-repos %}
1. Under "Filter by team assigned to review code", select the **Add a team** dropdown menu and click one or more teams. You can add up to 100 teams. If the team you select doesn't have access to the "Tracked repositories" selected above, you won't be able to create the scheduled reminder.
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

## Managing a scheduled reminder for an organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.reminders.scheduled-reminders %}
{% data reusables.reminders.edit-existing %}
{% data reusables.reminders.edit-page %}
{% data reusables.reminders.update-buttons %}
{% data reusables.reminders.test-reminder %}

## Deleting a scheduled reminder for an organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.reminders.scheduled-reminders %}
{% data reusables.reminders.delete %}

## Further reading

- "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/managing-your-scheduled-reminders)"
- "[AUTOTITLE](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team)"
