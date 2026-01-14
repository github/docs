---
title: Authenticating to the REST API
shortTitle: Authenticating to REST API
intro: You can authenticate to the REST API to access more endpoints and have a higher rate limit.
redirect_from:
  - /v3/auth
  - /rest/overview/other-authentication-methods
  - /rest/overview/authenticating-to-the-rest-api
versionedContent:
  versions:
    - fpt
    - ghec
    - ghes
topics:
  - API
  - Authenticating
---

## About authentication

Many REST API endpoints require authentication or return additional information if you are authenticated. Additionally, you can make more requests per hour when you are authenticated.

To authenticate your request, you will need to provide an authentication token with the required scopes or permissions. There a few different ways to get a token: You can create a {% data variables.product.pat_generic %}, generate a token with a {% data variables.product.prodname_github_apps %}, or use the built-in `GITHUB_TOKEN` in a {% data variables.product.prodname_actions %} workflow.

> [!TIP]
> **Choosing the right authentication method**:
> - **Personal use**: Use a {% data variables.product.pat_v2 %} for best security and control
> - **Organization automation**: Use {% data variables.product.prodname_github_apps %} for granular permissions
> - **CI/CD workflows**: Use the built-in `GITHUB_TOKEN` with specific permissions
> - **Legacy purposes**: Use {% data variables.product.pat_v1 %} (not recommended for new development)

### Authentication header format

After creating a token, you can authenticate your request by sending the token in the `Authorization` header of your request. For example, in the following request, replace `YOUR-TOKEN` with your token:

```shell
curl --request GET \
--url "{% data variables.product.rest_url %}/octocat" \
--header "Authorization: Bearer YOUR-TOKEN" \
--header "X-GitHub-Api-Version: {{ allVersions[currentVersion].latestApiVersion }}"
```

> [!NOTE]
> {% data reusables.getting-started.bearer-vs-token %}

## Failed login limit

> [!WARNING]
> If you try to use a REST API endpoint without a token or with a token that has insufficient permissions, you will receive a `404 Not Found` or `403 Forbidden` response.

