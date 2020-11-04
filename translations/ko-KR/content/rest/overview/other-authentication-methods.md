---
title: Other authentication methods
intro: You can use basic authentication for testing in a non-production environment.
redirect_from:
  - /v3/auth
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
While the API provides multiple methods for authentication, we strongly recommend using [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/) for production applications. The other methods provided are intended to be used for scripts or testing (i.e., cases where full OAuth would be overkill). Third party applications that rely on
{% data variables.product.product_name %} for authentication should not ask for or collect {% data variables.product.product_name %} credentials.
Instead, they should use the [OAuth web flow](/apps/building-oauth-apps/authorizing-oauth-apps/).

{% endif %}

{% if currentVersion == "github-ae@latest" %}

To authenticate we recommend using [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/) tokens, such a personal access token through the [OAuth web flow](/apps/building-oauth-apps/authorizing-oauth-apps/).

{% endif %}

### Basic Authentication

The API supports Basic Authentication as defined in [RFC2617](http://www.ietf.org/rfc/rfc2617.txt) with a few slight differences. The main difference is that the RFC requires unauthenticated requests to be answered with `401 Unauthorized` responses. In many places, this would disclose the existence of user data. Instead, the {% data variables.product.product_name %} API responds with `404 Not Found`. This may cause problems for HTTP libraries that assume a `401 Unauthorized` response. The solution is to manually craft the `Authorization` header.

#### Via OAuth and personal access tokens

We recommend you use OAuth tokens to authenticate to the GitHub API. OAuth tokens include [personal access tokens][personal-access-tokens] and enable the user to revoke access at any time.

```shell
$ curl -u <em>username</em>:<em>token</em> {% data variables.product.api_url_pre %}/user
```

This approach is useful if your tools only support Basic Authentication but you want to take advantage of OAuth access token security features.

{% if enterpriseServerVersions contains currentVersion %}
#### Via username and password

{% data reusables.apps.deprecating_password_auth %}

To use Basic Authentication with the {% data variables.product.product_name %} API, simply send the username and password associated with the account.

For example, if you're accessing the API via [cURL][curl], the following command would authenticate you if you replace `<username>` with your {% data variables.product.product_name %} username. (cURL will prompt you to enter the password.)

```shell
$ curl -u <em>username</em> {% data variables.product.api_url_pre %}/user
```
If you have two-factor authentication enabled, make sure you understand how to [work with two-factor authentication](/v3/auth/#working-with-two-factor-authentication).

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### Authenticating for SAML SSO

{% note %}

**Note:** Integrations and OAuth applications that generate tokens on behalf of others are automatically authorized.

{% endnote %}

If you're using the API to access an organization that enforces [SAML SSO][saml-sso] for authentication, you'll need to create a personal access token (PAT) and [authorize the token][allowlist] for that organization. Visit the URL specified in `X-GitHub-SSO` to authorize the token for the organization.

```shell
$ curl -v -H "Authorization: token <em>TOKEN</em>" {% data variables.product.api_url_pre %}/repos/octodocs-test/test

> X-GitHub-SSO: required; url=https://github.com/orgs/octodocs-test/sso?authorization_request=AZSCKtL4U8yX1H3sCQIVnVgmjmon5fWxks5YrqhJgah0b2tlbl9pZM4EuMz4
{
  "message": "Resource protected by organization SAML enforcement. You must grant your personal token access to this organization.",
  "documentation_url": "https://docs.github.com"
}
```

When requesting data that could come from multiple organizations (for example, [requesting a list of issues created by the user][user-issues]), the `X-GitHub-SSO` header indicates which organizations require you to authorize your personal access token:

```shell
$ curl -v -H "Authorization: token <em>TOKEN</em>" {% data variables.product.api_url_pre %}/user/issues

> X-GitHub-SSO: partial-results; organizations=21955855,20582480
```

The value `organizations` is a comma-separated list of organization IDs for organizations require authorization of your personal access token.
{% endif %}

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
### Working with two-factor authentication

{% data reusables.apps.deprecating_password_auth %}

When you have two-factor authentication enabled, [Basic Authentication](#basic-authentication) for _most_ endpoints in the REST API requires that you use a personal access token or OAuth token instead of your username and password.

You can generate a new personal access token {% if currentVersion == "free-pro-team@latest" %}with [{% data variables.product.product_name %} developer settings](https://github.com/settings/tokens/new){% endif %} or use the "[Create a new authorization][create-access]" endpoint in the OAuth Authorizations API to generate a new OAuth token. For more information, see "[Creating a personal access token for the command line](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)". Then you would use these tokens to [authenticate using OAuth token][oauth-auth] with the GitHub API. The only time you need to authenticate with your username and password is when you create your OAuth token or use the OAuth Authorizations API.



#### Using the OAuth Authorizations API with two-factor authentication

When you make calls to the OAuth Authorizations API, Basic Authentication requires that you use a one-time password (OTP) and your username and password instead of tokens. When you attempt to authenticate with the OAuth Authorizations API, the server will respond with a `401 Unauthorized` and one of these headers to let you know that you need a two-factor authentication code:

`X-GitHub-OTP: required; SMS` or `X-GitHub-OTP: required; app`.

This header tells you how your account receives its two-factor authentication codes. Depending how you set up your account, you will either receive your OTP codes via SMS or you will use an application like Google Authenticator or 1Password. For more information, see "[Configuring two-factor authentication](/articles/configuring-two-factor-authentication)." Pass the OTP in the header:

```shell
$ curl --request POST \
  --url https://api.github.com/authorizations \
  --header 'authorization: Basic <em>PASSWORD</em>' \
  --header 'content-type: application/json' \
  --header 'x-github-otp: <em>OTP</em>' \
  --data '{"scopes": ["public_repo"], "note": "test"}'
```
{% endif %}

[create-access]: /v3/oauth_authorizations/#create-a-new-authorization
[curl]: http://curl.haxx.se/
[oauth-auth]: /v3/#authentication
[personal-access-tokens]: /articles/creating-a-personal-access-token-for-the-command-line
[saml-sso]: /articles/about-identity-and-access-management-with-saml-single-sign-on
[allowlist]: /github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
[user-issues]: /v3/issues/#list-issues-assigned-to-the-authenticated-user
