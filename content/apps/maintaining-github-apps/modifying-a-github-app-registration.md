---
title: Modifying a GitHub App registration
shortTitle: Modify app settings
intro: '{% data reusables.shortdesc.modifying_github_apps %}'
redirect_from:
  - /apps/building-integrations/managing-github-apps/modifying-a-github-app
  - /apps/managing-github-apps/modifying-a-github-app
  - /developers/apps/modifying-a-github-app
  - /developers/apps/managing-github-apps/modifying-a-github-app
  - /apps/building-integrations/managing-github-apps/editing-a-github-app-s-permissions
  - /apps/managing-github-apps/editing-a-github-app-s-permissions
  - /developers/apps/editing-a-github-apps-permissions
  - /developers/apps/managing-github-apps/editing-a-github-apps-permissions
  - /apps/maintaining-github-apps/editing-a-github-apps-permissions
  - /apps/maintaining-github-apps/modifying-a-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
---

## About {% data variables.product.prodname_github_app %} modifications

You can modify your {% data variables.product.prodname_github_app %} registration to change any of the settings that were selected when the app was initially registered. For more information about the settings you can select while registering a {% data variables.product.prodname_github_app %}, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/creating-a-github-app)."

For example, you can change the name and description of your app, the permissions granted to your app, the webhooks your app subscribes to, or the visibility of your app.

You can also choose to test new optional features for your {% data variables.product.prodname_github_app %}. For more information, see "[AUTOTITLE](/apps/maintaining-github-apps/activating-optional-features-for-github-apps)."

<!-- Anchor to maintain links to this heading -->
<a name="navigating-to-your-github-app-settings"></a>

## Navigating to your {% data variables.product.prodname_github_app %} settings

To modify a {% data variables.product.prodname_github_app %}, first navigate to the app settings page.

{% data reusables.apps.settings-step %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
{% data reusables.user-settings.modify_github_app %}

## Changing the basic information of a {% data variables.product.prodname_github_app %}

You can change the basic information of your {% data variables.product.prodname_github_app %}, like the name of the app, the description of the app, and the homepage URL of the app.

{% data reusables.apps.navigate-to-app-settings-this-article %}
1. Under "Basic information," modify the {% data variables.product.prodname_github_app %} information that you'd like to change.
1. Click **Save changes**.

## Requesting user authorization (OAuth) during installation

You can prompt users to authorize your {% data variables.product.prodname_github_app %} when they install it and generate a user access token. When you request user authorization (OAuth) during installation, you must also provide a callback URL where the user will be redirected after they authorize the installation. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app)."

{% data reusables.apps.navigate-to-app-settings-this-article %}
1. Under "Identifying and authorizing users," select or deselect **Request user authorization (OAuth) during installation**.
1. Under "Callback URL," enter the full URL to redirect to after a user authorizes the installation.

## Enabling or disabling the device flow

You can use the device flow to authorize users for a headless app like a CLI tool or Git credential manager. For more information about using the device flow with {% data variables.product.prodname_github_apps %}, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app#using-the-device-flow-to-generate-a-user-access-token)."

{% data reusables.apps.navigate-to-app-settings-this-article %}
1. Under "Identifying and authorizing users," select or deselect **Enable Device Flow**.

## Adding or updating a setup URL

You can redirect people to a specific URL after they install your app. For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/creating-a-github-app)."

If you select **Request user authorization (OAuth) during installation**, you will not be able to enter a setup URL. Users will instead be redirected to the Callback URL as part of the authorization flow, where you can describe additional setup. For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/about-the-user-authorization-callback-url)."

{% data reusables.apps.navigate-to-app-settings-this-article %}
1. Under "Post installation," in the "Setup URL" field, enter the URL where you'd like to redirect users after they install your app.
1. Optionally, if you want to redirect users to the setup URL after they update an installation, select **Redirect on update**. An update includes adding or removing a repository for an installation. If "Setup URL" is blank, this will be ignored.

