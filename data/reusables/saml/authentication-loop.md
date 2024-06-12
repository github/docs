## Users are repeatedly redirected to authenticate

If users are repeatedly redirected to the SAML authentication prompt in a loop, you may need to increase the SAML session duration in your IdP settings.

The `SessionNotOnOrAfter` value sent in a SAML response determines when a user will be redirected back to the IdP to authenticate. If a SAML session duration is configured for 2 hours or less, {% data variables.product.prodname_dotcom %} will refresh a SAML session 5 minutes before it expires. If your session duration is configured as 5 minutes or less, users can get stuck in a SAML authentication loop.

To fix this problem, we recommend configuring a minimum SAML session duration of 4 hours. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#session-duration-and-timeout)."
