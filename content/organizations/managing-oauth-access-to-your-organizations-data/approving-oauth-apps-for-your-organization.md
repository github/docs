---
title: Approving OAuth apps for your organization
intro: 'When an organization member or outside collaborator requests {% data variables.product.prodname_oauth_app %} access to organization resources, organization owners can approve or deny the request.'
redirect_from:
  - /articles/approving-third-party-applications-for-your-organization
  - /articles/approving-oauth-apps-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/approving-oauth-apps-for-your-organization
  - /organizations/restricting-access-to-your-organizations-data/approving-oauth-apps-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Approve {% data variables.product.prodname_oauth_app %} access
---
When {% data variables.product.prodname_oauth_app %} access restrictions are enabled, organization members and outside collaborators must [request approval](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/requesting-organization-approval-for-oauth-apps) from an organization owner before they can authorize an {% data variables.product.prodname_oauth_app %} that has access to the organization's resources.

{% ifversion limit-app-access-requests %}
{% data reusables.organizations.restricted-app-access-requests %}{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.oauth_app_access %}
1. Next to the application you'd like to approve, click **Review**.
1. After you review the information about the requested application, click **Grant access**.

## Further reading

* "[AUTOTITLE](/organizations/managing-oauth-access-to-your-organizations-data/about-oauth-app-access-restrictions)"
