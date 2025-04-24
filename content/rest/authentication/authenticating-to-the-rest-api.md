---
title: Authenticating to the REST API
intro: You can authenticate to the REST API to access more endpoints and have a higher rate limit.
redirect_from:
  - /v3/auth
  - /rest/overview/other-authentication-methods
  - /rest/overview/authenticating-to-the-rest-api
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - API
shortTitle: Authenticating
---

## About authentication

Many REST API endpoints require authentication or return additional information if you are authenticated. Additionally, you can make more requests per hour when you are authenticated.

To authenticate your request, you will need to provide an authentication token with the required scopes or permissions. There a few different ways to get a token: You can create a {% data variables.product.pat_generic %}, generate a token with a {% data variables.product.prodname_github_app %}, or use the built-in `GITHUB_TOKEN` in a {% data variables.product.prodname_actions %} workflow.

After creating a token, you can authenticate your request by sending the token in the `Authorization` header of your request. For example, in the following request, replace `YOUR-TOKEN` with a reference to your token:

```shell
curl --request GET \
--url "{% data variables.product.rest_url %}/octocat" \
--header "Authorization: Bearer YOUR-TOKEN" \
--header "X-GitHub-Api-Version: {{ allVersions[currentVersion].latestApiVersion }}"
```

> [!NOTE]
> {% data reusables.getting-started.bearer-vs-token %}

### Failed login limit

If you try to use a REST API endpoint without a token or with a token that has insufficient permissions, you will receive a `404 Not Found` or `403 Forbidden` response. Authenticating with invalid credentials will initially return a `401 Unauthorized` response.

After detecting several requests with invalid credentials within a short period, the API will temporarily reject all authentication attempts for that user (including ones with valid credentials) with a `403 Forbidden` response. For more information, see [AUTOTITLE](/rest/overview/rate-limits-for-the-rest-api).

## Authenticating with a {% data variables.product.pat_generic %}

If you want to use the {% data variables.product.company_short %} REST API for personal use, you can create a {% data variables.product.pat_generic %}. If possible, {% data variables.product.company_short %} recommends that you use a {% data variables.product.pat_v2 %} instead of a {% data variables.product.pat_v1 %}. For more information about creating a {% data variables.product.pat_generic %}, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

If you are using a {% data variables.product.pat_v2 %}, your {% data variables.product.pat_v2 %} requires specific permissions in order to access each REST API endpoint. The REST API reference document for each endpoint states whether the endpoint works with {% data variables.product.pat_v2 %}s and states what permissions are required in order for the token to use the endpoint. Some endpoints may require multiple permissions, and some endpoints may require one of multiple permissions. For an overview of which REST API endpoints a {% data variables.product.pat_v2 %} can access with each permission, see [AUTOTITLE](/rest/overview/permissions-required-for-fine-grained-personal-access-tokens).

If you are using a {% data variables.product.pat_v1 %}, it requires specific scopes in order to access each REST API endpoint. For general guidance about what scopes to choose, see [AUTOTITLE](/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes).

### {% data variables.product.pat_generic_caps_plural %} and SAML SSO

{% ifversion fpt or ghec %}If you use a {% data variables.product.pat_v1 %} to access an organization that enforces SAML single sign-on (SSO) for authentication, you will need to authorize your token after creation. {% data variables.product.pat_v2_caps %}s are authorized during token creation, before access to the organization is granted. For more information, see [AUTOTITLE](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on).

If you do not authorize your {% data variables.product.pat_v1 %} for SAML SSO before you try to use it to access a single organization that enforces SAML SSO, you may receive a `404 Not Found` or a `403 Forbidden` error. If you receive a `403 Forbidden` error, the `X-GitHub-SSO` header will include a URL that you can follow to authorize your token. The URL expires after one hour.

If you do not authorize your {% data variables.product.pat_v1 %} for SAML SSO before you try to use it to access multiple organizations, the API will not return results from the organizations that require SAML SSO and the `X-GitHub-SSO` header will indicate the ID of the organizations that require SAML SSO authorization of your {% data variables.product.pat_v1 %}. For example: `X-GitHub-SSO: partial-results; organizations=21955855,20582480`.

{% endif %}

## Authenticating with a token generated by an app

If you want to use the API for an organization or on behalf of another user, {% data variables.product.company_short %} recommends that you use a {% data variables.product.prodname_github_app %}. For more information, see [AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/about-authentication-with-a-github-app).

The REST API reference documentation for each endpoint states whether the endpoint works with {% data variables.product.prodname_github_apps %} and states what permissions are required in order for the app to use the endpoint. Some endpoints may require multiple permissions, and some endpoints may require one of multiple permissions. For an overview of which REST API endpoints a {% data variables.product.prodname_github_app %} can access with each permission, see [AUTOTITLE](/rest/overview/permissions-required-for-github-apps).

