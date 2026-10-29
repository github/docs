---
title: 'Command reference for the {% data variables.product.github %} integration in Teams'
shortTitle: Teams command reference
intro: 'Review the commands you can use with the {% data variables.product.github %} integration in Teams.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: reference
allowTitleToDifferFromFilename: true
category:
  - Learn about integrations
---

Use these commands in a Microsoft Teams channel by prefixing them with `@{% data variables.product.github %}{% ifversion ghes %} Notifications{% endif %}`. In the {% data variables.product.github %} personal app, omit the prefix.

{% ifversion copilot %}

The combined **{% data variables.product.github %}** app includes notifications and {% data variables.product.prodname_copilot_short %}. Updating from **{% data variables.product.github %} Notifications** preserves existing subscriptions and reminders. Subscription and schedule commands work in channels and the personal app. {% data variables.product.prodname_copilot_short %} also works in group chats.

{% endif %}

## Notification commands

|Command|Description|
|---|---|
|`@{% data variables.product.github %}{% ifversion ghes %} Notifications{% endif %} help`|Display help documentation.|
|`@{% data variables.product.github %}{% ifversion ghes %} Notifications{% endif %} signin`|Connect your {% data variables.product.github %} account.|
|`@{% data variables.product.github %}{% ifversion ghes %} Notifications{% endif %} subscribe OWNER/REPO`|Subscribe a channel to a repository.|
|`@{% data variables.product.github %}{% ifversion ghes %} Notifications{% endif %} subscribe OWNER/REPO [FEATURE]`|Subscribe a channel to specific notification features.|
|`@{% data variables.product.github %}{% ifversion ghes %} Notifications{% endif %} subscribe list`|List subscriptions in the channel.|
|`@{% data variables.product.github %}{% ifversion ghes %} Notifications{% endif %} subscribe list features`|List subscriptions and subscribed features in the channel.|
|`@{% data variables.product.github %}{% ifversion ghes %} Notifications{% endif %} unsubscribe OWNER/REPO`|Unsubscribe a channel from a repository.|
|`@{% data variables.product.github %}{% ifversion ghes %} Notifications{% endif %} unsubscribe OWNER/REPO [FEATURE]`|Unsubscribe a channel from specific features.|
|`@{% data variables.product.github %}{% ifversion ghes %} Notifications{% endif %} schedule ORGANIZATION`|List and manage reminders for the organization in this channel.|
|`@{% data variables.product.github %}{% ifversion ghes %} Notifications{% endif %} schedule list`|List all reminders configured in this channel.|
|`@{% data variables.product.github %}{% ifversion ghes %} Notifications{% endif %} signout`|Disconnect your {% data variables.product.github %} account and remove subscriptions.|

For the list of supported notification features, see [AUTOTITLE](/integrations/how-tos/teams/customize-notifications).

{% ifversion copilot %}

## {% data variables.product.prodname_copilot_short %} settings and requests

Use `@{% data variables.product.github %} settings` to choose default repositories for a channel or group chat. Channel defaults apply to new conversations and are shared with other channel members. There are no default repositories for personal chats, so name the repositories in your prompt instead.

The following are natural-language requests, not subscription commands:

|Request|Purpose|
|---|---|
|`@{% data variables.product.github %} help`|Discover available capabilities.|
|`@{% data variables.product.github %} Investigate this failed workflow and propose a fix.`|Delegate work from a repository notification.|
|`@{% data variables.product.github %} Update the API in octo-org/service and its client in octo-org/web.`|Work across related repositories owned by the same account or organization.|
|`@{% data variables.product.github %} Choose a model for this conversation.`|Choose a model for the current conversation without changing channel defaults.|
|`@{% data variables.product.github %} Create a pull request to update the setup guide repo=OWNER/REPO branch=BRANCH-NAME`|Choose a repository and an existing base branch for a task.|

A session supports up to 11 repositories from the same owner. To start or steer work, you need write access to every selected repository. Choosing repositories for agent work doesn't create notification subscriptions or review reminders.

For MCP servers, models, and {% data variables.copilot.copilot_memory %}, see [AUTOTITLE](/copilot/how-tos/copilot-integrations/integrate-cloud-agent-with-teams).

{% endif %}
