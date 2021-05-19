---
title: Creating a GitHub App
intro: '{% data reusables.shortdesc.creating_github_apps %}'
redirect_from:
  - /early-access/integrations/creating-an-integration/
  - /apps/building-integrations/setting-up-and-registering-github-apps/registering-github-apps/
  - /apps/building-github-apps/creating-a-github-app
  - /developers/apps/creating-a-github-app
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---
{% if currentVersion == "free-pro-team@latest" %}To learn how to use GitHub App Manifests, which allow people to create preconfigured GitHub Apps, see "[Creating GitHub Apps from a manifest](/apps/building-github-apps/creating-github-apps-from-a-manifest/)."{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
{% note %}

  **Hinweis:** {% data reusables.apps.maximum-github-apps-allowed %}

{% endnote %}
{% endif %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
4. Click **New GitHub App**. ![Button to create a new GitHub App](/assets/images/github-apps/github_apps_new.png)
5. In "GitHub App name", type the name of your app. ![Field for the name of your GitHub App](/assets/images/github-apps/github_apps_app_name.png)

  Give your app a clear and succinct name. Your app cannot have the same name as an existing GitHub user, unless it is your own user or organization name. A slugged version of your app's name will be shown in the user interface when your integration takes an action.

6. Optionally, in "Description", type a description of your app that users will see. ![Field for a description of your GitHub App](/assets/images/github-apps/github_apps_description.png)
7. In "Homepage URL", type the full URL to your app's website. ![Field for the homepage URL of your GitHub App](/assets/images/github-apps/github_apps_homepage_url.png)
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
8. In "Callback URL", type the full URL to redirect to after a user authorizes the installation. This URL is used if your app needs to identify and authorize user-to-server requests.

  You can use **Add callback URL** to provide additional callback URLs, up to a maximum of 10.

  ![Button for 'Add callback URL' and field for callback URL](/assets/images/github-apps/github_apps_callback_url_multiple.png)
{% else %}
8. In "User authorization callback URL", type the full URL to redirect to after a user authorizes an installation. This URL is used if your app needs to identify and authorize user-to-server requests. ![Field for the user authorization callback URL of your GitHub App](/assets/images/github-apps/github_apps_user_authorization.png)

{% endif %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
9. By default, to improve your app's security, your app will use expiring user authorization tokens. To opt-out of using expiring user tokens, you must deselect "Expire user authorization tokens". To learn more about setting up a refresh token flow and the benefits of expiring user tokens, see "[Refreshing user-to-server access tokens](/apps/building-github-apps/refreshing-user-to-server-access-tokens/)." ![Option to opt-in to expiring user tokens during GitHub Apps setup](/assets/images/github-apps/expire-user-tokens-selection.png)
{% endif %}
9. If your app authorizes users using the OAuth flow, you can select **Request user authorization (OAuth) during installation** to allow people to authorize the app when they install it, saving a step. If you select this option, the "Setup URL" becomes unavailable and users will be redirected to your "User authorization callback URL" after installing the app. See "[Authorizing users during installation](/apps/installing-github-apps/#authorizing-users-during-installation)" for more information. ![Request user authorization during installation](/assets/images/github-apps/github_apps_request_auth_upon_install.png)
10. If additional setup is required after installation, add a "Setup URL" to redirect users to after they install your app. ![Field for the setup URL of your GitHub App ](/assets/images/github-apps/github_apps_setup_url.png)

  {% note %}

  **Note:** When you select **Request user authorization (OAuth) during installation** in the previous step, this field becomes unavailable and people will be redirected to the "User authorization callback URL" after installing the app.

  {% endnote %}

11. In "Webhook URL", type the URL that events will POST to. Each app receives its own webhook which will notify you every time the app is installed or modified, as well as any other events the app subscribes to. ![Field for the webhook URL of your GitHub App](/assets/images/github-apps/github_apps_webhook_url.png)

12. Optionally, in "Webhook Secret", type an optional secret token used to secure your webhooks. ![Field to add a secret token for your webhook](/assets/images/github-apps/github_apps_webhook_secret.png)

  {% note %}

  **Note:** We highly recommend that you set a secret token. Weitere Informationen findest Du unter „[Securing your webhooks](/webhooks/securing/)" (Deine Webhooks sichern).

  {% endnote %}

13. In "Permissions", choose the permissions your app will request. For each type of permission, use the drop-down menu and click **Read-only**, **Read & write**, or **No access**. ![Various permissions for your GitHub App](/assets/images/github-apps/github_apps_new_permissions_post2dot13.png)
14. In "Subscribe to events", choose the events you want your app to receive.
15. To choose where the app can be installed, select either **Only on this account** or **Any account**. For more information on installation options, see "[Making a GitHub App public or private](/apps/managing-github-apps/making-a-github-app-public-or-private/)." ![Installation options for your GitHub App](/assets/images/github-apps/github_apps_installation_options.png)
16. Click **Create GitHub App**. ![Button to create your GitHub App](/assets/images/github-apps/github_apps_create_github_app.png)
