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
---

Use these commands in a Microsoft Teams channel by prefixing them with `@GitHub Notifications`. In the {% data variables.product.github %} personal app, omit the prefix.

|Command|Description|
|---|---|
|`@GitHub Notifications help`|Display help documentation.|
|`@GitHub Notifications signin`|Connect your {% data variables.product.github %} account.|
|`@GitHub Notifications subscribe owner/repo`|Subscribe a channel to a repository.|
|`@GitHub Notifications subscribe owner/repo [feature]`|Subscribe a channel to specific notification features.|
|`@GitHub Notifications subscribe list`|List subscriptions in the channel.|
|`@GitHub Notifications subscribe list features`|List subscriptions and subscribed features in the channel.|
|`@GitHub Notifications unsubscribe owner/repo`|Unsubscribe a channel from a repository.|
|`@GitHub Notifications unsubscribe owner/repo [feature]`|Unsubscribe a channel from specific features.|
|`@GitHub Notifications schedule ORGANIZATION`|List and manage reminders for the organization in this channel.|
|`@GitHub Notifications schedule list`|List all reminders configured in this channel.|
|`@GitHub Notifications signout`|Disconnect your {% data variables.product.github %} account and remove subscriptions.|

For the list of supported notification features, see [AUTOTITLE](/integrations/how-tos/teams/customize-notifications).
