---
title: Refreshing user access tokens
intro: 'To enforce regular token rotation and reduce the impact of a compromised token, you can configure your {% data variables.product.prodname_github_app %} to use user access tokens that expire.'
redirect_from:
  - /apps/building-github-apps/refreshing-user-to-server-access-tokens
  - /developers/apps/refreshing-user-to-server-access-tokens
  - /developers/apps/building-github-apps/refreshing-user-to-server-access-tokens
  - /apps/creating-github-apps/authenticating-with-a-github-app/refreshing-user-to-server-access-tokens
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Refresh user access tokens
---
## About user access tokens that expire

{% note %}

**Note:** User access tokens that expire are currently an optional feature and are subject to change. For more information, see "[Expiring user-to-server access tokens for GitHub Apps](https://developer.github.com/changes/2020-04-30-expiring-user-to-server-access-tokens-for-github-apps)."

{% endnote %}

To enforce regular token rotation and reduce the impact of a compromised token, you can configure your {% data variables.product.prodname_github_app %} to use user access tokens that expire. If your app uses user access tokens that expire, then you will receive a refresh token when you generate a user access token. The user access token expires after eight hours, and the refresh token expires after six months. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app)."

You can use the refresh token to generate a new user access token and a new refresh token. Once you use a refresh token, that refresh token and the old user access token will no longer work.

If your refresh token expires before you use it, you can regenerate a user access token and refresh token by sending users through the web application flow or device flow. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app)."

## Configuring your app to use user access tokens that expire

When you create your app, expiration of user access tokens is enabled unless you opt out. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/creating-a-github-app)." You can also configure this setting after your app has been created.

{% data reusables.apps.settings-step %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
1. Next to the {% data variables.product.prodname_github_app %} that you want to modify, click **Edit**.
1. In the {% data variables.product.prodname_github_apps %} settings sidebar, click **Optional Features**.
1. Next to "User-to-server token expiration", click **Opt-in** or **Opt-out**. This setting may take a couple of seconds to apply.

   {% data variables.product.company_short %} recommends that you opt in to this feature for improved security.

If you opt into user access tokens that expire after you have already generated user access tokens, the previously generated user access tokens will not expire. You can delete these tokens by using the `DELETE /applications/CLIENT_ID/token` endpoint. For more information, see "[AUTOTITLE](/rest/apps/oauth-applications#delete-an-app-token)."

## Refreshing a user access token with a refresh token

1. Make a `POST` request to this URL, along with the following query parameters: `{% data variables.product.oauth_host_code %}/login/oauth/access_token`

   Query parameter | Type | Description
   -----|------|------------
   `client_id` | `string` | **Required.** The client ID for your {% data variables.product.prodname_github_app %}. The client ID is different from the app ID. You can find the client ID on the settings page for your app.
   `client_secret` | `string` | **Required.** The client secret for your {% data variables.product.prodname_github_app %}. You can generate a client secret on the settings page for your app.
   `grant_type` | `string` | **Required.** The value must be "refresh_token".
   `refresh_token` | `string` | **Required.** The refresh token that you received when you generated a user access token.

1. {% data variables.product.company_short %} will give a response that includes the following parameters:

   {% data reusables.apps.user-access-token-response-parameters %}
