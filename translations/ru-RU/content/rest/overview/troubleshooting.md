---
title: Устранение проблем
intro: Learn how to resolve the most common problems people encounter in the REST API.
redirect_from:
  - /v3/troubleshooting
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---



If you're encountering some oddities in the API, here's a list of resolutions to some of the problems you may be experiencing.

### `404` error for an existing repository

Typically, we send a `404` error when your client isn't properly authenticated. You might expect to see a `403 Forbidden` in these cases. However, since we don't want to provide _any_ information about private repositories, the API returns a `404` error instead.

To troubleshoot, ensure [you're authenticating correctly](/guides/getting-started/), [your OAuth access token has the required scopes](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), and [third-party application restrictions][oap-guide] are not blocking access.

### Not all results returned

Most API calls accessing a list of resources (_e.g._, users, issues, _etc._) support pagination. If you're making requests and receiving an incomplete set of results, you're probably only seeing the first page. You'll need to request the remaining pages in order to get more results.

It's important to *not* try and guess the format of the pagination URL. Not every API call uses the same structure. Instead, extract the pagination information from [the Link Header](/rest#pagination), which is sent with every request.

{% if currentVersion == "free-pro-team@latest" %}
### Basic authentication errors

On November 13, 2020 username and password authentication to the REST API and the OAuth Authorizations API were deprecated and no longer work.

#### Using `username`/`password` for basic authentication

If you're using `username` and `password` for API calls, then they are no longer able to authenticate. Например:

```bash
curl -u my_user:my_password https://api.github.com/user/repos
```

Instead, use a [personal access token](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) when testing endpoints or doing local development:

```bash
curl -H 'Authorization: token my_access_token' https://api.github.com/user/repos
```

For OAuth Apps, you should use the [web application flow](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to generate an OAuth token to use in the API call's header:

```bash
curl -H 'Authorization: token my-oauth-token' https://api.github.com/user/repos
```

#### Calls to OAuth Authorizations API

If you're making [OAuth Authorization API](/enterprise-server/rest/reference/oauth-authorizations) calls to manage your OAuth app's authorizations or to generate access tokens, similar to this example:

```bash
curl -u my_username:my_password -X POST "https://api.github.com/authorizations" -d '{"scopes":["public_repo"], "note":"my token", "client_id":"my_client_id", "client_secret":"my_client_secret"}'
```

Then you must switch to the [web application flow](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to generate access tokens.

{% endif %}

[oap-guide]: https://developer.github.com/changes/2015-01-19-an-integrators-guide-to-organization-application-policies/
