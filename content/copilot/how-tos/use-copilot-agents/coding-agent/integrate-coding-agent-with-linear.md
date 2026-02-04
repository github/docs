---
title: Integrating Copilot coding agent with Linear
shortTitle: Integrate coding agent with Linear
intro: 'Use the {% data variables.product.prodname_copilot_short %} integration in Linear to provide context and open pull requests, all from within your Linear workspace.'
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

The {% data variables.product.prodname_copilot_short %} integration in Linear allows you to invoke {% data variables.copilot.copilot_coding_agent %} without leaving your Linear workspace. From within a Linear issue you can initiate {% data variables.copilot.copilot_coding_agent_short %} sessions and open pull requests, using the context of your issue description and comments.

For information about additional {% data variables.product.prodname_copilot_short %} integrations, see [AUTOTITLE](/copilot/concepts/tools/about-copilot-integrations).

> [!NOTE]
> When you mention @{% data variables.product.github %} in, or assign {% data variables.product.prodname_copilot_short %} to, a Linear issue, the agent will capture the entire issue description and comments as context for your request. This helps the agent to understand the issue, and implement an appropriate solution, based on all of the information in the issue. This context is stored in the pull request.

## Prerequisites

* You must have a {% data variables.product.github %} account with access to {% data variables.product.prodname_copilot_short %} through {% data variables.copilot.copilot_pro_short %}, {% data variables.copilot.copilot_pro_plus_short %}, {% data variables.copilot.copilot_business_short %}, or {% data variables.copilot.copilot_enterprise_short %}.
* You must have a Linear account and be a member of a team.

## Installing the {% data variables.product.prodname_copilot_short %} app in Linear

> [!NOTE] In order to install the {% data variables.product.prodname_copilot_short %} app in Linear, be an owner of the organization or enterprise where you want to install the app. You must also be a workspace admin in Linear.

The {% data variables.product.prodname_copilot_short %} app only needs to be installed once in an organization. After the app is installed, any member of the organization can connect their {% data variables.product.prodname_copilot_short %} account to the app and start using it.

1. Go to the [{% data variables.product.prodname_copilot_short %} for Linear page](https://github.com/apps/github-copilot-for-linear?ref_product=copilot&ref_type=engagement&ref_style=text) and click **Configure**.
1. Follow the prompts on screen to configure and authorize the app in the organization or enterprise where you want to use it.

## Using the {% data variables.product.prodname_copilot_short %} app in Linear

The first time you use the {% data variables.product.prodname_copilot_short %} app in Linear, you will need to connect it to your {% data variables.product.github %} account. You will also need to specify a repository for {% data variables.copilot.copilot_coding_agent %} to use. Only users with **write** access to the specified repository can trigger {% data variables.copilot.copilot_coding_agent %} to work in that repository. Contributors to the issue without repository **write** access can help guide {% data variables.product.prodname_copilot_short %} by providing input to the issue conversation, which will be used as context when creating the pull request.

1. In Linear, create an issue where you want to use {% data variables.copilot.copilot_coding_agent %}.
1. Click the **Assign** dropdown, then select **{% data variables.product.prodname_copilot %}**.
1. If you haven't yet specified a repository for {% data variables.copilot.copilot_coding_agent %} to use, you will be prompted to do so now. This is where {% data variables.copilot.copilot_coding_agent %} will open the pull request related to this issue.
1. If this is your first time using the app, you will be prompted to sign in to your {% data variables.product.github %} account and authorize the app. Follow the prompts to complete the authorization.
1. In the "Links" section of your Linear issue, you will now see a linked "[WIP]" pull request created by {% data variables.copilot.copilot_coding_agent %}. Click the link to view the pull request on {% data variables.product.github %}.
1. Once {% data variables.copilot.copilot_coding_agent %} has finished working on the pull request, a notification will be added to the "Activity" section of your Linear issue.

## Further reading

* [AUTOTITLE](/copilot/concepts/coding-agent/coding-agent)
* [AUTOTITLE](/copilot/concepts/coding-agent/enable-coding-agent)
