---
title: Integrating Copilot cloud agent with Linear
shortTitle: Integrate cloud agent with Linear
allowTitleToDifferFromFilename: true
intro: 'Use the {% data variables.product.prodname_copilot_short %} integration in Linear to provide context, customize how the agent runs, and open pull requests, all from within your Linear workspace.'
product: '{% data reusables.copilot.plans.permission-paid-plans-cfi %}'
versions:
  feature: copilot
contentType: how-tos
category:
  - Integrate Copilot with your tools
redirect_from:
  - /copilot/how-tos/use-copilot-agents/coding-agent/integrate-coding-agent-with-linear
---

> [!NOTE]
> {% data variables.product.prodname_copilot %} uses AI. Check for mistakes. See [AUTOTITLE](/copilot/responsible-use/copilot-cloud-agent).

The {% data variables.product.prodname_copilot_short %} integration in Linear allows you to invoke {% data variables.copilot.copilot_cloud_agent %} without leaving your Linear workspace. From within a Linear issue you can initiate {% data variables.copilot.copilot_cloud_agent_short %} sessions, customize which model, custom agent, or branches the agent uses, steer a session, and open pull requests, all using the context of your issue description and comments.

For information about additional {% data variables.product.prodname_copilot_short %} integrations, see [AUTOTITLE](/copilot/concepts/tools/about-copilot-integrations).

> [!NOTE]
> When you mention @{% data variables.product.github %} in, or assign {% data variables.product.prodname_copilot_short %} to, a Linear issue, the agent captures the entire issue description and comments as context for your request. This helps the agent to understand the issue and implement an appropriate solution, based on all of the information in the issue. This context is stored in the pull request.

## Prerequisites

* You must have a {% data variables.product.github %} account with access to {% data variables.product.prodname_copilot_short %} through a paid {% data variables.product.prodname_copilot_short %} plan.
* You must have a Linear account and be a member of a team.

## Installing the {% data variables.product.prodname_copilot_short %} app in Linear

> [!NOTE]
> * To install the {% data variables.product.prodname_copilot_short %} app in Linear, you must be an owner of the organization or enterprise where you want to install the app. You must also be a workspace administrator in Linear.
> * If your organization is part of an enterprise that uses {% data variables.enterprise.data_residency %}, install the integration from the list of apps available to your enterprise at `SUBDOMAIN.ghe.com/apps/external-app/github-copilot-for-linear`. Replace SUBDOMAIN with your enterprise's subdomain of {% data variables.enterprise.data_residency_site %}.

The {% data variables.product.prodname_copilot_short %} app only needs to be installed once in an organization. After the app is installed, any member of the organization can connect their {% data variables.product.prodname_copilot_short %} account to the app and start using it.

1. Go to the [{% data variables.product.prodname_copilot_short %} for Linear page](https://github.com/apps/github-copilot-for-linear?ref_product=copilot&ref_type=engagement&ref_style=text) and click **Configure**.
1. Follow the prompts on screen to configure and authorize the app in the organization or enterprise where you want to use it.

## Using the {% data variables.product.prodname_copilot_short %} app in Linear

The first time you use the {% data variables.product.prodname_copilot_short %} app in Linear, you must connect it to your {% data variables.product.github %} account. You must also specify a repository for {% data variables.copilot.copilot_cloud_agent %} to use. Only users with **write** access to the specified repository can trigger {% data variables.copilot.copilot_cloud_agent %} to work in that repository. Contributors to the issue without repository **write** access can help guide {% data variables.product.prodname_copilot_short %} by providing input to the issue conversation, which is used as context when creating the pull request.

1. In Linear, create an issue where you want to use {% data variables.copilot.copilot_cloud_agent %}.
1. Click the **Assign** dropdown, then select **{% data variables.product.prodname_copilot %}**.
1. If you haven't yet specified a repository for {% data variables.copilot.copilot_cloud_agent %} to use, you are prompted to do so now. This is where {% data variables.copilot.copilot_cloud_agent %} opens the pull request related to this issue.
1. If this is your first time using the app, you are prompted to sign in to your {% data variables.product.github %} account and authorize the app. Follow the prompts to complete the authorization.
1. In the "Links" section of your Linear issue, you will see a linked "[WIP]" pull request created by {% data variables.copilot.copilot_cloud_agent %}. Click the link to view the pull request on {% data variables.product.github %}.
1. Once {% data variables.copilot.copilot_cloud_agent %} has finished working on the pull request, a notification is added to the "Activity" section of your Linear issue.

## Customizing {% data variables.copilot.copilot_cloud_agent %} in Linear

You can customize how {% data variables.copilot.copilot_cloud_agent %} runs in Linear, either per issue or across your entire workspace by using Linear's agent guidance. Recurring preferences such as a default repository, a preferred model, or branch conventions are best set once with [Linear agent guidance](#using-linear-agent-guidance).

### Using Linear agent guidance

Linear's agent guidance is a prompt that you set at the workspace or team level. Linear automatically passes this guidance to {% data variables.copilot.copilot_cloud_agent %} every time you trigger it.

Common uses for agent guidance include:

* Specifying a default repository to open pull requests against.
* Specifying a preferred model.
* Specifying a custom agent to use.
* Defining branch-naming conventions or a default base branch.

For more information about Linear's agent guidance, see [Guiding agents](https://linear.app/docs/agents-in-linear#guiding-agents) in the Linear documentation.

### Choosing a model

When you trigger {% data variables.copilot.copilot_cloud_agent %} from a Linear issue you can choose which model {% data variables.product.prodname_copilot_short %} uses by specifying the model in the issue description. For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/changing-the-ai-model).

To set a default model for every run in your workspace or team, add it to your agent guidance. See [Using Linear agent guidance](#using-linear-agent-guidance).

### Using a custom agent

You can have {% data variables.copilot.copilot_cloud_agent %} use a custom agent from your {% data variables.product.github %} repository when it opens a pull request from Linear by specifying which agent to use in the issue description. For more information, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents).

To always use the same custom agent across your workspace or team, specify it in your agent guidance. See [Using Linear agent guidance](#using-linear-agent-guidance).

### Setting the base branch and working branch

When {% data variables.copilot.copilot_cloud_agent %} opens a pull request from a Linear issue, you can choose:

* The **base branch** the pull request targets.
* The **working branch** name {% data variables.copilot.copilot_cloud_agent %} uses for its commits.

To apply the same base branch or branch-naming convention across every run, add it to your agent guidance. See [Using Linear agent guidance](#using-linear-agent-guidance).

### Steering a session

After you trigger {% data variables.copilot.copilot_cloud_agent %} from a Linear issue, you can continue to direct the agent. To do this, mention `@{% data variables.product.prodname_copilot %}` in a comment on the Linear issue with additional instructions, or input additional instructions in the agent chat panel.

## Further reading

* [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-cloud-agent)
* [AUTOTITLE](/copilot/concepts/agents/cloud-agent/access-management)
