---
title: Integrating Copilot cloud agent with Teams
shortTitle: Integrate cloud agent with Teams
allowTitleToDifferFromFilename: true
intro: 'You can use the {% data variables.product.github %} integration in Teams to provide context and open pull requests all from within your Teams channels.'
product: '{% data reusables.copilot.plans.permission-paid-plans-cfi %}'
versions:
  feature: copilot
contentType: how-tos
category:
  - Integrate Copilot with your tools
redirect_from:
  - /copilot/how-tos/use-copilot-agents/cloud-agent/integrate-cloud-agent-with-teams
  - /copilot/how-tos/use-copilot-agents/coding-agent/integrate-coding-agent-with-teams
---

> [!NOTE]
> {% data variables.product.prodname_copilot %} uses AI. Check for mistakes. See [AUTOTITLE](/copilot/responsible-use/agents).

The {% data variables.product.github %} integration in Microsoft Teams lets you work with {% data variables.copilot.copilot_cloud_agent %} from your Teams conversations. You can start {% data variables.copilot.copilot_cloud_agent_short %} sessions to investigate, plan, write code, and create issues and pull requests, using the context of your conversation. You can also choose the model, connect Model Context Protocol (MCP) servers, work across multiple repositories, and use {% data variables.copilot.copilot_memory %}. Your team's collaborative decisions stay connected to your code, bridging the gap between where discussions happen and where implementation lives.

You can reply to a {% data variables.product.github %} notification in a channel, group chat, or private chat and @mention {% data variables.product.github %} to delegate a task to {% data variables.product.prodname_copilot_short %}. {% data variables.product.prodname_copilot_short %} uses the linked issue or pull request and the conversation in the thread to understand the task. It can investigate issues, reproduce bugs, run tests, implement changes, and prepare a pull request for review.

For information about additional {% data variables.product.prodname_copilot_short %} integrations, see [AUTOTITLE](/copilot/concepts/agent-capabilities/choosing-and-delegating-agent-work/about-copilot-integrations).

## Security considerations

Before you @mention {% data variables.product.github %} in Teams, consider that {% data variables.copilot.copilot_cloud_agent %} captures the entire thread as context for your request, understanding and implementing solutions based on the discussion. This context is stored in the artifacts the agent generates. If you want to limit the context, you can send a direct message to the {% data variables.product.github %} app for Teams instead.

## Understanding collaborative sessions, permissions, and sandboxes

The identity {% data variables.product.prodname_copilot_short %} uses depends on whether you interact with it in a direct message or a shared context.

* When you use {% data variables.product.prodname_copilot_short %} in a direct message, it can take actions for you, such as creating pull requests or issues, as well as answer questions. It uses the permissions of your linked {% data variables.product.github %} personal account to take these actions.

* When you use {% data variables.product.prodname_copilot_short %} in a shared context, such as a group thread or channel, {% data variables.product.prodname_copilot_short %} creates artifacts, such as pull requests, under its app identity rather than your personal account.

   > [!NOTE]
   > {% data reusables.copilot.cloud-agent.unattributed-additional-approval-note %}

Only users with **write** access to every repository selected for a session can trigger {% data variables.product.prodname_copilot_short %} to make changes or steer that session, but any conversation participant can provide input. Guest members of a workspace, and outside collaborators to repositories are not able to start or steer a session with {% data variables.product.prodname_copilot_short %} in Teams.

{% data variables.product.prodname_copilot_short %} uses all messages in the conversation to inform the work. The entire thread becomes the decision-making context for the artifact.

When you ask {% data variables.product.prodname_copilot_short %} to perform a task, it displays details about the session, such as the working repositories, issue or pull request links, model used, and a task status or summary.

### Secure cloud sandboxes

When {% data variables.copilot.copilot_cloud_agent %} starts work on a task from Teams, {% data variables.product.prodname_copilot_short %} continues working asynchronously in a **secure cloud sandbox**, and posts the result when it's ready.

You can keep steering from Teams, or continue the work on the agent-generated artifacts in {% data variables.product.github %}, the terminal, or your preferred code editor.

## Prerequisites

