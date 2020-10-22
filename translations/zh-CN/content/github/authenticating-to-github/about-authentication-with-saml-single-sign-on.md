---
title: 关于使用 SAML 单点登录进行身份验证
intro: '您可以通过身份提供程序 (IdP) 验证来访问使用 SAML 单点登录 (SSO) 的组织。 要在组织实施 SAML SSO 时使用命令行上的 API 或 Git 进行身份验证，您必须授权个人访问令牌或 SSH 密钥。'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/about-authentication-with-saml-single-sign-on
versions:
  free-pro-team: '*'
---

{% data reusables.saml.dotcom-saml-explanation %} 组织所有者可以邀请您在 {% data variables.product.prodname_dotcom %} 上的用户帐户加入其使用 SAML SSO 的组织，这样您可以对该组织做出贡献，并且保留您在 {% data variables.product.prodname_dotcom %} 上的现有身份和贡献。

在访问使用 SAML SSO 的组织中的资源时，{% data variables.product.prodname_dotcom %} 会将您重定向到组织的 SAML IdP 进行身份验证。 在 IdP 上成功验证您的帐户后，IdP 会将您重定向回到 {% data variables.product.prodname_dotcom %}，您可以在那里访问组织的资源。

{% data reusables.saml.outside-collaborators-exemption %}

如果您最近在浏览器中使用组织的 SAML IdP 进行过身份验证，则在访问使用 SAML SSO 的 {% data variables.product.prodname_dotcom %} 组织时会自动获得授权。 如果您最近没有在浏览器中使用组织的 SAML IdP 进行身份验证，则必须在 SAML IdP 进行身份验证后才可访问组织。

必须定期使用 SAML IdP 验证身份和访问组织在 {% data variables.product.prodname_dotcom %} 上的资源。 此登录期的持续时间由 IdP 指定，一般为 24 小时。 此定期登录要求会限制访问的时长，您必须重新验证身份后才可继续访问。 您可以在安全设置中查看和管理活动的 SAML 会话。 更多信息请参阅“[查看和管理活动的 SAML 会话](/articles/viewing-and-managing-your-active-saml-sessions)”。

要在命令行上使用 API 或 Git 访问使用 SAML SSO 的组织中受保护的内容，需要使用授权的 HTTPS 个人访问令牌或授权的 SSH 密钥。 默认授权 {% data variables.product.prodname_oauth_app %} 访问令牌。

如果没有个人访问令牌或 SSH 密钥，可以创建用于命令行的个人访问令牌或生成新的 SSH 密钥。 更多信息请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”或“[生成新的 SSH 密钥并添加到 ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”。

要对实施 SAML SSO 的组织使用新的或现有的个人访问令牌或 SSH 密钥，需要授权该令牌或授权 SSH 密钥用于 SAML SSO 组织。 更多信息请参阅“[授权个人访问令牌用于 SAML 单点登录](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)”或“[授权 SSH 密钥用于 SAML 单点登录](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)”。

每次授权 {% data variables.product.prodname_oauth_app %} 时必须有活动的 SAML 会话。

### 延伸阅读

- "[关于使用 SAML 单点登录管理身份和访问](/github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on)"
