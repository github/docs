---
title: 查看和管理用户对企业的 SAML 访问
intro: 您可以查看和撤销企业成员的链接身份、活动会话和授权凭据。
permissions: Enterprise owners can view and manage a member's SAML access to an organization.
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/viewing-and-managing-a-users-saml-access-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise
versions:
  ghec: '*'
topics:
  - Enterprise
shortTitle: View & manage SAML access
ms.openlocfilehash: 25c706f5aff79f65adf4968546a9a8123794f583
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145098945'
---
## 关于对企业帐户的 SAML 访问

当您为企业帐户启用 SAML 单点登录时，每个企业成员都可以将其身份提供商 (IdP) 上的外部身份链接到 {% data variables.product.product_location %} 上的现有帐户。 {% data reusables.saml.about-saml-access-enterprise-account %}

如果您的企业使用 {% data variables.product.prodname_emus %}，成员将使用通过您的 IdP 预配的帐户。 {% data variables.product.prodname_managed_users_caps %} 将不会在 {% data variables.product.product_name %} 上使用他们现有的用户帐户。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)”。

## 查看和撤销链接的身份

{% data reusables.saml.about-linked-identities %}

如果您的企业使用 {% data variables.product.prodname_emus %}，您将无法从 {% data variables.product.product_name %} 上的企业中取消或删除用户帐户。 您需要对企业的 {% data variables.product.prodname_managed_users %} 进行的任何更改都应该通过您的 IdP 进行。

{% data reusables.identity-and-permissions.revoking-identity-team-sync %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.saml.click-person-revoke-identity %} {% data reusables.saml.saml-identity-linked %} {% data reusables.saml.view-sso-identity %} {% data reusables.saml.revoke-sso-identity %} {% data reusables.saml.confirm-revoke-identity %}

## 查看和撤销活动的 SAML 会话

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.saml.click-person-revoke-session %} {% data reusables.saml.saml-identity-linked %} {% data reusables.saml.view-saml-sessions %} {% data reusables.saml.revoke-saml-session %}

## 查看和撤销授权的凭据

{% data reusables.saml.about-authorized-credentials %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.saml.click-person-revoke-credentials %} {% data reusables.saml.saml-identity-linked %} {% data reusables.saml.view-authorized-credentials %} {% data reusables.saml.revoke-authorized-credentials %} {% data reusables.saml.confirm-revoke-credentials %}

## 延伸阅读

- “[查看和管理成员对组织的 SAML 访问](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)”
