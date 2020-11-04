---
title: Connecting with third-party applications
intro: 'You can connect your {% data variables.product.product_name %} identity to third-party applications using OAuth. When authorizing one of these applications, you should ensure you trust the application, review who it''s developed by, and review the kinds of information the application wants to access.'
redirect_from:
  - /articles/connecting-with-third-party-applications
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

When a third-party application wants to identify you by your {% data variables.product.product_name %} login, you'll see a page with the developer contact information and a list of the specific data that's being requested.

### Contacting the application developer

Because an application is developed by a third-party who isn't {% data variables.product.product_name %}, we don't know exactly how an application uses the data it's requesting access to. You can use the developer information at the top of the page to contact the application admin if you have questions or concerns about their application.

![{% data variables.product.prodname_oauth_app %} owner information](/assets/images/help/platform/oauth_owner_bar.png)

If the developer has chosen to supply it, the right-hand side of the page provides a detailed description of the application, as well as its associated website.

![OAuth application information and website](/assets/images/help/platform/oauth_app_info.png)

### Types of application access and data

Applications can have *read* or *write* access to your {% data variables.product.product_name %} data.

- **Read access** only allows an application to *look at* your data.
- **Write access** allows an application to *change* your data.

#### About OAuth scopes

*Scopes* are named groups of permissions that an application can request to access both public and non-public data.

When you want to use a third-party application that integrates with {% data variables.product.product_name %}, that application lets you know what type of access to your data will be required. If you grant access to the application, then the application will be able to perform actions on your behalf, such as reading or modifying data. For example, if you want to use an app that requests `user:email` scope, the app will have read-only access to your private email addresses. For more information, see "[About scopes for {% data variables.product.prodname_oauth_app %}s](//apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps)."

{% tip %}

**Note:** Currently, you can't scope source code access to read-only.

{% endtip %}

#### Types of requested data

There are several types of data that applications can request.

![OAuth access details](/assets/images/help/platform/oauth_access_types.png)

{% tip %}

**Tip:** {% data reusables.user_settings.review_oauth_tokens_tip %}

{% endtip %}

| Type of data            | 설명                                                                                                                                                                                                                                                                                                                                      |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Commit status           | You can grant access for a third-party application to report your commit status. Commit status access allows applications to determine if a build is a successful against a specific commit. Applications won't have access to your code, but they <em>can</em> read and write status information against a specific commit. |
| Deployments             | Deployment status access allows applicationss to determine if a deployment is successful against a specific commit for public and private repositories. Applicationss won't have access to your code.                                                                                                                                   |
| Gists                   | [Gist](https://gist.github.com) access allows applications to read or write to both your public and secret Gists.                                                                                                                                                                                                                       |
| Hooks                   | [Webhooks](/webhooks) access allows applications to read or write hook configurations on repositories you manage.                                                                                                                                                                                                                       |
| 알림(Notifications)       | Notification access allows applicationss to read your {% data variables.product.product_name %} notifications, such as comments on issues and pull requests. However, applications remain unable to access anything in your repositories.                                                                                               |
| Organizations and teams | Organization and teams access allows apps to access and manage organization and team membership.                                                                                                                                                                                                                                        |
| Personal user data      | User data includes information found in your user profile, like your name, e-mail address, and location.                                                                                                                                                                                                                                |
| Repositories            | Repository information includes the names of contributors, the branches you've created, and the actual files within your repository. Applications can request access for either public or private repositories on a user-wide level.                                                                                                    |
| Repository delete       | Applications can request to delete repositories that you administer, but they won't have access to your code.                                                                                                                                                                                                                           |

### Requesting updated permissions

Applications can request new access privileges. When asking for updated permissions, the application will notify you of the differences.

![Changing third-party application access](/assets/images/help/platform/oauth_existing_access_pane.png)
