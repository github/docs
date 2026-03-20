---
title: Integrating Copilot coding agent with Azure Boards
shortTitle: Integrate coding agent with Azure Boards
intro: 'Use the {% data variables.product.prodname_copilot_short %} integration in Azure Boards to send work items directly to {% data variables.copilot.copilot_coding_agent %} and generate pull requests, all from within your Azure DevOps workspace.'
versions:
  feature: copilot
contentType: how-tos
category:
  - Integrate Copilot with your tools
---

The Azure Boards {% data variables.product.github %} integration allows you to invoke {% data variables.copilot.copilot_coding_agent %} without leaving your workspace. From within a Azure Boards work item you can initiate {% data variables.copilot.copilot_coding_agent_short %} sessions and open pull requests, using the context of your work item description and comments.

For information about additional {% data variables.product.prodname_copilot_short %} integrations, see [AUTOTITLE](/copilot/concepts/tools/about-copilot-integrations).

> [!NOTE]
> When you send a work item to {% data variables.copilot.copilot_coding_agent %}, the agent will capture content from text fields (such as the description and reproduction steps), along with the last 50 comments. This context is stored in the pull request, and is visible to anyone with access to the repository.

## Prerequisites

* You must have a {% data variables.product.github %} account with access to {% data variables.product.prodname_copilot_short %} through {% data variables.copilot.copilot_pro_short %}, {% data variables.copilot.copilot_pro_plus_short %}, {% data variables.copilot.copilot_business_short %}, or {% data variables.copilot.copilot_enterprise_short %}.
* The repositories connected to the Azure DevOps project must have {% data variables.copilot.copilot_coding_agent %} enabled.

## Installing the Azure Boards application on {% data variables.product.github %}

> [!NOTE]
> To install the Azure Boards application, you must be an owner or App manager of the organization or enterprise on {% data variables.product.github %}.

The Azure Boards app only needs to be installed once in an organization. After the app is installed, any member of the organization can connect their {% data variables.product.github %} account to the app and start using it.

1. Go to the [Azure Boards installation page](https://github.com/marketplace/azure-boards).
1. Scroll to the bottom of the page, then use the **Account** dropdown menu to select an account you would like to install the app in.
1. Click **Install**.
1. Select the repositories you would like the Azure Boards app to have access to.
1. Follow the prompts on screen to configure and authorize the app in your Azure DevOps organization and project.

## Approving the Azure Boards application permissions

If you already have the Azure Boards application installed on {% data variables.product.github %}, you will need to approve the required permission changes to allow the app to communicate with {% data variables.product.prodname_copilot %}.

1. Navigate to [your installed {% data variables.product.github %} Apps](https://github.com/settings/installations).
1. Find the Azure Boards application, then click the **Review request** link.
1. Review the permissions, then click **Accept new permission**.

## Creating a pull request from a work item

1. In Azure Boards, open the work item you want to send to {% data variables.copilot.copilot_coding_agent %}.
1. Click the {% octicon "copilot" aria-label="Copilot" %} icon on the work item.
1. Select **Create a pull request with {% data variables.product.prodname_copilot_short %}**.
1. Under **{% data variables.product.github %} repository**, select the repository where {% data variables.product.prodname_copilot_short %} should create the pull request.
1. Optionally, change the base branch that {% data variables.product.prodname_copilot_short %} should use for the pull request.
1. Optionally, add any additional instructions to provide {% data variables.product.prodname_copilot_short %} with more context.
1. Click **Create**.

{% data variables.copilot.copilot_coding_agent %} will begin processing the work item and create a draft pull request linked back to the work item.

## Further reading

* [AUTOTITLE](/copilot/concepts/agents/coding-agent/about-coding-agent)
* [AUTOTITLE](/copilot/concepts/agents/coding-agent/access-management)