You can also create an OAuth token with an {% data variables.product.prodname_oauth_app %} to access the REST API. However, {% data variables.product.company_short %} recommends that you use a {% data variables.product.prodname_github_app %} instead. {% data variables.product.prodname_github_apps %} allow more control over the access and permission that the app has.

{% ifversion fpt or ghec %}Access tokens created by apps are automatically authorized for SAML SSO.{% endif %}

### Using basic authentication

Some REST API endpoints for {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %} require you to use basic authentication to access the endpoint. You will use the app's client ID as the username and the app's client secret as the password.

For example:

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

The client ID and client secret are associated with the app, not with the owner of the app or a user who authorized the app. They are used to perform operations on behalf of the app, such as creating access tokens.

If you are the owner of a {% data variables.product.prodname_github_app %} or {% data variables.product.prodname_oauth_app %}, or if you are an app manager for a {% data variables.product.prodname_github_app %}, you can find the client ID and generate a client secret on the settings page for your app. To navigate to your app's settings page:

1. In the upper-right corner of any page on {% data variables.product.prodname_dotcom %}, click your profile photo.
1. Navigate to your account settings.
   * For an app owned by a personal account, click **Settings**.
   * For an app owned by an organization:
     1. Click **Your organizations**.
     1. To the right of the organization, click **Settings**.
{% data reusables.user-settings.developer_settings %}
1. In the left sidebar, click **{% data variables.product.prodname_github_apps %}** or **{% data variables.product.prodname_oauth_apps %}**.
1. For {% data variables.product.prodname_github_apps %}, to the right of the {% data variables.product.prodname_github_app %} you want to access, click **Edit**. For {% data variables.product.prodname_oauth_apps %}, click the app that you want to access.
1. Next to **Client ID**, you will see the client ID for your app.
1. Next to **Client secrets**, click **Generate a new client secret** to generate a client secret for your app.

## Authenticating in a {% data variables.product.prodname_actions %} workflow

If you want to use the API in a {% data variables.product.prodname_actions %} workflow, {% data variables.product.company_short %} recommends that you authenticate with the built-in `GITHUB_TOKEN` instead of creating a token. You can grant permissions to the `GITHUB_TOKEN` with the `permissions` key. For more information, see [AUTOTITLE](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token).

If this is not possible, you can store your token as a secret and use the name of your secret in your {% data variables.product.prodname_actions %} workflow. For more information about secrets, see [AUTOTITLE](/actions/security-guides/encrypted-secrets).

### Authenticating in a {% data variables.product.prodname_actions %} workflow using {% data variables.product.prodname_cli %}

To make an authenticated request to the API in a {% data variables.product.prodname_actions %} workflow using {% data variables.product.prodname_cli %}, you can store the value of `GITHUB_TOKEN` as an environment variable, and use the `run` keyword to execute the {% data variables.product.prodname_cli %} `api` subcommand. For more information about the `run` keyword, see [AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun).

In the following example workflow, replace `PATH` with the path of the endpoint. For more information about the path, see [AUTOTITLE](/rest/guides/getting-started-with-the-rest-api?tool=cli#path).{% ifversion ghes %} Replace `HOSTNAME` with the name of {% data variables.location.product_location %}.{% endif %}

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

### Authenticating in a {% data variables.product.prodname_actions %} workflow using `curl`

To make an authenticated request to the API in a {% data variables.product.prodname_actions %} workflow using `curl`, you can store the value of `GITHUB_TOKEN` as an environment variable, and use the `run` keyword to execute a `curl` request to the API. For more information about the `run` keyword, see [AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun).

In the following example workflow, replace `PATH` with the path of the endpoint. For more information about the path, see [AUTOTITLE](/rest/guides/getting-started-with-the-rest-api?tool=cli#path).{% ifversion ghes %} Replace `HOSTNAME` with the name of {% data variables.location.product_location %}.{% endif %}

```yaml copy
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

### Authenticating in a {% data variables.product.prodname_actions %} workflow using JavaScript

For an example of how to authenticate in a {% data variables.product.prodname_actions %} workflow using JavaScript, see [AUTOTITLE](/rest/guides/scripting-with-the-rest-api-and-javascript#authenticating-in-github-actions).

## Authenticating with username and password

{% ifversion ghes %}

{% data variables.product.company_short %} recommends that you use a token to authenticate to the REST API instead of your password. You have more control over what a token can do, and you can revoke a token at anytime. However, you can also authenticate to the REST API using your username and password for basic authentication. To do so, you will pass your username and password with the `--user` option:

```shell
curl --request GET \
--url "{% data variables.product.rest_url %}/user" \
--user USERNAME:PASSWORD \
--header "X-GitHub-Api-Version: {{ allVersions[currentVersion].latestApiVersion }}"
```

{% else %}

Authentication with username and password is not supported. If you try to authenticate with user name and password, you will receive a 4xx error.

{% endif %}

## Further reading

* [AUTOTITLE](/rest/overview/keeping-your-api-credentials-secure)
* [AUTOTITLE](/rest/guides/getting-started-with-the-rest-api#authenticating)
