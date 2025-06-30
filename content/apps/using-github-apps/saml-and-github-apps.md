---
title: SAML and GitHub Apps
shortTitle: SAML with apps
intro: "If your organization is SSO protected, you may need to start an active SSO session for your organization before authorizing, installing, or requesting a {% data variables.product.prodname_github_app %}."
versions:
  ghec: '*'
topics:
  - GitHub Apps
  - SSO
---

## Authorizing {% data variables.product.prodname_github_apps %} for users

If your organization or enterprise uses SSO, you may not be able to see your organization's resources or enterprise's `internal` resources after you authorize a {% data variables.product.prodname_github_app %}. For example, if the app displays a list of repositories, you may not see repositories owned by your organization. To resolve this issue, follow these steps:

1. Go to `https://github.com/orgs/ORGANIZATION-NAME/sso` or `https://github.com/enterprises/ENTERPRISE_NAME/sso` to start an active SSO session for that account. Replace `ORGANIZATION-NAME` or `ENTERPRISE-NAME` with the name of the appropriate account. Attempting to access any resources owned by the account will aso trigger SSO if you don't have a session already.
1. Revoke your authorization of the {% data variables.product.prodname_github_app %}. For more information, see [AUTOTITLE](/apps/using-github-apps/reviewing-and-revoking-authorization-of-github-apps).
1. Reauthorize the {% data variables.product.prodname_github_app %}. {% data variables.product.prodname_github_app %} authorization is initiated by the app and varies based on the app. For example, some {% data variables.product.prodname_github_apps %} may have you click on a link or enter a command in your terminal. For more information, see [AUTOTITLE](/apps/using-github-apps/authorizing-github-apps).

SSO can be enforced at the organization or enterprise level. If it's enforced at the enterprise level, having an SSO session with any organization allows access to all organizations. This will appear as a credential authorization on the token for each organization you are a member of at the time of the application authorization.

For access to `internal` data in an enterprise, such as repositories, projects, or packages, you must have an SSO session for any organization within that enterprise. Even if the organizations do not use the same SSO provider (for instance, as a result of a merger or acquisition), any organization's SSO session is sufficient for `internal` access.

## Installing or requesting {% data variables.product.prodname_github_apps %} for organizations with SSO

If your organization or enterprise uses SSO, you may not see your organization listed when you try to install or request an {% data variables.product.prodname_github_app %} for your organization. To resolve this issue, follow these steps:

1. Go to `https://github.com/orgs/ORGANIZATION-NAME/sso` or `https://github.com/enterprises/ENTERPRISE_NAME/sso` to start an active SSO session for that account. Replace `ORGANIZATION-NAME` or `ENTERPRISE-NAME` with the name of the appropriate account.
1. Try to install or request the {% data variables.product.prodname_github_app %} again. For more information, see [AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-a-third-party), [AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-github-marketplace-for-your-organizations), and [AUTOTITLE](/apps/using-github-apps/requesting-a-github-app-from-your-organization-owner).
