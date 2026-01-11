---
title: Integrating GitHub with Slack
shortTitle: Integrate GitHub with Slack
intro: 'Learn how to integrate GitHub with Slack to improve collaboration and streamline workflows.'
versions:
    fpt: '*'
    ghes: '*'
    ghec: '*'
topics:
    - Integration
category:
  - Administer integrations
---

## About the {% data variables.product.github %} integration for Slack

The {% data variables.product.github %} integration for Slack gives you and your teams full visibility into your {% data variables.product.github %} projects directly in Slack channels. You can generate ideas, triage issues and collaborate with other teams to move projects forward, all without leaving Slack.

With the {% data variables.product.github %} integration for Slack, you can:

* Get **{% data variables.product.github %} notifications** in Slack channels.
* Use **slash commands** to take actions on {% data variables.product.github %}.
* Give your team **context** when sharing links to {% data variables.product.github %} activities and properties.
* Initiate a {% data variables.copilot.copilot_coding_agent %} session from Slack, using the context of a Slack thread.

{% data reusables.integrations.github-slack-permissions %}

## Prerequisites

To use the {% data variables.product.github %} integration for Slack, you need:
* A {% data variables.product.github %} account.
* A Slack workspace where you have permission to install apps.

{% ifversion not ghes %}

## Installing the {% data variables.product.github %} integration for Slack in a single workspace

The {% data variables.product.github %} integration for Slack only needs to be installed once per workspace, and can be installed by anyone with admin permissions in the Slack workspace.

1. Go to the [{% data variables.product.github %} integration for Slack](https://slack.github.com/) page.
1. Click **Add to Slack**.
1. If you're not already signed in to Slack, you'll be prompted to do so.
1. Follow the prompts on screen to allow {% data variables.product.github %} access to your Slack workspace.
1. Once the integration is installed, you can invite the {% data variables.product.github %} app to specific channels by typing `/invite @github` in the desired channel.

## Installing the {% data variables.product.github %} integration for Slack on the Slack Enterprise Grid

If you are an admin or owner of a Slack Enterprise Grid organization, you can install the {% data variables.product.github %} integration for Slack across multiple workspaces in your organization.

1. In your Slack Enterprise Grid settings, under "Integrations", click **Install apps**.
1. Search for the {% data variables.product.github %} app.
1. Click the ellipsis (**...**) to the right of the {% data variables.product.github %} app and select **Add to more workspaces**.
1. Follow the prompts on screen to complete the installation.

{% endif %}

{% ifversion ghes %}

## Installing the {% data variables.product.github %} integration for Slack

The {% data variables.product.github %} app in the Slack Marketplace cannot be used with {% data variables.product.prodname_ghe_server %}. Instead, you need to configure a private Slack app to connect your {% data variables.product.prodname_ghe_server %} instance to your Slack workspace.

1. Navigate to `YOUR-GHES-INSTANCE:8443` and locate the "Chat integration" section.
1. Select the "Enabling {% data variables.product.github %} Chat integration" checkbox.
1. Under "Select chat client", select "Slack".
1. In your browser, navigate to the [Slack API: Applications](https://api.slack.com/apps) page and click **Generate Token** and select the workspace where the app will be used.
1. Copy the generated token.
1. Go back to the "Chat integration" section in your {% data variables.product.prodname_ghe_server %} instance and paste the token into the "App configuration token" field.
1. Click **Generate App**.
1. Once the app is generated, click **Save settings**.
1. Navigate to either `<instancename>/_slack/` or `slack.<instancename>` to install the app on your workspace.
1. If the app needs to be installed across multiple workspaces, navigate to your app by clicking the "Slack app ID" link in the "Chat integration" section in your {% data variables.product.prodname_ghe_server %} instance.

    * Navigate to the "Manage Distribution" section in your app settings.
    * Select the "Remove hard coded information" checkbox, then click **Activate Public Distribution**

{% endif %}

## Further reading

* [AUTOTITLE](/integrations/how-tos/slack/use-github-in-slack) - Learn how to use the {% data variables.product.github %} integration for Slack.
