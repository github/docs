---
title: Differences between GitHub Apps and OAuth Apps
intro: 'Understanding the differences between {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %} will help you decide which app you want to create. An {% data variables.product.prodname_oauth_app %} acts as a GitHub user, whereas a {% data variables.product.prodname_github_app %} uses its own identity when installed on an organization or on repositories within an organization.'
redirect_from:
  - /early-access/integrations/integrations-vs-oauth-applications
  - /apps/building-integrations/setting-up-a-new-integration/about-choosing-an-integration-type
  - /apps/differences-between-apps
  - /developers/apps/differences-between-github-apps-and-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
  - OAuth Apps
shortTitle: GitHub Apps & OAuth Apps
---
## Who can install GitHub Apps and authorize OAuth Apps?

You can install GitHub Apps in your personal account or organizations you own. If you have admin permissions in a repository, you can install GitHub Apps on organization accounts. If a GitHub App is installed in a repository and requires organization permissions, the organization owner must approve the application.

{% data reusables.apps.app_manager_role %}

By contrast, users _authorize_ OAuth Apps, which gives the app the ability to act as the authenticated user. For example, you can authorize an OAuth App that finds all notifications for the authenticated user. You can always revoke permissions from an OAuth App.

{% data reusables.apps.deletes_ssh_keys %}

| GitHub Apps | OAuth Apps |
| ----- | ------ |
| You must be an organization owner or have admin permissions in a repository to install a GitHub App on an organization. If a GitHub App is installed in a repository and requires organization permissions, the organization owner must approve the application. | You can authorize an OAuth app to have access to resources. |
| You can install a GitHub App on your personal repository. | You can authorize an OAuth app to have access to resources.|
| You must be an organization owner, personal repository owner, or have admin permissions in a repository to uninstall a GitHub App and remove its access. | You can delete an OAuth access token to remove access. |
| You must be an organization owner or have admin permissions in a repository to request a GitHub App installation. | If an organization application policy is active, any organization member can request to install an OAuth App on an organization. An organization owner must approve or deny the request. |

## What can GitHub Apps and OAuth Apps access?

Account owners can use a {% data variables.product.prodname_github_app %} in one account without granting access to another. For example, you can install a third-party build service on your employer's organization, but decide not to grant that build service access to repositories in your personal account. A GitHub App remains installed if the person who set it up leaves the organization.

An _authorized_ OAuth App has access to all of the user's or organization owner's accessible resources.

| GitHub Apps | OAuth Apps |
| ----- | ------ |
| Installing a GitHub App grants the app access to a user or organization account's chosen repositories. | Authorizing an OAuth App grants the app access to the user's accessible resources. For example, repositories they can access. |
| The installation token from a GitHub App loses access to resources if an admin removes repositories from the installation. | An OAuth access token loses access to resources when the user loses access, such as when they lose write access to a repository. |
| Installation access tokens are limited to specified repositories with the permissions chosen by the creator of the app. | An OAuth access token is limited via scopes. |
| GitHub Apps can request separate access to issues and pull requests without accessing the actual contents of the repository. | OAuth Apps need to request the `repo` scope to get access to issues, pull requests, or anything owned by the repository. |
| GitHub Apps aren't subject to organization application policies. A GitHub App only has access to the repositories an organization owner has granted. | If an organization application policy is active, only an organization owner can authorize the installation of an OAuth App. If installed, the OAuth App gains access to anything visible to the token the organization owner has within the approved organization. |
| A GitHub App receives a webhook event when an installation is changed or removed. This tells the app creator when they've received more or less access to an organization's resources. | OAuth Apps can lose access to an organization or repository at any time based on the granting user's changing access. The OAuth App will not inform you when it loses access to a resource. |

## Token-based identification

{% note %}

**Note:** GitHub Apps can also use a user-based token. For more information, see "[Identifying and authorizing users for GitHub Apps](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)."

{% endnote %}

