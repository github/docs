---
title: Managing your scheduled reminders
intro: Get reminders in Slack when you or your team have pull requests waiting for review.
versions:
  free-pro-team: '*'
---

### About scheduled reminders for users

Scheduled reminders are used to make sure that users focus on the most important review requests that require their attention. Scheduled reminders for pull requests will send a message to you in Slack with open pull requests needing your review at a specified time. For example, you can setup scheduled reminders to send you a message in Slack every morning at 10 AM with pull requests needing to be reviewed by you or one of your teams.

For certain events, you can also enable real-time alerts for scheduled reminders. Real-time alerts get sent to your Slack channel as soon as an important event, such as when you are assigned a review, takes place.

You can set scheduled reminders for personal or team-level review requests for pull requests in organizations you are a member of. Before you can create a scheduled reminder for yourself, an organization owner must authorize your Slack workspace. For more information, see "[Managing scheduled reminders for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-your-organization)."

{% data reusables.reminders.scheduled-reminders-limitations %}

### Creating scheduled reminders for your user account

{% data reusables.user_settings.access_settings %}
{% data reusables.reminders.scheduled-reminders %}
![Scheduled reminders button](/assets/images/help/profile/scheduled-reminders-profile.png)
3. Next to the organization you'd like to schedule reminders for, click **Edit**.
![Scheduled reminders edit button](/assets/images/help/settings/scheduled-reminders-org-choice.png)
{% data reusables.reminders.add-reminder %}
{% data reusables.reminders.authorize-slack %}
{% data reusables.reminders.days-dropdown %}
{% data reusables.reminders.times-dropdowns %}
8. Optionally, to receive scheduled reminders for reviews you've been assigned to, select **Review requests assigned to you**.
![Review requests assigned to you checkbox](/assets/images/help/profile/scheduled-reminders-your-requests.png)
9. Optionally, to receive scheduled reminders for reviews assigned to a team you're a member of, select **Review requests assigned to your team**.
![Review requests assigned to your team checkbox](/assets/images/help/profile/scheduled-reminders-your-team-requests.png)
{% data reusables.reminders.real-time-alerts %}
![Enable real-time alerts checkbox](/assets/images/help/settings/scheduled-reminders-real-time-alerts-personal.png)
{% data reusables.reminders.create-reminder %}

### Managing scheduled reminders for your user account
{% data reusables.user_settings.access_settings %}
{% data reusables.reminders.scheduled-reminders %}
![Scheduled reminders button](/assets/images/help/profile/scheduled-reminders-profile.png)
3. Next to the organization you'd like to edit scheduled reminders for, click **Edit**.
![Scheduled reminders edit button](/assets/images/help/settings/scheduled-reminders-org-choice.png)
{% data reusables.reminders.edit-page %}
{% data reusables.reminders.update-buttons %}

### Deleting scheduled reminders for your user account
{% data reusables.user_settings.access_settings %}
{% data reusables.reminders.scheduled-reminders %}
![Scheduled reminders button](/assets/images/help/profile/scheduled-reminders-profile.png)
3. Next to the organization you'd like to delete reminders for, click **Edit**.
![Scheduled reminders edit button](/assets/images/help/settings/scheduled-reminders-org-choice.png)
{% data reusables.reminders.delete %}

### Further reading

- "[Managing scheduled reminders for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-your-organization)"
- "[Managing scheduled reminders for your team](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-your-team)"
