---
title: Enabling and testing SAML single sign-on for your organization
intro: Organization owners and admins can enable SAML single sign-on to add an extra layer of security to their organization.
redirect_from:
  - /articles/enabling-and-testing-saml-single-sign-on-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/enabling-and-testing-saml-single-sign-on-for-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Enable & test SAML SSO
---

## About SAML single sign-on

You can enable SAML SSO in your organization without requiring all members to use it. Enabling but not enforcing SAML SSO in your organization can help smooth your organization's SAML SSO adoption. Once a majority of your organization's members use SAML SSO, you can enforce it within your organization.

{% data reusables.saml.ghec-only %}

If you enable but don't enforce SAML SSO, organization members who choose not to use SAML SSO can still be members of the organization. For more information on enforcing SAML SSO, see "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization)."

{% data reusables.saml.outside-collaborators-exemption %}

{% data reusables.saml.saml-disabled-linked-identities-removed %}

{% data reusables.apps.reauthorize-apps-saml %}

## Enabling and testing SAML single sign-on for your organization

Before your enforce SAML SSO in your organization, ensure that you've prepared the organization. For more information, see "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/preparing-to-enforce-saml-single-sign-on-in-your-organization)."

For more information about the identity providers (IdPs) that {% data variables.product.company_short %} supports for SAML SSO, see "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
1. Under "SAML single sign-on", select **Enable SAML authentication**.

   {% note %}

   **Note:** After enabling SAML SSO, you can download your single sign-on recovery codes so that you can access your organization even if your IdP is unavailable. For more information, see "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/downloading-your-organizations-saml-single-sign-on-recovery-codes)."

   {% endnote %}

1. In the "Sign on URL" field, type the HTTPS endpoint of your IdP for single sign-on requests. This value is available in your IdP configuration.
1. Optionally, in the "Issuer" field, type your SAML issuer's name. This verifies the authenticity of sent messages.

   {% note %}

   **Note:** If you want to enable team synchronization for your organization, the "Issuer" field is a required. For more information, see "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)."

   {% endnote %}

1. Under "Public Certificate," paste a certificate to verify SAML responses.
{% data reusables.saml.edit-signature-and-digest-methods %}
1. Before enabling SAML SSO for your organization, to ensure that the information you've entered is correct, click **Test SAML configuration**. {% data reusables.saml.test-must-succeed %}
   {% tip %}

   **Tip:** {% data reusables.saml.testing-saml-sso %}

   {% endtip %}
1. To enforce SAML SSO and remove all organization members who haven't authenticated via your IdP, select **Require SAML SSO authentication for all members of the _organization name_ organization**. For more information on enforcing SAML SSO, see "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization)."
1. Click **Save**.

## Further reading

- "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)"
- "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference)"