| GitHub Apps | OAuth Apps |
| ----- | ----------- |
| A GitHub App can request an installation access token by using a private key with a JSON web token format out-of-band. | An OAuth app can exchange a request token for an access token after a redirect via a web request. |
| An installation token identifies the app as the GitHub Apps bot, such as @jenkins-bot. | An access token identifies the app as the user who granted the token to the app, such as @octocat. |
| Installation tokens expire after a predefined amount of time (currently 1 hour). | OAuth tokens remain active until they're revoked by the customer. |
| {% data variables.product.prodname_github_apps %} installed on organizations or repositories are subject to rate limits for server-to-server requests. For more information, see "[Rate limits for {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/rate-limits-for-github-apps)." | OAuth tokens use the user's rate limit of {% ifversion fpt or ghec or ghes %}5,000{% elsif ghae %}15,000{% endif %} requests per hour. |
| Rate limit increases can be granted both at the GitHub Apps level (affecting all installations) and at the individual installation level. | Rate limit increases are granted per OAuth App. Every token granted to that OAuth App gets the increased limit. |
| {% data variables.product.prodname_github_apps %} can authenticate on behalf of the user, which is called a user-to-server request. The flow to authorize is the same as the OAuth App authorization flow. User-to-server tokens can expire and be renewed with a refresh token. For more information, see "[Refreshing user-to-server access tokens](/apps/building-github-apps/refreshing-user-to-server-access-tokens/)" and "[Identifying and authorizing users for GitHub Apps](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)." | The OAuth flow used by {% data variables.product.prodname_oauth_apps %} authorizes an {% data variables.product.prodname_oauth_app %} on behalf of the user. This is the same flow used in {% data variables.product.prodname_github_app %} user-to-server authorization. |

## Requesting permission levels for resources

Unlike OAuth apps, GitHub Apps have targeted permissions that allow them to request access only to what they need. For example, a Continuous Integration (CI) GitHub App can request read access to repository content and write access to the status API. Another GitHub App can have no read or write access to code but still have the ability to manage issues, labels, and milestones. OAuth Apps can't use granular permissions.

| Access | GitHub Apps (`read` or `write` permissions) | OAuth Apps |
| ------ | ----- | ----------- |
| **For access to public repositories** | Public repository needs to be chosen during installation. | `public_repo` scope. |
| **For access to repository code/contents** | Repository contents | `repo` scope. |
| **For access to issues, labels, and milestones** | Issues | `repo` scope. |
| **For access to pull requests, labels, and milestones** | Pull requests | `repo` scope. |
| **For access to commit statuses (for CI builds)** | Commit statuses | `repo:status` scope. |
| **For access to deployments and deployment statuses** | Deployments | `repo_deployment` scope. |
| **To receive events via a webhook** | A GitHub App includes a webhook by default. | `write:repo_hook` or `write:org_hook` scope. |

## Repository discovery

| GitHub Apps | OAuth Apps |
| ----- | ----------- |
| GitHub Apps can look at `/installation/repositories` to see repositories the installation can access. | OAuth Apps can look at `/user/repos` for a user view or `/orgs/:org/repos` for an organization view of accessible repositories. |
| GitHub Apps receive webhooks when repositories are added or removed from the installation. | OAuth Apps create organization webhooks for notifications when a new repository is created within an organization. |

## Webhooks

| GitHub Apps | OAuth Apps |
| ----- | ----------- |
| By default, GitHub Apps have a single webhook that receives the events they are configured to receive for every repository they have access to. | OAuth Apps request the webhook scope to create a repository webhook for each repository they need to receive events from. |
| GitHub Apps receive certain organization-level events with the organization member's permission. | OAuth Apps request the organization webhook scope to create an organization webhook for each organization they need to receive organization-level events from. |
| Webhooks are automatically disabled when the GitHub App is uninstalled. | Webhooks are not automatically disabled if an OAuth App's access token is deleted, and there is no way to clean them up automatically. You will have to ask users to do this manually.|

## Git access

| GitHub Apps | OAuth Apps |
| ----- | ----------- |
| GitHub Apps ask for repository contents permission and use your installation token to authenticate via [HTTP-based Git](/apps/building-github-apps/authenticating-with-github-apps/#http-based-git-access-by-an-installation). | OAuth Apps ask for `write:public_key` scope and [Create a deploy key](/rest/reference/deployments#create-a-deploy-key) via the API. You can then use that key to perform Git commands. |
| The token is used as the HTTP password. | The token is used as the HTTP username. |

## Machine vs. bot accounts

Machine user accounts are OAuth-based personal accounts that segregate automated systems using GitHub's user system.

Bot accounts are specific to GitHub Apps and are built into every GitHub App.

| GitHub Apps | OAuth Apps |
| ----- | ----------- |
| GitHub App bots do not consume a {% data variables.product.prodname_enterprise %} seat. | A machine user account consumes a {% data variables.product.prodname_enterprise %} seat. |
| Because a GitHub App bot is never granted a password, a customer can't sign into it directly. | A machine user account is granted a username and password to be managed and secured by the customer. |
