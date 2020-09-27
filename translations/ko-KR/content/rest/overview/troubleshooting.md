---
title: 문제 해결
intro: Learn how to resolve the most common problems people encounter in the REST API.
redirect_from:
  - /v3/troubleshooting
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---



If you're encountering some oddities in the API, here's a list of resolutions to some of the problems you may be experiencing.

### Why am I getting a `404` error on a repository that exists?

Typically, we send a `404` error when your client isn't properly authenticated. You might expect to see a `403 Forbidden` in these cases. However, since we don't want to provide _any_ information about private repositories, the API returns a `404` error instead.

To troubleshoot, ensure [you're authenticating correctly](/guides/getting-started/), [your OAuth access token has the required scopes](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), and [third-party application restrictions][oap-guide] are not blocking access.

### Why am I not seeing all my results?

Most API calls accessing a list of resources (_e.g._, users, issues, _etc._) support pagination. If you're making requests and receiving an incomplete set of results, you're probably only seeing the first page. You'll need to request the remaining pages in order to get more results.

It's important to *not* try and guess the format of the pagination URL. Not every API call uses the same structure. Instead, extract the pagination information from [the Link Header](/v3/#pagination), which is sent with every request.

[oap-guide]: https://developer.github.com/changes/2015-01-19-an-integrators-guide-to-organization-application-policies/
