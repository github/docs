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

{% data variables.product.product_name %} 上的企业所有者可以控制身份验证和访问企业资源的要求。

You can choose to allow members to create and manage user accounts, or your enterprise can create and manage accounts for members with {% data variables.product.prodname_emus %}. 如果您允许成员管理自己的帐户，则还可以配置 SAML 身份验证，以提高安全性，并集中团队使用的 Web 应用程序的身份和访问权限。

After learning more about these options, to determine which method is best for your enterprise, see "[Identifying the best authentication method for your enterprise](#identifying-the-best-authentication-method-for-your-enterprise)."

## {% data variables.product.product_name %} 的身份验证方法

以下选项可用于 {% data variables.product.product_name %} 上的帐户管理和身份验证。

- [通过 {% data variables.product.product_location %} 进行身份验证](#authentication-through-githubcom)
- [通过具有附加 SAML 访问限制的 {% data variables.product.product_location %} 进行身份验证](#authentication-through-githubcom-with-additional-saml-access-restriction)
- [Authentication with {% data variables.product.prodname_emus %} and federation](#authentication-with-enterprise-managed-users-and-federation)

### 通过 {% data variables.product.product_location %} 进行身份验证

默认情况下，每个成员都必须在 {% data variables.product.product_location %} 上创建个人帐户。 您授予对企业的访问权限，该成员可以在登录 {% data variables.product.product_location %} 上的帐户后访问您企业的资源。 该成员管理该帐户，并且可以为 {% data variables.product.product_location %} 上的其他企业、组织和存储库做出贡献。

### 通过具有附加 SAML 访问限制的 {% data variables.product.product_location %} 进行身份验证

如果配置了其他 SAML 访问限制，则每个成员都必须在 {% data variables.product.product_location %} 上创建和管理个人帐户。 您授予对企业的访问权限，在 {% data variables.product.product_location %} 登录账户并使用 SAML 身份提供程序 (IdP) 成功进行身份验证后，成员可以访问您企业的资源。 成员可以使用其个人帐户向在 {% data variables.product.product_location %} 上的其他企业、组织和存储库做出贡献。 有关要求对所有访问企业资源进行 SAML 身份验证的更多信息，请参阅“[关于企业 IAM 的 SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)”。

如果您对 {% data variables.product.product_name %} 使用独立组织，或者您不想对企业中的每个组织使用 SAML 身份验证，则可以为单个组织配置 SAML。 更多信息请参阅“[关于使用 SAML 单点登录管理身份和访问](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)”。

### Authentication with {% data variables.product.prodname_emus %} and federation

如果您需要增强控制您在 {% data variables.product.product_location %} 上的企业成员的帐户，则可以使用 {% data variables.product.prodname_emus %}。 借助 {% data variables.product.prodname_emus %}，您可以使用 IdP 在 {% data variables.product.product_location %} 上为您的企业成员配置和管理帐户。 每个成员登录到您创建的帐户，您的企业将管理该帐户。 参与 {% data variables.product.prodname_dotcom_the_website %} 的其余部分受到限制。 更多信息请参阅“[关于 {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)”。

## Identifying the best authentication method for your enterprise

Both SAML SSO and {% data variables.product.prodname_emus %} increase security for your enterprise's resources. {% data variables.product.prodname_emus %} additionally allows you to control the user accounts for your enterprise members and restricts what the accounts are able to do. However, those restrictions may be unacceptable for your enterprise if they obstruct your developers' workflows.

To determine whether your enterprise would benefit more from SAML SSO or {% data variables.product.prodname_emus %}, ask yourself these questions.

- [Do you want to control the user accounts for your users?](#do-you-want-to-control-the-user-accounts-for-your-users)
- [Which identity provider does your enterprise use?](#which-identity-provider-does-your-enterprise-use)
- [Do your developers work in public repositories, gists, or {% data variables.product.prodname_pages %} sites?](#do-your-developers-work-in-public-repositories-gists-or-github-pages-sites)
- [Do your developers rely on collaboration outside of your enterprise?](#do-your-developers-rely-on-collaboration-outside-of-your-enterprise)
- [Does your enterprise rely on outside collaborators?](#does-your-enterprise-rely-on-outside-collaborators)
- [Can your enterprise tolerate migration costs?](#can-your-enterprise-tolerate-migration-costs)

### Do you want to control the user accounts for your users?

{% data variables.product.prodname_emus %} may be right for your enterprise if you don't want enterprise members to use their own personal accounts on {% data variables.product.prodname_dotcom_the_website %} to access your enterprise's resources.

With SAML SSO, developers create and manage their own personal accounts, and each account is linked to a SAML identity in your IdP. {% data variables.product.prodname_emus %} functions more like other familiar SSO solutions, as you will provision the accounts for your users. You can also ensure user accounts conform with your company identity, by controlling usernames and the email addresses associated with the accounts.

If you currently require your users to create a new account on {% data variables.product.prodname_dotcom_the_website %} to use with your enterprise only, {% data variables.product.prodname_emus %} might be right for you. However, SAML SSO may be a better option if using your IdP as the source of truth for your user and access management would add too much complexity. For example, perhaps your enterprise does not have an established process for onboarding new users in your IdP.

### Which identity provider does your enterprise use?

{% data variables.product.prodname_emus %} is supported for a limited number of IdPs, while SAML SSO offers full support for a larger number of IdPs, plus limited support for all IdPs that implement the SAML 2.0 standard. For the list of supported IdPs for each option, see "[About {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#identity-provider-support)" and "[About SAML for enterprise IAM](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam#supported-idps)."

You can use {% data variables.product.prodname_emus %} with an unsupported IdP only if you federate the unsupported IdP to a supported IdP to use as an integration point. If you wish to avoid this extra complexity, SAML SSO may be a better solution for you.

### Do your developers work in public repositories, gists, or {% data variables.product.prodname_pages %} sites?

To prevent enterprise members from accidentally leaking corporate-owned content to the public on {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_emus %} imposes strong restrictions on what users can do. For example, {% data variables.product.prodname_managed_users %} cannot create public repositories, gists of any visibility, or {% data variables.product.prodname_pages %} sites that are visible outside the enterprise. For a full list of restrictions, see "[Abilities and restrictions of {% data variables.product.prodname_managed_users %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-users)."

These restrictions are unacceptable for some enterprises. To determine whether {% data variables.product.prodname_emus %} will work for you, review the restrictions with your developers, and confirm whether any of the restrictions will hinder your existing workflows. If so, SAML SSO may be a better choice for your enterprise.

### Do your developers rely on collaboration outside of your enterprise?

{% data variables.product.prodname_managed_users_caps %} can only contribute to repositories within your enterprise. If your developers need to collaborate in repositories outside your enterprise, even private repositories, to complete their work, {% data variables.product.prodname_emus %} may not be right for your enterprise, and SAML SSO may be a better solution.

### Does your enterprise rely on outside collaborators?

With SAML SSO, you can give access to specific repositories to people who are not members of your IdP's directory, by using the outside collaborator role. This can be especially useful for collaborators that are external to your business, such as contractors. For more information, see "[Adding outside collaborators to repositories in your organization](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)."

With {% data variables.product.prodname_emus %}, the outside collaborator role does not exist. Your enterprise's resources can only be accessed by {% data variables.product.prodname_managed_users %}, which are always provisioned by your IdP. To give external collaborators access to your enterprise, you would have to use guest accounts in your IdP. If you're interested in {% data variables.product.prodname_emus %}, confirm with your developers whether this will hinder any of their existing workflows. If so, SAML SSO may be a better solution.

### Can your enterprise tolerate migration costs?

If your enterprise is new to {% data variables.product.prodname_dotcom_the_website %}, SAML SSO and {% data variables.product.prodname_emus %} are equally easy to adopt.

If you're already using {% data variables.product.prodname_dotcom_the_website %} with developers managing their own user accounts, adopting {% data variables.product.prodname_emus %} requires migrating to a new enterprise account. For more information, see "[About enterprises with {% data variables.product.prodname_managed_users %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#about-enterprises-with-managed-users)."

Although {% data variables.product.prodname_emus %} is free, the migration process may require time or cost from your team. Confirm that this migration process is acceptable to your business and your developers. If not, SAML SSO may be the better choice for you.

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

## 延伸阅读

- "[{% data variables.product.company_short %} 帐户的类型](/get-started/learning-about-github/types-of-github-accounts)"
- “[关于企业帐户](/admin/overview/about-enterprise-accounts)”
{%- ifversion ghec %}
- “[是否可以为组织中的人员创建帐户？](/organizations/managing-membership-in-your-organization/can-i-create-accounts-for-people-in-my-organization)”
{% endif %}
