---
title: Using {% data variables.product.github %} in Teams
shortTitle: Use GitHub in Teams
intro: Learn how to use {% data variables.product.github %} in Teams to improve collaboration and streamline your workflow.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: how-tos
category:
  - Use integrations
---

The {% data variables.product.github %} integration for Microsoft Teams lets you connect your {% data variables.product.github %} account to the {% data variables.product.github %} app in Teams. Once connected, you can subscribe to notifications, run commands, and collaborate on issues and pull requests directly within Teams.

## Connecting your {% data variables.product.github %} account to the {% data variables.product.github %} app in Teams

>[!NOTE] Before you can connect your accounts, an admin for your Teams workspace must have installed the {% data variables.product.github %} app. See [AUTOTITLE](/integrations/how-tos/teams/integrate-github-with-teams).

1. In Teams, open a direct message or personal app conversation with the {% data variables.product.github %} app.
1. Run `@GitHub Notifications signin` and follow the prompts in Teams and in your browser to authorize the connection.

Once your {% data variables.product.github %} account is connected, Teams will show you a list of available commands and features.

## Using commands in Teams

In channels, start commands with `@GitHub Notifications`. In the personal app, omit the prefix. For the full list of commands, see [AUTOTITLE](/integrations/reference/teams-command-reference).

|Command|Description|
|---|---|
|`@GitHub Notifications subscribe owner/repo`|Subscribes the channel to notifications for the specified repository.|
|`@GitHub Notifications unsubscribe owner/repo`|Unsubscribes the channel from notifications for the specified repository.|
|`@GitHub Notifications subscribe list`|Lists all repositories the channel is subscribed to.|
|`@GitHub Notifications subscribe list features`|Lists all repositories and notification features the channel is subscribed to.|

>[!NOTE] When you subscribe a channel to a repository, you may be prompted to install the {% data variables.product.github %} app and grant access to the repository or organization.

## Working with issues and pull requests

You can create, comment on, and manage issues and pull requests directly from Teams. For step-by-step instructions, see:

* [AUTOTITLE](/integrations/tutorials/teams/create-issues)
* [AUTOTITLE](/integrations/tutorials/teams/manage-issues)

## Mentions in Teams

When you subscribe to a repository in Teams, you will see yourself mentioned in notifications for repository events in which you have been referenced. Mentions require you to be logged in to your {% data variables.product.github %} account through the {% data variables.product.github %} app in Teams.

>[!NOTE] If you have multiple Teams workspaces where you use the {% data variables.product.github %} app, mentions will only work in the workspace where you logged in most recently.

The following are scenarios in which you will be mentioned:

* You are assigned to an issue.
* Your review is requested on a pull request.
* You are mentioned in a pull request, issue description, comment, or discussion.
* Your review is requested on a deployment.
* You receive a scheduled reminder for a pull request review request.

## Threading conversations

Notifications for each issue or pull request are grouped into a thread in Teams. The parent card shows the latest status of the issue or pull request along with context such as assignees, reviewers, labels, and checks. When the state of an issue or pull request changes, Teams posts the update as a reply in the thread and as a channel message.

## Unfurling links to {% data variables.product.github %} activities in Teams

Link previews provide additional context when sharing links to {% data variables.product.github %} resources in Teams. Link previews are shown for:

* Pull requests
* Issues
* Discussions
* Comments
* Code snippets
* Repositories
* User accounts or organizations

Previews of links will not be shown if any of the following apply:

* The repository is private and the user who shared the link is not signed in to {% data variables.product.github %} in Teams.
* The {% data variables.product.github %} app has not been authorized for the repository.

## Personal app experience

The {% data variables.product.github %} personal app in Teams lets you manage subscriptions and receive notifications in a private chat. In the personal app, commands do not require the `@GitHub Notifications` prefix and notifications are not threaded.

## Scheduling reminders for pull request reviews

You can schedule reminders for pending pull request reviews in channels or in the personal app. For instructions, see [AUTOTITLE](/integrations/how-tos/teams/schedule-reminders).

{% ifversion fpt or ghec %}

## Initiating {% data variables.copilot.copilot_cloud_agent %} sessions within Teams

The {% data variables.product.github %} app integrates {% data variables.copilot.copilot_cloud_agent %} into Teams. You can summon {% data variables.copilot.copilot_cloud_agent %} in threads where discussions are taking place and ask it to make changes based on the context of those discussions. For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/integrate-cloud-agent-with-teams).

{% endif %}

## Further reading

* [AUTOTITLE](/integrations/how-tos/teams/customize-notifications) - Learn how to customize your {% data variables.product.github %} notifications in Teams.
* [AUTOTITLE](/integrations/how-tos/teams/schedule-reminders) - Learn how to schedule reminders for pull request reviews.
* [AUTOTITLE](/integrations/reference/teams-command-reference) - Review all available Teams commands.
* [AUTOTITLE](/integrations/tutorials/teams) - Build skills and knowledge about the {% data variables.product.github %} Teams integration through examples and hands-on activities.
