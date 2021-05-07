---
title: Approving OAuth Apps for your organization
intro: 'When an organization member requests {% data variables.product.prodname_oauth_app %} access to organization resources, organization owners can approve or deny the request.'
redirect_from:
  - /articles/approving-third-party-applications-for-your-organization/
  - /articles/approving-oauth-apps-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/approving-oauth-apps-for-your-organization
versions:
  free-pro-team: '*'
topics:
  - Organizations
  - Teams
---

When {% data variables.product.prodname_oauth_app %} access restrictions are enabled, organization members must [request approval](/articles/requesting-organization-approval-for-oauth-apps) from an organization owner before they can authorize an {% data variables.product.prodname_oauth_app %} that has access to the organization's resources.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.oauth_app_access %}
5. Next to the application you'd like to approve, click **Review**. ![Review request link](/assets/images/help/settings/settings-third-party-approve-review.png)
6. After you review the information about the requested application, click **Grant access**. ![Grant access button](/assets/images/help/settings/settings-third-party-approve-grant.png)

### 더 읽을거리

- "[About {% data variables.product.prodname_oauth_app %} access restrictions](/articles/about-oauth-app-access-restrictions)"
