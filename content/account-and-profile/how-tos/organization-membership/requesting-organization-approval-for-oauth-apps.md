---
title: Requesting organization approval for OAuth apps
intro: You can request approval for {% data variables.product.prodname_oauth_apps %} to access organization resources.
redirect_from:
  - /articles/requesting-organization-approval-for-third-party-applications
  - /articles/requesting-organization-approval-for-your-authorized-applications
  - /articles/requesting-organization-approval-for-oauth-apps
  - /github/setting-up-and-managing-your-github-user-account/requesting-organization-approval-for-oauth-apps
  - /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/requesting-organization-approval-for-oauth-apps
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/requesting-organization-approval-for-oauth-apps
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/requesting-organization-approval-for-oauth-apps
  - /account-and-profile/how-tos/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/requesting-organization-approval-for-oauth-apps
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
permissions: Organization members can request owner approval for {% data variables.product.prodname_oauth_apps %}. Outside collaborators can request owner approval for {% data variables.product.prodname_oauth_apps %} if integration access requests are enabled. For more information, see [AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/limiting-oauth-app-and-github-app-access-requests).
shortTitle: Request {% data variables.product.prodname_oauth_app %} approval
contentType: how-tos
---

## Prerequisites

Before you can request organization approval for an {% data variables.product.prodname_oauth_app %}, you need to authorize it for your personal account. See [AUTOTITLE](/apps/oauth-apps/using-oauth-apps/installing-an-oauth-app-in-your-personal-account#installing-an-oauth-app-in-your-personal-account).

## Requesting organization approval for an {% data variables.product.prodname_oauth_app %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.access_applications %}
{% data reusables.user-settings.access_authorized_oauth_apps %}
1. In the list of applications, click the name of the {% data variables.product.prodname_oauth_app %} you'd like to request access for.
1. Next to the organization you'd like the {% data variables.product.prodname_oauth_app %} to access, click **Request access**.
1. After you review the information about requesting {% data variables.product.prodname_oauth_app %} access, click **Request approval from owners**.

## Further reading

* [AUTOTITLE](/organizations/managing-oauth-access-to-your-organizations-data/about-oauth-app-access-restrictions)
