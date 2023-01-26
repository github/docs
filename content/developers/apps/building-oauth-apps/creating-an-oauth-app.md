---
title: Creating an OAuth App
intro: '{% data reusables.shortdesc.creating_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/registering-oauth-apps
  - /apps/building-oauth-apps/creating-an-oauth-app
  - /developers/apps/creating-an-oauth-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
---
{% ifversion fpt or ghec %}
{% note %}

  **Note:** {% data reusables.apps.maximum-oauth-apps-allowed %}

{% endnote %}
{% endif %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
4. Click **New OAuth App**.
![Button to create a new OAuth app](/assets/images/oauth-apps/oauth_apps_new_app.png)

  {% note %}

  **Note:** If you haven't created an app before, this button will say, **Register a new application**.

  {% endnote %}
6. In "Application name", type the name of your app.
![Field for the name of your app](/assets/images/oauth-apps/oauth_apps_application_name.png)

  {% warning %}

  **Warning:**  Only use information in your OAuth app that you consider public. Avoid using sensitive data, such as internal URLs, when creating an OAuth App.

  {% endwarning %}

7. In "Homepage URL", type the full URL to your app's website.
![Field for the homepage URL of your app](/assets/images/oauth-apps/oauth_apps_homepage_url.png)
8. Optionally, in "Application description", type a description of your app that users will see.
![Field for a description of your app](/assets/images/oauth-apps/oauth_apps_application_description.png)
9. In "Authorization callback URL", type the callback URL of your app.
![Field for the authorization callback URL of your app](/assets/images/oauth-apps/oauth_apps_authorization_callback_url.png)
{% ifversion fpt or ghes or ghec %}
   {% note %}

   **Note:** OAuth Apps cannot have multiple callback URLs, unlike {% data variables.product.prodname_github_apps %}.

   {% endnote %}
{% endif %}{% ifversion device-flow-is-opt-in %}
1. If your OAuth App will use the device flow to identify and authorize users, click **Enable Device Flow**. For more information about the device flow, see "[Authorizing OAuth Apps](/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow)."
  ![Screenshot showing field for enabling device flow](/assets/images/oauth-apps/enable-device-flow.png){% endif %}
2.  Click **Register application**.
![Button to register an application](/assets/images/oauth-apps/oauth_apps_register_application.png)
