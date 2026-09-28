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

|Command|Description|
|---|---|
|`@{% data variables.product.github %}{% ifversion ghes %} Notifications{% endif %} help`|Display help documentation.|
|`@{% data variables.product.github %}{% ifversion ghes %} Notifications{% endif %} signin`|Connect your {% data variables.product.github %} account.|
|`@{% data variables.product.github %}{% ifversion ghes %} Notifications{% endif %} subscribe OWNER/REPO`|Subscribe a channel to a repository.|
|`@{% data variables.product.github %}{% ifversion ghes %} Notifications{% endif %} subscribe OWNER/REPO [feature]`|Subscribe a channel to specific notification features.|
|`@{% data variables.product.github %}{% ifversion ghes %} Notifications{% endif %} subscribe list`|List subscriptions in the channel.|
|`@{% data variables.product.github %}{% ifversion ghes %} Notifications{% endif %} subscribe list features`|List subscriptions and subscribed features in the channel.|
|`@{% data variables.product.github %}{% ifversion ghes %} Notifications{% endif %} unsubscribe OWNER/REPO`|Unsubscribe a channel from a repository.|
|`@{% data variables.product.github %}{% ifversion ghes %} Notifications{% endif %} unsubscribe OWNER/REPO [feature]`|Unsubscribe a channel from specific features.|
|`@{% data variables.product.github %}{% ifversion ghes %} Notifications{% endif %} schedule ORGANIZATION`|List and manage reminders for the organization in this channel.|
|`@{% data variables.product.github %}{% ifversion ghes %} Notifications{% endif %} schedule list`|List all reminders configured in this channel.|
|`@{% data variables.product.github %}{% ifversion ghes %} Notifications{% endif %} signout`|Disconnect your {% data variables.product.github %} account and remove subscriptions.|

For the list of supported notification features, see [AUTOTITLE](/integrations/how-tos/teams/customize-notifications).
