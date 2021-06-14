---
title: Authorizing OAuth Apps
intro: 'You can connect your {% data variables.product.product_name %} identity to third-party applications using OAuth. When authorizing an {% data variables.product.prodname_oauth_app %}, you should ensure you trust the application, review who it''s developed by, and review the kinds of information the application wants to access.'
redirect_from:
  - /articles/authorizing-oauth-apps
  - /github/authenticating-to-github/authorizing-oauth-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---
When an {% data variables.product.prodname_oauth_app %} wants to identify you by your {% data variables.product.product_name %} account, you'll see a page with the app's developer contact information and a list of the specific data that's being requested.

{% if currentVersion == "free-pro-team@latest" %}

{% tip %}

**Tip:** You must [verify your email address](/articles/verifying-your-email-address) before you can authorize an {% data variables.product.prodname_oauth_app %}.

{% endtip %}

{% endif %}

## {% data variables.product.prodname_oauth_app %} access

{% data variables.product.prodname_oauth_app %}s can have *read* or *write* access to your {% data variables.product.product_name %} data.

- **Read access** only allows an app to *look at* your data.
- **Write access** allows an app to *change* your data.

{% tip %}

**Tip:** {% data reusables.user_settings.review_oauth_tokens_tip %}

{% endtip %}

### About OAuth scopes

*Scopes* are named groups of permissions that an {% data variables.product.prodname_oauth_app %} can request to access both public and non-public data.

When you want to use an {% data variables.product.prodname_oauth_app %} that integrates with {% data variables.product.product_name %}, that app lets you know what type of access to your data will be required. If you grant access to the app, then the app will be able to perform actions on your behalf, such as reading or modifying data. For example, if you want to use an app that requests `user:email` scope, the app will have read-only access to your private email addresses. For more information, see "[About scopes for {% data variables.product.prodname_oauth_app %}s](/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps)."

{% tip %}

**Note:** Currently, you can't scope source code access to read-only.

{% endtip %}

{% data reusables.apps.oauth-token-limit %}

### Types of requested data

{% data variables.product.prodname_oauth_app %}s can request several types of data.

| Type of data | Description |
| --- | --- |
| Commit status | You can grant access for an app to report your commit status. Commit status access allows apps to determine if a build is a successful against a specific commit. Apps won't have access to your code, but they can read and write status information against a specific commit. |
| Deployments | Deployment status access allows apps to determine if a deployment is successful against a specific commit for public and private repositories. Apps won't have access to your code. |
| Gists | [Gist](https://gist.github.com) access allows apps to read or write to both your public and secret Gists. |
| Hooks | [Webhooks](/webhooks) access allows apps to read or write hook configurations on repositories you manage. |
| Notifications | Notification access allows apps to read your {% data variables.product.product_name %} notifications, such as comments on issues and pull requests. However, apps remain unable to access anything in your repositories. |
| Organizations and teams | Organization and teams access allows apps to access and manage organization and team membership. |
| Personal user data | User data includes information found in your user profile, like your name, e-mail address, and location. |
| Repositories | Repository information includes the names of contributors, the branches you've created, and the actual files within your repository. Apps can request access for either public or private repositories on a user-wide level. |
| Repository delete | Apps can request to delete repositories that you administer, but they won't have access to your code. |

## Requesting updated permissions

When {% data variables.product.prodname_oauth_app %}s request new access permissions, they will notify you of the differences between their current permissions and the new permissions.

{% if currentVersion == "free-pro-team@latest" %}

## {% data variables.product.prodname_oauth_app %}s and organizations

When you authorize an {% data variables.product.prodname_oauth_app %} for your personal user account, you'll also see how the authorization will affect each organization you're a member of.

- **For organizations *with* {% data variables.product.prodname_oauth_app %} access restrictions, you can request that organization admins approve the application for use in that organization.** If the organization does not approve the application, then the application will only be able to access the organization's public resources. If you're an organization admin, you can [approve the application](/articles/approving-oauth-apps-for-your-organization) yourself.

- **For organizations *without* {% data variables.product.prodname_oauth_app %} access restrictions, the application will automatically be authorized for access to that organization's resources.** For this reason, you should be careful about which {% data variables.product.prodname_oauth_app %}s you approve for access to your personal account resources as well as any organization resources.

If you belong to any organizations that enforce SAML single sign-on, you must have an active SAML session for each organization each time you authorize an {% data variables.product.prodname_oauth_app %}.

## Further reading

- "[About {% data variables.product.prodname_oauth_app %} access restrictions](/articles/about-oauth-app-access-restrictions)"
- "[{% data variables.product.prodname_marketplace %} support](/articles/github-marketplace-support)"

{% endif %}
