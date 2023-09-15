---
title: Creating an OAuth app
intro: '{% data reusables.shortdesc.creating_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/registering-oauth-apps
  - /apps/building-oauth-apps/creating-an-oauth-app
  - /developers/apps/creating-an-oauth-app
  - /developers/apps/building-oauth-apps/creating-an-oauth-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth apps
---

{% note %}

**Note**: Consider building a {% data variables.product.prodname_github_app %} instead of an {% data variables.product.prodname_oauth_app %}.

Both {% data variables.product.prodname_oauth_apps %} and {% data variables.product.prodname_github_apps %} use OAuth 2.0.

{% data variables.product.prodname_oauth_apps %} can only act on behalf of a user while {% data variables.product.prodname_github_apps %} can either act on behalf of a user or independently of a user.

{% data variables.product.prodname_github_apps %} use fine-grained permissions, give the user more control over which repositories the app can access, and use short-lived tokens.

For more information, see "[AUTOTITLE](/apps/oauth-apps/building-oauth-apps/differences-between-github-apps-and-oauth-apps)" and "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/about-creating-github-apps)."

{% endnote %}

{% ifversion fpt or ghec %}
{% note %}

  **Note:** {% data reusables.apps.maximum-oauth-apps-allowed %}

{% endnote %}
{% endif %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
1. Click **New OAuth App**.

   {% note %}

   **Note:** If you haven't created an app before, this button will say, **Register a new application**.

   {% endnote %}
1. In "Application name", type the name of your app.

   {% warning %}

   **Warning:**  Only use information in your {% data variables.product.prodname_oauth_app %} that you consider public. Avoid using sensitive data, such as internal URLs, when creating an {% data variables.product.prodname_oauth_app %}.

   {% endwarning %}

1. In "Homepage URL", type the full URL to your app's website.
1. Optionally, in "Application description", type a description of your app that users will see.
1. In "Authorization callback URL", type the callback URL of your app.
{% ifversion fpt or ghes or ghec %}
   {% note %}

   **Note:** {% data variables.product.prodname_oauth_apps %} cannot have multiple callback URLs, unlike {% data variables.product.prodname_github_apps %}.

   {% endnote %}
{% endif %}{% ifversion device-flow-is-opt-in %}
1. If your {% data variables.product.prodname_oauth_app %} will use the device flow to identify and authorize users, click **Enable Device Flow**. For more information about the device flow, see "[AUTOTITLE](/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps#device-flow)."{% endif %}
1. Click **Register application**.

## Further reading

- "[AUTOTITLE](/apps/oauth-apps/maintaining-oauth-apps/modifying-an-oauth-app)"
