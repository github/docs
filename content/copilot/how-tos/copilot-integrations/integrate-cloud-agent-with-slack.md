---
title: Integrating Copilot cloud agent with Slack
shortTitle: Integrate cloud agent with Slack
allowTitleToDifferFromFilename: true
intro: 'Provide context to the {% data variables.product.prodname_copilot_short %} cloud agent and open pull requests, all from within your Slack workspace.'
product: '{% data reusables.copilot.plans.permission-paid-plans-cfi %}'
versions:
  feature: copilot
contentType: how-tos
category:
  - Integrate Copilot with your tools
redirect_from:
  - /copilot/how-tos/use-copilot-agents/cloud-agent/integrate-cloud-agent-with-slack
  - /copilot/how-tos/use-copilot-agents/coding-agent/integrate-coding-agent-with-slack
---

> [!NOTE]
> * This feature is in {% data variables.release-phases.public_preview %} and subject to change.
> * {% data variables.product.prodname_copilot %} uses AI. Check for mistakes. See [AUTOTITLE](/copilot/responsible-use/agents).

## Introduction

The {% data variables.copilot.copilot_cloud_agent %} integration in Slack allows you to interact with {% data variables.copilot.copilot_cloud_agent %} from your Slack workspace and is included in the {% data variables.product.github %} app for Slack. Within a Slack message, thread, or direct message, you can initiate {% data variables.copilot.copilot_cloud_agent_short %} sessions to investigate, plan, write code, and create issues and pull requests, using the context of your conversation. Your team's collaborative decisions stay connected to your code, bridging the gap between where discussions happen and where implementation lives.

For information about additional {% data variables.product.prodname_copilot_short %} integrations, see [AUTOTITLE](/copilot/concepts/tools/about-copilot-integrations).

## Security considerations

Before you @mention {% data variables.product.github %} in Slack, consider that {% data variables.copilot.copilot_cloud_agent %} will capture the entire thread as context for your request, understanding and implementing solutions based on the discussion. This context is stored in the artifacts the agent generates. If you want to limit the context, you can send a direct message to the {% data variables.product.github %} app for Slack instead.

## Understanding collaborative sessions, permissions, code channels and sandboxes

The identity {% data variables.product.prodname_copilot_short %} uses depends on whether you interact with it in a direct message or a shared context.

* When you use {% data variables.product.prodname_copilot_short %} in a direct message, it can take actions for you, such as creating pull requests or issues, as well as answer questions. It uses the permissions of your linked {% data variables.product.github %} personal account to take these actions.

* When you use {% data variables.product.prodname_copilot_short %} in a shared context, such as a group thread or channel, {% data variables.product.prodname_copilot_short %} creates artifacts, such as pull requests, under its app identity rather than your personal account.

   > [!NOTE]
   > {% data reusables.copilot.cloud-agent.unattributed-additional-approval-note %}

Only users with **write** access to a repository can trigger {% data variables.product.prodname_copilot_short %} to make changes, but any conversation participant can provide input. Guest members of a workspace, and outside collaborators to repositories are not able to start or steer a session with {% data variables.product.prodname_copilot_short %} in Slack.

{% data variables.product.prodname_copilot_short %} uses all messages in the conversation to inform the work. The entire thread becomes the decision-making context for the artifact.

### Slack Code

When you ask {% data variables.product.prodname_copilot_short %} to perform a task, {% data variables.copilot.copilot_cloud_agent %} will create a dedicated code channel, called **Slack Code**. This is where you, and optionally your teammates, can collaborate with {% data variables.product.prodname_copilot_short %} on a task. Once a code channel is established, steer the session exclusively through that channel.

{% data variables.product.prodname_copilot_short %} manages the code channel and displays details about the session, such as the working repository, branch, issue or pull request link, status, and model in use. Code channels are intended for one session at a time: one channel per task. When the session is finished, you are asked whether you want to archive the channel. After archiving, the channel and its history remain viewable and searchable, and you can reopen the channel if needed.

### Secure cloud sandboxes

When {% data variables.copilot.copilot_cloud_agent %} starts work on a task from Slack, {% data variables.product.prodname_copilot_short %} continues working asynchronously in a **secure cloud sandbox**, and posts the result when it's ready. You can keep steering from Slack or continue the work on the agent-generated artifacts in {% data variables.product.github %}, the terminal, or your preferred code editor.

## Prerequisites

* You must have a {% data variables.product.github %} account with access to {% data variables.product.prodname_copilot_short %} through a paid {% data variables.product.prodname_copilot_short %} plan.
* You must have a Slack account and be a member of a workspace.
* You must have the {% data variables.product.github %} integration for Slack installed. See [AUTOTITLE](/integrations/how-tos/slack/integrate-github-with-slack).
{% data reusables.copilot.cloud-agent.cloud-sandboxes-prerequisite-slack %}

## Connecting the {% data variables.product.github %} app to your {% data variables.product.github %} account

