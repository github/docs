---
title: Configuring SAML single sign-on for your enterprise
shortTitle: Configuring SAML SSO
intro: 'You can configure SAML single sign-on (SSO) for your enterprise, which allows you to centrally control authentication for {% data variables.product.product_location %} using your identity provider (IdP).'
product: '{% data reusables.gated-features.saml-sso %}'
permissions: 'Enterprise owners can configure SAML SSO for an enterprise on {% data variables.product.product_name %}.'
versions:
  github-ae: '*'
---

### Informationen zu SAML SSO

{% if currentVersion == "github-ae@latest" %}

SAML SSO allows you to centrally control and secure access to {% data variables.product.product_location %} from your SAML IdP. When an unauthenticated user visits {% data variables.product.product_location %} in a browser, {% data variables.product.product_name %} will redirect the user to your SAML IdP to authenticate. After the user successfully authenticates with an account on the IdP, the IdP redirects the user back to {% data variables.product.product_location %}. {% data variables.product.product_name %} validates the response from your IdP, then grants access to the user.

After a user successfully authenticates on your IdP, the user's SAML session for {% data variables.product.product_location %} is active in the browser for 24 hours. After 24 hours, the user must authenticate again with your IdP.

{% data reusables.saml.assert-the-administrator-attribute %}

{% data reusables.scim.after-you-configure-saml %} For more information, see "[Configuring user provisioning for your enterprise](/admin/authentication/configuring-user-provisioning-for-your-enterprise)."

{% endif %}

### Supported identity providers

{% data variables.product.product_name %} supports SAML SSO with IdPs that implement the SAML 2.0 standard. For more information, see the [SAML Wiki](https://wiki.oasis-open.org/security) on the OASIS website.

{% data variables.product.company_short %} has tested SAML SSO for {% data variables.product.product_name %} with the following IdPs.

{% if currentVersion == "github-ae@latest" %}
- Azure AD
{% endif %}

### Enabling SAML SSO

{% if currentVersion == "github-ae@latest" %}

{% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

The following IdPs provide documentation about configuring SAML SSO for {% data variables.product.product_name %}. If your IdP isn't listed, please contact your IdP to request support for {% data variables.product.product_name %}.

 | IdP      | Weitere Informationen                                                                                                                                                                                                              |
 |:-------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 | Azure AD | [Tutorial: Azure Active Directory single sign-on (SSO) integration with {% data variables.product.prodname_ghe_managed %}](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-tutorial) in the Microsoft Docs |

During initialization for {% data variables.product.product_name %}, you must configure {% data variables.product.product_name %} as a SAML Service Provider (SP) on your IdP. You must enter several unique values on your IdP to configure {% data variables.product.product_name %} as a valid SP.

| Wert                                    | Other names | Beschreibung                                                               | Beispiel                  |
|:--------------------------------------- |:----------- |:-------------------------------------------------------------------------- |:------------------------- |
| SP Entity ID                            | SP URL      | Your top-level URL for {% data variables.product.prodname_ghe_managed %} | <code>https://<em>YOUR-GITHUB-AE-HOSTNAME</em></code> |
| SP Assertion Consumer Service (ACS) URL | Reply URL   | URL where IdP sends SAML responses                                         | <code>https://<em>YOUR-GITHUB-AE-HOSTNAME</em>/saml/consume</code> |
| SP Single Sign-On (SSO) URL             |             | URL where IdP begins SSO                                                   | <code>https://<em>YOUR-GITHUB-AE-HOSTNAME</em>/sso</code> |

{% endif %}

### Editing the SAML SSO configuration

If the details for your IdP change, you'll need to edit the SAML SSO configuration for {% data variables.product.product_location %}. For example, if the certificate for your IdP expires, you can edit the value for the public certificate.

{% if currentVersion == "github-ae@latest" %}

{% note %}

**Hinweis**: {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Under "SAML single sign-on", type the new details for your IdP. ![Text entry fields with IdP details for SAML SSO configuration for an enterprise](/assets/images/help/saml/ae-edit-idp-details.png)
1. Optionally, click {% octicon "pencil" aria-label="The edit icon" %} to configure a new signature or digest method. ![Edit icon for changing signature and digest method](/assets/images/help/saml/ae-edit-idp-details-edit-signature-and-digest.png)

    - Use the drop-down menus and choose the new signature or digest method. ![Drop-down menus for choosing a new signature or digest method](/assets/images/help/saml/ae-edit-idp-details-edit-signature-and-digest-drop-down-menus.png)
1. To ensure that the information you've entered is correct, click **Test SAML configuration**. !["Test SAML configuration" button](/assets/images/help/saml/ae-edit-idp-details-test-saml-configuration.png)
1. Klicke auf **Save** (Speichern). !["Save" button for SAML SSO configuration](/assets/images/help/saml/ae-edit-idp-details-save.png)
1. Optionally, to automatically provision and deprovision user accounts for {% data variables.product.product_location %}, reconfigure user provisioning with SCIM. For more information, see "[Configuring user provisioning for your enterprise](/admin/authentication/configuring-user-provisioning-for-your-enterprise)."

{% endif %}

### Disabling SAML SSO

{% if currentVersion == "github-ae@latest" %}

{% warning %}

**Warning**: If you disable SAML SSO for {% data variables.product.product_location %}, users without existing SAML SSO sessions cannot sign into {% data variables.product.product_location %}. SAML SSO sessions on {% data variables.product.product_location %} end after 24 hours.

{% endwarning %}

{% note %}

**Hinweis**: {% data reusables.saml.contact-support-if-your-idp-is-unavailable %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Under "SAML single sign-on", unselect **Enable SAML authentication**. ![Checkbox for "Enable SAML authentication"](/assets/images/help/saml/ae-saml-disabled.png)
1. To disable SAML SSO and require signing in with the built-in user account you created during initialization, click **Save**. !["Save" button for SAML SSO configuration](/assets/images/help/saml/ae-saml-disabled-save.png)

{% endif %}
