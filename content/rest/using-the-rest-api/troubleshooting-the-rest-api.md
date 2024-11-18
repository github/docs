---
title: Troubleshooting the REST API
shortTitle: Troubleshooting
intro: Learn how to diagnose and resolve common problems for the REST API.
redirect_from:
  - /v3/troubleshooting
  - /rest/overview/troubleshooting
  - /rest/overview/troubleshooting-the-rest-api
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - API
---

## Rate limit errors

{% data variables.product.company_short %} enforces rate limits to ensure that the API stays available for all users. For more information, see "[AUTOTITLE](/rest/overview/rate-limits-for-the-rest-api)."

If you exceed your primary rate limit, you will receive a `403 Forbidden` or `429 Too Many Requests ` response, and the `x-ratelimit-remaining` header will be `0`. If you exceed a secondary rate limit, you will receive a `403 Forbidden` or `429 Too Many Requests ` response and an error message that indicates that you exceeded a secondary rate limit.

If you receive a rate limit error, you should stop making requests temporarily according to these guidelines:

* If the `retry-after` response header is present, you should not retry your request until after that many seconds has elapsed.
* If the `x-ratelimit-remaining` header is `0`, you should not make another request until after the time specified by the `x-ratelimit-reset` header. The `x-ratelimit-reset` header is in UTC epoch seconds.
* Otherwise, wait for at least one minute before retrying. If your request continues to fail due to a secondary rate limit, wait for an exponentially increasing amount of time between retries, and throw an error after a specific number of retries.

Continuing to make requests while you are rate limited may result in the banning of your integration.

For more information about how to avoid exceeding the rate limits, see "[AUTOTITLE](/rest/guides/best-practices-for-using-the-rest-api)."

## `404 Not Found` for an existing resource

If you make a request to access a private resource and your request isn't properly authenticated, you will receive a `404 Not Found` response. {% data variables.product.company_short %} uses a `404 Not Found` response instead of a `403 Forbidden` response to avoid confirming the existence of private repositories.

If you get a `404 Not Found` response when you know that the resource that you are requesting exists, you should check your authentication. For example:

* If you are using a {% data variables.product.pat_v1 %}, you should ensure that:
  * The token has the scopes that are required to use the endpoint. For more information, see "[AUTOTITLE](/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes)" and "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token)."
  * The owner of the token has any permissions that are required to use the endpoint. For example, if an endpoint can only be used by organization owners, only users that are owners of the affected organization can use the endpoint.
  * The token has not been expired or revoked. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/token-expiration-and-revocation)."{% ifversion pat-v2 %}
* If you are using a {% data variables.product.pat_v2 %}, you should ensure that:
  * The token has the permissions that are required to use the endpoint. For more information about the required permissions, see the documentation for the endpoint.
  * The resource owner that was specified for the token matches the owner of the resource that the endpoint will affect. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token)."
  * The token has access to any private repositories that the endpoint will affect. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token)."
  * The owner of the token has any permissions that are required to use the endpoint. For example, if an endpoint can only be used by organization owners, only users that are owners of the affected organization can use the endpoint.
  * The token has not been expired or revoked. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/token-expiration-and-revocation)."{% endif %}
* If you are using a {% data variables.product.prodname_github_app %} installation access token, you should ensure that:
  * The {% data variables.product.prodname_github_app %} has the permissions that are required to use the endpoint. For more information about the required permissions, see the documentation for the endpoint.
  * The endpoint is only affecting resources owned by the account where the {% data variables.product.prodname_github_app %} is installed.
  * The {% data variables.product.prodname_github_app %} has access to any repositories that the endpoint will affect.
  * The token has not been expired or revoked. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/token-expiration-and-revocation)."
* If you are using a {% data variables.product.prodname_github_app %} user access token, you should ensure that:
  * The {% data variables.product.prodname_github_app %} has the permissions that are required to use the endpoint. For more information about the required permissions, see the documentation for the endpoint.
  * The user that authorized the token has any permissions that are required to use the endpoint. For example, if an endpoint can only be used by organization owners, only users that are owners of the affected organization can use the endpoint.
  * The {% data variables.product.prodname_github_app %} has access to any repositories that the endpoint will affect.
  * The user has access to any repositories that the endpoint will affect.
  * The user has approved any updated permissions for your {% data variables.product.prodname_github_app %}. For more information, see "[AUTOTITLE](/apps/using-github-apps/approving-updated-permissions-for-a-github-app)."