The first time you use the {% data variables.product.github %} integration in Slack, the app will prompt you to connect it to your {% data variables.product.github %} account. Then if prompted, set a default repository.

The default repository provides the context that {% data variables.product.prodname_copilot_short %} uses when responding to prompts, and it's also where issues and pull requests created by {% data variables.copilot.copilot_cloud_agent %} sessions will be opened unless you specify a repository in your prompt.

To get started:

1. In Slack, open a direct message with the {% data variables.product.github %} app or @mention the {% data variables.product.github %} app in a thread by typing `@{% data variables.product.github %}`.
1. Follow the prompts to connect your {% data variables.product.github %} account, and if prompted, optionally set a default repository.
1. To see what else you can do, in the thread, @mention the app by typing `@{% data variables.product.github %} help`.

## Using the {% data variables.product.github %} app in Slack

You can send the {% data variables.product.github %} app direct messages or @mention it in a thread. The bot will respond to your messages and perform tasks based on your requests.

You must have write access to the default repository, or the repository specified in your prompt, in order to trigger {% data variables.copilot.copilot_cloud_agent %} to work. If you do not have write access to the relevant repository, you can still help guide {% data variables.product.prodname_copilot_short %} by providing input in the Slack thread, which will be used as context when {% data variables.copilot.copilot_cloud_agent %} makes changes in the pull request.

Users can invoke {% data variables.copilot.copilot_cloud_agent %} on any repository where they have `write` access. For enterprise-owned repositories, administrators must install and configure the [Slack {% data variables.product.github %} app](https://github.com/marketplace/slack-github?ref_product=copilot&ref_type=engagement&ref_style=text&ref_plan=enterprise) and specify which repositories the Slack app can access. For more information about configuring {% data variables.product.prodname_github_apps %}, see [AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-github-marketplace-for-your-organizations).

1. In Slack, open a direct message with the {% data variables.product.github %} app or @mention the app in a thread by typing `@{% data variables.product.github %}`.
1. Type your prompt, then send it. You can describe the repository and branch in natural language as part of your request. For example:

    `@{% data variables.product.github %} Add "Hello World" to the README in octo-org/octo-repo on the develop branch`

1. {% data variables.copilot.copilot_cloud_agent %} will initiate a {% data variables.copilot.copilot_cloud_agent_short %} session and, once the {% data variables.copilot.copilot_cloud_agent_short %} has finished, respond with a summary of the changes it plans to make and a link to the artifacts it has created in the specified repository.

### Creating issues with {% data variables.product.prodname_copilot_short %}

You can ask {% data variables.product.prodname_copilot_short %} to create {% data variables.product.github %} issues directly from Slack, turning conversations into actionable tasks. Just describe what you need in natural language, and {% data variables.product.prodname_copilot_short %} creates the issue for you.

You can create a single issue or multiple issues at once with child-parent relationships.

When you @mention the app, it uses the full thread history as context for the issues it creates. To keep the context focused, consider starting a new thread or sending a direct message.

1. In Slack, ask {% data variables.product.prodname_copilot_short %} to create one or more issues, specifying the target repository.

   To create a single issue:

   ```text
   @{% data variables.product.github %} In octo-org/octo-repo, create a feature request to add fuzzy matching to search.
   ```

   To create multiple issues at once:

   ```text
   @{% data variables.product.github %} In octo-org/octo-repo, open separate issues for adding fuzzy matching to search, paginating the results list, and caching search queries.
   ```

   To create issues with child-parent relationships:

   ```text
   @{% data variables.product.github %} In octo-org/octo-repo, create an epic to redesign search, with child issues for fuzzy matching, pagination, and query caching.
   ```

   > [!NOTE] You can only use {% data variables.product.prodname_copilot_short %} to create issues in repositories where you already have permission to create issues. This feature doesn't change your access or bypass repository permissions.

1. {% data variables.product.prodname_copilot_short %} creates the issues and replies with a link to each one. Each issue includes a title and description, and based on your prompt {% data variables.product.prodname_copilot_short %} can also add metadata such as labels, assignees, and issue type.

### Setting a default repository for a channel

You can set a default repository for each private or public channel. You cannot set a default repository for direct messages with {% data variables.product.prodname_copilot_short %}.

If a channel does not have a default repository, {% data variables.product.prodname_copilot_short %} sets the repository you use in your first session in that channel as the channel's default repository.

1. In the channel, type `@{% data variables.product.github %} settings` and send the message.
1. Select the repository you want to use as the default, then save your changes.

When you do not specify a repository or branch, {% data variables.product.prodname_copilot_short %} uses the channel's default repository and that repository's default branch.

> [!NOTE] The default repository is shared across the channel, so any change applies to everyone using {% data variables.product.prodname_copilot_short %} in that channel.

## Further reading

* [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-cloud-agent) - Learn more about {% data variables.copilot.copilot_cloud_agent %} and how it can support you.
