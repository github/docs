Before you can authorize a personal access token or SSH key, you must have a linked SAML identity. If you're a member of an organization where SAML SSO is enabled, you can create a linked identity by authenticating to your organization with your IdP at least once. 更多信息请参阅“[关于使用 SAML 单点登录进行身份验证](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)”。

After you authorize a personal access token or SSH key. The token or key will stay authorized until revoked in one of these ways.
- An organization or enterprise owner revokes the authorization.
- You are removed from the organization.
- The scopes in a personal access token are edited, or the token is regenerated.
- The personal access token expired as defined during creation.
