---
title: Authorizing GitHub Apps
shortTitle: Authorize
intro: 'You can authorize a {% data variables.product.prodname_github_app %} to retrieve information about your {% data variables.product.company_short %} account and to make changes on your behalf.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
  - GitHub Apps
redirect_from:
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps
  - /authentication/keeping-your-account-and-data-secure/authorizing-github-apps
---

## About authorizing {% data variables.product.prodname_github_apps %}

Applications that are not owned by you, your organization, or {% data variables.product.prodname_marketplace %} may need to verify your {% data variables.product.github %} identity or interact with {% data variables.product.github %} on your behalf. These applications can request authorization for a {% data variables.product.prodname_github_app %} to perform these actions. If an application requests authorization, it will redirect you to a {% data variables.product.github %} page prompting you to authorize the app.

When authorizing the {% data variables.product.prodname_github_app %}, you should ensure you trust the application owner and review the information that the application wants to access. During authorization, you'll be prompted to grant the {% data variables.product.prodname_github_app %} permission to do all of the following:

* Verify your {% data variables.product.company_short %} identity: When authorized, the {% data variables.product.prodname_github_app %} will be able to retrieve your public GitHub profile. The app may also be able to retrieve some private account information. During the authorization process, {% data variables.product.company_short %} will tell you which account information the {% data variables.product.prodname_github_app %} will be able to access.
* Know which resources you can access: When authorized, the {% data variables.product.prodname_github_app %} will be able to determine which resources you can access that the app can also access. The app may use this, for example, so that it can show you an appropriate list of repositories.
* Act on your behalf: When authorized, the application may perform tasks on {% data variables.product.company_short %} on your behalf. This might include creating an issue or commenting on a pull request. For more information, see [About {% data variables.product.prodname_github_apps %} acting on your behalf](#about-github-apps-acting-on-your-behalf).

You can review and revoke your authorization at any time. For more information, see [AUTOTITLE](/apps/using-github-apps/reviewing-your-authorized-integrations).

{% ifversion ghec %}

> [!NOTE]
> If your organization uses SAML SSO and you cannot see your organization's resources after you authorize a {% data variables.product.prodname_github_app %}, you may need to reauthorize the app after starting an active SAML session for your organization. For more information, see [AUTOTITLE](/apps/using-github-apps/saml-and-github-apps).

{% endif %}

## About {% data variables.product.prodname_github_apps %} acting on your behalf

Once you authorize a {% data variables.product.prodname_github_app %}, the app can act on your behalf. The situations in which a {% data variables.product.prodname_github_app %} acts on your behalf vary according to the purpose of the {% data variables.product.prodname_github_app %} and the context in which it is being used. For example, an integrated development environment (IDE) may use a {% data variables.product.prodname_github_app %} to interact on your behalf in order to push changes you have authored through the IDE back to repositories on {% data variables.product.company_short %}.

The {% data variables.product.prodname_github_app %} can only do things that both you and the app have permission to do. For example, if you have write access to a repository but the {% data variables.product.prodname_github_app %} only has read access, then the app can only read the contents of the repository even when it is acting on your behalf. Similarly, if you have access to repositories `A` and `B`, and the {% data variables.product.prodname_github_app %} has access to repositories `B` and `C`, then the app can only access repository `B` when acting on your behalf. For more information about the permissions granted to a {% data variables.product.prodname_github_app %}, see [Difference between authorization and installation](#difference-between-authorization-and-installation).

When an app acts on your behalf, it will attribute the activity to you in conjunction with the app. For example, if the app posts a comment on your behalf, the {% data variables.product.company_short %} UI will show your avatar photo along with the app's identicon badge as the author of the issue.

![Screenshot of a comment that has a user avatar with an overlaid app identicon badge. The avatar is highlighted with an orange outline.](/assets/images/help/apps/github-app-acting-on-your-behalf.png)

Similarly, if the activity triggers a corresponding entry in the audit logs and security logs, the logs will list you as the actor but will state that the "programmatic_access_type" is "GitHub App user-to-server token".

## Difference between authorization and installation

{% data reusables.apps.install-vs-authorize %}

For more information about installation, see [AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-a-third-party), {% ifversion ghec or fpt %}[AUTOTITLE](/apps/using-github-apps/installing-an-app-in-your-personal-account) and [AUTOTITLE](/apps/using-github-apps/installing-an-app-in-your-organization).{% else %}[AUTOTITLE](/apps/maintaining-github-apps/installing-github-apps).{% endif %}
