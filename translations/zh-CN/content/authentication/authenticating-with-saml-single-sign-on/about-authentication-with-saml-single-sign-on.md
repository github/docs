---
title: 关于使用 SAML 单点登录进行身份验证
intro: 'You can access {% ifversion ghae %}{% data variables.product.product_location %}{% elsif ghec %}an organization that uses SAML single sign-on (SSO){% endif %} by authenticating {% ifversion ghae %}with SAML single sign-on (SSO) {% endif %}through an identity provider (IdP).'
redirect_from:
  - /articles/about-authentication-with-saml-single-sign-on
  - /github/authenticating-to-github/about-authentication-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on
versions:
  ghae: '*'
  ghec: '*'
topics:
  - SSO
shortTitle: SAML 单点登录
---

## 关于使用 SAML SSO 进行身份验证

{% ifversion ghae %}

SAML SSO 允许企业所有者从 SAML IdP 集中控制和安全访问 {% data variables.product.product_name %}。 在浏览器中访问 {% data variables.product.product_location %} 时，{% data variables.product.product_name %} 会将用户重定向到您的 IdP 进行身份验证。 在使用 IdP 上的帐户成功进行身份验证后，IdP 会将您重定向回 {% data variables.product.product_location %}。 {% data variables.product.product_name %} 将验证 IdP 的响应，然后授予访问权限。

{% data reusables.saml.you-must-periodically-authenticate %}

如果您无法访问 {% data variables.product.product_name %}，请与本地企业所有者或 {% data variables.product.product_name %} 的管理员联系。 您可以在 {% data variables.product.product_name %} 上的任何页面底部单击 **Support（支持）**找到企业的联系信息。 {% data variables.product.company_short %} 和 {% data variables.contact.github_support %} 无法访问您的 IdP，并且无法解决身份验证问题。

{% endif %}

{% ifversion fpt or ghec %}

{% data reusables.saml.dotcom-saml-explanation %} 组织所有者可以邀请您在 {% data variables.product.prodname_dotcom %} 上的个人帐户加入其使用 SAML SSO 的组织，这样您可以对该组织做出贡献，并且保留您在 {% data variables.product.prodname_dotcom %} 上的现有身份和贡献。

If you're a member of an {% data variables.product.prodname_emu_enterprise %}, you will instead use a new account that is provisioned for you and controlled by your enterprise. {% data reusables.enterprise-accounts.emu-more-info-account %}

When you access private resources within an organization that uses SAML SSO, {% data variables.product.prodname_dotcom %} will redirect you to the organization's SAML IdP to authenticate. 在 IdP 上成功验证您的帐户后，IdP 会将您重定向回到 {% data variables.product.prodname_dotcom %}，您可以在那里访问组织的资源。

{% data reusables.saml.outside-collaborators-exemption %}

如果您最近在浏览器中使用组织的 SAML IdP 进行过身份验证，则在访问使用 SAML SSO 的 {% data variables.product.prodname_dotcom %} 组织时会自动获得授权。 如果您最近没有在浏览器中使用组织的 SAML IdP 进行身份验证，则必须在 SAML IdP 进行身份验证后才可访问组织。

{% data reusables.saml.you-must-periodically-authenticate %}

## Linked SAML identities

When you authenticate with your IdP account and return to {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_dotcom %} will record a link in the organization or enterprise between your {% data variables.product.prodname_dotcom %} personal account and the SAML identity you signed into.  This linked identity is used to validate your membership in that organization, and depending on your organization or enterprise setup, is also used to determine which organizations and teams you're a member of as well. Each {% data variables.product.prodname_dotcom %} account can be linked to exactly one SAML identity per organization. Likewise, each SAML identity can be linked to exactly one {% data variables.product.prodname_dotcom %} account in an organization.

If you sign in with a SAML identity that is already linked to another {% data variables.product.prodname_dotcom %} account, you will receive an error message indicating that you cannot sign in with that SAML identity. This situation can occur if you are attempting to use a new {% data variables.product.prodname_dotcom %} account to work inside of your organization. If you didn't intend to use that SAML identity with that {% data variables.product.prodname_dotcom %} account, then you'll need to sign out of that SAML identity and then repeat the SAML login. If you do want to use that SAML identity with your {% data variables.product.prodname_dotcom %} account, you'll need to ask your admin to unlink your SAML identity from your old account, so that you can link it to your new account.  Depending on the setup of your organization or enterprise, your admin may also need to reassign your identity within your SAML provider.  更多信息请参阅“[查看和管理成员对组织的 SAML 访问](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)”。

If the SAML identity you sign in with does not match the SAML identity that is currently linked to your {% data variables.product.prodname_dotcom %} account, you'll receive a warning that you are about to relink your account. Because your SAML identity is used to govern access and team membership, continuing with the new SAML identity can cause you to lose access to teams and organizations inside of {% data variables.product.prodname_dotcom %}. Only continue if you know that you're supposed to use that new SAML identity for authentication in the future.

## Authorizing PATs and SSH keys with SAML SSO

要在命令行上使用 API 或 Git 访问使用 SAML SSO 的组织中受保护的内容，需要使用授权的 HTTPS 个人访问令牌或授权的 SSH 密钥。

如果没有个人访问令牌或 SSH 密钥，可以创建用于命令行的个人访问令牌或生成新的 SSH 密钥。 更多信息请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”或“[生成新的 SSH 密钥并添加到 ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”。

要对使用或实施 SAML SSO 的组织使用新的或现有的个人访问令牌或 SSH 密钥，需要授权该令牌或授权 SSH 密钥用于 SAML SSO 组织。 更多信息请参阅“[授权个人访问令牌用于 SAML 单点登录](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)”或“[授权 SSH 密钥用于 SAML 单点登录](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)”。

## 关于 {% data variables.product.prodname_oauth_apps %}、{% data variables.product.prodname_github_apps %} 和 SAML SSO

每次授权 {% data variables.product.prodname_oauth_app %} 或 {% data variables.product.prodname_github_app %} 访问使用或实施 SAML SSO 的组织时，您必须有一个活动的 SAML 会话。 您可以通过导航到浏览器中的 `https://github.com/orgs/ORGANIZATION-NAME/sso` 来创建活动的 SAML 会话。

在企业或组织所有者为组织启用或强制实施 SAML SSO 后，以及在首次通过 SAML 进行身份验证后，您必须重新授权以前有权访问该组织的任何 {% data variables.product.prodname_oauth_apps %} 或 {% data variables.product.prodname_github_apps %}。

要查看您授权的 {% data variables.product.prodname_oauth_apps %} ，请访问您的 [{% data variables.product.prodname_oauth_apps %} 页面](https://github.com/settings/applications)。 要查看您授权的 {% data variables.product.prodname_github_apps %} ，请访问您的 [{% data variables.product.prodname_github_apps %} 页面](https://github.com/settings/apps/authorizations)。

{% endif %}

## 延伸阅读

{% ifversion ghec %}- "[关于使用 SAML 单点登录管理身份和访问](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)"{% endif %}
{% ifversion ghae %}- "[关于企业的身份和访问权限管理](/admin/authentication/about-identity-and-access-management-for-your-enterprise)"{% endif %}
