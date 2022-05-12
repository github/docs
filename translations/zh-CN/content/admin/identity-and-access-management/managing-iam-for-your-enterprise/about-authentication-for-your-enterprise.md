---
title: 关于企业的身份验证
shortTitle: 关于身份验证
intro: '您必须 {% ifversion ghae %}配置 SAML 单点登录 (SSO)，以便用户可以{% else %}可以选择人员如何{% endif %} 进行身份验证，以便访问{% ifversion ghec %} {% data variables.product.product_name %} 上的企业资源{% elsif ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}上的企业{% endif %}。'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
---

## 关于企业的身份验证

{% ifversion ghec %}

{% data variables.product.product_name %} 上的企业所有者可以控制身份验证和访问企业资源的要求。 您可以选择允许成员创建和管理用户帐户，或者您的企业可以为成员创建和管理帐户。 如果您允许成员管理自己的帐户，则还可以配置 SAML 身份验证，以提高安全性，并集中团队使用的 Web 应用程序的身份和访问权限。 如果选择管理成员的用户帐户，则必须配置 SAML 身份验证。

## {% data variables.product.product_name %} 的身份验证方法

以下选项可用于 {% data variables.product.product_name %} 上的帐户管理和身份验证。

- [通过 {% data variables.product.product_location %} 进行身份验证](#authentication-through-githubcom)
- [通过具有附加 SAML 访问限制的 {% data variables.product.product_location %} 进行身份验证](#authentication-through-githubcom-with-additional-saml-access-restriction)
- [使用 {% data variables.product.prodname_emus %} 和 SAML SSO 进行身份验证](#authentication-with-enterprise-managed-users-and-saml-sso)

### 通过 {% data variables.product.product_location %} 进行身份验证

默认情况下，每个成员都必须在 {% data variables.product.product_location %} 上创建个人帐户。 您授予对企业的访问权限，该成员可以在登录 {% data variables.product.product_location %} 上的帐户后访问您企业的资源。 该成员管理该帐户，并且可以为 {% data variables.product.product_location %} 上的其他企业、组织和存储库做出贡献。

### 通过具有附加 SAML 访问限制的 {% data variables.product.product_location %} 进行身份验证

如果配置了其他 SAML 访问限制，则每个成员都必须在 {% data variables.product.product_location %} 上创建和管理个人帐户。 您授予对企业的访问权限，在 {% data variables.product.product_location %} 登录账户并使用 SAML 身份提供程序 (IdP) 成功进行身份验证后，成员可以访问您企业的资源。 成员可以使用其个人帐户向在 {% data variables.product.product_location %} 上的其他企业、组织和存储库做出贡献。 有关要求对所有访问企业资源进行 SAML 身份验证的更多信息，请参阅“[关于企业 IAM 的 SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)”。

如果您对 {% data variables.product.product_name %} 使用独立组织，或者您不想对企业中的每个组织使用 SAML 身份验证，则可以为单个组织配置 SAML。 更多信息请参阅“[关于使用 SAML 单点登录管理身份和访问](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)”。

### 使用 {% data variables.product.prodname_emus %} 和 SAML SSO 进行身份验证

如果您需要增强控制您在 {% data variables.product.product_location %} 上的企业成员的帐户，则可以使用 {% data variables.product.prodname_emus %}。 借助 {% data variables.product.prodname_emus %}，您可以使用 IdP 在 {% data variables.product.product_location %} 上为您的企业成员配置和管理帐户。 每个成员登录到您创建的帐户，您的企业将管理该帐户。 参与 {% data variables.product.prodname_dotcom_the_website %} 的其余部分受到限制。 更多信息请参阅“[关于 {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)”。

{% elsif ghes %}

站点管理员可以决定人员如何进行身份验证以访问 {% data variables.product.product_name %} 实例。 您可以使用 {% data variables.product.product_name %} 的内置身份验证，或者，如果要集中管理团队使用的 Web 应用程序的身份和访问，则可以配置外部身份验证方法。

## {% data variables.product.product_name %} 的身份验证方法

以下身份验证方法可用于 {% data variables.product.product_name %}。

- [内置身份验证](#built-in-authentication)
- [外部身份验证](#external-authentication)

### 内置身份验证

{% data reusables.enterprise_user_management.built-in-authentication-new-accounts %} 要访问您的实例，用户需要使用帐户的凭证进行身份验证。 更多信息请参阅“[配置内置身份验证](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication)”。

### 外部身份验证

如果使用外部目录或身份提供程序 (IdP) 集中访问多个 Web 应用程序，则可以为 {% data variables.product.product_location %} 配置外部身份验证。 更多信息请参阅以下文章。

- “[将 CAS 用于企业 IAM](/admin/identity-and-access-management/using-cas-for-enterprise-iam)”
- “[将 LDAP 用于企业 IAM](/admin/identity-and-access-management/using-ldap-for-enterprise-iam)”
- “[将 SAML 用于企业 IAM](/admin/identity-and-access-management/using-saml-for-enterprise-iam)”

如果选择使用外部身份验证，还可以为在外部身份验证提供程序上没有帐户的人员配置回退身份验证。 例如，您可能希望向承包商或计算机用户授予访问权限。 更多信息请参阅“[允许对提供程序覆盖范围以外的用户进行内置身份验证](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider)”。

{% elsif ghae %}

{% data variables.product.product_name %} 使用 SAML SSO 进行身份验证。 企业所有者必须在初始化期间使用 SAML 身份提供程序 (IdP) 配置 SAML SSO。 更多信息请参阅“[关于企业 IAM 的 SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)”。

{% endif %}

## 关于访问控制

{% ifversion ghec or ghae %}企业成员{% elsif ghes %}有权访问 {% data variables.product.product_location %} 的人员{% endif %}可以使用组织成员身份、团队和角色来管理对实例上的 {% ifversion ghec %}企业资源{% elsif ghae %}企业{% elsif ghes %}资源{% endif %} 的访问权限。 更多信息请参阅以下文章。

{%- ifversion ghec %}
- “[邀请用户加入您的组织](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)”
{%- elsif ghes or ghae %}
- “[向组织添加人员](/organizations/managing-membership-in-your-organization/adding-people-to-your-organization)”
{%- endif %}
- "[组织中的角色](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)"
- "[关于团队](/organizations/organizing-members-into-teams/about-teams)"
- "[组织的仓库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- "[用户帐户仓库的权限级别](/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository)"

## 延伸阅读

- "[{% data variables.product.company_short %} 帐户的类型](/get-started/learning-about-github/types-of-github-accounts)"
- “[关于企业帐户](/admin/overview/about-enterprise-accounts)”
{%- ifversion ghec %}
- “[是否可以为组织中的人员创建帐户？](/organizations/managing-membership-in-your-organization/can-i-create-accounts-for-people-in-my-organization)”
{% endif %}
