---
title: Integrating {% data variables.product.github %} with Teams
shortTitle: Integrate GitHub with Teams
intro: Set up the GitHub integration with Teams to improve collaboration and streamline workflows.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: how-tos
---

## About the {% data variables.product.github %} integration for Teams

The {% data variables.product.github %} integration for Microsoft Teams gives you and your teams visibility into your {% data variables.product.github %} projects directly in Teams channels. You can triage issues, collaborate on pull requests, and keep track of changes without leaving Teams.

With the {% data variables.product.github %} integration for Teams, you can:

* Get **{% data variables.product.github %} notifications** in Teams channels.
* Use **commands** to take actions on {% data variables.product.github %}.
* See **previews** when sharing links to {% data variables.product.github %} resources.
{% ifversion fpt or ghec %}
* Initiate a {% data variables.copilot.copilot_coding_agent %} session from Teams, using the context of a Teams thread.
{% endif %}

{% data reusables.integrations.github-teams-permissions %}

## Prerequisites

To use the {% data variables.product.github %} integration for Teams, you need:

* A {% data variables.product.github %} account.
* A Teams workspace where you have permission to install apps.

{% ifversion not ghes %}

## Installing the {% data variables.product.github %} integration for Teams in a single workspace

1. Go to the [{% data variables.product.github %} integration for Teams](https://teams.microsoft.com/l/app/ca9e26b7-dce5-44a0-b2b7-a70a3d65ce25) listing in the Teams app store.
1. Click **Add**.
1. Follow the prompts to sign in to Teams and approve access.
1. In Teams, run `@GitHub Notifications signin` and follow the prompts to connect your {% data variables.product.github %} account.

{% ifversion ghec %}

### Installing the Teams app for {% data variables.product.prodname_ghe_cloud %} with data residency

If you use {% data variables.product.prodname_ghe_cloud %} with data residency on {% data variables.enterprise.data_residency_site %}, install the data-residency app from [AppSource](https://appsource.microsoft.com/en-us/product/office/WA200008122) and sign in with your {% data variables.product.prodname_ghe_cloud %} account when prompted.

{% endif %}

{% endif %}

{% ifversion ghes %}

## Installing the {% data variables.product.github %} integration for Teams on {% data variables.product.prodname_ghe_server %}

1. In the management console for your {% data variables.product.prodname_ghe_server %} instance, open "Chat integrations" and enable {% data variables.product.github %} Chat Integration.
1. Select the Microsoft Teams tab and follow the link to register an app in Microsoft Azure.
1. Record the application (client) ID and tenant ID, then create a client secret.
1. Back in the management console, choose **Deploy to Azure** and follow the prompts to provision the Teams bot.
1. Enter the app ID, tenant ID, and client secret in the Teams configuration, then save the settings.
1. Download the generated manifest and upload it to Teams. For more information, see [Upload your app to Teams](https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/deploy-and-publish/apps-upload).
1. Install the app in Teams and run `@GitHub Notifications signin` to connect your {% data variables.product.github %} account.

>[!NOTE] If your {% data variables.product.prodname_ghe_server %} instance is not reachable from the public internet, provide the proxy URL when configuring the Teams bot in Azure.

{% endif %}

## Further reading

* [AUTOTITLE](/integrations/how-tos/teams/use-github-in-teams) - Learn how to use the {% data variables.product.github %} integration for Teams.
* [AUTOTITLE](/integrations/how-tos/teams/customize-notifications) - Learn how to customize your {% data variables.product.github %} notifications in Teams.
