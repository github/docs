Before you can authorize a {% data variables.product.pat_generic %} or SSH key, you must have a linked SAML identity. If you're a member of an organization where SAML SSO is enabled, you can create a linked identity by authenticating to your organization with your IdP at least once. For more information, see "[AUTOTITLE](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)."

After you authorize a {% data variables.product.pat_generic %} or SSH key, the token or key will stay authorized until revoked in one of the following ways.
- An organization or enterprise owner revokes the authorization.
- You are removed from the organization.
- The scopes in a {% data variables.product.pat_generic %} are edited, or the token is regenerated.
- The {% data variables.product.pat_generic %} expired as defined during creation.