After detecting several requests with invalid credentials within a short period, the API will temporarily reject all authentication attempts for that user (including ones with valid credentials) with a `403 Forbidden` response. For more information, see [AUTOTITLE](https://github.com/github/docs/blob/main/rest/overview/rate-limits-for-the-rest-api).

## Authentication method comparison

| Method | Best For | Granular Control | SAML SSO Support | Recommendation |
|--------|----------|------------------|------------------|----------------|
| **{% data variables.product.pat_v2 %}** | Personal scripts, API testing | ✅ Yes | ✅ Yes | ✅ **Recommended** |
| **{% data variables.product.pat_v1 %}** | Legacy applications | ❌ No | ⚠️ Manual auth | ⚠️ **Legacy** |
| **{% data variables.product.prodname_github_apps %}** | Organization automation | ✅ Yes | ✅ Auto | ✅ **Recommended** |
| **{% data variables.product.prodname_oauth_apps %}** | User authorization | ❌ No | ✅ Auto | ⚠️ **Deprecating** |
| **`GITHUB_TOKEN`** | Actions workflows | ✅ Configurable | ✅ N/A | ✅ **Recommended** |

## Authenticating with a Personal Access Token

> [!IMPORTANT]
> **Keep your tokens secure**: Treat Personal Access Tokens like passwords. Never commit them to repositories, share them publicly, or use them in client-side code.

For personal use of the GitHub REST API, you can create a Personal Access Token (PAT). If possible, {% data variables.product.company_short %} recommends that you use a {% data variables.product.pat_v2 %} instead of a {% data variables.product.pat_v1 %}. For more information about creating a PAT, see [AUTOTITLE](https://github.com/github/docs/blob/main/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

### Using {% data variables.product.pat_v2 %}

{% data variables.product.pat_v2 %}s require specific permissions for each REST API endpoint. The REST API reference documents:
- Whether the endpoint works with {% data variables.product.pat_v2 %}s
- What permissions are required for token usage

Some endpoints may require multiple permissions. For an overview, see [AUTOTITLE](https://github.com/github/docs/blob/main/rest/overview/permissions-required-for-fine-grained-personal-access-tokens).

### Using {% data variables.product.pat_v1 %}

{% data variables.product.pat_v1 %}s require specific scopes for each REST API endpoint. For guidance about scope selection, see [AUTOTITLE](https://github.com/github/docs/blob/main/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes).

> [!CAUTION]
> {% data variables.product.pat_generic_caps_plural %} act as your identity when making REST API requests. **Compromise of your token equals compromise of your account**. Keep your tokens secure: [AUTOTITLE](https://github.com/github/docs/blob/main/rest/authentication/keeping-your-api-credentials-secure?apiVersion=2022-11-28).

### {% data variables.product.pat_generic_caps_plural %} and SAML SSO

{% ifversion fpt or ghec %}

If you use a {% data variables.product.pat_v1 %} to access an organization that enforces SAML single sign-on (SSO), you must authorize your token after creation.

> [!IMPORTANT]
> {% data variables.product.pat_v2 %}s are authorized during token creation, before organization access is granted.

For more information, see [AUTOTITLE](https://github.com/github/docs/blob/main/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on).

> [!WARNING]
> **SAML authorization failure modes**:
> - Unauthorized {% data variables.product.pat_v1 %}s: May receive `404` or `403` errors
> - Multiple organizations: API won't return results from unauthorized orgs
> - Error headers include organization IDs: `X-GitHub-SSO: partial-results; organizations=21955855,20582480`

{% endif %}

## Authenticating with a token generated by an app

For organizational use or acting on behalf of users, {% data variables.product.company_short %} recommends {% data variables.product.prodname_github_apps %}. For more information, see [AUTOTITLE](https://github.com/github/docs/blob/main/apps/creating-github-apps/authenticating-with-a-github-app/about-authentication-with-a-github-app).

The REST API reference documentation for each endpoint states:
- Whether the endpoint works with {% data variables.product.prodname_github_apps %}
- Required permissions for app usage

Some endpoints require multiple permissions. For a complete overview, see [AUTOTITLE](https://github.com/github/docs/blob/main/rest/overview/permissions-required-for-github-apps).

You can also create an OAuth token with an {% data variables.product.prodname_oauth_app %}, but {% data variables.product.company_short %} recommends {% data variables.product.prodname_github_apps %} for better control over access and permissions.

{% ifversion fpt or ghec %}Access tokens created by apps are automatically authorized for SAML SSO.{% endif %}

### Using basic authentication

Some REST API endpoints for {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %} require basic authentication using the app's client ID as username and client secret as password.

Example request:
```shell
curl --request POST \
--url "{% data variables.product.rest_url %}/applications/YOUR_CLIENT_ID/token" \
--user "YOUR_CLIENT_ID:YOUR_CLIENT_SECRET" \
--header "Accept: application/vnd.github+json" \
--header "X-GitHub-Api-Version: {{ allVersions[currentVersion].latestApiVersion }}" \
--data '{
  "access_token": "ACCESS_TOKEN_TO_CHECK"
}'
```

## Finding your credentials

To find client ID and generate client secrets:

1. In the upper-right corner, click your profile picture
2. Navigate to settings:
   - **Personal apps**: Click **Settings**
   - **Organization apps**: Click **Your organizations** → organization **Settings**
3. Click **Developer settings**
4. Click **{% data variables.product.prodname_github_apps %}** or **{% data variables.product.prodname_oauth_apps %}**
5. Select your app to view credentials

> [!TIP]
> **Practical workflow**:
> - Navigate directly to: `https://github.com/settings/developers`
> - Or globally search for "Developer settings" from anywhere on GitHub

## Authenticating in a {% data variables.product.prodname_actions %} workflow

For Actions workflows, {% data variables.product.company_short %} recommends the built-in `GITHUB_TOKEN` instead of creating additional tokens. You can grant specific permissions using the `permissions` key.

For more information, see [AUTOTITLE](https://github.com/github/docs/blob/main/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token).

> [!ALTERNATIVE]
> If `GITHUB_TOKEN` isn't sufficient, store your token as a secret: [AUTOTITLE](https://github.com/github/docs/blob/main/actions/security-guides/encrypted-secrets).

### Using {% data variables.product.prodname_cli %} in Actions:

```yaml
jobs:
  use_api:
    runs-on: ubuntu-latest
    permissions: {}
    steps:
      - env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          gh api /PATH
```

### Using curl in Actions:

```yaml
jobs:
  use_api:
    runs-on: ubuntu-latest
    permissions: {}
    steps:
      - env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          curl --request GET \
          --url "{% data variables.product.rest_url %}/PATH" \
          --header "Authorization: Bearer $GH_TOKEN"
```

## Username and password authentication

> [!WARNING]
> **This method is generally not supported** on GitHub.com. Only use with self-hosted {% data variables.product.prodname_ghe_server %}.

**For {% data variables.product.prodname_ghe_server %} users:**
```shell
curl --request GET \
--url "{% data variables.product.rest_url %}/user" \
--user USERNAME:PASSWORD \
--header "X-GitHub-Api-Version: {{ allVersions[currentVersion].latestApiVersion }}"
```

**For GitHub.com:** Authentication with username and password is **not supported** and will return a 4xx error.

## Best practices summary

- ✅ **Use tokens** instead of passwords whenever possible
- ✅ **Choose granular permissions** with PAT v2 or GitHub Apps
- ✅ **Keep tokens secure** - never commit or expose them
- ✅ **Use GITHUB_TOKEN** in Actions workflows when possible
- ✅ **Authorize tokens for SAML** when accessing secured organizations
- ⚠️ **Avoid legacy PAT v1** for new development
- ❌ **Never use username/password** on GitHub.com

## Further reading

- [AUTOTITLE](https://github.com/github/docs/blob/main/rest/overview/keeping-your-api-credentials-secure)
- [AUTOTITLE](https://github.com/github/docs/blob/main/rest/guides/getting-started-with-the-rest-api#authenticating)
- [AUTOTITLE](https://github.com/github/docs/blob/main/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
