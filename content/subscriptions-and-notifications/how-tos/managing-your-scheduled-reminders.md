---
title: Managing your scheduled reminders
intro: Get reminders in Slack when you or your team have pull requests waiting for review.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>= 3.17'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-your-scheduled-reminders
  - /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/managing-your-scheduled-reminders
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/managing-your-scheduled-reminders
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/managing-your-scheduled-reminders
  - /account-and-profile/how-tos/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/managing-your-scheduled-reminders
shortTitle: Manage scheduled reminders
contentType: how-tos
---

## Creating scheduled reminders for your personal account

{% data reusables.user-settings.access_settings %}
{% data reusables.reminders.scheduled-reminders %}
1. Next to the organization you'd like to schedule reminders for, click {% octicon "pencil" aria-label="Edit reminder" %}.

   ![Screenshot of the settings for a personal account showing the name of a GitHub organization. An edit button with a pencil icon is outlined in orange.](/assets/images/help/settings/scheduled-reminders-org-choice.png)

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

   ![Screenshot of the settings for a personal account showing the name of a GitHub organization. An edit button with a pencil icon is outlined in orange.](/assets/images/help/settings/scheduled-reminders-org-choice.png)

{% data reusables.reminders.edit-page %}
{% data reusables.reminders.update-buttons %}
{% data reusables.reminders.test-reminder %}

## Deleting scheduled reminders for your personal account

{% data reusables.user-settings.access_settings %}
{% data reusables.reminders.scheduled-reminders %}
1. Next to the organization you'd like to delete reminders for, click {% octicon "pencil" aria-label="Edit reminder" %}.

   ![Screenshot of the settings for a personal account showing the name of a GitHub organization. An edit button with a pencil icon is outlined in orange.](/assets/images/help/settings/scheduled-reminders-org-choice.png)

{% data reusables.reminders.delete %}
