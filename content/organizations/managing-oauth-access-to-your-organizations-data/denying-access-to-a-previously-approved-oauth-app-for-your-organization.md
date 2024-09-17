---
title: Denying access to a previously approved OAuth app for your organization
intro: 'If an organization no longer requires a previously authorized {% data variables.product.prodname_oauth_app %}, owners can remove the application''s access to the organization''s resources.'
redirect_from:
  - /articles/denying-access-to-a-previously-approved-application-for-your-organization
  - /articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/denying-access-to-a-previously-approved-oauth-app-for-your-organization
  - /organizations/restricting-access-to-your-organizations-data/denying-access-to-a-previously-approved-oauth-app-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Deny {% data variables.product.prodname_oauth_app %} access
---

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.oauth_app_access %}
1. Next to the application you'd like to disable, click {% octicon "pencil" aria-label="Update policy" %}.

   ![Screenshot of the "Third-party application access policy" page. To the right of an approved application, a pencil icon is outlined in dark orange.](/assets/images/help/settings/settings-third-party-deny-edit.png)
1. Click **Deny access**.
