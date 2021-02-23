---
title: Migrating OAuth Apps to GitHub Apps
intro: 'Learn about the advantages of migrating your {% data variables.product.prodname_oauth_app %} to a {% data variables.product.prodname_github_app %} and how to migrate an {% data variables.product.prodname_oauth_app %} that isn''t listed on {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /apps/migrating-oauth-apps-to-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


This article provides guidelines for existing integrators who are considering migrating from an OAuth App to a GitHub App.

### Reasons for switching to GitHub Apps

[GitHub Apps](/apps/) are the officially recommended way to integrate with GitHub because they offer many advantages over a pure OAuth-based integration:

- [Fine-grained permissions](/apps/differences-between-apps/#requesting-permission-levels-for-resources) target the specific information a GitHub App can access, allowing the app to be more widely used by people and organizations with security policies than OAuth Apps, which cannot be limited by permissions.
- [Short-lived tokens](/apps/differences-between-apps/#token-based-identification) provide a more secure authentication method over OAuth tokens. An OAuth token does not expire until the person who authorized the OAuth App revokes the token. GitHub Apps use tokens that expire quickly, creating a much smaller window of time for compromised tokens to be in use.
- [Built-in, centralized webhooks](/apps/differences-between-apps/#webhooks) receive events for all repositories and organizations the app can access. Conversely, OAuth Apps require configuring a webhook for each repository and organization accessible to the user.
- [Bot accounts](/apps/differences-between-apps/#machine-vs-bot-accounts) don't consume a {% data variables.product.product_name %} seat and remain installed even when the person who initially installed the app leaves the organization.
- Built-in support for OAuth is still available to GitHub Apps using [user-to-server endpoints](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/).
- Dedicated [API rate limits](/apps/building-github-apps/understanding-rate-limits-for-github-apps/) for bot accounts scale with your integration.
- Repository owners can [install GitHub Apps](/apps/differences-between-apps/#who-can-install-github-apps-and-authorize-oauth-apps) on organization repositories. If a GitHub App's configuration has permissions that request an organization's resources, the org owner must approve the installation.
- Open Source community support is available through [Octokit libraries](/rest/overview/libraries) and other frameworks such as [Probot](https://probot.github.io/).
- Integrators building GitHub Apps have opportunities to adopt earlier access to APIs.

### Converting an OAuth App to a GitHub App

These guidelines assume that you have a registered OAuth App{% if currentVersion == "free-pro-team@latest" %} that may or may not be listed in GitHub Marketplace{% endif %}. At a high level, you'll need to follow these steps:

1. [Review the available API endpoints for GitHub Apps](#review-the-available-api-endpoints-for-github-apps)
1. [Design to stay within API rate limits](#design-to-stay-within-api-rate-limits)
1. [Register a new GitHub App](#register-a-new-github-app)
1. [Determine the permissions your app requires](#determine-the-permissions-your-app-requires)
1. [Subscribe to webhooks](#subscribe-to-webhooks)
1. [Understand the different methods of authentication](#understand-the-different-methods-of-authentication)
1. [Direct users to install your GitHub App on repositories](#direct-users-to-install-your-github-app-on-repositories)
1. [Remove any unnecessary repository hooks](#remove-any-unnecessary-repository-hooks)
1. [Encourage users to revoke access to your OAuth app](#encourage-users-to-revoke-access-to-your-oauth-app)

#### Review the available API endpoints for GitHub Apps

While the majority of [REST API](/rest) endpoints and [GraphQL](/graphql) queries are available to GitHub Apps today, we are still in the process of enabling some endpoints. Review the [available REST endpoints](/rest/overview/endpoints-available-for-github-apps) to ensure that the endpoints you need are compatible with GitHub Apps. Note that some of the API endpoints enabled for GitHub Apps allow the app to act on behalf of the user. See "[User-to-server requests](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-to-server-requests)" for a list of endpoints that allow a GitHub App to authenticate as a user.

We recommend reviewing the list of API endpoints you need as early as possible. Please let Support know if there is an endpoint you require that is not yet enabled for {% data variables.product.prodname_github_app %}s.

#### Design to stay within API rate limits

GitHub Apps use [sliding rules for rate limits](/apps/building-github-apps/understanding-rate-limits-for-github-apps/), which can increase based on the number of repositories and users in the organization. A GitHub App can also make use of [conditional requests](/rest#conditional-requests) or consolidate requests by using the [GraphQL API V4](/graphql).

#### Register a new GitHub App

Once you've decided to make the switch to GitHub Apps, you'll need to [create a new GitHub App](/apps/building-github-apps/).

#### Determine the permissions your app requires

When registering your GitHub App, you'll need to select the permissions required by each endpoint used in your app's code. See "[GitHub App permissions](/rest/reference/permissions-required-for-github-apps)" for a list of the permissions needed for each endpoint available to GitHub Apps.

In your GitHub App's settings, you can specify whether your app needs `No Access`, `Read-only`, or `Read & Write` access for each permission type. The fine-grained permissions allow your app to gain targeted access to the subset of data you need. We recommend specifying the smallest set of permissions possible that provides the desired functionality.

#### Subscribe to webhooks

After you've created a new GitHub App and selected its permissions, you can select the webhook events you wish to subscribe it to. See "[Editing a GitHub App's permissions](/apps/managing-github-apps/editing-a-github-app-s-permissions/)" to learn how to subscribe to webhooks.

#### Understand the different methods of authentication

GitHub Apps primarily use a token-based authentication that expires after a short amount of time, providing more security than an OAuth token that does not expire. It’s important to understand the different methods of authentication available to you and when you need to use them:

* A **JSON Web Token (JWT)** [authenticates as the GitHub App](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app). For example, you can authenticate with a **JWT** to fetch application installation details or exchange the **JWT** for an **installation access token**.
* An **installation access token** [authenticates as a specific installation of your GitHub App](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) (also called server-to-server requests). For example, you can authenticate with an **installation access token** to open an issue or provide feedback on a pull request.
* An **OAuth access token** can [authenticate as a user of your GitHub App](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site) (also called user-to-server requests). For example, you can use an OAuth access token to authenticate as a user when a GitHub App needs to verify a user’s identity or act on a user’s behalf.

The most common scenario is to authenticate as a specific installation using an **installation access token**.

#### Direct users to install your GitHub App on repositories

Once you've made the transition from an OAuth App to a GitHub App, you will need to let users know that the GitHub App is available to install. For example, you can include an installation link for the GitHub App in a call-to-action banner inside your application. To ease the transition, you can use query parameters to identify the user or organization account that is going through the installation flow for your GitHub App and pre-select any repositories your OAuth App had access to. This allows users to easily install your GitHub App on repositories you already have access to.

##### Query parameters

| Name                  | Beschreibung                                                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `suggested_target_id` | **Required**: ID of the user or organization that is installing your GitHub App.                                                     |
| `repository_ids[]`    | Array of repository IDs. If omitted, we select all repositories. The maximum number of repositories that can be pre-selected is 100. |

##### Example URL
```
https://github.com/apps/YOUR_APP_NAME/installations/new/permissions?suggested_target_id=ID_OF_USER_OR_ORG&repository_ids[]=REPO_A_ID&repository_ids[]=REPO_B_ID
```

You'll need to replace `YOUR_APP_NAME` with the name of your GitHub App, `ID_OF_USER_OR_ORG` with the ID of your target user or organization, and include up to 100 repository IDs (`REPO_A_ID` and `REPO_B_ID`). To get a list of repositories your OAuth App has access to, use the [List repositories for the authenticated user](/rest/reference/repos#list-repositories-for-the-authenticated-user) and [List organization repositories](/rest/reference/repos#list-organization-repositories) endpoints.

#### Remove any unnecessary repository hooks

Once your GitHub App has been installed on a repository, you should remove any unnecessary webhooks that were created by your legacy OAuth App. If both apps are installed on a repository, they may duplicate functionality for the user. To remove webhooks, you can listen for the [`installation_repositories` webhook](/webhooks/event-payloads/#installation_repositories) with the `repositories_added` action and [Delete a repository webhook](/rest/reference/repos#delete-a-repository-webhook) on those repositories that were created by your OAuth App.

#### Encourage users to revoke access to your OAuth app

As your GitHub App installation base grows, consider encouraging your users to [revoke access](/articles/authorizing-oauth-apps/) to the legacy OAuth integration.
