---
title: Configuring SAML single sign-on for your enterprise
shortTitle: Configure SAML SSO
intro: 'You can control and secure access to {% ifversion ghec %}resources like repositories, issues, and pull requests within your enterprise''s organizations{% elsif ghae %}your enterprise on {% data variables.product.prodname_ghe_managed %}{% endif %} by {% ifversion ghec %}enforcing{% elsif ghae %}configuring{% endif %} SAML single sign-on (SSO) through your identity provider (IdP).'
permissions: 'Enterprise owners can configure SAML SSO for an enterprise on {% data variables.product.product_name %}.'
versions:
  ghec: '*'
  ghae: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
redirect_from:
  - /admin/authentication/configuring-saml-single-sign-on-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/enforcing-saml-single-sign-on-for-organizations-in-your-enterprise-account
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise
---

{% data reusables.enterprise-accounts.emu-saml-note %}

## About SAML SSO for enterprise accounts

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %} For more information, see "[About identity and access management with SAML single sign-on](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)."

{% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.about-saml-access-enterprise-account %} For more information, see "[Viewing and managing a user's SAML access to your enterprise account](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise)."

{% data reusables.saml.cannot-update-existing-saml-settings %}

{% data reusables.saml.saml-disabled-linked-identities-removed %}

{% data reusables.scim.enterprise-account-scim %}

{% elsif ghae %}

SAML SSO allows you to centrally control and secure access to {% data variables.product.product_location %} from your SAML IdP. When an unauthenticated user visits {% data variables.product.product_location %} in a browser, {% data variables.product.product_name %} will redirect the user to your SAML IdP to authenticate. After the user successfully authenticates with an account on the IdP, the IdP redirects the user back to {% data variables.product.product_location %}. {% data variables.product.product_name %} validates the response from your IdP, then grants access to the user.

After a user successfully authenticates on your IdP, the user's SAML session for {% data variables.product.product_location %} is active in the browser for 24 hours. After 24 hours, the user must authenticate again with your IdP.

{% data reusables.saml.assert-the-administrator-attribute %}

{% data reusables.scim.after-you-configure-saml %} For more information, see "[Configuring user provisioning for your enterprise](/admin/authentication/configuring-user-provisioning-for-your-enterprise)."

{% endif %}

## Supported identity providers

{% data reusables.saml.saml-supported-idps %}

{% ifversion ghec %}

## Enforcing SAML single-sign on for organizations in your enterprise account

{% note %}

**Notes:**

- When you enforce SAML SSO for your enterprise, the enterprise configuration will override any existing organization-level SAML configurations. {% data reusables.saml.switching-from-org-to-enterprise %} For more information, see "[Switching your SAML configuration from an organization to an enterprise account](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)."
- When you enforce SAML SSO for an organization, {% data variables.product.company_short %} removes any members of the organization that have not authenticated successfully with your SAML IdP. When you require SAML SSO for your enterprise, {% data variables.product.company_short %} does not remove members of the enterprise that have not authenticated successfully with your SAML IdP. The next time a member accesses the enterprise's resources, the member must authenticate with your SAML IdP.

{% endnote %}

For more detailed information about how to enable SAML using Okta, see "[Configuring SAML single sign-on for your enterprise account using Okta](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Under "SAML single sign-on", select **Require SAML authentication**.
  ![Checkbox for enabling SAML SSO](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)
