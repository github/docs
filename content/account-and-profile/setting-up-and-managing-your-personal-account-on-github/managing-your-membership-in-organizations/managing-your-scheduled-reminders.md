---
title: Managing your scheduled reminders
intro: Get reminders in Slack when you or your team have pull requests waiting for review.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-your-scheduled-reminders
  - /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/managing-your-scheduled-reminders
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/managing-your-scheduled-reminders
shortTitle: Manage scheduled reminders
---
## About scheduled reminders for users

Scheduled reminders are used to make sure that users focus on the most important review requests that require their attention. Scheduled reminders for pull requests will send a message to you in Slack with open pull requests needing your review at a specified time. For example, you can setup scheduled reminders to send you a message in Slack every morning at 10 AM with pull requests needing to be reviewed by you or one of your teams.

For certain events, you can also enable real-time alerts for scheduled reminders. Real-time alerts get sent to your Slack channel as soon as an important event, such as when you are assigned a review, takes place.

You can set scheduled reminders for personal or team-level review requests for pull requests in organizations you are a member of. Before you can create a scheduled reminder for yourself, an organization owner must authorize your Slack workspace. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)."

{% data reusables.reminders.scheduled-reminders-limitations %}

## Creating scheduled reminders for your personal account

{% data reusables.user-settings.access_settings %}
{% data reusables.reminders.scheduled-reminders %}
1. Next to the organization you'd like to schedule reminders for, click {% octicon "pencil" aria-label="Edit reminder" %}.

   ![Screenshot of the settings for a personal account showing the name of a GitHub organization. An edit button with a pencil icon is outlined in dark orange.](/assets/images/help/settings/scheduled-reminders-org-choice.png)

{% data reusables.reminders.authorize-slack %}
{% data reusables.reminders.days-dropdown %}
{% data reusables.reminders.times-dropdowns %}
1. Optionally, to receive scheduled reminders for reviews you've been assigned to, select **Review requests assigned to you**.
1. Optionally, to receive scheduled reminders for reviews assigned to a team you're a member of, select **Review requests assigned to your team**.
{% data reusables.reminders.real-time-alerts %}
{% data reusables.reminders.create-reminder %}
{% data reusables.reminders.test-reminder %}

## Managing scheduled reminders for your personal account

{% data reusables.user-settings.access_settings %}
{% data reusables.reminders.scheduled-reminders %}
1. Next to the organization you'd like to edit scheduled reminders for, click {% octicon "pencil" aria-label="Edit reminder" %}.

   ![Screenshot of the settings for a personal account showing the name of a GitHub organization. An edit button with a pencil icon is outlined in dark orange.](/assets/images/help/settings/scheduled-reminders-org-choice.png)

{% data reusables.reminders.edit-page %}
{% data reusables.reminders.update-buttons %}
{% data reusables.reminders.test-reminder %}

## Deleting scheduled reminders for your personal account

{% data reusables.user-settings.access_settings %}
{% data reusables.reminders.scheduled-reminders %}
1. Next to the organization you'd like to delete reminders for, click {% octicon "pencil" aria-label="Edit reminder" %}.

   ![Screenshot of the settings for a personal account showing the name of a GitHub organization. An edit button with a pencil icon is outlined in dark orange.](/assets/images/help/settings/scheduled-reminders-org-choice.png)

{% data reusables.reminders.delete %}

## Further reading

- "[AUTOTITLE](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)"
- "[AUTOTITLE](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team)"
