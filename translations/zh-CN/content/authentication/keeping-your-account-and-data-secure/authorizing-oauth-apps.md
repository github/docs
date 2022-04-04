---
title: 授权第三方登录应用
intro: '通过使用 OAuth，你可以连接 {% data variables.product.product_name %} 身份到第三方应用。当授权 {% data variables.product.prodname_oauth_app %}, 你必须确信你信任这个第三方应用、检查是谁开发的以及应用可以获取你的哪方面的信息。'
redirect_from:
  - /articles/authorizing-oauth-apps
  - /github/authenticating-to-github/authorizing-oauth-apps
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
---
当一个{% data variables.product.prodname_oauth_app %}想要你授权你在{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}的账号时，你将会看到一个有开发者的联系信息和请求流量的的页面。

{% ifversion fpt or ghec %}

{% tip %}

**小提示：** 你必须[验证你的邮箱地址](/articles/verifying-your-email-address)当你准备授权一个{% data variables.product.prodname_oauth_app %}时。

{% endtip %}

{% endif %}

## {% data variables.product.prodname_oauth_app %} access

{% data variables.product.prodname_oauth_apps %}可以拥有你的{% data variables.product.product_name %}账号数据的*读取*或*写入*权限。

- **读取权限**只允许一个应用*查看*你的数据。
- **写入权限**允许一个应用*更改*你的数据。

{% tip %}

**Tip:** {% data reusables.user-settings.review_oauth_tokens_tip %}

{% endtip %}

### About OAuth scopes

*Scopes* are named groups of permissions that an {% data variables.product.prodname_oauth_app %} can request to access both public and non-public data.

When you want to use an {% data variables.product.prodname_oauth_app %} that integrates with {% data variables.product.product_name %}, that app lets you know what type of access to your data will be required. If you grant access to the app, then the app will be able to perform actions on your behalf, such as reading or modifying data. For example, if you want to use an app that requests `user:email` scope, the app will have read-only access to your private email addresses. For more information, see "[About scopes for {% data variables.product.prodname_oauth_apps %}](/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps)."

{% tip %}

**Note:** Currently, you can't scope source code access to read-only.

{% endtip %}

{% data reusables.apps.oauth-token-limit %}

### Types of requested data

{% data variables.product.prodname_oauth_apps %} can request several types of data.

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

When {% data variables.product.prodname_oauth_apps %} request new access permissions, they will notify you of the differences between their current permissions and the new permissions.

{% ifversion fpt or ghec %}

## {% data variables.product.prodname_oauth_apps %} and organizations

When you authorize an {% data variables.product.prodname_oauth_app %} for your personal user account, you'll also see how the authorization will affect each organization you're a member of.

- **For organizations *with* {% data variables.product.prodname_oauth_app %} access restrictions, you can request that organization admins approve the application for use in that organization.** If the organization does not approve the application, then the application will only be able to access the organization's public resources. If you're an organization admin, you can [approve the application](/articles/approving-oauth-apps-for-your-organization) yourself.

- **For organizations *without* {% data variables.product.prodname_oauth_app %} access restrictions, the application will automatically be authorized for access to that organization's resources.** For this reason, you should be careful about which {% data variables.product.prodname_oauth_apps %} you approve for access to your personal account resources as well as any organization resources.

If you belong to any organizations that enforce SAML single sign-on, you must have an active SAML session for each organization each time you authorize an {% data variables.product.prodname_oauth_app %}.

{% note %}

**Note:** If you are encountering errors authenticating to an organization that enforces SAML single sign-on, you may need to revoke the OAuth App from your [account settings page](https://github.com/settings/applications) and repeat the authentication flow to reauthorize the app.

{% endnote %}

## Further reading

- "[About {% data variables.product.prodname_oauth_app %} access restrictions](/articles/about-oauth-app-access-restrictions)"
- "[Authorizing GitHub Apps](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps)"
- "[{% data variables.product.prodname_marketplace %} support](/articles/github-marketplace-support)"

{% endif %}
