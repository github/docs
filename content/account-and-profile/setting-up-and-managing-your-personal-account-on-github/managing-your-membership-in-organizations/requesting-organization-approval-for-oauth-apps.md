---
title: Requesting organization approval for OAuth apps
intro: 'Organization members and outside collaborators can request that an owner approve access to organization resources for {% data variables.product.prodname_oauth_apps %}.'
redirect_from:
  - /articles/requesting-organization-approval-for-third-party-applications
  - /articles/requesting-organization-approval-for-your-authorized-applications
  - /articles/requesting-organization-approval-for-oauth-apps
  - /github/setting-up-and-managing-your-github-user-account/requesting-organization-approval-for-oauth-apps
  - /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/requesting-organization-approval-for-oauth-apps
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/requesting-organization-approval-for-oauth-apps
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Request {% data variables.product.prodname_oauth_app %} approval
---

## About requesting organization approval for an {% data variables.product.prodname_oauth_app %}

Organization members can always request owner approval for {% data variables.product.prodname_oauth_apps %} they'd like to use, and organization owners receive a notification of pending requests.{% ifversion limit-app-access-requests %} Outside collaborators can request owner approval for {% data variables.product.prodname_oauth_apps %} they'd like to use if integration access requests are enabled. For more information, see "[AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/limiting-oauth-app-and-github-app-access-requests)."{% endif %}

## Requesting organization approval for an {% data variables.product.prodname_oauth_app %} you've already authorized for your personal account

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.access_applications %}
{% data reusables.user-settings.access_authorized_oauth_apps %}
1. In the list of applications, click the name of the {% data variables.product.prodname_oauth_app %} you'd like to request access for.
1. Next to the organization you'd like the {% data variables.product.prodname_oauth_app %} to access, click **Request access**.
1. After you review the information about requesting {% data variables.product.prodname_oauth_app %} access, click **Request approval from owners**.

## Further reading

* "[AUTOTITLE](/organizations/managing-oauth-access-to-your-organizations-data/about-oauth-app-access-restrictions)"
