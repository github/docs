---
title: Managing team synchronization for your organization
intro: 'You can enable and disable team synchronization between your identity provider (IdP) and your organization on {% data variables.product.product_name %}.'
redirect_from:
  - /articles/synchronizing-teams-between-your-identity-provider-and-github
  - /github/setting-up-and-managing-organizations-and-teams/synchronizing-teams-between-your-identity-provider-and-github
  - /github/articles/synchronizing-teams-between-okta-and-github
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization
permissions: Organization owners can manage team synchronization for an organization.
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage team synchronization
---

{% data reusables.enterprise-accounts.emu-scim-note %}

## About team synchronization

You can enable team synchronization between your IdP and {% data variables.product.product_name %} to allow organization owners and team maintainers to connect teams in your organization with IdP groups.

{% data reusables.identity-and-permissions.about-team-sync %}

{% data reusables.saml.ghec-only %}

{% data reusables.identity-and-permissions.supported-idps-team-sync %}

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

You can also enable team synchronization for organizations owned by an enterprise account. For more information, see "[Managing team synchronization for organizations in your enterprise](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)."

{% data reusables.enterprise-accounts.team-sync-override %}

{% data reusables.identity-and-permissions.team-sync-usage-limits %}

## Enabling team synchronization

The steps to enable team synchronization depend on the IdP you want to use. There are prerequisites to enable team synchronization that apply to every IdP. Each individual IdP has additional prerequisites.

### Prerequisites

{% data reusables.identity-and-permissions.team-sync-required-permissions %}

You must enable SAML single sign-on for your organization and your supported IdP. For more information, see "[Enforcing SAML single sign-on for your organization](/articles/enforcing-saml-single-sign-on-for-your-organization)."

You must have a linked SAML identity. To create a linked identity, you must authenticate to your organization using SAML SSO and the supported IdP at least once. For more information, see "[Authenticating with SAML single sign-on](/articles/authenticating-with-saml-single-sign-on)."

Your SAML settings **must** contain a valid IdP URL for the **Issuer** field. 

![SAML Issuer field](/assets/images/help/saml/saml_issuer.png)



### Enabling team synchronization for Azure AD

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.enable-team-sync-azure %}
{% data reusables.identity-and-permissions.team-sync-confirm %}
6. Review the identity provider tenant information you want to connect to your organization, then click **Approve**.
  ![Pending request to enable team synchronization to a specific IdP tenant with option to approve or cancel request](/assets/images/help/teams/approve-team-synchronization.png)

### Enabling team synchronization for Okta

Okta team synchronization requires that SAML and SCIM with Okta have already been set up for your organization.

To avoid potential team synchronization errors with Okta, we recommend that you confirm that SCIM linked identities are correctly set up for all organization members who are members of your chosen Okta groups, before enabling team synchronization on {% data variables.product.prodname_dotcom %}. 

If an organization member does not have a linked SCIM identity, then team synchronization will not work as expected and the user may not be added or removed from teams as expected. If any of these users are missing a SCIM linked identity, you will need to re-provision them.

For help on provisioning users that have missing a missing SCIM linked identity, see "[Troubleshooting identity and access management](/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management)."

{% data reusables.identity-and-permissions.team-sync-okta-requirements %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.team-sync-confirm-scim %}
1. Consider enforcing SAML in your organization to ensure that organization members link their SAML and SCIM identities. For more information, see "[Enforcing SAML single sign-on for your organization](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization)."
{% data reusables.identity-and-permissions.enable-team-sync-okta %}
7. Under your organization's name, type a valid SSWS token and the URL to your Okta instance.
  ![Enable team synchronization Okta organization form](/assets/images/help/teams/confirm-team-synchronization-okta-organization.png)
6. Review the identity provider tenant information you want to connect to your organization, then click **Create**.
  ![Enable team synchronization create button](/assets/images/help/teams/confirm-team-synchronization-okta.png)

## Disabling team synchronization

{% data reusables.identity-and-permissions.team-sync-disable %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
5. Under "Team synchronization", click **Disable team synchronization**.
  ![Disable team synchronization](/assets/images/help/teams/disable-team-synchronization.png)
