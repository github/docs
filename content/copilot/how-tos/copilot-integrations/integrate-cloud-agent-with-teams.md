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
> * This feature is currently in {% data variables.release-phases.public_preview %} and subject to change.
> * {% data variables.product.prodname_copilot %} uses AI. Check for mistakes. See [AUTOTITLE](/copilot/responsible-use/agents).

The {% data variables.product.github %} integration in Microsoft Teams allows you to interact with {% data variables.copilot.copilot_cloud_agent %} all from within your Teams conversations. Within Teams you can initiate {% data variables.copilot.copilot_cloud_agent_short %} sessions to investigate, plan, write code, and create issues and pull requests, using the context of your conversation. Your team's collaborative decisions stay connected to your code, bridging the gap between where discussions happen and where implementation lives.

For information about additional {% data variables.product.prodname_copilot_short %} integrations, see [AUTOTITLE](/copilot/concepts/tools/about-copilot-integrations).

## Security considerations

Before you @mention {% data variables.product.github %} in Teams, consider that {% data variables.copilot.copilot_cloud_agent %} will capture the entire thread as context for your request, understanding and implementing solutions based on the discussion. This context is stored in the artifacts the agent generates. If you want to limit the context, you can send a direct message to the {% data variables.product.github %} app for Teams instead.

## Understanding collaborative sessions, permissions, and sandboxes

The identity {% data variables.product.prodname_copilot_short %} uses depends on whether you interact with it in a direct message or a shared context.

* When you use {% data variables.product.prodname_copilot_short %} in a direct message, it can take actions for you, such as creating pull requests or issues, as well as answer questions. It uses the permissions of your linked {% data variables.product.github %} personal account to take these actions.

* When you use {% data variables.product.prodname_copilot_short %} in a shared context, such as a group thread or channel, {% data variables.product.prodname_copilot_short %} creates artifacts, such as pull requests, under its app identity rather than your personal account.

   > [!NOTE]
   > {% data reusables.copilot.cloud-agent.unattributed-additional-approval-note %}

Only users with **write** access to a repository can trigger {% data variables.product.prodname_copilot_short %} to make changes, but any conversation participant can provide input. Guest members of a workspace, and outside collaborators to repositories are not able to start or steer a session with {% data variables.product.prodname_copilot_short %} in Teams.

{% data variables.product.prodname_copilot_short %} uses all messages in the conversation to inform the work. The entire thread becomes the decision-making context for the artifact.

When you ask {% data variables.product.prodname_copilot_short %} to perform a task, it will display details about the session, such as the working repository, issue or pull request link, model used, and a task status or summary.

### Secure cloud sandboxes

When {% data variables.copilot.copilot_cloud_agent %} starts work on a task from Teams, {% data variables.product.prodname_copilot_short %} continues working asynchronously in a **secure cloud sandbox**, and posts the result when it's ready.

You can keep steering from Teams, or continue the work on the agent-generated artifacts in {% data variables.product.github %}, the terminal, or your preferred code editor.

## Prerequisites

* You must have a {% data variables.product.github %} account with access to {% data variables.product.prodname_copilot_short %} through a paid {% data variables.product.prodname_copilot_short %} plan.
* You must have a Teams account.
* You must have Microsoft Public Developer Preview enabled for your Microsoft Teams client, see [Public developer preview for Teams](https://learn.microsoft.com/en-us/microsoftteams/platform/resources/dev-preview/developer-preview-intro) in the Microsoft Learn documentation.
{% data reusables.copilot.cloud-agent.cloud-sandboxes-prerequisite-teams %}

## Installing the {% data variables.product.github %} app in Teams

The {% data variables.product.github %} app only needs to be installed once in a team. After the app is installed, any member of the team can connect their {% data variables.product.github %} account to the app and start using it.

1. Open the [{% data variables.product.github %} integration installation link](https://teams.microsoft.com/l/app/836ecc9e-6dca-4696-a2e9-15e252cd3f31) in your web browser to launch Teams and the installation dialog.
1. Click **Add** to add the app to your team.
1. Follow the prompts on screen to authenticate and authorize the app.

## Connecting the {% data variables.product.github %} app to your {% data variables.product.github %} account

The first time you use the {% data variables.product.github %} app in Teams, you need to connect it to your {% data variables.product.github %} account. Then if prompted, set a default repository.

The default repository provides the context that {% data variables.product.prodname_copilot_short %} uses when responding to prompts, and it's also where issues and pull requests created by {% data variables.copilot.copilot_cloud_agent %} sessions will be opened unless you specify a repository in your prompt.

To get started:

1. In Teams, @mention the app in a message by typing `@{% data variables.product.github %}`.
1. Follow the prompts to connect your {% data variables.product.github %} account, and if prompted, optionally set a default repository.
1. To see what else you can do, in the thread, @mention the app by typing `@{% data variables.product.github %} help`.

## Starting a {% data variables.product.prodname_copilot %} session from your team conversation

@Mention the app in any Teams chat by typing `@{% data variables.product.github %}` followed by your task. You can summon the agent for any repository where you have `write` access. The agent responds with a summary of planned changes and a link to the artifacts it creates.

For example, to ask the agent to create a pull request on a particular branch in a repository, you can type:

```text
@{% data variables.product.github %} Create a pull request to...YOUR_PROMPT repo=OWNER/REPO_NAME branch=BRANCH_NAME
```

The `repo` parameter tells {% data variables.product.prodname_copilot_short %} which repository to use, and the `branch` parameter specifies an existing branch to use as the base branch for a pull request.

## Iterating on work in the thread

To refine the pull request, @mention `@{% data variables.product.github %}` in the same thread with your requested changes. {% data variables.product.prodname_copilot_short %} incorporates all messages since the previous @mention to iterate on the work, keeping the discussion and implementation connected.

## Creating issues with {% data variables.product.prodname_copilot_short %}

You can ask {% data variables.product.prodname_copilot_short %} to create {% data variables.product.github %} issues directly from Teams, turning conversations into actionable tasks. Just describe what you need in natural language, and {% data variables.product.prodname_copilot_short %} creates the issue for you.

You can create a single issue or multiple issues at once with child-parent relationships.

When you @mention the app, it uses the full thread history as context for the issues it creates. To keep the context focused, consider starting a new thread or sending a direct message.

## Customizing {% data variables.copilot.copilot_cloud_agent %} in Teams

You can customize how {% data variables.copilot.copilot_cloud_agent %} works in your channels and threads using the `settings` parameter. For example, you can set a default repository for a channel.

1. To see and change your channel settings, mention the app in a message by typing:

   ```text
   @{% data variables.product.github %} settings
   ```

1. Then follow the prompts to make your changes.

### Setting a default repository for a channel

You can set a default repository for each private or public channel. You cannot set a default repository for direct messages with {% data variables.product.prodname_copilot_short %}.

If a channel does not have a default repository, {% data variables.product.prodname_copilot_short %} sets the repository you use in your first session in that channel as the channel's default repository.

When you do not specify a repository or branch, {% data variables.product.prodname_copilot_short %} uses the channel's default repository and that repository's default branch.

1. In the channel, type `@{% data variables.product.github %} settings` and send the message.
1. Follow the prompts to select a default repository for the channel.

## Feedback and support

You can view and share feedback in our [discussion forum](https://github.com/orgs/community/discussions/205453).

## Further reading

* [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-cloud-agent)
* [AUTOTITLE](/copilot/concepts/agents/cloud-agent/access-management)
