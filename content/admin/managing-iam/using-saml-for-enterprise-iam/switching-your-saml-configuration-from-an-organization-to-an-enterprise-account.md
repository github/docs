---
title: Switching your SAML configuration from an organization to an enterprise account
intro: Learn special considerations and best practices for replacing an organization-level SAML configuration with an enterprise-level SAML configuration.
permissions: Enterprise owners can configure SAML single sign-on for an enterprise account.
versions:
  ghec: '*'
topics:
  - Authentication
  - Enterprise
  - Organizations
type: how_to
shortTitle: From organization to enterprise
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account
  - /admin/identity-and-access-management/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account
---

## About SAML single sign-on for enterprise accounts

{% data reusables.saml.dotcom-saml-explanation %} {% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.switching-from-org-to-enterprise %}

When you configure SAML SSO at the organization level, each organization must be configured with a unique SSO tenant in your IdP, which means that your members will be associated with a unique SAML identity record for each organization they have successfully authenticated with. If you configure SAML SSO for your enterprise account instead, each enterprise member will have one SAML identity that is used for all organizations owned by the enterprise account.

After you configure SAML SSO for your enterprise account, the new configuration will override any existing SAML SSO configurations for organizations owned by the enterprise account. Any team synchronization settings you have configured will also be removed from these organizations.

* Your organization members will be removed from {% data variables.product.prodname_dotcom %} teams following the removal of the organization's team synchronization settings.
* If you intend to re-enable team synchronization, before enabling SAML SSO for your enterprise, take note of the current team sync configuration in the affected organizations. See "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)."

  You will need to re-add your organization members to {% data variables.product.prodname_dotcom %} teams after re-enabling team synchronization.
* Schedule a time to make changes to your organization's team synchronization settings when people aren't actively using your organization's resources. Changes to team synchronization may result in some downtime for your members.

Enterprise members will not be notified when an enterprise owner enables SAML for the enterprise account. If SAML SSO was previously enforced at the organization level, members should not see a major difference when navigating directly to organization resources. The members will continue to be prompted to authenticate via SAML. If members navigate to organization resources via their IdP dashboard, they will need to click the new tile for the enterprise-level app, instead of the old tile for the organization-level app. The members will then be able to choose the organization to navigate to.

Any {% data variables.product.pat_generic %}s, SSH keys, {% data variables.product.prodname_oauth_apps %}, and {% data variables.product.prodname_github_apps %} that were previously authorized for the organization will continue to be authorized for the organization. However, members will need to authorize any PATs, SSH keys, {% data variables.product.prodname_oauth_apps %}, and {% data variables.product.prodname_github_apps %} that were never authorized for use with SAML SSO for the organization.

SCIM provisioning is not currently supported when SAML SSO is configured for an enterprise account. If you are currently using SCIM for an organization owned by your enterprise account, you will lose this functionality when switching to an enterprise-level configuration.

You are not required to remove any organization-level SAML configurations before configuring SAML SSO for your enterprise account, but you may want to consider doing so. If SAML is ever disabled for the enterprise account in the future, any remaining organization-level SAML configurations will take effect. Removing the organization-level configurations can prevent unexpected issues in the future.

For more information about the decision to implement SAML SSO at the organization or enterprise level, see "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#considerations-for-enabling-saml-for-an-enterprise-or-organization)."

## Switching your SAML configuration from an organization to an enterprise account

1. Enforce SAML SSO for your enterprise account, making sure all organization members are assigned or given access to the IdP app being used for the enterprise account. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)."
1. If you kept any organization-level SAML configurations in place, to prevent confusion, consider hiding the tile for the organization-level apps in your IdP.
1. Advise your enterprise members about the change.
   * Members will no longer be able to access their organizations by clicking the SAML app for the organization in the IdP dashboard. They will need to use the new app configured for the enterprise account.
   * Members will need to authorize any PATs or SSH keys that were not previously authorized for use with SAML SSO for their organization. For more information, see "[AUTOTITLE](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" and "[AUTOTITLE](/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)."
   * Members may need to reauthorize {% data variables.product.prodname_oauth_apps %} that were previously authorized for the organization. For more information, see "[AUTOTITLE](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso)."
