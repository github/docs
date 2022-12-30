---
title: 管理组织中的团队同步
intro: '您可以在身份提供程序 (IdP) 与 {% data variables.product.product_name %} 上的组织之间启用和禁用团队同步。'
redirect_from:
  - /articles/synchronizing-teams-between-your-identity-provider-and-github
  - /github/setting-up-and-managing-organizations-and-teams/synchronizing-teams-between-your-identity-provider-and-github
  - /github/articles/synchronizing-teams-between-okta-and-github
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization
permissions: Organization owners can manage team synchronization for an organization.
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage team synchronization
ms.openlocfilehash: 027669f75f3671394503e5036b8f6c86351697cf
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147093148'
---
{% data reusables.enterprise-accounts.emu-scim-note %}

## 关于团队同步

您可以在 IdP 与 {% data variables.product.product_name %} 之间启用团队同步，以允许组织所有者和团队维护员将组织中的团队与 IdP 组连接起来。

{% data reusables.identity-and-permissions.about-team-sync %}

{% data reusables.saml.ghec-only %}

{% data reusables.identity-and-permissions.supported-idps-team-sync %}

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

您还可以为企业帐户拥有的组织启用团队同步。 有关详细信息，请参阅“[为企业中的组织管理团队同步](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)”。

{% data reusables.enterprise-accounts.team-sync-override %}

{% data reusables.identity-and-permissions.team-sync-usage-limits %}

## 启用团队同步

启用团队同步的步骤取决于想要使用的 IdP。 有些启用团队同步的基本要求适用于每个 IdP。 每个 IdP 都有额外的基本要求。

### 先决条件

{% data reusables.identity-and-permissions.team-sync-required-permissions %}

您必须为您的组织和支持的 IdP 启用 SAML 单点登录。 有关详细信息，请参阅“[为组织强制实施 SAML 单一登录](/articles/enforcing-saml-single-sign-on-for-your-organization)”。

您必须具有链接的 SAML 身份。 要创建链接身份，您必须至少使用 SAML SSO 和支持的 IdP 向您的组织进行身份验证一次。 有关详细信息，请参阅“[通过 SAML 单一登录进行身份验证](/articles/authenticating-with-saml-single-sign-on)”。

SAML 设置必须包含用于“颁发者”字段的有效 IdP URL 。 

![SAML 颁发者字段](/assets/images/help/saml/saml_issuer.png)



### 为 Azure AD 启用团队同步

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.team-sync-confirm-saml %} {% data reusables.identity-and-permissions.enable-team-sync-azure %} {% data reusables.identity-and-permissions.team-sync-confirm %}
6. 查看要与组织连接的标识提供者租户信息，然后单击“批准”。
  ![启用特定 IdP 租户的团队同步且含有批准或取消请求选项的待处理请求](/assets/images/help/teams/approve-team-synchronization.png)

### 为 Okta 启用团队同步

Okta 团队同步要求已为您的组织设置了具有 Okta 的 SAML 和 SCIM。

为避免与 Okta 发生潜在的团队同步错误，我们建议您先确认已为属于所选 Okta 组成员的所有组织成员正确设置了 SCIM 链接身份，然后再在 {% data variables.product.prodname_dotcom %} 上启用团队同步。 

如果组织成员没有链接的 SCIM 身份，则团队同步将无法按预期工作，并且可能不会按预期在团队中添加或删除用户。 如果这些用户中的任何一个缺少 SCIM 链接身份，则需要重新预配它们。

有关预配缺少 SCIM 链接标识的用户的帮助，请参阅“[排除组织的标识和访问管理故障](/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management-for-your-organization)”。

{% data reusables.identity-and-permissions.team-sync-okta-requirements %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.team-sync-confirm-saml %} {% data reusables.identity-and-permissions.team-sync-confirm-scim %}
1. 请考虑在组织中强制实施 SAML，以确保组织成员链接其 SAML 和 SCIM 身份。 有关详细信息，请参阅“[为组织强制实施 SAML 单一登录](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization)”。
{% data reusables.identity-and-permissions.enable-team-sync-okta %}
7. 在组织名称下，输入有效的 SSWS 令牌和 Okta 实例的 URL。
  ![启用团队同步 Okta 组织表单](/assets/images/help/teams/confirm-team-synchronization-okta-organization.png)
6. 查看要与组织连接的标识提供者租户信息，然后单击“创建”。
  ![启用团队同步创建按钮](/assets/images/help/teams/confirm-team-synchronization-okta.png)

## 禁用团队同步

{% data reusables.identity-and-permissions.team-sync-disable %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
5. 在“团队同步”下，单击“禁用团队同步”。
  ![禁用团队同步](/assets/images/help/teams/disable-team-synchronization.png)
