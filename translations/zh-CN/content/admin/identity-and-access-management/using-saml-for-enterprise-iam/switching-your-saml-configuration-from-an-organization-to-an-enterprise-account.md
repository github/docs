---
title: 将你的 SAML 配置从组织切换到企业帐户
intro: 了解将组织级 SAML 配置替换为企业级 SAML 配置的特殊注意事项和最佳做法。
permissions: Enterprise owners can configure SAML single sign-on for an enterprise account.
versions:
  ghec: '*'
topics:
  - Authentication
  - Enterprise
  - Organizations
type: how_to
shortTitle: From organization to enterprise
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account
ms.openlocfilehash: 0fa75185767984db574fc12a9e84404d5da9e002
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145098046'
---
## 关于企业帐户的 SAML 单点登录

{% data reusables.saml.dotcom-saml-explanation %} {% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.switching-from-org-to-enterprise %} 

在组织级别配置 SAML SSO 时，必须在 IdP 中使用唯一的 SSO 租户配置每个组织，这意味着成员将与他们已成功进行身份验证的每个组织的唯一 SAML 标识记录相关联。 如果改为为企业帐户配置 SAML SSO，则每个企业成员将有一个 SAML 标识，该标识用于企业帐户拥有的所有组织。

为企业帐户配置 SAML SSO 后，新配置将覆盖企业帐户拥有组织的任何现有 SAML SSO 配置。

当企业所有者为企业帐户启用 SAML 时，不会通知企业成员。 如果以前在组织级别强制执行 SAML SSO，则直接导航到组织资源时，成员不应看到重大差异。 系统将继续提示成员通过 SAML 进行身份验证。 如果成员通过 IdP 仪表板导航到组织资源，则需要单击企业级应用的新磁贴，而不是组织级应用的旧磁贴。 然后，成员将能够选择要导航到的组织。 

任何以前为组织授权的个人访问令牌 (PAT)、SSH 密钥、{% data variables.product.prodname_oauth_apps %} 和 {% data variables.product.prodname_github_apps %} 将继续获得组织授权。 但是，成员需要向从未授权用于组织的 SAML SSO 的任何 PAT、SSH 密钥、{% data variables.product.prodname_oauth_apps %} 和 {% data variables.product.prodname_github_apps %} 授权。

为企业帐户配置 SAML SSO 时，目前不支持 SCIM 预配。 如果当前对企业帐户拥有的组织使用 SCIM，则切换到企业级配置时，将丢失此功能。

在为企业帐户配置 SAML SSO 之前，无需删除任何组织级 SAML 配置，但建议你考虑将其删除。 如果将来已为企业帐户禁用 SAML，则任何剩余的组织级 SAML 配置都将生效。 删除组织级配置可以防止将来出现意外问题。

## 将你的 SAML 配置从组织切换到企业帐户

1. 为企业帐户强制实施 SAML SSO，确保为所有组织成员分配或授予对用于企业帐户的 IdP 应用的访问权限。 有关详细信息，请参阅“[为企业配置 SAML 单一登录](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)”。
1. （可选）删除企业帐户所拥有组织的任何现有 SAML 配置。 若要帮助你确定是否删除配置，请参阅“[关于企业帐户的 SAML 单一登录](#about-saml-single-sign-on-for-enterprise-accounts)”。
1. 如果保留任何组织级 SAML 配置以防止混淆，请考虑在 IdP 中隐藏组织级应用的磁贴。
1. 为企业成员提供更改建议。
   -  成员将无法再通过单击 IdP 仪表板中组织的 SAML 应用来访问其组织。 他们需要使用为企业帐户配置的新应用。
   - 成员需要授权以前未授权用于其组织的 SAML SSO 的任何 PAT 或 SSH 密钥。 有关详细信息，请参阅“[授权用于 SAML 单一登录的个人访问令牌](/github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)”和“[授权用于 SAML 单一登录的 SSH 密钥](/github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)”。
   - 成员可能需要重新授权以前为组织授权的 {% data variables.product.prodname_oauth_apps %}。 有关详细信息，请参阅“[关于通过 SAML 单一登录进行身份验证](/github/authenticating-to-github/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso)”。
