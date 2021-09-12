---
title: Enabling SAML single sign-on for organizations in your enterprise account
intro: 'You can control and secure access to resources like repositories, issues, and pull requests by enabling SAML single sign-on (SSO) and centralized authentication through an IdP across all organizations owned by an enterprise account.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: Enterprise owners can enable SAML single sign-on for organizations in an enterprise account.
versions:
  free-pro-team: '*'
topics:
  - Enterprise
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account
---

### About SAML single sign-on for enterprise accounts

{% data reusables.saml.dotcom-saml-explanation %} For more information, see "[About identity and access management with SAML single sign-on](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)."

{% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.about-saml-access-enterprise-account %} For more information, see "[Viewing and managing a user's SAML access to your enterprise account](/github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account)."

{% data reusables.saml.saml-supported-idps %}

{% data reusables.scim.enterprise-account-scim %} If you're not participating in the private beta, SCIM is not supported for enterprise accounts. For more information, see "[About user provisioning for organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account)."

### Enabling SAML single-sign on for organizations in your enterprise account

{% note %}

**Note:** Enabling authentication with SAML single sign-on for your enterprise account will override any existing organization-level SAML configurations.

{% endnote %}

For more detailed information about how to enable SAML using Okta, see "[Configuring SAML single sign-on and SCIM for your enterprise account using Okta](/github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Under "SAML single sign-on", select **Enable SAML authentication**. ![Checkbox for enabling SAML SSO](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)
6. In the **Sign on URL** field, type the HTTPS endpoint of your IdP for single sign-on requests. This value is available in your IdP configuration. ![Field for the URL that members will be forwarded to when signing in](/assets/images/help/saml/saml_sign_on_url_business.png)
7. Optionally, in the **Issuer** field, type your SAML issuer URL to verify the authenticity of sent messages. ![Field for the SAML issuer's name](/assets/images/help/saml/saml_issuer.png)
8. Under **Public Certificate**, paste a certificate to verify SAML responses. ![Field for the public certificate from your identity provider](/assets/images/help/saml/saml_public_certificate.png)
9. To verify the integrity of the requests from your SAML issuer, click {% octicon "pencil" aria-label="The edit icon" %}. Then in the "Signature Method" and "Digest Method" drop-downs, choose the hashing algorithm used by your SAML issuer. ![Drop-downs for the Signature Method and Digest method hashing algorithms used by your SAML issuer](/assets/images/help/saml/saml_hashing_method.png)
10. Before enabling SAML SSO for your enterprise, click **Test SAML configuration** to ensure that the information you've entered is correct. ![Button to test SAML configuration before enforcing](/assets/images/help/saml/saml_test.png)
11. Click **Save**.
