---
title: Authenticating as a GitHub App installation
shortTitle: Authenticate as an installation
intro: You can make your {% data variables.product.prodname_github_app %} authenticate as an installation in order to make API requests that affect resources owned by the account where the app is installed.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - GitHub Apps
---

## About authentication as a {% data variables.product.prodname_github_app %} installation

Once your {% data variables.product.prodname_github_app %} is installed on an account, you can make it authenticate as an app installation for API requests. This allows the app to access resources owned by that installation, as long as the app was granted the necessary repository access and permissions. API requests made by an app installation are attributed to the app. For more information about installing GitHub Apps, see "[Installing GitHub Apps](/developers/apps/managing-github-apps/installing-github-apps)."

For example, if you want your app to change the `Status` field of an issue on a project owned by an organization called "octo-org," then you would authenticate as the octo-org installation of your app. The timeline of the issue would state that your app updated the status.

To make an API request as an installation, you must first generate an installation access token. Then, you will send the installation access token in the `Authorization` header of your subsequent API requests. You can also use {% data variables.product.company_short %}'s Octokit SDKs, which can generate an installation access token for you.

Some REST API endpoints do not accept installation access tokens, and most REST API endpoints require your app to have certain permissions to use an endpoint. To see whether a REST API endpoint accepts installation access tokens and to see what permissions are required, refer to the documentation for the endpoint.

App installations can also use the GraphQL API. Similar to the REST API, the app must have certain permissions to access objects in the GraphQL API. For GraphQL requests, you should test that your app has the required permissions for the GraphQL queries and mutations that you want to make.

You can also use an installation access token to authenticate for HTTP-based Git access. Your app must have the "Contents" repository permission. You can then use the installation access token as the HTTP password. Replace `TOKEN` with the installation access token: `git clone https://x-access-token:TOKEN@github.com/owner/repo.git`.

Requests made with an installation access token are sometimes called "server-to-server" requests.

For more information about authenticating as an app on behalf of a user instead of as an app installation, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/identifying-and-authorizing-users-for-github-apps)".

## Using an installation access token to authenticate as an app installation

To authenticate as an installation with an installation access token, first use the REST API to generate an installation access token. Then, use that installation access token in the `Authorization` header of a REST API or GraphQL API request. The installation access token will expire after 1 hour.

### Generating an installation access token

{% data reusables.apps.generate-installation-access-token %}

### Authenticating with an installation access token

To authenticate with an installation access token, include it in the `Authorization` header of an API request. The access token will work with both the GraphQL API and the REST API.

Your app must have the required permissions to use the endpoint. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/choosing-permissions-for-a-github-app)."

In the following example, replace `INSTALLATION_ACCESS_TOKEN` with an installation access token:

```shell
curl --request GET \
--url "{% data variables.product.rest_url %}/meta" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer INSTALLATION_ACCESS_TOKEN" \
--header "X-GitHub-Api-Version: {{ allVersions[currentVersion].latestApiVersion }}"
```

## Using the Octokit.js SDK to authenticate as an app installation

You can use {% data variables.product.company_short %}'s Octokit.js SDK to authenticate as an app installation. One advantage of using the SDK to authenticate is that you do not need to generate a JSON web token (JWT) yourself. Additionally, the SDK will take care of regenerating an installation access token for you so you don't need to worry about the one hour expiration.

{% note %}

You must install and import `octokit` in order to use the Octokit.js library. The following example uses import statements in accordance with ES6. For more information about different installation and import methods, see [the Octokit.js README's Usage section](https://github.com/octokit/octokit.js/#usage).

{% endnote %}

### Using Octokit.js to authenticate with an installation ID

1. Get the ID of your {% data variables.product.prodname_github_app %}. You can find your app's ID on the settings page for your {% data variables.product.prodname_github_app %}. For more information about navigating to the settings page for your {% data variables.product.prodname_github_app %}, see "[AUTOTITLE](/apps/maintaining-github-apps/modifying-a-github-app-registration#navigating-to-your-github-app-settings)."
1. Generate a private key. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/managing-private-keys-for-github-apps)".
1. Get the ID of the installation that you want to authenticate as.

   If you are responding to a webhook event, the webhook payload will include the installation ID.

   You can also use the REST API to find the ID for an installation of your app. For example, you can get an installation ID with the `GET /users/{username}/installation`, `GET /repos/{owner}/{repo}/installation`, `GET /orgs/{org}/installation`, or `GET /app/installations` endpoints. For more information, see "[AUTOTITLE](/rest/apps/apps)".
1. Import `App` from `octokit`. Create a new instance of `App`. In the following example, replace `APP_ID` with a reference to your app's ID. Replace `PRIVATE_KEY` with a reference to your app's private key.

   ```javascript copy
   import { App } from "octokit";

   const app = new App({
     appId: APP_ID,
     privateKey: PRIVATE_KEY,
   });
   ```

1. Use the `getInstallationOctokit` method to create an authenticated `octokit` instance. In the following example, replace `INSTALLATION_ID` with the ID of the installation of your app that you want to authenticate on behalf of.

   ```javascript copy
   const octokit = await app.getInstallationOctokit(INSTALLATION_ID);
   ```

1. Use an `octokit` method to make a request to the API.

   Your app must have the required permissions to use the endpoint. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/choosing-permissions-for-a-github-app)."

   For example, to make a request to the GraphQL API:

   ```javascript copy
   await octokit.graphql(`
     query {
       viewer {
         login
       }
     }
     `)
   ```

   For example, to make a request to the REST API:

   ```javascript copy
   await octokit.request("GET /meta")
   ```

### Using Octokit.js to authenticate in response to a webhook event

The Octokit.js SDK also passes a pre-authenticated `octokit` instance to webhook event handlers.

1. Get the ID of your {% data variables.product.prodname_github_app %}. You can find your app's ID on the settings page for your {% data variables.product.prodname_github_app %}. For more information about navigating to the settings page for your {% data variables.product.prodname_github_app %}, see "[AUTOTITLE](/apps/maintaining-github-apps/modifying-a-github-app-registration#navigating-to-your-github-app-settings)."
1. Generate a private key. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/managing-private-keys-for-github-apps)".
1. Get the webhook secret that you specified in your app's settings. For more information about webhook secrets, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/using-webhooks-with-github-apps#securing-your-webhooks-with-a-webhook-secret)."
1. Import `App` from `octokit`. Create a new instance of `App`. In the following example, replace `APP_ID` with a reference to your app's ID. Replace `PRIVATE_KEY` with a reference to your app's private key. Replace `WEBHOOK_SECRET` with the your app's webhook secret.

   ```javascript copy
   import { App } from "octokit";

   const app = new App({
     appId: APP_ID,
     privateKey: PRIVATE_KEY,
     webhooks: { WEBHOOK_SECRET },
   });
   ```

1. Use an `app.webhooks.*` method to handle webhook events. For more information, see [the Octokit.js README's Webhooks section](https://github.com/octokit/octokit.js#webhooks). For example, to create a comment on an issue when the issue is opened:

   ```javascript
   app.webhooks.on("issues.opened", ({ octokit, payload }) => {
     await octokit.request("POST /repos/{owner}/{repo}/issues/{issue_number}/comments", {
         owner: payload.repository.owner.login,
         repo: payload.repository.name,
         issue_number: payload.issue.number,
         body: `This is a bot post in response to this issue being opened.`,
         headers: {
           "x-github-api-version": "{{ allVersions[currentVersion].latestApiVersion }}",
         },
       }
     )
   });
   ```
