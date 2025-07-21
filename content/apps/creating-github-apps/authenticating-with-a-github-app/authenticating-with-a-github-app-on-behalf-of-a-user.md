---
title: Authenticating with a GitHub App on behalf of a user
shortTitle: Authenticate on behalf of users
intro: '{% data reusables.shortdesc.identifying_and_authorizing_github_apps %}'
redirect_from:
  - /early-access/integrations/user-identification-authorization
  - /apps/building-integrations/setting-up-and-registering-github-apps/identifying-users-for-github-apps
  - /apps/building-github-apps/identifying-and-authorizing-users-for-github-apps
  - /developers/apps/identifying-and-authorizing-users-for-github-apps
  - /developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps
  - /apps/creating-github-apps/authenticating-with-a-github-app/identifying-and-authorizing-users-for-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - GitHub Apps
---

Your app can make API requests on behalf of a user. API requests made by an app on behalf of a user will be attributed to that user. For example, if your app posts a comment on behalf of a user, the {% data variables.product.company_short %} UI will show the user's avatar photo along with the app's identicon badge as the author of the issue.

![Screenshot of a comment that has a user avatar with an overlaid app identicon badge. The avatar is highlighted with an orange outline.](/assets/images/help/apps/github-app-acting-on-your-behalf.png)

Similarly, if the request triggers a corresponding entry in the audit logs and security logs, the logs will list the user as the actor but will state that the "programmatic_access_type" is "GitHub App user-to-server token".

To make an API request on behalf of a user, the user must authorize your app. If an app is installed on an organization{% ifversion enterprise-installed-apps %} or enterprise{% endif %} that includes multiple members, each member will need to authorize the app before the app can act on their behalf. An app does not need to be installed in order for a user to authorize the app.

When a user installs an app on an account, they grant the app permission to access the resources that it requested. During the installation process, they will also see a list of account permissions that the app can request for individual users. When a user authorizes an app, they grant the app permission to act on their behalf, and they grant the account permissions that the app requested.

Once a user has authorized your app, you can generate a user access token, which is a type of OAuth token. You should send the user access token in the `Authorization` header of your subsequent API requests. For more information about prompting a user to authorize your app and generating a user access token, see [AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app).

When operating on behalf of a user, your app's access is limited to ensure secure and appropriate access:

* The app can only access resources that the user has access to. If a user does not have access to a repository, your app cannot access that repository on their behalf even if the app is installed on that repository.
* The app can only access resources that it has permission to access. If your app does not have the `Issues` permission, it cannot create or read issues for the user, even if the user has access to the repository.
* The app can only access resources in an account where it is installed. If your app is only installed on a user's personal account, it cannot access resources in an organization that the user is a member of unless the app is also installed on that organization.

Requests made with a user access token are sometimes called "user-to-server" requests.

{% data reusables.user-settings.token_access_capabilities %}

If you want to attribute app activity to the app instead of to a user, you should authenticate as an app installation instead. For more information, see [AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation).

> [!NOTE]
> {% data reusables.apps.github_app_auth_saml %}
