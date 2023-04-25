---
title: Enforcing SAML single sign-on for your organization
intro: Organization owners and admins can enforce SAML SSO so that all organization members must authenticate via an identity provider (IdP).
redirect_from:
  - /articles/enforcing-saml-single-sign-on-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/enforcing-saml-single-sign-on-for-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Enforce SAML single sign-on
---

## About enforcement of SAML SSO for your organization

When you enable SAML SSO, {% data variables.product.prodname_dotcom %} will prompt members who visit the organization's resources on {% data variables.product.prodname_dotcom_the_website %} to authenticate on your IdP, which links the member's personal account to an identity on the IdP. Members can still access the organization's resources before authentication with your IdP.

You can also enforce SAML SSO for your organization. {% data reusables.saml.when-you-enforce %} Enforcement removes any members and administrators who have not authenticated via your IdP from the organization. {% data variables.product.company_short %} sends an email notification to each removed user.

{% data reusables.saml.ghec-only %}

{% data reusables.saml.removed-users-can-rejoin %} If a user rejoins the organization within three months, the user's access privileges and settings will be restored. For more information, see "[AUTOTITLE](/organizations/managing-membership-in-your-organization/reinstating-a-former-member-of-your-organization)."

Bots and service accounts that do not have external identities set up in your organization's IdP will also be removed when you enforce SAML SSO. For more information about bots and service accounts, see "[AUTOTITLE](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/managing-bots-and-service-accounts-with-saml-single-sign-on)."

If your organization is owned by an enterprise account, requiring SAML for the enterprise account will override your organization-level SAML configuration and enforce SAML SSO for every organization in the enterprise. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)."

{% tip %}

**Tip:** {% data reusables.saml.testing-saml-sso %}

{% endtip %}

## Enforcing SAML SSO for your organization

1. Enable and test SAML SSO for your organization, then authenticate with your IdP at least once. For more information, see "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization)."
1. Prepare to enforce SAML SSO for your organization. For more information, see "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/preparing-to-enforce-saml-single-sign-on-in-your-organization)."
{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
1. Under "SAML single sign-on", select **Require SAML SSO authentication for all members of the ORGANIZATION organization**.
1. If any organization members have not authenticated via your IdP, {% data variables.product.company_short %} displays the members. If you enforce SAML SSO, {% data variables.product.company_short %} will remove the members from the organization.

   Review the warning and click **Remove members and require SAML single sign-on**.
1. Under "Single sign-on recovery codes", review your recovery codes. Store the recovery codes in a safe location like a password manager.

## Further reading

- "[AUTOTITLE](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)"
