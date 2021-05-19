---
title: Creating an OAuth App
intro: '{% data reusables.shortdesc.creating_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/registering-oauth-apps/
  - /apps/building-oauth-apps/creating-an-oauth-app
  - /developers/apps/creating-an-oauth-app
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - OAuth Apps
---
{% if currentVersion == "free-pro-team@latest" %}
{% note %}

  **Hinweis:** {% data reusables.apps.maximum-oauth-apps-allowed %}

{% endnote %}
{% endif %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
4. Click **New OAuth App**. ![Button to create a new OAuth app](/assets/images/oauth-apps/oauth_apps_new_app.png)

  {% note %}

  **Note:** If you haven't created an app before, this button will say, **Register a new application**.

  {% endnote %}
6. In "Application name", type the name of your app. ![Field for the name of your app](/assets/images/oauth-apps/oauth_apps_application_name.png)

  {% warning %}

  **Warning:**  Only use information in your OAuth app that you consider public. Avoid using sensitive data, such as internal URLs, when creating an OAuth App.

  {% endwarning %}

7. In "Homepage URL", type the full URL to your app's website. ![Field for the homepage URL of your app](/assets/images/oauth-apps/oauth_apps_homepage_url.png)
8. Optionally, in "Application description", type a description of your app that users will see. ![Field for a description of your app](/assets/images/oauth-apps/oauth_apps_application_description.png)
9. In "Authorization callback URL", type the callback URL of your app. ![Field for the authorization callback URL of your app](/assets/images/oauth-apps/oauth_apps_authorization_callback_url.png)
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
   {% note %}

   **Note:** OAuth Apps cannot have multiple callback URLs, unlike {% data variables.product.prodname_github_apps %}.

   {% endnote %}
{% endif %}
10. Klicke auf **Register application** (Anwendung registrieren). ![Button to register an application](/assets/images/oauth-apps/oauth_apps_register_application.png)