* If you are using an {% data variables.product.prodname_oauth_app %} user access token, you should ensure that:
  * The token has the scopes that are required to use the endpoint. For more information, see "[AUTOTITLE](/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes)."
  * The user that authorized the token has any permissions that are required to use the endpoint. For example, if an endpoint can only be used by organization owners, only users that are owners of the affected organization can use the endpoint.
  * The organization has not blocked OAuth app access, if you are using an endpoint that will affect resources owned by an organization. App owners cannot see whether their app is blocked, but they can instruct users of the app to check this. For more information, see {% ifversion fpt or ghec%}"[AUTOTITLE](/organizations/managing-oauth-access-to-your-organizations-data/about-oauth-app-access-restrictions)."{% else %}"[AUTOTITLE](/free-pro-team@latest/organizations/managing-oauth-access-to-your-organizations-data/about-oauth-app-access-restrictions)" in the {% data variables.product.prodname_free_team %} documentation.{% endif %}
  * The token has not been expired or revoked. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/token-expiration-and-revocation)."
* If you are using `GITHUB_TOKEN` in a {% data variables.product.prodname_actions %} workflow, you should ensure that:
  * The endpoint is only affecting resources owned by the repository where the workflow is running. If you need to access resources outside of that repository, such as resources owned by an organization or resources owned by another repository, you should use a {% data variables.product.pat_generic %} or an access token for a {% data variables.product.prodname_github_app %}.

For more information about authentication, see "[AUTOTITLE](/rest/overview/authenticating-to-the-rest-api)."

You should also check for typos in your URL. For example, adding a trailing slash to the endpoint will result in a `404 Not Found`. You can refer to the reference documentation for the endpoint to confirm that you have the correct URL.

Additionally, any path parameters must be URL encoded. For example, any slashes in the parameter value must be replaced with `%2F`. If you don't properly encode any slashes in the parameter name, the endpoint URL will be misinterpreted.

## Missing results

Most endpoints that return a list of resources support pagination. For most of these endpoints, only the first 30 resources are returned by default. In order to see all of the resources, you need to paginate through the results. For more information, see "[AUTOTITLE](/rest/guides/using-pagination-in-the-rest-api)."

If you are using pagination correctly and still do not see all of the results that you expect, you should confirm that the authentication credentials that you used have access to all of the expected resources. For example, if you are using a {% data variables.product.prodname_github_app %} installation access token, if the installation was only granted access to a subset of repositories in an organization, any request for all repositories in that organization will return only the repositories that the app installation can access.

{% ifversion fpt or ghec %}

## Requires authentication when using basic authentication

Basic authentication with your username and password is not supported. Instead, you should use a {% data variables.product.pat_generic %} or an access token for a {% data variables.product.prodname_github_app %} or {% data variables.product.prodname_oauth_app %}. For more information, see "[AUTOTITLE](/rest/overview/authenticating-to-the-rest-api)."

{% endif %}

## Timeouts

If {% data variables.product.product_name %} takes more than 10 seconds to process an API request, {% data variables.product.product_name %} will terminate the request and you will receive a timeout response and a "Server Error" message.

{% data variables.product.product_name %} reserves the right to change the timeout window to protect the speed and reliability of the API.

