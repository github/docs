---
title: 关于使用 SAML 单点登录管理身份和访问
intro: '如果您使用身份提供程序 (IdP) 集中管理用户身份和应用程序，可以配置安全声明标记语言 (SAML) 单点登录 (SSO) 来保护组织在 {% data variables.product.prodname_dotcom %} 上的资源。'
redirect_from:
  - /articles/about-identity-and-access-management-with-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 使用 SAML SSO 的 IAM
---

{% data reusables.enterprise-accounts.emu-saml-note %}

## 关于 SAML SSO

{% data reusables.saml.dotcom-saml-explanation %}

{% data reusables.saml.saml-accounts %}

组织所有者可以对单个组织强制实施 SAML SSO，企业所有者可以为企业帐户中的所有组织强制实施 SAML SSO。 更多信息请参阅“[配置企业的 SAML 单点登录](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)”。

{% data reusables.saml.outside-collaborators-exemption %}

在为您的组织启用 SAML SSO 之前，您需要将 IdP 连接到组织。 更多信息请参阅“[将身份提供程序连接到组织](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization)”。

对于组织，SAML SSO 可以禁用、启用但不实施或者启用并实施。 为组织启用 SAML SSO 并且组织成员使用 IdP 成功完成身份验证后，您可以实施 SAML SSO 配置。 有关对 {% data variables.product.prodname_dotcom %} 组织实施 SAML SSO 的更多信息，请参阅“[对组织实施 SAML 单点登录](/articles/enforcing-saml-single-sign-on-for-your-organization)”。

成员必须定期使用您的 IdP 进行身份验证，以获得对组织资源的访问权限。 此登录期的持续时间由 IdP 指定，一般为 24 小时。 此定期登录要求会限制访问的时长，您必须重新验证身份后才可继续访问。

要在命令行使用 API 和 Git 访问组织受保护的资源，成员必须授权并使用个人访问令牌或 SSH 密钥验证身份。 更多信息请参阅“[授权个人访问令牌用于 SAML 单点登录](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)”和“[授权 SSH 密钥用于 SAML 单点登录](/github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)”。

成员第一次使用 SAML SSO 访问您的组织时，{% data variables.product.prodname_dotcom %} 会自动创建一条记录，以链接您的组织、成员在 {% data variables.product.product_location %} 上的帐户以及成员在 IdP 上的帐户。 您可以查看和撤销组织成员或企业帐户关联的 SAML 身份、活动的会话以及授权的凭据。 更多信息请参阅“[查看和管理成员对组织的 SAML 访问](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)”和“[查看和管理用户对企业帐户的 SAML 访问](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise)”。

如果成员在创建新的仓库时使用 SAML SSO 会话登录，则该仓库的默认可见性为私密。 否则，默认可见性为公开。 有关仓库可见性的更多信息，请参阅“[关于仓库](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)。”

组织成员还必须具有活动的 SAML 会话才可授权 {% data variables.product.prodname_oauth_app %}。 您可以联系 {% data variables.contact.contact_support %} 选择退出此要求。 {% data variables.product.product_name %} 不建议退出此要求，因为它会使您的组织面临更高的帐户接管风险和潜在的数据丢失风险。

{% data reusables.saml.saml-single-logout-not-supported %}

## 支持的 SAML 服务

{% data reusables.saml.saml-supported-idps %}

有些 IdP 支持配置通过 SCIM 访问 {% data variables.product.prodname_dotcom %} 组织。 {% data reusables.scim.enterprise-account-scim %} 更多信息请参阅“[关于 SCIM](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim)”。

## 使用 SAML SSO 添加成员到组织

在启用 SAML SSO 后，可通过多种方式向组织添加新成员。 组织所有者可在 {% data variables.product.product_name %} 上或使用 API 手动邀请新成员。 更多信息请参阅“[邀请用户加入组织](/articles/inviting-users-to-join-your-organization)”和“[成员](/rest/reference/orgs#add-or-update-organization-membership)”。

要供应新用户而不使用组织所有者的邀请，您可以使用 URL `https://github.com/orgs/ORGANIZATION/sso/sign_up`，将 _ORGANIZATION_ 替换为组织的名称。 例如，您可以配置 IdP，让能访问 IdP 的任何人都可单击 IdP 仪表板上的链接加入 {% data variables.product.prodname_dotcom %} 组织。

如果您的 IdP 支持 SCIM，当您在 IdP 上授予访问权限时，{% data variables.product.prodname_dotcom %} 可以自动邀请成员加入您的组织。 如果您删除成员对 SAML IdP 上 {% data variables.product.prodname_dotcom %} 组织的访问权限，该成员将自动从 {% data variables.product.prodname_dotcom %} 组织删除。 更多信息请参阅“[关于 SCIM](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim)”。

{% data reusables.organizations.team-synchronization %}

{% data reusables.saml.saml-single-logout-not-supported %}

## 延伸阅读

- "[关于双重身份验证和 SAML 单点登录](/articles/about-two-factor-authentication-and-saml-single-sign-on)"
- "[关于使用 SAML 单点登录进行身份验证](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)"
