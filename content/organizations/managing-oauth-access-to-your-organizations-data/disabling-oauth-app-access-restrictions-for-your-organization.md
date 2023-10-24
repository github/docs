---
title: Disabling OAuth app access restrictions for your organization
intro: 'Organization owners can disable restrictions on the {% data variables.product.prodname_oauth_apps %} that have access to the organization''s resources.'
redirect_from:
  - /articles/disabling-third-party-application-restrictions-for-your-organization
  - /articles/disabling-oauth-app-access-restrictions-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/disabling-oauth-app-access-restrictions-for-your-organization
  - /organizations/restricting-access-to-your-organizations-data/disabling-oauth-app-access-restrictions-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Unrestrict {% data variables.product.prodname_oauth_apps %}
---

{% danger %}

**Warning**: When you disable {% data variables.product.prodname_oauth_app %} access restrictions for your organization, any organization member will automatically authorize {% data variables.product.prodname_oauth_app %} access to the organization's private resources when they approve an application for use in their personal account settings.

{% enddanger %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.oauth_app_access %}
1. Click **Remove restrictions**.
1. After you review the information about disabling third-party application restrictions, click **Yes, remove application restrictions**.
