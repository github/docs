Contributor Covenant
Contributor Covenant Logo
Home
Adopters
Latest Version
Translations
FAQ
Contributor Covenant Translations
You can view and download the latest version of Contributor Covenant here.

Language	Version	Formats
English	2.1	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
한국어	2.1	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
Català	2.0	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
Deutsch	2.0	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
Español	2.0	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
Français	2.0	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
Indonesian	2.0	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
Italiano	2.0	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
日本語	2.0	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
Nederlands	2.0	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
Português do Brasil	2.0	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
Русский	2.0	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
Türkçe	2.0	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
简体中文	2.0	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
العربية	1.4	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
Bengali	1.4	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
Bosnian	1.4	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
ελληνικά	1.4	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
فارسی	1.4	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
ગુજરાતી	1.4	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
हिंदी	1.4	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
Magyar	1.4	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
Íslenska	1.4	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
עברית	1.4	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
ಕನ್ನಡ	1.4	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
Македонски	1.4	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
मराठी	1.4	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
Polski	1.4	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
Português	1.4	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
Română	1.4	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
Slovenščina	1.4	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
Svenska	1.4	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
Українська	1.4	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
繁體中文	1.4	
TEXT/MARKDOWN TEXT/PLAIN TEXT/ASCIIDOC
We’re always looking for new localizations of Contributor Covenant and are thankful to the volunteers who spend their time on this effort.

Instructions for translators can be found here.

Contributor Covenant uses semantic versioning for revisions so all URLs are permanent. Previous versions are available here: 1.0, 1.1, 1.2, 1.3, 1.4, and 2.0.

Contributor Covenant was created by Coraline Ada Ehmke in 2014 and is released under the CC BY 4.0 License.
Contributor Covenant is stewarded by the Organization for Ethical Source, and we welcome contributions, including translations.---
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

If you enable but don't enforce SAML SSO, organization members who choose not to use SAML SSO can still be members of the organization. For more information on enforcing SAML SSO, see [AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization).

{% data reusables.saml.outside-collaborators-exemption %}

{% data reusables.saml.saml-disabled-linked-identities-removed %}

{% data reusables.apps.reauthorize-apps-saml %}

## Enabling and testing SAML single sign-on for your organization

Before your enforce SAML SSO in your organization, ensure that you've prepared the organization. For more information, see [AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/preparing-to-enforce-saml-single-sign-on-in-your-organization).

For more information about the identity providers (IdPs) that {% data variables.product.company_short %} supports for SAML SSO, see [AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization).

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}

1. Under "SAML single sign-on," select **Enable SAML authentication**.

   > [!NOTE]
   > After enabling SAML SSO, you can download your single sign-on recovery codes so that you can access your organization even if your IdP is unavailable. For more information, see [AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/downloading-your-organizations-saml-single-sign-on-recovery-codes).

1. In the "Sign on URL" field, type the HTTPS endpoint of your IdP for single sign-on requests. This value is available in your IdP configuration.
1. Optionally, in the "Issuer" field, type your SAML issuer's name. This verifies the authenticity of sent messages.

   > [!NOTE]
   > If you want to enable team synchronization for your organization, the "Issuer" field is a required. For more information, see [AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization).

1. Under "Public Certificate", paste a certificate to verify SAML responses.

   > [!NOTE]
   > {% data variables.product.github %} does not enforce the expiration of this SAML IdP certificate. This means that even if this certificate expires, your SAML authentication will continue to work. However, if your IdP administrator regenerates the SAML certificate, and you don't update it on the {% data variables.product.github %} side, users will encounter a `digest mismatch` error during SAML authentication attempts due to the certificate mismatch. See [Error: Digest mismatch](/admin/managing-iam/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#error-digest-mismatch).

{% data reusables.saml.edit-signature-and-digest-methods %}

1. Before enabling SAML SSO for your organization, to ensure that the information you've entered is correct, click **Test SAML configuration**. {% data reusables.saml.test-must-succeed %}

   > [!TIP]
   > {% data reusables.saml.testing-saml-sso %}

1. To enforce SAML SSO and remove all organization members who haven't authenticated via your IdP, select **Require SAML SSO authentication for all members of the _organization name_ organization**. For more information on enforcing SAML SSO, see [AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization).
1. Click **Save**.

## Further reading

* [AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)
* [AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference)
