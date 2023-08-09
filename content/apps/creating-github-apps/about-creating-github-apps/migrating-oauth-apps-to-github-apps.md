---
title: Migrating OAuth apps to GitHub Apps
intro: 'Learn about the advantages of migrating your {% data variables.product.prodname_oauth_app %} to a {% data variables.product.prodname_github_app %}, and learn how to migrate your {% data variables.product.prodname_oauth_app %}.'
redirect_from:
  - /apps/migrating-oauth-apps-to-github-apps
  - /developers/apps/migrating-oauth-apps-to-github-apps
  - /developers/apps/getting-started-with-apps/migrating-oauth-apps-to-github-apps
  - /apps/creating-github-apps/guides/migrating-oauth-apps-to-github-apps
  - /apps/creating-github-apps/setting-up-a-github-app/migrating-oauth-apps-to-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: 'Migrate from {% data variables.product.prodname_oauth_apps %}'
---

## Benefits of migrating from {% data variables.product.prodname_oauth_apps %} to {% data variables.product.prodname_github_apps %}

{% data variables.product.prodname_github_apps %} are the recommended way to integrate with {% data variables.product.company_short %}. {% data variables.product.prodname_github_apps %} offer many advantages over {% data variables.product.prodname_oauth_apps %}, including:

- enhanced security features, like fine-grained permissions, choice over repository access, and short lived tokens
- the ability to act independently of or on behalf of a user
- scalable rate limits
- built-in webhooks

For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/about-creating-github-apps#using-a-github-app-instead-of-an-oauth-app)."

## Converting an {% data variables.product.prodname_oauth_app %} to a {% data variables.product.prodname_github_app %}

The following steps provide an overview of how to migrate from an {% data variables.product.prodname_oauth_app %} to a {% data variables.product.prodname_github_app %}. The specific steps depend on your app.

### 1. Review your {% data variables.product.prodname_oauth_app %}

Re-familiarize yourself with the code for your {% data variables.product.prodname_oauth_app %}. The API requests that your {% data variables.product.prodname_oauth_app %} makes will help you decide what permissions to select for your {% data variables.product.prodname_github_app %}.

Additionally, there are a few REST API endpoints that are not available for {% data variables.product.prodname_oauth_apps %}. Verify that any REST endpoints that you use are available for {% data variables.product.prodname_github_apps %} by reviewing "[AUTOTITLE](/rest/overview/endpoints-available-for-github-apps)."

### 2. Register a {% data variables.product.prodname_github_app %}

Register a new {% data variables.product.prodname_github_app %}. For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/creating-a-github-app)."

Compared to an {% data variables.product.prodname_oauth_app %}, you have more control over {% data variables.product.prodname_github_app %} settings. Some key additions are:

- Unlike an {% data variables.product.prodname_oauth_app %}, which always acts on behalf of a user, you can make your {% data variables.product.prodname_github_app %} take actions as itself or on behalf of a user. If you do not want your new {% data variables.product.prodname_github_app %} to take actions on behalf of a user, you can skip the "Identifying and authorizing users" settings. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/about-authentication-with-a-github-app)."

- You can use webhooks to notify your {% data variables.product.prodname_github_app %} when specific events occur. Unlike webhooks for {% data variables.product.prodname_oauth_apps %}, which you must configure via the API for each repository or organization, webhooks are built into {% data variables.product.prodname_github_apps %}. When you register your {% data variables.product.prodname_github_app %}, you can select the webhook events that you want to receive. Additionally, if your {% data variables.product.prodname_oauth_app %} currently uses polling to determine if an event had occurred, consider subscribing to webhooks instead to help your {% data variables.product.prodname_github_app %} stay within the rate limit. For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/using-webhooks-with-github-apps)."

- With an {% data variables.product.prodname_oauth_app %}, you request scopes when a user authorizes your app. With a {% data variables.product.prodname_github_app %}, you specify permissions in the app settings. These permissions are more granular than scopes and enable you to only select the permissions that your app needs. Additionally, these permissions are mapped to REST API endpoints and webhook events, so you can easily determine what permissions your {% data variables.product.prodname_github_app %} needs in order to access a specific REST API endpoint or subscribe to a specific webhook. Permissions are not currently documented for GraphQL requests. For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/choosing-permissions-for-a-github-app)."

### 3. Modify the code for your app