## Changing the permissions of a {% data variables.product.prodname_github_app %}

You can change the access permissions that are granted to your {% data variables.product.prodname_github_app %} using the following steps.

When you change the **repository** or **organization** permissions of an app, each account where the app is installed will need to approve the new permissions. When you change the **account** permissions of an app, each user that has authorized the app will need to approve the permission changes. In both cases, {% data variables.product.prodname_dotcom %} will send an email to each organization owner or user, notifying them of the request to update the app's permissions. Updated permissions won't take effect on an installation or user authorization until the new permissions are approved. You can use the [installation webhook](/webhooks-and-events/webhooks/webhook-events-and-payloads?actionType=new_permissions_accepted#installation) to find out when people accept new permissions for your app.

Changing the permissions of an app may also change the webhooks that your app can subscribe to and the actions that your app can take with the API. For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/choosing-permissions-for-a-github-app)."

{% data reusables.apps.navigate-to-app-settings-this-article %}
1. In the {% data variables.product.prodname_github_apps %} settings sidebar, click **Permissions & events**.
1. Under the sections "Repository permissions," "Organization permissions," and "Account permissions," modify the permissions you'd like to change. For each type of permission, select either "Read-only," "Read and write," or "No access" from the dropdown. For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/choosing-permissions-for-a-github-app)."
1. Optionally, under "Add a note to users," add a note telling your users why you are changing the permissions that your {% data variables.product.prodname_github_app %} requests.
1. Click **Save changes**.

## Activating or deactivating the {% data variables.product.prodname_github_app %} webhook

You can configure your {% data variables.product.prodname_github_app %} to receive webhooks for specific events on {% data variables.product.prodname_dotcom %} and automatically take action on them. For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/using-webhooks-with-github-apps)."

{% data reusables.apps.navigate-to-app-settings-this-article %}
1. Under "Webhook," to enable or disable the webhook, select or deselect **Active**.
1. If you selected **Active** in the previous step, under "Webhook URL," enter the URL that {% data variables.product.prodname_dotcom %} should send webhook events to.
1. Optionally, if you selected **Active** in the previous step, under "Webhook secret," enter a secret token to secure your webhooks. {% data variables.product.prodname_dotcom %} highly recommends that you set a webhook secret.

## Changing the webhook event subscriptions of a {% data variables.product.prodname_github_app %}

You can change the webhook events that a {% data variables.product.prodname_github_app %} subscribes to using the following steps.

{% data reusables.apps.webhooks-and-apps %} For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/using-webhooks-with-github-apps)."

{% data reusables.apps.navigate-to-app-settings-this-article %}
1. Activate the {% data variables.product.prodname_github_app %} webhook. For more information, see "[Activating or deactivating the {% data variables.product.prodname_github_app %} webhook](/apps/maintaining-github-apps/modifying-a-github-app#activating-or-deactivating-the-github-app-webhook)" in this article.
1. In the {% data variables.product.prodname_github_apps %} settings sidebar, click **Permissions & events**.
1. Under the sections "Repository permissions," "Organization permissions," and "Account permissions," select the permissions that are required for the events your app will subscribe to. For more information, see "[Changing the permissions of a {% data variables.product.prodname_github_app %}](#changing-the-permissions-of-a-github-app)."
1. Under "Subscribe to Events," select the webhook events you would like your {% data variables.product.prodname_github_app %} to receive.
1. Click **Save changes**.

## Changing the visibility of a {% data variables.product.prodname_github_app %}

You can change the visibility settings of your {% data variables.product.prodname_github_app %} to control who can install it. Public apps cannot be made private if they're installed on other accounts. For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/making-a-github-app-public-or-private)."

{% data reusables.apps.navigate-to-app-settings-this-article %}
{% data reusables.user-settings.github_apps_advanced %}
1. Under "Danger zone," depending on the current visibility of your {% data variables.product.prodname_github_app %}, click either **Make public** or **Make private**.
