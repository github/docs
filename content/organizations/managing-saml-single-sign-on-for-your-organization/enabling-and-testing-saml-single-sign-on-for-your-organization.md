---
title: Enabling and testing SAML single sign-on for your organization
intro: Organization owners and admins can enable SAML single sign-on to add an extra layer of security to their organization.
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/enabling-and-testing-saml-single-sign-on-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/enabling-and-testing-saml-single-sign-on-for-your-organization
versions:
  fpt: '*'
topics:
  - Organizations
  - Teams
shortTitle: Enable & test SAML SSO
---

You can enable SAML SSO in your organization without requiring all members to use it. Enabling but not enforcing SAML SSO in your organization can help smooth your organization's SAML SSO adoption. Once a majority of your organization's members use SAML SSO, you can enforce it within your organization.

If you enable but don't enforce SAML SSO, organization members who choose not to use SAML SSO can still be members of the organization. For more information on enforcing SAML SSO, see "[Enforcing SAML single sign-on for your organization](/articles/enforcing-saml-single-sign-on-for-your-organization)."

{% data reusables.saml.outside-collaborators-exemption %}

Prior to enforcing SAML SSO in your organization, ensure that you've set up your identity provider (IdP). For more information, see "[Preparing to enforce SAML single sign-on in your organization](/articles/preparing-to-enforce-saml-single-sign-on-in-your-organization)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
5. Under "SAML single sign-on", select **Enable SAML authentication**.
![Checkbox for enabling SAML SSO](/assets/images/help/saml/saml_enable.png)

  {% note %}

  **Note:** After enabling SAML SSO, you can download your single sign-on recovery codes so that you can access your organization even if your IdP is unavailable. For more information, see "[Downloading your organization's SAML single sign-on recovery codes](/articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes)."

  {% endnote %}

6. In the "Sign on URL" field, type the HTTPS endpoint of your IdP for single sign-on requests. This value is available in your IdP configuration.
![Field for the URL that members will be forwarded to when signing in](/assets/images/help/saml/saml_sign_on_url.png)
7. Optionally, in the "Issuer" field, type your SAML issuer's name. This verifies the authenticity of sent messages.
![Field for the SAML issuer's name](/assets/images/help/saml/saml_issuer.png)
8. Under "Public Certificate," paste a certificate to verify SAML responses.
![Field for the public certificate from your identity provider](/assets/images/help/saml/saml_public_certificate.png)
9. Click {% octicon "pencil" aria-label="The edit icon" %} and then in the Signature Method and Digest Method drop-downs, choose the hashing algorithm used by your SAML issuer to verify the integrity of the requests.
![Drop-downs for the Signature Method and Digest method hashing algorithms used by your SAML issuer](/assets/images/help/saml/saml_hashing_method.png)
10. Before enabling SAML SSO for your organization, click **Test SAML configuration** to ensure that the information you've entered is correct. ![Button to test SAML configuration before enforcing](/assets/images/help/saml/saml_test.png)

  {% tip %}

  **Tip:** {% data reusables.saml.testing-saml-sso %}

  {% endtip %}
11. To enforce SAML SSO and remove all organization members who haven't authenticated via your IdP, select **Require SAML SSO authentication for all members of the _organization name_ organization**. For more information on enforcing SAML SSO, see "[Enforcing SAML single sign-on for your organization](/articles/enforcing-saml-single-sign-on-for-your-organization)."
![Checkbox to require SAML SSO for your organization ](/assets/images/help/saml/saml_require_saml_sso.png)
12. Click **Save**.
![Button to save SAML SSO settings](/assets/images/help/saml/saml_save.png)

## Further reading

- "[About identity and access management with SAML single sign-on](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
