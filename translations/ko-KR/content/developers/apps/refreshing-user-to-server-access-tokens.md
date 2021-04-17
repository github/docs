---
title: Refreshing user-to-server access tokens
intro: 'To enforce regular token rotation and reduce the impact of a compromised token, you can configure your {% data variables.product.prodname_github_app %} to use expiring user access tokens.'
redirect_from:
  - /apps/building-github-apps/refreshing-user-to-server-access-tokens
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
topics:
  - github apps
---


{% data reusables.pre-release-program.expiring-user-access-tokens %}


### About expiring user access tokens

To enforce regular token rotation and reduce the impact of a compromised token, you can configure your {% data variables.product.prodname_github_app %} to use expiring user access tokens. For more information on making user-to-server requests, see "[Identifying and authorizing users for GitHub Apps](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)."

Expiring user tokens expire after 8 hours. When you receive a new user-to-server access token, the response will also contain a refresh token, which can be exchanged for a new user token and refresh token. Refresh tokens are valid for 6 months.

### Renewing a user token with a refresh token

To renew an expiring user-to-server access token, you can exchange the `refresh_token` for a new access token and `refresh_token`.

  `POST https://github.com/login/oauth/access_token`

This callback request will send you a new access token and a new refresh token.  This callback request is similar to the OAuth request you would use to exchange a temporary `code` for an access token. For more information, see "[Identifying and authorizing users for GitHub Apps](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#2-users-are-redirected-back-to-your-site-by-github)" and "[Basics of authentication](/rest/guides/basics-of-authentication#providing-a-callback)."

#### 매개변수

| 이름              | 유형    | 설명                                                                                                                                                               |
| --------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `refresh_token` | `문자열` | **Required.** The token generated when the  {% data variables.product.prodname_github_app %} owner enables expiring tokens and issues a new user access token. |
| `grant_type`    | `문자열` | **Required.** Value must be `refresh_token` (required by the OAuth specification).                                                                               |
| `client_id`     | `문자열` | **Required.** The  client ID for your {% data variables.product.prodname_github_app %}.                                                                        |
| `client_secret` | `문자열` | **Required.** The  client secret for your {% data variables.product.prodname_github_app %}.                                                                    |

#### 응답

```json
{
  "access_token": "{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}ghu_16C7e42F292c6912E7710c838347Ae178B4a{% else %}e72e16c7e42f292c6912e7710c838347ae178b4a{% endif %}",
  "expires_in": "28800",
  "refresh_token": "{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}ghr_1B4a2e77838347a7E420ce178F2E7c6912E169246c34E1ccbF66C46812d16D5B1A9Dc86A1498{% else %}r1.c1b4a2e77838347a7e420ce178f2e7c6912e169246c34e1ccbf66c46812d16d5b1a9dc86a149873c{% endif %}",
  "refresh_token_expires_in": "15811200",
  "scope": "",
  "token_type": "bearer"
}
```
### Configuring expiring user tokens for an existing GitHub App

You can enable or disable expiring user-to-server authorization tokens from your {% data variables.product.prodname_github_app %} settings.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
4. Click **Edit** next to your chosen {% data variables.product.prodname_github_app %}. ![Settings to edit a GitHub App](/assets/images/github-apps/edit-test-app.png)
5. In the left sidebar, click **{% if currentVersion ver_lt "enterprise-server@3.1" %} Beta {% else %} Optional {% endif %} Features**.
  {% if currentVersion ver_lt "enterprise-server@3.1" %} ![Beta features tab](/assets/images/github-apps/beta-features-option.png) {% else %} ![Optional features tab](/assets/images/github-apps/optional-features-option.png) {% endif %}
6. Next to "User-to-server token expiration", click **Opt-in** or **Opt-out**. This setting may take a couple of seconds to apply.

### Opting out of expiring tokens for new GitHub Apps

When you create a new {% data variables.product.prodname_github_app %}, by default your app will use expiring user-to-server access tokens.

If you want your app to use non-expiring user-to-server access tokens, you can deselect "Expire user authorization tokens" on the app settings page.

![Option to opt-in to expiring user tokens during GitHub Apps setup](/assets/images/github-apps/expire-user-tokens-selection.png)

Existing {% data variables.product.prodname_github_app %}s using user-to-server authorization tokens are only affected by this new flow when the app owner enables expiring user tokens for their app.

Enabling expiring user tokens for existing {% data variables.product.prodname_github_app %}s requires sending users through the OAuth flow to re-issue new user tokens that will expire in 8 hours and making a request with the refresh token to get a new access token and refresh token. For more information, see "[Identifying and authorizing users for GitHub Apps](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}

### 더 읽을거리

- "[About authentication to {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/about-authentication-to-github#githubs-token-formats)"

{% endif %}
