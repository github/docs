---
title: Integrating Copilot cloud agent with Jira
shortTitle: Integrate cloud agent with Jira
allowTitleToDifferFromFilename: true
intro: 'You can use the {% data variables.product.github %} integration in Jira to provide context and open pull requests, all from within your Jira workspace.'
versions:
  feature: copilot
redirect_from:
  - /copilot/how-tos/use-copilot-agents/coding-agent/integrate-coding-agent-with-jira
  - /early-access/copilot/integrate-coding-agent-with-jira
contentType: how-tos
category:
  - Integrate Copilot with your tools
---

> [!NOTE]
> * This feature is currently in {% data variables.release-phases.public_preview %} and subject to change.
> * {% data variables.product.prodname_copilot %} uses AI. Check for mistakes. See [AUTOTITLE](/copilot/responsible-use/copilot-cloud-agent).
> * You can provide feedback about the {% data variables.product.prodname_copilot %} for Jira integration in the [{% data variables.product.github %} survey](https://survey.alchemer.com/s3/8816096/GC4Jira).

The {% data variables.product.prodname_copilot %} integration in Jira allows you to invoke {% data variables.copilot.copilot_cloud_agent %} without leaving your Jira workspace. From within a Jira work item you can initiate {% data variables.copilot.copilot_cloud_agent_short %} sessions and open pull requests, using the context of the work item's title, description, labels, comments, and any Atlassian custom fields such as acceptance criteria.

## Prerequisites

* You must have a {% data variables.product.github %} account with access to {% data variables.product.prodname_copilot_short %} through {% data variables.copilot.copilot_pro_short %}, {% data variables.copilot.copilot_pro_plus_short %}, {% data variables.copilot.copilot_business_short %}, or {% data variables.copilot.copilot_enterprise_short %}.
* You must have a Jira Cloud account with the following AI features enabled for your organization:
    * **Jira must be an AI-enabled app** and Rovo must be activated. See [Activate AI for apps](https://support.atlassian.com/organization-administration/docs/activate-atlassian-intelligence-for-products) in the Atlassian documentation.
    * **Beta AI features** must be turned on. See [Control access to beta AI features](https://support.atlassian.com/organization-administration/docs/control-access-to-beta-ai-features/) in the Atlassian documentation.<!-- markdownlint-disable-line GHD046 -->
* Installation and authentication must be completed for both Jira and {% data variables.product.github %}.

> [!NOTE]
> If your Jira site is on release tracks, you should contact Atlassian Support and ask for agents to be enabled in Jira before proceeding with the installation. For more information, see [What are release tracks?](https://support.atlassian.com/organization-administration/docs/what-are-release-tracks/) in the Atlassian documentation.

## Installation

To install the {% data variables.product.prodname_copilot %} for Jira app and authorize it for your {% data variables.product.github %} organization or enterprise account, you need:

* Administrator permission for your Jira site.
* Owner or {% data variables.product.github %} App manager permissions for your {% data variables.product.github %} organization.

This integration relies on an Atlassian Forge application and a {% data variables.product.github %} application. Both are required for the integration. Once successfully installed, authorized users of the Jira workspace with **write** access to a {% data variables.product.github %} repository will be able to trigger the agent from Jira.

### Installing the {% data variables.product.prodname_copilot %} for Jira app for {% data variables.product.prodname_dotcom_the_website %}

1. Navigate to the [{% data variables.product.prodname_copilot %} for Jira installation page](https://marketplace.atlassian.com/apps/1582455624?ref_product=copilot&ref_type=engagement&ref_style=text) on the Atlassian Marketplace.
1. Click **Get app**.
1. Select the Atlassian instance you want to install the {% data variables.product.github %} application in.
1. Click **Install**.
1. If you are not automatically redirected, go to the [{% data variables.product.prodname_copilot %} for Jira installation page](https://github.com/apps/github-copilot-for-jira?ref_product=copilot&ref_type=engagement&ref_style=text) on the {% data variables.product.prodname_marketplace %} and click **Install**.
1. In the **Install {% data variables.product.prodname_copilot %} for Jira** page, select the organization and repositories you would like to give the application access to.
    * You can add additional organizations after the app is installed, see [Adding an organization to the {% data variables.product.prodname_copilot %} for Jira app](#adding-an-organization).
1. Click **Install**.

### Installing the {% data variables.product.prodname_copilot %} for Jira app for {% data variables.enterprise.data_residency_site %}

1. Navigate to the [{% data variables.product.prodname_copilot %} for Jira (GHEC with Data Residency) installation page](https://marketplace.atlassian.com/apps/3637796809?ref_product=copilot&ref_type=engagement&ref_style=text) on the Atlassian Marketplace.
1. To the right of the app name, click {% octicon "kebab-horizontal" aria-label="Configure" %}, and enter your `SUBDOMAIN.ghe.com` in the text box. Replace SUBDOMAIN with your enterprise's subdomain of {% data variables.enterprise.data_residency_site %}.
1. Click **Save configuration**.
1. Click **Get app**.
1. Select the Atlassian instance you want to install the {% data variables.product.github %} application in.
1. Click **Install**.
1. If you are not automatically redirected, find the {% data variables.product.prodname_copilot %} for Jira app in the list of apps available to your enterprise at `SUBDOMAIN.ghe.com/apps/external-app/github-copilot-for-jira`.
1. Click **Install**.
1. In the **Install {% data variables.product.prodname_copilot %} for Jira** page, select the organization and repositories you would like to give the application access to.
    * You can add additional organizations after the app is installed, see [Adding an organization to the {% data variables.product.prodname_copilot %} for Jira app](#adding-an-organization).
1. Click **Install**.

## Adding an organization to the {% data variables.product.prodname_copilot %} for Jira app

Once the {% data variables.product.prodname_copilot %} for Jira app has been installed, a Jira administrator and {% data variables.product.github %} organization owner can enable additional organizations to use the app. This allows any member of the organization to connect their {% data variables.product.github %} account to the app and start using it in Jira.

To enable the {% data variables.product.prodname_copilot %} for Jira app for an organization:

1. In Jira, go to the settings page for your workspace.
1. Go to the applications setting page for the {% data variables.product.prodname_copilot %} app.
1. Optionally, click **Connect More {% data variables.product.github %} Organizations** to add new organizations to the list.
1. Enable the {% data variables.product.prodname_copilot_short %} app for one or more of the listed organizations.

## Using the {% data variables.product.prodname_copilot %} app in Jira

The {% data variables.product.prodname_copilot_short %} app must be enabled for a {% data variables.product.github %} organization you are a member of, before you can start using it.

The first time you use {% data variables.copilot.copilot_cloud_agent %} in Jira, you will need to connect it to your {% data variables.product.github %} account.

Only users with **write** access to a repository can trigger {% data variables.copilot.copilot_cloud_agent %} to work in that repository.

You can trigger {% data variables.copilot.copilot_cloud_agent %} in three ways:

* **Assign** {% data variables.product.prodname_copilot %} to a work item using the Assignee field.
* **Mention** `@{% data variables.product.prodname_copilot %}` in a comment on a work item.
* **Add {% data variables.product.prodname_copilot_short %} to a workflow transition** so it is triggered automatically when a work item moves to a specific status. See [Collaborate on work items with AI agents](https://support.atlassian.com/jira-software-cloud/docs/collaborate-on-work-items-with-ai-agents/#Add-an-agent-to-workflow-transitions) for setup instructions.

> [!NOTE]
> When you assign {% data variables.product.prodname_copilot_short %} to a Jira work item, the context the agent captures from Jira will be added to the pull request and **visible to everyone** if the repository is public.

### Example: Triggering {% data variables.copilot.copilot_cloud_agent %} from a Jira work item

1. In Jira, open or create a work item that contains clear requirements you want to delegate to {% data variables.copilot.copilot_cloud_agent %}.
1. To specify a repository you want {% data variables.product.prodname_copilot_short %} to work in, mention it in the work item description or in a comment.
1. Assign `{% data variables.product.prodname_copilot %}` to the work item, or mention `@{% data variables.product.prodname_copilot %}` in a comment. For example:

    ```text
   @{% data variables.product.prodname_copilot %} create a new API endpoint for user authentication in octo-org/octorepo
    ```

1. If you have not previously connected the {% data variables.product.github %} application in Jira to your {% data variables.product.github %} account, follow the prompts to authorize the application for both {% data variables.product.github %} and Atlassian.
1. Once {% data variables.copilot.copilot_cloud_agent %} has started working on the pull request, a comment will appear in the Jira work item. The user who initiated the agent session can view progress updates for the agent.
1. You can follow up with further instructions for {% data variables.product.prodname_copilot_short %} in a work item:
    * Mention `@{% data variables.product.prodname_copilot %}` in a comment.
    * Use the **Continue in Chat** button under the **Agents** heading to chat directly with {% data variables.product.prodname_copilot_short %}.

> [!TIP]
> If you have not received confirmation of triggering {% data variables.copilot.copilot_cloud_agent %} after 1 minute, refresh the Jira work item page.

## Customizing {% data variables.copilot.copilot_cloud_agent %} in Jira

You can customize how {% data variables.copilot.copilot_cloud_agent %} works in your Jira workspace by specifying models, agents, custom instructions, and branching rules.

### Specifying a model

To change the model used by {% data variables.copilot.copilot_cloud_agent %} for a specific task, include the model name in your instructions to {% data variables.product.prodname_copilot_short %}. For example, you can say `@{% data variables.product.prodname_copilot %} use Claude Sonnet 4.5`. If you do not specify a model, {% data variables.copilot.copilot_cloud_agent %} will use the default model for coding tasks, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/changing-the-ai-model).

### Specifying a custom branch

{% data variables.copilot.copilot_cloud_agent_short_cap_c %} respects branch naming rules specified in individual Atlassian tickets. If a ticket includes specific branching conventions, {% data variables.product.prodname_copilot_short %} will read and follow them when creating pull requests, keeping your repository consistent with your existing workflow.

### Specifying a custom agent

You can specify a custom agent from your {% data variables.product.github %} repository directly in the Jira ticket. This allows teams to tailor {% data variables.copilot.copilot_cloud_agent_short %}'s behavior to their specific needs. For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/create-custom-agents).

### Using custom instructions

You can define custom instructions at the Jira workspace level that apply every time {% data variables.copilot.copilot_cloud_agent %} is triggered. Use these instructions to specify defaults such as the target repository, default branch naming rules, preferred models, or particular agents to use. This reduces repetitive configuration and increases control over the agent's behavior.

## Usage costs

{% data variables.copilot.copilot_cloud_agent %} uses {% data variables.product.prodname_actions %} minutes and {% data variables.product.prodname_copilot_short %} premium requests.

Within your monthly usage allowance for {% data variables.product.prodname_actions %} and premium requests, you can ask {% data variables.copilot.copilot_cloud_agent %} to work on coding tasks without incurring any additional costs.

For more information, see [AUTOTITLE](/billing/concepts/product-billing/github-copilot-premium-requests#usage-by-copilot-cloud-agent).

## Troubleshooting

If you run into problems, try the following solutions.

### You can't see the {% data variables.copilot.copilot_cloud_agent %} and it is not possible to assign it to a Jira work item

In Jira, check your Atlassian Administration settings for your organization are set as follows.

1. Jira is an AI-enabled app, see [Activate AI for apps](https://support.atlassian.com/organization-administration/docs/activate-atlassian-intelligence-for-products) in the Atlassian documentation.
1. Beta AI features are enabled, see [Control access to beta AI features](https://support.atlassian.com/organization-administration/docs/control-access-to-beta-ai-features/) in the Atlassian documentation.<!-- markdownlint-disable-line GHD046 -->

### You can see the {% data variables.copilot.copilot_cloud_agent %} but it is not possible to assign it to a Jira work item

Check that you have connected your personal account on {% data variables.product.github %} to the {% data variables.product.prodname_copilot %} for Jira app.

1. In Jira, go to the settings page for your personal account.
1. Under your general settings, select the **{% data variables.product.prodname_copilot %} for Jira** app.
1. If you are not already signed in with {% data variables.product.github %}, follow the prompts to sign in and authorize the application.

### When chatting with {% data variables.product.prodname_copilot %}, you are prompted to sign in

To sign in to {% data variables.product.prodname_copilot %} for Jira app, follow the steps above in [You can see the {% data variables.copilot.copilot_cloud_agent %} but it is not possible to assign it to a Jira work item](#you-can-see-the-copilot-cloud-agent-but-it-is-not-possible-to-assign-it-to-a-jira-work-item)

### {% data variables.product.prodname_copilot %} is not responding

* Check {% data variables.product.github %}'s [Status page](https://githubstatus.com) for any active incidents.
* Verify that {% data variables.copilot.copilot_cloud_agent %} has access to the repository by testing if you can assign {% data variables.product.prodname_copilot_short %} to an issue on {% data variables.product.github %}. See [AUTOTITLE](/copilot/concepts/agents/cloud-agent/access-management).
* Verify that the {% data variables.product.prodname_copilot %} for Jira application has access to the repository. See [AUTOTITLE](/apps/using-github-apps/reviewing-and-modifying-installed-github-apps#modifying-repository-access).

## Further reading

* [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-cloud-agent)
* [AUTOTITLE](/copilot/concepts/agents/cloud-agent/access-management)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/extend-cloud-agent-with-mcp#example-atlassian)
* [Collaborate on work items with AI agents](https://support.atlassian.com/jira-software-cloud/docs/collaborate-on-work-items-with-ai-agents/) in the Atlassian documentation
