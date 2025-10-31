---
title: Integrating Copilot coding agent with Teams
shortTitle: Integrate coding agent with Teams
intro: 'You can use the {% data variables.product.github %} integration in Teams to provide context and open pull requests all from within your Teams channels.'
versions:
  feature: copilot
topics:
  - Copilot
contentType: how-tos
category: 
  - Integrate Copilot with your tools
---

> [!NOTE]
> This feature is currently in {% data variables.release-phases.public_preview %} and subject to change.

The {% data variables.product.github %} integration in Microsoft Teams allows you to interact with {% data variables.copilot.copilot_coding_agent %} all from within your Teams channels. From within a Teams thread you can initiate {% data variables.copilot.copilot_coding_agent_short %} sessions and open pull requests, using the context of your conversation.

For information about additional {% data variables.product.prodname_copilot_short %} integrations, see [AUTOTITLE](/copilot/concepts/tools/about-copilot-integrations).

> [!NOTE]
> When you mention @{% data variables.product.github %} in a Teams thread, the agent will capture the entire thread as context for your request, understanding and implementing solutions based on the discussion. This context is stored in the pull request.

## Prerequisites

* You must have a {% data variables.product.github %} account with access to {% data variables.product.prodname_copilot_short %} through {% data variables.copilot.copilot_pro_short %}, {% data variables.copilot.copilot_pro_plus_short %}, {% data variables.copilot.copilot_business_short %}, or {% data variables.copilot.copilot_enterprise_short %}.
* You must have a Teams account and be a member of a channel.

## Installing the {% data variables.product.github %} app in Teams

The {% data variables.product.github %} app only needs to be installed once in a team. After the app is installed, any member of the team can connect their {% data variables.product.github %} account to the app and start using it.

1. Open the [{% data variables.product.github %} integration installation link](https://teams.microsoft.com/l/app/836ecc9e-6dca-4696-a2e9-15e252cd3f31) in your web browser to launch Teams and the installation dialog.
1. Click **Add** to add the app to your team.
1. Follow the prompts on screen to authenticate and authorize the app.

## Connecting the {% data variables.product.github %} app to your {% data variables.product.github %} account

The first time you use the {% data variables.product.github %} app in Teams, you need to connect it to your {% data variables.product.github %} account and set a default repository. The default repository provides the context that {% data variables.product.prodname_copilot_short %} uses when responding to prompts, and it’s also where pull requests created by {% data variables.copilot.copilot_coding_agent %} sessions will be opened unless you specify a repository in your prompt.

To get started, mention `@{% data variables.product.github %} <YOUR_TASK>` in any Teams thread. The app will guide you through signing in and setting a default repository. Or you can connect your {% data variables.product.github %} account and set the default repository manually by following these steps:

1. In Teams, mention the app in a thread by typing `@{% data variables.product.github %}`.
1. Click **signin** from the list of suggestions.
1. Follow the prompts to sign in to your {% data variables.product.github %} account.
1. In the thread, mention the app by typing `@{% data variables.product.github %}`.
1. Click **settings** to set the default repository.

## Using the {% data variables.product.prodname_copilot_short %} app in Teams

You can interact with the {% data variables.product.github %} app in Teams by mentioning it in a thread. The agent will respond to your messages and perform tasks based on your requests. Only users with **write** access to the default repository—or the repository specified in their prompt—can trigger {% data variables.copilot.copilot_coding_agent %} to work. Contributors to the thread without **write** access can help guide {% data variables.product.prodname_copilot_short %} by providing input to the conversation, which will be used as context when making changes in the pull request.

1. In Teams, mention the app in a thread by typing @{% data variables.product.github %}.
1. Type your message or request, then send it. Optionally, you can specify a repository or branch using the following syntax:

    ```text
    @GitHub Add "Hello World" to the README in repo=REPO_OWNER/REPO_NAME branch=BRANCH_NAME
    ```

   The `repo` parameter tells {% data variables.copilot.copilot_coding_agent %} which repository to use for the request, and the `branch` parameter specifies an existing branch of the repository that should be used as the base branch for a pull request. By default, {% data variables.product.prodname_copilot_short %} uses your configured default repository and the repository’s default branch.

   {% data variables.product.prodname_copilot_short %} will initiate a {% data variables.copilot.copilot_coding_agent_short %} session and respond with a summary of the changes it plans to make, including a link to the pull request it has created in the repository.

You can continue to iterate on the pull request in the same Teams thread. Mention @{% data variables.product.github %} with your suggested change, and the {% data variables.copilot.copilot_coding_agent %} will use all of the messages in the thread since the previous mention to iterate on the existing pull request.

## Further reading

* [AUTOTITLE](/copilot/concepts/coding-agent/coding-agent)
* [AUTOTITLE](/copilot/concepts/coding-agent/enable-coding-agent)
