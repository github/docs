---
title: SAML and GitHub Apps
shortTitle: SAML with apps
intro: "If your organization or enterprise is SSO protected, you may need to start an active SSO session for your organization before authorizing, installing, or requesting a {% data variables.product.prodname_github_app %}."
versions:
  ghec: '*'
topics:
  - GitHub Apps
  - SSO
---

## Authorizing {% data variables.product.prodname_github_apps %} for users

If your organization or enterprise uses SSO, you may not be able to see your organization's resources or enterprise's `internal` resources after you authorize a {% data variables.product.prodname_github_app %}. For example, if the app displays a list of repositories, you may not see repositories owned by your organization. To resolve this issue, follow these steps:

1. Go to `https://github.com/orgs/ORGANIZATION-NAME/sso` to start an active SAML session for your organization. Replace `ORGANIZATION-NAME` with the name of your organization.
    * If your enterprise manages SSO for your organization, you can also go to `https://github.com/enterprises/ENTERPRISE-NAME/sso` to start an active SSO session for your enterprise. Replace `ENTERPRISE-NAME` with the name of your enterprise. This works as an SSO session for all organizations in the enterprise that you're a member of.
    * Attempting to access any resources owned by the account will also trigger SSO if you don't have a session already.
1. Revoke your authorization of the {% data variables.product.prodname_github_app %}. For more information, see [AUTOTITLE](/apps/using-github-apps/reviewing-and-revoking-authorization-of-github-apps).
1. Reauthorize the {% data variables.product.prodname_github_app %}. {% data variables.product.prodname_github_app %} authorization is initiated by the app and varies based on the app. For example, some {% data variables.product.prodname_github_apps %} may have you click on a link or enter a command in your terminal. For more information, see [AUTOTITLE](/apps/using-github-apps/authorizing-github-apps).

When you sign in to an app, a credential authorization is created for each organization that you have an SSO session for. SSO can be enforced at the organization or enterprise level. If it's enforced at the enterprise level, having an SSO session with any organization counts as an SSO session for each organization you're a member of. This will appear as a credential authorization on the token for each organization you are a member of at the time of the application authorization.

The SSO credential authorization is tied to the specific sign-in session with the app. If you plan to sign in to the app again on another device or after your SSO sessions expire, you will need to start new SSO sessions before you sign in to ensure the app can access your organization's resources.

## Installing or requesting {% data variables.product.prodname_github_apps %} for organizations with SSO

If your organization or enterprise uses SSO, you may not see your organization listed when you try to install or request an {% data variables.product.prodname_github_app %} for your organization. To resolve this issue, follow these steps:

1. Go to `https://github.com/orgs/ORGANIZATION-NAME/sso` to start an active SAML session for your organization. Replace `ORGANIZATION-NAME` with the name of your organization.
   * If your enterprise manages SSO for your organization, you can also go to `https://github.com/enterprises/ENTERPRISE-NAME/sso` to start an active SSO session for your enterprise. Replace `ENTERPRISE-NAME` with the name of your enterprise. This works as an SSO session for all organizations in the enterprise that you're a member of.
1. Try to install or request the {% data variables.product.prodname_github_app %} again. For more information, see [AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-a-third-party), [AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-github-marketplace-for-your-organizations), and [AUTOTITLE](/apps/using-github-apps/requesting-a-github-app-from-your-organization-owner).