6. In the **Sign on URL** field, type the HTTPS endpoint of your IdP for single sign-on requests. This value is available in your IdP configuration.
![Field for the URL that members will be forwarded to when signing in](/assets/images/help/saml/saml_sign_on_url_business.png)
7. Optionally, in the **Issuer** field, type your SAML issuer URL to verify the authenticity of sent messages.
![Field for the SAML issuer's name](/assets/images/help/saml/saml_issuer.png)
8. Under **Public Certificate**, paste a certificate to verify SAML responses.
![Field for the public certificate from your identity provider](/assets/images/help/saml/saml_public_certificate.png)
9. To verify the integrity of the requests from your SAML issuer, click {% octicon "pencil" aria-label="The edit icon" %}. Then in the "Signature Method" and "Digest Method" drop-downs, choose the hashing algorithm used by your SAML issuer.
![Drop-downs for the Signature Method and Digest method hashing algorithms used by your SAML issuer](/assets/images/help/saml/saml_hashing_method.png)
10. Before enabling SAML SSO for your enterprise, click **Test SAML configuration** to ensure that the information you've entered is correct. ![Button to test SAML configuration before enforcing](/assets/images/help/saml/saml_test.png)
11. Click **Save**.
{% data reusables.enterprise-accounts.download-recovery-codes %}

{% elsif ghae %}

## Enabling SAML SSO

{% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

The following IdPs provide documentation about configuring SAML SSO for {% data variables.product.product_name %}. If your IdP isn't listed, please contact your IdP to request support for {% data variables.product.product_name %}.

 | IdP | More information |
 | :- | :- |
 | Azure AD | [Tutorial: Azure Active Directory single sign-on (SSO) integration with {% data variables.product.prodname_ghe_managed %}](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-tutorial) in the Microsoft Docs. To configure Azure AD for {% data variables.product.prodname_ghe_managed %}, see "[Configuring authentication and provisioning for your enterprise using Azure AD](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad)."  |
| Okta (Beta) | To configure Okta for {% data variables.product.prodname_ghe_managed %}, see "[Configuring authentication and provisioning for your enterprise using Okta](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta)."|

During initialization for {% data variables.product.product_name %}, you must configure {% data variables.product.product_name %} as a SAML Service Provider (SP) on your IdP. You must enter several unique values on your IdP to configure {% data variables.product.product_name %} as a valid SP.

| Value | Other names | Description | Example |
| :- | :- | :- | :- |
| SP Entity ID | SP URL | Your top-level URL for {% data variables.product.prodname_ghe_managed %} | <code>https://<em>YOUR-GITHUB-AE-HOSTNAME</em></code>
| SP Assertion Consumer Service (ACS) URL | Reply URL | URL where IdP sends SAML responses | <code>https://<em>YOUR-GITHUB-AE-HOSTNAME</em>/saml/consume</code> |
| SP Single Sign-On (SSO) URL | | URL where IdP begins SSO |  <code>https://<em>YOUR-GITHUB-AE-HOSTNAME</em>/sso</code> |

## Editing the SAML SSO configuration

If the details for your IdP change, you'll need to edit the SAML SSO configuration for {% data variables.product.product_location %}. For example, if the certificate for your IdP expires, you can edit the value for the public certificate.

{% ifversion ghae %}

{% note %}

**Note**: {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %} 

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Under "SAML single sign-on", type the new details for your IdP.
  ![Text entry fields with IdP details for SAML SSO configuration for an enterprise](/assets/images/help/saml/ae-edit-idp-details.png)
1. Optionally, click {% octicon "pencil" aria-label="The edit icon" %} to configure a new signature or digest method.
  ![Edit icon for changing signature and digest method](/assets/images/help/saml/ae-edit-idp-details-edit-signature-and-digest.png)

    - Use the drop-down menus and choose the new signature or digest method.
      ![Drop-down menus for choosing a new signature or digest method](/assets/images/help/saml/ae-edit-idp-details-edit-signature-and-digest-drop-down-menus.png)
1. To ensure that the information you've entered is correct, click **Test SAML configuration**.
  !["Test SAML configuration" button](/assets/images/help/saml/ae-edit-idp-details-test-saml-configuration.png)
1. Click **Save**.
    !["Save" button for SAML SSO configuration](/assets/images/help/saml/ae-edit-idp-details-save.png)
1. Optionally, to automatically provision and deprovision user accounts for {% data variables.product.product_location %}, reconfigure user provisioning with SCIM. For more information, see "[Configuring user provisioning for your enterprise](/admin/authentication/configuring-user-provisioning-for-your-enterprise)."

{% endif %}

{% ifversion ghae %}

## Disabling SAML SSO

{% warning %}

**Warning**: If you disable SAML SSO for {% data variables.product.product_location %}, users without existing SAML SSO sessions cannot sign into {% data variables.product.product_location %}. SAML SSO sessions on {% data variables.product.product_location %} end after 24 hours.

{% endwarning %}

{% note %}

**Note**: {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Under "SAML single sign-on", unselect **Enable SAML authentication**.
  ![Checkbox for "Enable SAML authentication"](/assets/images/help/saml/ae-saml-disabled.png)
1. To disable SAML SSO and require signing in with the built-in user account you created during initialization, click **Save**.
    !["Save" button for SAML SSO configuration](/assets/images/help/saml/ae-saml-disabled-save.png)

{% endif %}

{% endif %}
