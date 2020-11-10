---
title: Managing team synchronization for your organization
intro: 'You can enable and disable team synchronization between your identity provider (IdP) and your organization on {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.team-synchronization %}'
redirect_from:
  - /articles/synchronizing-teams-between-your-identity-provider-and-github
  - /github/setting-up-and-managing-organizations-and-teams/synchronizing-teams-between-your-identity-provider-and-github
  - /github/articles/synchronizing-teams-between-okta-and-github
permissions: Organization owners can manage team synchronization for an organization.
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
---

{% data reusables.gated-features.okta-team-sync %}

### About team synchronization

You can enable team synchronization between your IdP and {% data variables.product.product_name %} to allow organization owners and team maintainers to connect teams in your organization with IdP groups.

{% data reusables.identity-and-permissions.about-team-sync %}

{% data reusables.identity-and-permissions.supported-idps-team-sync %}

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

You can also enable team synchronization for organizations owned by an enterprise account. For more information, see "[Enforcing security settings in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account)."

### Enabling team synchronization

The steps to enable team synchronization depend on the IdP you want to use. There are prerequisites to enable team synchronization that apply to every IdP. Each individual IdP has additional prerequisites.

#### 빌드전 요구 사양

{% data reusables.identity-and-permissions.team-sync-required-permissions %}

You must enable SAML single sign-on for your organization and your supported IdP. For more information, see "[Enforcing SAML single sign-on for your organization](/articles/enforcing-saml-single-sign-on-for-your-organization)."

You must authenticate to your organization using SAML SSO and the supported IdP. For more information, see "[Authenticating with SAML single sign-on](/articles/authenticating-with-saml-single-sign-on)."

#### Enabling team synchronization for Azure AD

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.enable-team-sync-azure %}
{% data reusables.identity-and-permissions.team-sync-confirm %}
6. Review the identity provider tenant information you want to connect to your organization, then click **Approve**. ![Pending request to enable team synchronization to a specific IdP tenant with option to approve or cancel request](/assets/images/help/teams/approve-team-synchronization.png)

#### Enabling team synchronization for Okta

{% data reusables.identity-and-permissions.team-sync-okta-requirements %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.enable-team-sync-okta %}
7. Under your organization's name, type a valid SSWS token and the URL to your Okta instance. ![Enable team synchronization Okta organization form](/assets/images/help/teams/confirm-team-synchronization-okta-organization.png)
6. Review the identity provider tenant information you want to connect to your organization, then click **Create**. ![Enable team synchronization create button](/assets/images/help/teams/confirm-team-synchronization-okta.png)

### Disabling team synchronization

{% data reusables.identity-and-permissions.team-sync-disable %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
5. Under "Team synchronization", click **Disable team synchronization**. ![Disable team synchronization](/assets/images/help/teams/disable-team-synchronization.png)
