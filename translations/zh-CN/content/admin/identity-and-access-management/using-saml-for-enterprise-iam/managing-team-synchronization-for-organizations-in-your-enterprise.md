---
title: 管理企业中组织的团队同步
intro: '你可以启用 Azure AD 与 {% data variables.product.product_name %} 之间的团队同步，以允许企业帐户拥有的组织通过 IdP 组管理团队成员身份。'
permissions: Enterprise owners can manage team synchronization for an enterprise account.
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - SSO
  - Teams
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/managing-team-synchronization-for-organizations-in-your-enterprise-account
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise
shortTitle: Manage team synchronization
ms.openlocfilehash: 1e29d70b0b8fcf78a8b03834e9436112634c636f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147076933'
---
{% data reusables.enterprise-accounts.emu-scim-note %}

## 关于企业帐户的团队同步

如果你在企业级别使用 SAML 并将 Azure AD 作为 IdP，你可以为企业帐户启用团队同步，以允许组织所有者和团队维护员将企业帐户拥有的组织中的团队与 IdP 组同步。

{% data reusables.identity-and-permissions.about-team-sync %}

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

{% data reusables.identity-and-permissions.team-sync-disable %}

您也可以配置和管理单个组织的团队同步。 有关详细信息，请参阅[管理组织的团队同步](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)。

{% data reusables.identity-and-permissions.team-sync-usage-limits %}

## 先决条件

您或您的 Azure AD 管理员必须是 Azure AD 中的全局管理员或特权角色管理员。
 
需要使用受支持的 IdP 为企业帐户中的组织实施 SAML 单一登录。 有关详细信息，请参阅“[为企业配置 SAML 单一登录](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)”。

您必须使用 SAML SSO 和支持的 IdP 向企业帐户进行身份验证。 有关详细信息，请参阅“[通过 SAML 单一登录进行身份验证](/articles/authenticating-with-saml-single-sign-on)”。

## 管理 Azure AD 的团队同步

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.team-sync-confirm-saml %} {% data reusables.identity-and-permissions.enable-team-sync-azure %} {% data reusables.identity-and-permissions.team-sync-confirm %}
7. 查看要连接到企业帐户的 IdP 租户的详细信息，然后单击“批准”。
  ![启用特定 IdP 租户的团队同步且含有批准或取消请求选项的待处理请求](/assets/images/help/teams/approve-team-synchronization.png)
8. 要禁用团队同步，请单击“禁用团队同步”。
  ![禁用团队同步](/assets/images/help/teams/disable-team-synchronization.png)
