---
title: Registering a GitHub App
shortTitle: 'Register a {% data variables.product.prodname_github_app %}'
intro: 'You can register a {% data variables.product.prodname_github_app %} under your personal account or under any organization you own.'
redirect_from:
  - /early-access/integrations/creating-an-integration
  - /apps/building-integrations/setting-up-and-registering-github-apps/registering-github-apps
  - /apps/building-github-apps/creating-a-github-app
  - /developers/apps/creating-a-github-app
  - /developers/apps/building-github-apps/creating-a-github-app
  - /apps/creating-github-apps/creating-github-apps/creating-a-github-app
  - /apps/creating-github-apps/setting-up-a-github-app/creating-a-github-app
  - /apps/creating-github-apps/setting-up-a-github-app/registering-a-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
---

## About registering {% data variables.product.prodname_github_apps %}

You can register a {% data variables.product.prodname_github_app %} under your personal account, under an organization that you own, or under an organization that has granted you permission to manage all apps owned by the organization. For more information, see "[AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/adding-github-app-managers-in-your-organization)."

{% data reusables.apps.maximum-github-apps-allowed %}

## Registering a {% data variables.product.prodname_github_app %}

{% data reusables.apps.settings-step %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
1. Click **New GitHub App**.
1. Under "GitHub App name", enter a name for your app. You should choose a clear and short name. Your app's name (converted to lowercase, with spaces replaced by `-`, and with special characters replaced) will be shown in the user interface when your app takes an action. For example, `My APp Näme` would display as `my-app-name`.

   The name must be unique across {% data variables.product.company_short %}. You cannot use same name as an existing GitHub account, unless it is your own user or organization name.

1. Optionally, under "Description", type a description of your app. Users and organizations will see this description when they install your app.
1. Under "Homepage URL", type the full URL to your app's website. If you don’t have a dedicated URL and your app's code is stored in a public repository, you can use that repository URL. Or, you can use the URL of the organization or user that owns the app.
1. Optionally, under "Callback URL", enter the full URL to redirect to after a user authorizes the installation.

   You can enter up to 10 callback URLs. To add additional callback URLs, click **Add callback URL**.

   If your app does not need to act on behalf of a user (does not need to generate a user access token), this field will be ignored. If your app uses device flow instead of web application flow to generate a user access token, this field will be ignored.

   For more information about the callback URL, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/about-the-user-authorization-callback-url)." For more information about generating a user access token to act on behalf of a user, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-with-a-github-app-on-behalf-of-a-user)" and "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app)."
1. Optionally, to prevent user access tokens from expiring, deselect **Expire user authorization tokens**. {% data variables.product.company_short %} strongly recommends that you leave this option selected. For more information about refreshing expired tokens and the benefits of user access tokens that expire, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/refreshing-user-access-tokens)." If your app does not need to generate a user access token, this field will be ignored.
1. Optionally, to prompt users to authorize your app when they install it, select **Request user authorization (OAuth) during installation**. If a user authorizes your app, your app can generate a user access token to make API requests on the user's behalf and attribute app activity to the user. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-with-a-github-app-on-behalf-of-a-user)" and "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app)."
1. Optionally, if you want to use device flow to generate a user access token, select **Enable Device Flow**. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app)."
1. Optionally, under "Setup URL", enter the URL to redirect users to after they install your app. If additional setup is required after installation, you can use this URL to tell users what steps to take after installation. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/about-the-setup-url)."

   If you selected **Request user authorization (OAuth) during installation** in an earlier step, you will not be able to enter a URL here. Users will instead be redirected to the Callback URL as part of the authorization flow, where you can describe additional setup.
1. Optionally, if you want to redirect users to the setup URL after they update an installation, select **Redirect on update**. An update includes adding or removing a repository for an installation. If "Setup URL" is blank, this will be ignored.
1. Optionally, if you do not want your app to receive webhook events, deselect **Active**. For example, if your app will only be used for authentication or does not need to respond to webhooks, deselect this option. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/using-webhooks-with-github-apps)."
1. If you selected **Active** in the previous step, under "Webhook URL", enter the URL that {% data variables.product.company_short %} should send webhook events to. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/using-webhooks-with-github-apps)."
1. Optionally, if you selected **Active** in the previous step, under "Webhook secret", enter a secret token to secure your webhooks. {% data variables.product.company_short %} highly recommends that you set a webhook secret. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/using-webhooks-with-github-apps)."
1. If you entered a webhook URL, under "SSL verification", select whether to enable SSL verification. {% data variables.product.company_short %} highly recommends that you enable SSL verification.
1. Under "Permissions", choose the permissions that your app needs. For each permission, select the dropdown menu and click **Read-only**, **Read & write**, or **No access**. You should select the minimum permissions necessary for your app. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/choosing-permissions-for-a-github-app)."
1. If you selected **Active** in the earlier step to indicate that your app should receive webhook events, under "Subscribe to events", select the webhook events that you want your app to receive. The permissions that you selected in the previous step determine what webhook events are available. For more information about each webhook event, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads)."
1. Under "Where can this GitHub App be installed?", select  **Only on this account** or **Any account**. For more information on installation options, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/making-a-github-app-public-or-private)."
1. Click **Create GitHub App**.

## Next steps

After registering a {% data variables.product.prodname_github_app %}, you will want to write code to make your {% data variables.product.prodname_github_app %} do something. For examples of how to write code, see:

- "[AUTOTITLE](/apps/creating-github-apps/writing-code-for-a-github-app/quickstart)"
- "[AUTOTITLE](/apps/creating-github-apps/guides/building-a-github-app-that-responds-to-webhook-events)"
- "[AUTOTITLE](/apps/creating-github-apps/guides/building-a-login-with-github-button-with-a-github-app)"
- "[AUTOTITLE](/apps/creating-github-apps/guides/building-a-cli-with-a-github-app)"
- "[AUTOTITLE](/apps/creating-github-apps/writing-code-for-a-github-app/making-authenticated-api-requests-with-a-github-app-in-a-github-actions-workflow)"

You should aim to follow best practices. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/best-practices-for-creating-a-github-app)."

Once your {% data variables.product.prodname_github_app %} is fully built, you can install your {% data variables.product.prodname_github_app %} and share your {% data variables.product.prodname_github_app %} with others. For more information, see "[AUTOTITLE](/apps/using-github-apps/installing-your-own-github-app)" and "[AUTOTITLE](/apps/sharing-github-apps/sharing-your-github-app)."

You can always make changes to the settings for your {% data variables.product.prodname_github_app %}. For more information, see "[AUTOTITLE](/apps/maintaining-github-apps/modifying-a-github-app)."
