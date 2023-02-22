---
title: Creating a GitHub App
intro: '{% data reusables.shortdesc.creating_github_apps %}'
redirect_from:
  - /early-access/integrations/creating-an-integration
  - /apps/building-integrations/setting-up-and-registering-github-apps/registering-github-apps
  - /apps/building-github-apps/creating-a-github-app
  - /developers/apps/creating-a-github-app
  - /developers/apps/building-github-apps/creating-a-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
---
{% ifversion fpt or ghec %}To learn how to use GitHub App Manifests, which allow people to create preconfigured GitHub Apps, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/creating-a-github-app-from-a-manifest)."{% endif %}

{% ifversion fpt or ghec %}
{% note %}

  **Note:** {% data reusables.apps.maximum-github-apps-allowed %}

{% endnote %}
{% endif %}

{% data reusables.apps.settings-step %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
1. Click **New GitHub App**.
1. In "GitHub App name", type the name of your app.

   Give your app a clear and succinct name. Your app cannot have the same name as an existing GitHub account, unless it is your own user or organization name. A slugged version of your app's name will be shown in the user interface when your integration takes an action.

1. Optionally, under "Description", type a description of your app that users will see.
1. Under "Homepage URL", type the full URL to your app's website.
{% ifversion fpt or ghes or ghec %}
1. In "Callback URL", type the full URL to redirect to after a user authorizes the installation. This URL is used if your app needs to identify and authorize user-to-server requests.

  You can use the **Add callback URL** button to provide additional callback URLs, up to a maximum of 10.

{% else %}
1. Under "User authorization callback URL", type the full URL to redirect to after a user authorizes an installation. This URL is used if your app needs to identify and authorize user-to-server requests.

{% endif %}
1. By default, to improve your app's security, your app will use expiring user authorization tokens. To opt-out of using expiring user tokens, you must deselect "Expire user authorization tokens". To learn more about setting up a refresh token flow and the benefits of expiring user tokens, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/refreshing-user-to-server-access-tokens)."
1. If your app authorizes users using the OAuth flow, you can select **Request user authorization (OAuth) during installation** to allow people to authorize the app when they install it, saving a step. If you select this option, the "Setup URL" becomes unavailable and users will be redirected to your "User authorization callback URL" after installing the app. See "[AUTOTITLE](/apps/maintaining-github-apps/installing-github-apps#authorizing-users-during-installation)" for more information.{% ifversion device-flow-is-opt-in %}
1. If your GitHub App will use the device flow to identify and authorize users, click **Enable Device Flow**. For more information about the device flow, see "[AUTOTITLE](/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps#device-flow)."
  ![Screenshot showing field for enabling device flow](/assets/images/oauth-apps/enable-device-flow.png){% endif %}
1. If additional setup is required after installation, add a "Setup URL" to redirect users to after they install your app.

  {% note %}

  **Note:** When you select **Request user authorization (OAuth) during installation** in the previous step, this field becomes unavailable and people will be redirected to the "User authorization callback URL" after installing the app.

  {% endnote %}

1. Under "Webhook URL", type the URL that events will POST to. Each app receives its own webhook which will notify you every time the app is installed or modified, as well as any other events the app subscribes to.

1. Optionally, under "Webhook Secret", type an optional secret token used to secure your webhooks.

  {% note %}

  **Note:** We highly recommend that you set a secret token. For more information, see "[AUTOTITLE](/webhooks-and-events/webhooks/securing-your-webhooks)."

  {% endnote %}

1. Under "Permissions", choose the permissions your app will request. For each type of permission, select the dropdown menu and click **Read-only**, **Read & write**, or **No access**.
1. In "Subscribe to events", choose the events you want your app to receive.
1. To choose where the app can be installed, select either **Only on this account** or **Any account**. For more information on installation options, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/making-a-github-app-public-or-private)."
1. Click **Create GitHub App**.
