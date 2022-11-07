---
title: 关于使用 SAML 单一登录进行的标识和访问管理
intro: '如果您使用身份提供程序 (IdP) 集中管理用户身份和应用程序，可以配置安全声明标记语言 (SAML) 单点登录 (SSO) 来保护组织在 {% data variables.product.prodname_dotcom %} 上的资源。'
redirect_from:
  - /articles/about-identity-and-access-management-with-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: IAM with SAML SSO
ms.openlocfilehash: 63ed023c1ca5d52ea7b06f5fd485c5e0b34c9750
ms.sourcegitcommit: 6b649e03ca2fef38c9ebbeec92102219849380e2
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120615'
---
{% data reusables.saml.ghec-only %}

## 关于 SAML SSO

{% data reusables.saml.dotcom-saml-explanation %}

{% data reusables.saml.saml-accounts %}

{% data reusables.saml.resources-without-sso %}

{% data reusables.saml.outside-collaborators-exemption %}

组织所有者可以对单个组织强制实施 SAML SSO，企业所有者可以为企业帐户中的所有组织强制实施 SAML SSO。 有关详细信息，请参阅“[为企业配置 SAML 单一登录](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)”。

在为您的组织启用 SAML SSO 之前，您需要将 IdP 连接到组织。 有关详细信息，请参阅“[将标识提供者连接到组织](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization)”。

对于组织，SAML SSO 可以禁用、启用但不实施或者启用并实施。 为组织启用 SAML SSO 并且组织成员使用 IdP 成功完成身份验证后，您可以实施 SAML SSO 配置。 有关为 {% data variables.product.prodname_dotcom %} 组织强制实施 SAML SSO 的更多信息，请参阅“[为组织强制实施 SAML 单一登录](/articles/enforcing-saml-single-sign-on-for-your-organization)”。

成员必须定期使用您的 IdP 进行身份验证，以获得对组织资源的访问权限。 此登录期的持续时间由 IdP 指定，一般为 24 小时。 此定期登录要求会限制访问的时长，您必须重新验证身份后才可继续访问。

要在命令行上使用 API 和 Git 访问组织受保护的资源，成员必须授权并使用{% data variables.product.pat_generic %}或 SSH 密钥验证身份。 有关详细信息，请参阅“[授权用于 SAML 单一登录的{% data variables.product.pat_generic %}](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)”和“[授权用于 SAML 单一登录的 SSH 密钥](/github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)”。

成员第一次使用 SAML SSO 访问你的组织时，{% data variables.product.prodname_dotcom %} 会自动创建一条记录，以链接你的组织、成员在 {% data variables.location.product_location %} 上的帐户以及成员在 IdP 上的帐户。 您可以查看和撤销组织成员或企业帐户关联的 SAML 身份、活动的会话以及授权的凭据。 有关详细信息，请参阅“[查看和管理成员对组织的 SAML 访问](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)”和“[查看和管理用户对企业帐户的 SAML 访问](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise)”。

如果成员在创建新的仓库时使用 SAML SSO 会话登录，则该仓库的默认可见性为私密。 否则，默认可见性为公开。 有关存储库可见性的详细信息，请参阅“[关于存储库](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)”。

组织成员还必须具有活动的 SAML 会话才可授权 {% data variables.product.prodname_oauth_app %}。 您可以联系 {% data variables.contact.contact_support %} 选择退出此要求。 {% data variables.product.product_name %} 不建议退出此要求，因为它会使您的组织面临更高的帐户接管风险和潜在的数据丢失风险。

{% data reusables.saml.saml-single-logout-not-supported %}

## 支持的 SAML 服务

{% data reusables.saml.saml-supported-idps %}

有些 IdP 支持配置通过 SCIM 访问 {% data variables.product.prodname_dotcom %} 组织。 有关详细信息，请参阅“[关于组织的 SCIM](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)”。

{% data reusables.scim.enterprise-account-scim %} 

## 使用 SAML SSO 添加成员到组织

启用 SAML SSO 后，可以通过多种方式向组织添加新成员。 组织所有者可在 {% data variables.product.product_name %} 上或使用 API 手动邀请新成员。 有关详细信息，请参阅“[邀请用户加入你的组织](/articles/inviting-users-to-join-your-organization)”和“[成员](/rest/reference/orgs#add-or-update-organization-membership)”。

若要在没有组织所有者邀请的情况下预配新用户，可使用 URL `https://github.com/orgs/ORGANIZATION/sso/sign_up`，并将“ORGANIZATION”替换为你的组织名称。 例如，您可以配置 IdP，让能访问 IdP 的任何人都可单击 IdP 仪表板上的链接加入 {% data variables.product.prodname_dotcom %} 组织。

{% note %}

注意：只有在组织级别而不是企业帐户级别配置 SAML SSO 时，才支持通过 `https://github.com/orgs/ORGANIZATION/sso/sign_up` 预配新用户。 有关企业帐户 SAML SSO 的详细信息，请参阅“[关于企业 IAM 的 SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)”。

{% endnote %}

如果您的 IdP 支持 SCIM，当您在 IdP 上授予访问权限时，{% data variables.product.prodname_dotcom %} 可以自动邀请成员加入您的组织。 如果您删除成员对 SAML IdP 上 {% data variables.product.prodname_dotcom %} 组织的访问权限，该成员将自动从 {% data variables.product.prodname_dotcom %} 组织删除。 有关详细信息，请参阅“[关于组织的 SCIM](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)”。

{% data reusables.organizations.team-synchronization %}

{% data reusables.saml.saml-single-logout-not-supported %}

## 延伸阅读

- “[SAML 配置参考](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference)”
- “[关于双因素身份验证和 SAML 单一登录](/articles/about-two-factor-authentication-and-saml-single-sign-on)”
- “[关于使用 SAML 单一登录进行身份验证](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)”
