---
title: SAML and GitHub Apps
shortTitle: SAML with apps
intro: "If your organization uses SAML SSO, you may need to start an active SAML session for your organization before authorizing, installing, or requesting a {% data variables.product.prodname_github_app %}."
versions:
  ghec: '*'
topics:
  - GitHub Apps
  - SSO
---

## Authorizing {% data variables.product.prodname_github_apps %} for SAML users

If your organization uses SAML SSO, you may not be able to see your organization's resources after you authorize a {% data variables.product.prodname_github_app %}. For example, if the app displays a list of repositories, you may not see repositories owned by your organization. To resolve this issue, follow these steps:

1. Go to `https://github.com/orgs/ORGANIZATION-NAME/sso` to start an active SAML session for your organization. Replace `ORGANIZATION-NAME` with the name of your organization.
1. Revoke your authorization of the {% data variables.product.prodname_github_app %}. For more information, see "[AUTOTITLE](/apps/using-github-apps/reviewing-and-revoking-authorization-of-github-apps)."
1. Reauthorize the {% data variables.product.prodname_github_app %}. {% data variables.product.prodname_github_app %} authorization is initiated by the app and varies based on the app. For example, some {% data variables.product.prodname_github_apps %} may have you click on a link or enter a command in your terminal. For more information, see "[AUTOTITLE](/apps/using-github-apps/authorizing-github-apps)."

## Installing or requesting {% data variables.product.prodname_github_apps %} for SAML users

If your organization uses SAML, you may not see your organization listed when you try to install or request an {% data variables.product.prodname_github_app %} for your organization. To resolve this issue, follow these steps:

1. Go to `https://github.com/orgs/ORGANIZATION-NAME/sso` to start an active SAML session for your organization. Replace `ORGANIZATION-NAME` with the name of your organization.
1. Try to install or request the {% data variables.product.prodname_github_app %} again. For more information, see "[AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-a-third-party)," "[AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-github-marketplace-for-your-organizations)," and "[AUTOTITLE](/apps/using-github-apps/requesting-a-github-app-from-your-organization-owner)."
