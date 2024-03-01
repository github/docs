---
title: Choosing permissions for a GitHub App
shortTitle: Permissions
intro: 'The permissions of a GitHub App determine what the app can do with {% data variables.product.company_short %}''s APIs and what webhooks the app can receive.'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-permissions-for-github-apps
  - /apps/building-github-apps/permissions-for-github-apps
  - /apps/building-github-apps/setting-permissions-for-github-apps
  - /developers/apps/setting-permissions-for-github-apps
  - /developers/apps/building-github-apps/setting-permissions-for-github-apps
  - /apps/creating-github-apps/creating-github-apps/setting-permissions-for-github-apps
  - /apps/creating-github-apps/creating-github-apps/choosing-permissions-for-a-github-app
  - /apps/creating-github-apps/setting-up-a-github-app/choosing-permissions-for-a-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - GitHub Apps
---

## About {% data variables.product.prodname_github_app %} permissions

{% data variables.product.prodname_github_apps %} don't have any permissions by default. When you register a {% data variables.product.prodname_github_app %}, you can select permissions for the app. The permissions that you select determine what the app can do with {% data variables.product.company_short %}'s APIs and what webhooks the app can subscribe to. You should select the minimum permissions required for the app.

Although {% data variables.product.prodname_github_apps %} don't have any permissions by default, they do have implicit permissions to read public resources when acting on behalf of a user. When a user authorizes the app to act on their behalf, the {% data variables.product.prodname_github_app %} can use the resulting user access token to make requests to the REST API{% ifversion graphQL-for-fgpats-and-apps %} and the GraphQL API{% endif %} to read public resources. To learn more about acting on behalf of a user, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-with-a-github-app-on-behalf-of-a-user)."

App permissions are classified as repository, organization, or account permissions. Repository permissions allow your app to access resources related to repositories that are owned by the account where the app is installed. Organization permissions allow your app to access resources related to the organization where the app is installed, if it is installed on an organization account. Account permissions allow your app to access resources related to a user if the user has also authorized your app. For more information about user authorization of apps, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-with-a-github-app-on-behalf-of-a-user)."

When a user installs an app on their account or organization, they see and grant the repository and organization permissions that the app requested. They will also see a list of account permissions that the app can request for individual users. When a user authorizes an app to act on their behalf, they will see and grant the account permissions that the app requested.

The success of an API request with a user access token depends on the user's permissions as well as the app's permissions. For example, if the app was granted permission to write the contents of a repository, but the user can only read the contents, then the user access token can only read the contents. The success of an API request with an installation access token only depends on the app's permissions.

You can modify the permissions for your app at any time. When you modify the permissions, the owner of each account where the app was installed will be prompted to approve the new permissions. If the account owner does not approve the new permissions, their installation will continue to use the old permissions.

Some webhooks and API access requires "Administration" permissions. If your app requires "Administration" permissions, consider explaining this requirement on your app's homepage. This will help users understand why your app needs a high level permission.

For more information about specifying permissions during {% data variables.product.prodname_github_app %} registration, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/creating-a-github-app)." For more information about modifying permissions, see "[AUTOTITLE](/apps/maintaining-github-apps/editing-a-github-apps-permissions)."

## Choosing permissions for webhook access

The webhook documentation indicates whether each webhook is available to {% data variables.product.prodname_github_apps %}. For each webhook that you want to subscribe to, refer to the webhook documentation to see what permissions a {% data variables.product.prodname_github_app %} needs to subscribe to that webhook. For more information, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads)."

For example, if you want your app to subscribe to `team` events, your app must have the "Members" organization permission.

On your {% data variables.product.prodname_github_app %} registration page, the available webhook events will change as you change your app's permissions. If you did not select sufficient permissions for your {% data variables.product.prodname_github_app %} to subscribe to an event, the event will not appear as an option on your app registration page.

## Choosing permissions for REST API access

The REST API reference documentation for each endpoint states whether the endpoint works with {% data variables.product.prodname_github_apps %} and states what permissions are required in order for the app to use the endpoint. Some endpoints may require multiple permissions, and some endpoints may require one of multiple permissions. For an overview of which REST API endpoints a {% data variables.product.prodname_github_app %} can access with each permission, see "[AUTOTITLE](/rest/overview/permissions-required-for-github-apps)."

For example, to use the `GET /orgs/{org}/dependabot/secrets` endpoint, your app must have at least read-level permission for the "organization dependabot secrets" permission.

If your app makes a REST API request with insufficient permissions, the API will return a `403` response.

{% data reusables.rest-api.permission-header %}

## Choosing permissions for GraphQL API access

For GraphQL requests, you should test your app to ensure that it has the required permissions for the GraphQL queries and mutations that you want to make.

If your app makes a GraphQL API query or mutation with insufficient permissions, the API will return a `401` response.

## Choosing permissions for Git access

If you want your app to use an installation or user access token to authenticate for HTTP-based Git access, you should request the "Contents" repository permission. If your app specifically needs to access or edit Actions files in the `.github/workflows` directory, request the "Workflows" repository permission.

You can then use the access token as the HTTP password. Replace `TOKEN` with the access token:

```shell
git clone https://x-access-token:TOKEN@github.com/owner/repo.git
```
