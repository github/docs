---
title: Authorizing OAuth apps
intro: 'You can connect your {% data variables.product.product_name %} identity to third-party applications using OAuth. When authorizing an {% data variables.product.prodname_oauth_app %}, you should ensure you trust the application, review who it''s developed by, and review the kinds of information the application wants to access.'
redirect_from:
  - /articles/authorizing-oauth-apps
  - /github/authenticating-to-github/authorizing-oauth-apps
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps
  - /authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
---
When an {% data variables.product.prodname_oauth_app %} wants to identify you by your account on {% data variables.location.product_location %}, you'll see a page with the app's developer contact information and a list of the specific data that's being requested.

{% ifversion fpt or ghec %}

{% tip %}

**Tip:** You must [verify your email address](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/verifying-your-email-address) before you can authorize an {% data variables.product.prodname_oauth_app %}.

{% endtip %}

{% endif %}

## {% data variables.product.prodname_oauth_app %} access

{% data variables.product.prodname_oauth_apps %} can have _read_ or _write_ access to your {% data variables.product.product_name %} data.

* **Read access** only allows an app to _look at_ your data.
* **Write access** allows an app to _change_ your data.

{% tip %}

**Tip:** {% data reusables.user-settings.review_oauth_tokens_tip %}

{% endtip %}

### About OAuth scopes

_Scopes_ are named groups of permissions that an {% data variables.product.prodname_oauth_app %} can request to access both public and non-public data.

When you want to use an {% data variables.product.prodname_oauth_app %} that integrates with {% data variables.product.product_name %}, that app lets you know what type of access to your data will be required. If you grant access to the app, then the app will be able to perform actions on your behalf, such as reading or modifying data. For example, if you want to use an app that requests `user:email` scope, the app will have read-only access to your private email addresses. For more information, see "[AUTOTITLE](/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps)."

{% tip %}

**Note:** Currently, you can't scope source code access to read-only.

{% endtip %}

{% data reusables.user-settings.token_access_capabilities %} For example, an application can create an access token that is configured with an `admin:org` scope, but if the user of the application is not an organization owner, the application will not be granted administrative access to the organization.

{% data reusables.apps.oauth-token-limit %}

### Types of requested data

{% data variables.product.prodname_oauth_apps %} can request several types of data.

| Type of data | Description |
| --- | --- |
| Commit status | You can grant access for an app to report your commit status. Commit status access allows apps to determine if a build is a successful against a specific commit. Apps won't have access to your code, but they can read and write status information against a specific commit. |
| Deployments | Deployment status access allows apps to determine if a deployment is successful against a specific commit for public and private repositories. Apps won't have access to your code. |
| Gists | [Gist](https://gist.github.com) access allows apps to read or write to both your public and secret Gists. |
| Hooks | [Webhooks](/webhooks-and-events/webhooks/about-webhooks) access allows apps to read or write hook configurations on repositories you manage. |
| Notifications | Notification access allows apps to read your {% data variables.product.product_name %} notifications, such as comments on issues and pull requests. However, apps remain unable to access anything in your repositories. |
| Organizations and teams | Organization and teams access allows apps to access and manage organization and team membership. |
| Personal user data | User data includes information found in your user profile, like your name, e-mail address, and location. |
| Repositories | Repository information includes the names of contributors, the branches you've created, and the actual files within your repository. Apps can request access for either public or private repositories on a user-wide level. |
| Repository delete | Apps can request to delete repositories that you administer, but they won't have access to your code. |
| {% ifversion projects-oauth-scope %} |
| Projects | Access to user and organization {% data variables.projects.projects_v2 %}. Apps can request either read/write or read only access. |
| {% endif %} |

## Requesting updated permissions

When {% data variables.product.prodname_oauth_apps %} request new access permissions, they will notify you of the differences between their current permissions and the new permissions.

{% ifversion fpt or ghec %}

## {% data variables.product.prodname_oauth_apps %} and organizations

When you authorize an {% data variables.product.prodname_oauth_app %} for your personal account, you'll also see how the authorization will affect each organization you're a member of.

* **For organizations _with_ {% data variables.product.prodname_oauth_app %} access restrictions, you can request that organization owners approve the application for use in that organization.** If the organization does not approve the application, then the application will only be able to access the organization's public resources. If you're an organization owner, you can [approve the application](/organizations/managing-oauth-access-to-your-organizations-data/approving-oauth-apps-for-your-organization) yourself.

* **For organizations _without_ {% data variables.product.prodname_oauth_app %} access restrictions, the application will automatically be authorized for access to that organization's resources.** For this reason, you should be careful about which {% data variables.product.prodname_oauth_apps %} you approve for access to your personal account resources as well as any organization resources.

If you belong to any organizations with SAML single sign-on (SSO) enabled, and you have created a linked identity for that organization by authenticating via SAML in the past, you must have an active SAML session for each organization each time you authorize an {% data variables.product.prodname_oauth_app %}.

{% note %}

**Note:** If you're encountering issues with an authorized {% data variables.product.prodname_oauth_app %} or {% data variables.product.prodname_github_app %} accessing an organization that is protected by SAML, you may need to revoke the app from your [Authorized {% data variables.product.prodname_github_apps %}](https://github.com/settings/applications) or [Authorized {% data variables.product.prodname_oauth_apps %}](https://github.com/settings/apps/authorizations) page, visit the organization to authenticate and establish an active SAML session, and then attempt to reauthorize the app by accessing it.

{% endnote %}

## Further reading

* "[AUTOTITLE](/organizations/managing-oauth-access-to-your-organizations-data/about-oauth-app-access-restrictions)"
* "[AUTOTITLE](/apps/using-github-apps/authorizing-github-apps)"
* "[AUTOTITLE](/support/learning-about-github-support/github-marketplace-support)"

{% endif %}