Once you have registered a {% data variables.product.prodname_github_app %}, adapt the code from your old {% data variables.product.prodname_oauth_app %} to work with your new {% data variables.product.prodname_github_app %}.

#### Update authentication

You will need to update your app's code to handle API authentication for your {% data variables.product.prodname_github_app %}. A {% data variables.product.prodname_github_app %} can authenticate in three ways:

- As the app itself, in order to get or modify details about the {% data variables.product.prodname_github_app %} registration or to create an installation access token. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app)."
- As an app installation, in order to take actions on behalf of itself. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation)."
- On behalf of a user, in order to attribute actions to a user. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-with-a-github-app-on-behalf-of-a-user)."

If you are using {% data variables.product.company_short %}'s official Octokit.js library, you can use the built-in `App` object to authenticate. For examples, see "[AUTOTITLE](/rest/guides/scripting-with-the-rest-api-and-javascript)" and "[AUTOTITLE](/apps/creating-github-apps/guides/building-a-github-app-that-responds-to-webhook-events)."

#### Review rate limits

Review the differences in rate limits between {% data variables.product.prodname_oauth_apps %} and {% data variables.product.prodname_github_apps %}. {% data variables.product.prodname_github_apps %} use sliding rules for rate limits, which can increase based on the number of repositories and number of users in the organization. For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/rate-limits-for-github-apps)."

If possible, consider using conditional requests and subscribing to webhooks instead of polling to help you stay within rate limits. For more information about conditional requests, see "[AUTOTITLE](/rest/overview/resources-in-the-rest-api#conditional-requests)." For more information about using webhooks with your {% data variables.product.prodname_github_app %}, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/using-webhooks-with-github-apps)" and "[AUTOTITLE](/apps/creating-github-apps/guides/building-a-github-app-that-responds-to-webhook-events)."

#### Test your code

Test your new {% data variables.product.prodname_github_app %} to make sure that your code works as expected.

### 4. Publicize your new {% data variables.product.prodname_github_app %}

If you want other accounts to be able to use your new {% data variables.product.prodname_github_app %}, make sure that your app is public.{% ifversion fpt or ghec %} If you want to make your {% data variables.product.prodname_github_app %} more discoverable, list your app in {% data variables.product.prodname_marketplace %}. {% endif %}For more information, see {% ifversion ghec or fpt %}"[AUTOTITLE](/apps/publishing-apps-to-github-marketplace/github-marketplace-overview/about-github-marketplace)" and {% endif %}"[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/making-a-github-app-public-or-private)."

### 5. Instruct your users to migrate

Once your new {% data variables.product.prodname_github_app %} is ready, instruct users of your old {% data variables.product.prodname_oauth_app %} to migrate to your new {% data variables.product.prodname_github_app %}. There is not a way to automatically migrate your users. Each user must install and/or authorize your {% data variables.product.prodname_github_app %} on their own.

As the app owner, you should include calls to action to encourage your users to install/authorize the new {% data variables.product.prodname_github_app %} and revoke authorization for the old {% data variables.product.prodname_oauth_app %}. You should also update any documentation or user interface elements.

#### Prompt users to install your {% data variables.product.prodname_github_app %}

If you want your {% data variables.product.prodname_github_app %} to make API requests on behalf of itself or access organization or repository resources, the user must install your {% data variables.product.prodname_github_app %}. When a user installs a {% data variables.product.prodname_github_app %} on their account or organization, they choose which repositories the app can access, and they grant the app the organization and repository permissions that it requested.

To help your users install your {% data variables.product.prodname_github_app %}, you can add a link to your app's webpage that users can click to install the {% data variables.product.prodname_github_app %}. The format of the install URL is `{% data variables.product.oauth_host_code %}/{% ifversion ghes or ghae %}github-apps{% else %}apps{% endif %}/YOUR_APP_NAME/installations/new`. Replace `YOUR_APP_NAME` with the sluggified name of your {% data variables.product.prodname_github_app %}, which you can find in the "Public link" field on the settings page for your {% data variables.product.prodname_github_app %}.

To pre-select any repositories your {% data variables.product.prodname_oauth_app %} had access to, you can append `/permissions` and query parameters to the install URL. This helps users grant your {% data variables.product.prodname_github_app %} access to repositories that your {% data variables.product.prodname_oauth_app %} already has access to. The query parameters are:

