---
title: Using GitHub in Slack
shortTitle: Use GitHub in Slack
intro: 'Learn how to use GitHub in Slack to improve collaboration and streamline your workflow.'
versions:
    fpt: '*'
    ghes: '*'
    ghec: '*'
topics:
    - Integration
category:
  - Use integrations
---

The {% data variables.product.github %} integration for Slack allows you to connect your {% data variables.product.github %} account to the {% data variables.product.github %} app in Slack. Once connected, you can use slash commands to interact with {% data variables.product.github %}, receive notifications about repository activity, and collaborate with your team directly within Slack.

## Connecting your {% data variables.product.github %} account to the {% data variables.product.github %} app in Slack

>[!NOTE] Before you can connect your accounts, an admin for your Slack workspace must have installed the {% data variables.product.github %} app. See [AUTOTITLE](/integrations/how-tos/slack/integrate-github-with-slack).

1. In Slack, start a direct message with the {% data variables.product.github %} app.
1. The direct message will be pre-populated with a welcome message and a link to connect your {% data variables.product.github %} account. Follow the prompts on screen in Slack, and in {% data variables.product.github %} in your browser, to authenticate and authorize the connection.

Once your {% data variables.product.github %} account is connected, Slack will show you a list of available commands and features you can use.

## Using Slash commands to interact with {% data variables.product.github %} in Slack

To use a slash command, type `/github` followed by the command you want to execute in the message input field of any Slack channel or direct message where the {% data variables.product.github %} app is present. To invite the app to a channel, type `/invite @github` in the channel.

|Command|Description|
|-------|-----------|
|`/github help`|Displays a list of essential commands and their descriptions.|
|`/github subscribe owner/repo`|Subscribes the channel to notifications for the specified repository.|
|`/github unsubscribe owner/repo`|Unsubscribes the channel from notifications for the specified repository.|
|`/github subscribe list`|Lists all repositories the channel is subscribed to.|
|`/github open owner/repo`|Opens an issue in the specified repository. You will be prompted to provide a title and description for the issue.|
|`/github close [issue link]`|Closes the specified issue as completed.|
|`/github close [issue link] reason:"not planned"`|Closes the specified issue with a reason. Replace `"not planned"` with your reason.|
|`/github reopen [issue link]`|Reopens the specified issue.|
|`/github signin`|Restarts the "Connect your GitHub account" workflow.|

>[!NOTE] When you subscribe a channel to a repository, the channel will receive notifications for all `open`, `close`, and `reopen` events on pull requests and issues in that repository. The channel will also receive notifications of any `push` events directly to the repository's default branch.

{% ifversion fpt or ghec %}

## Initiating {% data variables.copilot.copilot_coding_agent %} sessions within Slack

The {% data variables.product.github %} app also integrates {% data variables.copilot.copilot_coding_agent %} into Slack. You can use this functionality to summon {% data variables.copilot.copilot_coding_agent %} in threads where important discussions are taking place, and ask it to make changes based on the context of those discussions. See: [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/integrate-coding-agent-with-slack).

{% endif %}

## Mentions in Slack

When you subscribe to a repository in Slack, you will see yourself mentioned in notifications for repository events in which you have been referenced. For example, if you are assigned to an issue, or mentioned in a comment, you will see yourself mentioned in the notification in Slack.

Mentions require you to be logged in to your {% data variables.product.github %} account through the {% data variables.product.github %} app in Slack. This enables {% data variables.product.github %} to map your Slack identity to your {% data variables.product.github %} identity. See [Connecting your {% data variables.product.github %} account to the {% data variables.product.github %} app in Slack](#connecting-your-github-account-to-the-github-app-in-slack).

>[!NOTE]
>If you have multiple Slack workspaces where you use the {% data variables.product.github %} app, mentions will only work in the workspace where you logged in to your {% data variables.product.github %} app most recently. If you log in to your {% data variables.product.github %} app in a different workspace, mentions will stop working in the previous workspace.

The following are scenarios in which you will be mentioned:

* You are assigned to an issue.
* Your review is requested on a pull request.
* You are mentioned in a pull request, issue description, comment, or discussion.
* Your review is requested on a deployment.
* You receive a scheduled reminder for a pull review request.

You can see a summary of your {% data variables.product.github %} mentions in the "Mentions" view in Slack. For more information, see [Triage notifications in the Activity tab](https://slack.com/help/articles/19693583638803-Triage-notifications-in-the-Activity-tab) in the Slack documentation.

## Threading conversations

Notifications for each issue or pull request are grouped into a thread in Slack. The parent message always shows the latest status of the issue or pull request, along with other meta-data like title, description, assignees, reviewers, labels and checks. Threading helps keep conversations organized, making it easier to follow updates and discussions related to a specific issue or pull request. When the state of an issue or pull request changes, the associated reply is posted both in the thread and in the channel, so that everyone in the channel is aware of the update.

You can disable threading for issue and pull request notifications in individual channels.

1. In the Slack channel where you want to disable threading, type `/github settings`.
1. In the settings menu, to the right of "Disable threading for Pull Request and Issue notifications", click **Disable**.

You, or any other member of the channel, can re-enable threading at any time by following the same steps and clicking **Enable** in the settings menu.

## Broadcasting comments and reviews to the Slack channel

By default, comments and reviews will only show up in their related thread. If you want the channel members to see them instead of just those who are participants of the issue, you can opt-in to broadcasting with the following commands:

* For comment broadcasting, use `/github subscribe owner/repo comments:"channel"`

* For review broadcasting, use `/github subscribe owner/repo reviews:"channel"`

## Unfurling links to {% data variables.product.github %} activities in Slack

Link previews provide additional context when sharing links to {% data variables.product.github %} activities in Slack. Link previews are shown in Slack for the following {% data variables.product.github %} activities:

* Pull requests
* Issues
* Directly linked comments
* Code blobs with line numbers
* Organizations, repositories, and users

Previews of links will not be shown if any of the following apply:

* Link previews are disabled in your Slack workspace. See [Share links and set preview preferences](https://slack.com/help/articles/204399343-Share-links-and-set-preview-preferences#turn-off-link-previews-for-specific-sites) in the Slack documentation.
* The same link has already been shared in the channel in the past 30 minutes.
* 3 or more links are shared in the same message.
* The repository is private, and the user who shared the link:
    * Has not connected their {% data variables.product.github %} account to the {% data variables.product.github %} app in Slack.
    * Asked not to show link previews when prompted.
    * The {% data variables.product.github %} app is not in the channel where the link is shared. See [Using slash commands to interact with GitHub in Slack](#using-slash-commands-to-interact-with-github-in-slack).

{% ifversion fpt or ghec %}

## Scheduling reminders for pull request reviews

You can schedule reminders for pull request reviews in Slack. Reminders can be sent to you directly in a direct message with the {% data variables.product.github %} app, or to a channel where the {% data variables.product.github %} app is present. For example, you can schedule a reminder to be sent to you in a direct message every weekday at 10 AM including all open issues that are assigned to you.

You can configure scheduled reminders for yourself, your team, or your entire organization. For more information, see:

* [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/managing-your-scheduled-reminders)
* [AUTOTITLE](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team)
* [AUTOTITLE](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization)

{% endif %}

## Further reading

* [AUTOTITLE](/integrations/how-tos/slack/customize-notifications) - Learn how to customize your {% data variables.product.github %} notifications in Slack to meet your needs.
* [AUTOTITLE](/integrations/tutorials/slack) - Build skills and knowledge about the {% data variables.product.github %} Slack integration through examples and hands-on activities.