You can check the status of the REST API at [githubstatus.com](https://www.githubstatus.com/) to determine whether the timeout is due to a problem with the API. You can also try to simplify your request or try your request later. For example, if you are requesting 100 items on a page, you can try requesting fewer items.

## Resource not accessible

If you are using a {% data variables.product.prodname_github_app %}{% ifversion pat-v2 %} or {% data variables.product.pat_v2 %}{% endif %} and you receive a "Resource not accessible by integration"{% ifversion pat-v2 %} or "Resource not accessible by {% data variables.product.pat_generic %}"{% endif %} error, then your token has insufficient permissions. For more information about the required permissions, see the documentation for the endpoint.

{% ifversion rest-permissions-header %}

You can use the `X-Accepted-GitHub-Permissions` header to identify the permissions that are required to access the REST API endpoint.

The value of the `X-Accepted-GitHub-Permissions` header is a comma separated list of the permissions that are required to use the endpoint. Occasionally, you can choose from multiple permission sets. In these cases, multiple comma-separated lists will be separated by a semicolon.

For example:

* `X-Accepted-GitHub-Permissions: contents=read` means that your {% data variables.product.prodname_github_app %}{% ifversion pat-v2 %} or {% data variables.product.pat_v2 %}{% endif %} needs read access to the contents permission.
* `X-Accepted-GitHub-Permissions: pull_requests=write,contents=read` means that your {% data variables.product.prodname_github_app %}{% ifversion pat-v2 %} or {% data variables.product.pat_v2 %}{% endif %} needs write access to the pull request permission and read access to the contents permission.
* `X-Accepted-GitHub-Permissions: pull_requests=read,contents=read; issues=read,contents=read` means that your {% data variables.product.prodname_github_app %}{% ifversion pat-v2 %} or {% data variables.product.pat_v2 %}{% endif %} needs either read access to the pull request permission and read access to the contents permission, or read access to the issues permission and read access to the contents permission.

{% endif %}

## Problems parsing JSON

If you send invalid JSON in the request body, you may receive a `400 Bad Request` response and a "Problems parsing JSON" error message. You can use a linter or JSON validator to help you identify errors in your JSON.

## Body should be a JSON object

If the endpoint expects a JSON object and you do not format your request body as a JSON object, you may receive a `400 Bad Request` response and a "Body should be a JSON object" error message.

## Invalid request

If you omit required parameters or you use the wrong type for a parameter, you may receive a `422 Unprocessable Entity` response and an "Invalid request" error message. For example, you will get this error if you specify a parameter value as an array but the endpoint is expecting a string. You can refer to the reference documentation for the endpoint to verify that you are using the correct parameter types and that you are including all of the required parameters.

## Validation Failed

If your request could not be processed, you may receive a `422 Unprocessable Entity` response and a "Validation Failed" error message. The response body will include an `errors` property, which includes a `code` property to help you diagnose the problem.

Code | Description
-----------|-----------|
`missing` | A resource does not exist.
`missing_field` | A parameter that was required was not specified. Review the documentation for the endpoint to see what parameters are required.
`invalid` | The formatting of a parameter is invalid. Review the endpoint documentation for more specific information.
`already_exists` | Another resource has the same value as one of your parameters.  This can happen in resources that must have some unique key (such as label names).
`unprocessable` | The parameters that were provided were invalid.
`custom` | Refer to the `message` property to diagnose the error.

## Not a supported version

You should use the `X-GitHub-Api-Version` header to specify an API version. For example:

```shell
curl {% data reusables.rest-api.version-header %} https://api.github.com/zen
```

If you specify a version that does not exist, you will receive a `400 Bad Request` error and a message about the version not being supported.

For more information, see "[AUTOTITLE](/rest/overview/api-versions)."

## User agent required

Requests without a valid `User-Agent` header will be rejected. You should use your username or the name of your application for the `User-Agent` value.

curl sends a valid `User-Agent` header by default.

## Other errors

If you observe an error that is not addressed here, you should refer to the error message that the API gives you. Most error messages will provide a clue about what is wrong and a link to relevant documentation.

If you observe unexpected failures, you can use [githubstatus.com](https://www.githubstatus.com/) or the [{% data variables.product.company_short %} status API](https://www.githubstatus.com/api) to check for incidents affecting the API.

## Further reading

* "[AUTOTITLE](/rest/guides/best-practices-for-using-the-rest-api)"
* "[AUTOTITLE](/webhooks/testing-and-troubleshooting-webhooks/troubleshooting-webhooks)"
* "[AUTOTITLE](/apps/creating-github-apps/about-creating-github-apps/best-practices-for-creating-a-github-app)"