- `suggested_target_id`: The ID of the user or organization that is installing your {% data variables.product.prodname_github_app %}. This parameter is required.
- `repository_ids[]`: The repository IDs to select for the installation. If omitted, all repositories are selected. The maximum number of repositories that can be pre-selected is 100. To get a list of repositories that your {% data variables.product.prodname_oauth_app %} has access to, use the [List repositories for the authenticated user](/rest/repos#list-repositories-for-the-authenticated-user) and [List organization repositories](/rest/repos#list-organization-repositories) endpoints.

For example: `{% data variables.product.oauth_host_code %}/{% ifversion ghes or ghae %}github-apps{% else %}apps{% endif %}/YOUR_APP_NAME/installations/new/permissions?suggested_target_id=ID_OF_USER_OR_ORG&repository_ids[]=REPO_A_ID&repository_ids[]=REPO_B_ID`.

For more information about installing {% data variables.product.prodname_github_apps %}, see {% ifversion ghec or fpt %}"[AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-github-marketplace-for-your-personal-account)," "[AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-github-marketplace-for-your-organizations),"{% endif %} "[AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-a-third-party)" and "[AUTOTITLE](/apps/using-github-apps/installing-your-own-github-app)."

#### Prompt users to authorize your app

If you want your {% data variables.product.prodname_github_app %} to make API requests on behalf of a user, the user must authorize the app. When a user authorizes an app, they grant the app permission to act on their behalf, and they grant the account permissions that the app requested. If the app is installed on an organization account, each user within that organization must authorize the app in order for the app to act on their behalf.

To prompt users to authorize your app, you will lead them through the web application flow or device flow. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app)."

For more information about authorizing {% data variables.product.prodname_github_apps %}, see "[AUTOTITLE](/apps/using-github-apps/authorizing-github-apps)."

#### Encourage your users to revoke {% data variables.product.prodname_oauth_app %} access

You should also encourage your users to revoke access for your old {% data variables.product.prodname_oauth_app %}. This will help you fully transition away from your {% data variables.product.prodname_oauth_app %} and will help keep your users' data secure. For more information, see "[AUTOTITLE](/apps/oauth-apps/using-oauth-apps/reviewing-your-authorized-applications-oauth)."

#### Update any interfaces or documentation

You should update any user interface or documentation related to your app to reflect the change from an {% data variables.product.prodname_oauth_app %} to {% data variables.product.prodname_github_app %}.

### 6. Remove webhooks for your old {% data variables.product.prodname_oauth_app %}

When a user installs your {% data variables.product.prodname_github_app %} and grants access to a repository, you should remove any webhooks for your old {% data variables.product.prodname_oauth_app %}. If your new {% data variables.product.prodname_github_app %} and your old {% data variables.product.prodname_oauth_app %} respond to webhooks for the same event, the user may observe duplicate behavior.

To remove repository webhooks, you can listen for the `installation_repositories` webhook with the `added` action. When your {% data variables.product.prodname_github_app %} receives that event, you can use the REST API to delete the webhook on those repositories for your {% data variables.product.prodname_oauth_app %}. For more information, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads?actionType=added#installation_repositories)" and "[AUTOTITLE](/rest/webhooks#delete-a-repository-webhook)."

Similarly, to remove organization webhooks, you can listen for the `installation` webhook with the `created` action. When your {% data variables.product.prodname_github_app %} receives that event for an organization, you can use the REST API to delete the webhook on that organization and corresponding repositories for your {% data variables.product.prodname_oauth_app %}. For more information, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads?actionType=created#installation)," "[AUTOTITLE](/rest/orgs/webhooks#delete-an-organization-webhook)," and "[AUTOTITLE](/rest/webhooks#delete-a-repository-webhook)."

### 7. Delete your old {% data variables.product.prodname_oauth_app %}

Once your users have migrated to your new {% data variables.product.prodname_github_app %}, you should delete your old {% data variables.product.prodname_oauth_app %}. This will help avoid abuse of the {% data variables.product.prodname_oauth_app %}'s credentials. This action will also revoke all of the {% data variables.product.prodname_oauth_app %}'s remaining authorizations. For more information, see "[AUTOTITLE](/apps/oauth-apps/maintaining-oauth-apps/deleting-an-oauth-app)." If your {% data variables.product.prodname_oauth_app %} is listed on {% data variables.product.prodname_marketplace %}, you may need to contact {% data variables.contact.github_support %} to remove your app from the marketplace first.
