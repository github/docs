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
  - /copilot/how-tos/use-copilot-agents/coding-agent/integrate-coding-agent-with-slack
---

> [!NOTE]
> * This feature is in {% data variables.release-phases.public_preview %} and subject to change.
> * {% data variables.product.prodname_copilot %} uses AI. Check for mistakes. See [AUTOTITLE](/copilot/responsible-use/agents).

## Introduction

The {% data variables.copilot.copilot_cloud_agent %} integration in Slack allows you to interact with {% data variables.copilot.copilot_cloud_agent %} from your Slack workspace and is included in the {% data variables.product.prodname_github_app %} for Slack. From within a Slack thread or direct message, you can initiate {% data variables.copilot.copilot_cloud_agent_short %} sessions using the context of your conversation.

For information about additional {% data variables.product.prodname_copilot_short %} integrations, see [AUTOTITLE](/copilot/concepts/tools/about-copilot-integrations).

## Security considerations

When you @mention {% data variables.product.prodname_copilot_short %} in Slack, consider the following.

* {% data variables.product.prodname_copilot_short %} may perform write actions on your behalf, such as creating pull requests or issues, in addition to answering questions. {% data variables.product.prodname_copilot_short %} uses the permissions of your linked {% data variables.product.github %} account for any actions it takes.
* {% data variables.copilot.copilot_cloud_agent %} will capture the entire thread as context for your request, understanding and implementing solutions based on the discussion. This context is stored in the pull request. If you want to limit the context, you can send a direct message to the {% data variables.product.prodname_github_app %} for Slack instead.

## Prerequisites

* You must have a {% data variables.product.github %} account with access to {% data variables.product.prodname_copilot_short %} through a paid {% data variables.product.prodname_copilot_short %} plan.
* You must have a Slack account and be a member of a workspace.
* You must have the {% data variables.product.prodname_github_app %} for Slack installed. See [AUTOTITLE](/integrations/how-tos/slack/integrate-github-with-slack).

## Connecting the {% data variables.product.prodname_github_app %} to your {% data variables.product.github %} account

The first time you use the {% data variables.product.prodname_github_app %} in Slack, the app will prompt you to connect it to your {% data variables.product.github %} account and set a default repository. The default repository is where pull requests created by {% data variables.copilot.copilot_cloud_agent %} sessions will be opened.

1. In Slack, open a direct message with the {% data variables.product.prodname_github_app %} or mention {% data variables.product.prodname_copilot_short %} in a thread by typing `@{% data variables.product.prodname_copilot %}`.
1. Send a prompt to {% data variables.copilot.copilot_cloud_agent %}. This can be a request to perform a task, or simply `login`.
1. If asked to connect your {% data variables.product.github %} account, follow the instructions in {% data variables.product.prodname_copilot_short %}'s reply and authorize the app to access your {% data variables.product.github %} account.
1. In the Slack message thread, click **Configure settings** to set a default repository for pull requests. You can change this repository later using the `settings` command.
1. In the "Settings" dialog, type the name of a repository where you'll be using the cloud agent, then click **Save changes**.

## Using the {% data variables.product.prodname_github_app %} in Slack

You can send the {% data variables.product.prodname_github_app %} direct messages or mention it in a thread. The bot will respond to your messages and perform tasks based on your requests.

You must have write access to the default repository – or the repository specified in your prompt – in order to trigger {% data variables.copilot.copilot_cloud_agent %} to work. If you do not have write access to the relevant repository, you can still help guide {% data variables.product.prodname_copilot_short %} by providing input in the Slack thread, which will be used as context when {% data variables.copilot.copilot_cloud_agent %} makes changes in the pull request.

Users can invoke {% data variables.copilot.copilot_cloud_agent %} on any repository where they have `write` access. For enterprise-owned repositories, administrators must install and configure the [Slack {% data variables.product.prodname_github_app %}](https://github.com/marketplace/slack-github?ref_product=copilot&ref_type=engagement&ref_style=text&ref_plan=enterprise) and specify which repositories the Slack app can access. For more information about configuring {% data variables.product.prodname_github_apps %}, see [AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-github-marketplace-for-your-organizations).

1. In Slack, open a direct message with the {% data variables.product.prodname_github_app %} or mention the app in a thread by typing `@{% data variables.product.github %}`.
1. Type your prompt, then send it. You can describe the repository and branch in natural language as part of your request. For example:

    `@{% data variables.product.github %} Add "Hello World" to the README in octo-org/octo-repo on the develop branch`

    > [!NOTE] Tell {% data variables.copilot.copilot_cloud_agent %} which repository to use for the request, and, if needed, an existing branch of the repository to use as the base branch for a pull request. If you don't specify a repository, {% data variables.product.prodname_copilot_short %} uses the channel's default repository if one is set, and otherwise asks you which one to use. If you don't specify a branch, {% data variables.product.prodname_copilot_short %} creates a new branch from the repository's default branch.

1. {% data variables.copilot.copilot_cloud_agent %} will initiate a {% data variables.copilot.copilot_cloud_agent_short %} session and, once the {% data variables.copilot.copilot_cloud_agent_short %} has finished, respond with a summary of the changes it plans to make and a link to the pull request it has created in the default repository.

### Creating issues with {% data variables.product.prodname_copilot_short %}

You can ask {% data variables.product.prodname_copilot_short %} to create {% data variables.product.github %} issues directly from Slack, turning conversations into actionable tasks. Just describe what you need in natural language, and {% data variables.product.prodname_copilot_short %} creates the issue for you. You can create a single issue or multiple issues at once with child-parent relationships. When you mention {% data variables.product.prodname_copilot_short %}, it uses the full thread history as context for the issues it creates. To keep the context focused, consider starting a new thread or sending a direct message.

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

To avoid specifying a repository in every request, you can set a default repository for a Slack channel.

1. In the channel, type `@{% data variables.product.github %} settings` and send the message.
1. Select the repository you want to use as the default, then save your changes.

When no repository is specified in a request, {% data variables.product.prodname_copilot_short %} uses the channel's default repository.

> [!NOTE] The default repository is shared across the channel, so any change applies to everyone using {% data variables.product.prodname_copilot_short %} in that channel.


## Further reading

* [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-cloud-agent) - Learn more about {% data variables.copilot.copilot_cloud_agent %} and how it can support you.
