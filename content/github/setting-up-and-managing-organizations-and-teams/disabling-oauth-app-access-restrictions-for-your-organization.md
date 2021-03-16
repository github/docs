---
title: Disabling OAuth App access restrictions for your organization
intro: 'Organization owners can disable restrictions on the {% data variables.product.prodname_oauth_app %}s that have access to the organization''s resources.'
redirect_from:
  - /articles/disabling-third-party-application-restrictions-for-your-organization/
  - /articles/disabling-oauth-app-access-restrictions-for-your-organization
versions:
  free-pro-team: '*'
---

{% danger %}

**Warning**: When you disable {% data variables.product.prodname_oauth_app %} access restrictions for your organization, any organization member will automatically authorize {% data variables.product.prodname_oauth_app %} access to the organization's private resources when they approve an application for use in their personal account settings.

{% enddanger %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.oauth_app_access %}
5. Click **Remove restrictions**.
  ![Remove restrictions button](/assets/images/help/settings/settings-third-party-remove-restrictions.png)
6. After you review the information about disabling third-party application restrictions, click **Yes, remove application restrictions**.
  ![Remove confirmation button](/assets/images/help/settings/settings-third-party-confirm-disable.png)
