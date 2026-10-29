---
title: Scheduling pull request reminders in Teams
shortTitle: Schedule reminders
intro: 'Set up reminders for pending pull request reviews in Teams.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: how-tos
category:
  - Use integrations
---

You can schedule reminders for pending pull request reviews in Microsoft Teams channels or in the {% data variables.product.github %} personal app. Reminders are available for organizations, not personal accounts.

{% ifversion copilot %}

The combined {% data variables.product.github %} app preserves your scheduled reminders when you update from {% data variables.product.github %} Notifications. You don't need to recreate them to use {% data variables.product.prodname_copilot_short %}.

Reminders and agent settings are separate. Use the `schedule` commands in this article to configure review reminders, and use `@{% data variables.product.github %} settings` to choose repositories for {% data variables.product.prodname_copilot_short %}. Reminders are available in channels and the personal app, not in group chats.

{% endif %}

## Scheduling reminders in a channel

1. In a Teams channel, run `@{% data variables.product.github %}{% ifversion ghes %} Notifications{% endif %} schedule ORGANIZATION`.
1. Select **Create new reminder**.
1. Configure the days, times, timezone, and repository or team filters for the reminder.
1. Save the reminder.

To edit or remove reminders for the organization, run `@{% data variables.product.github %}{% ifversion ghes %} Notifications{% endif %} schedule ORGANIZATION` again. To list all reminders configured in the channel, run `@{% data variables.product.github %}{% ifversion ghes %} Notifications{% endif %} schedule list`.

## Scheduling reminders in the personal app

1. Open the {% data variables.product.github %} personal app in Teams.
1. Run `schedule ORGANIZATION`.
1. Select **Create new reminder** and configure your reminder settings.
1. Save the reminder.

In the personal app, you can list reminders with `schedule list`.

>[!NOTE] To configure reminders for an organization, you must be a member of the organization and have write access to at least one repository.

{% ifversion copilot %}

## Following up on a reminder with {% data variables.product.prodname_copilot_short %}

You can use a pull request link from a reminder as context for a new task. For example:

```text
@{% data variables.product.github %} Summarize the changes in PULL-REQUEST-URL and identify what needs review.
```

Replace `PULL-REQUEST-URL` with the pull request link. Asking {% data variables.product.prodname_copilot_short %} for an explanation or follow-up work doesn't change the reminder configuration. To start or steer an agent session, you need write access to every repository selected for that session. See [AUTOTITLE](/copilot/how-tos/copilot-integrations/integrate-cloud-agent-with-teams).

{% endif %}

## Further reading

* [AUTOTITLE](/integrations/how-tos/teams/customize-notifications)
* [AUTOTITLE](/integrations/reference/teams-command-reference)
