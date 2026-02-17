---
title: Integrating Copilot coding agent with Slack
shortTitle: Integrate coding agent with Slack
intro: 'Provide context to the {% data variables.product.prodname_copilot_short %} coding agent and open pull requests, all from within your Slack workspace.'
versions:
  feature: copilot
contentType: how-tos
category:
  - Integrate Copilot with your tools
---

> [!NOTE]
> * This feature is in {% data variables.release-phases.public_preview %} and subject to change.
> * {% data variables.product.prodname_copilot %} uses AI. Check for mistakes. See [AUTOTITLE](/copilot/responsible-use/copilot-coding-agent)

## Introduction

The {% data variables.copilot.copilot_coding_agent %} integration in Slack allows you to interact with {% data variables.copilot.copilot_coding_agent %} from your Slack workspace and is included in the {% data variables.product.prodname_github_app %} for Slack. From within a Slack thread or direct message, you can initiate {% data variables.copilot.copilot_coding_agent_short %} sessions using the context of your conversation.

For information about additional {% data variables.product.prodname_copilot_short %} integrations, see [AUTOTITLE](/copilot/concepts/tools/about-copilot-integrations).

> [!NOTE]
> When you mention `@{% data variables.product.github %}` in a Slack thread, the agent will capture the entire thread as context for your request, understanding and implementing solutions based on the discussion. This context is stored in the pull request. If you want to limit the context, you can send a direct message to the {% data variables.product.prodname_github_app %} for Slack instead.

## Prerequisites

* You must have a {% data variables.product.github %} account with access to {% data variables.product.prodname_copilot_short %} through {% data variables.copilot.copilot_pro_short %}, {% data variables.copilot.copilot_pro_plus_short %}, {% data variables.copilot.copilot_business_short %}, or {% data variables.copilot.copilot_enterprise_short %}.
* You must have a Slack account and be a member of a workspace.
* You must have the {% data variables.product.prodname_github_app %} for Slack installed. See [AUTOTITLE](/integrations/how-tos/slack/integrate-github-with-slack).

## Connecting the {% data variables.product.prodname_github_app %} to your {% data variables.product.github %} account

The first time you use the {% data variables.product.prodname_github_app %} in Slack, the app will prompt you to connect it to your {% data variables.product.github %} account and set a default repository. The default repository is where pull requests created by {% data variables.copilot.copilot_coding_agent %} sessions will be opened.

1. In Slack, open a direct message with the {% data variables.product.prodname_github_app %} or mention {% data variables.product.prodname_copilot_short %} in a thread by typing `@{% data variables.product.prodname_copilot %}`.
1. Send a prompt to {% data variables.copilot.copilot_coding_agent %}. This can be a request to perform a task, or simply `login`.
1. If asked to connect your {% data variables.product.github %} account, follow the instructions in {% data variables.product.prodname_copilot_short %}'s reply and authorize the app to access your {% data variables.product.github %} account.
1. In the Slack message thread, click **Configure settings** to set a default repository for pull requests. You can change this repository later using the `settings` command.
1. In the "Settings" dialog, type the name of a repository where you'll be using the coding agent, then click **Save changes**.

## Using the {% data variables.product.prodname_github_app %} in Slack

You can send the {% data variables.product.prodname_github_app %} direct messages or mention it in a thread. The bot will respond to your messages and perform tasks based on your requests.

You must have write access to the default repository – or the repository specified in your prompt – in order to trigger {% data variables.copilot.copilot_coding_agent %} to work. If you do not have write access to the relevant repository, you can still help guide {% data variables.product.prodname_copilot_short %} by providing input in the Slack thread, which will be used as context when {% data variables.copilot.copilot_coding_agent %} makes changes in the pull request.

Users can invoke {% data variables.copilot.copilot_coding_agent %} on any repository where they have `write` access. For enterprise-owned repositories, administrators must install and configure the [Slack {% data variables.product.prodname_github_app %}](https://github.com/marketplace/slack-github?ref_product=copilot&ref_type=engagement&ref_style=text&ref_plan=enterprise) and specify which repositories the Slack app can access. For more information about configuring {% data variables.product.prodname_github_apps %}, see [AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-github-marketplace-for-your-organizations).

1. In Slack, open a direct message with the {% data variables.product.prodname_github_app %} or mention the app in a thread by typing `@{% data variables.product.prodname_copilot %}`.
1. Type your prompt, then send it. Optionally, you can specify a repository or branch using the following syntax:

    `@{% data variables.product.github %} Add "Hello World" to the README in repo=REPO_OWNER/REPO_NAME branch=BRANCH_NAME`

    > [!NOTE] The repo parameter tells {% data variables.copilot.copilot_coding_agent %} which repository to use for the request, and the branch parameter specifies an existing branch of the repository that should be used as the base branch for a pull request. By default, {% data variables.product.prodname_copilot_short %} uses your configured default repository and the repository’s default branch.

1. {% data variables.copilot.copilot_coding_agent %} will initiate a {% data variables.copilot.copilot_coding_agent_short %} session and, once the coding agent has finished, respond with a summary of the changes it plans to make and a link to the pull request it has created in the default repository.

## Further reading

* [AUTOTITLE](/copilot/concepts/agents/coding-agent/about-coding-agent) - Learn more about {% data variables.copilot.copilot_coding_agent %} and how it can support you.
