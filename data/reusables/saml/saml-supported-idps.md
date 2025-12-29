{% data variables.product.github %} supports SAML SSO with IdPs that implement the SAML 2.0 standard. For more information, see the [SAML Wiki](https://wiki.oasis-open.org/security) on the OASIS website.

{% data variables.product.company_short %} officially supports and internally tests the following IdPs for SAML.{% ifversion ghes %} For more information about the IdPs that are supported for SCIM on {% data variables.product.prodname_ghe_server %}, see [AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/user-provisioning-with-scim-on-ghes#supported-identity-providers).{% endif %}

* Microsoft Active Directory Federation Services (AD FS)
* Microsoft Entra ID (previously known as Azure AD)
* Okta
* OneLogin
* PingOne
* Shibboleth
