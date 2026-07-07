---
title: Integrating Copilot cloud agent with Jira
shortTitle: Integrate cloud agent with Jira
allowTitleToDifferFromFilename: true
intro: 'You can use the {% data variables.product.github %} integration in Jira to provide context and open pull requests, all from within your Jira workspace.'
product: '{% data reusables.copilot.plans.permission-paid-plans-cfi %}'
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
> {% data variables.product.prodname_copilot %} uses AI. Check for mistakes. See [AUTOTITLE](/copilot/responsible-use/copilot-cloud-agent).

The {% data variables.product.prodname_copilot %} integration in Jira allows you to invoke {% data variables.copilot.copilot_cloud_agent %} without leaving your Jira workspace. From within Jira you can initiate {% data variables.copilot.copilot_cloud_agent_short %} sessions and open pull requests, using the context of the work item's title, description, labels, comments, and any Atlassian custom fields such as acceptance criteria.

## Prerequisites

* You must have a {% data variables.product.github %} account with access to {% data variables.product.prodname_copilot_short %} through a paid {% data variables.product.prodname_copilot_short %} plan.
* You must have a Jira Cloud account, **Jira must be an AI-enabled app**, and Rovo must be activated for your organization. See [Activate AI for apps](https://support.atlassian.com/organization-administration/docs/activate-atlassian-intelligence-for-products) in the Atlassian documentation.
* Installation and authentication must be completed for both Jira and {% data variables.product.github %}.

## Installation

To install the {% data variables.product.prodname_copilot %} for Jira app and authorize it for your {% data variables.product.github %} organization or enterprise account, you need:

* Administrator permission for your Jira site.
* Owner or {% data variables.product.github %} App manager permissions for your {% data variables.product.github %} organization.

This integration relies on an Atlassian Forge application and a {% data variables.product.github %} application. Both are required for the integration. Once successfully installed, authorized users of the Jira workspace with **write** access to a {% data variables.product.github %} repository will be able to trigger the agent from Jira.

### Installing the {% data variables.product.prodname_copilot %} for Jira app for {% data variables.product.prodname_dotcom_the_website %}

1. Navigate to the [{% data variables.product.prodname_copilot %} for Jira installation page](https://marketplace.atlassian.com/apps/1582455624?ref_product=copilot&ref_type=engagement&ref_style=text) on the Atlassian Marketplace.
1. Click **Get it now**.
1. Select the Atlassian site you want to install the {% data variables.product.github %} application in.
1. Click **Review** to check the installation details, and then click **Get it now**.

   Once {% data variables.product.prodname_copilot %} for Jira is installed in your Jira site, you need to authorize the app to access your {% data variables.product.github %} organization and repositories.

1. Click **Configure** in the confirmation message in Jira after installation.
   * If you are not automatically redirected, go to the [{% data variables.product.prodname_copilot %} for Jira installation page](https://github.com/apps/github-copilot-for-jira?ref_product=copilot&ref_type=engagement&ref_style=text) on the {% data variables.product.prodname_marketplace %}. Click **Install**.
1. If you are not already logged in to {% data variables.product.prodname_dotcom %}, click the highlighted **Log in to {% data variables.product.prodname_dotcom %}** and follow the prompts to log in to your {% data variables.product.github %} account and authorize the application.
   * If your organization or enterprise uses single sign-on (SSO), you may need to start an active SAML session for your organization and perform an additional authorization step.
1. Click **Install app** to give the app permission to access information on your GitHub account.
1. Choose the organization and repositories the app has access to. Your {% data variables.product.github %} organizations are enabled by default for your Jira workspace. Optionally, in the **Install {% data variables.product.prodname_copilot %} for Jira** page, _deselect_ the organization and repositories you _don't want the application to have access to_.
1. Click **Install**.
1. When installation is complete, you will see a list of connected organizations on the {% data variables.product.prodname_copilot %} for Jira app configuration page in Jira.

### Installing the {% data variables.product.prodname_copilot %} for Jira app for {% data variables.enterprise.data_residency_site %}

1. Navigate to the [{% data variables.product.prodname_copilot %} for Jira (GHEC with Data Residency) installation page](https://marketplace.atlassian.com/apps/3637796809?ref_product=copilot&ref_type=engagement&ref_style=text) on the Atlassian Marketplace.
1. To the right of the app name, click {% octicon "kebab-horizontal" aria-label="Configure" %}, and enter your `SUBDOMAIN.ghe.com` in the text box. Replace SUBDOMAIN with your enterprise's subdomain of {% data variables.enterprise.data_residency_site %}.
1. Click **Save configuration**.
1. Click **Get it now**.
1. Select the Atlassian site you want to install the {% data variables.product.github %} application in.
1. Click **Review** to check the installation details, and then click **Get it now**.

   Once {% data variables.product.prodname_copilot %} for Jira is installed in your Jira site, you need to authorize the app to access your {% data variables.product.github %} organization and repositories.

1. Click **Configure** in the confirmation message in Jira after installation.
   * If you are not automatically redirected, find the {% data variables.product.prodname_copilot %} for Jira app in the list of apps available to your enterprise at `SUBDOMAIN.ghe.com/apps/external-app/github-copilot-for-jira`. Click **Install**.
1. If you are not already logged in to {% data variables.product.prodname_dotcom %}, click the highlighted **Log in to {% data variables.product.prodname_dotcom %}** and follow the prompts to log in to your {% data variables.product.github %} account and authorize the application.
   * If your organization or enterprise uses SSO, you may need to start an active SAML session for your organization and perform an additional authorization step.
1. Click **Install app** to give the app permission to access information on your GitHub account.
1. Choose the organization and repositories the app has access to. Your {% data variables.product.github %} organizations are enabled by default for your Jira workspace. Optionally, in the **Install {% data variables.product.prodname_copilot %} for Jira** page, _deselect_ the organization and repositories you _don't want the application to have access to_.
1. Click **Install**.
1. When installation is complete, you will see a list of connected organizations on the {% data variables.product.prodname_copilot %} for Jira app configuration page in Jira.

## Using the {% data variables.product.prodname_copilot %} app in Jira

The {% data variables.product.prodname_copilot_short %} app must be enabled for a {% data variables.product.github %} organization you are a member of, before you can start using it.

The first time you use {% data variables.copilot.copilot_cloud_agent %} in Jira, you will need to connect it to your {% data variables.product.github %} account.

Only users with **write** access to a repository can trigger {% data variables.copilot.copilot_cloud_agent %} to work in that repository.

You can trigger {% data variables.copilot.copilot_cloud_agent %} in several ways:

* **Assign** {% data variables.product.prodname_copilot %} to a work item using the Assignee field.
* **Mention** `@{% data variables.product.prodname_copilot %}` in a comment on a work item.
* **Use a Jira automation.** In your Jira automation rules, select the **Use {% data variables.product.prodname_copilot %}** action and configure your flow to use a custom trigger based on Jira events, such as when a work item is created or transitioned, or a label is applied. For more information, see [Work with AI agents in Jira](https://support.atlassian.com/jira-software-cloud/docs/work-with-ai-agents-in-jira/) in the Atlassian documentation.

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
1. Once {% data variables.copilot.copilot_cloud_agent %} has started working on the pull request, a comment will appear in the chat panel in Jira. The user who initiated the agent session can view progress there.
1. You can follow up with further instructions for {% data variables.product.prodname_copilot_short %}:
    * Use the **Continue in Chat** button under the **Agents** heading to chat directly with {% data variables.product.prodname_copilot_short %} to have updates made to the _current_ pull request.
    * Mention `@{% data variables.product.prodname_copilot %}` in a comment on the work item to have updates made in a _new_ pull request.

> [!TIP]
> If you have not received confirmation of triggering {% data variables.copilot.copilot_cloud_agent %} after 1 minute, refresh the Jira work item page.

### Viewing agent activity in Jira

While {% data variables.copilot.copilot_cloud_agent_short %} works its activity streams live into the chat panel in Jira, so you can follow what the agent is doing without leaving your work item. The activity stream includes a link to the associated agent session on {% data variables.product.github %}.

### Directing {% data variables.product.prodname_copilot_short %} from Jira post-session

When {% data variables.copilot.copilot_cloud_agent %} has completed a session, for example when a pull request is ready for review, you can direct {% data variables.product.prodname_copilot_short %} to continue the work:

* In the chat panel in Jira, select the link to the associated agent session on {% data variables.product.github %}. This opens the agents panel on {% data variables.product.github %}, where you can review the session and send follow-up instructions to update the **existing** pull request.
* Add a follow-up `@{% data variables.product.prodname_copilot %}` mention or comment on the Jira work item. This starts a new session and opens a **new** pull request rather than updating the existing one.

## Customizing {% data variables.copilot.copilot_cloud_agent %} in Jira

You can customize how {% data variables.copilot.copilot_cloud_agent %} works in your Jira workspace by specifying models, agents, and custom instructions.

### Specifying a model

Specify a model when you want a task to run on a specific model rather than the default. For example, you may choose a lighter model for routine, well-scoped changes. To change the model used by {% data variables.copilot.copilot_cloud_agent %} for a particular task, include the model name in your instructions to {% data variables.product.prodname_copilot_short %}, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/changing-the-ai-model).

### Specifying a custom agent

Specify a custom agent to tailor {% data variables.copilot.copilot_cloud_agent_short %}'s behavior to a particular workflow or repository. You can specify a custom agent from your {% data variables.product.github %} repository directly in the Jira ticket. For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/create-custom-agents).

### Using custom instructions

Use custom instructions to set defaults that apply to every session, such as the target repository, so {% data variables.product.prodname_copilot_short %} does not have to pause and ask you for input mid-session. You can define custom instructions at the Jira workspace level that apply every time {% data variables.copilot.copilot_cloud_agent %} is triggered.

## Usage costs

{% data variables.copilot.copilot_cloud_agent %} uses {% data variables.product.prodname_actions %} minutes and {% data variables.product.prodname_ai_credits_short %}.

For more information, see [AUTOTITLE](/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises).

## Adding or removing an organization to the {% data variables.product.prodname_copilot %} for Jira app

A Jira administrator and {% data variables.product.github %} organization owner can enable or disable organizations for the integration.

> [!NOTE]
> If a new SSO-protected organization is added to the app after the initial installation, users will need to start an active SAML session for the organization in {% data variables.product.github %}, in order to trigger {% data variables.copilot.copilot_cloud_agent %} to work in the new organization's repositories from Jira. For more information, see [AUTOTITLE](/enterprise-cloud@latest/authentication/authenticating-with-single-sign-on/about-authentication-with-single-sign-on#about-oauth-apps-github-apps-and-sso).

To change access for the {% data variables.product.prodname_copilot %} for Jira app for an organization:

1. In Jira, go to the settings page for your workspace.
1. Go to the applications setting page for the {% data variables.product.prodname_copilot %} app.
1. Optionally, click **Connect More {% data variables.product.github %} Organizations** to add new organizations to the list.
1. Enable or disable the {% data variables.product.prodname_copilot_short %} app for one or more of the listed organizations.

## Troubleshooting

If you run into problems, try the following solutions.

### You can't see the {% data variables.copilot.copilot_cloud_agent %} and it is not possible to assign it to a Jira work item

In Jira, check your Atlassian Administration settings for your organization are set as follows.

1. Jira is an AI-enabled app, see [Activate AI for apps](https://support.atlassian.com/organization-administration/docs/activate-atlassian-intelligence-for-products) in the Atlassian documentation.

### You can see the {% data variables.copilot.copilot_cloud_agent %} but it is not possible to assign it to a Jira work item

Check that you have connected your personal account on {% data variables.product.github %} to the {% data variables.product.prodname_copilot %} for Jira app.

1. In Jira, go to the settings page for your personal account.
1. Under your general settings, select the **{% data variables.product.prodname_copilot %} for Jira** app.
1. If you are not already signed in with {% data variables.product.github %}, follow the prompts to sign in and authorize the application.

### When chatting with {% data variables.product.prodname_copilot %}, you are prompted to sign in

To sign in to {% data variables.product.prodname_copilot %} for Jira app, follow the steps above in [You can see the {% data variables.copilot.copilot_cloud_agent %} but it is not possible to assign it to a Jira work item](#you-can-see-the-copilot-cloud-agent-but-it-is-not-possible-to-assign-it-to-a-jira-work-item).

### Other users in your workspace can assign {% data variables.copilot.copilot_cloud_agent %} to a Jira work item, but you cannot

If {% data variables.copilot.copilot_cloud_agent %} cannot see or work with your organization's resources in Jira and your organization uses SSO in {% data variables.product.github %}, you may need to reauthorize the {% data variables.product.prodname_copilot %} for Jira app for your {% data variables.product.github %} account. For more information, see [AUTOTITLE](/enterprise-cloud@latest/authentication/authenticating-with-single-sign-on/about-authentication-with-single-sign-on#about-oauth-apps-github-apps-and-sso).

To resolve this issue, follow these steps to start a new active SSO session for your organization:

1. Go to your [organization settings](https://github.com/settings/organizations) in {% data variables.product.github %}.
1. Under "Single sign-on", find the organization you need to authenticate to and click **Sign out**, and then **Sign in**.
   * If your enterprise manages SSO for your organization, signing in to one organization in the enterprise works as an SSO session for all organizations in the enterprise.
1. Return to Jira, and refresh the page you are working in.
1. Try working with {% data variables.copilot.copilot_cloud_agent %} in Jira again.

### {% data variables.product.prodname_copilot %} is not responding

* Check {% data variables.product.github %}'s [Status page](https://githubstatus.com) for any active incidents.
* Check the [Atlassian status page](https://status.atlassian.com) for any active incidents.
* Verify that {% data variables.copilot.copilot_cloud_agent %} has access to the repository by testing if you can assign {% data variables.product.prodname_copilot_short %} to an issue on {% data variables.product.github %}.
* Verify that the {% data variables.product.prodname_copilot %} for Jira application has access to the repository. See [AUTOTITLE](/apps/using-github-apps/reviewing-and-modifying-installed-github-apps).

## Further reading

* [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-cloud-agent)
* [AUTOTITLE](/copilot/concepts/agents/cloud-agent/access-management)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/extend-cloud-agent-with-mcp#example-atlassian)
* [Collaborate on work items with AI agents](https://support.atlassian.com/jira-software-cloud/docs/collaborate-on-work-items-with-ai-agents/) in the Atlassian documentation
