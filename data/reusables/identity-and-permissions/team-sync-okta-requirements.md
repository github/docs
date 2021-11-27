To enable team synchronization for Okta, you or your IdP administrator must:

- Enable SAML SSO and SCIM for your organization using Okta. For more information, see "[Configuring SAML single sign-on and SCIM using Okta](/organizations/managing-saml-single-sign-on-for-your-organization/configuring-saml-single-sign-on-and-scim-using-okta)."
- Provide the tenant URL for your Okta instance.
- Generate a valid SSWS token with read-only admin permissions for your Okta installation as a service user. For more information, see [Create the token](https://developer.okta.com/docs/guides/create-an-api-token/create-the-token/) and [Service users](https://help.okta.com/en/prod/Content/Topics/Adv_Server_Access/docs/service-users.htm) in Okta's documentation.
