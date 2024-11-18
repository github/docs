---
title: Authenticating as a GitHub App
intro: You can authenticate as a {% data variables.product.prodname_github_app %} in order to generate an installation access token or manage your app.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Authenticate as an app
---

## About authentication as a {% data variables.product.prodname_github_app %}

You must authenticate as a {% data variables.product.prodname_github_app %} in order to make REST API requests as the application. For example, if you want to use the API to generate an installation access token for accessing organization resources, list installations across organizations for your app, or suspend an app installation, you must authenticate as an app.

If a REST API endpoint requires you to authenticate as an app, the documentation for that endpoint will indicate that you must use a JWT to access the endpoint. The GraphQL API does not support any queries or mutations that require you to authenticate as an app.

## Using a JSON Web Token (JWT) to authenticate as a {% data variables.product.prodname_github_app %}

1. Generate a JSON Web Token (JWT) for your app. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-json-web-token-jwt-for-a-github-app)."
1. Include the JWT in the `Authorization` header of your request. In the following example, replace `YOUR_JWT` with your JWT.

   ```shell
   curl --request GET \
   --url "{% data variables.product.rest_url %}/app/installations" \
   --header "Accept: application/vnd.github+json" \
   --header "Authorization: Bearer YOUR_JWT" \
   --header "X-GitHub-Api-Version: {{ allVersions[currentVersion].latestApiVersion }}"
   ```

## Using the Octokit.js SDK to authenticate as a {% data variables.product.prodname_github_app %}

You can use {% data variables.product.company_short %}'s Octokit.js SDK to authenticate as a {% data variables.product.prodname_github_app %}. One advantage of using the SDK to authenticate is that you do not need to generate a JSON web token (JWT) yourself. Additionally, the SDK will take care of regenerating the JWT when it expires.

{% note %}

**Note**: You must install and import `octokit` in order to use the Octokit.js library. The following example uses import statements in accordance with ES6. For more information about different installation and import methods, see [Usage](https://github.com/octokit/octokit.js/#usage) in the octokit/octokit repository.

{% endnote %}

1. Get the ID of your app. You can find your app's ID on the settings page for your {% data variables.product.prodname_github_app %}. For more information about navigating to the settings page for your {% data variables.product.prodname_github_app %}, see "[AUTOTITLE](/apps/maintaining-github-apps/modifying-a-github-app-registration#navigating-to-your-github-app-settings)."
1. Generate a private key. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/managing-private-keys-for-github-apps)."
1. Import `App` from `octokit`.

   ```javascript copy
   import { App } from "octokit";
   ```

1. Create a new instance of `App`. In the following example, replace `APP_ID` with a reference to your app's ID. Replace `PRIVATE_KEY` with a reference to the value of your app's private key.

   ```javascript copy
    const app = new App({
     appId: APP_ID,
     privateKey: PRIVATE_KEY,
   });
   ```

1. Use an `octokit` method to make a request to a REST API endpoint that requires a JWT. For example:

   ```javascript copy
   await app.octokit.request("/app")
   ```
