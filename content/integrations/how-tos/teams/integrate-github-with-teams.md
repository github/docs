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

To integrate {% data variables.product.prodname_ghe_server %} with Microsoft Teams, you first need to configure the chat integration on your instance and register an app in Microsoft Azure.

### Register the app and provision the Teams bot

1. In the {% data variables.enterprise.management_console %} for your {% data variables.product.prodname_ghe_server %} instance, open the **Chat integration** page and select the **Enable {% data variables.product.github %} Chat integration** checkbox.
1. Under "Select chat client", select **Microsoft Teams**, and follow the link to register an app in Microsoft Azure.
1. In Azure, configure the details for your app registration:
    * Enter your application registration **Name**.
    * Set the supported account types to **Multiple Entra ID tenants** and **Allow all tenants**.
1. Click **Register**.
1. Record the application (client) ID and tenant ID displayed.
1. Under **Certificates & secrets**, create a new client secret.
1. Record the client secret value displayed.
1. Return to the {% data variables.enterprise.management_console %} and **Chat integration** page on your {% data variables.product.prodname_ghe_server %} instance.
1. Click **Deploy to Azure**, and follow the prompts to provision the Teams bot in Microsoft Azure.
1. In Azure, select the **Subscription** and **Resource group** for the Azure bot to be deployed.
1. Enter the application (client) ID and tenant ID you recorded earlier, in the Teams bot configuration.
1. Depending on your network configuration for {% data variables.product.prodname_ghe_server %}:
    * If your instance _is reachable_ on the public internet, select the **Append '_msteams' to path** checkbox.
    * If your instance _is not reachable_ on the public internet and requires a proxy:
        * Ensure the **Append '_msteams' to path** checkbox isn't selected.
        * In the **GHES Instance Host Name** field, enter the URL that will forward the traffic to your instance.
1. Click the **Review + create** tab, and then click **Create** to save the settings and begin provisioning the app.
1. Wait for the Teams bot to be provisioned in Azure.

### Configure {% data variables.product.prodname_ghe_server %} and install the app in Teams

1. Return to the {% data variables.enterprise.management_console %}  and **Chat integration** page on your {% data variables.product.prodname_ghe_server %} instance.
1. Enter the **Microsoft client ID**, **Microsoft client secret**, and **Microsoft tenant ID** using the application details you recorded earlier.
1. Optionally, if your {% data variables.product.prodname_ghe_server %} instance _is not reachable_ on the public internet and requires a proxy, enter the URL that will forward the traffic to your instance in the **Public Endpoint URL** field.
1. Click **Save client settings**.
1. Click **Generate manifest** to download the integration manifest for later use.
1. Click **Save settings** to apply the changes to your instance.
1. Log in to your Teams client, and open the Teams admin center.
1. Go to **Teams apps** > **Manage apps**, and click **Upload** to upload the integration manifest you downloaded in a previous step. For more information, see [Upload your app to Teams](https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/deploy-and-publish/apps-upload#upload-your-app).
1. Install your app in Teams, and run `@GHE signin` to connect your {% data variables.product.github %} account.

{% endif %}

## Further reading

* [AUTOTITLE](/integrations/how-tos/teams/use-github-in-teams) - Learn how to use the {% data variables.product.github %} integration for Teams.
* [AUTOTITLE](/integrations/how-tos/teams/customize-notifications) - Learn how to customize your {% data variables.product.github %} notifications in Teams.
