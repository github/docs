---
title: 关于使用 SAML 单点登录进行身份验证
intro: '您可以通过使用 SAML 单点登录 (SSO) 通过身份提供程序 (IdP)验证 {% if currentVersion == "github-ae@latest" %}，来访问 {% data variables.product.product_location %}{% elsif currentVersion == "free-pro-team@latest" %}使用 SAML 单点登录 (SSO) 的组织{% endif %}。{% if currentVersion == "free-pro-team@latest" %}从 {% data variables.product.product_name %} 使用 IdP 成功验证后，您必须授权要用于访问组织资源的的任何个人访问令牌、SSH 密钥或 {% data variables.product.prodname_oauth_app %}。{% endif %}'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/about-authentication-with-saml-single-sign-on
versions:
  free-pro-team: '*'
  github-ae: '*'
topics:
  - SSO
---

### 关于使用 SAML SSO 进行身份验证

{% if currentVersion == "github-ae@latest" %}

SAML SSO 允许企业所有者从 SAML IdP 集中控制和安全访问 {% data variables.product.product_name %}。 在浏览器中访问 {% data variables.product.product_location %} 时，{% data variables.product.product_name %} 会将用户重定向到您的 IdP 进行身份验证。 在使用 IdP 上的帐户成功进行身份验证后，IdP 会将您重定向回 {% data variables.product.product_location %}。 {% data variables.product.product_name %} 将验证 IdP 的响应，然后授予访问权限。

{% data reusables.saml.you-must-periodically-authenticate %}

如果您无法访问 {% data variables.product.product_name %}，请与本地企业所有者或 {% data variables.product.product_name %} 的管理员联系。 您可以在 {% data variables.product.product_name %} 上的任何页面底部单击 **Support（支持）**找到企业的联系信息。 {% data variables.product.company_short %} 和 {% data variables.contact.github_support %} 无法访问您的 IdP，并且无法解决身份验证问题。

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

{% data reusables.saml.dotcom-saml-explanation %} 组织所有者可以邀请您在 {% data variables.product.prodname_dotcom %} 上的用户帐户加入其使用 SAML SSO 的组织，这样您可以对该组织做出贡献，并且保留您在 {% data variables.product.prodname_dotcom %} 上的现有身份和贡献。

在访问使用 SAML SSO 的组织中的资源时，{% data variables.product.prodname_dotcom %} 会将您重定向到组织的 SAML IdP 进行身份验证。 在 IdP 上成功验证您的帐户后，IdP 会将您重定向回到 {% data variables.product.prodname_dotcom %}，您可以在那里访问组织的资源。

{% data reusables.saml.outside-collaborators-exemption %}

如果您最近在浏览器中使用组织的 SAML IdP 进行过身份验证，则在访问使用 SAML SSO 的 {% data variables.product.prodname_dotcom %} 组织时会自动获得授权。 如果您最近没有在浏览器中使用组织的 SAML IdP 进行身份验证，则必须在 SAML IdP 进行身份验证后才可访问组织。

{% data reusables.saml.you-must-periodically-authenticate %}

要在命令行上使用 API 或 Git 访问使用 SAML SSO 的组织中受保护的内容，需要使用授权的 HTTPS 个人访问令牌或授权的 SSH 密钥。

如果没有个人访问令牌或 SSH 密钥，可以创建用于命令行的个人访问令牌或生成新的 SSH 密钥。 更多信息请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”或“[生成新的 SSH 密钥并添加到 ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”。

要对使用或实施 SAML SSO 的组织使用新的或现有的个人访问令牌或 SSH 密钥，需要授权该令牌或授权 SSH 密钥用于 SAML SSO 组织。 更多信息请参阅“[授权个人访问令牌用于 SAML 单点登录](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)”或“[授权 SSH 密钥用于 SAML 单点登录](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)”。

### 关于 {% data variables.product.prodname_oauth_apps %} 和 SAML SSO

每次授权 {% data variables.product.prodname_oauth_app %} 访问使用或实施 SAML SSO 的组织时，您必须有一个活动的 SAML 会话。

在企业或组织所有者为组织启用或实施 SAML SSO 后，您必须重新授权先前已授权访问组织的任何 {% data variables.product.prodname_oauth_app %}。 要查看您已授权或重新授权 {% data variables.product.prodname_oauth_app %} 的 {% data variables.product.prodname_oauth_apps %}，请访问您的 [{% data variables.product.prodname_oauth_apps %} 页面](https://github.com/settings/applications)。

{% endif %}

### 延伸阅读

{% if currentVersion == "free-pro-team@latest" %}- "[关于使用 SAML 单点登录管理身份和访问](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)"{% endif %}
{% if currentVersion == "github-ae@latest" %}- "[关于企业的身份和访问权限管理](/admin/authentication/about-identity-and-access-management-for-your-enterprise)"{% endif %}