* You must have a {% data variables.product.github %} account with access to {% data variables.product.prodname_copilot_short %} through a paid {% data variables.product.prodname_copilot_short %} plan.
* You must have a Teams account.
{% data reusables.copilot.cloud-agent.cloud-sandboxes-prerequisite-teams %}

## Installing the {% data variables.product.github %} app in Teams

The {% data variables.product.github %} app only needs to be installed once in a team. After the app is installed, any member of the team can connect their {% data variables.product.github %} account to the app and start using it.

The combined **{% data variables.product.github %}** app includes both repository notifications and {% data variables.product.prodname_copilot_short %}. If your team already uses **{% data variables.product.github %} Notifications**, update that app to get the combined experience. Existing subscriptions and scheduled reminders are preserved.

1. Open the [{% data variables.product.github %} integration installation link](https://teams.microsoft.com/l/app/ca9e26b7-dce5-44a0-b2b7-a70a3d65ce25) in your web browser to launch Teams and the installation dialog.
1. Click **Add** to add the app to your team.
1. Follow the prompts on screen to authenticate and authorize the app.

## Connecting the {% data variables.product.github %} app to your {% data variables.product.github %} account

The first time you use the {% data variables.product.github %} app in Teams, you need to connect it to your {% data variables.product.github %} account. Then if prompted, set a default repository.

In a channel, the default repository provides the context that {% data variables.product.prodname_copilot_short %} uses when responding to prompts, and it's also where issues and pull requests created by {% data variables.copilot.copilot_cloud_agent %} sessions are opened unless you specify a repository in your prompt. You can't set a default repository for direct messages, so name the repositories in your prompt instead.

To get started:

1. In Teams, @mention the app in a message by typing `@{% data variables.product.github %}`.
1. Follow the prompts to connect your {% data variables.product.github %} account, and if prompted, optionally set a default repository.
1. To see what else you can do, in the thread, @mention the app by typing `@{% data variables.product.github %} help`.

## Starting a {% data variables.product.prodname_copilot %} session from your team conversation

@Mention the app in a channel, group chat, or personal chat by typing `@{% data variables.product.github %}` followed by your task. You must have `write` access to every repository selected for the session. The agent responds with a summary of planned changes and links to the artifacts it creates.

For example, to ask the agent to create a pull request on a particular branch in a repository, you can type:

```text
@{% data variables.product.github %} Create a pull request to YOUR-PROMPT repo=OWNER/REPO branch=BRANCH-NAME
```

The `repo` parameter tells {% data variables.product.prodname_copilot_short %} which repository to use, and the `branch` parameter specifies an existing branch to use as the base branch for a pull request.

Anyone in the conversation can add context or correct assumptions, and participants with the required permissions can steer the agent. Because work continues asynchronously, you can pick up the resulting work later on {% data variables.product.prodname_dotcom_the_website %}, in {% data variables.copilot.copilot_cli_short %}, or in the {% data variables.product.prodname_copilot_short %} app.

### Working across multiple repositories

A session can work with up to 11 repositories owned by the same organization or personal account. You must have write access to every selected repository. Select the repositories when you start the task, or name them in your prompt. For example:

```text
@{% data variables.product.github %} Update the API in octo-org/service and its client in octo-org/web. Open a pull request in each repository and link the changes.
```

Changes to a channel's default repositories apply to new conversations, not to a running session.

## Iterating on work in the thread

To refine the pull request, @mention `@{% data variables.product.github %}` in the same thread with your requested changes. {% data variables.product.prodname_copilot_short %} incorporates all messages since the previous @mention to iterate on the work, keeping the discussion and implementation connected.

## Monitoring session progress in the canvas

When {% data variables.product.prodname_copilot_short %} starts a session, it displays an **Open canvas** button. The canvas opens beside your conversation so you can monitor progress without leaving Teams. It shows:

* The plan {% data variables.product.prodname_copilot_short %} is following to make changes.
* The file changes {% data variables.product.prodname_copilot_short %} makes.
* An overview of the pull requests {% data variables.product.prodname_copilot_short %} creates.

The canvas is read-only. It shows only content you're already authorized to view on {% data variables.product.github %}, based on your linked {% data variables.product.github %} account and your repository access.

## Creating issues with {% data variables.product.prodname_copilot_short %}

You can ask {% data variables.product.prodname_copilot_short %} to create {% data variables.product.github %} issues directly from Teams, turning conversations into actionable tasks. Describe what you need in natural language, and {% data variables.product.prodname_copilot_short %} creates the issue for you.

You can create a single issue or multiple issues at once with child-parent relationships.

When you @mention the app, it uses the full thread history as context for the issues it creates. To keep the context focused, consider starting a new thread or sending a direct message.

## Customizing {% data variables.copilot.copilot_cloud_agent %} in Teams

Use `@{% data variables.product.github %} settings` to choose repositories for a channel or group chat. These settings are separate from notification subscriptions and scheduled reminders.

1. To see and change your channel settings, mention the app in a message by typing:

   ```text
   @{% data variables.product.github %} settings
   ```

1. Then follow the prompts to make your changes.

### Choosing a model

You can choose a model for the current conversation. Select a model in the picker and click **Submit**, or name the model in your request. The selection applies to the rest of that conversation and does not change other conversations or channel settings. The models available to you depend on your plan and your organization's policies. See [AUTOTITLE](/copilot/reference/ai-models/model-comparison).

### Setting default repositories for a channel

You can set one or more default repositories for each private or public channel. All selected repositories must have the same owner. You cannot set default repositories for direct messages with {% data variables.product.prodname_copilot_short %}.

When you do not specify repositories or branches, {% data variables.product.prodname_copilot_short %} uses the channel's default repositories and their default branches.

1. In the channel, type `@{% data variables.product.github %} settings` and send the message.
1. Follow the prompts to choose an account or organization and select the repositories.
1. Save your changes.

Channel defaults are shared by everyone using {% data variables.product.prodname_copilot_short %} in the channel and apply to new conversations. Choosing repositories for a session doesn't change the channel defaults or subscribe the channel to notifications.

## Using MCP servers

MCP servers that are configured for a repository are available to {% data variables.product.prodname_copilot_short %} when it works in that repository, so you configure them the same way as for {% data variables.copilot.copilot_cloud_agent %} on {% data variables.product.github %}. To use MCP servers in Teams, configure them in one of the repositories that {% data variables.product.prodname_copilot_short %} works in.

Keep the following in mind when using MCP servers:

* Personal MCP servers that you configure in your own settings only apply when you own the session.
* A repository administrator configures the servers, allowed tools, and credentials.
* Review the tools and data access before enabling a server.
* If a session cannot start because the repository's MCP configuration is invalid or too large, ask a repository administrator to correct the configuration and try again.

To learn how MCP works with {% data variables.copilot.copilot_cloud_agent %}, see [AUTOTITLE](/copilot/concepts/agents/cloud-agent/mcp-and-cloud-agent). To set up MCP servers for a repository, including secrets and validation, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers).

## Using {% data variables.copilot.copilot_memory %}

> [!NOTE]
> {% data variables.copilot.copilot_memory %} is currently in {% data variables.release-phases.public_preview %} and subject to change.

{% data variables.copilot.copilot_memory %} helps {% data variables.product.prodname_copilot_short %} remember facts about your repositories and your preferences, so it can work more effectively over time. Repository facts apply only to that repository, and personal preferences apply to your own interactions. {% data variables.copilot.copilot_memory %} is enabled by default for individual {% data variables.product.prodname_copilot_short %} plans. For enterprise- and organization-managed plans, an administrator must enable the policy first. If {% data variables.copilot.copilot_memory %} is enabled for you, {% data variables.product.prodname_copilot_short %} stores memories automatically as it works on tasks you start, and applies them to later work.

For more information about {% data variables.copilot.copilot_memory %}, see [AUTOTITLE](/copilot/concepts/prompting-and-context/copilot-memory). To review or delete your memories, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself).

## Further reading

* [AUTOTITLE](/copilot/concepts/copilot-surfaces/copilot-on-github)
* [AUTOTITLE](/copilot/concepts/enterprise/cloud-agent-access)
